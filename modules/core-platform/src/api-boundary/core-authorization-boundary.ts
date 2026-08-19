import type { CoreAuthorizationPayload, CoreBoundaryRequest, CoreBoundaryResponse } from "./core-boundary-types.js";
import { createCoreBoundarySuccess, denyCoreBoundaryRequest, requireString, validateBaseRequest } from "./core-boundary-result.js";

export function validateCoreAuthorizationBoundary(
  request: CoreBoundaryRequest<CoreAuthorizationPayload>,
): CoreBoundaryResponse<{ decision: "allow" }> {
  const baseFailure = validateBaseRequest(request);
  if (baseFailure) {
    return baseFailure;
  }

  if (!requireString(request.payload.tenant_id)) {
    return denyCoreBoundaryRequest(request, "CORE_AUTH_TENANT_REQUIRED", "tenant context is required");
  }

  if (!requireString(request.payload.context_id)) {
    return denyCoreBoundaryRequest(request, "CORE_AUTH_CONTEXT_REQUIRED", "context id is required");
  }

  if (!requireString(request.payload.actor_reference)) {
    return denyCoreBoundaryRequest(request, "CORE_AUTH_ACTOR_REQUIRED", "actor reference is required");
  }

  if (!requireString(request.payload.permission_code)) {
    return denyCoreBoundaryRequest(request, "CORE_AUTH_PERMISSION_REQUIRED", "permission code is required");
  }

  if (!requireString(request.payload.audit_reference)) {
    return denyCoreBoundaryRequest(request, "CORE_AUTH_AUDIT_REFERENCE_REQUIRED", "audit reference is required");
  }

  if (request.payload.authorization_decision !== "allow") {
    return denyCoreBoundaryRequest(request, "CORE_AUTH_DECISION_NOT_ALLOWED", "authorization decision must explicitly allow");
  }

  if (request.payload.policy_result !== "allow" || request.payload.permission_result !== "allow") {
    return denyCoreBoundaryRequest(request, "CORE_AUTH_POLICY_DENIED", "policy and permission must explicitly allow");
  }

  return createCoreBoundarySuccess(request, { decision: "allow" }, "allowed");
}
