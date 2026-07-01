# CANVA FINAL - MATRIZ TÉCNICA DE DADOS SENSÍVEIS POR CONTRATO NODUOS

Projeto: NoduOS  
Descrição oficial: SaaS Modular de Gestão de Espaços e Segurança Unificada  
Conceito técnico: Sistema Operacional Modular para Espaços Físicos Conectados  
Conceito de marca: Conexão que impulsiona  
Tipo de documento: Matriz técnica conceitual de dados sensíveis por contrato público  
Versão do documento: 1.5.0
Versão base dos contratos: v1  
Data desta consolidação: 2026-06-27  
Status: Aprovada e atualizada com Blueprint Técnico da Aplicação e DEC-197
Última DEC consolidada na raiz: DEC-197  
Próxima DEC livre: DEC-198

Frase guia:

Dado sensível exige finalidade. Contrato limita payload. Segurança protege. Core autoriza. Auditoria evidencia.

Regra central:

Política influencia. Core decide. Módulo dono executa. Auditoria registra.

## 1. Objetivo da Matriz Técnica de Dados Sensíveis por Contrato

Transformar o Catálogo de Contratos Públicos e a Matriz Técnica de Permissões por Contrato em uma governança de payload sensível. A matriz define o que cada contrato pode carregar, o que deve ser referência, o que deve ser mascarado, o que exige finalidade, consentimento, política LGPD, AuthorizationDecision, auditoria, retenção, descarte e bloqueio fail-closed. Ela não cria banco, schema, endpoint, tela, implementação ou módulo novo.

## 2. Escopo desta versão

Cobre 292 contratos mapeados na matriz de permissões, incluindo contratos transversais e contratos públicos dos 25 módulos oficiais. A cobertura é conceitual e prepara o terreno para modelagem técnica futura sem antecipar implementação.

## 3. Fontes oficiais consideradas

- `00_BIBLIA_DO_PROJETO.md`
- `01_MAPA_DE_MODULOS.md`
- `02_REGRAS_DE_ARQUITETURA.md`
- `03_DECISOES_OFICIAIS.md`
- `04_PROMPTS_DE_TRABALHO.md`
- `05_CATALOGO_DE_CONTRATOS_PUBLICOS.md`
- `06_MATRIZ_TECNICA_PERMISSOES_POR_CONTRATO.md`
- `IDENTIDADE_OFICIAL_NODUOS.md`
- `RELATORIO_GERAL_CONSOLIDACAO_ARQUITETURA_NODUOS.txt`
- `CANVA_FINAL_MATRIZ_TECNICA_PERMISSOES_POR_CONTRATO_NODUOS_FINAL.md`

## 4. Estado atual da raiz após segunda checagem

- Todos os módulos principais continuam aprovados e preservados em suas fronteiras.
- Catálogo de Contratos Públicos permanece como documento técnico raiz complementar.
- Matriz Técnica de Permissões por Contrato permanece como documento técnico raiz complementar.
- DEC-189 e DEC-190 continuam aprovadas e consolidadas.
- DEC-191 foi aplicada e consolidada como decisão aprovada da Matriz Técnica de Dados Sensíveis por Contrato.
- Última DEC consolidada na raiz: DEC-192.
- Próxima DEC livre: DEC-195.
- Arquivo raiz oficial desta matriz: `07_MATRIZ_TECNICA_DADOS_SENSIVEIS_POR_CONTRATO.md`.

## 4.1 Segunda checagem contra os arquivos base

Arquivos conferidos nesta revisão:

- `00_BIBLIA_DO_PROJETO.md`
- `01_MAPA_DE_MODULOS.md`
- `02_REGRAS_DE_ARQUITETURA.md`
- `03_DECISOES_OFICIAIS.md`
- `04_PROMPTS_DE_TRABALHO.md`
- `05_CATALOGO_DE_CONTRATOS_PUBLICOS.md`
- `06_MATRIZ_TECNICA_PERMISSOES_POR_CONTRATO.md`
- `IDENTIDADE_OFICIAL_NODUOS.md`
- `README_PACOTE_FINAL_NODUOS_MATRIZ_TECNICA_PERMISSOES_RAIZ.md.txt`
- `CANVA_FINAL_MATRIZ_TECNICA_PERMISSOES_POR_CONTRATO_NODUOS_FINAL.md`
- `RELATORIO_GERAL_CONSOLIDACAO_ARQUITETURA_NODUOS.txt`
- `CANVA_FINAL_PLANEJAMENTO_GERAL_NODUOS.md.txt`

Resultado da conferência:

- A matriz de dados sensíveis cobre todos os 292 contratos da Matriz Técnica de Permissões por Contrato.
- Nenhum `contract_id` oficial da Matriz Técnica de Permissões por Contrato ficou ausente nesta matriz.
- A sequência decisória foi corrigida: DEC-191 aplicada nesta etapa e próxima DEC livre ajustada para DEC-192.
- O status foi corrigido de “Aprovada com ajustes antes de consolidação na raiz” para “Aprovada e consolidada para atualização da raiz”.
- As regras de EventEnvelope, ResourceReference, SecretReference, EvidenceReference, AuthorizationDecision, Segurança e LGPD, auditoria, retenção, mascaramento, idempotência e fail-closed permanecem alinhadas com a raiz.
- Os IDs `NODUOS.CORE.AUTH_DECISION.v1`, `NODUOS.ACCESS.EVENT.v1` e `NODUOS.CAMERA.EVIDENCE_REFERENCE.v1` aparecem no Catálogo como exemplos de convenção, não como contratos oficiais da matriz 06. Os contratos oficiais equivalentes nesta matriz usam a nomenclatura consolidada: `NODUOS.CORE.AUTHORIZATION_DECISION.v1`, `NODUOS.ACCESS.ACCESS_EVENT.v1` e `NODUOS.CAMERA.CAMERA_EVIDENCE_REFERENCE.v1`. Não há bloqueio, mas recomenda-se evitar exemplos ambíguos em revisão futura do catálogo.

## 4.2 Divergências corrigidas nesta versão

| Item | Situação anterior | Correção aplicada |
|---|---|---|
| Status do documento | Aprovada com ajustes | Aprovada e consolidada para atualização da raiz |
| DEC-191 | Rascunho para aprovação | Decisão aplicada como Aprovada nesta versão |
| Próxima DEC livre | DEC-191 | DEC-192 |
| Riscos | Listados como riscos encontrados | Convertidos em riscos tratados com regra obrigatória |
| Catálogo | Metadados sensíveis apenas recomendados | Metadados sensíveis definidos como atualização obrigatória de governança |
| Matriz 06 | Referência cruzada apenas recomendada | Referência cruzada definida como atualização obrigatória |
| Lacunas | Podiam parecer bloqueios | Reclassificadas como pendências controladas sem bloqueio de consolidação |

## 5. Regras globais de dados sensíveis

- Todo dado sensível deve ter owner_module, finalidade, classificação, política LGPD, política de retenção e política de mascaramento quando aplicável.
- Contrato não é atalho para banco interno, classe interna, domínio alheio ou bypass de autorização.
- Read model não é banco compartilhado.
- Evento não é comando.
- Comando não é prova de execução.
- Exportação sensível exige finalidade, motivo, autorização, política, retenção, máscara, auditoria e, quando aplicável, aprovação.
- Segredo bruto nunca trafega.
- Biometria bruta nunca trafega.
- Vídeo, imagem, documento e evidência só trafegam brutos quando política específica permitir e referência segura não bastar.
- Ausência de tenant, contexto, ator, recurso, finalidade, política ou AuthorizationDecision bloqueia contrato sensível ou crítico.

## 6. Classificação oficial de sensibilidade

| Nível | Critério | Exemplo |
|---|---|---|
| Público | Não expõe pessoa, contexto privado, operação, recurso físico, segurança ou decisão sensível | metadado público controlado |
| Interno | Dado técnico entre módulos sem exposição relevante | paginação, ordenação, erro mascarado |
| Restrito | Exige tenant, contexto, escopo, perfil ou ResourceReference | read model operacional, referência estrutural |
| Sensível | Dado pessoal, financeiro, imagem, vídeo, visitante, ticket, reserva, suporte, log, documento, localização, política ou histórico contextual | PersonProfile, Invoice, CameraAccess, AuditQuery |
| Crítico | Segredo, credencial, token, chave, biometria, evidência, suporte remoto, exportação, vídeo sensível, acesso físico, comando crítico, política de segurança, conector externo ou webhook externo | SecretReference, OpenAccess, Export, RemoteSession |

## 7. Categorias oficiais de dados

Identidade técnica; Identidade pessoal; Conta de usuário; Contato; Documento pessoal; Perfil pessoal; Perfil de cliente; Vínculo com organização; Vínculo com unidade, bloco, área ou ambiente; Credencial física; Biometria; Consentimento; Visitante; Convite; QR temporário; Acesso físico; Evento de acesso; Câmera; Stream; Snapshot; Clip; Evidência de vídeo; Alarme; Pânico; Evento crítico; Financeiro; Pagamento; Cobrança; Recibo; Reserva; Ticket; Anexo; Mural; Notificação; Automação; Gateway; Dispositivo; Diagnóstico técnico; IP interno; Rota local; Túnel; Integração externa; Webhook externo; Segredo; Certificado; Domínio customizado; White-label asset; BI e analytics; Exportação; Auditoria; Compliance; Cadeia de custódia; Política de segurança; Política de privacidade; Retenção; Mascaramento; Solicitação do titular; Suporte remoto; Incidente de serviço; Logs técnicos

## 8. Regras de minimização

Cada contrato deve carregar apenas o mínimo necessário para sua função pública. Identificadores internos devem virar referências públicas. Dados compostos devem virar ResourceReference, EvidenceReference, SecretReference ou read model autorizado com máscara.

## 9. Regras de mascaramento

Máscara obrigatória para CPF/documento, e-mail, telefone, placa, identificador pessoal, unidade vinculada, visitante, financeiro, QR, logs sensíveis, IP interno, domínio, certificado, evidência, BI e exportação sensível. Master, Parceiro, Operador/Gestor e Cliente recebem níveis diferentes de visibilidade.

## 10. Regras de consentimento

Consentimento ou base legal/política equivalente é obrigatório para biometria, imagem identificável, vídeo com pessoa, visitante, QR temporário, documentos pessoais, contato, notificações opt-in/opt-out, dados de dependente, suporte remoto e tratamento avançado de dados pessoais.

## 11. Regras de finalidade

Finalidade explícita é obrigatória para contrato sensível ou crítico. Finalidade genérica não autoriza exportação, BI identificável, visualização de evidência, suporte remoto, webhook externo, conector externo ou acesso a logs sensíveis.

## 12. Regras de retenção

Retenção deve ser mínima e vinculada a finalidade. Financeiro, auditoria, evidência, cadeia de custódia, segurança, incidente, suporte remoto e logs técnicos exigem política própria. Dados temporários como QR, convite, snapshot operacional e sessão remota devem expirar.

## 13. Regras de descarte, expurgo e anonimização

Dado temporário deve ser descartado após finalidade. Dado pessoal deve permitir anonimização ou expurgo conforme política, base legal e obrigação de retenção. Evidência e auditoria respeitam cadeia de custódia e não podem ser apagadas fora de política formal.

## 14. Regras de EvidenceReference

Evidência deve trafegar por EvidenceReference com owner_module, custody_owner, fonte, recurso, ator, tenant, contexto, tipo, sensibilidade, storage_reference segura, hash quando aplicável, retenção, máscara, cadeia de custódia, auditoria e política de exportação. Vídeo, snapshot, clip e anexo probatório não devem trafegar brutos quando referência bastar.

## 15. Regras de SecretReference

Segredo deve trafegar apenas por SecretReference. Chave, token, senha, certificado, credencial de gateway, credencial de dispositivo, credencial de conector, assinatura de webhook e segredo de provedor nunca entram em payload bruto, evento, log, URL, exportação ou read model.

## 16. Regras de ResourceReference

ResourceReference é obrigatório sempre que o contrato apontar para recurso de outro módulo, recurso físico, pessoa, unidade, câmera, acesso, dispositivo, gateway, ticket, reserva, visitante, documento, evidência ou política sem transferir domínio.

## 17. Regras de AuthorizationDecision para dados sensíveis

AuthorizationDecision do Core é obrigatório para visualização sensível, exportação, alteração crítica, ação física, vídeo, evidência, biometria, documento, financeiro, visitante, suporte remoto, conector, webhook externo, segredo, política de segurança, auditoria sensível e BI identificável.

## 18. Regras de auditoria de visualização

Visualização sensível deve registrar actor_reference, tenant, context, resource_reference, finalidade, política, decisão, data/hora, escopo, máscara aplicada e correlation_id. Auditoria registra a trilha, não executa regra de módulo dono.

## 19. Regras de auditoria de exportação

Exportação sensível exige audit trail específico com finalidade, aprovador quando aplicável, filtros, dados incluídos, máscara aplicada, destino, retenção, expiração, hash do pacote quando aplicável e política de descarte.

## 20. Regras de fail-closed para dados sensíveis

Contrato sensível ou crítico sem tenant, context, actor_reference, resource_reference quando aplicável, policy_reference, finalidade, retenção, máscara ou AuthorizationDecision deve negar, pausar ou quarentenar. Falha de política de terceiro, webhook, conector ou segredo bloqueia operação sensível.

## 21. Matriz de dados sensíveis dos contratos transversais

| Contract ID | Tipo | Owner | Permission code | Dados permitidos | Dados proibidos | Referência obrigatória | Máscara | Consentimento | Finalidade | Retenção | AuthorizationDecision | Auditoria | Sensibilidade | Fail-closed | Observação anti-exposição |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.TRANSVERSAL.EVENT_ENVELOPE.v1 | Contrato transversal | Transversal | contract.event_envelope.read | metadados mínimos do contrato principal; referências; política aplicável; correlação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; payload completo de execução | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Herdada do contrato principal | Condicional | Interno | Degradação segura ou negação por escopo | não usar evento como comando ou prova de autorização nova |
| NODUOS.TRANSVERSAL.ERROR.v1 | Contrato transversal | Transversal | contract.error.read | metadados mínimos do contrato principal; referências; política aplicável; correlação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Herdada do contrato principal | Condicional | Interno | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.TRANSVERSAL.PAGINATION.v1 | Contrato transversal | Transversal | contract.pagination.read | metadados mínimos do contrato principal; referências; política aplicável; correlação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Herdada do contrato principal | Condicional | Interno | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.TRANSVERSAL.FILTER.v1 | Contrato transversal | Transversal | contract.filter.read | metadados mínimos do contrato principal; referências; política aplicável; correlação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Herdada do contrato principal | Condicional | Interno | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.TRANSVERSAL.SORT.v1 | Contrato transversal | Transversal | contract.sort.read | metadados mínimos do contrato principal; referências; política aplicável; correlação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Herdada do contrato principal | Condicional | Interno | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.TRANSVERSAL.ACTOR_REFERENCE.v1 | Contrato transversal | Transversal | contract.actor_reference.read | metadados mínimos do contrato principal; referências; política aplicável; correlação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Herdada do contrato principal | Condicional | Interno | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.TRANSVERSAL.TENANT_CONTEXT.v1 | Contrato transversal | Transversal | contract.tenant_context.read | metadados mínimos do contrato principal; referências; política aplicável; correlação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Herdada do contrato principal | Condicional | Interno | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.TRANSVERSAL.AUTHORIZATION_DECISION.v1 | Contrato de autorização | Transversal | contract.authorization_decision.read | metadados mínimos do contrato principal; referências; política aplicável; correlação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.TRANSVERSAL.RESOURCE_REFERENCE.v1 | Contrato de autorização | Transversal | contract.resource_reference.read | metadados mínimos do contrato principal; referências; política aplicável; correlação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.TRANSVERSAL.SECRET_REFERENCE.v1 | Contrato de segurança e LGPD | Transversal | contract.secret_reference.read | metadados mínimos do contrato principal; referências; política aplicável; correlação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference, SecretReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | usar SecretReference, nunca bruto |
| NODUOS.TRANSVERSAL.FILE_ATTACHMENT_REFERENCE.v1 | Contrato de autorização | Transversal | contract.file_attachment_reference.read | metadados mínimos do contrato principal; referências; política aplicável; correlação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Herdada do contrato principal | Condicional | Interno | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.TRANSVERSAL.EVIDENCE_REFERENCE.v1 | Contrato de evidência | Transversal | contract.evidence_reference.read | metadados mínimos do contrato principal; referências; política aplicável; correlação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção específica legal/operacional | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preferir EvidenceReference a bruto |
| NODUOS.TRANSVERSAL.AUDIT_TRAIL_REFERENCE.v1 | Contrato de auditoria | Transversal | contract.audit_trail_reference.read | metadados mínimos do contrato principal; referências; política aplicável; correlação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção específica legal/operacional | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.TRANSVERSAL.DATA_SENSITIVITY.v1 | Contrato de segurança e LGPD | Transversal | contract.data_sensitivity.read | metadados mínimos do contrato principal; referências; política aplicável; correlação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.TRANSVERSAL.RETENTION_POLICY_REFERENCE.v1 | Contrato de segurança e LGPD | Transversal | contract.retention_policy_reference.read | metadados mínimos do contrato principal; referências; política aplicável; correlação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.TRANSVERSAL.MASKING_POLICY_REFERENCE.v1 | Contrato de segurança e LGPD | Transversal | contract.masking_policy_reference.read | metadados mínimos do contrato principal; referências; política aplicável; correlação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.TRANSVERSAL.IDEMPOTENCY.v1 | Contrato transversal | Transversal | contract.idempotency.read | metadados mínimos do contrato principal; referências; política aplicável; correlação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Herdada do contrato principal | Condicional | Interno | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.TRANSVERSAL.CORRELATION.v1 | Contrato transversal | Transversal | contract.correlation.read | metadados mínimos do contrato principal; referências; política aplicável; correlação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Herdada do contrato principal | Condicional | Interno | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.TRANSVERSAL.DEAD_LETTER.v1 | Contrato transversal | Transversal | contract.dead_letter.read | metadados mínimos do contrato principal; referências; política aplicável; correlação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Herdada do contrato principal | Condicional | Interno | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.TRANSVERSAL.CONTRACT_DEPRECATION_POLICY.v1 | Contrato transversal | Transversal | contract.contract_deprecation_policy.read | metadados mínimos do contrato principal; referências; política aplicável; correlação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Herdada do contrato principal | Condicional | Interno | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |

## 22. Matriz de dados sensíveis dos contratos do Core Platform

| Contract ID | Tipo | Owner | Permission code | Dados permitidos | Dados proibidos | Referência obrigatória | Máscara | Consentimento | Finalidade | Retenção | AuthorizationDecision | Auditoria | Sensibilidade | Fail-closed | Observação anti-exposição |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.CORE.CORE_AUTHORIZATION.v1 | API interna | Core Platform | core.core_authorization.read_or_manage | Conta de usuário; Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.CORE.AUTHORIZATION_DECISION.v1 | API interna | Core Platform | core.authorization_decision.read_or_manage | Conta de usuário; Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.CORE.RESOURCE_REFERENCE.v1 | Contrato de autorização | Core Platform | core.resource_reference.read | Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.CORE.CONTEXT.v1 | API interna | Core Platform | core.context.read_or_manage | Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.CORE.TENANT.v1 | API interna | Core Platform | core.tenant.read_or_manage | Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.CORE.USER_ACCOUNT_REFERENCE.v1 | Contrato de autorização | Core Platform | core.user_account_reference.read | Conta de usuário; Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.CORE.PERMISSION_GRANT.v1 | API interna | Core Platform | core.permission_grant.read_or_manage | Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.CORE.INHERITANCE_GRANT.v1 | API interna | Core Platform | core.inheritance_grant.read_or_manage | Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.CORE.MODULE_REGISTRY.v1 | API interna | Core Platform | core.module_registry.read_or_manage | Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.CORE.LICENSE_ENTITLEMENT.v1 | API interna | Core Platform | core.license_entitlement.read_or_manage | Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.CORE.FEATURE_FLAG.v1 | API interna | Core Platform | core.feature_flag.read_or_manage | Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.CORE.EVENT_ENVELOPE.v1 | Evento de fato ocorrido | Core Platform | core.event.consume_or_publish | Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; payload completo de execução | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Herdada do contrato principal | Condicional | Interno | Degradação segura ou negação por escopo | não usar evento como comando ou prova de autorização nova |
| NODUOS.CORE.CORE_AUDIT_TRAIL.v1 | Contrato de auditoria | Core Platform | core.core_audit_trail.read | Auditoria | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção específica legal/operacional | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.CORE.CORE_SECURITY_LOG.v1 | Contrato de segurança e LGPD | Core Platform | core.core_security_log.read | Política de segurança; Política de privacidade | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.CORE.CORE_API_CLIENT.v1 | API interna | Core Platform | core.core_api_client.read_or_manage | Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |

## 23. Matriz de dados sensíveis dos contratos do Master

| Contract ID | Tipo | Owner | Permission code | Dados permitidos | Dados proibidos | Referência obrigatória | Máscara | Consentimento | Finalidade | Retenção | AuthorizationDecision | Auditoria | Sensibilidade | Fail-closed | Observação anti-exposição |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.MASTER.MASTER_PARTNER_GOVERNANCE.v1 | API interna | Master | master.master_partner_governance.read_or_manage | Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.MASTER.MASTER_MODULE_RELEASE_POLICY.v1 | Contrato de política | Master | master.master_module_release_policy.manage | Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.MASTER.MASTER_COMMERCIAL_PLAN_POLICY.v1 | Contrato de política | Master | master.master_commercial_plan_policy.manage | Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.MASTER.MASTER_LICENSE_LIMIT_POLICY.v1 | Contrato de política | Master | master.master_license_limit_policy.manage | Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.MASTER.MASTER_WHITE_LABEL_GOVERNANCE.v1 | API interna | Master | master.master_white_label_governance.read_or_manage | Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.MASTER.MASTER_MARKETPLACE_GOVERNANCE.v1 | API interna | Master | master.master_marketplace_governance.read_or_manage | Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.MASTER.MASTER_INTEGRATION_GOVERNANCE.v1 | API interna | Master | master.master_integration_governance.read_or_manage | Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.MASTER.MASTER_GLOBAL_OVERVIEW_READ_MODEL.v1 | Read model autorizado | Master | master.master_global_overview.read | Identidade técnica; BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, quando exibir identificador | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção padrão do domínio | Sim | Visualização quando sensível | Restrito | Degradação segura ou negação por escopo | não usar como banco compartilhado |
| NODUOS.MASTER.MASTER_SENSITIVE_EXPORT_REQUEST.v1 | Comando | Master | master.master_sensitive_export_request.request | Identidade técnica; Exportação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | não tratar solicitação como execução |

## 24. Matriz de dados sensíveis dos contratos de Parceiros

| Contract ID | Tipo | Owner | Permission code | Dados permitidos | Dados proibidos | Referência obrigatória | Máscara | Consentimento | Finalidade | Retenção | AuthorizationDecision | Auditoria | Sensibilidade | Fail-closed | Observação anti-exposição |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.PARTNER.PARTNER_RECORD.v1 | API interna | Parceiros | partner.partner_record.read_or_manage | Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.PARTNER.PARTNER_PROFILE.v1 | API interna | Parceiros | partner.partner_profile.read_or_manage | Identidade técnica; Contato; Identidade pessoal | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.PARTNER.PARTNER_SCOPE.v1 | API interna | Parceiros | partner.partner_scope.read_or_manage | Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.PARTNER.PARTNER_ORGANIZATION_PORTFOLIO_READ_MODEL.v1 | Read model autorizado | Parceiros | partner.partner_organization_portfolio.read | Identidade técnica; BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, quando exibir identificador | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção padrão do domínio | Sim | Visualização quando sensível | Restrito | Degradação segura ou negação por escopo | não usar como banco compartilhado |
| NODUOS.PARTNER.PARTNER_DEPLOYMENT_OVERVIEW_READ_MODEL.v1 | Read model autorizado | Parceiros | partner.partner_deployment_overview.read | Identidade técnica; BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, quando exibir identificador | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção padrão do domínio | Sim | Visualização quando sensível | Restrito | Degradação segura ou negação por escopo | não usar como banco compartilhado |
| NODUOS.PARTNER.PARTNER_GATEWAY_REGISTRATION_REQUEST.v1 | Comando | Parceiros | partner.partner_gateway_registration_request.request | Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | não tratar solicitação como execução |
| NODUOS.PARTNER.PARTNER_DEVICE_REGISTRATION_REQUEST.v1 | Comando | Parceiros | partner.partner_device_registration_request.request | Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | não tratar solicitação como execução |
| NODUOS.PARTNER.PARTNER_MODULE_AVAILABILITY_READ_MODEL.v1 | Read model autorizado | Parceiros | partner.partner_module_availability.read | Identidade técnica; BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, quando exibir identificador | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção padrão do domínio | Sim | Visualização quando sensível | Restrito | Degradação segura ou negação por escopo | não usar como banco compartilhado |
| NODUOS.PARTNER.PARTNER_PLAN_VIEW_READ_MODEL.v1 | Read model autorizado | Parceiros | partner.partner_plan_view.read | Identidade técnica; BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, quando exibir identificador | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção padrão do domínio | Sim | Visualização quando sensível | Restrito | Degradação segura ou negação por escopo | não usar como banco compartilhado |
| NODUOS.PARTNER.PARTNER_LICENSE_VIEW_READ_MODEL.v1 | Read model autorizado | Parceiros | partner.partner_license_view.read | Identidade técnica; BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, quando exibir identificador | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção padrão do domínio | Sim | Visualização quando sensível | Restrito | Degradação segura ou negação por escopo | não usar como banco compartilhado |
| NODUOS.PARTNER.PARTNER_WHITE_LABEL_PERMISSION_READ_MODEL.v1 | Read model autorizado | Parceiros | partner.partner_white_label_permission.read | Identidade técnica; BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, quando exibir identificador | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção padrão do domínio | Sim | Visualização quando sensível | Restrito | Degradação segura ou negação por escopo | não usar como banco compartilhado |

## 25. Matriz de dados sensíveis dos contratos de Organizações

| Contract ID | Tipo | Owner | Permission code | Dados permitidos | Dados proibidos | Referência obrigatória | Máscara | Consentimento | Finalidade | Retenção | AuthorizationDecision | Auditoria | Sensibilidade | Fail-closed | Observação anti-exposição |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.ORG.ORGANIZATION_RECORD.v1 | API interna | Organizações | organization.organization_record.read_or_manage | Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.ORG.ORGANIZATION_PROFILE.v1 | API interna | Organizações | organization.organization_profile.read_or_manage | Identidade técnica; Contato; Identidade pessoal | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.ORG.ORGANIZATION_SETTINGS.v1 | API interna | Organizações | organization.organization_settings.read_or_manage | Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.ORG.ORGANIZATION_STATUS.v1 | Evento de fato ocorrido ou API interna | Organizações | organization.event.consume_or_publish | Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.ORG.ORGANIZATION_REFERENCE.v1 | Contrato de autorização | Organizações | organization.organization_reference.read | Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.ORG.ORGANIZATION_MODULE_AVAILABILITY_READ_MODEL.v1 | Read model autorizado | Organizações | organization.organization_module_availability.read | Identidade técnica; BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, quando exibir identificador | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção padrão do domínio | Sim | Visualização quando sensível | Restrito | Degradação segura ou negação por escopo | não usar como banco compartilhado |
| NODUOS.ORG.ORGANIZATION_STRUCTURE_SUMMARY_READ_MODEL.v1 | Read model autorizado | Organizações | organization.organization_structure_summary.read | Identidade técnica; BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, quando exibir identificador | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção padrão do domínio | Sim | Visualização quando sensível | Restrito | Degradação segura ou negação por escopo | não usar como banco compartilhado |
| NODUOS.ORG.ORGANIZATION_PEOPLE_SUMMARY_READ_MODEL.v1 | Read model autorizado | Organizações | organization.organization_people_summary.read | Identidade técnica; Contato; Identidade pessoal; BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | não usar como banco compartilhado |
| NODUOS.ORG.ORGANIZATION_GATEWAY_SUMMARY_READ_MODEL.v1 | Read model autorizado | Organizações | organization.organization_gateway_summary.read | Identidade técnica; BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, quando exibir identificador | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção padrão do domínio | Sim | Visualização quando sensível | Restrito | Degradação segura ou negação por escopo | não usar como banco compartilhado |
| NODUOS.ORG.ORGANIZATION_DEVICE_SUMMARY_READ_MODEL.v1 | Read model autorizado | Organizações | organization.organization_device_summary.read | Identidade técnica; BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, quando exibir identificador | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção padrão do domínio | Sim | Visualização quando sensível | Restrito | Degradação segura ou negação por escopo | não usar como banco compartilhado |

## 26. Matriz de dados sensíveis dos contratos de Pessoas e Clientes

| Contract ID | Tipo | Owner | Permission code | Dados permitidos | Dados proibidos | Referência obrigatória | Máscara | Consentimento | Finalidade | Retenção | AuthorizationDecision | Auditoria | Sensibilidade | Fail-closed | Observação anti-exposição |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.PEOPLE.PERSON_PROFILE.v1 | API interna | Pessoas e Clientes | people.person_profile.read_or_manage | Identidade pessoal; Perfil pessoal | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Condicional por finalidade | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.PEOPLE.CLIENT_PROFILE.v1 | API interna | Pessoas e Clientes | people.client_profile.read_or_manage | Identidade pessoal; Perfil de cliente | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Condicional por finalidade | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.PEOPLE.PERSON_DOCUMENT.v1 | API interna | Pessoas e Clientes | people.person_document.read_or_manage | Identidade pessoal; Documento pessoal | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.PEOPLE.PERSON_CONTACT.v1 | API interna | Pessoas e Clientes | people.person_contact.read_or_manage | Identidade pessoal; Contato | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.PEOPLE.PERSON_CONSENT.v1 | Contrato de segurança e LGPD | Pessoas e Clientes | people.person_consent.read | Consentimento; Identidade pessoal | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.PEOPLE.PERSON_UNIT_LINK.v1 | API interna | Pessoas e Clientes | people.person_unit_link.read_or_manage | Identidade pessoal; Vínculo com unidade, bloco, área ou ambiente | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Condicional por finalidade | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.PEOPLE.PERSON_ORGANIZATION_LINK.v1 | API interna | Pessoas e Clientes | people.person_organization_link.read_or_manage | Identidade pessoal; Vínculo com organização | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Condicional por finalidade | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.PEOPLE.DEPENDENT_PROFILE.v1 | API interna | Pessoas e Clientes | people.dependent_profile.read_or_manage | Identidade pessoal; Perfil pessoal | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Condicional por finalidade | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.PEOPLE.SERVICE_PROVIDER_PROFILE.v1 | API interna | Pessoas e Clientes | people.service_provider_profile.read_or_manage | Identidade pessoal; Perfil pessoal | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Condicional por finalidade | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.PEOPLE.PERSON_ACCOUNT_LINK_REFERENCE.v1 | Contrato de autorização | Pessoas e Clientes | people.person_account_link_reference.read | Identidade pessoal; Conta de usuário | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Condicional por finalidade | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.PEOPLE.PUBLIC_PERSON_IDENTITY_READ_MODEL.v1 | Read model autorizado | Pessoas e Clientes | people.public_person_identity.read | Identidade pessoal; BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Condicional por finalidade | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | não usar como banco compartilhado |

## 27. Matriz de dados sensíveis dos contratos de Unidades, Blocos, Áreas e Ambientes

| Contract ID | Tipo | Owner | Permission code | Dados permitidos | Dados proibidos | Referência obrigatória | Máscara | Consentimento | Finalidade | Retenção | AuthorizationDecision | Auditoria | Sensibilidade | Fail-closed | Observação anti-exposição |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.STRUCTURE.STRUCTURE_ROOT.v1 | API interna | Unidades, Blocos, Áreas e Ambientes | structure.structure_root.read_or_manage | Identidade técnica; Vínculo com unidade, bloco, área ou ambiente | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.STRUCTURE.PHYSICAL_STRUCTURE_NODE.v1 | API interna | Unidades, Blocos, Áreas e Ambientes | structure.physical_structure_node.read_or_manage | Identidade técnica; Vínculo com unidade, bloco, área ou ambiente | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.STRUCTURE.STRUCTURE_HIERARCHY.v1 | API interna | Unidades, Blocos, Áreas e Ambientes | structure.structure_hierarchy.read_or_manage | Identidade técnica; Vínculo com unidade, bloco, área ou ambiente | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.STRUCTURE.STRUCTURE_REFERENCE.v1 | Contrato de autorização | Unidades, Blocos, Áreas e Ambientes | structure.structure_reference.read | Identidade técnica; Vínculo com unidade, bloco, área ou ambiente | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.STRUCTURE.STRUCTURAL_RESOURCE_ASSIGNMENT.v1 | API interna | Unidades, Blocos, Áreas e Ambientes | structure.structural_resource_assignment.read_or_manage | Identidade técnica; Vínculo com unidade, bloco, área ou ambiente | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.STRUCTURE.STRUCTURE_PATH_READ_MODEL.v1 | Read model autorizado | Unidades, Blocos, Áreas e Ambientes | structure.structure_path.read | Identidade técnica; Vínculo com unidade, bloco, área ou ambiente | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | não usar como banco compartilhado |
| NODUOS.STRUCTURE.STRUCTURE_VISIBILITY.v1 | API interna | Unidades, Blocos, Áreas e Ambientes | structure.structure_visibility.read_or_manage | Identidade técnica; Vínculo com unidade, bloco, área ou ambiente | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.STRUCTURE.STRUCTURE_RESERVABLE_FLAG.v1 | API interna | Unidades, Blocos, Áreas e Ambientes | structure.structure_reservable_flag.read_or_manage | Identidade técnica; Vínculo com unidade, bloco, área ou ambiente | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |

## 28. Matriz de dados sensíveis dos contratos de Herança e Permissões

| Contract ID | Tipo | Owner | Permission code | Dados permitidos | Dados proibidos | Referência obrigatória | Máscara | Consentimento | Finalidade | Retenção | AuthorizationDecision | Auditoria | Sensibilidade | Fail-closed | Observação anti-exposição |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.POLICY.ADVANCED_POLICY.v1 | Contrato de política | Herança e Permissões | policy.advanced_policy.manage | Política de segurança; Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.POLICY.POLICY_CONDITION.v1 | Contrato de política | Herança e Permissões | policy.policy_condition.manage | Política de segurança; Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.POLICY.POLICY_EFFECT.v1 | Contrato de política | Herança e Permissões | policy.policy_effect.manage | Política de segurança; Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.POLICY.POLICY_SCOPE.v1 | Contrato de política | Herança e Permissões | policy.policy_scope.manage | Política de segurança; Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.POLICY.DELEGATION_RULE.v1 | API interna | Herança e Permissões | policy.delegation_rule.read_or_manage | Política de segurança; Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.POLICY.POLICY_EXCEPTION.v1 | Contrato de política | Herança e Permissões | policy.policy_exception.manage | Política de segurança; Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.POLICY.EFFECTIVE_PERMISSION_READ_MODEL.v1 | Read model autorizado | Herança e Permissões | policy.effective_permission.read | Política de segurança; Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | não usar como banco compartilhado |
| NODUOS.POLICY.ACCESS_SIMULATION.v1 | API interna | Herança e Permissões | policy.access_simulation.read_or_manage | Política de segurança; Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.POLICY.POLICY_EVALUATION.v1 | Contrato de política | Herança e Permissões | policy.policy_evaluation.manage | Política de segurança; Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.POLICY.PERMISSION_CONFLICT.v1 | API interna | Herança e Permissões | policy.permission_conflict.read_or_manage | Política de segurança; Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |

## 29. Matriz de dados sensíveis dos contratos de Gateway Local / Mikrotik / Tunnel

| Contract ID | Tipo | Owner | Permission code | Dados permitidos | Dados proibidos | Referência obrigatória | Máscara | Consentimento | Finalidade | Retenção | AuthorizationDecision | Auditoria | Sensibilidade | Fail-closed | Observação anti-exposição |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.GATEWAY.GATEWAY_RECORD.v1 | API interna | Gateway Local / Mikrotik / Tunnel | gateway.gateway_record.read_or_manage | Gateway; Túnel; IP interno; Rota local | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.GATEWAY.GATEWAY_AGENT.v1 | API interna | Gateway Local / Mikrotik / Tunnel | gateway.gateway_agent.read_or_manage | Gateway; Túnel; IP interno; Rota local | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.GATEWAY.GATEWAY_CREDENTIAL_REFERENCE.v1 | Contrato de segurança e LGPD | Gateway Local / Mikrotik / Tunnel | gateway.gateway_credential_reference.manage | Segredo; Gateway; Túnel; IP interno; Rota local | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference, SecretReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | usar SecretReference, nunca bruto |
| NODUOS.GATEWAY.TUNNEL_SESSION.v1 | API interna | Gateway Local / Mikrotik / Tunnel | gateway.tunnel_session.read_or_manage | Gateway; Túnel; IP interno; Rota local | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.GATEWAY.GATEWAY_HEALTH_READ_MODEL.v1 | Read model autorizado | Gateway Local / Mikrotik / Tunnel | gateway.gateway_health.read | Gateway; Túnel; Diagnóstico técnico; Logs técnicos; IP interno; Rota local | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | não usar como banco compartilhado |
| NODUOS.GATEWAY.GATEWAY_DIAGNOSTIC.v1 | Contrato de diagnóstico | Gateway Local / Mikrotik / Tunnel | gateway.gateway_diagnostic.read | Gateway; Túnel; Diagnóstico técnico; Logs técnicos; IP interno; Rota local | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.GATEWAY.GATEWAY_COMMAND.v1 | Comando | Gateway Local / Mikrotik / Tunnel | gateway.gateway_command.request | Gateway; Túnel; Evento crítico; IP interno; Rota local | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | não tratar solicitação como execução |
| NODUOS.GATEWAY.GATEWAY_COMMAND_RESULT.v1 | Evento de fato ocorrido | Gateway Local / Mikrotik / Tunnel | gateway.event.consume_or_publish | Gateway; Túnel; Evento crítico; IP interno; Rota local | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | não tratar solicitação como execução |
| NODUOS.GATEWAY.GATEWAY_DEVICE_DISCOVERY.v1 | API interna | Gateway Local / Mikrotik / Tunnel | gateway.gateway_device_discovery.read_or_manage | Gateway; Túnel; Dispositivo; IP interno; Rota local | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.GATEWAY.GATEWAY_DEVICE_REACHABILITY_READ_MODEL.v1 | Read model autorizado | Gateway Local / Mikrotik / Tunnel | gateway.gateway_device_reachability.read | Gateway; Túnel; Diagnóstico técnico; Logs técnicos; Dispositivo; IP interno; demais somente por referência | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | não usar como banco compartilhado |
| NODUOS.GATEWAY.GATEWAY_AUTHORIZATION_SCOPE.v1 | Contrato de autorização | Gateway Local / Mikrotik / Tunnel | gateway.gateway_authorization_scope.read | Conta de usuário; Identidade técnica; Gateway; Túnel; IP interno; Rota local | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.GATEWAY.GATEWAY_TECHNICAL_LOG.v1 | Contrato de auditoria | Gateway Local / Mikrotik / Tunnel | gateway.gateway_technical_log.read | Gateway; Túnel; Diagnóstico técnico; Logs técnicos; IP interno; Rota local | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |

## 30. Matriz de dados sensíveis dos contratos de Dispositivos

| Contract ID | Tipo | Owner | Permission code | Dados permitidos | Dados proibidos | Referência obrigatória | Máscara | Consentimento | Finalidade | Retenção | AuthorizationDecision | Auditoria | Sensibilidade | Fail-closed | Observação anti-exposição |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.DEVICE.DEVICE_RECORD.v1 | API interna | Dispositivos | device.device_record.read_or_manage | Dispositivo; Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.DEVICE.DEVICE_REFERENCE.v1 | Contrato de autorização | Dispositivos | device.device_reference.read | Dispositivo; Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.DEVICE.DEVICE_IDENTITY.v1 | API interna | Dispositivos | device.device_identity.read_or_manage | Dispositivo; Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.DEVICE.DEVICE_CAPABILITY.v1 | API interna | Dispositivos | device.device_capability.read_or_manage | Dispositivo | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.DEVICE.DEVICE_HEALTH_READ_MODEL.v1 | Read model autorizado | Dispositivos | device.device_health.read | Dispositivo; Diagnóstico técnico; Logs técnicos | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | não usar como banco compartilhado |
| NODUOS.DEVICE.DEVICE_STATUS_READ_MODEL.v1 | Read model autorizado | Dispositivos | device.device_status.read | Dispositivo; Diagnóstico técnico; Logs técnicos | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | não usar como banco compartilhado |
| NODUOS.DEVICE.DEVICE_DIAGNOSTIC.v1 | Contrato de diagnóstico | Dispositivos | device.device_diagnostic.read | Dispositivo; Diagnóstico técnico; Logs técnicos | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.DEVICE.DEVICE_TELEMETRY.v1 | API interna | Dispositivos | device.device_telemetry.read_or_manage | Dispositivo; Diagnóstico técnico; Logs técnicos | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.DEVICE.DEVICE_LIFECYCLE.v1 | API interna | Dispositivos | device.device_lifecycle.read_or_manage | Dispositivo | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.DEVICE.DEVICE_CREDENTIAL_REFERENCE.v1 | Contrato de segurança e LGPD | Dispositivos | device.device_credential_reference.manage | Segredo; Dispositivo; Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference, SecretReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | usar SecretReference, nunca bruto |
| NODUOS.DEVICE.DEVICE_AUTHORIZATION_SCOPE.v1 | Contrato de autorização | Dispositivos | device.device_authorization_scope.read | Conta de usuário; Identidade técnica; Dispositivo | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.DEVICE.DEVICE_MAINTENANCE_RECORD.v1 | API interna | Dispositivos | device.device_maintenance_record.read_or_manage | Dispositivo; Diagnóstico técnico; Logs técnicos; Identidade técnica | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |

## 31. Matriz de dados sensíveis dos contratos de Controle de Acesso

| Contract ID | Tipo | Owner | Permission code | Dados permitidos | Dados proibidos | Referência obrigatória | Máscara | Consentimento | Finalidade | Retenção | AuthorizationDecision | Auditoria | Sensibilidade | Fail-closed | Observação anti-exposição |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.ACCESS.ACCESS_POINT.v1 | API interna | Controle de Acesso | access.access_point.read_or_manage | Acesso físico | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.ACCESS.ACCESS_CREDENTIAL.v1 | API interna | Controle de Acesso | access.access_credential.manage | Segredo; Acesso físico; Credencial física | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference, SecretReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | usar SecretReference, nunca bruto |
| NODUOS.ACCESS.ACCESS_RULE.v1 | API interna | Controle de Acesso | access.access_rule.read_or_manage | Acesso físico | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.ACCESS.ACCESS_POLICY_BINDING.v1 | Contrato de política | Controle de Acesso | access.access_policy_binding.manage | Acesso físico | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.ACCESS.ACCESS_SCHEDULE.v1 | API interna | Controle de Acesso | access.access_schedule.read_or_manage | Acesso físico | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.ACCESS.ACCESS_ATTEMPT_EVENT.v1 | Evento de fato ocorrido | Controle de Acesso | access.event.consume_or_publish | Acesso físico; Evento de acesso | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; payload completo de execução | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | não usar evento como comando ou prova de autorização nova |
| NODUOS.ACCESS.ACCESS_EVENT.v1 | Evento de fato ocorrido | Controle de Acesso | access.event.consume_or_publish | Acesso físico; Evento de acesso | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; payload completo de execução | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | não usar evento como comando ou prova de autorização nova |
| NODUOS.ACCESS.ACCESS_EXECUTION_COMMAND.v1 | Comando | Controle de Acesso | access.access_execution_command.request | Acesso físico; Evento de acesso; Evento crítico | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | não tratar solicitação como execução |
| NODUOS.ACCESS.ACCESS_EXECUTION_RESULT.v1 | Evento de fato ocorrido | Controle de Acesso | access.event.consume_or_publish | Acesso físico; Evento de acesso; Evento crítico | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.ACCESS.ACCESS_AUTHORIZATION_SCOPE.v1 | Contrato de autorização | Controle de Acesso | access.access_authorization_scope.read | Conta de usuário; Identidade técnica; Acesso físico | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.ACCESS.ACCESS_OFFLINE_POLICY.v1 | Contrato de política | Controle de Acesso | access.access_offline_policy.manage | Acesso físico | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.ACCESS.ACCESS_DEVICE_BINDING.v1 | API interna | Controle de Acesso | access.access_device_binding.read_or_manage | Acesso físico; Dispositivo | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |

## 32. Matriz de dados sensíveis dos contratos de Câmeras / VMS

| Contract ID | Tipo | Owner | Permission code | Dados permitidos | Dados proibidos | Referência obrigatória | Máscara | Consentimento | Finalidade | Retenção | AuthorizationDecision | Auditoria | Sensibilidade | Fail-closed | Observação anti-exposição |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.CAMERA.CAMERA_RESOURCE.v1 | API interna | Câmeras / VMS | camera.camera_resource.read_or_manage | Câmera | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preferir EvidenceReference a bruto |
| NODUOS.CAMERA.CAMERA_STREAM_ACCESS.v1 | API interna | Câmeras / VMS | camera.camera_stream_access.read_or_manage | Câmera; Stream | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preferir EvidenceReference a bruto |
| NODUOS.CAMERA.CAMERA_LIVE_VIEW_REQUEST.v1 | Comando | Câmeras / VMS | camera.camera_live_view_request.request | Câmera; Stream | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | não tratar solicitação como execução; preferir EvidenceReference a bruto |
| NODUOS.CAMERA.CAMERA_PLAYBACK_REQUEST.v1 | Comando | Câmeras / VMS | camera.camera_playback_request.request | Câmera; Stream | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | não tratar solicitação como execução; preferir EvidenceReference a bruto |
| NODUOS.CAMERA.CAMERA_CLIP.v1 | API interna | Câmeras / VMS | camera.camera_clip.read_or_manage | Câmera; Clip | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preferir EvidenceReference a bruto |
| NODUOS.CAMERA.CAMERA_SNAPSHOT.v1 | API interna | Câmeras / VMS | camera.camera_snapshot.read_or_manage | Câmera; Snapshot | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preferir EvidenceReference a bruto |
| NODUOS.CAMERA.CAMERA_EVIDENCE_REFERENCE.v1 | Contrato de evidência | Câmeras / VMS | camera.camera_evidence_reference.read | Evidência de vídeo; Cadeia de custódia; Câmera | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção específica legal/operacional | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preferir EvidenceReference a bruto |
| NODUOS.CAMERA.CAMERA_AUTHORIZATION_SCOPE.v1 | Contrato de autorização | Câmeras / VMS | camera.camera_authorization_scope.read | Conta de usuário; Identidade técnica; Câmera | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preferir EvidenceReference a bruto |
| NODUOS.CAMERA.CAMERA_ANALYTICS_READ_MODEL.v1 | Read model autorizado | Câmeras / VMS | camera.camera_analytics.read | Câmera; BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | não usar como banco compartilhado; preferir EvidenceReference a bruto |
| NODUOS.CAMERA.VIDEO_RETENTION_POLICY_BINDING.v1 | Contrato de política | Câmeras / VMS | camera.video_retention_policy_binding.manage | Retenção; Câmera | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preferir EvidenceReference a bruto |

## 33. Matriz de dados sensíveis dos contratos de Alarmes

| Contract ID | Tipo | Owner | Permission code | Dados permitidos | Dados proibidos | Referência obrigatória | Máscara | Consentimento | Finalidade | Retenção | AuthorizationDecision | Auditoria | Sensibilidade | Fail-closed | Observação anti-exposição |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.ALARM.ALARM_PANEL.v1 | API interna | Alarmes | alarm.alarm_panel.read_or_manage | Alarme | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.ALARM.ALARM_ZONE.v1 | API interna | Alarmes | alarm.alarm_zone.read_or_manage | Alarme | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.ALARM.ALARM_SENSOR.v1 | API interna | Alarmes | alarm.alarm_sensor.read_or_manage | Alarme | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.ALARM.ALARM_ARMING_STATE.v1 | API interna | Alarmes | alarm.alarm_arming_state.read_or_manage | Alarme | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.ALARM.ALARM_EVENT.v1 | Evento de fato ocorrido | Alarmes | alarm.event.consume_or_publish | Alarme; Evento crítico | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; payload completo de execução | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | não usar evento como comando ou prova de autorização nova |
| NODUOS.ALARM.ALARM_TRIGGER_EVENT.v1 | Evento de fato ocorrido | Alarmes | alarm.event.consume_or_publish | Alarme; Evento crítico | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; payload completo de execução | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | não usar evento como comando ou prova de autorização nova |
| NODUOS.ALARM.PANIC_EVENT.v1 | Evento de fato ocorrido | Alarmes | alarm.event.consume_or_publish | Alarme; Pânico; Evento crítico | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; payload completo de execução | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | não usar evento como comando ou prova de autorização nova |
| NODUOS.ALARM.ALARM_ESCALATION.v1 | API interna | Alarmes | alarm.alarm_escalation.read_or_manage | Alarme; Evento crítico | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.ALARM.ALARM_ACKNOWLEDGEMENT.v1 | API interna | Alarmes | alarm.alarm_acknowledgement.read_or_manage | Alarme | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.ALARM.ALARM_RESOLUTION.v1 | API interna | Alarmes | alarm.alarm_resolution.read_or_manage | Alarme | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.ALARM.ALARM_AUTHORIZATION_SCOPE.v1 | Contrato de autorização | Alarmes | alarm.alarm_authorization_scope.read | Conta de usuário; Identidade técnica; Alarme | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.ALARM.ALARM_ANALYTICS_READ_MODEL.v1 | Read model autorizado | Alarmes | alarm.alarm_analytics.read | Alarme; BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | não usar como banco compartilhado |

## 34. Matriz de dados sensíveis dos contratos de Financeiro

| Contract ID | Tipo | Owner | Permission code | Dados permitidos | Dados proibidos | Referência obrigatória | Máscara | Consentimento | Finalidade | Retenção | AuthorizationDecision | Auditoria | Sensibilidade | Fail-closed | Observação anti-exposição |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.FINANCE.INVOICE.v1 | API interna | Financeiro | finance.invoice.manage | Financeiro; Cobrança | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção específica legal/operacional | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.FINANCE.CHARGE.v1 | API interna | Financeiro | finance.charge.manage | Financeiro; Cobrança | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção específica legal/operacional | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.FINANCE.PAYMENT.v1 | API interna | Financeiro | finance.payment.manage | Financeiro; Pagamento | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção específica legal/operacional | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.FINANCE.PAYMENT_STATUS.v1 | Evento de fato ocorrido ou API interna | Financeiro | finance.event.consume_or_publish | Financeiro; Pagamento | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção específica legal/operacional | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.FINANCE.RECEIPT.v1 | API interna | Financeiro | finance.receipt.read_or_manage | Financeiro; Recibo | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção específica legal/operacional | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.FINANCE.OVERDUE_EVENT.v1 | Evento de fato ocorrido | Financeiro | finance.event.consume_or_publish | Financeiro; Cobrança | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; payload completo de execução | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção específica legal/operacional | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | não usar evento como comando ou prova de autorização nova |
| NODUOS.FINANCE.FINANCIAL_AGREEMENT.v1 | API interna | Financeiro | finance.financial_agreement.read_or_manage | Financeiro | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção específica legal/operacional | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.FINANCE.COMMISSION.v1 | API interna | Financeiro | finance.commission.read_or_manage | Financeiro | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção específica legal/operacional | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.FINANCE.SPLIT.v1 | API interna | Financeiro | finance.split.read_or_manage | Financeiro | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção específica legal/operacional | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.FINANCE.TRANSFER.v1 | API interna | Financeiro | finance.transfer.read_or_manage | Financeiro | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção específica legal/operacional | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.FINANCE.FINANCIAL_READ_MODEL.v1 | Read model autorizado | Financeiro | finance.financial.read | Financeiro; BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção específica legal/operacional | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | não usar como banco compartilhado |
| NODUOS.FINANCE.FINANCIAL_RESTRICTION_SIGNAL.v1 | API interna | Financeiro | finance.financial_restriction_signal.read_or_manage | Financeiro | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção específica legal/operacional | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |

## 35. Matriz de dados sensíveis dos contratos de Convites e Visitantes

| Contract ID | Tipo | Owner | Permission code | Dados permitidos | Dados proibidos | Referência obrigatória | Máscara | Consentimento | Finalidade | Retenção | AuthorizationDecision | Auditoria | Sensibilidade | Fail-closed | Observação anti-exposição |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.VISITOR.VISITOR_INVITE.v1 | API interna | Convites e Visitantes | visitor.visitor_invite.read_or_manage | Visitante; Convite | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.VISITOR.TEMPORARY_VISITOR_PROFILE.v1 | API interna | Convites e Visitantes | visitor.temporary_visitor_profile.read_or_manage | Visitante; Convite | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.VISITOR.TEMPORARY_QR_CODE.v1 | API interna | Convites e Visitantes | visitor.temporary_qr_code.read_or_manage | Visitante; Convite; QR temporário | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.VISITOR.VISIT_WINDOW.v1 | API interna | Convites e Visitantes | visitor.visit_window.read_or_manage | Visitante; Convite | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.VISITOR.VISIT_APPROVAL.v1 | API interna | Convites e Visitantes | visitor.visit_approval.read_or_manage | Visitante; Convite | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.VISITOR.VISITOR_CHECK_IN.v1 | API interna | Convites e Visitantes | visitor.visitor_check_in.read_or_manage | Visitante; Convite; Acesso físico; Evento de acesso | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.VISITOR.VISITOR_CHECK_OUT.v1 | API interna | Convites e Visitantes | visitor.visitor_check_out.read_or_manage | Visitante; Convite; Acesso físico; Evento de acesso | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.VISITOR.VISITOR_ACCESS_REFERENCE.v1 | Contrato de autorização | Convites e Visitantes | visitor.visitor_access_reference.read | Visitante; Convite; Acesso físico; Evento de acesso | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.VISITOR.VISITOR_ANALYTICS_READ_MODEL.v1 | Read model autorizado | Convites e Visitantes | visitor.visitor_analytics.read | Visitante; Convite; BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | não usar como banco compartilhado |

## 36. Matriz de dados sensíveis dos contratos de Tickets

| Contract ID | Tipo | Owner | Permission code | Dados permitidos | Dados proibidos | Referência obrigatória | Máscara | Consentimento | Finalidade | Retenção | AuthorizationDecision | Auditoria | Sensibilidade | Fail-closed | Observação anti-exposição |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.TICKET.OPERATIONAL_TICKET.v1 | API interna | Tickets | ticket.operational_ticket.read_or_manage | Ticket | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.TICKET.TICKET_COMMENT.v1 | API interna | Tickets | ticket.ticket_comment.read_or_manage | Ticket; Identidade pessoal | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Condicional por finalidade | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.TICKET.TICKET_ATTACHMENT_REFERENCE.v1 | Contrato de autorização | Tickets | ticket.ticket_attachment_reference.read | Ticket; Anexo | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.TICKET.TICKET_SLA.v1 | API interna | Tickets | ticket.ticket_sla.read_or_manage | Ticket | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.TICKET.TICKET_ESCALATION.v1 | API interna | Tickets | ticket.ticket_escalation.read_or_manage | Ticket | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.TICKET.TICKET_RESOLUTION.v1 | API interna | Tickets | ticket.ticket_resolution.read_or_manage | Ticket | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.TICKET.TICKET_REOPEN.v1 | API interna | Tickets | ticket.ticket_reopen.read_or_manage | Ticket | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.TICKET.TICKET_LINKED_RESOURCE_REFERENCE.v1 | Contrato de autorização | Tickets | ticket.ticket_linked_resource_reference.read | Identidade técnica; Ticket | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.TICKET.TICKET_ANALYTICS_READ_MODEL.v1 | Read model autorizado | Tickets | ticket.ticket_analytics.read | Ticket; BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | não usar como banco compartilhado |

## 37. Matriz de dados sensíveis dos contratos de Mural Informativo

| Contract ID | Tipo | Owner | Permission code | Dados permitidos | Dados proibidos | Referência obrigatória | Máscara | Consentimento | Finalidade | Retenção | AuthorizationDecision | Auditoria | Sensibilidade | Fail-closed | Observação anti-exposição |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.MURAL.ANNOUNCEMENT.v1 | API interna | Mural Informativo | mural.announcement.read_or_manage | Mural | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.MURAL.ANNOUNCEMENT_AUDIENCE.v1 | API interna | Mural Informativo | mural.announcement_audience.read_or_manage | Mural; Identidade pessoal | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Condicional por finalidade | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.MURAL.ANNOUNCEMENT_ATTACHMENT_REFERENCE.v1 | Contrato de autorização | Mural Informativo | mural.announcement_attachment_reference.read | Mural; Anexo | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | preservar módulo dono e transportar só payload minimizado |
| NODUOS.MURAL.ANNOUNCEMENT_ACKNOWLEDGEMENT.v1 | API interna | Mural Informativo | mural.announcement_acknowledgement.read_or_manage | Mural; Identidade pessoal | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Condicional por finalidade | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.MURAL.ANNOUNCEMENT_POLL.v1 | API interna | Mural Informativo | mural.announcement_poll.read_or_manage | Mural; Identidade pessoal | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Condicional por finalidade | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.MURAL.ANNOUNCEMENT_READ_MODEL.v1 | Read model autorizado | Mural Informativo | mural.announcement.read | Mural | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Sim | Condicional | Restrito | Degradação segura ou negação por escopo | não usar como banco compartilhado |
| NODUOS.MURAL.ANNOUNCEMENT_ARCHIVED_EVENT.v1 | Evento de fato ocorrido | Mural Informativo | mural.event.consume_or_publish | Mural | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; payload completo de execução | ResourceReference | Condicional | Não isolado; seguir política LGPD | Declarada no contrato | Retenção padrão do domínio | Herdada do contrato principal | Condicional | Interno | Degradação segura ou negação por escopo | não usar evento como comando ou prova de autorização nova |

## 38. Matriz de dados sensíveis dos contratos de Reservas

| Contract ID | Tipo | Owner | Permission code | Dados permitidos | Dados proibidos | Referência obrigatória | Máscara | Consentimento | Finalidade | Retenção | AuthorizationDecision | Auditoria | Sensibilidade | Fail-closed | Observação anti-exposição |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.RESERVATION.RESERVABLE_RESOURCE.v1 | API interna | Reservas | reservation.reservable_resource.read_or_manage | Reserva | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.RESERVATION.RESERVATION.v1 | API interna | Reservas | reservation.reservation.read_or_manage | Reserva | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.RESERVATION.AVAILABILITY_QUERY.v1 | API interna | Reservas | reservation.availability_query.read | Reserva | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.RESERVATION.RESERVATION_HOLD.v1 | API interna | Reservas | reservation.reservation_hold.read_or_manage | Reserva | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.RESERVATION.RESERVATION_APPROVAL.v1 | API interna | Reservas | reservation.reservation_approval.read_or_manage | Reserva | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.RESERVATION.RESERVATION_CANCELLATION.v1 | API interna | Reservas | reservation.reservation_cancellation.read_or_manage | Reserva | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.RESERVATION.RESERVATION_CHECK_IN.v1 | API interna | Reservas | reservation.reservation_check_in.read_or_manage | Reserva; Evento crítico | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.RESERVATION.RESERVATION_CHECK_OUT.v1 | API interna | Reservas | reservation.reservation_check_out.read_or_manage | Reserva; Evento crítico | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.RESERVATION.RESERVATION_NO_SHOW.v1 | API interna | Reservas | reservation.reservation_no_show.read_or_manage | Reserva; Evento crítico | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.RESERVATION.RESERVATION_ACCESS_WINDOW.v1 | API interna | Reservas | reservation.reservation_access_window.read_or_manage | Reserva; Acesso físico | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.RESERVATION.RESERVATION_CHARGE_REQUEST.v1 | Comando | Reservas | reservation.reservation_charge_request.request | Reserva; Financeiro; Cobrança | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção específica legal/operacional | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | não tratar solicitação como execução |
| NODUOS.RESERVATION.RESERVATION_GUEST_LIST_REFERENCE.v1 | Contrato de autorização | Reservas | reservation.reservation_guest_list_reference.read | Reserva; Visitante | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.RESERVATION.RESERVATION_ANALYTICS_READ_MODEL.v1 | Read model autorizado | Reservas | reservation.reservation_analytics.read | Reserva; BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | não usar como banco compartilhado |

## 39. Matriz de dados sensíveis dos contratos de Relatórios / BI

| Contract ID | Tipo | Owner | Permission code | Dados permitidos | Dados proibidos | Referência obrigatória | Máscara | Consentimento | Finalidade | Retenção | AuthorizationDecision | Auditoria | Sensibilidade | Fail-closed | Observação anti-exposição |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.BI.BI_WORKSPACE.v1 | API interna | Relatórios / BI | bi.bi_workspace.read_or_manage | BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | não usar como banco compartilhado |
| NODUOS.BI.BI_DASHBOARD.v1 | API interna | Relatórios / BI | bi.bi_dashboard.read_or_manage | BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | não usar como banco compartilhado |
| NODUOS.BI.BI_WIDGET.v1 | API interna | Relatórios / BI | bi.bi_widget.read_or_manage | BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | não usar como banco compartilhado |
| NODUOS.BI.BI_REPORT.v1 | API interna | Relatórios / BI | bi.bi_report.read_or_manage | BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | não usar como banco compartilhado |
| NODUOS.BI.BI_REPORT_TEMPLATE.v1 | API interna | Relatórios / BI | bi.bi_report_template.read_or_manage | BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | não usar como banco compartilhado |
| NODUOS.BI.BI_REPORT_SCHEDULE.v1 | API interna | Relatórios / BI | bi.bi_report_schedule.read_or_manage | BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | não usar como banco compartilhado |
| NODUOS.BI.BI_EXPORT_REQUEST.v1 | Comando | Relatórios / BI | bi.bi_export_request.request | BI e analytics; Exportação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | não usar como banco compartilhado; não tratar solicitação como execução |
| NODUOS.BI.BI_EXPORT_LOG.v1 | Contrato de exportação | Relatórios / BI | bi.bi_export_log.read | BI e analytics; Exportação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | não usar como banco compartilhado |
| NODUOS.BI.BI_READ_MODEL_SUBSCRIPTION.v1 | Read model autorizado | Relatórios / BI | bi.bi_read_model_subscription.read | BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | não usar como banco compartilhado |
| NODUOS.BI.BI_ANALYTICS_READ_MODEL.v1 | Read model autorizado | Relatórios / BI | bi.bi_analytics.read | BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | não usar como banco compartilhado |
| NODUOS.BI.BI_KPI.v1 | API interna | Relatórios / BI | bi.bi_kpi.read_or_manage | BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | não usar como banco compartilhado |
| NODUOS.BI.BI_INSIGHT.v1 | API interna | Relatórios / BI | bi.bi_insight.read_or_manage | BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | não usar como banco compartilhado |
| NODUOS.BI.BI_ANOMALY_DETECTION.v1 | API interna | Relatórios / BI | bi.bi_anomaly_detection.read_or_manage | BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | não usar como banco compartilhado |

## 40. Matriz de dados sensíveis dos contratos de White-label

| Contract ID | Tipo | Owner | Permission code | Dados permitidos | Dados proibidos | Referência obrigatória | Máscara | Consentimento | Finalidade | Retenção | AuthorizationDecision | Auditoria | Sensibilidade | Fail-closed | Observação anti-exposição |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.WL.WHITE_LABEL_PROFILE.v1 | API interna | White-label | white_label.white_label_profile.read_or_manage | White-label asset | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.WL.WHITE_LABEL_THEME.v1 | API interna | White-label | white_label.white_label_theme.read_or_manage | White-label asset | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.WL.THEME_TOKEN.v1 | API interna | White-label | white_label.theme_token.read_or_manage | Segredo; White-label asset | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference, SecretReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | usar SecretReference, nunca bruto |
| NODUOS.WL.COLOR_PALETTE.v1 | API interna | White-label | white_label.color_palette.read_or_manage | White-label asset | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.WL.BRAND_ASSET_REFERENCE.v1 | Contrato de autorização | White-label | white_label.brand_asset_reference.read | White-label asset; Anexo | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.WL.CUSTOM_DOMAIN.v1 | API interna | White-label | white_label.custom_domain.read_or_manage | White-label asset; Domínio customizado | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.WL.DOMAIN_VERIFICATION.v1 | API interna | White-label | white_label.domain_verification.read_or_manage | White-label asset; Domínio customizado | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.WL.CERTIFICATE_REFERENCE.v1 | Contrato de autorização | White-label | white_label.certificate_reference.read | Certificado; Segredo; White-label asset | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference, SecretReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | usar SecretReference, nunca bruto |
| NODUOS.WL.BRAND_PUBLISHING_REQUEST.v1 | Comando | White-label | white_label.brand_publishing_request.request | White-label asset | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | não tratar solicitação como execução |
| NODUOS.WL.BRAND_PUBLISHING_RESULT.v1 | Evento de fato ocorrido | White-label | white_label.event.consume_or_publish | White-label asset | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.WL.BRAND_PREVIEW.v1 | API interna | White-label | white_label.brand_preview.read | White-label asset | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.WL.BRAND_FALLBACK_THEME.v1 | API interna | White-label | white_label.brand_fallback_theme.read_or_manage | White-label asset | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.WL.BRAND_VISUAL_TEMPLATE.v1 | API interna | White-label | white_label.brand_visual_template.read_or_manage | White-label asset | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |

## 41. Matriz de dados sensíveis dos contratos de Notificações

| Contract ID | Tipo | Owner | Permission code | Dados permitidos | Dados proibidos | Referência obrigatória | Máscara | Consentimento | Finalidade | Retenção | AuthorizationDecision | Auditoria | Sensibilidade | Fail-closed | Observação anti-exposição |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.NOTIFICATION.NOTIFICATION_REQUEST.v1 | Comando | Notificações | notification.notification_request.request | Notificação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | não tratar solicitação como execução |
| NODUOS.NOTIFICATION.NOTIFICATION_TEMPLATE.v1 | Contrato de notificação | Notificações | notification.notification_template.read | Notificação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.NOTIFICATION.NOTIFICATION_CHANNEL.v1 | Contrato de notificação | Notificações | notification.notification_channel.read | Notificação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.NOTIFICATION.NOTIFICATION_PROVIDER.v1 | Contrato de notificação | Notificações | notification.notification_provider.read | Notificação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_ATTEMPT.v1 | Contrato de notificação | Notificações | notification.notification_delivery_attempt.read | Notificação; Logs técnicos | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_LOG.v1 | Contrato de notificação | Notificações | notification.notification_delivery_log.read | Notificação; Logs técnicos | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.NOTIFICATION.NOTIFICATION_PREFERENCE.v1 | Contrato de notificação | Notificações | notification.notification_preference.read | Notificação; Consentimento; Contato | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.NOTIFICATION.NOTIFICATION_OPT_IN.v1 | Contrato de notificação | Notificações | notification.notification_opt_in.read | Notificação; Consentimento; Contato | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.NOTIFICATION.NOTIFICATION_OPT_OUT.v1 | Contrato de notificação | Notificações | notification.notification_opt_out.read | Notificação; Consentimento; Contato | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.NOTIFICATION.NOTIFICATION_ANALYTICS_READ_MODEL.v1 | Read model autorizado | Notificações | notification.notification_analytics.read | Notificação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | não usar como banco compartilhado |

## 42. Matriz de dados sensíveis dos contratos de Automações

| Contract ID | Tipo | Owner | Permission code | Dados permitidos | Dados proibidos | Referência obrigatória | Máscara | Consentimento | Finalidade | Retenção | AuthorizationDecision | Auditoria | Sensibilidade | Fail-closed | Observação anti-exposição |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.AUTOMATION.AUTOMATION_WORKFLOW.v1 | API interna | Automações | automation.automation_workflow.read_or_manage | Automação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.AUTOMATION.AUTOMATION_TRIGGER.v1 | API interna | Automações | automation.automation_trigger.read_or_manage | Automação; Evento crítico | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.AUTOMATION.AUTOMATION_CONDITION.v1 | API interna | Automações | automation.automation_condition.read_or_manage | Automação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.AUTOMATION.AUTOMATION_ACTION_REQUEST.v1 | Comando | Automações | automation.automation_action_request.request | Automação; Evento crítico | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | não tratar solicitação como execução |
| NODUOS.AUTOMATION.AUTOMATION_EXECUTION.v1 | API interna | Automações | automation.automation_execution.read_or_manage | Automação; Evento crítico | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.AUTOMATION.AUTOMATION_RETRY.v1 | API interna | Automações | automation.automation_retry.read_or_manage | Automação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.AUTOMATION.AUTOMATION_PAUSE.v1 | API interna | Automações | automation.automation_pause.read_or_manage | Automação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.AUTOMATION.AUTOMATION_HUMAN_APPROVAL.v1 | API interna | Automações | automation.automation_human_approval.read_or_manage | Automação; Identidade pessoal | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Condicional por finalidade | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.AUTOMATION.AUTOMATION_ACTION_RESULT.v1 | Evento de fato ocorrido | Automações | automation.event.consume_or_publish | Automação; Evento crítico | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.AUTOMATION.AUTOMATION_READ_MODEL.v1 | Read model autorizado | Automações | automation.automation.read | Automação; BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | não usar como banco compartilhado |

## 43. Matriz de dados sensíveis dos contratos de Marketplace de Integrações

| Contract ID | Tipo | Owner | Permission code | Dados permitidos | Dados proibidos | Referência obrigatória | Máscara | Consentimento | Finalidade | Retenção | AuthorizationDecision | Auditoria | Sensibilidade | Fail-closed | Observação anti-exposição |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.MARKETPLACE.MARKETPLACE_CONNECTOR.v1 | API interna | Marketplace de Integrações | marketplace.marketplace_connector.read_or_manage | Integração externa | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.MARKETPLACE.INTEGRATION_PROVIDER.v1 | API interna | Marketplace de Integrações | marketplace.integration_provider.read_or_manage | Integração externa | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.MARKETPLACE.ADAPTER_PACKAGE.v1 | API interna | Marketplace de Integrações | marketplace.adapter_package.read_or_manage | Integração externa | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION.v1 | API interna | Marketplace de Integrações | marketplace.connector_installation.manage | Integração externa | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.MARKETPLACE.CONNECTOR_VERSION.v1 | API interna | Marketplace de Integrações | marketplace.connector_version.read_or_manage | Integração externa | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.MARKETPLACE.CONNECTOR_COMPATIBILITY.v1 | API interna | Marketplace de Integrações | marketplace.connector_compatibility.read_or_manage | Integração externa | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.MARKETPLACE.CONNECTOR_CREDENTIAL_REFERENCE.v1 | Contrato de segurança e LGPD | Marketplace de Integrações | marketplace.connector_credential_reference.manage | Segredo; Integração externa | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference, SecretReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | usar SecretReference, nunca bruto |
| NODUOS.MARKETPLACE.CONNECTOR_WEBHOOK_ENDPOINT.v1 | Webhook externo | Marketplace de Integrações | marketplace.webhook.deliver | Integração externa; Webhook externo | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado sensível sem contrato de terceiro | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.MARKETPLACE.EXTERNAL_EVENT_MAPPING.v1 | Evento de fato ocorrido | Marketplace de Integrações | marketplace.event.consume_or_publish | Integração externa | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; payload completo de execução | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | não usar evento como comando ou prova de autorização nova |
| NODUOS.MARKETPLACE.MARKETPLACE_AUDIT_TRAIL.v1 | Contrato de auditoria | Marketplace de Integrações | marketplace.marketplace_audit_trail.read | Auditoria; Integração externa | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção específica legal/operacional | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |

## 44. Matriz de dados sensíveis dos contratos de Auditoria e Compliance

| Contract ID | Tipo | Owner | Permission code | Dados permitidos | Dados proibidos | Referência obrigatória | Máscara | Consentimento | Finalidade | Retenção | AuthorizationDecision | Auditoria | Sensibilidade | Fail-closed | Observação anti-exposição |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.AUDIT.AUDIT_TRAIL.v1 | Contrato de auditoria | Auditoria e Compliance | audit.audit_trail.read | Auditoria; Compliance | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção específica legal/operacional | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preferir EvidenceReference a bruto |
| NODUOS.AUDIT.AUDIT_QUERY.v1 | Contrato de auditoria | Auditoria e Compliance | audit.audit_query.read | Auditoria; Compliance | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção específica legal/operacional | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preferir EvidenceReference a bruto |
| NODUOS.AUDIT.AUDIT_EXPORT.v1 | Contrato de exportação | Auditoria e Compliance | audit.audit_export.read | Auditoria; Compliance; Exportação | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção específica legal/operacional | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preferir EvidenceReference a bruto |
| NODUOS.AUDIT.COMPLIANCE_CASE.v1 | API interna | Auditoria e Compliance | audit.compliance_case.read_or_manage | Auditoria; Compliance | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção específica legal/operacional | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preferir EvidenceReference a bruto |
| NODUOS.AUDIT.COMPLIANCE_INVESTIGATION.v1 | API interna | Auditoria e Compliance | audit.compliance_investigation.read_or_manage | Auditoria; Compliance | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção específica legal/operacional | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preferir EvidenceReference a bruto |
| NODUOS.AUDIT.EVIDENCE_REFERENCE.v1 | Contrato de evidência | Auditoria e Compliance | audit.evidence_reference.read | Evidência de vídeo; Cadeia de custódia; Auditoria; Compliance | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção específica legal/operacional | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preferir EvidenceReference a bruto |
| NODUOS.AUDIT.CHAIN_OF_CUSTODY_RECORD.v1 | API interna | Auditoria e Compliance | audit.chain_of_custody_record.read_or_manage | Auditoria; Compliance; Cadeia de custódia | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção específica legal/operacional | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preferir EvidenceReference a bruto |
| NODUOS.AUDIT.AUDIT_ALERT.v1 | Contrato de auditoria | Auditoria e Compliance | audit.audit_alert.read | Auditoria; Compliance | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção específica legal/operacional | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preferir EvidenceReference a bruto |
| NODUOS.AUDIT.COMPLIANCE_REPORT.v1 | API interna | Auditoria e Compliance | audit.compliance_report.read_or_manage | Auditoria; Compliance | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção específica legal/operacional | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preferir EvidenceReference a bruto |

## 45. Matriz de dados sensíveis dos contratos de Segurança e LGPD

| Contract ID | Tipo | Owner | Permission code | Dados permitidos | Dados proibidos | Referência obrigatória | Máscara | Consentimento | Finalidade | Retenção | AuthorizationDecision | Auditoria | Sensibilidade | Fail-closed | Observação anti-exposição |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.SECURITY.SECURITY_POLICY.v1 | Contrato de política | Segurança e LGPD | security.security_policy.manage | Política de segurança; Política de privacidade | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.SECURITY.PRIVACY_POLICY.v1 | Contrato de política | Segurança e LGPD | security.privacy_policy.manage | Política de segurança; Política de privacidade | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.SECURITY.DATA_PROTECTION_POLICY.v1 | Contrato de política | Segurança e LGPD | security.data_protection_policy.manage | Política de segurança; Política de privacidade | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.SECURITY.CONSENT_POLICY.v1 | Contrato de política | Segurança e LGPD | security.consent_policy.manage | Política de segurança; Política de privacidade; Consentimento | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.SECURITY.CONSENT_RECORD.v1 | Contrato de segurança e LGPD | Segurança e LGPD | security.consent_record.read | Política de segurança; Política de privacidade; Consentimento | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.SECURITY.DATA_PROCESSING_RECORD.v1 | API interna | Segurança e LGPD | security.data_processing_record.read_or_manage | Política de segurança; Política de privacidade | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.SECURITY.DATA_SUBJECT_REQUEST.v1 | Comando | Segurança e LGPD | security.data_subject_request.request | Política de segurança; Política de privacidade; Solicitação do titular; Identidade pessoal | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Sim ou política equivalente | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | não tratar solicitação como execução |
| NODUOS.SECURITY.RETENTION_POLICY.v1 | Contrato de política | Segurança e LGPD | security.retention_policy.manage | Política de segurança; Política de privacidade; Retenção | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.SECURITY.MASKING_POLICY.v1 | Contrato de política | Segurança e LGPD | security.masking_policy.manage | Política de segurança; Política de privacidade; Mascaramento | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.SECURITY.SENSITIVE_DATA_CLASSIFICATION.v1 | API interna | Segurança e LGPD | security.sensitive_data_classification.read_or_manage | Política de segurança; Política de privacidade | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.SECURITY.EXPORT_CONTROL_POLICY.v1 | Contrato de política | Segurança e LGPD | security.export_control_policy.manage | Política de segurança; Política de privacidade | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.SECURITY.SECRET_POLICY.v1 | Contrato de política | Segurança e LGPD | security.secret_policy.manage | Segredo; Política de segurança; Política de privacidade | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference, SecretReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | usar SecretReference, nunca bruto |
| NODUOS.SECURITY.THIRD_PARTY_RISK.v1 | API interna | Segurança e LGPD | security.third_party_risk.read_or_manage | Política de segurança; Política de privacidade; Integração externa | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.SECURITY.INCIDENT_POLICY.v1 | Contrato de política | Segurança e LGPD | security.incident_policy.manage | Política de segurança; Política de privacidade | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |

## 46. Matriz de dados sensíveis dos contratos de Suporte e Operação

| Contract ID | Tipo | Owner | Permission code | Dados permitidos | Dados proibidos | Referência obrigatória | Máscara | Consentimento | Finalidade | Retenção | AuthorizationDecision | Auditoria | Sensibilidade | Fail-closed | Observação anti-exposição |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.SUPPORT.PLATFORM_SUPPORT_CASE.v1 | Contrato de suporte | Suporte e Operação | support.platform_support_case.read | Incidente de serviço | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.SUPPORT.SUPPORT_OPERATION_CASE.v1 | Contrato de suporte | Suporte e Operação | support.support_operation_case.read | Incidente de serviço | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.SUPPORT.SERVICE_INCIDENT.v1 | API interna | Suporte e Operação | support.service_incident.read_or_manage | Incidente de serviço | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.SUPPORT.MAINTENANCE_WINDOW.v1 | API interna | Suporte e Operação | support.maintenance_window.read_or_manage | Incidente de serviço | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.SUPPORT.SERVICE_STATUS.v1 | Evento de fato ocorrido ou API interna | Suporte e Operação | support.event.consume_or_publish | Incidente de serviço | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.SUPPORT.DIAGNOSTIC_REQUEST.v1 | Comando | Suporte e Operação | support.diagnostic_request.request | Incidente de serviço; Diagnóstico técnico | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | não tratar solicitação como execução |
| NODUOS.SUPPORT.REMOTE_SUPPORT_SESSION.v1 | Contrato de suporte | Suporte e Operação | support.remote_support_session.read | Suporte remoto | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Crítico | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.SUPPORT.RUNBOOK.v1 | API interna | Suporte e Operação | support.runbook.read_or_manage | Incidente de serviço | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.SUPPORT.POST_INCIDENT_REVIEW.v1 | API interna | Suporte e Operação | support.post_incident_review.read | Incidente de serviço | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.SUPPORT.SUPPORT_KNOWLEDGE_BASE_REFERENCE.v1 | Contrato de suporte | Suporte e Operação | support.support_knowledge_base_reference.read | Incidente de serviço | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | preservar módulo dono e transportar só payload minimizado |
| NODUOS.SUPPORT.SUPPORT_ANALYTICS_READ_MODEL.v1 | Read model autorizado | Suporte e Operação | support.support_analytics.read | Incidente de serviço; BI e analytics | segredo bruto; biometria bruta; vídeo bruto sem política; documento completo sem finalidade; dado fora do tenant/contexto; dado identificável sem agregação/máscara | ResourceReference | Sim, por perfil e finalidade | Não isolado; seguir política LGPD | Explícita obrigatória | Retenção mínima por finalidade | Sim | Visualização e exportação quando aplicável | Sensível | Negar sem finalidade, política, escopo ou autorização | não usar como banco compartilhado |

## 47. Matriz de contratos com dados pessoais

| Contract ID | Owner | Categorias | Sensibilidade | Referência | Máscara | Retenção |
|---|---|---|---|---|---|---|
| NODUOS.TRANSVERSAL.ACTOR_REFERENCE.v1 | Transversal | Identidade técnica; Conta de usuário | Interno | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.TRANSVERSAL.AUTHORIZATION_DECISION.v1 | Transversal | Identidade técnica; Conta de usuário | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CORE.CORE_AUTHORIZATION.v1 | Core Platform | Conta de usuário; Identidade técnica | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.CORE.AUTHORIZATION_DECISION.v1 | Core Platform | Conta de usuário; Identidade técnica | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.CORE.USER_ACCOUNT_REFERENCE.v1 | Core Platform | Conta de usuário; Identidade técnica | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.PARTNER.PARTNER_PROFILE.v1 | Parceiros | Identidade técnica; Contato; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ORG.ORGANIZATION_PROFILE.v1 | Organizações | Identidade técnica; Contato; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ORG.ORGANIZATION_PEOPLE_SUMMARY_READ_MODEL.v1 | Organizações | Identidade técnica; Contato; Identidade pessoal; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_PROFILE.v1 | Pessoas e Clientes | Identidade pessoal; Perfil pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.CLIENT_PROFILE.v1 | Pessoas e Clientes | Identidade pessoal; Perfil de cliente | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_DOCUMENT.v1 | Pessoas e Clientes | Identidade pessoal; Documento pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_CONTACT.v1 | Pessoas e Clientes | Identidade pessoal; Contato | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_CONSENT.v1 | Pessoas e Clientes | Consentimento; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_UNIT_LINK.v1 | Pessoas e Clientes | Identidade pessoal; Vínculo com unidade, bloco, área ou ambiente | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_ORGANIZATION_LINK.v1 | Pessoas e Clientes | Identidade pessoal; Vínculo com organização | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.DEPENDENT_PROFILE.v1 | Pessoas e Clientes | Identidade pessoal; Perfil pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.SERVICE_PROVIDER_PROFILE.v1 | Pessoas e Clientes | Identidade pessoal; Perfil pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_ACCOUNT_LINK_REFERENCE.v1 | Pessoas e Clientes | Identidade pessoal; Conta de usuário | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PUBLIC_PERSON_IDENTITY_READ_MODEL.v1 | Pessoas e Clientes | Identidade pessoal; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.STRUCTURE.STRUCTURE_ROOT.v1 | Unidades, Blocos, Áreas e Ambientes | Identidade técnica; Vínculo com unidade, bloco, área ou ambiente | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.STRUCTURE.PHYSICAL_STRUCTURE_NODE.v1 | Unidades, Blocos, Áreas e Ambientes | Identidade técnica; Vínculo com unidade, bloco, área ou ambiente | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.STRUCTURE.STRUCTURE_HIERARCHY.v1 | Unidades, Blocos, Áreas e Ambientes | Identidade técnica; Vínculo com unidade, bloco, área ou ambiente | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.STRUCTURE.STRUCTURE_REFERENCE.v1 | Unidades, Blocos, Áreas e Ambientes | Identidade técnica; Vínculo com unidade, bloco, área ou ambiente | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.STRUCTURE.STRUCTURAL_RESOURCE_ASSIGNMENT.v1 | Unidades, Blocos, Áreas e Ambientes | Identidade técnica; Vínculo com unidade, bloco, área ou ambiente | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.STRUCTURE.STRUCTURE_PATH_READ_MODEL.v1 | Unidades, Blocos, Áreas e Ambientes | Identidade técnica; Vínculo com unidade, bloco, área ou ambiente | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.STRUCTURE.STRUCTURE_VISIBILITY.v1 | Unidades, Blocos, Áreas e Ambientes | Identidade técnica; Vínculo com unidade, bloco, área ou ambiente | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.STRUCTURE.STRUCTURE_RESERVABLE_FLAG.v1 | Unidades, Blocos, Áreas e Ambientes | Identidade técnica; Vínculo com unidade, bloco, área ou ambiente | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.GATEWAY.GATEWAY_AUTHORIZATION_SCOPE.v1 | Gateway Local / Mikrotik / Tunnel | Conta de usuário; Identidade técnica; Gateway; Túnel; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_AUTHORIZATION_SCOPE.v1 | Dispositivos | Conta de usuário; Identidade técnica; Dispositivo | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_AUTHORIZATION_SCOPE.v1 | Controle de Acesso | Conta de usuário; Identidade técnica; Acesso físico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_AUTHORIZATION_SCOPE.v1 | Câmeras / VMS | Conta de usuário; Identidade técnica; Câmera | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_AUTHORIZATION_SCOPE.v1 | Alarmes | Conta de usuário; Identidade técnica; Alarme | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_COMMENT.v1 | Tickets | Ticket; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MURAL.ANNOUNCEMENT_AUDIENCE.v1 | Mural Informativo | Mural; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MURAL.ANNOUNCEMENT_ACKNOWLEDGEMENT.v1 | Mural Informativo | Mural; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MURAL.ANNOUNCEMENT_POLL.v1 | Mural Informativo | Mural; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_PREFERENCE.v1 | Notificações | Notificação; Consentimento; Contato | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_OPT_IN.v1 | Notificações | Notificação; Consentimento; Contato | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_OPT_OUT.v1 | Notificações | Notificação; Consentimento; Contato | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_HUMAN_APPROVAL.v1 | Automações | Automação; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.DATA_SUBJECT_REQUEST.v1 | Segurança e LGPD | Política de segurança; Política de privacidade; Solicitação do titular; Identidade pessoal | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |

## 48. Matriz de contratos com dados financeiros

| Contract ID | Owner | Categorias | Sensibilidade | Referência | Máscara | Retenção |
|---|---|---|---|---|---|---|
| NODUOS.FINANCE.INVOICE.v1 | Financeiro | Financeiro; Cobrança | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.CHARGE.v1 | Financeiro | Financeiro; Cobrança | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.PAYMENT.v1 | Financeiro | Financeiro; Pagamento | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.PAYMENT_STATUS.v1 | Financeiro | Financeiro; Pagamento | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.RECEIPT.v1 | Financeiro | Financeiro; Recibo | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.OVERDUE_EVENT.v1 | Financeiro | Financeiro; Cobrança | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.FINANCIAL_AGREEMENT.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.COMMISSION.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.SPLIT.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.TRANSFER.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.FINANCIAL_READ_MODEL.v1 | Financeiro | Financeiro; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.FINANCIAL_RESTRICTION_SIGNAL.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.RESERVATION.RESERVATION_CHARGE_REQUEST.v1 | Reservas | Reserva; Financeiro; Cobrança | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |

## 49. Matriz de contratos com imagem, vídeo ou evidência

| Contract ID | Owner | Categorias | Sensibilidade | Referência | Máscara | Retenção |
|---|---|---|---|---|---|---|
| NODUOS.TRANSVERSAL.EVIDENCE_REFERENCE.v1 | Transversal | Identidade técnica; Evidência de vídeo; Cadeia de custódia | Crítico | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.CAMERA.CAMERA_RESOURCE.v1 | Câmeras / VMS | Câmera | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_STREAM_ACCESS.v1 | Câmeras / VMS | Câmera; Stream | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_LIVE_VIEW_REQUEST.v1 | Câmeras / VMS | Câmera; Stream | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_PLAYBACK_REQUEST.v1 | Câmeras / VMS | Câmera; Stream | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_CLIP.v1 | Câmeras / VMS | Câmera; Clip | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_SNAPSHOT.v1 | Câmeras / VMS | Câmera; Snapshot | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_EVIDENCE_REFERENCE.v1 | Câmeras / VMS | Evidência de vídeo; Cadeia de custódia; Câmera | Crítico | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.CAMERA.CAMERA_AUTHORIZATION_SCOPE.v1 | Câmeras / VMS | Conta de usuário; Identidade técnica; Câmera | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_ANALYTICS_READ_MODEL.v1 | Câmeras / VMS | Câmera; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.VIDEO_RETENTION_POLICY_BINDING.v1 | Câmeras / VMS | Retenção; Câmera | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUDIT.EVIDENCE_REFERENCE.v1 | Auditoria e Compliance | Evidência de vídeo; Cadeia de custódia; Auditoria; Compliance | Crítico | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.CHAIN_OF_CUSTODY_RECORD.v1 | Auditoria e Compliance | Auditoria; Compliance; Cadeia de custódia | Sensível | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |

## 50. Matriz de contratos com biometria ou credenciais físicas

| Contract ID | Owner | Categorias | Sensibilidade | Referência | Máscara | Retenção |
|---|---|---|---|---|---|---|
| NODUOS.GATEWAY.GATEWAY_CREDENTIAL_REFERENCE.v1 | Gateway Local / Mikrotik / Tunnel | Segredo; Gateway; Túnel; IP interno; Rota local | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_CREDENTIAL_REFERENCE.v1 | Dispositivos | Segredo; Dispositivo; Identidade técnica | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_CREDENTIAL.v1 | Controle de Acesso | Segredo; Acesso físico; Credencial física | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.TEMPORARY_QR_CODE.v1 | Convites e Visitantes | Visitante; Convite; QR temporário | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.CONNECTOR_CREDENTIAL_REFERENCE.v1 | Marketplace de Integrações | Segredo; Integração externa | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |

## 51. Matriz de contratos com visitantes

| Contract ID | Owner | Categorias | Sensibilidade | Referência | Máscara | Retenção |
|---|---|---|---|---|---|---|
| NODUOS.VISITOR.VISITOR_INVITE.v1 | Convites e Visitantes | Visitante; Convite | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.TEMPORARY_VISITOR_PROFILE.v1 | Convites e Visitantes | Visitante; Convite | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.TEMPORARY_QR_CODE.v1 | Convites e Visitantes | Visitante; Convite; QR temporário | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISIT_WINDOW.v1 | Convites e Visitantes | Visitante; Convite | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISIT_APPROVAL.v1 | Convites e Visitantes | Visitante; Convite | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISITOR_CHECK_IN.v1 | Convites e Visitantes | Visitante; Convite; Acesso físico; Evento de acesso | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISITOR_CHECK_OUT.v1 | Convites e Visitantes | Visitante; Convite; Acesso físico; Evento de acesso | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISITOR_ACCESS_REFERENCE.v1 | Convites e Visitantes | Visitante; Convite; Acesso físico; Evento de acesso | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISITOR_ANALYTICS_READ_MODEL.v1 | Convites e Visitantes | Visitante; Convite; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_GUEST_LIST_REFERENCE.v1 | Reservas | Reserva; Visitante | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |

## 52. Matriz de contratos com segredos, certificados, chaves ou tokens

| Contract ID | Owner | Categorias | Sensibilidade | Referência | Máscara | Retenção |
|---|---|---|---|---|---|---|
| NODUOS.TRANSVERSAL.SECRET_REFERENCE.v1 | Transversal | Identidade técnica; Segredo | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_CREDENTIAL_REFERENCE.v1 | Gateway Local / Mikrotik / Tunnel | Segredo; Gateway; Túnel; IP interno; Rota local | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_CREDENTIAL_REFERENCE.v1 | Dispositivos | Segredo; Dispositivo; Identidade técnica | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_CREDENTIAL.v1 | Controle de Acesso | Segredo; Acesso físico; Credencial física | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.THEME_TOKEN.v1 | White-label | Segredo; White-label asset | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.CERTIFICATE_REFERENCE.v1 | White-label | Certificado; Segredo; White-label asset | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.CONNECTOR_CREDENTIAL_REFERENCE.v1 | Marketplace de Integrações | Segredo; Integração externa | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.SECRET_POLICY.v1 | Segurança e LGPD | Segredo; Política de segurança; Política de privacidade | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |

## 53. Matriz de contratos com IP interno, rota, túnel ou diagnóstico

| Contract ID | Owner | Categorias | Sensibilidade | Referência | Máscara | Retenção |
|---|---|---|---|---|---|---|
| NODUOS.GATEWAY.GATEWAY_RECORD.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_AGENT.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_CREDENTIAL_REFERENCE.v1 | Gateway Local / Mikrotik / Tunnel | Segredo; Gateway; Túnel; IP interno; Rota local | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.TUNNEL_SESSION.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_HEALTH_READ_MODEL.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Diagnóstico técnico; Logs técnicos; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_DIAGNOSTIC.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Diagnóstico técnico; Logs técnicos; IP interno; Rota local | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_COMMAND.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Evento crítico; IP interno; Rota local | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_COMMAND_RESULT.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Evento crítico; IP interno; Rota local | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_DEVICE_DISCOVERY.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Dispositivo; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_DEVICE_REACHABILITY_READ_MODEL.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Diagnóstico técnico; Logs técnicos; Dispositivo; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_AUTHORIZATION_SCOPE.v1 | Gateway Local / Mikrotik / Tunnel | Conta de usuário; Identidade técnica; Gateway; Túnel; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_TECHNICAL_LOG.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Diagnóstico técnico; Logs técnicos; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_HEALTH_READ_MODEL.v1 | Dispositivos | Dispositivo; Diagnóstico técnico; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_STATUS_READ_MODEL.v1 | Dispositivos | Dispositivo; Diagnóstico técnico; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_DIAGNOSTIC.v1 | Dispositivos | Dispositivo; Diagnóstico técnico; Logs técnicos | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_TELEMETRY.v1 | Dispositivos | Dispositivo; Diagnóstico técnico; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_MAINTENANCE_RECORD.v1 | Dispositivos | Dispositivo; Diagnóstico técnico; Logs técnicos; Identidade técnica | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_ATTEMPT.v1 | Notificações | Notificação; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_LOG.v1 | Notificações | Notificação; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.DIAGNOSTIC_REQUEST.v1 | Suporte e Operação | Incidente de serviço; Diagnóstico técnico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |

## 54. Matriz de contratos com suporte remoto

| Contract ID | Owner | Categorias | Sensibilidade | Referência | Máscara | Retenção |
|---|---|---|---|---|---|---|
| NODUOS.SUPPORT.REMOTE_SUPPORT_SESSION.v1 | Suporte e Operação | Suporte remoto | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |

## 55. Matriz de contratos com integrações externas e webhooks externos

| Contract ID | Owner | Categorias | Sensibilidade | Referência | Máscara | Retenção |
|---|---|---|---|---|---|---|
| NODUOS.MARKETPLACE.MARKETPLACE_CONNECTOR.v1 | Marketplace de Integrações | Integração externa | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.INTEGRATION_PROVIDER.v1 | Marketplace de Integrações | Integração externa | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.ADAPTER_PACKAGE.v1 | Marketplace de Integrações | Integração externa | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION.v1 | Marketplace de Integrações | Integração externa | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.CONNECTOR_VERSION.v1 | Marketplace de Integrações | Integração externa | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.CONNECTOR_COMPATIBILITY.v1 | Marketplace de Integrações | Integração externa | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.CONNECTOR_CREDENTIAL_REFERENCE.v1 | Marketplace de Integrações | Segredo; Integração externa | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.CONNECTOR_WEBHOOK_ENDPOINT.v1 | Marketplace de Integrações | Integração externa; Webhook externo | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.EXTERNAL_EVENT_MAPPING.v1 | Marketplace de Integrações | Integração externa | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.MARKETPLACE_AUDIT_TRAIL.v1 | Marketplace de Integrações | Auditoria; Integração externa | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.SECURITY.THIRD_PARTY_RISK.v1 | Segurança e LGPD | Política de segurança; Política de privacidade; Integração externa | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |

## 56. Matriz de contratos com exportação sensível

| Contract ID | Owner | Categorias | Sensibilidade | Referência | Máscara | Retenção |
|---|---|---|---|---|---|---|
| NODUOS.MASTER.MASTER_SENSITIVE_EXPORT_REQUEST.v1 | Master | Identidade técnica; Exportação | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_EXPORT_REQUEST.v1 | Relatórios / BI | BI e analytics; Exportação | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_EXPORT_LOG.v1 | Relatórios / BI | BI e analytics; Exportação | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUDIT.AUDIT_EXPORT.v1 | Auditoria e Compliance | Auditoria; Compliance; Exportação | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |

## 57. Matriz de contratos que exigem EvidenceReference

| Contract ID | Owner | Categorias | Sensibilidade | Referência | Máscara | Retenção |
|---|---|---|---|---|---|---|
| NODUOS.TRANSVERSAL.EVIDENCE_REFERENCE.v1 | Transversal | Identidade técnica; Evidência de vídeo; Cadeia de custódia | Crítico | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.CAMERA.CAMERA_EVIDENCE_REFERENCE.v1 | Câmeras / VMS | Evidência de vídeo; Cadeia de custódia; Câmera | Crítico | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.EVIDENCE_REFERENCE.v1 | Auditoria e Compliance | Evidência de vídeo; Cadeia de custódia; Auditoria; Compliance | Crítico | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.CHAIN_OF_CUSTODY_RECORD.v1 | Auditoria e Compliance | Auditoria; Compliance; Cadeia de custódia | Sensível | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |

## 58. Matriz de contratos que exigem SecretReference

| Contract ID | Owner | Categorias | Sensibilidade | Referência | Máscara | Retenção |
|---|---|---|---|---|---|---|
| NODUOS.TRANSVERSAL.SECRET_REFERENCE.v1 | Transversal | Identidade técnica; Segredo | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_CREDENTIAL_REFERENCE.v1 | Gateway Local / Mikrotik / Tunnel | Segredo; Gateway; Túnel; IP interno; Rota local | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_CREDENTIAL_REFERENCE.v1 | Dispositivos | Segredo; Dispositivo; Identidade técnica | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_CREDENTIAL.v1 | Controle de Acesso | Segredo; Acesso físico; Credencial física | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.THEME_TOKEN.v1 | White-label | Segredo; White-label asset | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.CERTIFICATE_REFERENCE.v1 | White-label | Certificado; Segredo; White-label asset | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.CONNECTOR_CREDENTIAL_REFERENCE.v1 | Marketplace de Integrações | Segredo; Integração externa | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.SECRET_POLICY.v1 | Segurança e LGPD | Segredo; Política de segurança; Política de privacidade | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |

## 59. Matriz de contratos que exigem ResourceReference

| Contract ID | Owner | Categorias | Sensibilidade | Referência | Máscara | Retenção |
|---|---|---|---|---|---|---|
| NODUOS.TRANSVERSAL.EVENT_ENVELOPE.v1 | Transversal | Identidade técnica | Interno | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.TRANSVERSAL.ERROR.v1 | Transversal | Identidade técnica | Interno | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.TRANSVERSAL.PAGINATION.v1 | Transversal | Identidade técnica | Interno | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.TRANSVERSAL.FILTER.v1 | Transversal | Identidade técnica | Interno | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.TRANSVERSAL.SORT.v1 | Transversal | Identidade técnica | Interno | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.TRANSVERSAL.ACTOR_REFERENCE.v1 | Transversal | Identidade técnica; Conta de usuário | Interno | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.TRANSVERSAL.TENANT_CONTEXT.v1 | Transversal | Identidade técnica | Interno | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.TRANSVERSAL.AUTHORIZATION_DECISION.v1 | Transversal | Identidade técnica; Conta de usuário | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TRANSVERSAL.RESOURCE_REFERENCE.v1 | Transversal | Identidade técnica | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TRANSVERSAL.SECRET_REFERENCE.v1 | Transversal | Identidade técnica; Segredo | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TRANSVERSAL.FILE_ATTACHMENT_REFERENCE.v1 | Transversal | Identidade técnica | Interno | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.TRANSVERSAL.EVIDENCE_REFERENCE.v1 | Transversal | Identidade técnica; Evidência de vídeo; Cadeia de custódia | Crítico | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.TRANSVERSAL.AUDIT_TRAIL_REFERENCE.v1 | Transversal | Identidade técnica; Auditoria | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.TRANSVERSAL.DATA_SENSITIVITY.v1 | Transversal | Identidade técnica | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TRANSVERSAL.RETENTION_POLICY_REFERENCE.v1 | Transversal | Identidade técnica; Retenção | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TRANSVERSAL.MASKING_POLICY_REFERENCE.v1 | Transversal | Identidade técnica; Mascaramento | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TRANSVERSAL.IDEMPOTENCY.v1 | Transversal | Identidade técnica | Interno | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.TRANSVERSAL.CORRELATION.v1 | Transversal | Identidade técnica | Interno | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.TRANSVERSAL.DEAD_LETTER.v1 | Transversal | Identidade técnica | Interno | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.TRANSVERSAL.CONTRACT_DEPRECATION_POLICY.v1 | Transversal | Identidade técnica | Interno | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.CORE.CORE_AUTHORIZATION.v1 | Core Platform | Conta de usuário; Identidade técnica | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.CORE.AUTHORIZATION_DECISION.v1 | Core Platform | Conta de usuário; Identidade técnica | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.CORE.RESOURCE_REFERENCE.v1 | Core Platform | Identidade técnica | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.CORE.CONTEXT.v1 | Core Platform | Identidade técnica | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.CORE.TENANT.v1 | Core Platform | Identidade técnica | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.CORE.USER_ACCOUNT_REFERENCE.v1 | Core Platform | Conta de usuário; Identidade técnica | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.CORE.PERMISSION_GRANT.v1 | Core Platform | Identidade técnica | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.CORE.INHERITANCE_GRANT.v1 | Core Platform | Identidade técnica | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.CORE.MODULE_REGISTRY.v1 | Core Platform | Identidade técnica | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.CORE.LICENSE_ENTITLEMENT.v1 | Core Platform | Identidade técnica | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.CORE.FEATURE_FLAG.v1 | Core Platform | Identidade técnica | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.CORE.EVENT_ENVELOPE.v1 | Core Platform | Identidade técnica | Interno | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.CORE.CORE_AUDIT_TRAIL.v1 | Core Platform | Auditoria | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.CORE.CORE_SECURITY_LOG.v1 | Core Platform | Política de segurança; Política de privacidade | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CORE.CORE_API_CLIENT.v1 | Core Platform | Identidade técnica | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.MASTER.MASTER_PARTNER_GOVERNANCE.v1 | Master | Identidade técnica | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.MASTER.MASTER_MODULE_RELEASE_POLICY.v1 | Master | Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MASTER.MASTER_COMMERCIAL_PLAN_POLICY.v1 | Master | Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MASTER.MASTER_LICENSE_LIMIT_POLICY.v1 | Master | Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MASTER.MASTER_WHITE_LABEL_GOVERNANCE.v1 | Master | Identidade técnica | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.MASTER.MASTER_MARKETPLACE_GOVERNANCE.v1 | Master | Identidade técnica | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.MASTER.MASTER_INTEGRATION_GOVERNANCE.v1 | Master | Identidade técnica | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.MASTER.MASTER_GLOBAL_OVERVIEW_READ_MODEL.v1 | Master | Identidade técnica; BI e analytics | Restrito | ResourceReference | Sim, quando exibir identificador | Retenção padrão do domínio |
| NODUOS.MASTER.MASTER_SENSITIVE_EXPORT_REQUEST.v1 | Master | Identidade técnica; Exportação | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PARTNER.PARTNER_RECORD.v1 | Parceiros | Identidade técnica | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.PARTNER.PARTNER_PROFILE.v1 | Parceiros | Identidade técnica; Contato; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PARTNER.PARTNER_SCOPE.v1 | Parceiros | Identidade técnica | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.PARTNER.PARTNER_ORGANIZATION_PORTFOLIO_READ_MODEL.v1 | Parceiros | Identidade técnica; BI e analytics | Restrito | ResourceReference | Sim, quando exibir identificador | Retenção padrão do domínio |
| NODUOS.PARTNER.PARTNER_DEPLOYMENT_OVERVIEW_READ_MODEL.v1 | Parceiros | Identidade técnica; BI e analytics | Restrito | ResourceReference | Sim, quando exibir identificador | Retenção padrão do domínio |
| NODUOS.PARTNER.PARTNER_GATEWAY_REGISTRATION_REQUEST.v1 | Parceiros | Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PARTNER.PARTNER_DEVICE_REGISTRATION_REQUEST.v1 | Parceiros | Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PARTNER.PARTNER_MODULE_AVAILABILITY_READ_MODEL.v1 | Parceiros | Identidade técnica; BI e analytics | Restrito | ResourceReference | Sim, quando exibir identificador | Retenção padrão do domínio |
| NODUOS.PARTNER.PARTNER_PLAN_VIEW_READ_MODEL.v1 | Parceiros | Identidade técnica; BI e analytics | Restrito | ResourceReference | Sim, quando exibir identificador | Retenção padrão do domínio |
| NODUOS.PARTNER.PARTNER_LICENSE_VIEW_READ_MODEL.v1 | Parceiros | Identidade técnica; BI e analytics | Restrito | ResourceReference | Sim, quando exibir identificador | Retenção padrão do domínio |
| NODUOS.PARTNER.PARTNER_WHITE_LABEL_PERMISSION_READ_MODEL.v1 | Parceiros | Identidade técnica; BI e analytics | Restrito | ResourceReference | Sim, quando exibir identificador | Retenção padrão do domínio |
| NODUOS.ORG.ORGANIZATION_RECORD.v1 | Organizações | Identidade técnica | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.ORG.ORGANIZATION_PROFILE.v1 | Organizações | Identidade técnica; Contato; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ORG.ORGANIZATION_SETTINGS.v1 | Organizações | Identidade técnica | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.ORG.ORGANIZATION_STATUS.v1 | Organizações | Identidade técnica | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.ORG.ORGANIZATION_REFERENCE.v1 | Organizações | Identidade técnica | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.ORG.ORGANIZATION_MODULE_AVAILABILITY_READ_MODEL.v1 | Organizações | Identidade técnica; BI e analytics | Restrito | ResourceReference | Sim, quando exibir identificador | Retenção padrão do domínio |
| NODUOS.ORG.ORGANIZATION_STRUCTURE_SUMMARY_READ_MODEL.v1 | Organizações | Identidade técnica; BI e analytics | Restrito | ResourceReference | Sim, quando exibir identificador | Retenção padrão do domínio |
| NODUOS.ORG.ORGANIZATION_PEOPLE_SUMMARY_READ_MODEL.v1 | Organizações | Identidade técnica; Contato; Identidade pessoal; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ORG.ORGANIZATION_GATEWAY_SUMMARY_READ_MODEL.v1 | Organizações | Identidade técnica; BI e analytics | Restrito | ResourceReference | Sim, quando exibir identificador | Retenção padrão do domínio |
| NODUOS.ORG.ORGANIZATION_DEVICE_SUMMARY_READ_MODEL.v1 | Organizações | Identidade técnica; BI e analytics | Restrito | ResourceReference | Sim, quando exibir identificador | Retenção padrão do domínio |
| NODUOS.PEOPLE.PERSON_PROFILE.v1 | Pessoas e Clientes | Identidade pessoal; Perfil pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.CLIENT_PROFILE.v1 | Pessoas e Clientes | Identidade pessoal; Perfil de cliente | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_DOCUMENT.v1 | Pessoas e Clientes | Identidade pessoal; Documento pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_CONTACT.v1 | Pessoas e Clientes | Identidade pessoal; Contato | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_CONSENT.v1 | Pessoas e Clientes | Consentimento; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_UNIT_LINK.v1 | Pessoas e Clientes | Identidade pessoal; Vínculo com unidade, bloco, área ou ambiente | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_ORGANIZATION_LINK.v1 | Pessoas e Clientes | Identidade pessoal; Vínculo com organização | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.DEPENDENT_PROFILE.v1 | Pessoas e Clientes | Identidade pessoal; Perfil pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.SERVICE_PROVIDER_PROFILE.v1 | Pessoas e Clientes | Identidade pessoal; Perfil pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_ACCOUNT_LINK_REFERENCE.v1 | Pessoas e Clientes | Identidade pessoal; Conta de usuário | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PUBLIC_PERSON_IDENTITY_READ_MODEL.v1 | Pessoas e Clientes | Identidade pessoal; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.STRUCTURE.STRUCTURE_ROOT.v1 | Unidades, Blocos, Áreas e Ambientes | Identidade técnica; Vínculo com unidade, bloco, área ou ambiente | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.STRUCTURE.PHYSICAL_STRUCTURE_NODE.v1 | Unidades, Blocos, Áreas e Ambientes | Identidade técnica; Vínculo com unidade, bloco, área ou ambiente | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.STRUCTURE.STRUCTURE_HIERARCHY.v1 | Unidades, Blocos, Áreas e Ambientes | Identidade técnica; Vínculo com unidade, bloco, área ou ambiente | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.STRUCTURE.STRUCTURE_REFERENCE.v1 | Unidades, Blocos, Áreas e Ambientes | Identidade técnica; Vínculo com unidade, bloco, área ou ambiente | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.STRUCTURE.STRUCTURAL_RESOURCE_ASSIGNMENT.v1 | Unidades, Blocos, Áreas e Ambientes | Identidade técnica; Vínculo com unidade, bloco, área ou ambiente | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.STRUCTURE.STRUCTURE_PATH_READ_MODEL.v1 | Unidades, Blocos, Áreas e Ambientes | Identidade técnica; Vínculo com unidade, bloco, área ou ambiente | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.STRUCTURE.STRUCTURE_VISIBILITY.v1 | Unidades, Blocos, Áreas e Ambientes | Identidade técnica; Vínculo com unidade, bloco, área ou ambiente | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.STRUCTURE.STRUCTURE_RESERVABLE_FLAG.v1 | Unidades, Blocos, Áreas e Ambientes | Identidade técnica; Vínculo com unidade, bloco, área ou ambiente | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.POLICY.ADVANCED_POLICY.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.POLICY_CONDITION.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.POLICY_EFFECT.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.POLICY_SCOPE.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.DELEGATION_RULE.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.POLICY_EXCEPTION.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.EFFECTIVE_PERMISSION_READ_MODEL.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.ACCESS_SIMULATION.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.POLICY_EVALUATION.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.PERMISSION_CONFLICT.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_RECORD.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_AGENT.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_CREDENTIAL_REFERENCE.v1 | Gateway Local / Mikrotik / Tunnel | Segredo; Gateway; Túnel; IP interno; Rota local | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.TUNNEL_SESSION.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_HEALTH_READ_MODEL.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Diagnóstico técnico; Logs técnicos; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_DIAGNOSTIC.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Diagnóstico técnico; Logs técnicos; IP interno; Rota local | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_COMMAND.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Evento crítico; IP interno; Rota local | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_COMMAND_RESULT.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Evento crítico; IP interno; Rota local | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_DEVICE_DISCOVERY.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Dispositivo; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_DEVICE_REACHABILITY_READ_MODEL.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Diagnóstico técnico; Logs técnicos; Dispositivo; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_AUTHORIZATION_SCOPE.v1 | Gateway Local / Mikrotik / Tunnel | Conta de usuário; Identidade técnica; Gateway; Túnel; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_TECHNICAL_LOG.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Diagnóstico técnico; Logs técnicos; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_RECORD.v1 | Dispositivos | Dispositivo; Identidade técnica | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_REFERENCE.v1 | Dispositivos | Dispositivo; Identidade técnica | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_IDENTITY.v1 | Dispositivos | Dispositivo; Identidade técnica | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_CAPABILITY.v1 | Dispositivos | Dispositivo | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_HEALTH_READ_MODEL.v1 | Dispositivos | Dispositivo; Diagnóstico técnico; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_STATUS_READ_MODEL.v1 | Dispositivos | Dispositivo; Diagnóstico técnico; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_DIAGNOSTIC.v1 | Dispositivos | Dispositivo; Diagnóstico técnico; Logs técnicos | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_TELEMETRY.v1 | Dispositivos | Dispositivo; Diagnóstico técnico; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_LIFECYCLE.v1 | Dispositivos | Dispositivo | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_CREDENTIAL_REFERENCE.v1 | Dispositivos | Segredo; Dispositivo; Identidade técnica | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_AUTHORIZATION_SCOPE.v1 | Dispositivos | Conta de usuário; Identidade técnica; Dispositivo | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_MAINTENANCE_RECORD.v1 | Dispositivos | Dispositivo; Diagnóstico técnico; Logs técnicos; Identidade técnica | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_POINT.v1 | Controle de Acesso | Acesso físico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_CREDENTIAL.v1 | Controle de Acesso | Segredo; Acesso físico; Credencial física | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_RULE.v1 | Controle de Acesso | Acesso físico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_POLICY_BINDING.v1 | Controle de Acesso | Acesso físico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_SCHEDULE.v1 | Controle de Acesso | Acesso físico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_ATTEMPT_EVENT.v1 | Controle de Acesso | Acesso físico; Evento de acesso | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_EVENT.v1 | Controle de Acesso | Acesso físico; Evento de acesso | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_EXECUTION_COMMAND.v1 | Controle de Acesso | Acesso físico; Evento de acesso; Evento crítico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_EXECUTION_RESULT.v1 | Controle de Acesso | Acesso físico; Evento de acesso; Evento crítico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_AUTHORIZATION_SCOPE.v1 | Controle de Acesso | Conta de usuário; Identidade técnica; Acesso físico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_OFFLINE_POLICY.v1 | Controle de Acesso | Acesso físico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_DEVICE_BINDING.v1 | Controle de Acesso | Acesso físico; Dispositivo | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_RESOURCE.v1 | Câmeras / VMS | Câmera | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_STREAM_ACCESS.v1 | Câmeras / VMS | Câmera; Stream | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_LIVE_VIEW_REQUEST.v1 | Câmeras / VMS | Câmera; Stream | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_PLAYBACK_REQUEST.v1 | Câmeras / VMS | Câmera; Stream | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_CLIP.v1 | Câmeras / VMS | Câmera; Clip | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_SNAPSHOT.v1 | Câmeras / VMS | Câmera; Snapshot | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_EVIDENCE_REFERENCE.v1 | Câmeras / VMS | Evidência de vídeo; Cadeia de custódia; Câmera | Crítico | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.CAMERA.CAMERA_AUTHORIZATION_SCOPE.v1 | Câmeras / VMS | Conta de usuário; Identidade técnica; Câmera | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_ANALYTICS_READ_MODEL.v1 | Câmeras / VMS | Câmera; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.VIDEO_RETENTION_POLICY_BINDING.v1 | Câmeras / VMS | Retenção; Câmera | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_PANEL.v1 | Alarmes | Alarme | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_ZONE.v1 | Alarmes | Alarme | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_SENSOR.v1 | Alarmes | Alarme | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_ARMING_STATE.v1 | Alarmes | Alarme | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_EVENT.v1 | Alarmes | Alarme; Evento crítico | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_TRIGGER_EVENT.v1 | Alarmes | Alarme; Evento crítico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.PANIC_EVENT.v1 | Alarmes | Alarme; Pânico; Evento crítico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_ESCALATION.v1 | Alarmes | Alarme; Evento crítico | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_ACKNOWLEDGEMENT.v1 | Alarmes | Alarme | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_RESOLUTION.v1 | Alarmes | Alarme | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_AUTHORIZATION_SCOPE.v1 | Alarmes | Conta de usuário; Identidade técnica; Alarme | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_ANALYTICS_READ_MODEL.v1 | Alarmes | Alarme; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.FINANCE.INVOICE.v1 | Financeiro | Financeiro; Cobrança | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.CHARGE.v1 | Financeiro | Financeiro; Cobrança | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.PAYMENT.v1 | Financeiro | Financeiro; Pagamento | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.PAYMENT_STATUS.v1 | Financeiro | Financeiro; Pagamento | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.RECEIPT.v1 | Financeiro | Financeiro; Recibo | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.OVERDUE_EVENT.v1 | Financeiro | Financeiro; Cobrança | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.FINANCIAL_AGREEMENT.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.COMMISSION.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.SPLIT.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.TRANSFER.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.FINANCIAL_READ_MODEL.v1 | Financeiro | Financeiro; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.FINANCIAL_RESTRICTION_SIGNAL.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.VISITOR.VISITOR_INVITE.v1 | Convites e Visitantes | Visitante; Convite | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.TEMPORARY_VISITOR_PROFILE.v1 | Convites e Visitantes | Visitante; Convite | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.TEMPORARY_QR_CODE.v1 | Convites e Visitantes | Visitante; Convite; QR temporário | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISIT_WINDOW.v1 | Convites e Visitantes | Visitante; Convite | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISIT_APPROVAL.v1 | Convites e Visitantes | Visitante; Convite | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISITOR_CHECK_IN.v1 | Convites e Visitantes | Visitante; Convite; Acesso físico; Evento de acesso | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISITOR_CHECK_OUT.v1 | Convites e Visitantes | Visitante; Convite; Acesso físico; Evento de acesso | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISITOR_ACCESS_REFERENCE.v1 | Convites e Visitantes | Visitante; Convite; Acesso físico; Evento de acesso | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISITOR_ANALYTICS_READ_MODEL.v1 | Convites e Visitantes | Visitante; Convite; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.OPERATIONAL_TICKET.v1 | Tickets | Ticket | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_COMMENT.v1 | Tickets | Ticket; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_ATTACHMENT_REFERENCE.v1 | Tickets | Ticket; Anexo | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_SLA.v1 | Tickets | Ticket | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_ESCALATION.v1 | Tickets | Ticket | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_RESOLUTION.v1 | Tickets | Ticket | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_REOPEN.v1 | Tickets | Ticket | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_LINKED_RESOURCE_REFERENCE.v1 | Tickets | Identidade técnica; Ticket | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_ANALYTICS_READ_MODEL.v1 | Tickets | Ticket; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MURAL.ANNOUNCEMENT.v1 | Mural Informativo | Mural | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.MURAL.ANNOUNCEMENT_AUDIENCE.v1 | Mural Informativo | Mural; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MURAL.ANNOUNCEMENT_ATTACHMENT_REFERENCE.v1 | Mural Informativo | Mural; Anexo | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.MURAL.ANNOUNCEMENT_ACKNOWLEDGEMENT.v1 | Mural Informativo | Mural; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MURAL.ANNOUNCEMENT_POLL.v1 | Mural Informativo | Mural; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MURAL.ANNOUNCEMENT_READ_MODEL.v1 | Mural Informativo | Mural | Restrito | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.MURAL.ANNOUNCEMENT_ARCHIVED_EVENT.v1 | Mural Informativo | Mural | Interno | ResourceReference | Condicional | Retenção padrão do domínio |
| NODUOS.RESERVATION.RESERVABLE_RESOURCE.v1 | Reservas | Reserva | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION.v1 | Reservas | Reserva | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.AVAILABILITY_QUERY.v1 | Reservas | Reserva | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_HOLD.v1 | Reservas | Reserva | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_APPROVAL.v1 | Reservas | Reserva | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_CANCELLATION.v1 | Reservas | Reserva | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_CHECK_IN.v1 | Reservas | Reserva; Evento crítico | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_CHECK_OUT.v1 | Reservas | Reserva; Evento crítico | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_NO_SHOW.v1 | Reservas | Reserva; Evento crítico | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_ACCESS_WINDOW.v1 | Reservas | Reserva; Acesso físico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_CHARGE_REQUEST.v1 | Reservas | Reserva; Financeiro; Cobrança | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.RESERVATION.RESERVATION_GUEST_LIST_REFERENCE.v1 | Reservas | Reserva; Visitante | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_ANALYTICS_READ_MODEL.v1 | Reservas | Reserva; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_WORKSPACE.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_DASHBOARD.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_WIDGET.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_REPORT.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_REPORT_TEMPLATE.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_REPORT_SCHEDULE.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_EXPORT_REQUEST.v1 | Relatórios / BI | BI e analytics; Exportação | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_EXPORT_LOG.v1 | Relatórios / BI | BI e analytics; Exportação | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_READ_MODEL_SUBSCRIPTION.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_ANALYTICS_READ_MODEL.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_KPI.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_INSIGHT.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_ANOMALY_DETECTION.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.WHITE_LABEL_PROFILE.v1 | White-label | White-label asset | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.WHITE_LABEL_THEME.v1 | White-label | White-label asset | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.THEME_TOKEN.v1 | White-label | Segredo; White-label asset | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.COLOR_PALETTE.v1 | White-label | White-label asset | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.BRAND_ASSET_REFERENCE.v1 | White-label | White-label asset; Anexo | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.CUSTOM_DOMAIN.v1 | White-label | White-label asset; Domínio customizado | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.DOMAIN_VERIFICATION.v1 | White-label | White-label asset; Domínio customizado | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.CERTIFICATE_REFERENCE.v1 | White-label | Certificado; Segredo; White-label asset | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.BRAND_PUBLISHING_REQUEST.v1 | White-label | White-label asset | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.BRAND_PUBLISHING_RESULT.v1 | White-label | White-label asset | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.BRAND_PREVIEW.v1 | White-label | White-label asset | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.BRAND_FALLBACK_THEME.v1 | White-label | White-label asset | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.BRAND_VISUAL_TEMPLATE.v1 | White-label | White-label asset | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_REQUEST.v1 | Notificações | Notificação | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_TEMPLATE.v1 | Notificações | Notificação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_CHANNEL.v1 | Notificações | Notificação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_PROVIDER.v1 | Notificações | Notificação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_ATTEMPT.v1 | Notificações | Notificação; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_LOG.v1 | Notificações | Notificação; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_PREFERENCE.v1 | Notificações | Notificação; Consentimento; Contato | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_OPT_IN.v1 | Notificações | Notificação; Consentimento; Contato | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_OPT_OUT.v1 | Notificações | Notificação; Consentimento; Contato | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_ANALYTICS_READ_MODEL.v1 | Notificações | Notificação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_WORKFLOW.v1 | Automações | Automação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_TRIGGER.v1 | Automações | Automação; Evento crítico | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_CONDITION.v1 | Automações | Automação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_ACTION_REQUEST.v1 | Automações | Automação; Evento crítico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_EXECUTION.v1 | Automações | Automação; Evento crítico | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_RETRY.v1 | Automações | Automação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_PAUSE.v1 | Automações | Automação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_HUMAN_APPROVAL.v1 | Automações | Automação; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_ACTION_RESULT.v1 | Automações | Automação; Evento crítico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_READ_MODEL.v1 | Automações | Automação; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.MARKETPLACE_CONNECTOR.v1 | Marketplace de Integrações | Integração externa | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.INTEGRATION_PROVIDER.v1 | Marketplace de Integrações | Integração externa | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.ADAPTER_PACKAGE.v1 | Marketplace de Integrações | Integração externa | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION.v1 | Marketplace de Integrações | Integração externa | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.CONNECTOR_VERSION.v1 | Marketplace de Integrações | Integração externa | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.CONNECTOR_COMPATIBILITY.v1 | Marketplace de Integrações | Integração externa | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.CONNECTOR_CREDENTIAL_REFERENCE.v1 | Marketplace de Integrações | Segredo; Integração externa | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.CONNECTOR_WEBHOOK_ENDPOINT.v1 | Marketplace de Integrações | Integração externa; Webhook externo | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.EXTERNAL_EVENT_MAPPING.v1 | Marketplace de Integrações | Integração externa | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.MARKETPLACE_AUDIT_TRAIL.v1 | Marketplace de Integrações | Auditoria; Integração externa | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.AUDIT_TRAIL.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.AUDIT_QUERY.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.AUDIT_EXPORT.v1 | Auditoria e Compliance | Auditoria; Compliance; Exportação | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.COMPLIANCE_CASE.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.COMPLIANCE_INVESTIGATION.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.EVIDENCE_REFERENCE.v1 | Auditoria e Compliance | Evidência de vídeo; Cadeia de custódia; Auditoria; Compliance | Crítico | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.CHAIN_OF_CUSTODY_RECORD.v1 | Auditoria e Compliance | Auditoria; Compliance; Cadeia de custódia | Sensível | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.AUDIT_ALERT.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.COMPLIANCE_REPORT.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.SECURITY.SECURITY_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.PRIVACY_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.DATA_PROTECTION_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.CONSENT_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade; Consentimento | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.CONSENT_RECORD.v1 | Segurança e LGPD | Política de segurança; Política de privacidade; Consentimento | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.DATA_PROCESSING_RECORD.v1 | Segurança e LGPD | Política de segurança; Política de privacidade | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.DATA_SUBJECT_REQUEST.v1 | Segurança e LGPD | Política de segurança; Política de privacidade; Solicitação do titular; Identidade pessoal | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.RETENTION_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade; Retenção | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.MASKING_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade; Mascaramento | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.SENSITIVE_DATA_CLASSIFICATION.v1 | Segurança e LGPD | Política de segurança; Política de privacidade | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.EXPORT_CONTROL_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.SECRET_POLICY.v1 | Segurança e LGPD | Segredo; Política de segurança; Política de privacidade | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.THIRD_PARTY_RISK.v1 | Segurança e LGPD | Política de segurança; Política de privacidade; Integração externa | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.INCIDENT_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.PLATFORM_SUPPORT_CASE.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.SUPPORT_OPERATION_CASE.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.SERVICE_INCIDENT.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.MAINTENANCE_WINDOW.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.SERVICE_STATUS.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.DIAGNOSTIC_REQUEST.v1 | Suporte e Operação | Incidente de serviço; Diagnóstico técnico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.REMOTE_SUPPORT_SESSION.v1 | Suporte e Operação | Suporte remoto | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.RUNBOOK.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.POST_INCIDENT_REVIEW.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.SUPPORT_KNOWLEDGE_BASE_REFERENCE.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.SUPPORT_ANALYTICS_READ_MODEL.v1 | Suporte e Operação | Incidente de serviço; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |

## 60. Matriz de contratos que exigem mascaramento

| Contract ID | Owner | Categorias | Sensibilidade | Referência | Máscara | Retenção |
|---|---|---|---|---|---|---|
| NODUOS.TRANSVERSAL.AUTHORIZATION_DECISION.v1 | Transversal | Identidade técnica; Conta de usuário | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TRANSVERSAL.RESOURCE_REFERENCE.v1 | Transversal | Identidade técnica | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TRANSVERSAL.SECRET_REFERENCE.v1 | Transversal | Identidade técnica; Segredo | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TRANSVERSAL.EVIDENCE_REFERENCE.v1 | Transversal | Identidade técnica; Evidência de vídeo; Cadeia de custódia | Crítico | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.TRANSVERSAL.AUDIT_TRAIL_REFERENCE.v1 | Transversal | Identidade técnica; Auditoria | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.TRANSVERSAL.DATA_SENSITIVITY.v1 | Transversal | Identidade técnica | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TRANSVERSAL.RETENTION_POLICY_REFERENCE.v1 | Transversal | Identidade técnica; Retenção | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TRANSVERSAL.MASKING_POLICY_REFERENCE.v1 | Transversal | Identidade técnica; Mascaramento | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CORE.CORE_AUDIT_TRAIL.v1 | Core Platform | Auditoria | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.CORE.CORE_SECURITY_LOG.v1 | Core Platform | Política de segurança; Política de privacidade | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MASTER.MASTER_MODULE_RELEASE_POLICY.v1 | Master | Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MASTER.MASTER_COMMERCIAL_PLAN_POLICY.v1 | Master | Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MASTER.MASTER_LICENSE_LIMIT_POLICY.v1 | Master | Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MASTER.MASTER_GLOBAL_OVERVIEW_READ_MODEL.v1 | Master | Identidade técnica; BI e analytics | Restrito | ResourceReference | Sim, quando exibir identificador | Retenção padrão do domínio |
| NODUOS.MASTER.MASTER_SENSITIVE_EXPORT_REQUEST.v1 | Master | Identidade técnica; Exportação | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PARTNER.PARTNER_PROFILE.v1 | Parceiros | Identidade técnica; Contato; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PARTNER.PARTNER_ORGANIZATION_PORTFOLIO_READ_MODEL.v1 | Parceiros | Identidade técnica; BI e analytics | Restrito | ResourceReference | Sim, quando exibir identificador | Retenção padrão do domínio |
| NODUOS.PARTNER.PARTNER_DEPLOYMENT_OVERVIEW_READ_MODEL.v1 | Parceiros | Identidade técnica; BI e analytics | Restrito | ResourceReference | Sim, quando exibir identificador | Retenção padrão do domínio |
| NODUOS.PARTNER.PARTNER_GATEWAY_REGISTRATION_REQUEST.v1 | Parceiros | Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PARTNER.PARTNER_DEVICE_REGISTRATION_REQUEST.v1 | Parceiros | Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PARTNER.PARTNER_MODULE_AVAILABILITY_READ_MODEL.v1 | Parceiros | Identidade técnica; BI e analytics | Restrito | ResourceReference | Sim, quando exibir identificador | Retenção padrão do domínio |
| NODUOS.PARTNER.PARTNER_PLAN_VIEW_READ_MODEL.v1 | Parceiros | Identidade técnica; BI e analytics | Restrito | ResourceReference | Sim, quando exibir identificador | Retenção padrão do domínio |
| NODUOS.PARTNER.PARTNER_LICENSE_VIEW_READ_MODEL.v1 | Parceiros | Identidade técnica; BI e analytics | Restrito | ResourceReference | Sim, quando exibir identificador | Retenção padrão do domínio |
| NODUOS.PARTNER.PARTNER_WHITE_LABEL_PERMISSION_READ_MODEL.v1 | Parceiros | Identidade técnica; BI e analytics | Restrito | ResourceReference | Sim, quando exibir identificador | Retenção padrão do domínio |
| NODUOS.ORG.ORGANIZATION_PROFILE.v1 | Organizações | Identidade técnica; Contato; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ORG.ORGANIZATION_MODULE_AVAILABILITY_READ_MODEL.v1 | Organizações | Identidade técnica; BI e analytics | Restrito | ResourceReference | Sim, quando exibir identificador | Retenção padrão do domínio |
| NODUOS.ORG.ORGANIZATION_STRUCTURE_SUMMARY_READ_MODEL.v1 | Organizações | Identidade técnica; BI e analytics | Restrito | ResourceReference | Sim, quando exibir identificador | Retenção padrão do domínio |
| NODUOS.ORG.ORGANIZATION_PEOPLE_SUMMARY_READ_MODEL.v1 | Organizações | Identidade técnica; Contato; Identidade pessoal; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ORG.ORGANIZATION_GATEWAY_SUMMARY_READ_MODEL.v1 | Organizações | Identidade técnica; BI e analytics | Restrito | ResourceReference | Sim, quando exibir identificador | Retenção padrão do domínio |
| NODUOS.ORG.ORGANIZATION_DEVICE_SUMMARY_READ_MODEL.v1 | Organizações | Identidade técnica; BI e analytics | Restrito | ResourceReference | Sim, quando exibir identificador | Retenção padrão do domínio |
| NODUOS.PEOPLE.PERSON_PROFILE.v1 | Pessoas e Clientes | Identidade pessoal; Perfil pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.CLIENT_PROFILE.v1 | Pessoas e Clientes | Identidade pessoal; Perfil de cliente | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_DOCUMENT.v1 | Pessoas e Clientes | Identidade pessoal; Documento pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_CONTACT.v1 | Pessoas e Clientes | Identidade pessoal; Contato | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_CONSENT.v1 | Pessoas e Clientes | Consentimento; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_UNIT_LINK.v1 | Pessoas e Clientes | Identidade pessoal; Vínculo com unidade, bloco, área ou ambiente | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_ORGANIZATION_LINK.v1 | Pessoas e Clientes | Identidade pessoal; Vínculo com organização | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.DEPENDENT_PROFILE.v1 | Pessoas e Clientes | Identidade pessoal; Perfil pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.SERVICE_PROVIDER_PROFILE.v1 | Pessoas e Clientes | Identidade pessoal; Perfil pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_ACCOUNT_LINK_REFERENCE.v1 | Pessoas e Clientes | Identidade pessoal; Conta de usuário | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PUBLIC_PERSON_IDENTITY_READ_MODEL.v1 | Pessoas e Clientes | Identidade pessoal; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.ADVANCED_POLICY.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.POLICY_CONDITION.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.POLICY_EFFECT.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.POLICY_SCOPE.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.DELEGATION_RULE.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.POLICY_EXCEPTION.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.EFFECTIVE_PERMISSION_READ_MODEL.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.ACCESS_SIMULATION.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.POLICY_EVALUATION.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.PERMISSION_CONFLICT.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_RECORD.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_AGENT.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_CREDENTIAL_REFERENCE.v1 | Gateway Local / Mikrotik / Tunnel | Segredo; Gateway; Túnel; IP interno; Rota local | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.TUNNEL_SESSION.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_HEALTH_READ_MODEL.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Diagnóstico técnico; Logs técnicos; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_DIAGNOSTIC.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Diagnóstico técnico; Logs técnicos; IP interno; Rota local | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_COMMAND.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Evento crítico; IP interno; Rota local | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_COMMAND_RESULT.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Evento crítico; IP interno; Rota local | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_DEVICE_DISCOVERY.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Dispositivo; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_DEVICE_REACHABILITY_READ_MODEL.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Diagnóstico técnico; Logs técnicos; Dispositivo; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_AUTHORIZATION_SCOPE.v1 | Gateway Local / Mikrotik / Tunnel | Conta de usuário; Identidade técnica; Gateway; Túnel; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_TECHNICAL_LOG.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Diagnóstico técnico; Logs técnicos; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_RECORD.v1 | Dispositivos | Dispositivo; Identidade técnica | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_REFERENCE.v1 | Dispositivos | Dispositivo; Identidade técnica | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_IDENTITY.v1 | Dispositivos | Dispositivo; Identidade técnica | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_CAPABILITY.v1 | Dispositivos | Dispositivo | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_HEALTH_READ_MODEL.v1 | Dispositivos | Dispositivo; Diagnóstico técnico; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_STATUS_READ_MODEL.v1 | Dispositivos | Dispositivo; Diagnóstico técnico; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_DIAGNOSTIC.v1 | Dispositivos | Dispositivo; Diagnóstico técnico; Logs técnicos | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_TELEMETRY.v1 | Dispositivos | Dispositivo; Diagnóstico técnico; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_LIFECYCLE.v1 | Dispositivos | Dispositivo | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_CREDENTIAL_REFERENCE.v1 | Dispositivos | Segredo; Dispositivo; Identidade técnica | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_AUTHORIZATION_SCOPE.v1 | Dispositivos | Conta de usuário; Identidade técnica; Dispositivo | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_MAINTENANCE_RECORD.v1 | Dispositivos | Dispositivo; Diagnóstico técnico; Logs técnicos; Identidade técnica | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_POINT.v1 | Controle de Acesso | Acesso físico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_CREDENTIAL.v1 | Controle de Acesso | Segredo; Acesso físico; Credencial física | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_RULE.v1 | Controle de Acesso | Acesso físico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_POLICY_BINDING.v1 | Controle de Acesso | Acesso físico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_SCHEDULE.v1 | Controle de Acesso | Acesso físico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_ATTEMPT_EVENT.v1 | Controle de Acesso | Acesso físico; Evento de acesso | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_EVENT.v1 | Controle de Acesso | Acesso físico; Evento de acesso | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_EXECUTION_COMMAND.v1 | Controle de Acesso | Acesso físico; Evento de acesso; Evento crítico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_EXECUTION_RESULT.v1 | Controle de Acesso | Acesso físico; Evento de acesso; Evento crítico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_AUTHORIZATION_SCOPE.v1 | Controle de Acesso | Conta de usuário; Identidade técnica; Acesso físico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_OFFLINE_POLICY.v1 | Controle de Acesso | Acesso físico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_DEVICE_BINDING.v1 | Controle de Acesso | Acesso físico; Dispositivo | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_RESOURCE.v1 | Câmeras / VMS | Câmera | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_STREAM_ACCESS.v1 | Câmeras / VMS | Câmera; Stream | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_LIVE_VIEW_REQUEST.v1 | Câmeras / VMS | Câmera; Stream | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_PLAYBACK_REQUEST.v1 | Câmeras / VMS | Câmera; Stream | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_CLIP.v1 | Câmeras / VMS | Câmera; Clip | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_SNAPSHOT.v1 | Câmeras / VMS | Câmera; Snapshot | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_EVIDENCE_REFERENCE.v1 | Câmeras / VMS | Evidência de vídeo; Cadeia de custódia; Câmera | Crítico | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.CAMERA.CAMERA_AUTHORIZATION_SCOPE.v1 | Câmeras / VMS | Conta de usuário; Identidade técnica; Câmera | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_ANALYTICS_READ_MODEL.v1 | Câmeras / VMS | Câmera; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.VIDEO_RETENTION_POLICY_BINDING.v1 | Câmeras / VMS | Retenção; Câmera | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_PANEL.v1 | Alarmes | Alarme | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_ZONE.v1 | Alarmes | Alarme | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_SENSOR.v1 | Alarmes | Alarme | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_ARMING_STATE.v1 | Alarmes | Alarme | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_EVENT.v1 | Alarmes | Alarme; Evento crítico | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_TRIGGER_EVENT.v1 | Alarmes | Alarme; Evento crítico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.PANIC_EVENT.v1 | Alarmes | Alarme; Pânico; Evento crítico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_ESCALATION.v1 | Alarmes | Alarme; Evento crítico | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_ACKNOWLEDGEMENT.v1 | Alarmes | Alarme | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_RESOLUTION.v1 | Alarmes | Alarme | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_AUTHORIZATION_SCOPE.v1 | Alarmes | Conta de usuário; Identidade técnica; Alarme | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_ANALYTICS_READ_MODEL.v1 | Alarmes | Alarme; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.FINANCE.INVOICE.v1 | Financeiro | Financeiro; Cobrança | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.CHARGE.v1 | Financeiro | Financeiro; Cobrança | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.PAYMENT.v1 | Financeiro | Financeiro; Pagamento | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.PAYMENT_STATUS.v1 | Financeiro | Financeiro; Pagamento | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.RECEIPT.v1 | Financeiro | Financeiro; Recibo | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.OVERDUE_EVENT.v1 | Financeiro | Financeiro; Cobrança | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.FINANCIAL_AGREEMENT.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.COMMISSION.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.SPLIT.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.TRANSFER.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.FINANCIAL_READ_MODEL.v1 | Financeiro | Financeiro; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.FINANCIAL_RESTRICTION_SIGNAL.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.VISITOR.VISITOR_INVITE.v1 | Convites e Visitantes | Visitante; Convite | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.TEMPORARY_VISITOR_PROFILE.v1 | Convites e Visitantes | Visitante; Convite | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.TEMPORARY_QR_CODE.v1 | Convites e Visitantes | Visitante; Convite; QR temporário | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISIT_WINDOW.v1 | Convites e Visitantes | Visitante; Convite | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISIT_APPROVAL.v1 | Convites e Visitantes | Visitante; Convite | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISITOR_CHECK_IN.v1 | Convites e Visitantes | Visitante; Convite; Acesso físico; Evento de acesso | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISITOR_CHECK_OUT.v1 | Convites e Visitantes | Visitante; Convite; Acesso físico; Evento de acesso | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISITOR_ACCESS_REFERENCE.v1 | Convites e Visitantes | Visitante; Convite; Acesso físico; Evento de acesso | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISITOR_ANALYTICS_READ_MODEL.v1 | Convites e Visitantes | Visitante; Convite; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.OPERATIONAL_TICKET.v1 | Tickets | Ticket | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_COMMENT.v1 | Tickets | Ticket; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_ATTACHMENT_REFERENCE.v1 | Tickets | Ticket; Anexo | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_SLA.v1 | Tickets | Ticket | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_ESCALATION.v1 | Tickets | Ticket | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_RESOLUTION.v1 | Tickets | Ticket | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_REOPEN.v1 | Tickets | Ticket | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_LINKED_RESOURCE_REFERENCE.v1 | Tickets | Identidade técnica; Ticket | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_ANALYTICS_READ_MODEL.v1 | Tickets | Ticket; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MURAL.ANNOUNCEMENT_AUDIENCE.v1 | Mural Informativo | Mural; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MURAL.ANNOUNCEMENT_ACKNOWLEDGEMENT.v1 | Mural Informativo | Mural; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MURAL.ANNOUNCEMENT_POLL.v1 | Mural Informativo | Mural; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVABLE_RESOURCE.v1 | Reservas | Reserva | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION.v1 | Reservas | Reserva | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.AVAILABILITY_QUERY.v1 | Reservas | Reserva | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_HOLD.v1 | Reservas | Reserva | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_APPROVAL.v1 | Reservas | Reserva | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_CANCELLATION.v1 | Reservas | Reserva | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_CHECK_IN.v1 | Reservas | Reserva; Evento crítico | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_CHECK_OUT.v1 | Reservas | Reserva; Evento crítico | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_NO_SHOW.v1 | Reservas | Reserva; Evento crítico | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_ACCESS_WINDOW.v1 | Reservas | Reserva; Acesso físico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_CHARGE_REQUEST.v1 | Reservas | Reserva; Financeiro; Cobrança | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.RESERVATION.RESERVATION_GUEST_LIST_REFERENCE.v1 | Reservas | Reserva; Visitante | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_ANALYTICS_READ_MODEL.v1 | Reservas | Reserva; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_WORKSPACE.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_DASHBOARD.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_WIDGET.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_REPORT.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_REPORT_TEMPLATE.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_REPORT_SCHEDULE.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_EXPORT_REQUEST.v1 | Relatórios / BI | BI e analytics; Exportação | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_EXPORT_LOG.v1 | Relatórios / BI | BI e analytics; Exportação | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_READ_MODEL_SUBSCRIPTION.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_ANALYTICS_READ_MODEL.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_KPI.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_INSIGHT.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_ANOMALY_DETECTION.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.WHITE_LABEL_PROFILE.v1 | White-label | White-label asset | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.WHITE_LABEL_THEME.v1 | White-label | White-label asset | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.THEME_TOKEN.v1 | White-label | Segredo; White-label asset | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.COLOR_PALETTE.v1 | White-label | White-label asset | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.BRAND_ASSET_REFERENCE.v1 | White-label | White-label asset; Anexo | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.CUSTOM_DOMAIN.v1 | White-label | White-label asset; Domínio customizado | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.DOMAIN_VERIFICATION.v1 | White-label | White-label asset; Domínio customizado | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.CERTIFICATE_REFERENCE.v1 | White-label | Certificado; Segredo; White-label asset | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.BRAND_PUBLISHING_REQUEST.v1 | White-label | White-label asset | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.BRAND_PUBLISHING_RESULT.v1 | White-label | White-label asset | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.BRAND_PREVIEW.v1 | White-label | White-label asset | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.BRAND_FALLBACK_THEME.v1 | White-label | White-label asset | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.BRAND_VISUAL_TEMPLATE.v1 | White-label | White-label asset | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_REQUEST.v1 | Notificações | Notificação | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_TEMPLATE.v1 | Notificações | Notificação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_CHANNEL.v1 | Notificações | Notificação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_PROVIDER.v1 | Notificações | Notificação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_ATTEMPT.v1 | Notificações | Notificação; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_LOG.v1 | Notificações | Notificação; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_PREFERENCE.v1 | Notificações | Notificação; Consentimento; Contato | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_OPT_IN.v1 | Notificações | Notificação; Consentimento; Contato | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_OPT_OUT.v1 | Notificações | Notificação; Consentimento; Contato | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_ANALYTICS_READ_MODEL.v1 | Notificações | Notificação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_WORKFLOW.v1 | Automações | Automação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_TRIGGER.v1 | Automações | Automação; Evento crítico | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_CONDITION.v1 | Automações | Automação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_ACTION_REQUEST.v1 | Automações | Automação; Evento crítico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_EXECUTION.v1 | Automações | Automação; Evento crítico | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_RETRY.v1 | Automações | Automação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_PAUSE.v1 | Automações | Automação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_HUMAN_APPROVAL.v1 | Automações | Automação; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_ACTION_RESULT.v1 | Automações | Automação; Evento crítico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_READ_MODEL.v1 | Automações | Automação; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.MARKETPLACE_CONNECTOR.v1 | Marketplace de Integrações | Integração externa | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.INTEGRATION_PROVIDER.v1 | Marketplace de Integrações | Integração externa | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.ADAPTER_PACKAGE.v1 | Marketplace de Integrações | Integração externa | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION.v1 | Marketplace de Integrações | Integração externa | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.CONNECTOR_VERSION.v1 | Marketplace de Integrações | Integração externa | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.CONNECTOR_COMPATIBILITY.v1 | Marketplace de Integrações | Integração externa | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.CONNECTOR_CREDENTIAL_REFERENCE.v1 | Marketplace de Integrações | Segredo; Integração externa | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.CONNECTOR_WEBHOOK_ENDPOINT.v1 | Marketplace de Integrações | Integração externa; Webhook externo | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.EXTERNAL_EVENT_MAPPING.v1 | Marketplace de Integrações | Integração externa | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.MARKETPLACE_AUDIT_TRAIL.v1 | Marketplace de Integrações | Auditoria; Integração externa | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.AUDIT_TRAIL.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.AUDIT_QUERY.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.AUDIT_EXPORT.v1 | Auditoria e Compliance | Auditoria; Compliance; Exportação | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.COMPLIANCE_CASE.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.COMPLIANCE_INVESTIGATION.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.EVIDENCE_REFERENCE.v1 | Auditoria e Compliance | Evidência de vídeo; Cadeia de custódia; Auditoria; Compliance | Crítico | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.CHAIN_OF_CUSTODY_RECORD.v1 | Auditoria e Compliance | Auditoria; Compliance; Cadeia de custódia | Sensível | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.AUDIT_ALERT.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.COMPLIANCE_REPORT.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.SECURITY.SECURITY_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.PRIVACY_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.DATA_PROTECTION_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.CONSENT_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade; Consentimento | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.CONSENT_RECORD.v1 | Segurança e LGPD | Política de segurança; Política de privacidade; Consentimento | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.DATA_PROCESSING_RECORD.v1 | Segurança e LGPD | Política de segurança; Política de privacidade | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.DATA_SUBJECT_REQUEST.v1 | Segurança e LGPD | Política de segurança; Política de privacidade; Solicitação do titular; Identidade pessoal | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.RETENTION_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade; Retenção | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.MASKING_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade; Mascaramento | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.SENSITIVE_DATA_CLASSIFICATION.v1 | Segurança e LGPD | Política de segurança; Política de privacidade | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.EXPORT_CONTROL_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.SECRET_POLICY.v1 | Segurança e LGPD | Segredo; Política de segurança; Política de privacidade | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.THIRD_PARTY_RISK.v1 | Segurança e LGPD | Política de segurança; Política de privacidade; Integração externa | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.INCIDENT_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.PLATFORM_SUPPORT_CASE.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.SUPPORT_OPERATION_CASE.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.SERVICE_INCIDENT.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.MAINTENANCE_WINDOW.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.SERVICE_STATUS.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.DIAGNOSTIC_REQUEST.v1 | Suporte e Operação | Incidente de serviço; Diagnóstico técnico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.REMOTE_SUPPORT_SESSION.v1 | Suporte e Operação | Suporte remoto | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.RUNBOOK.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.POST_INCIDENT_REVIEW.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.SUPPORT_KNOWLEDGE_BASE_REFERENCE.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.SUPPORT_ANALYTICS_READ_MODEL.v1 | Suporte e Operação | Incidente de serviço; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |

## 61. Matriz de contratos que exigem consentimento

| Contract ID | Owner | Categorias | Sensibilidade | Referência | Máscara | Retenção |
|---|---|---|---|---|---|---|
| NODUOS.TRANSVERSAL.EVIDENCE_REFERENCE.v1 | Transversal | Identidade técnica; Evidência de vídeo; Cadeia de custódia | Crítico | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.PARTNER.PARTNER_PROFILE.v1 | Parceiros | Identidade técnica; Contato; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ORG.ORGANIZATION_PROFILE.v1 | Organizações | Identidade técnica; Contato; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ORG.ORGANIZATION_PEOPLE_SUMMARY_READ_MODEL.v1 | Organizações | Identidade técnica; Contato; Identidade pessoal; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_DOCUMENT.v1 | Pessoas e Clientes | Identidade pessoal; Documento pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_CONTACT.v1 | Pessoas e Clientes | Identidade pessoal; Contato | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_CONSENT.v1 | Pessoas e Clientes | Consentimento; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_STREAM_ACCESS.v1 | Câmeras / VMS | Câmera; Stream | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_LIVE_VIEW_REQUEST.v1 | Câmeras / VMS | Câmera; Stream | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_PLAYBACK_REQUEST.v1 | Câmeras / VMS | Câmera; Stream | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_CLIP.v1 | Câmeras / VMS | Câmera; Clip | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_SNAPSHOT.v1 | Câmeras / VMS | Câmera; Snapshot | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_EVIDENCE_REFERENCE.v1 | Câmeras / VMS | Evidência de vídeo; Cadeia de custódia; Câmera | Crítico | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.VISITOR.VISITOR_INVITE.v1 | Convites e Visitantes | Visitante; Convite | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.TEMPORARY_VISITOR_PROFILE.v1 | Convites e Visitantes | Visitante; Convite | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.TEMPORARY_QR_CODE.v1 | Convites e Visitantes | Visitante; Convite; QR temporário | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISIT_WINDOW.v1 | Convites e Visitantes | Visitante; Convite | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISIT_APPROVAL.v1 | Convites e Visitantes | Visitante; Convite | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISITOR_CHECK_IN.v1 | Convites e Visitantes | Visitante; Convite; Acesso físico; Evento de acesso | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISITOR_CHECK_OUT.v1 | Convites e Visitantes | Visitante; Convite; Acesso físico; Evento de acesso | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISITOR_ACCESS_REFERENCE.v1 | Convites e Visitantes | Visitante; Convite; Acesso físico; Evento de acesso | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISITOR_ANALYTICS_READ_MODEL.v1 | Convites e Visitantes | Visitante; Convite; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_GUEST_LIST_REFERENCE.v1 | Reservas | Reserva; Visitante | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_REQUEST.v1 | Notificações | Notificação | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_TEMPLATE.v1 | Notificações | Notificação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_CHANNEL.v1 | Notificações | Notificação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_PROVIDER.v1 | Notificações | Notificação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_ATTEMPT.v1 | Notificações | Notificação; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_LOG.v1 | Notificações | Notificação; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_PREFERENCE.v1 | Notificações | Notificação; Consentimento; Contato | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_OPT_IN.v1 | Notificações | Notificação; Consentimento; Contato | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_OPT_OUT.v1 | Notificações | Notificação; Consentimento; Contato | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_ANALYTICS_READ_MODEL.v1 | Notificações | Notificação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUDIT.EVIDENCE_REFERENCE.v1 | Auditoria e Compliance | Evidência de vídeo; Cadeia de custódia; Auditoria; Compliance | Crítico | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.SECURITY.CONSENT_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade; Consentimento | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.CONSENT_RECORD.v1 | Segurança e LGPD | Política de segurança; Política de privacidade; Consentimento | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.DATA_SUBJECT_REQUEST.v1 | Segurança e LGPD | Política de segurança; Política de privacidade; Solicitação do titular; Identidade pessoal | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |

## 62. Matriz de contratos que exigem retenção específica

| Contract ID | Owner | Categorias | Sensibilidade | Referência | Máscara | Retenção |
|---|---|---|---|---|---|---|
| NODUOS.TRANSVERSAL.EVIDENCE_REFERENCE.v1 | Transversal | Identidade técnica; Evidência de vídeo; Cadeia de custódia | Crítico | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.TRANSVERSAL.AUDIT_TRAIL_REFERENCE.v1 | Transversal | Identidade técnica; Auditoria | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.CORE.CORE_AUDIT_TRAIL.v1 | Core Platform | Auditoria | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.CAMERA.CAMERA_EVIDENCE_REFERENCE.v1 | Câmeras / VMS | Evidência de vídeo; Cadeia de custódia; Câmera | Crítico | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.INVOICE.v1 | Financeiro | Financeiro; Cobrança | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.CHARGE.v1 | Financeiro | Financeiro; Cobrança | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.PAYMENT.v1 | Financeiro | Financeiro; Pagamento | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.PAYMENT_STATUS.v1 | Financeiro | Financeiro; Pagamento | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.RECEIPT.v1 | Financeiro | Financeiro; Recibo | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.OVERDUE_EVENT.v1 | Financeiro | Financeiro; Cobrança | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.FINANCIAL_AGREEMENT.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.COMMISSION.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.SPLIT.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.TRANSFER.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.FINANCIAL_READ_MODEL.v1 | Financeiro | Financeiro; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.FINANCIAL_RESTRICTION_SIGNAL.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.RESERVATION.RESERVATION_CHARGE_REQUEST.v1 | Reservas | Reserva; Financeiro; Cobrança | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.MARKETPLACE.MARKETPLACE_AUDIT_TRAIL.v1 | Marketplace de Integrações | Auditoria; Integração externa | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.AUDIT_TRAIL.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.AUDIT_QUERY.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.AUDIT_EXPORT.v1 | Auditoria e Compliance | Auditoria; Compliance; Exportação | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.COMPLIANCE_CASE.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.COMPLIANCE_INVESTIGATION.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.EVIDENCE_REFERENCE.v1 | Auditoria e Compliance | Evidência de vídeo; Cadeia de custódia; Auditoria; Compliance | Crítico | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.CHAIN_OF_CUSTODY_RECORD.v1 | Auditoria e Compliance | Auditoria; Compliance; Cadeia de custódia | Sensível | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.AUDIT_ALERT.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.COMPLIANCE_REPORT.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |

## 63. Matriz de contratos que exigem descarte, expurgo ou anonimização

| Contract ID | Owner | Categorias | Sensibilidade | Referência | Máscara | Retenção |
|---|---|---|---|---|---|---|
| NODUOS.TRANSVERSAL.AUTHORIZATION_DECISION.v1 | Transversal | Identidade técnica; Conta de usuário | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TRANSVERSAL.RESOURCE_REFERENCE.v1 | Transversal | Identidade técnica | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TRANSVERSAL.SECRET_REFERENCE.v1 | Transversal | Identidade técnica; Segredo | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TRANSVERSAL.EVIDENCE_REFERENCE.v1 | Transversal | Identidade técnica; Evidência de vídeo; Cadeia de custódia | Crítico | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.TRANSVERSAL.AUDIT_TRAIL_REFERENCE.v1 | Transversal | Identidade técnica; Auditoria | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.TRANSVERSAL.DATA_SENSITIVITY.v1 | Transversal | Identidade técnica | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TRANSVERSAL.RETENTION_POLICY_REFERENCE.v1 | Transversal | Identidade técnica; Retenção | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TRANSVERSAL.MASKING_POLICY_REFERENCE.v1 | Transversal | Identidade técnica; Mascaramento | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CORE.CORE_AUDIT_TRAIL.v1 | Core Platform | Auditoria | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.CORE.CORE_SECURITY_LOG.v1 | Core Platform | Política de segurança; Política de privacidade | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MASTER.MASTER_MODULE_RELEASE_POLICY.v1 | Master | Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MASTER.MASTER_COMMERCIAL_PLAN_POLICY.v1 | Master | Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MASTER.MASTER_LICENSE_LIMIT_POLICY.v1 | Master | Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MASTER.MASTER_SENSITIVE_EXPORT_REQUEST.v1 | Master | Identidade técnica; Exportação | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PARTNER.PARTNER_PROFILE.v1 | Parceiros | Identidade técnica; Contato; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PARTNER.PARTNER_GATEWAY_REGISTRATION_REQUEST.v1 | Parceiros | Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PARTNER.PARTNER_DEVICE_REGISTRATION_REQUEST.v1 | Parceiros | Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ORG.ORGANIZATION_PROFILE.v1 | Organizações | Identidade técnica; Contato; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ORG.ORGANIZATION_PEOPLE_SUMMARY_READ_MODEL.v1 | Organizações | Identidade técnica; Contato; Identidade pessoal; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_PROFILE.v1 | Pessoas e Clientes | Identidade pessoal; Perfil pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.CLIENT_PROFILE.v1 | Pessoas e Clientes | Identidade pessoal; Perfil de cliente | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_DOCUMENT.v1 | Pessoas e Clientes | Identidade pessoal; Documento pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_CONTACT.v1 | Pessoas e Clientes | Identidade pessoal; Contato | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_CONSENT.v1 | Pessoas e Clientes | Consentimento; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_UNIT_LINK.v1 | Pessoas e Clientes | Identidade pessoal; Vínculo com unidade, bloco, área ou ambiente | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_ORGANIZATION_LINK.v1 | Pessoas e Clientes | Identidade pessoal; Vínculo com organização | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.DEPENDENT_PROFILE.v1 | Pessoas e Clientes | Identidade pessoal; Perfil pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.SERVICE_PROVIDER_PROFILE.v1 | Pessoas e Clientes | Identidade pessoal; Perfil pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_ACCOUNT_LINK_REFERENCE.v1 | Pessoas e Clientes | Identidade pessoal; Conta de usuário | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PUBLIC_PERSON_IDENTITY_READ_MODEL.v1 | Pessoas e Clientes | Identidade pessoal; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.ADVANCED_POLICY.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.POLICY_CONDITION.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.POLICY_EFFECT.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.POLICY_SCOPE.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.DELEGATION_RULE.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.POLICY_EXCEPTION.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.EFFECTIVE_PERMISSION_READ_MODEL.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.ACCESS_SIMULATION.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.POLICY_EVALUATION.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.PERMISSION_CONFLICT.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_RECORD.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_AGENT.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_CREDENTIAL_REFERENCE.v1 | Gateway Local / Mikrotik / Tunnel | Segredo; Gateway; Túnel; IP interno; Rota local | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.TUNNEL_SESSION.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_HEALTH_READ_MODEL.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Diagnóstico técnico; Logs técnicos; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_DIAGNOSTIC.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Diagnóstico técnico; Logs técnicos; IP interno; Rota local | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_COMMAND.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Evento crítico; IP interno; Rota local | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_COMMAND_RESULT.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Evento crítico; IP interno; Rota local | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_DEVICE_DISCOVERY.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Dispositivo; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_DEVICE_REACHABILITY_READ_MODEL.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Diagnóstico técnico; Logs técnicos; Dispositivo; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_AUTHORIZATION_SCOPE.v1 | Gateway Local / Mikrotik / Tunnel | Conta de usuário; Identidade técnica; Gateway; Túnel; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_TECHNICAL_LOG.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Diagnóstico técnico; Logs técnicos; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_RECORD.v1 | Dispositivos | Dispositivo; Identidade técnica | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_REFERENCE.v1 | Dispositivos | Dispositivo; Identidade técnica | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_IDENTITY.v1 | Dispositivos | Dispositivo; Identidade técnica | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_CAPABILITY.v1 | Dispositivos | Dispositivo | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_HEALTH_READ_MODEL.v1 | Dispositivos | Dispositivo; Diagnóstico técnico; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_STATUS_READ_MODEL.v1 | Dispositivos | Dispositivo; Diagnóstico técnico; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_DIAGNOSTIC.v1 | Dispositivos | Dispositivo; Diagnóstico técnico; Logs técnicos | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_TELEMETRY.v1 | Dispositivos | Dispositivo; Diagnóstico técnico; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_LIFECYCLE.v1 | Dispositivos | Dispositivo | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_CREDENTIAL_REFERENCE.v1 | Dispositivos | Segredo; Dispositivo; Identidade técnica | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_AUTHORIZATION_SCOPE.v1 | Dispositivos | Conta de usuário; Identidade técnica; Dispositivo | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_MAINTENANCE_RECORD.v1 | Dispositivos | Dispositivo; Diagnóstico técnico; Logs técnicos; Identidade técnica | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_POINT.v1 | Controle de Acesso | Acesso físico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_CREDENTIAL.v1 | Controle de Acesso | Segredo; Acesso físico; Credencial física | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_RULE.v1 | Controle de Acesso | Acesso físico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_POLICY_BINDING.v1 | Controle de Acesso | Acesso físico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_SCHEDULE.v1 | Controle de Acesso | Acesso físico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_ATTEMPT_EVENT.v1 | Controle de Acesso | Acesso físico; Evento de acesso | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_EVENT.v1 | Controle de Acesso | Acesso físico; Evento de acesso | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_EXECUTION_COMMAND.v1 | Controle de Acesso | Acesso físico; Evento de acesso; Evento crítico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_EXECUTION_RESULT.v1 | Controle de Acesso | Acesso físico; Evento de acesso; Evento crítico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_AUTHORIZATION_SCOPE.v1 | Controle de Acesso | Conta de usuário; Identidade técnica; Acesso físico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_OFFLINE_POLICY.v1 | Controle de Acesso | Acesso físico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_DEVICE_BINDING.v1 | Controle de Acesso | Acesso físico; Dispositivo | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_RESOURCE.v1 | Câmeras / VMS | Câmera | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_STREAM_ACCESS.v1 | Câmeras / VMS | Câmera; Stream | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_LIVE_VIEW_REQUEST.v1 | Câmeras / VMS | Câmera; Stream | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_PLAYBACK_REQUEST.v1 | Câmeras / VMS | Câmera; Stream | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_CLIP.v1 | Câmeras / VMS | Câmera; Clip | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_SNAPSHOT.v1 | Câmeras / VMS | Câmera; Snapshot | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_EVIDENCE_REFERENCE.v1 | Câmeras / VMS | Evidência de vídeo; Cadeia de custódia; Câmera | Crítico | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.CAMERA.CAMERA_AUTHORIZATION_SCOPE.v1 | Câmeras / VMS | Conta de usuário; Identidade técnica; Câmera | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_ANALYTICS_READ_MODEL.v1 | Câmeras / VMS | Câmera; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.VIDEO_RETENTION_POLICY_BINDING.v1 | Câmeras / VMS | Retenção; Câmera | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_PANEL.v1 | Alarmes | Alarme | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_ZONE.v1 | Alarmes | Alarme | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_SENSOR.v1 | Alarmes | Alarme | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_ARMING_STATE.v1 | Alarmes | Alarme | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_EVENT.v1 | Alarmes | Alarme; Evento crítico | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_TRIGGER_EVENT.v1 | Alarmes | Alarme; Evento crítico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.PANIC_EVENT.v1 | Alarmes | Alarme; Pânico; Evento crítico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_ESCALATION.v1 | Alarmes | Alarme; Evento crítico | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_ACKNOWLEDGEMENT.v1 | Alarmes | Alarme | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_RESOLUTION.v1 | Alarmes | Alarme | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_AUTHORIZATION_SCOPE.v1 | Alarmes | Conta de usuário; Identidade técnica; Alarme | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_ANALYTICS_READ_MODEL.v1 | Alarmes | Alarme; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.FINANCE.INVOICE.v1 | Financeiro | Financeiro; Cobrança | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.CHARGE.v1 | Financeiro | Financeiro; Cobrança | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.PAYMENT.v1 | Financeiro | Financeiro; Pagamento | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.PAYMENT_STATUS.v1 | Financeiro | Financeiro; Pagamento | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.RECEIPT.v1 | Financeiro | Financeiro; Recibo | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.OVERDUE_EVENT.v1 | Financeiro | Financeiro; Cobrança | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.FINANCIAL_AGREEMENT.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.COMMISSION.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.SPLIT.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.TRANSFER.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.FINANCIAL_READ_MODEL.v1 | Financeiro | Financeiro; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.FINANCIAL_RESTRICTION_SIGNAL.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.VISITOR.VISITOR_INVITE.v1 | Convites e Visitantes | Visitante; Convite | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.TEMPORARY_VISITOR_PROFILE.v1 | Convites e Visitantes | Visitante; Convite | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.TEMPORARY_QR_CODE.v1 | Convites e Visitantes | Visitante; Convite; QR temporário | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISIT_WINDOW.v1 | Convites e Visitantes | Visitante; Convite | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISIT_APPROVAL.v1 | Convites e Visitantes | Visitante; Convite | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISITOR_CHECK_IN.v1 | Convites e Visitantes | Visitante; Convite; Acesso físico; Evento de acesso | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISITOR_CHECK_OUT.v1 | Convites e Visitantes | Visitante; Convite; Acesso físico; Evento de acesso | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISITOR_ACCESS_REFERENCE.v1 | Convites e Visitantes | Visitante; Convite; Acesso físico; Evento de acesso | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISITOR_ANALYTICS_READ_MODEL.v1 | Convites e Visitantes | Visitante; Convite; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.OPERATIONAL_TICKET.v1 | Tickets | Ticket | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_COMMENT.v1 | Tickets | Ticket; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_ATTACHMENT_REFERENCE.v1 | Tickets | Ticket; Anexo | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_SLA.v1 | Tickets | Ticket | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_ESCALATION.v1 | Tickets | Ticket | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_RESOLUTION.v1 | Tickets | Ticket | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_REOPEN.v1 | Tickets | Ticket | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_LINKED_RESOURCE_REFERENCE.v1 | Tickets | Identidade técnica; Ticket | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_ANALYTICS_READ_MODEL.v1 | Tickets | Ticket; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MURAL.ANNOUNCEMENT_AUDIENCE.v1 | Mural Informativo | Mural; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MURAL.ANNOUNCEMENT_ACKNOWLEDGEMENT.v1 | Mural Informativo | Mural; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MURAL.ANNOUNCEMENT_POLL.v1 | Mural Informativo | Mural; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVABLE_RESOURCE.v1 | Reservas | Reserva | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION.v1 | Reservas | Reserva | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.AVAILABILITY_QUERY.v1 | Reservas | Reserva | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_HOLD.v1 | Reservas | Reserva | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_APPROVAL.v1 | Reservas | Reserva | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_CANCELLATION.v1 | Reservas | Reserva | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_CHECK_IN.v1 | Reservas | Reserva; Evento crítico | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_CHECK_OUT.v1 | Reservas | Reserva; Evento crítico | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_NO_SHOW.v1 | Reservas | Reserva; Evento crítico | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_ACCESS_WINDOW.v1 | Reservas | Reserva; Acesso físico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_CHARGE_REQUEST.v1 | Reservas | Reserva; Financeiro; Cobrança | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.RESERVATION.RESERVATION_GUEST_LIST_REFERENCE.v1 | Reservas | Reserva; Visitante | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_ANALYTICS_READ_MODEL.v1 | Reservas | Reserva; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_WORKSPACE.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_DASHBOARD.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_WIDGET.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_REPORT.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_REPORT_TEMPLATE.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_REPORT_SCHEDULE.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_EXPORT_REQUEST.v1 | Relatórios / BI | BI e analytics; Exportação | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_EXPORT_LOG.v1 | Relatórios / BI | BI e analytics; Exportação | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_READ_MODEL_SUBSCRIPTION.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_ANALYTICS_READ_MODEL.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_KPI.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_INSIGHT.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_ANOMALY_DETECTION.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.WHITE_LABEL_PROFILE.v1 | White-label | White-label asset | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.WHITE_LABEL_THEME.v1 | White-label | White-label asset | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.THEME_TOKEN.v1 | White-label | Segredo; White-label asset | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.COLOR_PALETTE.v1 | White-label | White-label asset | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.BRAND_ASSET_REFERENCE.v1 | White-label | White-label asset; Anexo | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.CUSTOM_DOMAIN.v1 | White-label | White-label asset; Domínio customizado | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.DOMAIN_VERIFICATION.v1 | White-label | White-label asset; Domínio customizado | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.CERTIFICATE_REFERENCE.v1 | White-label | Certificado; Segredo; White-label asset | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.BRAND_PUBLISHING_REQUEST.v1 | White-label | White-label asset | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.BRAND_PUBLISHING_RESULT.v1 | White-label | White-label asset | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.BRAND_PREVIEW.v1 | White-label | White-label asset | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.BRAND_FALLBACK_THEME.v1 | White-label | White-label asset | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.BRAND_VISUAL_TEMPLATE.v1 | White-label | White-label asset | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_REQUEST.v1 | Notificações | Notificação | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_TEMPLATE.v1 | Notificações | Notificação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_CHANNEL.v1 | Notificações | Notificação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_PROVIDER.v1 | Notificações | Notificação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_ATTEMPT.v1 | Notificações | Notificação; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_LOG.v1 | Notificações | Notificação; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_PREFERENCE.v1 | Notificações | Notificação; Consentimento; Contato | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_OPT_IN.v1 | Notificações | Notificação; Consentimento; Contato | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_OPT_OUT.v1 | Notificações | Notificação; Consentimento; Contato | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_ANALYTICS_READ_MODEL.v1 | Notificações | Notificação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_WORKFLOW.v1 | Automações | Automação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_TRIGGER.v1 | Automações | Automação; Evento crítico | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_CONDITION.v1 | Automações | Automação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_ACTION_REQUEST.v1 | Automações | Automação; Evento crítico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_EXECUTION.v1 | Automações | Automação; Evento crítico | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_RETRY.v1 | Automações | Automação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_PAUSE.v1 | Automações | Automação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_HUMAN_APPROVAL.v1 | Automações | Automação; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_ACTION_RESULT.v1 | Automações | Automação; Evento crítico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_READ_MODEL.v1 | Automações | Automação; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.MARKETPLACE_CONNECTOR.v1 | Marketplace de Integrações | Integração externa | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.INTEGRATION_PROVIDER.v1 | Marketplace de Integrações | Integração externa | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.ADAPTER_PACKAGE.v1 | Marketplace de Integrações | Integração externa | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION.v1 | Marketplace de Integrações | Integração externa | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.CONNECTOR_VERSION.v1 | Marketplace de Integrações | Integração externa | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.CONNECTOR_COMPATIBILITY.v1 | Marketplace de Integrações | Integração externa | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.CONNECTOR_CREDENTIAL_REFERENCE.v1 | Marketplace de Integrações | Segredo; Integração externa | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.CONNECTOR_WEBHOOK_ENDPOINT.v1 | Marketplace de Integrações | Integração externa; Webhook externo | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.EXTERNAL_EVENT_MAPPING.v1 | Marketplace de Integrações | Integração externa | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.MARKETPLACE_AUDIT_TRAIL.v1 | Marketplace de Integrações | Auditoria; Integração externa | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.AUDIT_TRAIL.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.AUDIT_QUERY.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.AUDIT_EXPORT.v1 | Auditoria e Compliance | Auditoria; Compliance; Exportação | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.COMPLIANCE_CASE.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.COMPLIANCE_INVESTIGATION.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.EVIDENCE_REFERENCE.v1 | Auditoria e Compliance | Evidência de vídeo; Cadeia de custódia; Auditoria; Compliance | Crítico | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.CHAIN_OF_CUSTODY_RECORD.v1 | Auditoria e Compliance | Auditoria; Compliance; Cadeia de custódia | Sensível | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.AUDIT_ALERT.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.COMPLIANCE_REPORT.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.SECURITY.SECURITY_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.PRIVACY_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.DATA_PROTECTION_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.CONSENT_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade; Consentimento | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.CONSENT_RECORD.v1 | Segurança e LGPD | Política de segurança; Política de privacidade; Consentimento | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.DATA_PROCESSING_RECORD.v1 | Segurança e LGPD | Política de segurança; Política de privacidade | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.DATA_SUBJECT_REQUEST.v1 | Segurança e LGPD | Política de segurança; Política de privacidade; Solicitação do titular; Identidade pessoal | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.RETENTION_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade; Retenção | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.MASKING_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade; Mascaramento | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.SENSITIVE_DATA_CLASSIFICATION.v1 | Segurança e LGPD | Política de segurança; Política de privacidade | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.EXPORT_CONTROL_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.SECRET_POLICY.v1 | Segurança e LGPD | Segredo; Política de segurança; Política de privacidade | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.THIRD_PARTY_RISK.v1 | Segurança e LGPD | Política de segurança; Política de privacidade; Integração externa | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.INCIDENT_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.PLATFORM_SUPPORT_CASE.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.SUPPORT_OPERATION_CASE.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.SERVICE_INCIDENT.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.MAINTENANCE_WINDOW.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.SERVICE_STATUS.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.DIAGNOSTIC_REQUEST.v1 | Suporte e Operação | Incidente de serviço; Diagnóstico técnico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.REMOTE_SUPPORT_SESSION.v1 | Suporte e Operação | Suporte remoto | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.RUNBOOK.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.POST_INCIDENT_REVIEW.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.SUPPORT_KNOWLEDGE_BASE_REFERENCE.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.SUPPORT_ANALYTICS_READ_MODEL.v1 | Suporte e Operação | Incidente de serviço; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |

## 64. Matriz de contratos proibidos de transportar payload bruto

| Contract ID | Owner | Categorias | Sensibilidade | Referência | Máscara | Retenção |
|---|---|---|---|---|---|---|
| NODUOS.TRANSVERSAL.AUTHORIZATION_DECISION.v1 | Transversal | Identidade técnica; Conta de usuário | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TRANSVERSAL.RESOURCE_REFERENCE.v1 | Transversal | Identidade técnica | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TRANSVERSAL.SECRET_REFERENCE.v1 | Transversal | Identidade técnica; Segredo | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TRANSVERSAL.EVIDENCE_REFERENCE.v1 | Transversal | Identidade técnica; Evidência de vídeo; Cadeia de custódia | Crítico | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.TRANSVERSAL.AUDIT_TRAIL_REFERENCE.v1 | Transversal | Identidade técnica; Auditoria | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.TRANSVERSAL.DATA_SENSITIVITY.v1 | Transversal | Identidade técnica | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TRANSVERSAL.RETENTION_POLICY_REFERENCE.v1 | Transversal | Identidade técnica; Retenção | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TRANSVERSAL.MASKING_POLICY_REFERENCE.v1 | Transversal | Identidade técnica; Mascaramento | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CORE.CORE_AUDIT_TRAIL.v1 | Core Platform | Auditoria | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.CORE.CORE_SECURITY_LOG.v1 | Core Platform | Política de segurança; Política de privacidade | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MASTER.MASTER_MODULE_RELEASE_POLICY.v1 | Master | Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MASTER.MASTER_COMMERCIAL_PLAN_POLICY.v1 | Master | Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MASTER.MASTER_LICENSE_LIMIT_POLICY.v1 | Master | Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MASTER.MASTER_SENSITIVE_EXPORT_REQUEST.v1 | Master | Identidade técnica; Exportação | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PARTNER.PARTNER_PROFILE.v1 | Parceiros | Identidade técnica; Contato; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PARTNER.PARTNER_GATEWAY_REGISTRATION_REQUEST.v1 | Parceiros | Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PARTNER.PARTNER_DEVICE_REGISTRATION_REQUEST.v1 | Parceiros | Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ORG.ORGANIZATION_PROFILE.v1 | Organizações | Identidade técnica; Contato; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ORG.ORGANIZATION_PEOPLE_SUMMARY_READ_MODEL.v1 | Organizações | Identidade técnica; Contato; Identidade pessoal; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_PROFILE.v1 | Pessoas e Clientes | Identidade pessoal; Perfil pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.CLIENT_PROFILE.v1 | Pessoas e Clientes | Identidade pessoal; Perfil de cliente | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_DOCUMENT.v1 | Pessoas e Clientes | Identidade pessoal; Documento pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_CONTACT.v1 | Pessoas e Clientes | Identidade pessoal; Contato | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_CONSENT.v1 | Pessoas e Clientes | Consentimento; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_UNIT_LINK.v1 | Pessoas e Clientes | Identidade pessoal; Vínculo com unidade, bloco, área ou ambiente | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_ORGANIZATION_LINK.v1 | Pessoas e Clientes | Identidade pessoal; Vínculo com organização | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.DEPENDENT_PROFILE.v1 | Pessoas e Clientes | Identidade pessoal; Perfil pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.SERVICE_PROVIDER_PROFILE.v1 | Pessoas e Clientes | Identidade pessoal; Perfil pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_ACCOUNT_LINK_REFERENCE.v1 | Pessoas e Clientes | Identidade pessoal; Conta de usuário | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PUBLIC_PERSON_IDENTITY_READ_MODEL.v1 | Pessoas e Clientes | Identidade pessoal; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.ADVANCED_POLICY.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.POLICY_CONDITION.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.POLICY_EFFECT.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.POLICY_SCOPE.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.DELEGATION_RULE.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.POLICY_EXCEPTION.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.EFFECTIVE_PERMISSION_READ_MODEL.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.ACCESS_SIMULATION.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.POLICY_EVALUATION.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.POLICY.PERMISSION_CONFLICT.v1 | Herança e Permissões | Política de segurança; Identidade técnica | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_RECORD.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_AGENT.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_CREDENTIAL_REFERENCE.v1 | Gateway Local / Mikrotik / Tunnel | Segredo; Gateway; Túnel; IP interno; Rota local | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.TUNNEL_SESSION.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_HEALTH_READ_MODEL.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Diagnóstico técnico; Logs técnicos; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_DIAGNOSTIC.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Diagnóstico técnico; Logs técnicos; IP interno; Rota local | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_COMMAND.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Evento crítico; IP interno; Rota local | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_COMMAND_RESULT.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Evento crítico; IP interno; Rota local | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_DEVICE_DISCOVERY.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Dispositivo; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_DEVICE_REACHABILITY_READ_MODEL.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Diagnóstico técnico; Logs técnicos; Dispositivo; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_AUTHORIZATION_SCOPE.v1 | Gateway Local / Mikrotik / Tunnel | Conta de usuário; Identidade técnica; Gateway; Túnel; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_TECHNICAL_LOG.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Diagnóstico técnico; Logs técnicos; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_RECORD.v1 | Dispositivos | Dispositivo; Identidade técnica | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_REFERENCE.v1 | Dispositivos | Dispositivo; Identidade técnica | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_IDENTITY.v1 | Dispositivos | Dispositivo; Identidade técnica | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_CAPABILITY.v1 | Dispositivos | Dispositivo | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_HEALTH_READ_MODEL.v1 | Dispositivos | Dispositivo; Diagnóstico técnico; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_STATUS_READ_MODEL.v1 | Dispositivos | Dispositivo; Diagnóstico técnico; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_DIAGNOSTIC.v1 | Dispositivos | Dispositivo; Diagnóstico técnico; Logs técnicos | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_TELEMETRY.v1 | Dispositivos | Dispositivo; Diagnóstico técnico; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_LIFECYCLE.v1 | Dispositivos | Dispositivo | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_CREDENTIAL_REFERENCE.v1 | Dispositivos | Segredo; Dispositivo; Identidade técnica | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_AUTHORIZATION_SCOPE.v1 | Dispositivos | Conta de usuário; Identidade técnica; Dispositivo | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_MAINTENANCE_RECORD.v1 | Dispositivos | Dispositivo; Diagnóstico técnico; Logs técnicos; Identidade técnica | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_POINT.v1 | Controle de Acesso | Acesso físico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_CREDENTIAL.v1 | Controle de Acesso | Segredo; Acesso físico; Credencial física | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_RULE.v1 | Controle de Acesso | Acesso físico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_POLICY_BINDING.v1 | Controle de Acesso | Acesso físico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_SCHEDULE.v1 | Controle de Acesso | Acesso físico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_ATTEMPT_EVENT.v1 | Controle de Acesso | Acesso físico; Evento de acesso | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_EVENT.v1 | Controle de Acesso | Acesso físico; Evento de acesso | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_EXECUTION_COMMAND.v1 | Controle de Acesso | Acesso físico; Evento de acesso; Evento crítico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_EXECUTION_RESULT.v1 | Controle de Acesso | Acesso físico; Evento de acesso; Evento crítico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_AUTHORIZATION_SCOPE.v1 | Controle de Acesso | Conta de usuário; Identidade técnica; Acesso físico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_OFFLINE_POLICY.v1 | Controle de Acesso | Acesso físico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_DEVICE_BINDING.v1 | Controle de Acesso | Acesso físico; Dispositivo | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_RESOURCE.v1 | Câmeras / VMS | Câmera | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_STREAM_ACCESS.v1 | Câmeras / VMS | Câmera; Stream | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_LIVE_VIEW_REQUEST.v1 | Câmeras / VMS | Câmera; Stream | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_PLAYBACK_REQUEST.v1 | Câmeras / VMS | Câmera; Stream | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_CLIP.v1 | Câmeras / VMS | Câmera; Clip | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_SNAPSHOT.v1 | Câmeras / VMS | Câmera; Snapshot | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_EVIDENCE_REFERENCE.v1 | Câmeras / VMS | Evidência de vídeo; Cadeia de custódia; Câmera | Crítico | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.CAMERA.CAMERA_AUTHORIZATION_SCOPE.v1 | Câmeras / VMS | Conta de usuário; Identidade técnica; Câmera | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_ANALYTICS_READ_MODEL.v1 | Câmeras / VMS | Câmera; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.VIDEO_RETENTION_POLICY_BINDING.v1 | Câmeras / VMS | Retenção; Câmera | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_PANEL.v1 | Alarmes | Alarme | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_ZONE.v1 | Alarmes | Alarme | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_SENSOR.v1 | Alarmes | Alarme | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_ARMING_STATE.v1 | Alarmes | Alarme | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_EVENT.v1 | Alarmes | Alarme; Evento crítico | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_TRIGGER_EVENT.v1 | Alarmes | Alarme; Evento crítico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.PANIC_EVENT.v1 | Alarmes | Alarme; Pânico; Evento crítico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_ESCALATION.v1 | Alarmes | Alarme; Evento crítico | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_ACKNOWLEDGEMENT.v1 | Alarmes | Alarme | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_RESOLUTION.v1 | Alarmes | Alarme | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_AUTHORIZATION_SCOPE.v1 | Alarmes | Conta de usuário; Identidade técnica; Alarme | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ALARM.ALARM_ANALYTICS_READ_MODEL.v1 | Alarmes | Alarme; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.FINANCE.INVOICE.v1 | Financeiro | Financeiro; Cobrança | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.CHARGE.v1 | Financeiro | Financeiro; Cobrança | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.PAYMENT.v1 | Financeiro | Financeiro; Pagamento | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.PAYMENT_STATUS.v1 | Financeiro | Financeiro; Pagamento | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.RECEIPT.v1 | Financeiro | Financeiro; Recibo | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.OVERDUE_EVENT.v1 | Financeiro | Financeiro; Cobrança | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.FINANCIAL_AGREEMENT.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.COMMISSION.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.SPLIT.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.TRANSFER.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.FINANCIAL_READ_MODEL.v1 | Financeiro | Financeiro; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.FINANCIAL_RESTRICTION_SIGNAL.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.VISITOR.VISITOR_INVITE.v1 | Convites e Visitantes | Visitante; Convite | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.TEMPORARY_VISITOR_PROFILE.v1 | Convites e Visitantes | Visitante; Convite | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.TEMPORARY_QR_CODE.v1 | Convites e Visitantes | Visitante; Convite; QR temporário | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISIT_WINDOW.v1 | Convites e Visitantes | Visitante; Convite | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISIT_APPROVAL.v1 | Convites e Visitantes | Visitante; Convite | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISITOR_CHECK_IN.v1 | Convites e Visitantes | Visitante; Convite; Acesso físico; Evento de acesso | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISITOR_CHECK_OUT.v1 | Convites e Visitantes | Visitante; Convite; Acesso físico; Evento de acesso | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISITOR_ACCESS_REFERENCE.v1 | Convites e Visitantes | Visitante; Convite; Acesso físico; Evento de acesso | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISITOR_ANALYTICS_READ_MODEL.v1 | Convites e Visitantes | Visitante; Convite; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.OPERATIONAL_TICKET.v1 | Tickets | Ticket | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_COMMENT.v1 | Tickets | Ticket; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_ATTACHMENT_REFERENCE.v1 | Tickets | Ticket; Anexo | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_SLA.v1 | Tickets | Ticket | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_ESCALATION.v1 | Tickets | Ticket | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_RESOLUTION.v1 | Tickets | Ticket | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_REOPEN.v1 | Tickets | Ticket | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_LINKED_RESOURCE_REFERENCE.v1 | Tickets | Identidade técnica; Ticket | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_ANALYTICS_READ_MODEL.v1 | Tickets | Ticket; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MURAL.ANNOUNCEMENT_AUDIENCE.v1 | Mural Informativo | Mural; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MURAL.ANNOUNCEMENT_ACKNOWLEDGEMENT.v1 | Mural Informativo | Mural; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MURAL.ANNOUNCEMENT_POLL.v1 | Mural Informativo | Mural; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVABLE_RESOURCE.v1 | Reservas | Reserva | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION.v1 | Reservas | Reserva | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.AVAILABILITY_QUERY.v1 | Reservas | Reserva | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_HOLD.v1 | Reservas | Reserva | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_APPROVAL.v1 | Reservas | Reserva | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_CANCELLATION.v1 | Reservas | Reserva | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_CHECK_IN.v1 | Reservas | Reserva; Evento crítico | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_CHECK_OUT.v1 | Reservas | Reserva; Evento crítico | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_NO_SHOW.v1 | Reservas | Reserva; Evento crítico | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_ACCESS_WINDOW.v1 | Reservas | Reserva; Acesso físico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_CHARGE_REQUEST.v1 | Reservas | Reserva; Financeiro; Cobrança | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.RESERVATION.RESERVATION_GUEST_LIST_REFERENCE.v1 | Reservas | Reserva; Visitante | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_ANALYTICS_READ_MODEL.v1 | Reservas | Reserva; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_WORKSPACE.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_DASHBOARD.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_WIDGET.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_REPORT.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_REPORT_TEMPLATE.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_REPORT_SCHEDULE.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_EXPORT_REQUEST.v1 | Relatórios / BI | BI e analytics; Exportação | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_EXPORT_LOG.v1 | Relatórios / BI | BI e analytics; Exportação | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_READ_MODEL_SUBSCRIPTION.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_ANALYTICS_READ_MODEL.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_KPI.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_INSIGHT.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.BI.BI_ANOMALY_DETECTION.v1 | Relatórios / BI | BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.WHITE_LABEL_PROFILE.v1 | White-label | White-label asset | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.WHITE_LABEL_THEME.v1 | White-label | White-label asset | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.THEME_TOKEN.v1 | White-label | Segredo; White-label asset | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.COLOR_PALETTE.v1 | White-label | White-label asset | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.BRAND_ASSET_REFERENCE.v1 | White-label | White-label asset; Anexo | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.CUSTOM_DOMAIN.v1 | White-label | White-label asset; Domínio customizado | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.DOMAIN_VERIFICATION.v1 | White-label | White-label asset; Domínio customizado | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.CERTIFICATE_REFERENCE.v1 | White-label | Certificado; Segredo; White-label asset | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.BRAND_PUBLISHING_REQUEST.v1 | White-label | White-label asset | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.BRAND_PUBLISHING_RESULT.v1 | White-label | White-label asset | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.BRAND_PREVIEW.v1 | White-label | White-label asset | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.BRAND_FALLBACK_THEME.v1 | White-label | White-label asset | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.WL.BRAND_VISUAL_TEMPLATE.v1 | White-label | White-label asset | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_REQUEST.v1 | Notificações | Notificação | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_TEMPLATE.v1 | Notificações | Notificação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_CHANNEL.v1 | Notificações | Notificação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_PROVIDER.v1 | Notificações | Notificação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_ATTEMPT.v1 | Notificações | Notificação; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_LOG.v1 | Notificações | Notificação; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_PREFERENCE.v1 | Notificações | Notificação; Consentimento; Contato | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_OPT_IN.v1 | Notificações | Notificação; Consentimento; Contato | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_OPT_OUT.v1 | Notificações | Notificação; Consentimento; Contato | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_ANALYTICS_READ_MODEL.v1 | Notificações | Notificação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_WORKFLOW.v1 | Automações | Automação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_TRIGGER.v1 | Automações | Automação; Evento crítico | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_CONDITION.v1 | Automações | Automação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_ACTION_REQUEST.v1 | Automações | Automação; Evento crítico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_EXECUTION.v1 | Automações | Automação; Evento crítico | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_RETRY.v1 | Automações | Automação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_PAUSE.v1 | Automações | Automação | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_HUMAN_APPROVAL.v1 | Automações | Automação; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_ACTION_RESULT.v1 | Automações | Automação; Evento crítico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_READ_MODEL.v1 | Automações | Automação; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.MARKETPLACE_CONNECTOR.v1 | Marketplace de Integrações | Integração externa | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.INTEGRATION_PROVIDER.v1 | Marketplace de Integrações | Integração externa | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.ADAPTER_PACKAGE.v1 | Marketplace de Integrações | Integração externa | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION.v1 | Marketplace de Integrações | Integração externa | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.CONNECTOR_VERSION.v1 | Marketplace de Integrações | Integração externa | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.CONNECTOR_COMPATIBILITY.v1 | Marketplace de Integrações | Integração externa | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.CONNECTOR_CREDENTIAL_REFERENCE.v1 | Marketplace de Integrações | Segredo; Integração externa | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.CONNECTOR_WEBHOOK_ENDPOINT.v1 | Marketplace de Integrações | Integração externa; Webhook externo | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.EXTERNAL_EVENT_MAPPING.v1 | Marketplace de Integrações | Integração externa | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.MARKETPLACE_AUDIT_TRAIL.v1 | Marketplace de Integrações | Auditoria; Integração externa | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.AUDIT_TRAIL.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.AUDIT_QUERY.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.AUDIT_EXPORT.v1 | Auditoria e Compliance | Auditoria; Compliance; Exportação | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.COMPLIANCE_CASE.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.COMPLIANCE_INVESTIGATION.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.EVIDENCE_REFERENCE.v1 | Auditoria e Compliance | Evidência de vídeo; Cadeia de custódia; Auditoria; Compliance | Crítico | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.CHAIN_OF_CUSTODY_RECORD.v1 | Auditoria e Compliance | Auditoria; Compliance; Cadeia de custódia | Sensível | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.AUDIT_ALERT.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.COMPLIANCE_REPORT.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.SECURITY.SECURITY_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.PRIVACY_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.DATA_PROTECTION_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.CONSENT_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade; Consentimento | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.CONSENT_RECORD.v1 | Segurança e LGPD | Política de segurança; Política de privacidade; Consentimento | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.DATA_PROCESSING_RECORD.v1 | Segurança e LGPD | Política de segurança; Política de privacidade | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.DATA_SUBJECT_REQUEST.v1 | Segurança e LGPD | Política de segurança; Política de privacidade; Solicitação do titular; Identidade pessoal | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.RETENTION_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade; Retenção | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.MASKING_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade; Mascaramento | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.SENSITIVE_DATA_CLASSIFICATION.v1 | Segurança e LGPD | Política de segurança; Política de privacidade | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.EXPORT_CONTROL_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.SECRET_POLICY.v1 | Segurança e LGPD | Segredo; Política de segurança; Política de privacidade | Crítico | ResourceReference, SecretReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.THIRD_PARTY_RISK.v1 | Segurança e LGPD | Política de segurança; Política de privacidade; Integração externa | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SECURITY.INCIDENT_POLICY.v1 | Segurança e LGPD | Política de segurança; Política de privacidade | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.PLATFORM_SUPPORT_CASE.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.SUPPORT_OPERATION_CASE.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.SERVICE_INCIDENT.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.MAINTENANCE_WINDOW.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.SERVICE_STATUS.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.DIAGNOSTIC_REQUEST.v1 | Suporte e Operação | Incidente de serviço; Diagnóstico técnico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.REMOTE_SUPPORT_SESSION.v1 | Suporte e Operação | Suporte remoto | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.RUNBOOK.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.POST_INCIDENT_REVIEW.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.SUPPORT_KNOWLEDGE_BASE_REFERENCE.v1 | Suporte e Operação | Incidente de serviço | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.SUPPORT.SUPPORT_ANALYTICS_READ_MODEL.v1 | Suporte e Operação | Incidente de serviço; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |

## 65. Matriz de contratos proibidos em BI sem agregação, máscara ou finalidade

| Contract ID | Owner | Categorias | Sensibilidade | Referência | Máscara | Retenção |
|---|---|---|---|---|---|---|
| NODUOS.TRANSVERSAL.AUDIT_TRAIL_REFERENCE.v1 | Transversal | Identidade técnica; Auditoria | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.CORE.CORE_AUDIT_TRAIL.v1 | Core Platform | Auditoria | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.PARTNER.PARTNER_PROFILE.v1 | Parceiros | Identidade técnica; Contato; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ORG.ORGANIZATION_PROFILE.v1 | Organizações | Identidade técnica; Contato; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ORG.ORGANIZATION_PEOPLE_SUMMARY_READ_MODEL.v1 | Organizações | Identidade técnica; Contato; Identidade pessoal; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_PROFILE.v1 | Pessoas e Clientes | Identidade pessoal; Perfil pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.CLIENT_PROFILE.v1 | Pessoas e Clientes | Identidade pessoal; Perfil de cliente | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_DOCUMENT.v1 | Pessoas e Clientes | Identidade pessoal; Documento pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_CONTACT.v1 | Pessoas e Clientes | Identidade pessoal; Contato | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_CONSENT.v1 | Pessoas e Clientes | Consentimento; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_UNIT_LINK.v1 | Pessoas e Clientes | Identidade pessoal; Vínculo com unidade, bloco, área ou ambiente | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_ORGANIZATION_LINK.v1 | Pessoas e Clientes | Identidade pessoal; Vínculo com organização | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.DEPENDENT_PROFILE.v1 | Pessoas e Clientes | Identidade pessoal; Perfil pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.SERVICE_PROVIDER_PROFILE.v1 | Pessoas e Clientes | Identidade pessoal; Perfil pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PERSON_ACCOUNT_LINK_REFERENCE.v1 | Pessoas e Clientes | Identidade pessoal; Conta de usuário | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.PEOPLE.PUBLIC_PERSON_IDENTITY_READ_MODEL.v1 | Pessoas e Clientes | Identidade pessoal; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_HEALTH_READ_MODEL.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Diagnóstico técnico; Logs técnicos; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_DIAGNOSTIC.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Diagnóstico técnico; Logs técnicos; IP interno; Rota local | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_DEVICE_REACHABILITY_READ_MODEL.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Diagnóstico técnico; Logs técnicos; Dispositivo; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.GATEWAY.GATEWAY_TECHNICAL_LOG.v1 | Gateway Local / Mikrotik / Tunnel | Gateway; Túnel; Diagnóstico técnico; Logs técnicos; IP interno; Rota local | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_HEALTH_READ_MODEL.v1 | Dispositivos | Dispositivo; Diagnóstico técnico; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_STATUS_READ_MODEL.v1 | Dispositivos | Dispositivo; Diagnóstico técnico; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_DIAGNOSTIC.v1 | Dispositivos | Dispositivo; Diagnóstico técnico; Logs técnicos | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_TELEMETRY.v1 | Dispositivos | Dispositivo; Diagnóstico técnico; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.DEVICE.DEVICE_MAINTENANCE_RECORD.v1 | Dispositivos | Dispositivo; Diagnóstico técnico; Logs técnicos; Identidade técnica | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_ATTEMPT_EVENT.v1 | Controle de Acesso | Acesso físico; Evento de acesso | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_EVENT.v1 | Controle de Acesso | Acesso físico; Evento de acesso | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_EXECUTION_COMMAND.v1 | Controle de Acesso | Acesso físico; Evento de acesso; Evento crítico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.ACCESS.ACCESS_EXECUTION_RESULT.v1 | Controle de Acesso | Acesso físico; Evento de acesso; Evento crítico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_RESOURCE.v1 | Câmeras / VMS | Câmera | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_STREAM_ACCESS.v1 | Câmeras / VMS | Câmera; Stream | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_LIVE_VIEW_REQUEST.v1 | Câmeras / VMS | Câmera; Stream | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_PLAYBACK_REQUEST.v1 | Câmeras / VMS | Câmera; Stream | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_CLIP.v1 | Câmeras / VMS | Câmera; Clip | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_SNAPSHOT.v1 | Câmeras / VMS | Câmera; Snapshot | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_EVIDENCE_REFERENCE.v1 | Câmeras / VMS | Evidência de vídeo; Cadeia de custódia; Câmera | Crítico | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.CAMERA.CAMERA_AUTHORIZATION_SCOPE.v1 | Câmeras / VMS | Conta de usuário; Identidade técnica; Câmera | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.CAMERA_ANALYTICS_READ_MODEL.v1 | Câmeras / VMS | Câmera; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.CAMERA.VIDEO_RETENTION_POLICY_BINDING.v1 | Câmeras / VMS | Retenção; Câmera | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.FINANCE.INVOICE.v1 | Financeiro | Financeiro; Cobrança | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.CHARGE.v1 | Financeiro | Financeiro; Cobrança | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.PAYMENT.v1 | Financeiro | Financeiro; Pagamento | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.PAYMENT_STATUS.v1 | Financeiro | Financeiro; Pagamento | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.RECEIPT.v1 | Financeiro | Financeiro; Recibo | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.OVERDUE_EVENT.v1 | Financeiro | Financeiro; Cobrança | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.FINANCIAL_AGREEMENT.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.COMMISSION.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.SPLIT.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.TRANSFER.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.FINANCIAL_READ_MODEL.v1 | Financeiro | Financeiro; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.FINANCE.FINANCIAL_RESTRICTION_SIGNAL.v1 | Financeiro | Financeiro | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.VISITOR.VISITOR_INVITE.v1 | Convites e Visitantes | Visitante; Convite | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.TEMPORARY_VISITOR_PROFILE.v1 | Convites e Visitantes | Visitante; Convite | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.TEMPORARY_QR_CODE.v1 | Convites e Visitantes | Visitante; Convite; QR temporário | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISIT_WINDOW.v1 | Convites e Visitantes | Visitante; Convite | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISIT_APPROVAL.v1 | Convites e Visitantes | Visitante; Convite | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISITOR_CHECK_IN.v1 | Convites e Visitantes | Visitante; Convite; Acesso físico; Evento de acesso | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISITOR_CHECK_OUT.v1 | Convites e Visitantes | Visitante; Convite; Acesso físico; Evento de acesso | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISITOR_ACCESS_REFERENCE.v1 | Convites e Visitantes | Visitante; Convite; Acesso físico; Evento de acesso | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.VISITOR.VISITOR_ANALYTICS_READ_MODEL.v1 | Convites e Visitantes | Visitante; Convite; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.OPERATIONAL_TICKET.v1 | Tickets | Ticket | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_COMMENT.v1 | Tickets | Ticket; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_ATTACHMENT_REFERENCE.v1 | Tickets | Ticket; Anexo | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_SLA.v1 | Tickets | Ticket | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_ESCALATION.v1 | Tickets | Ticket | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_RESOLUTION.v1 | Tickets | Ticket | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_REOPEN.v1 | Tickets | Ticket | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_LINKED_RESOURCE_REFERENCE.v1 | Tickets | Identidade técnica; Ticket | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.TICKET.TICKET_ANALYTICS_READ_MODEL.v1 | Tickets | Ticket; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MURAL.ANNOUNCEMENT_AUDIENCE.v1 | Mural Informativo | Mural; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MURAL.ANNOUNCEMENT_ACKNOWLEDGEMENT.v1 | Mural Informativo | Mural; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MURAL.ANNOUNCEMENT_POLL.v1 | Mural Informativo | Mural; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVABLE_RESOURCE.v1 | Reservas | Reserva | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION.v1 | Reservas | Reserva | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.AVAILABILITY_QUERY.v1 | Reservas | Reserva | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_HOLD.v1 | Reservas | Reserva | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_APPROVAL.v1 | Reservas | Reserva | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_CANCELLATION.v1 | Reservas | Reserva | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_CHECK_IN.v1 | Reservas | Reserva; Evento crítico | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_CHECK_OUT.v1 | Reservas | Reserva; Evento crítico | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_NO_SHOW.v1 | Reservas | Reserva; Evento crítico | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_ACCESS_WINDOW.v1 | Reservas | Reserva; Acesso físico | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_CHARGE_REQUEST.v1 | Reservas | Reserva; Financeiro; Cobrança | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.RESERVATION.RESERVATION_GUEST_LIST_REFERENCE.v1 | Reservas | Reserva; Visitante | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.RESERVATION.RESERVATION_ANALYTICS_READ_MODEL.v1 | Reservas | Reserva; BI e analytics | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_ATTEMPT.v1 | Notificações | Notificação; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_LOG.v1 | Notificações | Notificação; Logs técnicos | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_PREFERENCE.v1 | Notificações | Notificação; Consentimento; Contato | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_OPT_IN.v1 | Notificações | Notificação; Consentimento; Contato | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.NOTIFICATION.NOTIFICATION_OPT_OUT.v1 | Notificações | Notificação; Consentimento; Contato | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.AUTOMATION.AUTOMATION_HUMAN_APPROVAL.v1 | Automações | Automação; Identidade pessoal | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |
| NODUOS.MARKETPLACE.MARKETPLACE_AUDIT_TRAIL.v1 | Marketplace de Integrações | Auditoria; Integração externa | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.AUDIT_TRAIL.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.AUDIT_QUERY.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.AUDIT_EXPORT.v1 | Auditoria e Compliance | Auditoria; Compliance; Exportação | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.COMPLIANCE_CASE.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.COMPLIANCE_INVESTIGATION.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.EVIDENCE_REFERENCE.v1 | Auditoria e Compliance | Evidência de vídeo; Cadeia de custódia; Auditoria; Compliance | Crítico | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.CHAIN_OF_CUSTODY_RECORD.v1 | Auditoria e Compliance | Auditoria; Compliance; Cadeia de custódia | Sensível | ResourceReference, EvidenceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.AUDIT_ALERT.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.AUDIT.COMPLIANCE_REPORT.v1 | Auditoria e Compliance | Auditoria; Compliance | Sensível | ResourceReference | Sim, por perfil e finalidade | Retenção específica legal/operacional |
| NODUOS.SECURITY.DATA_SUBJECT_REQUEST.v1 | Segurança e LGPD | Política de segurança; Política de privacidade; Solicitação do titular; Identidade pessoal | Crítico | ResourceReference | Sim, por perfil e finalidade | Retenção mínima por finalidade |

## 66. Riscos corrigidos e tratamentos aplicados

| Risco tratado | Severidade | Correção aplicada nesta versão | Status |
|---|---|---|---|
| Contrato sensível usado como consulta ampla | Alta | Contrato sensível exige escopo mínimo, finalidade explícita, máscara por perfil, política LGPD, tenant, contexto, actor_reference e ResourceReference quando aplicável. | Corrigido |
| Read model usado como banco compartilhado | Alta | Read model autorizado deve declarar fonte, consumidor, staleness, masking_policy, retention_policy, no_domain_transfer e no_shared_database. | Corrigido |
| Evento carregando payload bruto | Alta | Evento deve carregar fato, referências e metadados mínimos. Segredo, biometria, vídeo, imagem e documento completo ficam proibidos quando referência ou minimização bastar. | Corrigido |
| Evento de solicitação interpretado como execução | Alta | Evento de solicitação registrada comunica pedido registrado, não execução. Execução pertence ao módulo dono após autorização e deve publicar resultado próprio quando aplicável. | Corrigido |
| Comando usado como prova de execução | Alta | Comando solicita execução e deve possuir idempotência quando crítico. Prova de execução depende de evento de fato ocorrido, auditoria e/ou EvidenceReference. | Corrigido |
| Exportação sensível sem trilha | Crítica | Exportação sensível exige finalidade, AuthorizationDecision, política, máscara, retenção, destino, hash quando aplicável e audit trail específico. | Corrigido |
| Segredo em payload, log, URL, read model ou webhook | Crítica | Segredo bruto fica proibido. Todo segredo deve ser representado por SecretReference com escopo, rotação, revogação, auditoria e política de acesso. | Corrigido |
| Biometria bruta em contrato público | Crítica | Biometria bruta fica proibida em contratos públicos. O contrato pode carregar referência, estado, consentimento, finalidade e escopo, conforme política específica. | Corrigido |
| Evidência bruta sem cadeia de custódia | Crítica | Evidência deve trafegar por EvidenceReference com custody_owner, hash quando aplicável, política de retenção, máscara, auditoria e cadeia de custódia. | Corrigido |
| BI com dado identificável sem finalidade | Alta | BI deve usar agregação, máscara, minimização e finalidade. BI identificável exige AuthorizationDecision, política LGPD e auditoria de consulta/exportação. | Corrigido |
| Suporte remoto sem escopo temporal | Crítica | Suporte remoto exige sessão temporária, justificativa, escopo, autorização, consentimento quando aplicável, auditoria e encerramento registrado. | Corrigido |
| Webhook externo com dado sensível sem avaliação de terceiro | Crítica | Webhook externo exige assinatura, SecretReference, política de terceiro, escopo, retenção, auditoria, revogação, retry controlado e fail-closed/quarentena. | Corrigido |

## 67. Riscos de acoplamento por dados sensíveis corrigidos

| Risco de acoplamento | Correção aplicada |
|---|---|
| Módulo consumidor guardar cópia completa de dado pessoal | Guardar somente ResourceReference e snapshot minimizado, mascarado e retido apenas quando permitido pela finalidade. |
| BI consumir eventos sensíveis diretamente | BI deve consumir contrato analítico, read model autorizado, agregado ou mascarado, sem virar banco central. |
| Auditoria substituir log primário do módulo dono | Auditoria correlaciona, evidencia e investiga; logs primários continuam no Core e nos módulos donos. |
| Marketplace transportar segredo de conector | Marketplace deve usar SecretReference e política de terceiro, nunca segredo bruto. |
| Organização expor Pessoas, Dispositivos ou Gateway completos | Organizações deve expor apenas resumo autorizado por contratos dos módulos donos. |
| Suporte acessar banco interno para resolver incidente | Suporte usa contrato versionado, sessão temporária e diagnóstico assistido; módulo dono corrige. |
| Automações executar regra de domínio alheio | Automações solicita ação; Core autoriza; módulo dono executa; Auditoria registra. |
| Exportação virar integração paralela permanente | Exportação sensível é ato controlado, com finalidade, retenção, destino, expiração e auditoria, não canal permanente de sincronização. |

## 68. Atualização obrigatória para o Catálogo de Contratos Públicos

Adicionar aos metadados mínimos dos contratos públicos os seguintes campos de governança de dados sensíveis:

- `data_sensitivity_profile`
- `allowed_data_categories`
- `forbidden_data_categories`
- `reference_policy`
- `raw_payload_policy`
- `masking_policy_reference`
- `retention_policy_reference`
- `consent_policy_reference`
- `legal_basis_or_lgpd_policy_reference`
- `purpose_policy_reference`
- `export_control_policy`
- `visualization_audit_required`
- `export_audit_required`
- `data_subject_impact`
- `anonymization_or_disposal_policy`
- `third_party_data_policy`, quando houver webhook externo, conector, provedor ou integração externa.

Regra: contrato público sem classificação de dados sensíveis, sem política de payload bruto e sem política de retenção não deve avançar para modelagem técnica quando carregar dado restrito, sensível ou crítico.

## 69. Atualização obrigatória para a Matriz Técnica de Permissões por Contrato

Adicionar vínculo cruzado com esta matriz por meio do campo:

```text
sensitive_data_matrix_profile
```

A Matriz Técnica de Permissões por Contrato continua sendo a autoridade de quem pode chamar, consumir ou expor um contrato, em qual escopo e com qual permissão conceitual.

A Matriz Técnica de Dados Sensíveis por Contrato passa a ser a autoridade complementar sobre quais dados podem trafegar, quais devem ser mascarados, quais devem ser apenas referência, quais exigem finalidade, consentimento, retenção, descarte, auditoria e fail-closed.

## 70. Pendências controladas para detalhamento posterior

As pendências abaixo não bloqueiam a consolidação desta matriz. Elas devem ser tratadas em etapas técnicas futuras, antes de schema definitivo, endpoint final, banco, evento detalhado, read model final, webhook externo ou exportação real.

- Taxonomia final de biometria operacional, distinguindo template, hash, referência, consentimento, credencial física, captura temporária e prova de presença.
- Política de retenção por tipo de evidência de vídeo: live view, snapshot, clip, evento crítico, cadeia de custódia e exportação.
- Régua de exportação sensível por perfil, finalidade, aprovação, destino, máscara, expiração e descarte.
- Política de anonimização em BI por módulo, com separação entre agregado, pseudonimizado, mascarado e identificável.
- ThirdPartyRisk para conectores, webhooks externos, provedores de notificação, pagamento, armazenamento e suporte remoto.
- Matriz de campos por contrato, mantendo a fronteira conceitual e sem virar schema definitivo nesta etapa.
- Régua de retenção por tipo de log: segurança, auditoria, acesso físico, gateway, dispositivo, suporte, financeiro, visitante, câmera e automação.

## 71. Decisão oficial aplicada nesta etapa

# DEC-191: Matriz Técnica de Dados Sensíveis por Contrato como artefato técnico oficial complementar

## Tema

Governança técnica de dados sensíveis por contrato público.

## Decisão

O NoduOS passa a adotar a Matriz Técnica de Dados Sensíveis por Contrato como artefato técnico oficial complementar ao Catálogo de Contratos Públicos e à Matriz Técnica de Permissões por Contrato.

A matriz define, por contrato público, dados permitidos, dados proibidos, dados que devem trafegar por ResourceReference, EvidenceReference ou SecretReference, dados que exigem máscara, consentimento, finalidade, base legal ou política de Segurança e LGPD, retenção, descarte, anonimização, expurgo, AuthorizationDecision, auditoria de visualização, auditoria de exportação e comportamento fail-closed.

A matriz não cria banco de dados, não cria schema técnico definitivo, não cria endpoint final, não cria tela, não cria código, não cria novo módulo e não altera fronteiras de módulos. Ela limita o payload e o tratamento de dados antes da modelagem técnica.

## Motivo

Impedir exposição indevida de dados pessoais, financeiros, biométricos, imagens, vídeos, evidências, segredos, logs, dados técnicos de rede, suporte remoto, integrações externas, webhooks e exportações antes da modelagem técnica.

## Impacto

Todo contrato público restrito, sensível ou crítico deverá ser validado contra esta matriz antes de banco, endpoint final, fila, webhook, read model, BI, exportação, integração ou implementação.

Contratos que violarem payload mínimo, finalidade, máscara, retenção, referência segura, AuthorizationDecision, auditoria, consentimento, base legal ou política LGPD deverão falhar em modo fail-closed ou entrar em quarentena controlada quando aplicável.

Os documentos raiz deverão ser atualizados para incluir `07_MATRIZ_TECNICA_DADOS_SENSIVEIS_POR_CONTRATO.md` como documento técnico oficial complementar.

## Status

Aprovada

## Data

2026-06-27

## 72. Atualização para 00_BIBLIA_DO_PROJETO.md

Adicionar na seção de Segurança/LGPD e na área de contratos públicos:

```text
# Atualização consolidada: Matriz Técnica de Dados Sensíveis por Contrato

O NoduOS passa a adotar a Matriz Técnica de Dados Sensíveis por Contrato como documento técnico oficial complementar da raiz.

Arquivo técnico raiz:

07_MATRIZ_TECNICA_DADOS_SENSIVEIS_POR_CONTRATO.md

Regra central:

Dado sensível exige finalidade. Contrato limita payload. Segurança protege. Core autoriza. Auditoria evidencia.

Todo dado restrito, sensível ou crítico em contrato público deve declarar owner_module, classificação, finalidade, política de Segurança e LGPD, política de retenção, política de mascaramento, referência segura quando aplicável, AuthorizationDecision quando aplicável e auditoria.

Segredo bruto, biometria bruta, vídeo bruto, imagem bruta, documento completo, dado pessoal bruto, payload de evidência ou dado financeiro completo não devem trafegar quando referência, máscara, agregação ou minimização bastar.

A matriz não substitui o Core Platform, Segurança e LGPD, Auditoria e Compliance, ResourceReference, SecretReference, EvidenceReference ou o módulo dono do recurso.

Decisão aplicada:

DEC-191: Matriz Técnica de Dados Sensíveis por Contrato como artefato técnico oficial complementar.

Última DEC consolidada: DEC-197.
Próxima DEC livre: DEC-195.
```

## 73. Atualização para 01_MAPA_DE_MODULOS.md

Adicionar observação transversal:

```text
# Observação transversal: dados sensíveis por contrato

Todo módulo dono deve declarar, para seus contratos públicos, quais categorias de dados podem trafegar, quais são proibidas, quais exigem ResourceReference, EvidenceReference, SecretReference, máscara, consentimento, finalidade, retenção, descarte, AuthorizationDecision, auditoria de visualização e auditoria de exportação.

A Matriz Técnica de Dados Sensíveis por Contrato limita o payload e o tratamento de dados. Ela não transfere domínio, não autoriza ação sozinha e não substitui a Matriz Técnica de Permissões por Contrato.

Regra curta:

Permissão limita quem pode usar. Dados sensíveis limitam o que pode trafegar.
```

## 74. Atualização para 02_REGRAS_DE_ARQUITETURA.md

Adicionar regra arquitetural:

```text
# Regra arquitetural: dados sensíveis por contrato

Contrato público que transporte dado restrito, sensível ou crítico deve possuir data_sensitivity_profile, allowed_data_categories, forbidden_data_categories, reference_policy, raw_payload_policy, masking_policy_reference, retention_policy_reference, purpose_policy_reference, legal_basis_or_lgpd_policy_reference, export_control_policy e auditoria aplicável.

Contrato sensível sem tenant, context, actor_reference, resource_reference quando aplicável, finalidade, política, retenção, máscara ou AuthorizationDecision deve falhar fechado.

Read model com dado sensível não pode virar banco compartilhado.
Evento não pode transportar segredo bruto, biometria bruta, vídeo bruto, imagem bruta sem política ou documento completo quando referência bastar.
Webhook externo não pode transportar dado sensível sem assinatura, SecretReference, política de terceiro, escopo, retenção, auditoria e revogação.
```

## 75. Atualização para 03_DECISOES_OFICIAIS.md

Inserir após DEC-190 a DEC-191 descrita nesta matriz.

Atualizar o rodapé de controle decisório:

```text
A última decisão oficial registrada é DEC-191.
As próximas decisões novas devem começar em DEC-192, salvo alteração formal posterior neste documento.

Decisões aprovadas na Matriz Técnica de Dados Sensíveis por Contrato:
  • DEC-191
```

## 76. Atualização para 04_PROMPTS_DE_TRABALHO.md

Adicionar prompt padrão:

```text
# Prompt para revisar dados sensíveis por contrato

Revise o contrato público abaixo conforme a Matriz Técnica de Dados Sensíveis por Contrato do NoduOS.

Verifique:

1. Quais dados o contrato pode carregar.
2. Quais dados são proibidos.
3. Quais dados devem ser ResourceReference.
4. Quais dados devem ser EvidenceReference.
5. Quais dados devem ser SecretReference.
6. Quais dados exigem máscara.
7. Quais dados exigem consentimento.
8. Quais dados exigem finalidade explícita.
9. Quais dados exigem base legal ou política de Segurança e LGPD.
10. Quais dados exigem AuthorizationDecision do Core.
11. Quais dados exigem auditoria de visualização.
12. Quais dados exigem auditoria de exportação.
13. Quais dados exigem retenção específica.
14. Quais dados exigem descarte, anonimização ou expurgo.
15. Quais dados podem entrar em evento.
16. Quais dados não podem entrar em evento.
17. Quais dados não podem entrar em webhook.
18. Quais dados não podem entrar em exportação.
19. Quais dados não podem ser usados em BI sem agregação, máscara ou finalidade.
20. Se o contrato falha fechado quando faltar tenant, contexto, ator, recurso, política, finalidade ou AuthorizationDecision.

Não crie banco, migration, endpoint final, código, tela, schema definitivo ou módulo novo.
```

## 77. Atualização para 05_CATALOGO_DE_CONTRATOS_PUBLICOS.md

Adicionar seção posterior à atualização da Matriz Técnica de Permissões:

```text
# Atualização consolidada: Matriz Técnica de Dados Sensíveis por Contrato

A partir da DEC-191, este Catálogo de Contratos Públicos passa a ser complementado oficialmente pela Matriz Técnica de Dados Sensíveis por Contrato.

Documento técnico raiz complementar:

07_MATRIZ_TECNICA_DADOS_SENSIVEIS_POR_CONTRATO.md

Atualização obrigatória nos metadados mínimos:

- data_sensitivity_profile
- allowed_data_categories
- forbidden_data_categories
- reference_policy
- raw_payload_policy
- masking_policy_reference
- retention_policy_reference
- consent_policy_reference
- legal_basis_or_lgpd_policy_reference
- purpose_policy_reference
- export_control_policy
- visualization_audit_required
- export_audit_required
- data_subject_impact
- anonymization_or_disposal_policy
- third_party_data_policy, quando aplicável

Contrato público restrito, sensível ou crítico sem perfil de dados sensíveis não avança para modelagem técnica.

Última DEC consolidada: DEC-191.
Próxima DEC livre: DEC-195.
```

## 78. Atualização para 06_MATRIZ_TECNICA_PERMISSOES_POR_CONTRATO.md

Adicionar referência cruzada:

```text
# Atualização complementar: Matriz Técnica de Dados Sensíveis por Contrato

A Matriz Técnica de Permissões por Contrato define quem pode chamar ou consumir cada contrato público, em qual escopo e com qual permissão conceitual.

A Matriz Técnica de Dados Sensíveis por Contrato define quais dados podem trafegar nesses contratos, quais devem ser proibidos, mascarados, referenciados, retidos, descartados, auditados ou bloqueados em fail-closed.

Campo complementar recomendado em cada linha da matriz de permissões:

sensitive_data_matrix_profile

Regra curta:

Permissão limita o ator. Dados sensíveis limitam o payload. Core decide. Módulo dono executa. Auditoria evidencia.
```

## 79. README recomendado para o pacote final desta etapa

```text
# PACOTE FINAL - MATRIZ TÉCNICA DE DADOS SENSÍVEIS POR CONTRATO NODUOS

Status: Matriz Técnica de Dados Sensíveis por Contrato aprovada e consolidada, com DEC-191.
Data: 2026-06-27

Inclui:

- CANVA_FINAL_MATRIZ_TECNICA_DADOS_SENSIVEIS_POR_CONTRATO_NODUOS_FINAL.txt
- 07_MATRIZ_TECNICA_DADOS_SENSIVEIS_POR_CONTRATO.md, quando aplicado à raiz
- Atualização DEC-191 para 03_DECISOES_OFICIAIS.md
- Atualizações cruzadas para 00, 01, 02, 04, 05 e 06

Última DEC consolidada: DEC-191.
Próxima DEC livre: DEC-195.

Segunda checagem aplicada:

- 292 contratos da Matriz Técnica de Permissões por Contrato confirmados nesta matriz.
- Nenhum contract_id oficial da matriz 06 ficou ausente.
- Contratos transversais incluídos.
- Todos os 25 módulos oficiais cobertos.
- Riscos de exposição sensível corrigidos.
- Riscos de acoplamento por dado sensível corrigidos.
- DEC-191 consolidada como decisão aprovada.
- Próxima etapa recomendada preservada: detalhamento de EventEnvelope v1, EvidenceReference, SecretReference, AuthorizationDecision e matriz de campos por contrato, sem schema definitivo.

Frase guia:
Dado sensível exige finalidade. Contrato limita payload. Segurança protege. Core autoriza. Auditoria evidencia.
```

## 80. Checklist final de consistência

- 292 contratos avaliados.
- Todos os contratos oficiais da Matriz Técnica de Permissões por Contrato possuem cobertura nesta matriz.
- Todos os 25 módulos oficiais possuem cobertura.
- Contratos transversais incluídos.
- Dados pessoais, financeiros, vídeo, evidência, visitante, credencial, segredo, diagnóstico, suporte remoto, integração, webhook externo e exportação possuem restrições próprias.
- Nenhum contrato sensível foi autorizado a transportar segredo bruto.
- Nenhum contrato sensível foi autorizado a transportar biometria bruta.
- Vídeo, imagem, documento e evidência bruta foram limitados por finalidade, referência, política, retenção e auditoria.
- BI foi limitado por agregação, máscara, finalidade, retenção e auditoria.
- Exportação sensível foi limitada por finalidade, política, AuthorizationDecision, retenção, mascaramento, destino, hash quando aplicável e auditoria.
- Webhook externo foi limitado por assinatura, SecretReference, política de terceiro, escopo, retenção, auditoria e revogação.
- Suporte remoto foi limitado por sessão temporária, autorização, escopo, justificativa, encerramento e auditoria.
- DEC-191 foi aplicada como aprovada nesta etapa.
- Próxima DEC livre ajustada para DEC-192.
- Nenhuma divergência bloqueante encontrada contra os arquivos base.
- Status final: aprovada e consolidada para atualização da raiz.

## 81. Próxima etapa recomendada

Após aplicar esta matriz na raiz como `07_MATRIZ_TECNICA_DADOS_SENSIVEIS_POR_CONTRATO.md`, a próxima etapa técnica recomendada é detalhar, ainda em nível conceitual e sem schema definitivo:

1. EventEnvelope v1 com perfil de sensibilidade, payload mínimo e campos proibidos.
2. EvidenceReference com cadeia de custódia, hash, retenção, máscara e export_control_policy.
3. SecretReference com vault, rotação, revogação, escopo, expiração e auditoria.
4. AuthorizationDecision com escopo sensível, expiração, policy_references e audit_reference.
5. Matriz de campos por contrato, sem virar banco, migration, DTO final ou endpoint final.

## Parecer final

A Matriz Técnica de Dados Sensíveis por Contrato está aprovada e consolidada para atualização da raiz.

Ela corrige os riscos de exposição sensível, aplica a DEC-191, preserva a fronteira dos módulos, mantém a autoridade estrutural do Core Platform, respeita Segurança e LGPD, reforça Auditoria e Compliance e impede que contratos públicos virem túneis Sith para payload bruto, banco compartilhado, segredo exposto ou domínio alheio.

Frase final:

Dado sensível exige finalidade. Contrato limita payload. Segurança protege. Core autoriza. Auditoria evidencia.

# Atualização complementar - Uso da Matriz de Dados Sensíveis com EventEnvelope v1

A Matriz Técnica de Dados Sensíveis por Contrato passa a ser filtro obrigatório para o payload de qualquer evento regido pelo `08_DETALHAMENTO_EVENTENVELOPE_V1.md`.

Regras:

- Payload de evento deve ser mínimo.
- Dado pessoal, financeiro, visitante, suporte, imagem, vídeo, evidência, IP interno, rota local, diagnóstico, integração externa, webhook externo, segredo ou exportação sensível deve respeitar finalidade, máscara, retenção, política, auditoria e fail-closed.
- Segredo bruto, biometria bruta, vídeo bruto sem política, imagem bruta sem política, documento completo sem finalidade e dado fora de tenant/contexto são proibidos e devem levar o evento à rejeição ou quarentena.
- EvidenceReference, SecretReference e ResourceReference devem ser usados quando referência segura bastar.
- Eventos com dados sensíveis não podem alimentar BI, webhook externo, read model ou exportação sem agregação, máscara, finalidade, política e auditoria conforme matriz.

Estado da raiz após esta atualização:

- Última DEC consolidada: DEC-194.
- Próxima DEC livre: DEC-195.
- Próxima etapa recomendada: Detalhamento de SecretReference.


---

# Atualização - Detalhamento de EvidenceReference v1

Data da atualização: 2026-06-27.

Decisão aplicada: DEC-193.

Arquivo técnico raiz consolidado: `09_DETALHAMENTO_EVIDENCEREFERENCE_V1.md`.

Última DEC consolidada: DEC-193.

Próxima DEC livre: DEC-195.

Próxima etapa recomendada: Detalhamento de SecretReference.

Frase guia da etapa:

Evidência referencia prova. Cadeia de custódia preserva confiança. Payload evita bruto. Segurança controla acesso. Auditoria sustenta validade.

Regras consolidadas:

1. EvidenceReference v1 é o padrão transversal oficial para referenciar evidências, provas, vídeos, imagens, snapshots, clips, documentos probatórios, anexos probatórios, eventos de acesso, alarmes, suporte, auditoria, exportações, diagnósticos, incidentes, solicitações LGPD e evidências externas normalizadas.
2. EvidenceReference aponta para a prova, mas não transporta a prova bruta por padrão.
3. Evidência crítica exige `AuthorizationDecision`, cadeia de custódia, política de retenção, política de acesso, política de exportação, `audit_reference`, tenant, contexto, escopo, finalidade e fail-closed.
4. Evidência sensível exige finalidade, classificação, política de Segurança e LGPD, retenção, mascaramento, auditoria e controle de visualização/exportação.
5. `storage_reference` é referência segura. É proibido expor URL pública permanente, path bruto, bucket sensível, segredo, token ou credencial de storage.
6. `FileAttachmentReference` só se torna `EvidenceReference` quando possuir valor probatório, cadeia de custódia ou política formal de evidência.
7. `EventEnvelope v1` pode transportar `evidence_reference`, mas não deve transportar prova bruta quando EvidenceReference bastar.
8. A existência de EvidenceReference em evento não autoriza visualização da prova. Visualização, exportação, compartilhamento, reprocessamento, liberação de quarentena ou acesso ao bruto exigem autorização própria, finalidade, política, auditoria e escopo.
9. Auditoria e Compliance preserva trilha, cadeia de custódia, consulta auditável e exportação probatória, sem assumir execução operacional dos módulos donos.
10. Segurança e LGPD governa políticas de tratamento, retenção, máscara, descarte, expurgo, anonimização e incidentes, sem virar storage de evidências brutas.
11. DEC-182 permanece como decisão base que reconhece EvidenceReference como contrato oficial de evidência e cadeia de custódia. DEC-193 apenas detalha o EvidenceReference v1 como padrão técnico raiz complementar.

Resultado:

A raiz passa a estar atualizada com o Detalhamento de EvidenceReference v1 e pronta para avançar para Detalhamento de SecretReference, sem pular as etapas de governança necessárias antes da programação.


## Regra global de dados sensíveis para EvidenceReference v1

Evidência sensível ou crítica sem `owner_module`, `custody_owner_module`, `related_resource_reference`, `tenant_id`, `context_id`, finalidade, política Segurança/LGPD, retenção, máscara aplicável, `audit_reference`, `export_control_policy` quando exportável ou AuthorizationDecision quando crítica deve ser negada, pausada ou quarentenada em comportamento fail-closed.

Vídeo, imagem, snapshot, clip, documento, anexo probatório, suporte remoto, diagnóstico, trilha auditável, exportação e evidência externa normalizada devem preferir EvidenceReference em vez de bruto.


---

# Atualização - Detalhamento de SecretReference v1

Data da atualização: 2026-06-27.

Decisão aplicada: DEC-194.

Arquivo técnico raiz consolidado: `10_DETALHAMENTO_SECRETREFERENCE_V1.md`.

Última DEC consolidada: DEC-194.

Próxima DEC livre: DEC-195.

Próxima etapa recomendada: Detalhamento de AuthorizationDecision v1.

Frase guia da etapa:

Segredo não viaja. Referência aponta. Política limita. Core autoriza. Módulo dono usa. Auditoria registra.

Regras consolidadas:

1. SecretReference v1 é o padrão transversal oficial para referência segura de segredos, tokens, chaves, certificados privados, credenciais, client secrets, assinaturas, segredos de webhook, credenciais de gateway, credenciais de dispositivo, credenciais de conector, credenciais de provedor externo e material criptográfico.
2. Segredo bruto é proibido em payload, evento, comando, webhook, read model, log, URL, BI, relatório, auditoria, exportação, configuração e tela.
3. `raw_secret_allowed` deve ser sempre `never` em contratos públicos e artefatos transversais.
4. Todo SecretReference deve declarar owner_module, finalidade, escopo, tipo de segredo, sensibilidade crítica, política de acesso, política de resolução interna, política de rotação, política de revogação, política de expiração quando aplicável, política de auditoria, tenant/contexto quando aplicável, ResourceReference quando aplicável e comportamento fail-closed.
5. SecretReference não é cofre concreto, banco compartilhado, endpoint para leitura de segredo, autorização operacional, permissão nova ou atalho para módulo consumidor acessar segredo bruto.
6. Módulo dono usa o segredo dentro de seu próprio limite autorizado. Módulos consumidores recebem referência, status, resultado ou erro minimizado, nunca segredo bruto.
7. Eventos de ciclo de vida de segredo devem usar EventEnvelope v1 com payload minimizado e podem transportar apenas `secret_reference`, políticas, status, reason_code minimizado, correlation_id, causation_id, AuthorizationDecision quando aplicável e audit_reference.
8. Evidências criptografadas, assinadas, lacradas, exportadas ou verificadas por material criptográfico devem usar EvidenceReference + SecretReference sem misturar prova e segredo.
9. Webhooks externos exigem assinatura, rotação, revogação, auditoria e SecretReference para segredo de assinatura.
10. Falha, ausência de política, ausência de owner_module, ausência de finalidade, ausência de escopo, expiração, revogação, suspeita de vazamento ou tentativa de uso fora do tenant/contexto deve negar, bloquear ou quarentenar conforme fail-closed.
11. Quarentena de segredo deve gerar evidência por EvidenceReference e incidente conforme Segurança e LGPD e Auditoria e Compliance quando aplicável.

Resultado:

A raiz passa a estar atualizada com o Detalhamento de SecretReference v1 e pronta para avançar ao Detalhamento de AuthorizationDecision v1, mantendo a blindagem de segredos antes da modelagem técnica e programação.


## Atualização consolidada da matriz de dados sensíveis - SecretReference v1

Segredo é sempre dado crítico.

Contratos com segredo devem usar SecretReference v1.

Dados proibidos:

- senha bruta;
- token bruto;
- refresh token bruto;
- client secret bruto;
- chave privada;
- chave simétrica;
- certificado com chave privada;
- segredo de webhook;
- credencial de gateway;
- credencial de dispositivo;
- credencial de conector;
- credencial de provedor;
- material criptográfico;
- URL assinada com segredo;
- payload original de provedor contendo segredo.

Dados permitidos:

- `secret_reference_id`;
- `owner_module`;
- finalidade;
- escopo;
- estado;
- política;
- datas de ciclo de vida;
- status de rotação;
- status de revogação;
- `audit_reference`;
- metadados mínimos autorizados.

Contrato sensível ou crítico com segredo bruto deve ser rejeitado, bloqueado ou quarentenado.

## Atualização transversal: AuthorizationDecision v1 e ResourceReference v1

Todo contrato com dado sensível ou crítico deve declarar se exige AuthorizationDecision v1, qual finalidade autoriza o tratamento, qual política de Segurança/LGPD se aplica, qual máscara deve ser usada, qual retenção vale, qual audit_reference registra a visualização ou exportação e qual fail_policy será aplicada.

AuthorizationDecision não permite payload bruto indevido. Segredo bruto, biometria bruta, vídeo bruto sem política, imagem bruta sem finalidade, documento completo sem necessidade e dado fora de tenant/contexto continuam proibidos mesmo quando houver decisão allowed.

ResourceReference v1 deve carregar apenas referência minimizada e metadados necessários para escopo, autorização, auditoria, política e rastreabilidade.

É proibido transportar segredo bruto, biometria bruta, vídeo bruto, imagem bruta, evidência bruta, documento completo, payload financeiro completo, dado de outro tenant, dado fora do contexto autorizado, chave interna de banco, objeto interno ou payload completo do módulo dono.

Quando houver dado sensível ou crítico, ResourceReference deve declarar sensitivity_level, data_categories, purpose quando aplicável, policy_references, security_policy_reference, lgpd_policy_reference, masking_policy_reference, retention_policy_reference, audit_reference e fail-closed.

Quando referência bastar, dado bruto é proibido.


---

# Atualização consolidada conjunta: AuthorizationDecision v1 e ResourceReference v1

Data da consolidação: 2026-06-27.

Decisões aplicadas:

- DEC-195: AuthorizationDecision v1 como padrão oficial de decisão de autorização do Core Platform.
- DEC-196: ResourceReference v1 como padrão oficial de referência segura de recursos entre módulos.

Arquivos técnicos raiz adicionados:

- `11_DETALHAMENTO_AUTHORIZATIONDECISION_V1.md`
- `12_DETALHAMENTO_RESOURCEREFERENCE_V1.md`

Estado final da raiz:

```text
Última DEC consolidada: DEC-196.
Próxima DEC livre: DEC-197.
Próxima etapa recomendada: Blueprint técnico da aplicação.
```

Síntese da consolidação:

AuthorizationDecision v1 fecha a autoridade estrutural de autorização do Core Platform, definindo decisão temporal, contextual, escopada, auditável e fail-closed para ações sensíveis e críticas.

ResourceReference v1 fecha a referência segura de recursos entre módulos, preservando owner_module, tenant, contexto, escopo, sensibilidade, lifecycle, políticas e `no_domain_transfer = true`.

Regra consolidada:

```text
ResourceReference aponta o recurso.
AuthorizationDecision decide a ação.
EventEnvelope comunica o fato.
EvidenceReference referencia a prova.
SecretReference referencia o segredo.
Módulo dono executa.
Auditoria registra.
```

A raiz passa a estar atualizada com a blindagem conceitual principal necessária antes do Blueprint técnico da aplicação e da programação.

## Atualização transversal: Blueprint técnico da aplicação

Data: 2026-06-27.
Decisão aplicada: DEC-197.
Arquivo técnico raiz: `13_BLUEPRINT_TECNICO_APLICACAO_NODUOS.md`.

Toda implementação deve aplicar privacy by design e security by design desde o primeiro arquivo de código.

Antes de criar payload, tabela, endpoint, evento, read model, log, exportação, BI, webhook ou tela, a programação deve classificar dados, finalidade, sensibilidade, máscara, retenção, auditoria, política LGPD e comportamento de falha.

Segredo bruto, evidência bruta, biometria bruta, vídeo bruto, documento completo, payload financeiro completo e dado fora de tenant/contexto continuam proibidos quando referência, máscara, agregação ou resumo autorizado bastar.

O Blueprint exige PayloadSensitivityGate, auditoria mínima, testes de tenant/contexto, testes de autorização, testes de fail-closed e testes anti-vazamento antes de deploy.
