export interface ResourceReferenceV1 {
  readonly resourceReferenceId: string;
  readonly ownerModule: string;
  readonly resourceType: string;
  readonly publicResourceId: string;
  readonly tenantId: string;
  readonly contextId: string;
  readonly scope: string;
  readonly noDomainTransfer: true;
}

export const resourceReferenceRules = {
  pointsWithoutTakingOwnership: true,
  doesNotAuthorizeAction: true,
  doesNotCarryFullPayload: true,
  doesNotExposeInternalPrimaryKey: true,
  noDomainTransfer: true
} as const;
