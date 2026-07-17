# DEC-198 - Política oficial de referência Git canônica pré-runtime

## Tema

Referência Git canônica do NoduOS após divergência detectada entre o repositório local oficial e o `origin/main` remoto.

## Decisão

A partir desta decisão, o estado oficial do NoduOS para continuidade técnica pré-runtime passa a ser a branch remota:

```text
official/pre-runtime-foundation-v1
```

O `origin/main` remoto **não deve ser usado como referência oficial do NoduOS neste momento**, pois contém histórico divergente, sem ancestral comum com a linha local auditada, e preserva conteúdo anterior não consolidado pela raiz atual.

A branch `official/pre-runtime-foundation-v1` passa a ser a referência canônica operacional para:

- retomada técnica antes do Runtime-BLOCK;
- abertura de pull request futuro, se necessário;
- revisão externa do estado auditado;
- continuidade do Runtime-BLOCK técnico mínimo da API;
- eventual reconciliação futura com `main`, desde que autorizada por bloco próprio.

## Base técnica da decisão

Estado local oficial publicado:

```text
Commit: 388c96e
Commit completo: 388c96e41ae2bffc5e9eee2e0a2af162cf5c3025
Branch remota publicada: official/pre-runtime-foundation-v1
Tag marco: pre-runtime-foundation-v1
```

Estado remoto preservado:

```text
origin/main: 73456a1
origin/main completo: 73456a10720852456d074931d964361a3cdcb83a
```

Diagnóstico aplicado:

```text
commits local-only: 7
commits remote-only: 3
merge-base: NONE_UNRELATED_HISTORY
classificação: remote_has_unknown_content_unrelated_history
```

## Motivo

O push para `origin/main` foi recusado porque o repositório remoto já continha histórico próprio. O diagnóstico check-only confirmou que o remoto não era bootstrap trivial e que havia histórico sem ancestral comum.

Para preservar auditabilidade, evitar perda de histórico remoto, evitar sobrescrita destrutiva e manter a raiz como fonte de verdade, a decisão correta foi publicar o estado oficial em branch remota segura, sem pull, merge, rebase ou force push.

## Impacto

1. Todo prompt, payload, auditoria, bloco de programação e referência operacional futura deve tratar `official/pre-runtime-foundation-v1` como branch Git oficial enquanto `origin/main` não for reconciliado por decisão específica.
2. `origin/main` deve permanecer preservado e não pode ser sobrescrito, forçado, mesclado ou usado como base de programação sem bloco próprio de reconciliação.
3. O Runtime-BLOCK técnico mínimo da API deve partir do estado documentado por esta decisão.
4. A tag `pre-runtime-foundation-v1` permanece como marco do estado pré-runtime publicado.
5. Esta DEC não altera arquitetura, domínio, contrato, endpoint, banco, migration, módulo comercial ou deploy.
6. Esta DEC apenas registra governança Git e referência canônica operacional.

## Regra oficial

```text
Enquanto origin/main estiver divergente, a branch oficial do NoduOS é official/pre-runtime-foundation-v1.
origin/main é histórico remoto preservado, não trilho canônico de programação.
Nenhum pull, merge, rebase ou force push sobre origin/main sem decisão e bloco próprios.
```

## Arquivos base atualizados

- `00_BIBLIA_DO_PROJETO.md`
- `03_DECISOES_OFICIAIS.md`
- `04_PROMPTS_DE_TRABALHO.md`
- `13_BLUEPRINT_TECNICO_APLICACAO_NODUOS.md`
- `README.md`
- `docs/decisions/DEC-198_GIT_CANONICAL_BRANCH_PRE_RUNTIME.md`
- `RELATORIO_CONFORMIDADE_RAIZ_NODUOS_DEC_198.md`

## Status

Aprovada.

## Data

2026-07-17.

## Estado da raiz após aplicação

```text
Última DEC consolidada: DEC-198.
Próxima DEC livre: DEC-199.
Próxima etapa recomendada: Runtime-BLOCK técnico mínimo da API, usando official/pre-runtime-foundation-v1 como branch Git oficial.
```
