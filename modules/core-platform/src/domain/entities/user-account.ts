import { UserAccountId, ensurePublicId } from '../value-objects/core-identifiers';
import { FailClosedError } from '../errors/core-platform-errors';

export type UserAccountStatus = 'active' | 'suspended' | 'archived';

export interface UserAccountSnapshot {
  readonly userAccountId: UserAccountId;
  readonly emailMasked?: string;
  readonly status: UserAccountStatus;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export class UserAccount {
  private constructor(private snapshot: UserAccountSnapshot) {}

  public static create(input: { readonly userAccountId: string; readonly emailMasked?: string; readonly now?: string }): UserAccount {
    const now = input.now ?? new Date().toISOString();
    return new UserAccount(Object.freeze({
      userAccountId: ensurePublicId<UserAccountId>(input.userAccountId, 'user_account_id'),
      ...(input.emailMasked ? { emailMasked: input.emailMasked } : {}),
      status: 'active',
      createdAt: now,
      updatedAt: now
    }));
  }

  public suspend(now = new Date().toISOString()): UserAccount {
    if (this.snapshot.status === 'archived') throw new FailClosedError('archived UserAccount cannot be suspended.');
    return new UserAccount(Object.freeze({ ...this.snapshot, status: 'suspended', updatedAt: now }));
  }

  public restore(now = new Date().toISOString()): UserAccount {
    if (this.snapshot.status === 'archived') throw new FailClosedError('archived UserAccount cannot be restored.');
    return new UserAccount(Object.freeze({ ...this.snapshot, status: 'active', updatedAt: now }));
  }

  public toSnapshot(): UserAccountSnapshot {
    return this.snapshot;
  }
}
