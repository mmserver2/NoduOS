\set ON_ERROR_STOP on
SET ROLE noduos_owner;
INSERT INTO core.module_entitlements(tenant_id,context_id,module_id,enabled)
SELECT tenant_id,id,'condo.network',true FROM core.contexts
ON CONFLICT (tenant_id,context_id,module_id) DO NOTHING;

CREATE TABLE IF NOT EXISTS ops.network_tunnels (
  id uuid PRIMARY KEY,
  tenant_id uuid NOT NULL REFERENCES core.tenants(id),
  context_id uuid NOT NULL,
  module_id text NOT NULL DEFAULT 'condo.network' CHECK (module_id='condo.network'),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  interface_name text NOT NULL CHECK (interface_name ~ '^wg-[A-Za-z0-9_.-]{1,28}$'),
  client_tunnel_address cidr NOT NULL,
  remote_subnet cidr NOT NULL,
  router_ip inet NOT NULL,
  peer_public_key text,
  status text NOT NULL CHECK (status IN ('prepared','active','connected','error','disabled')),
  last_handshake_at timestamptz,
  last_error text,
  created_by uuid NOT NULL REFERENCES core.users(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (client_tunnel_address),
  UNIQUE (tenant_id,context_id,remote_subnet),
  FOREIGN KEY (tenant_id,context_id) REFERENCES core.contexts(tenant_id,id),
  FOREIGN KEY (tenant_id,context_id,module_id) REFERENCES core.module_entitlements(tenant_id,context_id,module_id)
);
CREATE INDEX IF NOT EXISTS network_tunnels_scope_idx ON ops.network_tunnels(tenant_id,context_id,created_at DESC);
ALTER TABLE ops.network_tunnels ENABLE ROW LEVEL SECURITY;
ALTER TABLE ops.network_tunnels FORCE ROW LEVEL SECURITY;
CREATE POLICY tenant_context_isolation ON ops.network_tunnels USING (tenant_id::text=current_setting('app.tenant_id',true) AND context_id::text=current_setting('app.context_id',true)) WITH CHECK (tenant_id::text=current_setting('app.tenant_id',true) AND context_id::text=current_setting('app.context_id',true));
GRANT SELECT,INSERT,UPDATE,DELETE ON ops.network_tunnels TO noduos_app;
RESET ROLE;
