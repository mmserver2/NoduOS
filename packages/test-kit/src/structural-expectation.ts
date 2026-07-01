export interface StructuralExpectation {
  readonly name: string;
  readonly expected: true;
  readonly reason: string;
}

export const structuralFoundationExpectations: readonly StructuralExpectation[] = [
  {
    name: 'no-commercial-module',
    expected: true,
    reason: 'A fundação estrutural cria somente Core Platform e packages transversais.'
  },
  {
    name: 'no-functional-endpoint',
    expected: true,
    reason: 'Apps são cascas estruturais e não iniciam servidor.'
  },
  {
    name: 'fail-closed',
    expected: true,
    reason: 'Ações críticas sem tenant, contexto, escopo ou autorização devem negar.'
  }
] as const;
