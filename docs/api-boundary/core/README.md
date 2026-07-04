# API Boundary Interna do Core NoduOS

A API Boundary interna do Core Platform é uma camada estrutural de aplicação para uso interno por código.

Ela existe para transformar os contratos internos do Core em portas internas controladas, sem runtime HTTP, sem endpoint funcional, sem banco, sem migration real, sem worker real, sem deploy e sem domínio comercial.

## Escopo

- Validar requests internos conforme contratos do Core.
- Produzir responses internas padronizadas.
- Aplicar fail-closed em erro crítico.
- Preservar auditoria por referência.
- Trabalhar com ResourceReference, EventEnvelope, SecretReference e EvidenceReference.
- Rejeitar segredo bruto e evidência bruta.
- Expor facades internas para uso futuro pelo Runtime-BLOCK.

## Não escopo

- Não cria servidor HTTP.
- Não cria controller.
- Não cria rota.
- Não acessa banco.
- Não executa domínio comercial.
- Não substitui o módulo dono.
- Não altera current/releases.
