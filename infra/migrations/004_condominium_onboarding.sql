\set ON_ERROR_STOP on
SET ROLE noduos_owner;

INSERT INTO core.module_entitlements(tenant_id,context_id,module_id,enabled)
SELECT tenant_id,id,'condo.management',true FROM core.contexts
ON CONFLICT (tenant_id,context_id,module_id) DO UPDATE SET enabled=excluded.enabled;

CREATE TABLE IF NOT EXISTS ops.condominiums (
  id uuid PRIMARY KEY,
  tenant_id uuid NOT NULL REFERENCES core.tenants(id),
  context_id uuid NOT NULL,
  module_id text NOT NULL DEFAULT 'condo.management' CHECK (module_id='condo.management'),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 120),
  document text,
  address text,
  city text,
  state text,
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active','inactive')),
  created_by uuid NOT NULL REFERENCES core.users(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  FOREIGN KEY (tenant_id,context_id) REFERENCES core.contexts(tenant_id,id),
  FOREIGN KEY (tenant_id,context_id,module_id) REFERENCES core.module_entitlements(tenant_id,context_id,module_id),
  UNIQUE (tenant_id,context_id,id)
);
CREATE INDEX IF NOT EXISTS condominiums_scope_idx ON ops.condominiums(tenant_id,context_id,created_at DESC);
ALTER TABLE ops.condominiums ENABLE ROW LEVEL SECURITY;
ALTER TABLE ops.condominiums FORCE ROW LEVEL SECURITY;
CREATE POLICY tenant_context_isolation ON ops.condominiums USING (tenant_id::text=current_setting('app.tenant_id',true) AND context_id::text=current_setting('app.context_id',true)) WITH CHECK (tenant_id::text=current_setting('app.tenant_id',true) AND context_id::text=current_setting('app.context_id',true));

ALTER TABLE ops.network_tunnels ADD COLUMN IF NOT EXISTS condominium_id uuid;
ALTER TABLE ops.network_tunnels DROP CONSTRAINT IF EXISTS network_tunnels_condominium_scope_fk;
ALTER TABLE ops.network_tunnels ADD CONSTRAINT network_tunnels_condominium_scope_fk FOREIGN KEY (tenant_id,context_id,condominium_id) REFERENCES ops.condominiums(tenant_id,context_id,id);
CREATE INDEX IF NOT EXISTS network_tunnels_condominium_idx ON ops.network_tunnels(tenant_id,context_id,condominium_id);

ALTER TABLE ops.devices ADD COLUMN IF NOT EXISTS condominium_id uuid;
ALTER TABLE ops.devices ADD COLUMN IF NOT EXISTS ip_address inet;
ALTER TABLE ops.devices ADD COLUMN IF NOT EXISTS vendor text;
ALTER TABLE ops.devices ADD COLUMN IF NOT EXISTS integration_protocol text;
ALTER TABLE ops.devices ADD COLUMN IF NOT EXISTS api_scheme text;
ALTER TABLE ops.devices ADD COLUMN IF NOT EXISTS api_port integer;
ALTER TABLE ops.devices ADD COLUMN IF NOT EXISTS credential_secret_ref text;
ALTER TABLE ops.devices DROP CONSTRAINT IF EXISTS devices_condominium_scope_fk;
ALTER TABLE ops.devices ADD CONSTRAINT devices_condominium_scope_fk FOREIGN KEY (tenant_id,context_id,condominium_id) REFERENCES ops.condominiums(tenant_id,context_id,id);
CREATE UNIQUE INDEX IF NOT EXISTS devices_condominium_ip_idx ON ops.devices(tenant_id,context_id,condominium_id,ip_address) WHERE condominium_id IS NOT NULL AND ip_address IS NOT NULL;

GRANT SELECT,INSERT,UPDATE,DELETE ON ops.condominiums TO noduos_app;
RESET ROLE;
