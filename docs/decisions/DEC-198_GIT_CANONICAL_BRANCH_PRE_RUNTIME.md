# DEC-198 - Política oficial de referência Git canônica pré-runtime

## Tema

Referência Git canônica do NoduOS após divergência detectada entre o repositório local oficial e o `origin/main` remoto.

## Decisão

A partir desta decisão, o estado oficial do NoduOS para continuidade técnica pré-runtime passa a ser a branch remota:

```text
official/pre-runtime-foundation-v1
```

O `origin/main` remoto **não deve ser usado como referência oficial do NoduOS neste momento**, pois contém histórico divergente, sem ancestral comum com a linha local auditada, e preserva conteúdo anterior não consolidado pela raiz atual.

## Base técnica da decisão

```text
Commit base pré-runtime: 388c96e
Commit completo base: 388c96e41ae2bffc5e9eee2e0a2af162cf5c3025
Commit DEC-198: e87b8c0
Commit completo DEC-198: e87b8c060e455bcaebd337ac6f781cf6af58d8d8
Tag DEC-198: root-git-canonical-branch-dec-198-v1
Branch oficial: official/pre-runtime-foundation-v1
origin/main preservado: 73456a10720852456d074931d964361a3cdcb83a
```

## Motivo

O push para `origin/main` foi recusado porque o repositório remoto já continha histórico próprio. O diagnóstico check-only confirmou que o remoto não era bootstrap trivial e que havia histórico sem ancestral comum.

Para preservar auditabilidade, evitar perda de histórico remoto, evitar sobrescrita destrutiva e manter a raiz como fonte de verdade, a decisão correta foi publicar o estado oficial em branch remota segura, sem pull, merge, rebase ou force push.

## Impacto

1. Todo prompt, payload, auditoria, bloco de programação e referência operacional futura deve tratar `official/pre-runtime-foundation-v1` como branch Git oficial enquanto `origin/main` não for reconciliado por decisão específica.
2. `origin/main` deve permanecer preservado e não pode ser sobrescrito, forçado, mesclado ou usado como base de programação sem bloco próprio de reconciliação.
3. O Runtime-BLOCK técnico mínimo da API deve partir do estado documentado por esta decisão.
4. Esta DEC não altera arquitetura, domínio, contrato, endpoint, banco, migration, módulo comercial ou deploy.

## Regra oficial

```text
Enquanto origin/main estiver divergente, a branch oficial do NoduOS é official/pre-runtime-foundation-v1.
origin/main é histórico remoto preservado, não trilho canônico de programação.
Nenhum pull, merge, rebase ou force push sobre origin/main sem decisão e bloco próprios.
```

## Estado da raiz após aplicação

```text
Última DEC consolidada: DEC-198.
Próxima DEC livre: DEC-199.
Próxima etapa recomendada: Runtime-BLOCK técnico mínimo da API, usando official/pre-runtime-foundation-v1 como branch Git oficial.
```
