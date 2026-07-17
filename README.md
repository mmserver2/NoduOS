# NoduOS

SaaS Modular de Gestão de Espaços e Segurança Unificada.

Conceito técnico: Sistema Operacional Modular para Espaços Físicos Conectados.

## Estado desta fundação

Esta fundação é estrutural, não executável em produção.

Ela prepara:

- monorepo;
- packages transversais mínimos;
- esqueleto do Core Platform;
- apps mínimos sem servidor;
- testes estruturais mínimos;
- documentação técnica local da etapa.

## Blindagens

- Não cria banco real.
- Não cria migration real.
- Não cria endpoint funcional.
- Não inicia serviço.
- Não configura PM2.
- Não configura Nginx.
- Não altera firewall.
- Não cria módulo comercial.
- Não cria DEC oficial.
- Não altera documentos centrais oficiais.

## Regra central

Política influencia. Core decide. Módulo dono executa. Auditoria registra.

## Frase guia

Contrato antes de endpoint. Domínio antes de tabela. Autorização antes de ação. Referência antes de payload. Evento antes de read model. Auditoria antes de confiança. LGPD antes de dado bruto. Teste antes de deploy.


---

## Estado Git oficial pré-runtime

A branch Git oficial para continuidade técnica do NoduOS neste momento é:

```text
official/pre-runtime-foundation-v1
```

O `origin/main` remoto está preservado, mas não é referência canônica atual, pois possui histórico divergente anterior.

Estado oficial publicado:

```text
Commit base pré-runtime: 388c96e
Commit completo: 388c96e41ae2bffc5e9eee2e0a2af162cf5c3025
Tag marco: pre-runtime-foundation-v1
DEC aplicada: DEC-198
```

Não usar `origin/main` como base de programação sem decisão específica de reconciliação.


---

## Sincronização raiz DEC-198

```text
Commit DEC-198: e87b8c0
Tag DEC-198: root-git-canonical-branch-dec-198-v1
Branch oficial: official/pre-runtime-foundation-v1
Próxima DEC livre: DEC-199
```
