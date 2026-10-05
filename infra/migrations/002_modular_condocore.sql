\set ON_ERROR_STOP on
SET ROLE noduos_owner;

CREATE TABLE IF NOT EXISTS core.module_entitlements (
  tenant_id uuid NOT NULL REFERENCES core.tenants(id),
  context_id uuid NOT NULL,
  module_id text NOT NULL CHECK (module_id ~ '^[a-z][a-z0-9.]{2,63}$'),
  enabled boolean NOT NULL DEFAULT false,
  configuration jsonb NOT NULL DEFAULT '{}'::jsonb,
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (tenant_id,context_id,module_id),
  FOREIGN KEY (tenant_id,context_id) REFERENCES core.contexts(tenant_id,id)
);

CREATE TABLE IF NOT EXISTS ops.module_records (
  id uuid PRIMARY KEY,
  tenant_id uuid NOT NULL REFERENCES core.tenants(id),
  context_id uuid NOT NULL,
  module_id text NOT NULL,
  resource text NOT NULL CHECK (resource ~ '^[a-z][a-z0-9-]{1,39}$'),
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active','inactive','archived','pending','done')),
  data jsonb NOT NULL CHECK (jsonb_typeof(data)='object'),
  created_by uuid NOT NULL REFERENCES core.users(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  FOREIGN KEY (tenant_id,context_id) REFERENCES core.contexts(tenant_id,id),
  FOREIGN KEY (tenant_id,context_id,module_id) REFERENCES core.module_entitlements(tenant_id,context_id,module_id)
);
CREATE INDEX IF NOT EXISTS module_records_scope_idx ON ops.module_records(tenant_id,context_id,module_id,resource,created_at DESC);

ALTER TABLE core.module_entitlements ENABLE ROW LEVEL SECURITY;
ALTER TABLE core.module_entitlements FORCE ROW LEVEL SECURITY;
ALTER TABLE ops.module_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE ops.module_records FORCE ROW LEVEL SECURITY;
CREATE POLICY tenant_context_isolation ON core.module_entitlements USING (tenant_id::text=current_setting('app.tenant_id',true) AND context_id::text=current_setting('app.context_id',true)) WITH CHECK (tenant_id::text=current_setting('app.tenant_id',true) AND context_id::text=current_setting('app.context_id',true));
CREATE POLICY tenant_context_isolation ON ops.module_records USING (tenant_id::text=current_setting('app.tenant_id',true) AND context_id::text=current_setting('app.context_id',true)) WITH CHECK (tenant_id::text=current_setting('app.tenant_id',true) AND context_id::text=current_setting('app.context_id',true));

GRANT SELECT,INSERT,UPDATE,DELETE ON core.module_entitlements,ops.module_records TO noduos_app;
RESET ROLE;
