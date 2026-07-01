export function structuralAssert(condition: boolean, message: string): void {
  if (!condition) throw new Error('structural_assertion_failed:' + message);
}

export function structuralAssertEqual<TValue>(actual: TValue, expected: TValue, message: string): void {
  if (actual !== expected) throw new Error('structural_assertion_equal_failed:' + message);
}

export function structuralAssertThrows(action: () => unknown, message: string): void {
  let thrown = false;
  try { action(); } catch { thrown = true; }
  if (!thrown) throw new Error('expected_throw:' + message);
}

