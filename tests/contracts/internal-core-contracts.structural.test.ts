import {
  conflictIdempotencyCommand,
  internalCoreContractExamples,
  invalidAuthorizationDecision,
  invalidErrorEnvelope,
  invalidTenantContext,
  replayIdempotencyCommand,
  validAuthorizationDecision,
  validErrorEnvelope,
  validEventEnvelope,
  validEvidenceReference,
  validIdempotencyCommand,
  validResourceReference,
  validSecretReference,
  validTenantContext
} from "../../packages/contracts/src/internal-core-contract-examples.js";

import {
  resolveIdempotencyReplayOrConflict,
  validateAuthorizationDecision,
  validateErrorEnvelope,
  validateEventEnvelope,
  validateEvidenceReference,
  validateIdempotencyCommand,
  validateResourceReference,
  validateSecretReference,
  validateTenantContext
} from "../../packages/contracts/src/internal-core-contract-validators.js";

interface StructuralTestResult {
  name: string;
  passed: boolean;
}

const test = (name: string, passed: boolean): StructuralTestResult => ({ name, passed });

export const internalCoreContractsStructuralTests: readonly StructuralTestResult[] = [
  test("payload valido de AuthorizationDecision", validateAuthorizationDecision(validAuthorizationDecision).ok),
  test("payload invalido de AuthorizationDecision", !validateAuthorizationDecision(invalidAuthorizationDecision).ok),
  test("ResourceReference sem transferencia de dominio", validateResourceReference(validResourceReference).ok && validResourceReference.no_domain_transfer === true),
  test("EventEnvelope com payload minimizado", validateEventEnvelope(validEventEnvelope).ok && validEventEnvelope.payload_minimized === true),
  test("SecretReference sem segredo bruto", validateSecretReference(validSecretReference).ok && validSecretReference.raw_secret_allowed === "never"),
  test("EvidenceReference sem evidencia bruta", validateEvidenceReference(validEvidenceReference).ok && validEvidenceReference.raw_evidence_allowed === false),
  test("TenantContext falha fechado", validateTenantContext(validTenantContext).ok && !validateTenantContext(invalidTenantContext).ok),
  test("TenantContext nao autoriza sozinho", validTenantContext.does_not_authorize === true),
  test("ErrorEnvelope nao vaza dado sensivel", validateErrorEnvelope(validErrorEnvelope).ok && !validateErrorEnvelope(invalidErrorEnvelope).ok),
  test("IdempotencyCommand detecta replay", validateIdempotencyCommand(validIdempotencyCommand).ok && resolveIdempotencyReplayOrConflict(validIdempotencyCommand, replayIdempotencyCommand) === "replay"),
  test("IdempotencyCommand detecta conflito", resolveIdempotencyReplayOrConflict(validIdempotencyCommand, conflictIdempotencyCommand) === "conflict"),
  test("todos os contratos declaram owner_module", internalCoreContractExamples.every((contract) => contract.owner_module === "Core Platform")),
  test("todos os contratos declaram contract_version", internalCoreContractExamples.every((contract) => contract.contract_version === "v1")),
  test("todos os contratos possuem fail_closed_rules", internalCoreContractExamples.every((contract) => contract.fail_closed_rules.length > 0))
];

export const allInternalCoreContractStructuralTestsPass = internalCoreContractsStructuralTests.every((item) => item.passed);

