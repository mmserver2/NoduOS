import { createResourceReference, ResourceReference } from '../../../../../packages/resource-reference/src';

export function registerCoreResourceReference(input: Parameters<typeof createResourceReference>[0]): ResourceReference {
  return createResourceReference(input);
}
