import type {
  CoreAuditReferencePayload,
  CoreAuthorizationPayload,
  CoreBoundaryRequest,
  CoreContractBoundaryPayload,
  CoreEventEnvelopePayload,
  CoreEvidenceReferencePayload,
  CoreIdempotencyPayload,
  CoreResourceReferencePayload,
  CoreSecretReferencePayload,
  CoreTenantContextPayload,
} from "./core-boundary-types.js";
import { validateCoreAuditBoundary } from "./core-audit-boundary.js";
import { validateCoreAuthorizationBoundary } from "./core-authorization-boundary.js";
import { validateCoreContractBoundary } from "./core-contract-boundary.js";
import { validateCoreEventEnvelopeBoundary } from "./core-event-envelope-boundary.js";
import { validateCoreEvidenceReferenceBoundary } from "./core-evidence-reference-boundary.js";
import { createCoreInMemoryIdempotencyStore, validateCoreIdempotencyBoundary } from "./core-idempotency-boundary.js";
import { validateCoreResourceReferenceBoundary } from "./core-resource-reference-boundary.js";
import { validateCoreSecretReferenceBoundary } from "./core-secret-reference-boundary.js";
import { validateCoreTenantContextBoundary } from "./core-tenant-context-boundary.js";

export interface CoreBoundaryFacade {
  validateAuthorization(request: CoreBoundaryRequest<CoreAuthorizationPayload>): ReturnType<typeof validateCoreAuthorizationBoundary>;
  validateTenantContext(request: CoreBoundaryRequest<CoreTenantContextPayload>): ReturnType<typeof validateCoreTenantContextBoundary>;
  validateResourceReference(request: CoreBoundaryRequest<CoreResourceReferencePayload>): ReturnType<typeof validateCoreResourceReferenceBoundary>;
  validateEventEnvelope(request: CoreBoundaryRequest<CoreEventEnvelopePayload>): ReturnType<typeof validateCoreEventEnvelopeBoundary>;
  validateSecretReference(request: CoreBoundaryRequest<CoreSecretReferencePayload>): ReturnType<typeof validateCoreSecretReferenceBoundary>;
  validateEvidenceReference(request: CoreBoundaryRequest<CoreEvidenceReferencePayload>): ReturnType<typeof validateCoreEvidenceReferenceBoundary>;
  validateAuditReference(request: CoreBoundaryRequest<CoreAuditReferencePayload>): ReturnType<typeof validateCoreAuditBoundary>;
  validateIdempotency(request: CoreBoundaryRequest<CoreIdempotencyPayload>): ReturnType<typeof validateCoreIdempotencyBoundary>;
  validateContract(request: CoreBoundaryRequest<CoreContractBoundaryPayload>): ReturnType<typeof validateCoreContractBoundary>;
}

export function createCoreBoundaryFacade(): CoreBoundaryFacade {
  const idempotencyStore = createCoreInMemoryIdempotencyStore();

  return {
    validateAuthorization: validateCoreAuthorizationBoundary,
    validateTenantContext: validateCoreTenantContextBoundary,
    validateResourceReference: validateCoreResourceReferenceBoundary,
    validateEventEnvelope: validateCoreEventEnvelopeBoundary,
    validateSecretReference: validateCoreSecretReferenceBoundary,
    validateEvidenceReference: validateCoreEvidenceReferenceBoundary,
    validateAuditReference: validateCoreAuditBoundary,
    validateIdempotency(request) {
      return validateCoreIdempotencyBoundary(request, idempotencyStore);
    },
    validateContract: validateCoreContractBoundary,
  };
}
