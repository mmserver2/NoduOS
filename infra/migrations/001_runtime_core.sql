\set ON_ERROR_STOP on
SET ROLE noduos_owner;

CREATE SCHEMA IF NOT EXISTS core AUTHORIZATION noduos_owner;
CREATE SCHEMA IF NOT EXISTS ops AUTHORIZATION noduos_owner;

CREATE TABLE IF NOT EXISTS core.tenants (
  id uuid PRIMARY KEY,
  slug text NOT NULL UNIQUE CHECK (slug ~ '^[a-z0-9-]{3,64}$'),
  display_name text NOT NULL CHECK (char_length(display_name) BETWEEN 2 AND 120),
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active','suspended')),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS core.contexts (
  id uuid PRIMARY KEY,
  tenant_id uuid NOT NULL REFERENCES core.tenants(id),
  kind text NOT NULL CHECK (kind IN ('master','partner','organization')),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 120),
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active','suspended')),
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (tenant_id,id)
);

CREATE TABLE IF NOT EXISTS core.users (
  id uuid PRIMARY KEY,
  email text NOT NULL UNIQUE CHECK (email = lower(email)),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 120),
  password_salt text NOT NULL CHECK (char_length(password_salt)=32),
  password_hash text NOT NULL CHECK (char_length(password_hash)=128),
  password_params jsonb NOT NULL,
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active','blocked')),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS core.memberships (
  id uuid PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES core.users(id),
  tenant_id uuid NOT NULL REFERENCES core.tenants(id),
  context_id uuid NOT NULL,
  role text NOT NULL CHECK (role IN ('owner','admin','operator','viewer')),
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active','suspended')),
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id,context_id),
  FOREIGN KEY (tenant_id,context_id) REFERENCES core.contexts(tenant_id,id)
);

CREATE TABLE IF NOT EXISTS core.user_sessions (
  id uuid PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES core.users(id),
  tenant_id uuid NOT NULL REFERENCES core.tenants(id),
  context_id uuid NOT NULL,
  access_token_hash text NOT NULL UNIQUE CHECK (char_length(access_token_hash)=64),
  refresh_token_hash text NOT NULL UNIQUE CHECK (char_length(refresh_token_hash)=64),
  access_expires_at timestamptz NOT NULL,
  refresh_expires_at timestamptz NOT NULL,
  revoked_at timestamptz,
  last_seen_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  FOREIGN KEY (tenant_id,context_id) REFERENCES core.contexts(tenant_id,id)
);
CREATE INDEX IF NOT EXISTS user_sessions_active_access_idx ON core.user_sessions(access_token_hash) WHERE revoked_at IS NULL;
CREATE INDEX IF NOT EXISTS user_sessions_active_refresh_idx ON core.user_sessions(refresh_token_hash) WHERE revoked_at IS NULL;

CREATE TABLE IF NOT EXISTS core.audit_log (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  tenant_id uuid NOT NULL REFERENCES core.tenants(id),
  context_id uuid NOT NULL,
  user_id uuid REFERENCES core.users(id),
  action text NOT NULL,
  resource_type text NOT NULL,
  resource_id text,
  correlation_id uuid NOT NULL,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  FOREIGN KEY (tenant_id,context_id) REFERENCES core.contexts(tenant_id,id)
);
CREATE INDEX IF NOT EXISTS audit_scope_time_idx ON core.audit_log(tenant_id,context_id,created_at DESC);

CREATE TABLE IF NOT EXISTS core.idempotency_keys (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  tenant_id uuid NOT NULL REFERENCES core.tenants(id),
  context_id uuid NOT NULL,
  operation text NOT NULL,
  idempotency_key text NOT NULL,
  created_by uuid NOT NULL REFERENCES core.users(id),
  response_status integer,
  response_body jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  completed_at timestamptz,
  UNIQUE (tenant_id,context_id,operation,idempotency_key),
  FOREIGN KEY (tenant_id,context_id) REFERENCES core.contexts(tenant_id,id)
);

CREATE TABLE IF NOT EXISTS ops.spaces (
  id uuid PRIMARY KEY,
  tenant_id uuid NOT NULL REFERENCES core.tenants(id),
  context_id uuid NOT NULL,
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  status text NOT NULL CHECK (status IN ('active','archived')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  FOREIGN KEY (tenant_id,context_id) REFERENCES core.contexts(tenant_id,id)
);
CREATE INDEX IF NOT EXISTS spaces_scope_idx ON ops.spaces(tenant_id,context_id,created_at DESC);

CREATE TABLE IF NOT EXISTS ops.people (
  id uuid PRIMARY KEY,
  tenant_id uuid NOT NULL REFERENCES core.tenants(id),
  context_id uuid NOT NULL,
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  email text,
  status text NOT NULL CHECK (status IN ('active','inactive')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  FOREIGN KEY (tenant_id,context_id) REFERENCES core.contexts(tenant_id,id)
);
CREATE INDEX IF NOT EXISTS people_scope_idx ON ops.people(tenant_id,context_id,created_at DESC);

CREATE TABLE IF NOT EXISTS ops.devices (
  id uuid PRIMARY KEY,
  tenant_id uuid NOT NULL REFERENCES core.tenants(id),
  context_id uuid NOT NULL,
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  kind text NOT NULL CHECK (char_length(kind) BETWEEN 1 AND 60),
  status text NOT NULL CHECK (status IN ('online','offline','warning')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  FOREIGN KEY (tenant_id,context_id) REFERENCES core.contexts(tenant_id,id)
);
CREATE INDEX IF NOT EXISTS devices_scope_idx ON ops.devices(tenant_id,context_id,created_at DESC);

CREATE TABLE IF NOT EXISTS ops.settings (
  tenant_id uuid NOT NULL REFERENCES core.tenants(id),
  context_id uuid NOT NULL,
  organization_name text NOT NULL CHECK (char_length(organization_name) BETWEEN 2 AND 120),
  primary_color text NOT NULL CHECK (primary_color ~ '^#[0-9A-Fa-f]{6}$'),
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (tenant_id,context_id),
  FOREIGN KEY (tenant_id,context_id) REFERENCES core.contexts(tenant_id,id)
);

DO $policies$
DECLARE target regclass;
BEGIN
  FOREACH target IN ARRAY ARRAY[
    'core.memberships'::regclass,'core.user_sessions'::regclass,'core.audit_log'::regclass,'core.idempotency_keys'::regclass,
    'ops.spaces'::regclass,'ops.people'::regclass,'ops.devices'::regclass,'ops.settings'::regclass
  ] LOOP
    EXECUTE format('ALTER TABLE %s ENABLE ROW LEVEL SECURITY', target);
    EXECUTE format('ALTER TABLE %s FORCE ROW LEVEL SECURITY', target);
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname=split_part(target::text,'.',1) AND tablename=split_part(target::text,'.',2) AND policyname='tenant_context_isolation') THEN
      EXECUTE format('CREATE POLICY tenant_context_isolation ON %s USING (tenant_id::text=current_setting(''app.tenant_id'',true) AND context_id::text=current_setting(''app.context_id'',true)) WITH CHECK (tenant_id::text=current_setting(''app.tenant_id'',true) AND context_id::text=current_setting(''app.context_id'',true))', target);
    END IF;
  END LOOP;
END
$policies$;

CREATE OR REPLACE FUNCTION core.get_login_user(p_email text)
RETURNS TABLE(user_id uuid,email text,user_name text,password_salt text,password_hash text,password_params jsonb)
LANGUAGE sql SECURITY DEFINER STABLE SET search_path=core,pg_temp AS $$
  SELECT id,email,name,password_salt,password_hash,password_params FROM core.users WHERE email=lower(p_email) AND status='active' LIMIT 1
$$;

CREATE OR REPLACE FUNCTION core.bootstrap_status()
RETURNS boolean
LANGUAGE sql SECURITY DEFINER STABLE SET search_path=core,pg_temp AS $$
  SELECT EXISTS(SELECT 1 FROM core.users WHERE status='active')
$$;

CREATE OR REPLACE FUNCTION core.get_login_contexts(p_user_id uuid)
RETURNS TABLE(tenant_id uuid,tenant_name text,context_id uuid,context_name text,role text)
LANGUAGE sql SECURITY DEFINER STABLE SET search_path=core,pg_temp AS $$
  SELECT m.tenant_id,t.display_name,m.context_id,c.name,m.role
  FROM core.memberships m JOIN core.tenants t ON t.id=m.tenant_id JOIN core.contexts c ON c.id=m.context_id AND c.tenant_id=m.tenant_id
  WHERE m.user_id=p_user_id AND m.status='active' AND t.status='active' AND c.status='active' ORDER BY c.created_at
$$;

CREATE OR REPLACE FUNCTION core.get_session(p_token_hash text,p_kind text)
RETURNS TABLE(session_id uuid,user_id uuid,email text,user_name text,tenant_id uuid,tenant_name text,context_id uuid,context_name text,role text)
LANGUAGE sql SECURITY DEFINER STABLE SET search_path=core,pg_temp AS $$
  SELECT s.id,u.id,u.email,u.name,s.tenant_id,t.display_name,s.context_id,c.name,m.role
  FROM core.user_sessions s
  JOIN core.users u ON u.id=s.user_id AND u.status='active'
  JOIN core.tenants t ON t.id=s.tenant_id AND t.status='active'
  JOIN core.contexts c ON c.id=s.context_id AND c.tenant_id=s.tenant_id AND c.status='active'
  JOIN core.memberships m ON m.user_id=s.user_id AND m.context_id=s.context_id AND m.tenant_id=s.tenant_id AND m.status='active'
  WHERE s.revoked_at IS NULL AND ((p_kind='access' AND s.access_token_hash=p_token_hash AND s.access_expires_at>now()) OR (p_kind='refresh' AND s.refresh_token_hash=p_token_hash AND s.refresh_expires_at>now())) LIMIT 1
$$;

REVOKE ALL ON SCHEMA core,ops FROM PUBLIC;
REVOKE ALL ON ALL TABLES IN SCHEMA core,ops FROM PUBLIC;
REVOKE ALL ON ALL FUNCTIONS IN SCHEMA core FROM PUBLIC;
GRANT USAGE ON SCHEMA core,ops TO noduos_app;
GRANT EXECUTE ON FUNCTION core.bootstrap_status(),core.get_login_user(text),core.get_login_contexts(uuid),core.get_session(text,text) TO noduos_app;
GRANT SELECT,INSERT,UPDATE ON core.user_sessions,core.audit_log,core.idempotency_keys TO noduos_app;
GRANT SELECT,INSERT,UPDATE,DELETE ON ops.spaces,ops.people,ops.devices,ops.settings TO noduos_app;
GRANT USAGE,SELECT ON ALL SEQUENCES IN SCHEMA core,ops TO noduos_app;

RESET ROLE;
