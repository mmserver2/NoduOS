# RELATÓRIO DE CONFORMIDADE - RAIZ NODUOS DEC-198

Data: 2026-07-17

## 1. Escopo

Registro formal da DEC-198:

```text
Política oficial de referência Git canônica pré-runtime.
```

## 2. Motivo

Durante o GIT-PUBLISH-BLOCK pré-runtime, o GitHub recusou push em `origin/main` porque o remoto continha histórico próprio.

Diagnóstico check-only confirmou:

```text
local HEAD: 388c96e
origin/main: 73456a1
commits local-only: 7
commits remote-only: 3
merge-base: NONE_UNRELATED_HISTORY
classificação: remote_has_unknown_content_unrelated_history
```

A publicação segura foi concluída em branch remota própria:

```text
official/pre-runtime-foundation-v1
```

## 3. Decisão aplicada

A branch `official/pre-runtime-foundation-v1` passa a ser referência Git canônica pré-runtime do NoduOS.

O `origin/main` fica preservado, mas não deve ser usado como trilho oficial de programação enquanto não houver decisão futura de reconciliação.

## 4. Arquivos atualizados

- `00_BIBLIA_DO_PROJETO.md`
- `03_DECISOES_OFICIAIS.md`
- `04_PROMPTS_DE_TRABALHO.md`
- `13_BLUEPRINT_TECNICO_APLICACAO_NODUOS.md`
- `README.md`
- `docs/decisions/DEC-198_GIT_CANONICAL_BRANCH_PRE_RUNTIME.md`
- `RELATORIO_CONFORMIDADE_RAIZ_NODUOS_DEC_198.md`

## 5. Garantias negativas

- Não cria endpoint.
- Não cria servidor HTTP.
- Não cria banco.
- Não cria migration real.
- Não cria módulo comercial.
- Não cria worker.
- Não cria deploy.
- Não altera PM2.
- Não altera Nginx.
- Não altera firewall.
- Não altera `/opt/noduos/current`.
- Não altera `/opt/noduos/releases`.
- Não altera `origin/main`.
- Não faz pull.
- Não faz merge.
- Não faz rebase.
- Não faz force push.

## 6. Estado da raiz

```text
Última DEC consolidada antes da etapa: DEC-197
DEC consolidada nesta etapa: DEC-198
Última DEC consolidada após aplicação: DEC-198
Próxima DEC livre: DEC-199
Próxima etapa recomendada: Runtime-BLOCK técnico mínimo da API
Branch Git oficial: official/pre-runtime-foundation-v1
```

## 7. Parecer

DEC-198 aprovada e consolidada como decisão de governança Git pré-runtime.

A continuidade técnica do NoduOS deve usar `official/pre-runtime-foundation-v1` até nova decisão formal.
