export type ContractStatus =
  | 'Draft'
  | 'Approved'
  | 'Active'
  | 'Deprecated'
  | 'Superseded'
  | 'Retired'
  | 'Revoked';

export interface PublicContractMetadata {
  readonly contractId: string;
  readonly contractName: string;
  readonly contractType: string;
  readonly contractVersion: 'v1';
  readonly ownerModule: string;
  readonly status: ContractStatus;
  readonly tenantRequired: boolean;
  readonly contextRequired: boolean;
  readonly authorizationDecisionRequired: boolean;
  readonly resourceReferenceRequired: boolean;
  readonly rawSecretAllowed: false;
  readonly rawEvidenceAllowed: false;
  readonly failClosedRequired: boolean;
}
