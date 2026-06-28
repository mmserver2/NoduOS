# Arquivos base oficiais do NoduOS

Este diretório foi criado para armazenar os documentos base oficiais do projeto NoduOS / GetAccess dentro do repositório `mmserver2/NoduOS`.

## Projeto

**Nome:** NoduOS  
**Descrição oficial:** SaaS Modular de Gestão de Espaços e Segurança Unificada  
**Conceito técnico:** Sistema Operacional Modular para Espaços Físicos Conectados  
**Conceito de marca:** Conexão que impulsiona

O NoduOS é uma plataforma modular para gestão de espaços físicos conectados, segurança unificada, operação multi-tenant, autorização centralizada, auditoria, LGPD, eventos, integrações e módulos comerciais isolados por fronteiras fortes.

## Estado oficial da raiz no momento deste registro

- Última DEC consolidada: **DEC-197**.
- Próxima DEC livre: **DEC-198**.
- Documento técnico raiz mais recente: `13_BLUEPRINT_TECNICO_APLICACAO_NODUOS.md`.
- Próxima etapa oficial já iniciada operacionalmente: programação inicial do **Core Platform** orientada pelo Blueprint técnico.
- Core Platform estrutural: instalado, validado na VM NodeOS e versionado no GitHub.

## Regra central

```text
Política influencia.
Core decide.
Módulo dono executa.
Auditoria registra.
```

## Regra de governança

```text
O chat conversa.
O documento manda.
A raiz governa.
O Blueprint organiza.
O código obedece.
```

## Arquivos base esperados neste diretório

Os arquivos oficiais da raiz devem ser mantidos aqui, preferencialmente em formato Markdown puro:

```text
00_BIBLIA_DO_PROJETO.md
01_MAPA_DE_MODULOS.md
02_REGRAS_DE_ARQUITETURA.md
03_DECISOES_OFICIAIS.md
04_PROMPTS_DE_TRABALHO.md
05_CATALOGO_DE_CONTRATOS_PUBLICOS.md
06_MATRIZ_TECNICA_PERMISSOES_POR_CONTRATO.md
07_MATRIZ_TECNICA_DADOS_SENSIVEIS_POR_CONTRATO.md
08_DETALHAMENTO_EVENTENVELOPE_V1.md
09_DETALHAMENTO_EVIDENCEREFERENCE_V1.md
10_DETALHAMENTO_SECRETREFERENCE_V1.md
11_DETALHAMENTO_AUTHORIZATIONDECISION_V1.md
12_DETALHAMENTO_RESOURCEREFERENCE_V1.md
13_BLUEPRINT_TECNICO_APLICACAO_NODUOS.md
IDENTIDADE_OFICIAL_NODUOS.md
RELATORIO_CONFORMIDADE_RAIZ_NODUOS_DEC_197.md
PROMPT_PROGRAMACAO_INICIAL_CORE_PLATFORM_NODUOS.txt
CANVA_FINAL_RELATORIO_PRONTIDAO_TECNICA_CORE_PLATFORM_NODUOS.txt
```

## Função deste diretório

Este diretório não é código executável. Ele serve como fonte documental versionada do projeto.

Ele deve ser usado para:

- preservar a raiz oficial do NoduOS;
- permitir auditoria de decisões;
- orientar programação futura;
- impedir divergência entre conversa, documentos e código;
- registrar DEC, fronteiras, contratos, dados sensíveis, eventos, segredos, evidências, autorização e ResourceReference;
- manter a trilha de governança junto ao código.

## Limites

Este diretório não deve ser usado para:

- guardar segredos;
- guardar tokens;
- guardar `.env` real;
- guardar senha, chave privada ou credencial operacional;
- substituir banco de dados;
- substituir contratos versionados dentro de `packages/`;
- substituir documentação técnica específica de cada módulo em `docs/`.

## Marcos operacionais já validados

- VM Ubuntu NodeOS preparada.
- IP interno fixo: `10.0.0.119`.
- SSH ativo.
- UFW ativo.
- Fail2ban ativo.
- Node.js 22 instalado.
- npm instalado.
- TypeScript/tsx/PM2 instalados.
- Core Platform estrutural instalado em release limpa.
- `/opt/noduos/current` apontando para release validada.
- `npm run verify` executado com sucesso.
- Boundary check aprovado.
- Build aprovado.
- Testes: 6/6 passando.
- GitHub SSH configurado.
- Branch `main` sincronizada com o commit inicial do Core Platform.

## Critério para considerar um arquivo base oficial

Um arquivo base só deve ser tratado como oficial quando:

1. estiver alinhado com a última DEC consolidada;
2. não contradisser documentos raiz mais recentes;
3. não criar módulo, endpoint ou regra fora de contrato;
4. não violar AuthorizationDecision, ResourceReference, EventEnvelope, EvidenceReference ou SecretReference;
5. preservar LGPD, auditoria, idempotência e fail-closed;
6. estiver versionado no Git;
7. estiver registrado nesta pasta ou referenciado por ela.

## Frase guia

```text
Contrato antes de endpoint.
Domínio antes de tabela.
Autorização antes de ação.
Referência antes de payload.
Evento antes de read model.
Auditoria antes de confiança.
LGPD antes de dado bruto.
Teste antes de deploy.
```
