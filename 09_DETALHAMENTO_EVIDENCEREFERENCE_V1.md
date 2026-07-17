# CANVA FINAL - DETALHAMENTO DE EVIDENCEREFERENCE NODUOS

Projeto: NoduOS
Descrição oficial: SaaS Modular de Gestão de Espaços e Segurança Unificada
Conceito técnico: Sistema Operacional Modular para Espaços Físicos Conectados
Conceito de marca: Conexão que impulsiona
Tipo de documento: Padrão conceitual oficial para referência segura de evidências
Versão do documento: 1.0.5
Versão base do contrato: v1
Data desta consolidação: 2026-06-27
Status: Aprovado e atualizado com Blueprint Técnico da Aplicação, DEC-198 e referência Git canônica pré-runtime
Última DEC consolidada na raiz: DEC-198
Próxima DEC livre: DEC-199
DEC consolidada nesta etapa: DEC-193
Próxima DEC livre após aplicação: DEC-195
Arquivo técnico raiz oficial: `09_DETALHAMENTO_EVIDENCEREFERENCE_V1.md`

Frase guia:

Evidência referencia prova. Cadeia de custódia preserva confiança. Payload evita bruto. Segurança controla acesso. Auditoria sustenta validade.

Regra central:

Política influencia. Core decide. Módulo dono executa. Auditoria registra.

Regra de governança:

O chat conversa. O documento manda.

---

## 0. Ajustes aplicados nesta versão

Esta versão transforma as decisões já existentes sobre evidência, EventEnvelope v1, ResourceReference, SecretReference, dados sensíveis, permissões, auditoria, LGPD, retenção, mascaramento, exportação e cadeia de custódia em um padrão transversal único para EvidenceReference.

Ajustes consolidados:

- EvidenceReference fica definido como referência segura, minimizada, auditável e escopada de prova.
- Evidência bruta deixa de ser payload padrão e passa a ser exceção altamente controlada pelo módulo dono.
- Evidência crítica exige AuthorizationDecision, cadeia de custódia, política de retenção, política de acesso, audit_reference e fail-closed.
- Evidência sensível exige finalidade, classificação, política Segurança/LGPD, retenção, mascaramento e auditoria.
- Storage não é exposto por URL pública permanente, path bruto, bucket sensível ou segredo.
- FileAttachmentReference só vira EvidenceReference quando tiver valor probatório, cadeia de custódia ou política formal de evidência.
- EventEnvelope v1 pode carregar evidence_reference, mas não carrega prova bruta quando referência bastar.
- Auditoria e Compliance preserva cadeia e trilha, sem assumir execução operacional dos módulos donos.
- Segurança e LGPD governa políticas de tratamento, retenção, máscara, descarte, expurgo e anonimização, sem virar storage de evidências brutas.

Resultado:

O EvidenceReference passa a ser a peça transversal para conectar prova, evento, recurso, ator, tenant, contexto, política, integridade, custódia, visualização, exportação e auditoria sem quebrar modularidade.

### 0.1 Segunda checagem contra os arquivos base

Arquivos conferidos nesta revisão final:

- `00_BIBLIA_DO_PROJETO.md`
- `01_MAPA_DE_MODULOS.md`
- `02_REGRAS_DE_ARQUITETURA.md`
- `03_DECISOES_OFICIAIS.md`
- `04_PROMPTS_DE_TRABALHO.md`
- `05_CATALOGO_DE_CONTRATOS_PUBLICOS.md`
- `06_MATRIZ_TECNICA_PERMISSOES_POR_CONTRATO.md`
- `07_MATRIZ_TECNICA_DADOS_SENSIVEIS_POR_CONTRATO.md`
- `08_DETALHAMENTO_EVENTENVELOPE_V1.md`
- `IDENTIDADE_OFICIAL_NODUOS.md`
- `README_PACOTE_FINAL_NODUOS_EVENTENVELOPE_V1_RAIZ.md.txt`
- `PROMPT_DETALHAMENTO_EVIDENCEREFERENCE_NODUOS.txt`
- `CANVA_FINAL_DETALHAMENTO_EVIDENCEREFERENCE_NODUOS.txt`

Resultado da segunda checagem:

- A identidade oficial foi preservada: NoduOS como nome, Building OS como conceito técnico e SaaS Modular de Gestão de Espaços e Segurança Unificada como descrição.
- A regra central foi preservada: Política influencia. Core decide. Módulo dono executa. Auditoria registra.
- A última DEC consolidada na raiz passa a ser DEC-193 após a consolidação desta etapa. A próxima DEC livre passa a ser DEC-194 após a consolidação da DEC-193.
- A DEC-182 já aprovou EvidenceReference como contrato oficial de evidências e cadeia de custódia. Esta etapa não duplica a DEC-182; ela detalha o EvidenceReference v1 como padrão técnico raiz complementar.
- O EventEnvelope v1 permanece obrigatório para eventos públicos intermodulares e pode transportar `evidence_reference`, mas não prova bruta quando referência bastar.
- O Catálogo de Contratos Públicos já reconhece EvidenceReference como contrato transversal e contrato de evidência. Esta versão apenas consolida sua semântica, campos, proibições e relações.
- A Matriz Técnica de Permissões por Contrato já exige EvidenceReference para evidência e fail-closed para ação sensível ou crítica sem escopo, política ou autorização. Esta versão mantém essa blindagem.
- A Matriz Técnica de Dados Sensíveis por Contrato já classifica EvidenceReference como crítico quando envolve prova, retenção específica, auditoria e exportação. Esta versão detalha o comportamento esperado.
- Nenhuma fronteira de módulo foi alterada. Câmeras / VMS continua dona de vídeo; Controle de Acesso continua dono de eventos de acesso; Alarmes continua dono de eventos de alarme; Tickets e Suporte continuam donos de registros operacionais; Auditoria e Compliance preserva trilha e cadeia; Segurança e LGPD governa políticas.
- Nenhum banco, storage definitivo, fila, endpoint, schema técnico, migration, tela, linguagem, framework ou novo módulo foi criado.
- As matrizes obrigatórias do prompt foram completadas, incluindo a matriz específica de evidências que exigem EvidenceReference em EventEnvelope v1.
- A DEC-193 foi consolidada como detalhamento técnico complementar, sem reabrir ou substituir DEC-182.

Correções aplicadas nesta versão final refinada:

- Status do documento ajustado para aprovado e consolidado nos documentos centrais.
- DEC-193 reescrita como detalhamento complementar do EvidenceReference v1, evitando duplicidade com DEC-182.
- Inclusão explícita da checagem contra todos os arquivos base do projeto.
- Inclusão da matriz de evidências que exigem EvidenceReference em EventEnvelope v1.
- Reforço de que `source_event_reference` é obrigatório quando a evidência for derivada de evento.
- Reforço de que evidência crítica sem `chain_of_custody_reference`, `audit_reference`, política, escopo ou autorização deve operar em fail-closed.
- Reforço de que `storage_reference` é referência segura, não URL pública permanente, path bruto, bucket sensível ou segredo.
- Reforço de que FileAttachmentReference só se torna EvidenceReference quando houver valor probatório, cadeia de custódia ou política formal de evidência.

---

## 1. Objetivo do EvidenceReference

O EvidenceReference é o padrão conceitual do NoduOS para referenciar prova ou evidência sem transportar o conteúdo bruto de forma indevida.

Ele existe para permitir que módulos apontem para vídeo, imagem, snapshot, clip, documento probatório, anexo probatório, evento de acesso, alarme, ticket, suporte, auditoria, exportação, diagnóstico, incidente, solicitação LGPD ou evidência externa normalizada com segurança, escopo, finalidade, retenção, mascaramento, integridade, cadeia de custódia e auditoria.

O objetivo não é criar banco, schema técnico definitivo, endpoint, fila, storage concreto, migration, código ou tela. O objetivo é definir o pacto técnico que toda evidência deve obedecer antes da modelagem futura.

Regra curta:

EvidenceReference aponta para a prova. Ele não vira a prova inteira dentro do payload.

## 2. Escopo desta versão

Esta versão cobre:

- referência de evidências geradas por módulos internos;
- referência de evidências derivadas de eventos envelopados;
- referência de evidências externas normalizadas;
- cadeia de custódia;
- visualização sensível;
- exportação e compartilhamento externo;
- retenção, expurgo, descarte e anonimização;
- mascaramento por perfil, finalidade e contexto;
- quarentena de evidência suspeita;
- reprocessamento seguro;
- integridade, hash e imutabilidade;
- relação com EventEnvelope v1, ResourceReference, SecretReference, AuditTrailReference e FileAttachmentReference;
- governança por módulo produtor, módulo consumidor, owner_module e custody_owner_module.

Fora do escopo:

- banco de dados;
- migrations;
- rotas finais;
- schema técnico definitivo;
- storage definitivo;
- fila/broker;
- linguagem/framework;
- tela;
- novo módulo;
- fluxo operacional fora da arquitetura já aprovada.

## 3. Fontes oficiais consideradas

- `00_BIBLIA_DO_PROJETO.md`
- `01_MAPA_DE_MODULOS.md`
- `02_REGRAS_DE_ARQUITETURA.md`
- `03_DECISOES_OFICIAIS.md`
- `04_PROMPTS_DE_TRABALHO.md`
- `05_CATALOGO_DE_CONTRATOS_PUBLICOS.md`
- `06_MATRIZ_TECNICA_PERMISSOES_POR_CONTRATO.md`
- `07_MATRIZ_TECNICA_DADOS_SENSIVEIS_POR_CONTRATO.md`
- `08_DETALHAMENTO_EVENTENVELOPE_V1.md`
- `IDENTIDADE_OFICIAL_NODUOS.md`
- `README_PACOTE_FINAL_NODUOS_EVENTENVELOPE_V1_RAIZ.md.txt`
- `PROMPT_DETALHAMENTO_EVIDENCEREFERENCE_NODUOS.txt`

## 4. Estado atual da raiz

- Todos os módulos principais estão aprovados.
- A Revisão Geral foi consolidada.
- O Catálogo de Contratos Públicos foi consolidado como documento técnico raiz complementar.
- A Matriz Técnica de Permissões por Contrato foi consolidada como documento técnico raiz complementar.
- A Matriz Técnica de Dados Sensíveis por Contrato foi consolidada como documento técnico raiz complementar.
- O Detalhamento de EventEnvelope v1 foi consolidado como documento técnico raiz complementar.
- O arquivo `08_DETALHAMENTO_EVENTENVELOPE_V1.md` foi adicionado à raiz.
- A última DEC consolidada é DEC-192.
- A próxima DEC livre é DEC-193.
- A próxima etapa técnica recomendada é Detalhamento de EvidenceReference.
- A DEC-182 já reconhece EvidenceReference como contrato oficial de evidências e cadeia de custódia.
- Esta versão final refinada consolida a DEC-193 apenas como detalhamento técnico complementar do EvidenceReference v1 e criação do arquivo raiz `09_DETALHAMENTO_EVIDENCEREFERENCE_V1.md`.

## 5. Definição oficial de EvidenceReference

EvidenceReference é uma referência segura, minimizada, auditável, versionada e escopada para uma evidência ou prova relacionada a um fato, recurso, ator, contexto, caso, evento, exportação, auditoria ou incidente.

Ele deve carregar metadados suficientes para rastrear a evidência, validar autorização, aplicar política, preservar cadeia de custódia, manter integridade e auditar visualização/exportação. Ele não deve carregar o bruto quando uma referência bastar.

EvidenceReference não é:

- banco compartilhado;
- storage público;
- payload bruto;
- URL permanente;
- substituto de AuthorizationDecision;
- substituto de EventEnvelope v1;
- substituto de ResourceReference;
- substituto de SecretReference;
- substituto de FileAttachmentReference;
- substituto de AuditTrailReference;
- domínio operacional de outro módulo.

## 6. Quando EvidenceReference é obrigatório

EvidenceReference é obrigatório quando houver:

- vídeo, snapshot, clip, playback, imagem ou stream com valor probatório;
- evidência de acesso físico, acesso negado, acesso concedido, pânico, alarme ou ação crítica;
- documento, anexo ou arquivo com valor probatório;
- exportação sensível, pacote de exportação ou relatório probatório;
- suporte remoto, sessão de atendimento ou diagnóstico usado como prova;
- trilha de auditoria usada como evidência;
- caso de compliance, segurança, privacidade, retenção, descarte ou solicitação de titular;
- evento externo normalizado que sirva como prova;
- cadeia de custódia;
- qualquer dado que não deva trafegar bruto no EventEnvelope, webhook, read model, comando ou relatório.

Regra de ouro:

Se o consumidor precisa saber que existe uma prova, use EvidenceReference. Se ele precisa acessar o bruto, ele deve pedir autorização própria ao módulo dono, com finalidade, política, escopo, auditoria e decisão do Core.

## 7. Tipos oficiais de evidência

| Tipo oficial | Definição | Owner padrão | Custody padrão | Sensibilidade base | AuthorizationDecision | Cadeia de custódia |
| --- | --- | --- | --- | --- | --- | --- |
| VideoEvidence | Vídeo preservado como prova, gravação ou segmento probatório. | Câmeras / VMS | Auditoria e Compliance quando cadeia formal | Crítico | Sim | Sim |
| SnapshotEvidence | Imagem estática com valor operacional ou probatório. | Câmeras / VMS ou módulo produtor autorizado | Câmeras / VMS ou Auditoria e Compliance | Sensível/Crítico | Condicional | Sim |
| ClipEvidence | Recorte temporal de vídeo com finalidade específica. | Câmeras / VMS | Câmeras / VMS ou Auditoria e Compliance | Crítico | Sim | Sim |
| AccessEventEvidence | Prova de tentativa, liberação, negação ou execução de acesso físico. | Controle de Acesso | Controle de Acesso ou Auditoria e Compliance | Crítico | Sim | Sim |
| AlarmEventEvidence | Prova de disparo, reconhecimento ou resolução de alarme. | Alarmes | Alarmes ou Auditoria e Compliance | Crítico | Sim | Sim |
| PanicEventEvidence | Prova de acionamento de pânico ou emergência. | Alarmes | Auditoria e Compliance em caso crítico | Crítico | Sim | Sim |
| TicketAttachmentEvidence | Anexo operacional convertido em evidência por valor probatório. | Tickets | Tickets ou Auditoria e Compliance | Sensível | Condicional | Condicional |
| SupportSessionEvidence | Registro probatório de atendimento, diagnóstico ou sessão de suporte. | Suporte e Operação | Suporte e Operação ou Auditoria e Compliance | Sensível/Crítico | Sim | Sim |
| RemoteSupportEvidence | Prova de sessão remota, escopo, autorização, duração e ações realizadas. | Suporte e Operação | Suporte e Operação ou Auditoria e Compliance | Crítico | Sim | Sim |
| AuditTrailEvidence | Trilha auditável usada como evidência. | Auditoria e Compliance ou Core Platform | Auditoria e Compliance | Sensível | Sim | Sim |
| ComplianceEvidence | Evidência vinculada a caso de compliance. | Auditoria e Compliance | Auditoria e Compliance | Crítico | Sim | Sim |
| FinancialExportEvidence | Pacote ou relatório financeiro exportado com valor probatório. | Financeiro | Financeiro ou Auditoria e Compliance | Crítico | Sim | Sim |
| BIExportEvidence | Exportação analítica autorizada, preferencialmente agregada/mascarada. | Relatórios / BI | Relatórios / BI ou Auditoria e Compliance | Sensível/Crítico | Sim | Condicional |
| DocumentEvidence | Documento probatório controlado por finalidade, máscara e retenção. | Módulo dono do documento | Módulo dono ou Auditoria e Compliance | Sensível/Crítico | Sim | Condicional |
| VisitorEvidence | Prova de convite, check-in, check-out, QR, acesso ou ocorrência de visitante. | Convites e Visitantes | Convites e Visitantes ou Auditoria e Compliance | Sensível/Crítico | Sim | Sim |
| ReservationEvidence | Prova de aprovação, uso, check-in, no-show ou cobrança vinculada à reserva. | Reservas | Reservas ou Auditoria e Compliance | Sensível | Condicional | Condicional |
| DeviceDiagnosticEvidence | Prova de diagnóstico técnico, saúde ou falha de dispositivo. | Dispositivos | Dispositivos ou Suporte e Operação | Sensível | Condicional | Condicional |
| GatewayDiagnosticEvidence | Prova de tunnel, rota, conectividade, latência ou falha local. | Gateway Local / Mikrotik / Tunnel | Gateway ou Suporte e Operação | Sensível/Crítico | Condicional | Sim quando expõe rede |
| IntegrationEvidence | Prova de instalação, execução, normalização ou falha de conector. | Marketplace de Integrações | Marketplace ou Auditoria e Compliance | Sensível/Crítico | Sim | Sim quando externo |
| WebhookDeliveryEvidence | Prova de entrega, assinatura, retry, falha ou dead-letter de webhook. | Marketplace de Integrações ou Notificações | Marketplace, Notificações ou Auditoria | Sensível/Crítico | Sim | Sim quando externo |
| SecurityIncidentEvidence | Prova vinculada a incidente de segurança. | Segurança e LGPD | Segurança e LGPD ou Auditoria e Compliance | Crítico | Sim | Sim |
| PrivacyRequestEvidence | Prova de solicitação de titular, consentimento, retenção, descarte ou resposta LGPD. | Segurança e LGPD | Segurança e LGPD ou Auditoria e Compliance | Sensível/Crítico | Sim | Sim |
| ChainOfCustodyEvidence | Evidência da própria cadeia de custódia. | Auditoria e Compliance | Auditoria e Compliance | Crítico | Sim | Sim |
| ExportPackageEvidence | Pacote exportado com hash, expiração, destino e escopo auditável. | Módulo exportador | Módulo exportador ou Auditoria e Compliance | Crítico | Sim | Sim |
| ExternalEvidenceNormalized | Evidência externa validada, normalizada e vinculada a contrato público. | Marketplace de Integrações | Módulo dono após normalização ou Auditoria | Sensível/Crítico | Sim | Sim |

## 8. Separação entre EvidenceReference, ResourceReference, SecretReference, EventEnvelope v1, AuditTrailReference e FileAttachmentReference

| Elemento | Responsabilidade | O que não faz | Relação correta |
| --- | --- | --- | --- |
| EvidenceReference | Referencia prova/evidência com segurança, minimização, escopo, integridade, retenção, máscara e auditoria. | Não transporta bruto indevido, não autoriza visualização e não vira banco compartilhado. | Aponta para a prova e para políticas necessárias. |
| ResourceReference | Referencia recurso relacionado à evidência, preservando owner_module e no_domain_transfer. | Não transfere domínio do recurso para o consumidor. | EvidenceReference deve apontar para o recurso principal por ResourceReference. |
| SecretReference | Referencia segredo, token, chave, certificado, assinatura ou credencial. | Nunca transporta segredo bruto. | EvidenceReference usa SecretReference quando storage, exportação, webhook, assinatura ou integridade envolver segredo. |
| EventEnvelope v1 | Transporta evento que cria, atualiza, aponta, visualiza, exporta, quarentena ou reprocessa EvidenceReference. | Não carrega prova bruta quando referência bastar; não autoriza visualização. | Evento pode carregar evidence_reference ou evidence_reference_id. |
| AuditTrailReference | Referencia trilha auditável de criação, visualização, exportação, quarentena, reprocessamento, retenção ou descarte. | Não executa regra operacional do módulo dono. | EvidenceReference sempre exige audit_reference. |
| FileAttachmentReference | Referencia anexo operacional. | Não é prova automaticamente. | Só vira EvidenceReference quando tiver valor probatório, política de evidência ou cadeia de custódia. |

## 9. Campos obrigatórios

Todos os campos abaixo compõem a moldura conceitual oficial. Campos marcados como “quando aplicável” continuam obrigatórios quando a condição ocorrer.

| Campo | Regra oficial |
| --- | --- |
| evidence_reference_id | Identificador público único da referência de evidência. Nunca deve ser reutilizado e nunca deve revelar storage, path, sequência interna ou fornecedor. |
| evidence_reference_version | Versão da referência. Mudanças incompatíveis exigem nova versão conceitual. |
| evidence_type | Tipo oficial da evidência conforme matriz deste documento. |
| evidence_status | Estado atual da evidência: Registered, Active, Masked, Quarantined, UnderReview, IntegrityFailed, ExportedCopy, RetentionHold, Archived, Expired, Expunged, Anonymized ou Revoked. |
| evidence_owner_module | Módulo dono da evidência no domínio de origem. Não transfere posse para consumidor. |
| custody_owner_module | Módulo responsável pela preservação da cadeia de custódia. Pode ser o mesmo dono ou Auditoria e Compliance quando houver caso formal. |
| source_module | Módulo onde o fato, captura, anexo, exportação ou registro nasceu. |
| producer_module | Obrigatório quando a referência for publicada por serviço, conector, automação ou módulo diferente do source_module. |
| source_event_reference | Obrigatório quando a evidência deriva de evento. Preserva causalidade e impede evidência solta. |
| source_event_envelope_reference | Obrigatório quando a evidência foi criada, atualizada ou referenciada por EventEnvelope v1. |
| source_contract_id | Contrato público que autorizou o fato, captura, anexo, exportação ou normalização. |
| source_contract_version | Versão do contrato público associado. |
| related_resource_reference | ResourceReference do recurso principal relacionado à evidência. Sempre obrigatório. |
| related_actor_reference | Ator relacionado quando houver ação humana, serviço, automação, suporte ou integração. |
| related_subject_reference | Sujeito afetado quando diferente do ator: cliente, visitante, pessoa, dispositivo, unidade, fatura ou recurso. |
| related_context_reference | Referência adicional de contexto quando o tenant/contexto principal não bastar para explicar escopo. |
| related_case_reference | Caso de ticket, suporte, incidente, compliance, privacidade ou investigação, quando aplicável. |
| tenant_id | Obrigatório para evidência contextual ou multi-tenant. |
| context_id | Obrigatório quando a evidência pertencer a organização, parceiro, unidade, recurso físico, pessoa, evento, suporte, auditoria ou integração contextual. |
| organization_reference | Obrigatório quando a evidência pertencer a uma organização/espaço. |
| structure_reference | Obrigatório quando a evidência estiver relacionada a unidade, bloco, área, ambiente, acesso físico ou câmera localizada. |
| device_reference | Obrigatório quando a evidência envolver equipamento físico. |
| gateway_reference | Obrigatório quando a evidência envolver tunnel, conectividade, rota, diagnóstico ou entrega local. |
| access_point_reference | Obrigatório quando a evidência envolver porta, catraca, cancela, fechadura, leitor ou ponto de acesso. |
| camera_reference | Obrigatório quando envolver câmera, stream, snapshot, clip, playback ou vídeo. |
| alarm_zone_reference | Obrigatório quando envolver zona de alarme, sensor, disparo, pânico ou resolução. |
| ticket_reference | Obrigatório quando envolver chamado, comentário, anexo probatório, resolução ou escalonamento. |
| reservation_reference | Obrigatório quando envolver reserva, check-in, no-show, aprovação ou cobrança relacionada. |
| visitor_reference | Obrigatório quando envolver visitante, convite, check-in, check-out ou QR temporário. |
| sensitivity_level | Nível: Público, Interno, Restrito, Sensível ou Crítico. Evidência sensível ou crítica nunca pode ficar sem classificação. |
| data_categories | Categorias oficiais de dados presentes ou referenciadas: vídeo, imagem, acesso, visitante, financeiro, suporte, auditoria, documento, etc. |
| purpose | Finalidade explícita do tratamento e uso da evidência. |
| legal_basis_or_policy_reference | Base legal, consentimento, obrigação contratual, política interna ou regra LGPD aplicável quando necessário. |
| security_policy_reference | Política de Segurança aplicável. |
| lgpd_policy_reference | Política de LGPD e privacidade aplicável. |
| retention_policy_reference | Política de retenção obrigatória. |
| masking_policy_reference | Obrigatória quando houver dado pessoal, imagem, vídeo, visitante, unidade, documento, IP, rota, financeiro, suporte ou BI. |
| access_policy_reference | Política que define quem pode consultar metadados, visualizar, mascarar, exportar, compartilhar ou reprocessar. |
| export_control_policy | Obrigatória para qualquer exportação, pacote, download controlado, envio a terceiro ou compartilhamento externo. |
| authorization_decision_reference | Obrigatória quando a evidência for sensível, crítica, visualizada, exportada, compartilhada, reprocessada ou usada em ação física. |
| storage_reference segura | Referência opaca e segura ao armazenamento. Não é URL pública nem path bruto. |
| storage_location_reference | Classe/localização lógica segura, sem bucket/path sensível exposto. |
| hash_reference | Obrigatória quando integridade, cadeia de custódia, exportação, clip, documento, auditoria ou compliance exigirem prova de não adulteração. |
| integrity_reference | Referência ao resultado de validação, assinatura, checksum, carimbo temporal ou controle equivalente quando aplicável. |
| immutability_reference | Referência à política/estado de imutabilidade quando evidência não puder ser alterada fora de processo formal. |
| chain_of_custody_reference | Obrigatória para evidência crítica e para qualquer evidência usada como prova formal. |
| audit_reference | Obrigatória para criação, leitura sensível, visualização, exportação, quarentena, reprocessamento e descarte. |
| view_audit_required | Indicador obrigatório para evidência sensível, crítica, pessoal, vídeo, imagem, suporte, auditoria, financeiro ou visitante. |
| export_audit_required | Indicador obrigatório quando exportação for permitida ou solicitada. |
| created_at | Quando a referência foi criada. |
| captured_at | Quando a evidência foi capturada no mundo físico ou origem externa, se aplicável. |
| registered_at | Quando a evidência foi registrada no domínio do NoduOS. |
| expires_at | Obrigatório para evidência temporária, URL controlada, pacote exportado, QR temporário ou sessão remota. |
| retention_until | Data ou referência de término de retenção quando calculável. |
| masking_required | Indica se a visualização padrão deve aplicar máscara. |
| anonymization_allowed | Indica se anonimização pode ocorrer conforme política e sem quebrar obrigações legais/custódia. |
| deletion_policy | Política de descarte, expurgo, preservação legal ou bloqueio de remoção. |
| quarantine_status | Estado de quarentena: none, required, quarantined, released, rejected, discarded, retained_for_review. |
| quarantine_reason | Obrigatória quando quarantine_status indicar risco, bloqueio, falha de política ou origem suspeita. |
| declassification_policy | Obrigatória quando houver possibilidade de reduzir sensibilidade após máscara, anonimização, expiração ou encerramento de caso. |
| compatibility_policy | Política de compatibilidade da referência. |
| deprecation_policy | Política de depreciação da referência. |

## 10. Campos opcionais controlados

Campos opcionais só podem ampliar rastreabilidade, diagnóstico, proteção, exibição controlada ou governança. Eles nunca podem reduzir segurança, burlar tenant/contexto, expor bruto, transportar segredo, mudar semântica sem nova versão ou permitir acesso a storage.

| Campo opcional | Quando usar | Limite obrigatório |
| --- | --- | --- |
| display_label_minimized | Exibição controlada em listas, tickets, relatórios ou auditoria. | Sem dado pessoal bruto quando máscara bastar. |
| thumbnail_reference_masked | Prévia visual mascarada de imagem/vídeo. | Nunca miniatura identificável sem política. |
| preview_policy_reference | Definir se prévia é permitida. | Prévia não substitui autorização de visualização. |
| locale | Exportação ou exibição dependente de idioma. | Não altera política nem retenção. |
| timezone | Interpretação local de captured_at/occurred_at. | Não substitui timestamp canônico. |
| source_ip_masked | Auditoria e segurança. | IP bruto só por política específica; padrão é máscara. |
| network_reference | Diagnóstico de gateway/rede. | Sem rota local sensível bruta. |
| external_provider_reference | Evidência externa normalizada. | Sem segredo de provedor. |
| webhook_delivery_reference | Prova de entrega a terceiro. | Sem segredo; assinatura por SecretReference. |
| integration_mapping_reference | Mapeamento entre payload externo e contrato público. | Não expõe payload bruto de terceiro. |
| derived_from_evidence_reference | Evidência derivada, recorte, máscara, exportação ou reprocessamento. | Não sobrescreve referência original. |
| parent_chain_reference | Cadeia de custódia superior. | Não quebra rastreabilidade. |
| legal_hold_reference | Preservação legal/operacional temporária. | Bloqueia expurgo fora da política. |
| review_case_reference | Revisão, incidente, compliance ou privacidade. | Acesso restrito e auditável. |
| declassification_reason | Redução controlada de sensibilidade. | Só após política, máscara, expiração ou anonimização. |

## 11. Campos proibidos

| Campo/dado proibido | Motivo e correção oficial |
| --- | --- |
| senha | Segredo bruto. Deve nunca trafegar. |
| token bruto | Use SecretReference; nunca payload público. |
| chave privada | Material crítico; usar SecretReference e política de rotação. |
| certificado bruto | Usar certificate_reference/SecretReference. |
| segredo de webhook | Usar SecretReference e assinatura controlada. |
| segredo de provedor | Usar SecretReference; não expor credencial de integração. |
| credencial de gateway bruta | Gateway/Tunnel usa referência segura, nunca credencial no EvidenceReference. |
| credencial de dispositivo bruta | Dispositivo usa SecretReference quando necessário. |
| biometria bruta | Dado pessoal crítico; nunca em EvidenceReference. |
| template facial bruto | Referência e política LGPD; nunca template. |
| vídeo bruto | Usar VideoEvidence/ClipEvidence por referência. |
| stream bruto | Usar StreamReference autorizado ou EvidenceReference quando houver prova. |
| imagem bruta sem política | Usar SnapshotEvidence com máscara/política. |
| snapshot bruto sem política | Obrigatório mascaramento/política ou rejeição. |
| clip bruto sem política | Usar referência segura, cadeia e retenção. |
| documento completo sem finalidade | Usar DocumentEvidence/FileAttachmentReference com finalidade e política. |
| anexo probatório bruto sem política | Só EvidenceReference se tiver valor probatório; bruto não deve circular. |
| URL pública permanente | Risco de vazamento; usar referência opaca e acesso temporário autorizado. |
| URL assinada de longa duração no payload público | Acesso temporário deve ser emitido fora do evento e auditado. |
| caminho interno de storage sensível | Não expor path/bucket/estrutura técnica. |
| bucket/path bruto sensível | Substituir por storage_reference opaca. |
| payload completo de banco | Acoplamento e vazamento; usar contrato público. |
| classe interna serializada | Acoplamento a implementação. |
| objeto ORM serializado | Acoplamento a banco/framework. |
| dados de outro tenant | Violação multi-tenant; quarentena/rejeição. |
| dados fora do contexto autorizado | Violação de escopo; fail-closed. |
| logs brutos com segredos | Usar ErrorReference/log mascarado. |
| stack trace sensível | Usar erro mascarado e audit_reference. |
| IP interno bruto quando referência ou máscara bastar | Usar source_ip_masked/NetworkReference. |
| rota local sensível quando referência bastar | Usar GatewayRouteReference. |

## 12. Regras de payload e referência

- EvidenceReference deve carregar metadados e referências, não prova bruta.
- O payload de evento, comando, webhook, read model ou exportação deve preferir `evidence_reference_id` ou objeto minimizado de EvidenceReference.
- Acesso ao bruto exige solicitação própria ao módulo dono, AuthorizationDecision quando sensível/crítico, política Segurança/LGPD, finalidade, audit_reference e escopo.
- O consumidor não pode usar EvidenceReference como URL, path, cursor de banco, chave de storage ou permissão implícita.
- EvidenceReference pode informar que há prova disponível, seu tipo, sensibilidade, owner, cadeia, retenção e política, mas não entrega a prova diretamente.
- Evidência derivada deve gerar nova referência derivada, apontando para a referência original por `derived_from_evidence_reference`.
- Read model pode exibir resumo autorizado de evidência, mas não deve virar banco de evidências.
- BI só pode consumir evidência por agregação, máscara, finalidade e retenção.

## 13. Regras de dados sensíveis

- Evidência sensível exige `sensitivity_level`, `data_categories`, `purpose`, `security_policy_reference`, `lgpd_policy_reference`, `retention_policy_reference`, `masking_policy_reference`, `access_policy_reference` e auditabilidade.
- Evidência crítica exige AuthorizationDecision do Core, fail-closed, cadeia de custódia e política de exportação.
- Biometria bruta, vídeo bruto, imagem bruta, documento completo, segredo bruto, token, chave, certificado e credencial nunca devem trafegar em EvidenceReference.
- Visualização sensível deve registrar finalidade, ator, decisão, máscara aplicada e recurso.
- Exportação sensível deve registrar pacote, destino, filtros, máscara, hash, retenção, expiração e descarte.
- Dado pessoal em evidência deve respeitar consentimento, base legal ou política equivalente quando aplicável.
- Evidência não pode misturar tenants, contextos ou sujeitos sem política explícita.

## 14. Regras de owner_module e custody_owner_module

- `evidence_owner_module` é o módulo dono da evidência no domínio de origem.
- `custody_owner_module` é o módulo responsável por preservar a cadeia de custódia e a validade probatória.
- O owner governa o domínio da prova. A custódia governa a confiança da prova.
- O módulo consumidor nunca vira dono da evidência apenas por receber uma referência.
- Auditoria e Compliance pode ser custody_owner_module quando houver investigação, compliance, exportação formal, preservação legal ou cadeia formal.
- Segurança e LGPD pode definir política de tratamento, máscara, retenção e descarte, mas não assume storage bruto nem execução do módulo dono.
- Se owner e custody divergirem, ambos devem aparecer na referência e na trilha auditável.

Exemplos oficiais:

| Cenário | evidence_owner_module | custody_owner_module | Regra |
| --- | --- | --- | --- |
| Clip de câmera ligado a acesso negado | Câmeras / VMS | Câmeras / VMS ou Auditoria e Compliance | Controle de Acesso referencia o clip; não possui o vídeo. |
| Evento de acesso sem vídeo | Controle de Acesso | Controle de Acesso ou Auditoria e Compliance | Prova do acesso pertence ao módulo de acesso. |
| Anexo de ticket convertido em prova | Tickets | Tickets ou Auditoria e Compliance | FileAttachmentReference vira EvidenceReference por valor probatório. |
| Exportação financeira formal | Financeiro | Financeiro ou Auditoria e Compliance | Pacote exportado exige hash, retenção e trilha. |
| Sessão remota de suporte | Suporte e Operação | Suporte e Operação ou Auditoria e Compliance | Acesso temporário e escopado. |
| Solicitação LGPD | Segurança e LGPD | Segurança e LGPD ou Auditoria e Compliance | Prova de tratamento, resposta, descarte ou retenção. |

## 15. Regras de source_event_reference

- `source_event_reference` é obrigatório quando a evidência deriva de evento.
- `source_event_envelope_reference` é obrigatório quando o evento foi publicado em EventEnvelope v1.
- A criação, atualização, quarentena, visualização, exportação e reprocessamento de EvidenceReference devem poder ser correlacionados por `correlation_id` e `causation_id` do fluxo original.
- Se a evidência nasce de comando crítico, a evidência deve apontar para o evento de resultado, não apenas para o comando.
- Comando solicita execução; evento de fato ocorrido e auditoria sustentam prova.
- Evento de evidência não autoriza visualização. Visualização exige autorização própria.

## 16. Regras de cadeia de custódia

A cadeia de custódia preserva a confiança da prova desde sua origem até visualização, cópia, exportação, reprocessamento, descarte ou preservação legal.

Eventos mínimos de custódia:

- EvidenceReferenceCreated;
- EvidenceCaptured;
- EvidenceRegistered;
- EvidenceMetadataChanged;
- EvidenceViewed;
- EvidenceMaskedViewGenerated;
- EvidenceCopiedControlled;
- EvidenceExportRequested;
- EvidenceExportApproved;
- EvidenceExportDenied;
- EvidenceExportPackageCreated;
- EvidenceSharedExternally;
- EvidenceQuarantined;
- EvidenceReleasedFromQuarantine;
- EvidenceIntegrityValidated;
- EvidenceIntegrityFailed;
- EvidenceReprocessed;
- EvidenceRetentionHoldApplied;
- EvidenceExpired;
- EvidenceDiscarded;
- EvidenceExpunged;
- EvidenceAnonymized;
- EvidenceLegalHoldApplied;
- EvidenceLegalHoldReleased.

Regras:

- Nenhuma alteração de metadados críticos pode ocorrer sem audit_reference.
- Cópia controlada deve criar referência derivada ou ExportPackageEvidence, nunca duplicação invisível.
- Reprocessamento não apaga a referência original.
- Quebra de cadeia exige quarentena.
- Preservação legal bloqueia descarte, expurgo e anonimização incompatíveis.

## 17. Regras de integridade, hash e imutabilidade

- Evidência crítica exige `hash_reference` ou `integrity_reference` quando houver prova material, arquivo, pacote, clip, snapshot, documento, exportação ou evidência externa.
- Hash não deve revelar segredo, path, fornecedor, bucket ou estrutura interna.
- Hash de pacote exportado deve ser separado do hash da evidência original.
- Evidência derivada deve ter hash próprio e apontar para a original.
- Imutabilidade deve ser política e referência, não tecnologia específica nesta etapa.
- Alteração autorizada de metadados deve criar trilha, não reescrever história sem registro.
- Falha de validação de integridade gera `IntegrityFailed`, quarentena e auditoria.

## 18. Regras de storage_reference seguro

- `storage_reference` deve ser opaco, seguro e controlado pelo módulo dono ou serviço autorizado.
- Não pode expor URL pública permanente, path bruto, bucket sensível, storage interno, credencial ou segredo.
- Acesso temporário ao bruto, quando permitido, deve ser emitido fora do EvidenceReference, com AuthorizationDecision, finalidade, escopo, expiração, máscara quando aplicável e audit_reference.
- Storage_location_reference deve informar classe lógica ou zona conceitual sem revelar caminho sensível.
- ExportPackageEvidence deve gerar pacote controlado, com expiração, hash próprio, destino e política de descarte.
- Storage suspeito, externo não validado ou incompatível com política gera quarentena.

## 19. Regras de autorização

- O Core Platform emite AuthorizationDecision final para ações sensíveis ou críticas.
- EvidenceReference não autoriza visualização, download, exportação, compartilhamento, reprocessamento, descarte ou restauração.
- Receber evento com evidence_reference não concede permissão operacional nova.
- Visualização de metadados pode ter permissão distinta da visualização do bruto.
- Exportação exige permissão própria, finalidade, política e auditoria.
- Suporte remoto exige escopo temporário, duração, motivo, ator e auditoria.
- Ação sensível sem tenant, context, resource_reference, política, finalidade ou AuthorizationDecision deve negar, degradar com segurança ou quarentenar.

## 20. Regras de visualização

- Visualização é sempre uma ação separada da existência da evidência.
- Visualização sensível exige permission_code, tenant_id, context_id, related_resource_reference, purpose, masking_policy_reference, access_policy_reference, authorization_decision_reference e audit_reference.
- Perfis diferentes recebem máscaras diferentes.
- Cliente/Usuário Final só visualiza evidências próprias ou herdadas, nunca prova de terceiros fora do contexto.
- Parceiro só visualiza evidências das organizações sob seu escopo e conforme contrato.
- Master só visualiza evidência operacional por governança autorizada, auditoria, caso, exportação ou política, nunca por acesso bruto global implícito.
- Auditor pode visualizar por caso e escopo, não por poder operacional.
- Suporte pode visualizar por sessão temporária, escopada e auditada.
- Se a evidência estiver em quarentena, o padrão é bloquear bruto e exibir apenas metadados mínimos autorizados.

## 21. Regras de exportação

- Exportação de evidência é ação crítica.
- Exige finalidade explícita, permission_code, AuthorizationDecision, export_control_policy, audit_reference, retenção, máscara, destino, expiração e, quando aplicável, aprovação.
- O pacote exportado deve gerar ExportPackageEvidence com hash próprio.
- Exportação não deve entregar storage_reference interno.
- Exportação deve registrar filtros, período, escopo, recursos, atores, máscara aplicada, responsável, aprovador, destino, expiração e política de descarte.
- Exportação para terceiro exige política de terceiro, assinatura, escopo, retenção, LGPD e trilha de compartilhamento.
- Evidência em quarentena não pode ser exportada como bruto, salvo processo formal de auditoria/compliance com bloqueios e cadeia preservada.

## 22. Regras de compartilhamento externo

- Compartilhamento externo é exportação crítica, nunca simples encaminhamento de link.
- Deve usar ExportPackageEvidence ou contrato equivalente de exportação controlada.
- Webhook externo não deve carregar bruto sensível; deve carregar referência, status, metadados mínimos e assinatura.
- Segredo de webhook, assinatura, chave ou token deve ser SecretReference.
- Terceiro só recebe dados compatíveis com finalidade, contrato, consentimento/base legal/política, escopo e retenção.
- Compartilhamento externo deve ser revogável quando a política permitir e expirar quando for temporário.
- Dado de outro tenant/contexto, prova de terceiros, biometria bruta, segredo, rota local sensível e cadeia de custódia interna completa não devem ser enviados a terceiros.

## 23. Regras de retenção

- Retenção é obrigatória para toda EvidenceReference.
- Retenção deve ser definida por tipo de evidência, finalidade, sensibilidade, política legal/operacional e cadeia de custódia.
- Evidência temporária deve expirar.
- Evidência de incidente, compliance, auditoria, exportação, acesso físico crítico, pânico, suporte remoto e solicitação LGPD pode exigir retenção estendida.
- Preservação legal suspende descarte, expurgo ou anonimização incompatível.
- Retenção vencida deve gerar expiração, descarte, expurgo ou anonimização conforme política.
- Retenção não autoriza visualização. Ela só define preservação.

## 24. Regras de descarte, expurgo e anonimização

- Descarte remove acesso operacional conforme política.
- Expurgo elimina ou invalida evidência quando permitido por política e sem violar obrigação de retenção/custódia.
- Anonimização remove identificação pessoal quando finalidade, legalidade e cadeia permitirem.
- Evidência em cadeia de custódia não pode ser apagada fora de processo formal.
- ExportPackageEvidence deve ter descarte próprio, independente da evidência original.
- Evidência expurgada deve manter audit_reference mínimo quando política exigir comprovação de descarte, sem preservar bruto indevido.
- Solicitação do titular deve respeitar restrições de retenção legal, auditoria e segurança.

## 25. Regras de mascaramento

- Máscara é obrigatória quando houver imagem, vídeo, documento, visitante, unidade, placa, IP/rota, financeiro, suporte, BI, ticket, auditoria sensível ou dado pessoal.
- Máscara deve variar por perfil, finalidade, escopo e canal.
- Visualização padrão deve ser mascarada quando o bruto não for estritamente necessário.
- Exportação deve declarar máscara aplicada.
- BI deve consumir agregação e máscara, nunca bruto identificável como padrão.
- Suporte deve receber máscara máxima compatível com diagnóstico.
- Redução de máscara exige AuthorizationDecision, finalidade e auditoria.

## 26. Regras de quarentena

Enviar para quarentena quando houver:

- tenant/contexto inválido;
- origem externa não confiável;
- assinatura inválida;
- hash inválido;
- cadeia de custódia quebrada;
- política ausente;
- dado bruto proibido;
- storage_reference suspeita;
- evidência fora do escopo;
- evidência sem owner_module ou custody_owner_module;
- evidência sem finalidade;
- evidência crítica sem AuthorizationDecision;
- divergência entre source_event_reference e related_resource_reference;
- evidência externa sem normalização;
- tentativa de exportação sem export_control_policy.

Regras:

- Quarentena bloqueia acesso bruto por padrão.
- Metadados de quarentena só podem ser vistos por perfis autorizados.
- Liberação exige revisão, política aplicável, audit_reference e, quando sensível/crítica, AuthorizationDecision.
- Descarte de quarentena deve preservar trilha mínima do motivo.
- Quarentena não apaga cadeia de custódia.

## 27. Regras de reprocessamento seguro

- Reprocessamento é ação sensível ou crítica quando envolve prova, imagem, vídeo, documento, exportação, suporte, auditoria, segurança ou LGPD.
- Exige finalidade, política, AuthorizationDecision quando aplicável, audit_reference e preservação da evidência original.
- O resultado reprocessado deve criar referência derivada ou nova versão compatível.
- Reprocessamento não pode sobrescrever bruto original sem trilha formal.
- Reprocessamento para máscara, anonimização, thumbnail, clip, hash ou exportação deve declarar origem, método conceitual, responsável, data e política.
- Falha de reprocessamento gera erro mascarado, audit_reference e quarentena quando houver risco.

## 28. Regras de auditoria

Toda EvidenceReference deve possuir audit_reference. Auditoria deve cobrir:

- criação;
- captura;
- registro;
- associação a recurso;
- associação a evento;
- alteração de metadados;
- visualização;
- redução de máscara;
- exportação;
- compartilhamento externo;
- reprocessamento;
- validação de integridade;
- quarentena;
- liberação de quarentena;
- retenção hold;
- descarte;
- expurgo;
- anonimização;
- preservação legal.

Auditoria registra trilha. Ela não executa regra do módulo dono.

## 29. Regras de versionamento e compatibilidade

- EvidenceReference inicia em v1.
- Mudança incompatível exige nova versão.
- Mudança compatível pode adicionar campo opcional controlado sem alterar semântica.
- Não é compatível remover campo obrigatório, reduzir sensibilidade, reduzir auditoria, remover política, trocar owner_module, mudar custody_owner_module sem trilha ou expor bruto antes proibido.
- Consumidores devem tolerar campos adicionais.
- Contratos devem declarar depreciação, substituto e janela de compatibilidade.
- Evidência antiga deve continuar verificável por política de retenção e compatibilidade.

## 30. Regras de depreciação

- Depreciação de EvidenceReference deve declarar motivo, escopo afetado, substituto, prazo, risco, consumidores, política de leitura e regra de bloqueio.
- Evidência em cadeia de custódia não pode perder validade por depreciação sem migração auditável.
- Referência depreciada pode continuar somente leitura até expiração, retenção ou migração.
- Após retirada, ação sensível deve fail-closed.
- Depreciação não autoriza apagar prova fora da política.

## 31. Matriz de campos obrigatórios

| Campo | Obrigatoriedade | Proteção |
| --- | --- | --- |
| evidence_reference_id | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| evidence_reference_version | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| evidence_type | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| evidence_status | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| evidence_owner_module | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| custody_owner_module | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| source_module | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| producer_module | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| source_event_reference | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| source_event_envelope_reference | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| source_contract_id | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| source_contract_version | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| related_resource_reference | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| related_actor_reference | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| related_subject_reference | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| related_context_reference | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| related_case_reference | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| tenant_id | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| context_id | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| organization_reference | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| structure_reference | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| device_reference | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| gateway_reference | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| access_point_reference | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| camera_reference | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| alarm_zone_reference | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| ticket_reference | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| reservation_reference | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| visitor_reference | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| sensitivity_level | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| data_categories | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| purpose | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| legal_basis_or_policy_reference | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| security_policy_reference | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| lgpd_policy_reference | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| retention_policy_reference | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| masking_policy_reference | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| access_policy_reference | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| export_control_policy | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| authorization_decision_reference | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| storage_reference segura | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| storage_location_reference | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| hash_reference | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| integrity_reference | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| immutability_reference | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| chain_of_custody_reference | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| audit_reference | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| view_audit_required | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| export_audit_required | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| created_at | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| captured_at | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| registered_at | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| expires_at | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| retention_until | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| masking_required | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| anonymization_allowed | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| deletion_policy | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| quarantine_status | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| quarantine_reason | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| declassification_policy | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| compatibility_policy | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |
| deprecation_policy | Obrigatório quando aplicável pela condição oficial; campos estruturais são sempre obrigatórios. | Fail-closed, quarentena ou rejeição se ausente em evidência sensível/crítica. |

## 32. Matriz de campos proibidos

| Campo/dado proibido | Risco | Correção oficial |
| --- | --- | --- |
| senha | Exposição, acoplamento, bypass, vazamento multi-tenant ou quebra de custódia. | Segredo bruto. Deve nunca trafegar. |
| token bruto | Exposição, acoplamento, bypass, vazamento multi-tenant ou quebra de custódia. | Use SecretReference; nunca payload público. |
| chave privada | Exposição, acoplamento, bypass, vazamento multi-tenant ou quebra de custódia. | Material crítico; usar SecretReference e política de rotação. |
| certificado bruto | Exposição, acoplamento, bypass, vazamento multi-tenant ou quebra de custódia. | Usar certificate_reference/SecretReference. |
| segredo de webhook | Exposição, acoplamento, bypass, vazamento multi-tenant ou quebra de custódia. | Usar SecretReference e assinatura controlada. |
| segredo de provedor | Exposição, acoplamento, bypass, vazamento multi-tenant ou quebra de custódia. | Usar SecretReference; não expor credencial de integração. |
| credencial de gateway bruta | Exposição, acoplamento, bypass, vazamento multi-tenant ou quebra de custódia. | Gateway/Tunnel usa referência segura, nunca credencial no EvidenceReference. |
| credencial de dispositivo bruta | Exposição, acoplamento, bypass, vazamento multi-tenant ou quebra de custódia. | Dispositivo usa SecretReference quando necessário. |
| biometria bruta | Exposição, acoplamento, bypass, vazamento multi-tenant ou quebra de custódia. | Dado pessoal crítico; nunca em EvidenceReference. |
| template facial bruto | Exposição, acoplamento, bypass, vazamento multi-tenant ou quebra de custódia. | Referência e política LGPD; nunca template. |
| vídeo bruto | Exposição, acoplamento, bypass, vazamento multi-tenant ou quebra de custódia. | Usar VideoEvidence/ClipEvidence por referência. |
| stream bruto | Exposição, acoplamento, bypass, vazamento multi-tenant ou quebra de custódia. | Usar StreamReference autorizado ou EvidenceReference quando houver prova. |
| imagem bruta sem política | Exposição, acoplamento, bypass, vazamento multi-tenant ou quebra de custódia. | Usar SnapshotEvidence com máscara/política. |
| snapshot bruto sem política | Exposição, acoplamento, bypass, vazamento multi-tenant ou quebra de custódia. | Obrigatório mascaramento/política ou rejeição. |
| clip bruto sem política | Exposição, acoplamento, bypass, vazamento multi-tenant ou quebra de custódia. | Usar referência segura, cadeia e retenção. |
| documento completo sem finalidade | Exposição, acoplamento, bypass, vazamento multi-tenant ou quebra de custódia. | Usar DocumentEvidence/FileAttachmentReference com finalidade e política. |
| anexo probatório bruto sem política | Exposição, acoplamento, bypass, vazamento multi-tenant ou quebra de custódia. | Só EvidenceReference se tiver valor probatório; bruto não deve circular. |
| URL pública permanente | Exposição, acoplamento, bypass, vazamento multi-tenant ou quebra de custódia. | Risco de vazamento; usar referência opaca e acesso temporário autorizado. |
| URL assinada de longa duração no payload público | Exposição, acoplamento, bypass, vazamento multi-tenant ou quebra de custódia. | Acesso temporário deve ser emitido fora do evento e auditado. |
| caminho interno de storage sensível | Exposição, acoplamento, bypass, vazamento multi-tenant ou quebra de custódia. | Não expor path/bucket/estrutura técnica. |
| bucket/path bruto sensível | Exposição, acoplamento, bypass, vazamento multi-tenant ou quebra de custódia. | Substituir por storage_reference opaca. |
| payload completo de banco | Exposição, acoplamento, bypass, vazamento multi-tenant ou quebra de custódia. | Acoplamento e vazamento; usar contrato público. |
| classe interna serializada | Exposição, acoplamento, bypass, vazamento multi-tenant ou quebra de custódia. | Acoplamento a implementação. |
| objeto ORM serializado | Exposição, acoplamento, bypass, vazamento multi-tenant ou quebra de custódia. | Acoplamento a banco/framework. |
| dados de outro tenant | Exposição, acoplamento, bypass, vazamento multi-tenant ou quebra de custódia. | Violação multi-tenant; quarentena/rejeição. |
| dados fora do contexto autorizado | Exposição, acoplamento, bypass, vazamento multi-tenant ou quebra de custódia. | Violação de escopo; fail-closed. |
| logs brutos com segredos | Exposição, acoplamento, bypass, vazamento multi-tenant ou quebra de custódia. | Usar ErrorReference/log mascarado. |
| stack trace sensível | Exposição, acoplamento, bypass, vazamento multi-tenant ou quebra de custódia. | Usar erro mascarado e audit_reference. |
| IP interno bruto quando referência ou máscara bastar | Exposição, acoplamento, bypass, vazamento multi-tenant ou quebra de custódia. | Usar source_ip_masked/NetworkReference. |
| rota local sensível quando referência bastar | Exposição, acoplamento, bypass, vazamento multi-tenant ou quebra de custódia. | Usar GatewayRouteReference. |

## 33. Matriz de tipos oficiais de evidência

| Tipo | Owner padrão | Sensibilidade | Exportação | BI | Terceiros |
| --- | --- | --- | --- | --- | --- |
| VideoEvidence | Câmeras / VMS | Crítico | Somente com export_control_policy | Somente agregado/mascarado quando aplicável | Somente via pacote controlado quando permitido |
| SnapshotEvidence | Câmeras / VMS ou módulo produtor autorizado | Sensível/Crítico | Somente com export_control_policy | Somente agregado/mascarado quando aplicável | Somente via pacote controlado quando permitido |
| ClipEvidence | Câmeras / VMS | Crítico | Somente com export_control_policy | Somente agregado/mascarado quando aplicável | Somente via pacote controlado quando permitido |
| AccessEventEvidence | Controle de Acesso | Crítico | Somente com export_control_policy | Somente agregado/mascarado quando aplicável | Somente via pacote controlado quando permitido |
| AlarmEventEvidence | Alarmes | Crítico | Somente com export_control_policy | Somente agregado/mascarado quando aplicável | Somente via pacote controlado quando permitido |
| PanicEventEvidence | Alarmes | Crítico | Somente com export_control_policy | Somente agregado/mascarado quando aplicável | Somente via pacote controlado quando permitido |
| TicketAttachmentEvidence | Tickets | Sensível | Somente com export_control_policy | Somente agregado/mascarado quando aplicável | Somente via pacote controlado quando permitido |
| SupportSessionEvidence | Suporte e Operação | Sensível/Crítico | Somente com export_control_policy | Somente agregado/mascarado quando aplicável | Somente via pacote controlado quando permitido |
| RemoteSupportEvidence | Suporte e Operação | Crítico | Somente com export_control_policy | Somente agregado/mascarado quando aplicável | Somente via pacote controlado quando permitido |
| AuditTrailEvidence | Auditoria e Compliance ou Core Platform | Sensível | Somente com export_control_policy | Somente agregado/mascarado quando aplicável | Somente via pacote controlado quando permitido |
| ComplianceEvidence | Auditoria e Compliance | Crítico | Somente com export_control_policy | Somente agregado/mascarado quando aplicável | Somente via pacote controlado quando permitido |
| FinancialExportEvidence | Financeiro | Crítico | Somente com export_control_policy | Somente agregado/mascarado quando aplicável | Somente via pacote controlado quando permitido |
| BIExportEvidence | Relatórios / BI | Sensível/Crítico | Somente com export_control_policy | Somente agregado/mascarado quando aplicável | Somente via pacote controlado quando permitido |
| DocumentEvidence | Módulo dono do documento | Sensível/Crítico | Somente com export_control_policy | Somente agregado/mascarado quando aplicável | Somente via pacote controlado quando permitido |
| VisitorEvidence | Convites e Visitantes | Sensível/Crítico | Somente com export_control_policy | Somente agregado/mascarado quando aplicável | Somente via pacote controlado quando permitido |
| ReservationEvidence | Reservas | Sensível | Somente com export_control_policy | Somente agregado/mascarado quando aplicável | Somente via pacote controlado quando permitido |
| DeviceDiagnosticEvidence | Dispositivos | Sensível | Somente com export_control_policy | Somente agregado/mascarado quando aplicável | Somente via pacote controlado quando permitido |
| GatewayDiagnosticEvidence | Gateway Local / Mikrotik / Tunnel | Sensível/Crítico | Somente com export_control_policy | Somente agregado/mascarado quando aplicável | Somente via pacote controlado quando permitido |
| IntegrationEvidence | Marketplace de Integrações | Sensível/Crítico | Somente com export_control_policy | Somente agregado/mascarado quando aplicável | Somente via pacote controlado quando permitido |
| WebhookDeliveryEvidence | Marketplace de Integrações ou Notificações | Sensível/Crítico | Somente com export_control_policy | Somente agregado/mascarado quando aplicável | Somente via pacote controlado quando permitido |
| SecurityIncidentEvidence | Segurança e LGPD | Crítico | Somente com export_control_policy | Somente agregado/mascarado quando aplicável | Somente via pacote controlado quando permitido |
| PrivacyRequestEvidence | Segurança e LGPD | Sensível/Crítico | Somente com export_control_policy | Somente agregado/mascarado quando aplicável | Somente via pacote controlado quando permitido |
| ChainOfCustodyEvidence | Auditoria e Compliance | Crítico | Somente com export_control_policy | Somente agregado/mascarado quando aplicável | Somente via pacote controlado quando permitido |
| ExportPackageEvidence | Módulo exportador | Crítico | Somente com export_control_policy | Somente agregado/mascarado quando aplicável | Somente via pacote controlado quando permitido |
| ExternalEvidenceNormalized | Marketplace de Integrações | Sensível/Crítico | Somente com export_control_policy | Somente agregado/mascarado quando aplicável | Somente via pacote controlado quando permitido |

## 34. Matriz de EvidenceReference por módulo produtor

| Módulo produtor | EvidenceReferences mínimas | Papel | Limite anti-acoplamento |
| --- | --- | --- | --- |
| Core Platform | AuthorizationDecisionEvidenceReference; SecurityAuditEvidenceReference; UserAccountActionEvidenceReference | Produz e audita decisões estruturais, sessão, conta e logs de segurança. | Não guarda prova bruta de módulo comercial. |
| Master | MasterSensitiveExportEvidenceReference; GovernanceActionEvidenceReference | Referencia evidência de governança superior e exportações sensíveis. | Não vira dono de evidência operacional dos módulos. |
| Parceiros | PartnerDeploymentEvidenceReference; PartnerGatewayRequestEvidenceReference; PartnerDeviceRequestEvidenceReference | Referencia implantação e solicitações operacionais autorizadas. | Não assume DeviceRecord, GatewayRecord ou prova técnica primária. |
| Organizações | OrganizationStatusEvidenceReference; OrganizationProfileChangeEvidenceReference | Produz evidência cadastral/institucional do espaço. | Não cria evidência de acesso, vídeo, dispositivo, financeiro ou pessoa. |
| Pessoas e Clientes | PersonConsentEvidenceReference; PersonLinkEvidenceReference; ClientProfileEvidenceReference | Evidencia consentimento, vínculo e alterações de perfil pessoal. | Não transporta documento/biometria bruta. |
| Unidades, Blocos, Áreas e Ambientes | StructureAssignmentEvidenceReference; AreaAccessScopeEvidenceReference | Evidencia estrutura e associação física por referência. | Não executa acesso nem visualiza câmera. |
| Herança e Permissões | PolicyEvaluationEvidenceReference; PermissionInheritanceEvidenceReference | Evidencia avaliação de política e herança aplicada. | Não emite AuthorizationDecision final. |
| Gateway Local / Mikrotik / Tunnel | GatewayDiagnosticEvidenceReference; TunnelHealthEvidenceReference; GatewayRouteEvidenceReference | Produz diagnóstico técnico e conectividade. | Não executa regra operacional de câmera, acesso ou alarme. |
| Dispositivos | DeviceDiagnosticEvidenceReference; DeviceLifecycleEvidenceReference | Produz prova de cadastro, saúde, substituição, falha e ciclo técnico. | Não executa regra comercial do recurso. |
| Controle de Acesso | AccessAttemptEvidenceReference; AccessGrantedEvidenceReference; AccessDeniedEvidenceReference; AccessExecutionEvidenceReference; CredentialLifecycleEvidenceReference | Produz evidência de acesso físico e credenciais. | Não carrega biometria bruta; vídeo correlato fica em Câmeras/VMS. |
| Câmeras / VMS | CameraClipEvidenceReference; CameraSnapshotEvidenceReference; CameraPlaybackEvidenceReference; CameraLiveViewEvidenceReference; CameraEvidenceReference; VideoRetentionEvidenceReference | Produz evidências de vídeo, snapshot, clip, visualização e retenção. | Não fornece bruto sem autorização, política e auditoria. |
| Alarmes | AlarmTriggeredEvidenceReference; PanicTriggeredEvidenceReference; AlarmAcknowledgementEvidenceReference; AlarmResolutionEvidenceReference | Produz evidência de alarme, pânico, reconhecimento e resolução. | Não abre acesso físico nem cria vídeo. |
| Financeiro | InvoiceEvidenceReference; PaymentEvidenceReference; ReceiptEvidenceReference; FinancialRestrictionEvidenceReference | Produz prova financeira e restrição financeira por referência. | Não bloqueia recurso diretamente. |
| Convites e Visitantes | VisitorInviteEvidenceReference; VisitorCheckInEvidenceReference; VisitorCheckOutEvidenceReference; TemporaryQRCodeEvidenceReference | Produz evidência de visitante, convite, QR e presença. | Não transporta documento/QR bruto sem política. |
| Tickets | TicketAttachmentEvidenceReference; TicketCommentEvidenceReference; TicketResolutionEvidenceReference; TicketEscalationEvidenceReference | Converte anexo/comentário/resolução em evidência quando houver valor probatório. | Não vira storage compartilhado. |
| Mural Informativo | AnnouncementPublicationEvidenceReference; AnnouncementReadEvidenceReference | Evidencia publicação e leitura quando necessário. | Não cria evidência crítica salvo política específica. |
| Reservas | ReservationApprovalEvidenceReference; ReservationCheckInEvidenceReference; ReservationNoShowEvidenceReference; ReservationChargeEvidenceReference | Produz prova de uso, aprovação, no-show e cobrança. | Não executa financeiro nem acesso sem módulos donos. |
| Relatórios / BI | BIExportEvidenceReference; BIReportEvidenceReference; BIAnomalyEvidenceReference | Produz exportação e evidência analítica agregada/mascarada. | Não cria prova investigativa primária nem expõe bruto. |
| White-label | ThemePublicationEvidenceReference; DomainCertificateEvidenceReference | Evidencia publicação de tema, domínio e certificado por referência. | Não expõe certificado bruto. |
| Notificações | NotificationDeliveryEvidenceReference; NotificationConsentEvidenceReference | Produz prova de tentativa, entrega, falha e consentimento de notificação. | Não expõe conteúdo sensível bruto. |
| Automações | AutomationTriggerEvidenceReference; AutomationActionRequestEvidenceReference | Evidencia gatilho, condição e solicitação de ação. | Não prova execução do módulo dono. |
| Marketplace de Integrações | ConnectorInstallationEvidenceReference; WebhookDeliveryEvidenceReference; ExternalEventEvidenceReference | Produz prova de conector, webhook e evento externo normalizado. | Não confia em externo sem normalização. |
| Auditoria e Compliance | AuditTrailEvidenceReference; ComplianceCaseEvidenceReference; ChainOfCustodyEvidenceReference; AuditExportEvidenceReference | Produz evidência auditável, cadeia de custódia, caso e exportação de auditoria. | Não executa regra operacional do módulo dono. |
| Segurança e LGPD | SecurityPolicyEvidenceReference; PrivacyPolicyEvidenceReference; ConsentEvidenceReference; DataSubjectRequestEvidenceReference; RetentionPolicyEvidenceReference; MaskingPolicyEvidenceReference | Produz prova de política, consentimento, solicitação do titular, retenção e máscara. | Não armazena bruto de módulo sem contrato. |
| Suporte e Operação | SupportCaseEvidenceReference; RemoteSupportSessionEvidenceReference; ServiceIncidentEvidenceReference; PostIncidentReviewEvidenceReference | Produz prova de suporte, sessão remota, incidente e pós-incidente. | Não recebe acesso irrestrito ao storage bruto. |

## 35. Matriz de EvidenceReference por módulo consumidor

| Módulo consumidor | Como pode consumir | Limite obrigatório |
| --- | --- | --- |
| Core Platform | Consome referências para autorização, contexto e auditoria base. | Não visualiza bruto; não emite prova operacional de módulo comercial. |
| Master | Consome evidências apenas por governança, auditoria superior e exportação autorizada. | Escopo global não significa acesso bruto global. |
| Parceiros | Consome evidências das organizações abaixo dele conforme contrato, suporte e implantação. | Sem dados de outro parceiro/tenant/contexto. |
| Organizações | Consome resumos de evidência operacional autorizados. | Não assume domínio de evidência dos módulos. |
| Pessoas e Clientes | Consome evidências próprias ou herdadas, com máscara e escopo. | Cliente não vê prova de terceiros fora do vínculo. |
| Unidades, Blocos, Áreas e Ambientes | Consome referências para associação estrutural e herança. | Não acessa bruto. |
| Herança e Permissões | Consome referências para avaliar política, não para executar domínio. | Não usa evidência como autorização final. |
| Gateway Local / Mikrotik / Tunnel | Consome evidência técnica para diagnóstico e correlação. | Não acessa vídeo/acesso bruto sem módulo dono. |
| Dispositivos | Consome evidência de diagnóstico e ciclo técnico. | Não usa evidência para assumir regra comercial. |
| Controle de Acesso | Consome evidência correlata de câmera, alarme, visitante e reserva quando autorizada. | Não visualiza vídeo bruto sem Câmeras/VMS e Core. |
| Câmeras / VMS | Consome eventos de acesso, alarme, visitante e ticket para gerar ou relacionar evidência. | Não decide acesso físico. |
| Alarmes | Consome evidência de câmera, gateway e dispositivo para correlação de incidente. | Não altera acesso sem módulo dono. |
| Financeiro | Consome evidências de reserva, contrato e cobrança por referência. | Não consome vídeo/imagem sem finalidade específica. |
| Convites e Visitantes | Consome acesso, câmera e estrutura por referência para contexto do visitante. | Não expõe visitante a BI ou terceiros sem política. |
| Tickets | Consome evidências anexadas por módulos donos conforme escopo do chamado. | Não vira repositório geral de provas. |
| Mural Informativo | Consome evidência apenas para comunicação autorizada ou comprovação de publicação. | Não expõe prova sensível no mural. |
| Reservas | Consome evidência de uso, acesso, cobrança e presença conforme escopo. | Não usa evidência para cobrar sem Financeiro. |
| Relatórios / BI | Consome evidências apenas agregadas, mascaradas ou por referência autorizada. | Não ingere bruto identificável como padrão. |
| White-label | Consome evidências de tema/domínio/certificado por referência. | Não consome evidências operacionais. |
| Notificações | Consome EvidenceReference apenas como referência de evento notificado, nunca como conteúdo bruto. | Não envia prova sensível em mensagem. |
| Automações | Consome evidências como condição por referência e solicita ação ao módulo dono. | Não executa ação sensível apenas por evidência. |
| Marketplace de Integrações | Consome evidência externa normalizada e entrega webhook autorizada. | Não envia bruto a terceiros sem export_control_policy. |
| Auditoria e Compliance | Consome todas as evidências autorizadas por escopo, caso e cadeia de custódia. | Não substitui logs primários dos módulos donos. |
| Segurança e LGPD | Consome evidências para política, incidentes, privacidade, retenção e mascaramento. | Não abre acesso bruto sem decisão e finalidade. |
| Suporte e Operação | Consome evidências necessárias para suporte, diagnóstico e incidente. | Acesso deve ser temporário, escopado e auditado. |
## 36. Matriz de evidências críticas

| Evidência | Regra obrigatória | Motivo |
| --- | --- | --- |
| VideoEvidence | AuthorizationDecision, cadeia, audit_reference, retenção específica, export_control_policy quando exportável e fail-closed. | Pode expor segurança física, dado pessoal crítico, prova formal, exportação, segredo indireto ou cadeia de custódia. |
| ClipEvidence | AuthorizationDecision, cadeia, audit_reference, retenção específica, export_control_policy quando exportável e fail-closed. | Pode expor segurança física, dado pessoal crítico, prova formal, exportação, segredo indireto ou cadeia de custódia. |
| AccessEventEvidence | AuthorizationDecision, cadeia, audit_reference, retenção específica, export_control_policy quando exportável e fail-closed. | Pode expor segurança física, dado pessoal crítico, prova formal, exportação, segredo indireto ou cadeia de custódia. |
| AlarmEventEvidence | AuthorizationDecision, cadeia, audit_reference, retenção específica, export_control_policy quando exportável e fail-closed. | Pode expor segurança física, dado pessoal crítico, prova formal, exportação, segredo indireto ou cadeia de custódia. |
| PanicEventEvidence | AuthorizationDecision, cadeia, audit_reference, retenção específica, export_control_policy quando exportável e fail-closed. | Pode expor segurança física, dado pessoal crítico, prova formal, exportação, segredo indireto ou cadeia de custódia. |
| RemoteSupportEvidence | AuthorizationDecision, cadeia, audit_reference, retenção específica, export_control_policy quando exportável e fail-closed. | Pode expor segurança física, dado pessoal crítico, prova formal, exportação, segredo indireto ou cadeia de custódia. |
| ComplianceEvidence | AuthorizationDecision, cadeia, audit_reference, retenção específica, export_control_policy quando exportável e fail-closed. | Pode expor segurança física, dado pessoal crítico, prova formal, exportação, segredo indireto ou cadeia de custódia. |
| FinancialExportEvidence | AuthorizationDecision, cadeia, audit_reference, retenção específica, export_control_policy quando exportável e fail-closed. | Pode expor segurança física, dado pessoal crítico, prova formal, exportação, segredo indireto ou cadeia de custódia. |
| VisitorEvidence | AuthorizationDecision, cadeia, audit_reference, retenção específica, export_control_policy quando exportável e fail-closed. | Pode expor segurança física, dado pessoal crítico, prova formal, exportação, segredo indireto ou cadeia de custódia. |
| SecurityIncidentEvidence | AuthorizationDecision, cadeia, audit_reference, retenção específica, export_control_policy quando exportável e fail-closed. | Pode expor segurança física, dado pessoal crítico, prova formal, exportação, segredo indireto ou cadeia de custódia. |
| PrivacyRequestEvidence | AuthorizationDecision, cadeia, audit_reference, retenção específica, export_control_policy quando exportável e fail-closed. | Pode expor segurança física, dado pessoal crítico, prova formal, exportação, segredo indireto ou cadeia de custódia. |
| ChainOfCustodyEvidence | AuthorizationDecision, cadeia, audit_reference, retenção específica, export_control_policy quando exportável e fail-closed. | Pode expor segurança física, dado pessoal crítico, prova formal, exportação, segredo indireto ou cadeia de custódia. |
| ExportPackageEvidence | AuthorizationDecision, cadeia, audit_reference, retenção específica, export_control_policy quando exportável e fail-closed. | Pode expor segurança física, dado pessoal crítico, prova formal, exportação, segredo indireto ou cadeia de custódia. |
| ExternalEvidenceNormalized | AuthorizationDecision, cadeia, audit_reference, retenção específica, export_control_policy quando exportável e fail-closed. | Pode expor segurança física, dado pessoal crítico, prova formal, exportação, segredo indireto ou cadeia de custódia. |

## 37. Matriz de evidências sensíveis

| Evidência | Regra obrigatória | Motivo |
| --- | --- | --- |
| SnapshotEvidence | Finalidade, política Segurança/LGPD, máscara, retenção, auditoria e escopo contextual obrigatório. | Pode conter dado pessoal, imagem, visitante, financeiro, suporte, documento, diagnóstico, IP/rota, unidade ou histórico contextual. |
| TicketAttachmentEvidence | Finalidade, política Segurança/LGPD, máscara, retenção, auditoria e escopo contextual obrigatório. | Pode conter dado pessoal, imagem, visitante, financeiro, suporte, documento, diagnóstico, IP/rota, unidade ou histórico contextual. |
| SupportSessionEvidence | Finalidade, política Segurança/LGPD, máscara, retenção, auditoria e escopo contextual obrigatório. | Pode conter dado pessoal, imagem, visitante, financeiro, suporte, documento, diagnóstico, IP/rota, unidade ou histórico contextual. |
| AuditTrailEvidence | Finalidade, política Segurança/LGPD, máscara, retenção, auditoria e escopo contextual obrigatório. | Pode conter dado pessoal, imagem, visitante, financeiro, suporte, documento, diagnóstico, IP/rota, unidade ou histórico contextual. |
| BIExportEvidence | Finalidade, política Segurança/LGPD, máscara, retenção, auditoria e escopo contextual obrigatório. | Pode conter dado pessoal, imagem, visitante, financeiro, suporte, documento, diagnóstico, IP/rota, unidade ou histórico contextual. |
| DocumentEvidence | Finalidade, política Segurança/LGPD, máscara, retenção, auditoria e escopo contextual obrigatório. | Pode conter dado pessoal, imagem, visitante, financeiro, suporte, documento, diagnóstico, IP/rota, unidade ou histórico contextual. |
| ReservationEvidence | Finalidade, política Segurança/LGPD, máscara, retenção, auditoria e escopo contextual obrigatório. | Pode conter dado pessoal, imagem, visitante, financeiro, suporte, documento, diagnóstico, IP/rota, unidade ou histórico contextual. |
| DeviceDiagnosticEvidence | Finalidade, política Segurança/LGPD, máscara, retenção, auditoria e escopo contextual obrigatório. | Pode conter dado pessoal, imagem, visitante, financeiro, suporte, documento, diagnóstico, IP/rota, unidade ou histórico contextual. |
| GatewayDiagnosticEvidence | Finalidade, política Segurança/LGPD, máscara, retenção, auditoria e escopo contextual obrigatório. | Pode conter dado pessoal, imagem, visitante, financeiro, suporte, documento, diagnóstico, IP/rota, unidade ou histórico contextual. |
| IntegrationEvidence | Finalidade, política Segurança/LGPD, máscara, retenção, auditoria e escopo contextual obrigatório. | Pode conter dado pessoal, imagem, visitante, financeiro, suporte, documento, diagnóstico, IP/rota, unidade ou histórico contextual. |
| WebhookDeliveryEvidence | Finalidade, política Segurança/LGPD, máscara, retenção, auditoria e escopo contextual obrigatório. | Pode conter dado pessoal, imagem, visitante, financeiro, suporte, documento, diagnóstico, IP/rota, unidade ou histórico contextual. |

## 38. Matriz de evidências que exigem AuthorizationDecision

| Evidência | Regra obrigatória | Motivo |
| --- | --- | --- |
| VideoEvidence | AuthorizationDecision do Core obrigatória para ação sensível/crítica. | Visualização, exportação, reprocessamento, compartilhamento, acesso bruto temporário ou uso em ação sensível depende de AuthorizationDecision do Core. |
| ClipEvidence | AuthorizationDecision do Core obrigatória para ação sensível/crítica. | Visualização, exportação, reprocessamento, compartilhamento, acesso bruto temporário ou uso em ação sensível depende de AuthorizationDecision do Core. |
| AccessEventEvidence | AuthorizationDecision do Core obrigatória para ação sensível/crítica. | Visualização, exportação, reprocessamento, compartilhamento, acesso bruto temporário ou uso em ação sensível depende de AuthorizationDecision do Core. |
| AlarmEventEvidence | AuthorizationDecision do Core obrigatória para ação sensível/crítica. | Visualização, exportação, reprocessamento, compartilhamento, acesso bruto temporário ou uso em ação sensível depende de AuthorizationDecision do Core. |
| PanicEventEvidence | AuthorizationDecision do Core obrigatória para ação sensível/crítica. | Visualização, exportação, reprocessamento, compartilhamento, acesso bruto temporário ou uso em ação sensível depende de AuthorizationDecision do Core. |
| RemoteSupportEvidence | AuthorizationDecision do Core obrigatória para ação sensível/crítica. | Visualização, exportação, reprocessamento, compartilhamento, acesso bruto temporário ou uso em ação sensível depende de AuthorizationDecision do Core. |
| ComplianceEvidence | AuthorizationDecision do Core obrigatória para ação sensível/crítica. | Visualização, exportação, reprocessamento, compartilhamento, acesso bruto temporário ou uso em ação sensível depende de AuthorizationDecision do Core. |
| FinancialExportEvidence | AuthorizationDecision do Core obrigatória para ação sensível/crítica. | Visualização, exportação, reprocessamento, compartilhamento, acesso bruto temporário ou uso em ação sensível depende de AuthorizationDecision do Core. |
| VisitorEvidence | AuthorizationDecision do Core obrigatória para ação sensível/crítica. | Visualização, exportação, reprocessamento, compartilhamento, acesso bruto temporário ou uso em ação sensível depende de AuthorizationDecision do Core. |
| SecurityIncidentEvidence | AuthorizationDecision do Core obrigatória para ação sensível/crítica. | Visualização, exportação, reprocessamento, compartilhamento, acesso bruto temporário ou uso em ação sensível depende de AuthorizationDecision do Core. |
| PrivacyRequestEvidence | AuthorizationDecision do Core obrigatória para ação sensível/crítica. | Visualização, exportação, reprocessamento, compartilhamento, acesso bruto temporário ou uso em ação sensível depende de AuthorizationDecision do Core. |
| ChainOfCustodyEvidence | AuthorizationDecision do Core obrigatória para ação sensível/crítica. | Visualização, exportação, reprocessamento, compartilhamento, acesso bruto temporário ou uso em ação sensível depende de AuthorizationDecision do Core. |
| ExportPackageEvidence | AuthorizationDecision do Core obrigatória para ação sensível/crítica. | Visualização, exportação, reprocessamento, compartilhamento, acesso bruto temporário ou uso em ação sensível depende de AuthorizationDecision do Core. |
| ExternalEvidenceNormalized | AuthorizationDecision do Core obrigatória para ação sensível/crítica. | Visualização, exportação, reprocessamento, compartilhamento, acesso bruto temporário ou uso em ação sensível depende de AuthorizationDecision do Core. |
| SnapshotEvidence | AuthorizationDecision do Core obrigatória para ação sensível/crítica. | Visualização, exportação, reprocessamento, compartilhamento, acesso bruto temporário ou uso em ação sensível depende de AuthorizationDecision do Core. |
| TicketAttachmentEvidence | AuthorizationDecision do Core obrigatória para ação sensível/crítica. | Visualização, exportação, reprocessamento, compartilhamento, acesso bruto temporário ou uso em ação sensível depende de AuthorizationDecision do Core. |
| SupportSessionEvidence | AuthorizationDecision do Core obrigatória para ação sensível/crítica. | Visualização, exportação, reprocessamento, compartilhamento, acesso bruto temporário ou uso em ação sensível depende de AuthorizationDecision do Core. |
| AuditTrailEvidence | AuthorizationDecision do Core obrigatória para ação sensível/crítica. | Visualização, exportação, reprocessamento, compartilhamento, acesso bruto temporário ou uso em ação sensível depende de AuthorizationDecision do Core. |
| BIExportEvidence | AuthorizationDecision do Core obrigatória para ação sensível/crítica. | Visualização, exportação, reprocessamento, compartilhamento, acesso bruto temporário ou uso em ação sensível depende de AuthorizationDecision do Core. |
| DocumentEvidence | AuthorizationDecision do Core obrigatória para ação sensível/crítica. | Visualização, exportação, reprocessamento, compartilhamento, acesso bruto temporário ou uso em ação sensível depende de AuthorizationDecision do Core. |
| ReservationEvidence | AuthorizationDecision do Core obrigatória para ação sensível/crítica. | Visualização, exportação, reprocessamento, compartilhamento, acesso bruto temporário ou uso em ação sensível depende de AuthorizationDecision do Core. |
| DeviceDiagnosticEvidence | AuthorizationDecision do Core obrigatória para ação sensível/crítica. | Visualização, exportação, reprocessamento, compartilhamento, acesso bruto temporário ou uso em ação sensível depende de AuthorizationDecision do Core. |
| GatewayDiagnosticEvidence | AuthorizationDecision do Core obrigatória para ação sensível/crítica. | Visualização, exportação, reprocessamento, compartilhamento, acesso bruto temporário ou uso em ação sensível depende de AuthorizationDecision do Core. |
| IntegrationEvidence | AuthorizationDecision do Core obrigatória para ação sensível/crítica. | Visualização, exportação, reprocessamento, compartilhamento, acesso bruto temporário ou uso em ação sensível depende de AuthorizationDecision do Core. |
| WebhookDeliveryEvidence | AuthorizationDecision do Core obrigatória para ação sensível/crítica. | Visualização, exportação, reprocessamento, compartilhamento, acesso bruto temporário ou uso em ação sensível depende de AuthorizationDecision do Core. |


## 39. Matriz de evidências que exigem EvidenceReference em EventEnvelope v1

| Evento / situação | EvidenceReference obrigatória? | Regra oficial | Motivo |
| --- | --- | --- | --- |
| Evento de criação de evidência | Sim | O EventEnvelope v1 deve carregar `evidence_reference` ou `evidence_reference_id` e nunca prova bruta quando referência bastar. | Permite rastreabilidade sem expor vídeo, imagem, documento ou anexo probatório. |
| Evento de atualização de evidência | Sim | Alteração de status, metadados, retenção, máscara, integridade ou custódia deve apontar para EvidenceReference. | Preserva causalidade, compatibilidade e auditoria. |
| Evento derivado de câmera, snapshot ou clip | Sim | `source_event_reference`, `camera_reference`, `related_resource_reference` e política aplicável devem ser preservados. | Câmeras / VMS continua dono do vídeo e o evento não transporta stream bruto. |
| Evento de acesso físico com valor probatório | Sim | A evidência deve apontar para AccessEventEvidence, AccessPoint/ResourceReference e AuthorizationDecision quando sensível ou crítica. | Controle de Acesso registra o fato; evidência referencia a prova. |
| Evento de alarme ou pânico | Sim | Alarme, pânico e incidente crítico devem apontar para AlarmEventEvidence ou PanicEventEvidence com cadeia de custódia. | Evita perda de prova e preserva resposta auditável. |
| Evento de ticket com anexo probatório | Sim, quando houver valor probatório | FileAttachmentReference operacional vira EvidenceReference apenas quando houver política de evidência, valor probatório ou cadeia de custódia. | Mantém separação entre anexo comum e prova. |
| Evento de suporte remoto | Sim, quando houver prova ou sessão sensível | Deve apontar para SupportSessionEvidence ou RemoteSupportEvidence, com finalidade, expiração e auditoria. | Suporte não vira acesso irrestrito nem storage de prova bruta. |
| Evento de auditoria ou compliance | Sim | AuditTrailEvidence, ComplianceEvidence e ChainOfCustodyEvidence devem ser referenciadas, não copiadas no payload. | Auditoria sustenta validade sem assumir domínio operacional. |
| Evento de exportação sensível | Sim | ExportPackageEvidence deve declarar política de exportação, hash/integridade, audit_reference e retenção. | Exportação é saída controlada e exige prova de integridade. |
| Evento de BI com evidência | Sim, apenas por referência ou agregado | BI não deve receber evidência identificável bruta. Deve usar referência, máscara ou agregação. | BI não vira banco compartilhado nem repositório de evidência. |
| Evento de integração externa normalizada | Sim, quando externo tiver valor probatório | ExternalEvidenceNormalized deve preservar origem externa, normalização, assinatura quando aplicável e quarentena se suspeita. | Origem externa não nasce confiável por padrão. |
| Evento de webhook externo | Sim, quando entregar informação probatória | Webhook deve transportar apenas referência autorizada e assinada, sem prova bruta ou segredo. | Protege terceiro, tenant, contexto e cadeia de custódia. |
| Evento de quarentena de evidência | Sim | Deve apontar para EvidenceReference, motivo mascarado, política, audit_reference e estado de quarentena. | Evidência suspeita não deve circular como válida. |
| Evento de reprocessamento de evidência | Sim | Deve preservar EvidenceReference original, novo resultado por referência, audit_reference e chain_of_custody_reference. | Reprocessamento não pode apagar ou sobrescrever a prova original. |
| Evento sem valor probatório | Não obrigatório | Pode usar ResourceReference, AuditTrailReference ou FileAttachmentReference conforme o caso. | Evita transformar todo arquivo ou evento operacional em evidência crítica. |

Regra de ouro:

EventEnvelope v1 comunica o fato. EvidenceReference preserva a prova. O payload não vira repositório de evidência bruta.

## 40. Matriz de evidências que exigem SecretReference

| Evidência | Regra obrigatória | Motivo |
| --- | --- | --- |
| WebhookDeliveryEvidence | SecretReference obrigatório quando houver segredo, assinatura, credencial, certificado ou pacote protegido. | Exige SecretReference quando envolver assinatura, segredo de pacote, webhook, certificado, storage controlado, credencial de gateway/dispositivo ou provedor externo. |
| IntegrationEvidence | SecretReference obrigatório quando houver segredo, assinatura, credencial, certificado ou pacote protegido. | Exige SecretReference quando envolver assinatura, segredo de pacote, webhook, certificado, storage controlado, credencial de gateway/dispositivo ou provedor externo. |
| GatewayDiagnosticEvidence | SecretReference obrigatório quando houver segredo, assinatura, credencial, certificado ou pacote protegido. | Exige SecretReference quando envolver assinatura, segredo de pacote, webhook, certificado, storage controlado, credencial de gateway/dispositivo ou provedor externo. |
| DeviceDiagnosticEvidence | SecretReference obrigatório quando houver segredo, assinatura, credencial, certificado ou pacote protegido. | Exige SecretReference quando envolver assinatura, segredo de pacote, webhook, certificado, storage controlado, credencial de gateway/dispositivo ou provedor externo. |
| ExportPackageEvidence | SecretReference obrigatório quando houver segredo, assinatura, credencial, certificado ou pacote protegido. | Exige SecretReference quando envolver assinatura, segredo de pacote, webhook, certificado, storage controlado, credencial de gateway/dispositivo ou provedor externo. |
| ExternalEvidenceNormalized | SecretReference obrigatório quando houver segredo, assinatura, credencial, certificado ou pacote protegido. | Exige SecretReference quando envolver assinatura, segredo de pacote, webhook, certificado, storage controlado, credencial de gateway/dispositivo ou provedor externo. |
| RemoteSupportEvidence | SecretReference obrigatório quando houver segredo, assinatura, credencial, certificado ou pacote protegido. | Exige SecretReference quando envolver assinatura, segredo de pacote, webhook, certificado, storage controlado, credencial de gateway/dispositivo ou provedor externo. |
| SecurityIncidentEvidence | SecretReference obrigatório quando houver segredo, assinatura, credencial, certificado ou pacote protegido. | Exige SecretReference quando envolver assinatura, segredo de pacote, webhook, certificado, storage controlado, credencial de gateway/dispositivo ou provedor externo. |

## 41. Matriz de evidências que exigem ResourceReference

| Evidência | Regra obrigatória | Motivo |
| --- | --- | --- |
| VideoEvidence | ResourceReference obrigatório. | Sempre aponta para o recurso principal por ResourceReference, preservando owner_module e no_domain_transfer. |
| SnapshotEvidence | ResourceReference obrigatório. | Sempre aponta para o recurso principal por ResourceReference, preservando owner_module e no_domain_transfer. |
| ClipEvidence | ResourceReference obrigatório. | Sempre aponta para o recurso principal por ResourceReference, preservando owner_module e no_domain_transfer. |
| AccessEventEvidence | ResourceReference obrigatório. | Sempre aponta para o recurso principal por ResourceReference, preservando owner_module e no_domain_transfer. |
| AlarmEventEvidence | ResourceReference obrigatório. | Sempre aponta para o recurso principal por ResourceReference, preservando owner_module e no_domain_transfer. |
| PanicEventEvidence | ResourceReference obrigatório. | Sempre aponta para o recurso principal por ResourceReference, preservando owner_module e no_domain_transfer. |
| TicketAttachmentEvidence | ResourceReference obrigatório. | Sempre aponta para o recurso principal por ResourceReference, preservando owner_module e no_domain_transfer. |
| SupportSessionEvidence | ResourceReference obrigatório. | Sempre aponta para o recurso principal por ResourceReference, preservando owner_module e no_domain_transfer. |
| RemoteSupportEvidence | ResourceReference obrigatório. | Sempre aponta para o recurso principal por ResourceReference, preservando owner_module e no_domain_transfer. |
| AuditTrailEvidence | ResourceReference obrigatório. | Sempre aponta para o recurso principal por ResourceReference, preservando owner_module e no_domain_transfer. |
| ComplianceEvidence | ResourceReference obrigatório. | Sempre aponta para o recurso principal por ResourceReference, preservando owner_module e no_domain_transfer. |
| FinancialExportEvidence | ResourceReference obrigatório. | Sempre aponta para o recurso principal por ResourceReference, preservando owner_module e no_domain_transfer. |
| BIExportEvidence | ResourceReference obrigatório. | Sempre aponta para o recurso principal por ResourceReference, preservando owner_module e no_domain_transfer. |
| DocumentEvidence | ResourceReference obrigatório. | Sempre aponta para o recurso principal por ResourceReference, preservando owner_module e no_domain_transfer. |
| VisitorEvidence | ResourceReference obrigatório. | Sempre aponta para o recurso principal por ResourceReference, preservando owner_module e no_domain_transfer. |
| ReservationEvidence | ResourceReference obrigatório. | Sempre aponta para o recurso principal por ResourceReference, preservando owner_module e no_domain_transfer. |
| DeviceDiagnosticEvidence | ResourceReference obrigatório. | Sempre aponta para o recurso principal por ResourceReference, preservando owner_module e no_domain_transfer. |
| GatewayDiagnosticEvidence | ResourceReference obrigatório. | Sempre aponta para o recurso principal por ResourceReference, preservando owner_module e no_domain_transfer. |
| IntegrationEvidence | ResourceReference obrigatório. | Sempre aponta para o recurso principal por ResourceReference, preservando owner_module e no_domain_transfer. |
| WebhookDeliveryEvidence | ResourceReference obrigatório. | Sempre aponta para o recurso principal por ResourceReference, preservando owner_module e no_domain_transfer. |
| SecurityIncidentEvidence | ResourceReference obrigatório. | Sempre aponta para o recurso principal por ResourceReference, preservando owner_module e no_domain_transfer. |
| PrivacyRequestEvidence | ResourceReference obrigatório. | Sempre aponta para o recurso principal por ResourceReference, preservando owner_module e no_domain_transfer. |
| ChainOfCustodyEvidence | ResourceReference obrigatório. | Sempre aponta para o recurso principal por ResourceReference, preservando owner_module e no_domain_transfer. |
| ExportPackageEvidence | ResourceReference obrigatório. | Sempre aponta para o recurso principal por ResourceReference, preservando owner_module e no_domain_transfer. |
| ExternalEvidenceNormalized | ResourceReference obrigatório. | Sempre aponta para o recurso principal por ResourceReference, preservando owner_module e no_domain_transfer. |

## 42. Matriz de evidências que exigem cadeia de custódia

| Evidência | Regra obrigatória | Motivo |
| --- | --- | --- |
| VideoEvidence | chain_of_custody_reference obrigatório. | Exige chain_of_custody_reference quando servir como prova formal, incidente, exportação, auditoria, compliance ou ação crítica. |
| ClipEvidence | chain_of_custody_reference obrigatório. | Exige chain_of_custody_reference quando servir como prova formal, incidente, exportação, auditoria, compliance ou ação crítica. |
| AccessEventEvidence | chain_of_custody_reference obrigatório. | Exige chain_of_custody_reference quando servir como prova formal, incidente, exportação, auditoria, compliance ou ação crítica. |
| AlarmEventEvidence | chain_of_custody_reference obrigatório. | Exige chain_of_custody_reference quando servir como prova formal, incidente, exportação, auditoria, compliance ou ação crítica. |
| PanicEventEvidence | chain_of_custody_reference obrigatório. | Exige chain_of_custody_reference quando servir como prova formal, incidente, exportação, auditoria, compliance ou ação crítica. |
| RemoteSupportEvidence | chain_of_custody_reference obrigatório. | Exige chain_of_custody_reference quando servir como prova formal, incidente, exportação, auditoria, compliance ou ação crítica. |
| ComplianceEvidence | chain_of_custody_reference obrigatório. | Exige chain_of_custody_reference quando servir como prova formal, incidente, exportação, auditoria, compliance ou ação crítica. |
| FinancialExportEvidence | chain_of_custody_reference obrigatório. | Exige chain_of_custody_reference quando servir como prova formal, incidente, exportação, auditoria, compliance ou ação crítica. |
| VisitorEvidence | chain_of_custody_reference obrigatório. | Exige chain_of_custody_reference quando servir como prova formal, incidente, exportação, auditoria, compliance ou ação crítica. |
| SecurityIncidentEvidence | chain_of_custody_reference obrigatório. | Exige chain_of_custody_reference quando servir como prova formal, incidente, exportação, auditoria, compliance ou ação crítica. |
| PrivacyRequestEvidence | chain_of_custody_reference obrigatório. | Exige chain_of_custody_reference quando servir como prova formal, incidente, exportação, auditoria, compliance ou ação crítica. |
| ChainOfCustodyEvidence | chain_of_custody_reference obrigatório. | Exige chain_of_custody_reference quando servir como prova formal, incidente, exportação, auditoria, compliance ou ação crítica. |
| ExportPackageEvidence | chain_of_custody_reference obrigatório. | Exige chain_of_custody_reference quando servir como prova formal, incidente, exportação, auditoria, compliance ou ação crítica. |
| ExternalEvidenceNormalized | chain_of_custody_reference obrigatório. | Exige chain_of_custody_reference quando servir como prova formal, incidente, exportação, auditoria, compliance ou ação crítica. |
| AuditTrailEvidence | chain_of_custody_reference obrigatório. | Exige cadeia quando audit trail for usado como prova formal. |
| TicketAttachmentEvidence | chain_of_custody_reference obrigatório. | Exige cadeia quando o anexo virar prova. |
| DocumentEvidence | chain_of_custody_reference obrigatório. | Exige cadeia quando documento for probatório. |

## 43. Matriz de evidências que exigem hash/integridade

| Evidência | Regra obrigatória | Motivo |
| --- | --- | --- |
| VideoEvidence | hash_reference ou integrity_reference obrigatório. | Hash/integridade obrigatório para detectar alteração, reprocessamento indevido ou divergência entre origem, referência e exportação. |
| SnapshotEvidence | hash_reference ou integrity_reference obrigatório. | Hash/integridade obrigatório para detectar alteração, reprocessamento indevido ou divergência entre origem, referência e exportação. |
| ClipEvidence | hash_reference ou integrity_reference obrigatório. | Hash/integridade obrigatório para detectar alteração, reprocessamento indevido ou divergência entre origem, referência e exportação. |
| DocumentEvidence | hash_reference ou integrity_reference obrigatório. | Hash/integridade obrigatório para detectar alteração, reprocessamento indevido ou divergência entre origem, referência e exportação. |
| FinancialExportEvidence | hash_reference ou integrity_reference obrigatório. | Hash/integridade obrigatório para detectar alteração, reprocessamento indevido ou divergência entre origem, referência e exportação. |
| BIExportEvidence | hash_reference ou integrity_reference obrigatório. | Hash/integridade obrigatório para detectar alteração, reprocessamento indevido ou divergência entre origem, referência e exportação. |
| AuditTrailEvidence | hash_reference ou integrity_reference obrigatório. | Hash/integridade obrigatório para detectar alteração, reprocessamento indevido ou divergência entre origem, referência e exportação. |
| ComplianceEvidence | hash_reference ou integrity_reference obrigatório. | Hash/integridade obrigatório para detectar alteração, reprocessamento indevido ou divergência entre origem, referência e exportação. |
| ExportPackageEvidence | hash_reference ou integrity_reference obrigatório. | Hash/integridade obrigatório para detectar alteração, reprocessamento indevido ou divergência entre origem, referência e exportação. |
| ExternalEvidenceNormalized | hash_reference ou integrity_reference obrigatório. | Hash/integridade obrigatório para detectar alteração, reprocessamento indevido ou divergência entre origem, referência e exportação. |
| ChainOfCustodyEvidence | hash_reference ou integrity_reference obrigatório. | Hash/integridade obrigatório para detectar alteração, reprocessamento indevido ou divergência entre origem, referência e exportação. |

## 44. Matriz de evidências que exigem retenção específica

| Evidência | Regra obrigatória | Motivo |
| --- | --- | --- |
| VideoEvidence | retention_policy_reference específico obrigatório. | Retenção específica por finalidade, obrigação legal/operacional, incidente, auditoria ou preservação de custódia. |
| ClipEvidence | retention_policy_reference específico obrigatório. | Retenção específica por finalidade, obrigação legal/operacional, incidente, auditoria ou preservação de custódia. |
| AccessEventEvidence | retention_policy_reference específico obrigatório. | Retenção específica por finalidade, obrigação legal/operacional, incidente, auditoria ou preservação de custódia. |
| AlarmEventEvidence | retention_policy_reference específico obrigatório. | Retenção específica por finalidade, obrigação legal/operacional, incidente, auditoria ou preservação de custódia. |
| PanicEventEvidence | retention_policy_reference específico obrigatório. | Retenção específica por finalidade, obrigação legal/operacional, incidente, auditoria ou preservação de custódia. |
| TicketAttachmentEvidence | retention_policy_reference específico obrigatório. | Retenção específica por finalidade, obrigação legal/operacional, incidente, auditoria ou preservação de custódia. |
| SupportSessionEvidence | retention_policy_reference específico obrigatório. | Retenção específica por finalidade, obrigação legal/operacional, incidente, auditoria ou preservação de custódia. |
| RemoteSupportEvidence | retention_policy_reference específico obrigatório. | Retenção específica por finalidade, obrigação legal/operacional, incidente, auditoria ou preservação de custódia. |
| AuditTrailEvidence | retention_policy_reference específico obrigatório. | Retenção específica por finalidade, obrigação legal/operacional, incidente, auditoria ou preservação de custódia. |
| ComplianceEvidence | retention_policy_reference específico obrigatório. | Retenção específica por finalidade, obrigação legal/operacional, incidente, auditoria ou preservação de custódia. |
| FinancialExportEvidence | retention_policy_reference específico obrigatório. | Retenção específica por finalidade, obrigação legal/operacional, incidente, auditoria ou preservação de custódia. |
| BIExportEvidence | retention_policy_reference específico obrigatório. | Retenção específica por finalidade, obrigação legal/operacional, incidente, auditoria ou preservação de custódia. |
| DocumentEvidence | retention_policy_reference específico obrigatório. | Retenção específica por finalidade, obrigação legal/operacional, incidente, auditoria ou preservação de custódia. |
| VisitorEvidence | retention_policy_reference específico obrigatório. | Retenção específica por finalidade, obrigação legal/operacional, incidente, auditoria ou preservação de custódia. |
| ReservationEvidence | retention_policy_reference específico obrigatório. | Retenção específica por finalidade, obrigação legal/operacional, incidente, auditoria ou preservação de custódia. |
| SecurityIncidentEvidence | retention_policy_reference específico obrigatório. | Retenção específica por finalidade, obrigação legal/operacional, incidente, auditoria ou preservação de custódia. |
| PrivacyRequestEvidence | retention_policy_reference específico obrigatório. | Retenção específica por finalidade, obrigação legal/operacional, incidente, auditoria ou preservação de custódia. |
| ChainOfCustodyEvidence | retention_policy_reference específico obrigatório. | Retenção específica por finalidade, obrigação legal/operacional, incidente, auditoria ou preservação de custódia. |
| ExportPackageEvidence | retention_policy_reference específico obrigatório. | Retenção específica por finalidade, obrigação legal/operacional, incidente, auditoria ou preservação de custódia. |

## 45. Matriz de evidências que exigem mascaramento

| Evidência | Regra obrigatória | Motivo |
| --- | --- | --- |
| SnapshotEvidence | masking_policy_reference obrigatório. | Máscara por perfil, finalidade e contexto antes de visualização, BI, exportação ou compartilhamento. |
| VideoEvidence | masking_policy_reference obrigatório. | Máscara por perfil, finalidade e contexto antes de visualização, BI, exportação ou compartilhamento. |
| ClipEvidence | masking_policy_reference obrigatório. | Máscara por perfil, finalidade e contexto antes de visualização, BI, exportação ou compartilhamento. |
| AccessEventEvidence | masking_policy_reference obrigatório. | Máscara por perfil, finalidade e contexto antes de visualização, BI, exportação ou compartilhamento. |
| TicketAttachmentEvidence | masking_policy_reference obrigatório. | Máscara por perfil, finalidade e contexto antes de visualização, BI, exportação ou compartilhamento. |
| SupportSessionEvidence | masking_policy_reference obrigatório. | Máscara por perfil, finalidade e contexto antes de visualização, BI, exportação ou compartilhamento. |
| AuditTrailEvidence | masking_policy_reference obrigatório. | Máscara por perfil, finalidade e contexto antes de visualização, BI, exportação ou compartilhamento. |
| FinancialExportEvidence | masking_policy_reference obrigatório. | Máscara por perfil, finalidade e contexto antes de visualização, BI, exportação ou compartilhamento. |
| BIExportEvidence | masking_policy_reference obrigatório. | Máscara por perfil, finalidade e contexto antes de visualização, BI, exportação ou compartilhamento. |
| DocumentEvidence | masking_policy_reference obrigatório. | Máscara por perfil, finalidade e contexto antes de visualização, BI, exportação ou compartilhamento. |
| VisitorEvidence | masking_policy_reference obrigatório. | Máscara por perfil, finalidade e contexto antes de visualização, BI, exportação ou compartilhamento. |
| ReservationEvidence | masking_policy_reference obrigatório. | Máscara por perfil, finalidade e contexto antes de visualização, BI, exportação ou compartilhamento. |
| DeviceDiagnosticEvidence | masking_policy_reference obrigatório. | Máscara por perfil, finalidade e contexto antes de visualização, BI, exportação ou compartilhamento. |
| GatewayDiagnosticEvidence | masking_policy_reference obrigatório. | Máscara por perfil, finalidade e contexto antes de visualização, BI, exportação ou compartilhamento. |
| WebhookDeliveryEvidence | masking_policy_reference obrigatório. | Máscara por perfil, finalidade e contexto antes de visualização, BI, exportação ou compartilhamento. |
| SecurityIncidentEvidence | masking_policy_reference obrigatório. | Máscara por perfil, finalidade e contexto antes de visualização, BI, exportação ou compartilhamento. |
| PrivacyRequestEvidence | masking_policy_reference obrigatório. | Máscara por perfil, finalidade e contexto antes de visualização, BI, exportação ou compartilhamento. |

## 46. Matriz de evidências que exigem auditoria de visualização

| Evidência | Regra obrigatória | Motivo |
| --- | --- | --- |
| VideoEvidence | view_audit_required verdadeiro. | Toda visualização deve registrar ator, decisão, finalidade, máscara, recurso, contexto, timestamp e correlation_id. |
| ClipEvidence | view_audit_required verdadeiro. | Toda visualização deve registrar ator, decisão, finalidade, máscara, recurso, contexto, timestamp e correlation_id. |
| AccessEventEvidence | view_audit_required verdadeiro. | Toda visualização deve registrar ator, decisão, finalidade, máscara, recurso, contexto, timestamp e correlation_id. |
| AlarmEventEvidence | view_audit_required verdadeiro. | Toda visualização deve registrar ator, decisão, finalidade, máscara, recurso, contexto, timestamp e correlation_id. |
| PanicEventEvidence | view_audit_required verdadeiro. | Toda visualização deve registrar ator, decisão, finalidade, máscara, recurso, contexto, timestamp e correlation_id. |
| RemoteSupportEvidence | view_audit_required verdadeiro. | Toda visualização deve registrar ator, decisão, finalidade, máscara, recurso, contexto, timestamp e correlation_id. |
| ComplianceEvidence | view_audit_required verdadeiro. | Toda visualização deve registrar ator, decisão, finalidade, máscara, recurso, contexto, timestamp e correlation_id. |
| FinancialExportEvidence | view_audit_required verdadeiro. | Toda visualização deve registrar ator, decisão, finalidade, máscara, recurso, contexto, timestamp e correlation_id. |
| VisitorEvidence | view_audit_required verdadeiro. | Toda visualização deve registrar ator, decisão, finalidade, máscara, recurso, contexto, timestamp e correlation_id. |
| SecurityIncidentEvidence | view_audit_required verdadeiro. | Toda visualização deve registrar ator, decisão, finalidade, máscara, recurso, contexto, timestamp e correlation_id. |
| PrivacyRequestEvidence | view_audit_required verdadeiro. | Toda visualização deve registrar ator, decisão, finalidade, máscara, recurso, contexto, timestamp e correlation_id. |
| ChainOfCustodyEvidence | view_audit_required verdadeiro. | Toda visualização deve registrar ator, decisão, finalidade, máscara, recurso, contexto, timestamp e correlation_id. |
| ExportPackageEvidence | view_audit_required verdadeiro. | Toda visualização deve registrar ator, decisão, finalidade, máscara, recurso, contexto, timestamp e correlation_id. |
| ExternalEvidenceNormalized | view_audit_required verdadeiro. | Toda visualização deve registrar ator, decisão, finalidade, máscara, recurso, contexto, timestamp e correlation_id. |
| SnapshotEvidence | view_audit_required verdadeiro. | Toda visualização deve registrar ator, decisão, finalidade, máscara, recurso, contexto, timestamp e correlation_id. |
| TicketAttachmentEvidence | view_audit_required verdadeiro. | Toda visualização deve registrar ator, decisão, finalidade, máscara, recurso, contexto, timestamp e correlation_id. |
| SupportSessionEvidence | view_audit_required verdadeiro. | Toda visualização deve registrar ator, decisão, finalidade, máscara, recurso, contexto, timestamp e correlation_id. |
| AuditTrailEvidence | view_audit_required verdadeiro. | Toda visualização deve registrar ator, decisão, finalidade, máscara, recurso, contexto, timestamp e correlation_id. |
| BIExportEvidence | view_audit_required verdadeiro. | Toda visualização deve registrar ator, decisão, finalidade, máscara, recurso, contexto, timestamp e correlation_id. |
| DocumentEvidence | view_audit_required verdadeiro. | Toda visualização deve registrar ator, decisão, finalidade, máscara, recurso, contexto, timestamp e correlation_id. |
| ReservationEvidence | view_audit_required verdadeiro. | Toda visualização deve registrar ator, decisão, finalidade, máscara, recurso, contexto, timestamp e correlation_id. |
| DeviceDiagnosticEvidence | view_audit_required verdadeiro. | Toda visualização deve registrar ator, decisão, finalidade, máscara, recurso, contexto, timestamp e correlation_id. |
| GatewayDiagnosticEvidence | view_audit_required verdadeiro. | Toda visualização deve registrar ator, decisão, finalidade, máscara, recurso, contexto, timestamp e correlation_id. |
| IntegrationEvidence | view_audit_required verdadeiro. | Toda visualização deve registrar ator, decisão, finalidade, máscara, recurso, contexto, timestamp e correlation_id. |
| WebhookDeliveryEvidence | view_audit_required verdadeiro. | Toda visualização deve registrar ator, decisão, finalidade, máscara, recurso, contexto, timestamp e correlation_id. |

## 47. Matriz de evidências que exigem auditoria de exportação

| Evidência | Regra obrigatória | Motivo |
| --- | --- | --- |
| VideoEvidence | export_audit_required verdadeiro. | Toda exportação deve registrar filtros, destino, pacote, hash, expiração, máscara, aprovador quando aplicável e política de descarte. |
| SnapshotEvidence | export_audit_required verdadeiro. | Toda exportação deve registrar filtros, destino, pacote, hash, expiração, máscara, aprovador quando aplicável e política de descarte. |
| ClipEvidence | export_audit_required verdadeiro. | Toda exportação deve registrar filtros, destino, pacote, hash, expiração, máscara, aprovador quando aplicável e política de descarte. |
| AccessEventEvidence | export_audit_required verdadeiro. | Toda exportação deve registrar filtros, destino, pacote, hash, expiração, máscara, aprovador quando aplicável e política de descarte. |
| AlarmEventEvidence | export_audit_required verdadeiro. | Toda exportação deve registrar filtros, destino, pacote, hash, expiração, máscara, aprovador quando aplicável e política de descarte. |
| TicketAttachmentEvidence | export_audit_required verdadeiro. | Toda exportação deve registrar filtros, destino, pacote, hash, expiração, máscara, aprovador quando aplicável e política de descarte. |
| SupportSessionEvidence | export_audit_required verdadeiro. | Toda exportação deve registrar filtros, destino, pacote, hash, expiração, máscara, aprovador quando aplicável e política de descarte. |
| AuditTrailEvidence | export_audit_required verdadeiro. | Toda exportação deve registrar filtros, destino, pacote, hash, expiração, máscara, aprovador quando aplicável e política de descarte. |
| ComplianceEvidence | export_audit_required verdadeiro. | Toda exportação deve registrar filtros, destino, pacote, hash, expiração, máscara, aprovador quando aplicável e política de descarte. |
| FinancialExportEvidence | export_audit_required verdadeiro. | Toda exportação deve registrar filtros, destino, pacote, hash, expiração, máscara, aprovador quando aplicável e política de descarte. |
| BIExportEvidence | export_audit_required verdadeiro. | Toda exportação deve registrar filtros, destino, pacote, hash, expiração, máscara, aprovador quando aplicável e política de descarte. |
| DocumentEvidence | export_audit_required verdadeiro. | Toda exportação deve registrar filtros, destino, pacote, hash, expiração, máscara, aprovador quando aplicável e política de descarte. |
| VisitorEvidence | export_audit_required verdadeiro. | Toda exportação deve registrar filtros, destino, pacote, hash, expiração, máscara, aprovador quando aplicável e política de descarte. |
| ReservationEvidence | export_audit_required verdadeiro. | Toda exportação deve registrar filtros, destino, pacote, hash, expiração, máscara, aprovador quando aplicável e política de descarte. |
| SecurityIncidentEvidence | export_audit_required verdadeiro. | Toda exportação deve registrar filtros, destino, pacote, hash, expiração, máscara, aprovador quando aplicável e política de descarte. |
| PrivacyRequestEvidence | export_audit_required verdadeiro. | Toda exportação deve registrar filtros, destino, pacote, hash, expiração, máscara, aprovador quando aplicável e política de descarte. |
| ExportPackageEvidence | export_audit_required verdadeiro. | Toda exportação deve registrar filtros, destino, pacote, hash, expiração, máscara, aprovador quando aplicável e política de descarte. |
| ExternalEvidenceNormalized | export_audit_required verdadeiro. | Toda exportação deve registrar filtros, destino, pacote, hash, expiração, máscara, aprovador quando aplicável e política de descarte. |

## 48. Matriz de evidências exportáveis

| Evidência | Regra obrigatória | Motivo |
| --- | --- | --- |
| ClipEvidence | Exportável de forma controlada. | Exportável somente com finalidade, autorização, export_control_policy, máscara, audit_reference, retenção e pacote expirável. |
| SnapshotEvidence | Exportável de forma controlada. | Exportável somente com finalidade, autorização, export_control_policy, máscara, audit_reference, retenção e pacote expirável. |
| AccessEventEvidence | Exportável de forma controlada. | Exportável somente com finalidade, autorização, export_control_policy, máscara, audit_reference, retenção e pacote expirável. |
| AlarmEventEvidence | Exportável de forma controlada. | Exportável somente com finalidade, autorização, export_control_policy, máscara, audit_reference, retenção e pacote expirável. |
| TicketAttachmentEvidence | Exportável de forma controlada. | Exportável somente com finalidade, autorização, export_control_policy, máscara, audit_reference, retenção e pacote expirável. |
| SupportSessionEvidence | Exportável de forma controlada. | Exportável somente com finalidade, autorização, export_control_policy, máscara, audit_reference, retenção e pacote expirável. |
| AuditTrailEvidence | Exportável de forma controlada. | Exportável somente com finalidade, autorização, export_control_policy, máscara, audit_reference, retenção e pacote expirável. |
| ComplianceEvidence | Exportável de forma controlada. | Exportável somente com finalidade, autorização, export_control_policy, máscara, audit_reference, retenção e pacote expirável. |
| FinancialExportEvidence | Exportável de forma controlada. | Exportável somente com finalidade, autorização, export_control_policy, máscara, audit_reference, retenção e pacote expirável. |
| BIExportEvidence | Exportável de forma controlada. | Exportável somente com finalidade, autorização, export_control_policy, máscara, audit_reference, retenção e pacote expirável. |
| DocumentEvidence | Exportável de forma controlada. | Exportável somente com finalidade, autorização, export_control_policy, máscara, audit_reference, retenção e pacote expirável. |
| VisitorEvidence | Exportável de forma controlada. | Exportável somente com finalidade, autorização, export_control_policy, máscara, audit_reference, retenção e pacote expirável. |
| ReservationEvidence | Exportável de forma controlada. | Exportável somente com finalidade, autorização, export_control_policy, máscara, audit_reference, retenção e pacote expirável. |
| DeviceDiagnosticEvidence | Exportável de forma controlada. | Exportável somente com finalidade, autorização, export_control_policy, máscara, audit_reference, retenção e pacote expirável. |
| GatewayDiagnosticEvidence | Exportável de forma controlada. | Exportável somente com finalidade, autorização, export_control_policy, máscara, audit_reference, retenção e pacote expirável. |
| WebhookDeliveryEvidence | Exportável de forma controlada. | Exportável somente com finalidade, autorização, export_control_policy, máscara, audit_reference, retenção e pacote expirável. |
| PrivacyRequestEvidence | Exportável de forma controlada. | Exportável somente com finalidade, autorização, export_control_policy, máscara, audit_reference, retenção e pacote expirável. |
| ExportPackageEvidence | Exportável de forma controlada. | Exportável somente com finalidade, autorização, export_control_policy, máscara, audit_reference, retenção e pacote expirável. |

## 49. Matriz de evidências proibidas de exportação

| Evidência | Regra obrigatória | Motivo |
| --- | --- | --- |
| VideoEvidence bruto integral sem recorte/finalidade | Proibida como bruto. | Exportação proibida ou excepcionalíssima: usar apenas metadados, agregação ou relatório controlado quando permitido por política. |
| PanicEventEvidence com dados de terceiros sem política | Proibida como bruto. | Exportação proibida ou excepcionalíssima: usar apenas metadados, agregação ou relatório controlado quando permitido por política. |
| RemoteSupportEvidence com tela/sessão bruta | Proibida como bruto. | Exportação proibida ou excepcionalíssima: usar apenas metadados, agregação ou relatório controlado quando permitido por política. |
| ChainOfCustodyEvidence interna completa | Proibida como bruto. | Exportação proibida ou excepcionalíssima: usar apenas metadados, agregação ou relatório controlado quando permitido por política. |
| SecurityIncidentEvidence com detalhe explorável | Proibida como bruto. | Exportação proibida ou excepcionalíssima: usar apenas metadados, agregação ou relatório controlado quando permitido por política. |
| ExternalEvidenceNormalized não confiável | Proibida como bruto. | Exportação proibida ou excepcionalíssima: usar apenas metadados, agregação ou relatório controlado quando permitido por política. |
| Biometria/template facial bruto | Proibida como bruto. | Exportação proibida ou excepcionalíssima: usar apenas metadados, agregação ou relatório controlado quando permitido por política. |
| Segredos, tokens, chaves e certificados | Proibida como bruto. | Exportação proibida ou excepcionalíssima: usar apenas metadados, agregação ou relatório controlado quando permitido por política. |

## 50. Matriz de evidências que exigem quarentena

| Evidência | Regra obrigatória | Motivo |
| --- | --- | --- |
| VideoEvidence | Quarentena obrigatória em falha de política, escopo, integridade ou origem. | Quarentenar em caso de tenant/contexto inválido, origem suspeita, hash inválido, política ausente, dado bruto proibido ou custódia quebrada. |
| SnapshotEvidence | Quarentena obrigatória em falha de política, escopo, integridade ou origem. | Quarentenar em caso de tenant/contexto inválido, origem suspeita, hash inválido, política ausente, dado bruto proibido ou custódia quebrada. |
| ClipEvidence | Quarentena obrigatória em falha de política, escopo, integridade ou origem. | Quarentenar em caso de tenant/contexto inválido, origem suspeita, hash inválido, política ausente, dado bruto proibido ou custódia quebrada. |
| AccessEventEvidence | Quarentena obrigatória em falha de política, escopo, integridade ou origem. | Quarentenar em caso de tenant/contexto inválido, origem suspeita, hash inválido, política ausente, dado bruto proibido ou custódia quebrada. |
| AlarmEventEvidence | Quarentena obrigatória em falha de política, escopo, integridade ou origem. | Quarentenar em caso de tenant/contexto inválido, origem suspeita, hash inválido, política ausente, dado bruto proibido ou custódia quebrada. |
| PanicEventEvidence | Quarentena obrigatória em falha de política, escopo, integridade ou origem. | Quarentenar em caso de tenant/contexto inválido, origem suspeita, hash inválido, política ausente, dado bruto proibido ou custódia quebrada. |
| TicketAttachmentEvidence | Quarentena obrigatória em falha de política, escopo, integridade ou origem. | Quarentenar em caso de tenant/contexto inválido, origem suspeita, hash inválido, política ausente, dado bruto proibido ou custódia quebrada. |
| SupportSessionEvidence | Quarentena obrigatória em falha de política, escopo, integridade ou origem. | Quarentenar em caso de tenant/contexto inválido, origem suspeita, hash inválido, política ausente, dado bruto proibido ou custódia quebrada. |
| RemoteSupportEvidence | Quarentena obrigatória em falha de política, escopo, integridade ou origem. | Quarentenar em caso de tenant/contexto inválido, origem suspeita, hash inválido, política ausente, dado bruto proibido ou custódia quebrada. |
| AuditTrailEvidence | Quarentena obrigatória em falha de política, escopo, integridade ou origem. | Quarentenar em caso de tenant/contexto inválido, origem suspeita, hash inválido, política ausente, dado bruto proibido ou custódia quebrada. |
| ComplianceEvidence | Quarentena obrigatória em falha de política, escopo, integridade ou origem. | Quarentenar em caso de tenant/contexto inválido, origem suspeita, hash inválido, política ausente, dado bruto proibido ou custódia quebrada. |
| FinancialExportEvidence | Quarentena obrigatória em falha de política, escopo, integridade ou origem. | Quarentenar em caso de tenant/contexto inválido, origem suspeita, hash inválido, política ausente, dado bruto proibido ou custódia quebrada. |
| BIExportEvidence | Quarentena obrigatória em falha de política, escopo, integridade ou origem. | Quarentenar em caso de tenant/contexto inválido, origem suspeita, hash inválido, política ausente, dado bruto proibido ou custódia quebrada. |
| DocumentEvidence | Quarentena obrigatória em falha de política, escopo, integridade ou origem. | Quarentenar em caso de tenant/contexto inválido, origem suspeita, hash inválido, política ausente, dado bruto proibido ou custódia quebrada. |
| VisitorEvidence | Quarentena obrigatória em falha de política, escopo, integridade ou origem. | Quarentenar em caso de tenant/contexto inválido, origem suspeita, hash inválido, política ausente, dado bruto proibido ou custódia quebrada. |
| ReservationEvidence | Quarentena obrigatória em falha de política, escopo, integridade ou origem. | Quarentenar em caso de tenant/contexto inválido, origem suspeita, hash inválido, política ausente, dado bruto proibido ou custódia quebrada. |
| DeviceDiagnosticEvidence | Quarentena obrigatória em falha de política, escopo, integridade ou origem. | Quarentenar em caso de tenant/contexto inválido, origem suspeita, hash inválido, política ausente, dado bruto proibido ou custódia quebrada. |
| GatewayDiagnosticEvidence | Quarentena obrigatória em falha de política, escopo, integridade ou origem. | Quarentenar em caso de tenant/contexto inválido, origem suspeita, hash inválido, política ausente, dado bruto proibido ou custódia quebrada. |
| IntegrationEvidence | Quarentena obrigatória em falha de política, escopo, integridade ou origem. | Quarentenar em caso de tenant/contexto inválido, origem suspeita, hash inválido, política ausente, dado bruto proibido ou custódia quebrada. |
| WebhookDeliveryEvidence | Quarentena obrigatória em falha de política, escopo, integridade ou origem. | Quarentenar em caso de tenant/contexto inválido, origem suspeita, hash inválido, política ausente, dado bruto proibido ou custódia quebrada. |
| SecurityIncidentEvidence | Quarentena obrigatória em falha de política, escopo, integridade ou origem. | Quarentenar em caso de tenant/contexto inválido, origem suspeita, hash inválido, política ausente, dado bruto proibido ou custódia quebrada. |
| PrivacyRequestEvidence | Quarentena obrigatória em falha de política, escopo, integridade ou origem. | Quarentenar em caso de tenant/contexto inválido, origem suspeita, hash inválido, política ausente, dado bruto proibido ou custódia quebrada. |
| ChainOfCustodyEvidence | Quarentena obrigatória em falha de política, escopo, integridade ou origem. | Quarentenar em caso de tenant/contexto inválido, origem suspeita, hash inválido, política ausente, dado bruto proibido ou custódia quebrada. |
| ExportPackageEvidence | Quarentena obrigatória em falha de política, escopo, integridade ou origem. | Quarentenar em caso de tenant/contexto inválido, origem suspeita, hash inválido, política ausente, dado bruto proibido ou custódia quebrada. |
| ExternalEvidenceNormalized | Quarentena obrigatória em falha de política, escopo, integridade ou origem. | Quarentenar em caso de tenant/contexto inválido, origem suspeita, hash inválido, política ausente, dado bruto proibido ou custódia quebrada. |

## 51. Matriz de evidências permitidas em BI apenas com agregação/máscara

| Evidência | Regra obrigatória | Motivo |
| --- | --- | --- |
| AccessEventEvidence | BI não recebe bruto identificável. | BI somente com agregação, máscara, finalidade, retenção e sem identificação individual desnecessária. |
| AlarmEventEvidence | BI não recebe bruto identificável. | BI somente com agregação, máscara, finalidade, retenção e sem identificação individual desnecessária. |
| TicketAttachmentEvidence | BI não recebe bruto identificável. | BI somente com agregação, máscara, finalidade, retenção e sem identificação individual desnecessária. |
| SupportSessionEvidence | BI não recebe bruto identificável. | BI somente com agregação, máscara, finalidade, retenção e sem identificação individual desnecessária. |
| AuditTrailEvidence | BI não recebe bruto identificável. | BI somente com agregação, máscara, finalidade, retenção e sem identificação individual desnecessária. |
| FinancialExportEvidence | BI não recebe bruto identificável. | BI somente com agregação, máscara, finalidade, retenção e sem identificação individual desnecessária. |
| BIExportEvidence | BI não recebe bruto identificável. | BI somente com agregação, máscara, finalidade, retenção e sem identificação individual desnecessária. |
| VisitorEvidence | BI não recebe bruto identificável. | BI somente com agregação, máscara, finalidade, retenção e sem identificação individual desnecessária. |
| ReservationEvidence | BI não recebe bruto identificável. | BI somente com agregação, máscara, finalidade, retenção e sem identificação individual desnecessária. |
| DeviceDiagnosticEvidence | BI não recebe bruto identificável. | BI somente com agregação, máscara, finalidade, retenção e sem identificação individual desnecessária. |
| GatewayDiagnosticEvidence | BI não recebe bruto identificável. | BI somente com agregação, máscara, finalidade, retenção e sem identificação individual desnecessária. |
| WebhookDeliveryEvidence | BI não recebe bruto identificável. | BI somente com agregação, máscara, finalidade, retenção e sem identificação individual desnecessária. |
| SecurityIncidentEvidence | BI não recebe bruto identificável. | BI somente com agregação, máscara, finalidade, retenção e sem identificação individual desnecessária. |
| PrivacyRequestEvidence | BI não recebe bruto identificável. | BI somente com agregação, máscara, finalidade, retenção e sem identificação individual desnecessária. |

## 52. Matriz de evidências proibidas para terceiros

| Evidência | Regra obrigatória | Motivo |
| --- | --- | --- |
| VideoEvidence bruto | Terceiros não recebem bruto. | Não enviar a terceiros como bruto; quando permitido, usar ExportPackageEvidence com política, assinatura, expiração, escopo e auditoria. |
| SnapshotEvidence identificável sem máscara | Terceiros não recebem bruto. | Não enviar a terceiros como bruto; quando permitido, usar ExportPackageEvidence com política, assinatura, expiração, escopo e auditoria. |
| ClipEvidence sem finalidade | Terceiros não recebem bruto. | Não enviar a terceiros como bruto; quando permitido, usar ExportPackageEvidence com política, assinatura, expiração, escopo e auditoria. |
| PanicEventEvidence | Terceiros não recebem bruto. | Não enviar a terceiros como bruto; quando permitido, usar ExportPackageEvidence com política, assinatura, expiração, escopo e auditoria. |
| RemoteSupportEvidence | Terceiros não recebem bruto. | Não enviar a terceiros como bruto; quando permitido, usar ExportPackageEvidence com política, assinatura, expiração, escopo e auditoria. |
| SecurityIncidentEvidence | Terceiros não recebem bruto. | Não enviar a terceiros como bruto; quando permitido, usar ExportPackageEvidence com política, assinatura, expiração, escopo e auditoria. |
| PrivacyRequestEvidence | Terceiros não recebem bruto. | Não enviar a terceiros como bruto; quando permitido, usar ExportPackageEvidence com política, assinatura, expiração, escopo e auditoria. |
| ChainOfCustodyEvidence | Terceiros não recebem bruto. | Não enviar a terceiros como bruto; quando permitido, usar ExportPackageEvidence com política, assinatura, expiração, escopo e auditoria. |
| GatewayDiagnosticEvidence com rota/IP sensível | Terceiros não recebem bruto. | Não enviar a terceiros como bruto; quando permitido, usar ExportPackageEvidence com política, assinatura, expiração, escopo e auditoria. |
| WebhookDeliveryEvidence com assinatura/segredo | Terceiros não recebem bruto. | Não enviar a terceiros como bruto; quando permitido, usar ExportPackageEvidence com política, assinatura, expiração, escopo e auditoria. |
| ExternalEvidenceNormalized não validado | Terceiros não recebem bruto. | Não enviar a terceiros como bruto; quando permitido, usar ExportPackageEvidence com política, assinatura, expiração, escopo e auditoria. |
| DocumentEvidence completo sem finalidade | Terceiros não recebem bruto. | Não enviar a terceiros como bruto; quando permitido, usar ExportPackageEvidence com política, assinatura, expiração, escopo e auditoria. |


## 53. Riscos de acoplamento encontrados

| Risco | Gravidade | Correção oficial |
| --- | --- | --- |
| EvidenceReference virar banco compartilhado | Crítica | A referência deve apontar para o módulo dono; consumidores chamam contratos autorizados. |
| Evento transportar prova bruta | Crítica | EventEnvelope carrega evidence_reference, não bruto quando referência bastar. |
| Ticket virar repositório geral de provas | Alta | Tickets só referencia evidências de chamados; prova de vídeo, acesso, alarme e suporte permanece no módulo dono. |
| BI consumir evidência identificável bruta | Crítica | BI usa agregação, máscara, finalidade e retenção. |
| Auditoria assumir execução operacional | Alta | Auditoria preserva trilha e cadeia; módulo dono executa. |
| Segurança e LGPD virar storage de evidência | Alta | Segurança e LGPD governa políticas; não assume bruto de módulos. |
| Master usar escopo global como acesso bruto | Crítica | Master acessa por governança, caso, política e AuthorizationDecision. |
| Parceiro acessar prova de organizações fora do escopo | Crítica | Tenant/context/contexto e herança bloqueiam. |
| Automações executar ação sensível por evidência recebida | Crítica | Automação solicita; Core decide; módulo dono executa. |
| ResourceReference transferir posse do recurso | Alta | no_domain_transfer sempre verdadeiro. |

## 54. Riscos de exposição encontrados

| Risco | Gravidade | Correção oficial |
| --- | --- | --- |
| URL pública permanente de evidência | Crítica | Proibir; usar referência opaca e acesso temporário autorizado. |
| Path/bucket bruto em payload | Crítica | Substituir por storage_reference segura. |
| Vídeo, imagem ou documento bruto em evento | Crítica | Substituir por EvidenceReference. |
| Segredo em EvidenceReference | Crítica | Substituir por SecretReference. |
| Biometria/template facial bruto | Crítica | Nunca transportar; usar referência, consentimento e política LGPD. |
| Exportação sem hash/pacote/expiração | Alta | Usar ExportPackageEvidence com hash, expiração e auditoria. |
| Visualização sem audit_reference | Alta | Obrigar auditoria de visualização para sensível/crítico. |
| Dados de outro tenant/contexto | Crítica | Rejeitar/quarentenar e auditar. |
| Origem externa não confiável | Alta | ExternalEvidenceNormalized só após validação, assinatura e normalização. |
| Cadeia de custódia quebrada | Crítica | Quarentena, revisão e preservação da trilha. |

## 55. Correções recomendadas no Catálogo de Contratos Públicos, se houver

Recomendações para `05_CATALOGO_DE_CONTRATOS_PUBLICOS.md`:

- Incluir referência ao novo arquivo técnico raiz `09_DETALHAMENTO_EVIDENCEREFERENCE_V1.md`.
- Atualizar a seção transversal de EvidenceReference para apontar explicitamente os campos obrigatórios definidos neste documento.
- Declarar `NODUOS.TRANSVERSAL.EVIDENCE_REFERENCE.v1` como contrato transversal de evidência com status Approved após aprovação do usuário.
- Padronizar que contratos que gerem prova devem marcar `evidence_reference_required` quando aplicável.
- Reforçar que `raw_payload_allowed` deve ser `não` para vídeo, imagem, documento, segredo, biometria, storage bruto e evidência crítica quando referência bastar.

## 56. Correções recomendadas na Matriz Técnica de Permissões por Contrato, se houver

Recomendações para `06_MATRIZ_TECNICA_PERMISSOES_POR_CONTRATO.md`:

- Adicionar nota de que visualização de EvidenceReference e visualização do bruto são permissões diferentes.
- Incluir permissão conceitual `contract.evidence_reference.read` para metadados e permissões específicas para `view`, `export`, `share`, `quarantine`, `release`, `reprocess`, `discard` quando detalhadas futuramente.
- Reforçar que contrato sensível/crítico com EvidenceReference exige AuthorizationDecision quando houver visualização, exportação, compartilhamento, reprocessamento ou acesso ao bruto.
- Marcar exportação de evidência como crítica e sempre auditável.

## 57. Correções recomendadas na Matriz Técnica de Dados Sensíveis por Contrato, se houver

Recomendações para `07_MATRIZ_TECNICA_DADOS_SENSIVEIS_POR_CONTRATO.md`:

- Atualizar a seção de EvidenceReference com os campos obrigatórios deste documento.
- Reforçar que evidência bruta não trafega em contratos públicos quando EvidenceReference bastar.
- Adicionar regra de quarentena para evidência sem owner, custody, finalidade, retenção, máscara aplicável, política ou AuthorizationDecision quando crítica.
- Marcar BI com evidências como somente agregação/máscara por padrão.
- Reforçar ExportPackageEvidence para exportações sensíveis e críticas.

## 58. Correções recomendadas no Detalhamento de EventEnvelope v1, se houver

Recomendações para `08_DETALHAMENTO_EVENTENVELOPE_V1.md`:

- Incluir referência ao detalhamento oficial de EvidenceReference como arquivo técnico raiz complementar.
- Reforçar que eventos de evidência podem carregar `evidence_reference` ou `evidence_reference_id`, mas não prova bruta.
- Reforçar que evento de evidência não autoriza visualização da prova.
- Declarar que EvidenceReference criada, atualizada, visualizada, exportada, quarentenada ou reprocessada deve gerar eventos envelopados quando cruzar fronteira modular, alimentar auditoria, BI, suporte, segurança, compliance ou integração externa.

## 59. Lacunas para detalhamento posterior

- Detalhamento de SecretReference.
- Detalhamento de AuthorizationDecision.
- Detalhamento de ResourceReference.
- Detalhamento de AuditTrailReference.
- Detalhamento de FileAttachmentReference.
- Matriz de campos por contrato público.
- Política conceitual de retenção por tipo de evidência.
- Política conceitual de mascaramento por perfil e finalidade.
- Blueprint técnico da aplicação sem escolher tecnologia antes da hora.

## 60. Decisões novas sugeridas, apenas se realmente necessárias, começando em DEC-193

### RASCUNHO - DEC-193: Detalhamento de EvidenceReference v1 como documento técnico raiz complementar

#### Tema

Evidências, prova, cadeia de custódia, integridade, retenção, mascaramento, visualização, exportação e auditoria.

#### Decisão

O NoduOS deve adotar o Detalhamento de EvidenceReference v1 como documento técnico raiz complementar para especificar campos, relações, proibições, cadeia de custódia, integridade, retenção, mascaramento, visualização, exportação, quarentena, reprocessamento e auditoria de evidências.

Esta decisão complementa a DEC-182, que já aprovou EvidenceReference como contrato oficial de evidências e cadeia de custódia. Ela não altera o ownership dos módulos, não cria novo módulo e não transforma EvidenceReference em banco, storage público, payload bruto ou atalho de acesso.

EvidenceReference deve declarar owner_module, custody_owner_module, source_event_reference quando derivado de evento, tenant_id, context_id, related_resource_reference, sensitivity_level, data_categories, purpose, políticas de Segurança/LGPD, retention_policy_reference, masking_policy_reference, access_policy_reference, export_control_policy, storage_reference segura, integridade/hash quando aplicável, chain_of_custody_reference, audit_reference e AuthorizationDecision quando sensível ou crítica.

#### Motivo

Preservar modularidade, LGPD, segurança, rastreabilidade, cadeia de custódia e validade probatória, evitando que eventos, webhooks, read models, tickets, BI, suporte, exportações ou integrações transportem evidência bruta indevida.

#### Impacto

- Criação recomendada do arquivo `09_DETALHAMENTO_EVIDENCEREFERENCE_V1.md`, como documento técnico raiz complementar.
- Atualização de Catálogo de Contratos Públicos, Matriz de Permissões, Matriz de Dados Sensíveis e Detalhamento de EventEnvelope v1.
- Reforço de fail-closed para evidência sensível ou crítica sem política, escopo, autorização, auditoria ou cadeia de custódia.
- Preparação da próxima etapa técnica recomendada: SecretReference, AuthorizationDecision ou ResourceReference, sem iniciar implementação.

#### Status

Rascunho para aprovação do usuário.

#### Data

2026-06-27

## 61. Atualizações recomendadas para 00_BIBLIA_DO_PROJETO.md

Adicionar ao bloco de documentos técnicos raiz:

```text
O Detalhamento de EvidenceReference v1 foi definido como padrão conceitual transversal para referenciar evidências, provas, vídeo, imagem, snapshot, clip, documento probatório, anexo probatório, evento de acesso, alarme, ticket, suporte, auditoria, exportação, diagnóstico, incidente, solicitação LGPD e evidência externa normalizada sem transportar bruto indevido.

Regra oficial: evidência referencia prova; bruto só é acessado por autorização própria do módulo dono, com finalidade, política, retenção, máscara, cadeia de custódia e auditoria.
```

Atualizar próxima etapa recomendada após aprovação:

```text
Próxima etapa recomendada: Detalhamento de SecretReference, AuthorizationDecision ou ResourceReference.
```

## 62. Atualizações recomendadas para 01_MAPA_DE_MODULOS.md

Adicionar em observações transversais:

```text
Todo módulo que produzir, consumir, referenciar, auditar, exportar ou compartilhar evidência deve usar EvidenceReference v1 quando houver prova, valor probatório, cadeia de custódia, dado sensível/crítico, imagem, vídeo, documento, suporte remoto, diagnóstico, exportação ou evidência externa normalizada.

EvidenceReference não transfere domínio do módulo dono, não autoriza visualização e não vira banco compartilhado.
```

## 63. Atualizações consolidadas para 02_REGRAS_DE_ARQUITETURA.md

Adicionar em contratos transversais:

```text
EvidenceReference v1 é o padrão transversal para referenciar evidências. Deve declarar evidence_owner_module, custody_owner_module, source_event_reference quando aplicável, related_resource_reference, tenant_id, context_id, sensitivity_level, finalidade, políticas de Segurança/LGPD, retenção, máscara, acesso, exportação, storage_reference segura, integridade/hash, cadeia de custódia e auditoria.

É proibido transportar vídeo bruto, imagem bruta, documento completo, segredo, biometria, path de storage, URL pública permanente ou dados fora do tenant/contexto quando EvidenceReference bastar.
```

## 64. Atualizações consolidadas para 03_DECISOES_OFICIAIS.md

DEC-193 consolidada como decisão aprovada de detalhamento técnico complementar do EvidenceReference v1, preservando DEC-182 como decisão base do contrato oficial de evidências.

## 65. Atualizações consolidadas para 04_PROMPTS_DE_TRABALHO.md

Adicionar aos prompts técnicos:

```text
Ao trabalhar com evidências, vídeo, imagem, snapshot, clip, documento probatório, anexo probatório, evento de acesso, alarme, suporte, auditoria, exportação, diagnóstico, incidente, LGPD ou evidência externa, aplicar obrigatoriamente EvidenceReference v1.

Não transportar evidência bruta quando referência bastar. Não expor storage bruto. Não permitir evidência sensível/crítica sem finalidade, política, retenção, máscara, AuthorizationDecision quando aplicável, cadeia de custódia e auditoria.
```

## 66. Atualizações consolidadas para 05_CATALOGO_DE_CONTRATOS_PUBLICOS.md

Adicionar seção de referência:

```text
O contrato transversal `NODUOS.TRANSVERSAL.EVIDENCE_REFERENCE.v1` deve seguir o detalhamento oficial do arquivo `09_DETALHAMENTO_EVIDENCEREFERENCE_V1.md`.
```

Atualizar metadados mínimos dos contratos com:

```text
evidence_reference_required
chain_of_custody_required
evidence_view_audit_required
evidence_export_audit_required
evidence_quarantine_policy
```

## 67. Atualizações consolidadas para 06_MATRIZ_TECNICA_PERMISSOES_POR_CONTRATO.md

Adicionar regra global:

```text
Visualizar metadados de EvidenceReference, visualizar bruto, exportar, compartilhar, reprocessar, liberar quarentena e descartar evidência são ações distintas e devem possuir permissão, escopo, política, AuthorizationDecision quando aplicável e auditoria própria.
```

## 68. Atualizações consolidadas para 07_MATRIZ_TECNICA_DADOS_SENSIVEIS_POR_CONTRATO.md

Adicionar regra global:

```text
Evidência sensível ou crítica sem owner_module, custody_owner_module, related_resource_reference, tenant_id, context_id, finalidade, política Segurança/LGPD, retenção, máscara aplicável, audit_reference, export_control_policy quando exportável ou AuthorizationDecision quando crítica deve ser negada, pausada ou quarentenada em comportamento fail-closed.
```

## 69. Atualizações consolidadas para 08_DETALHAMENTO_EVENTENVELOPE_V1.md

Adicionar em regras de EvidenceReference em eventos:

```text
Eventos de evidência podem carregar `evidence_reference` ou `evidence_reference_id`, mas não devem carregar prova bruta quando EvidenceReference bastar.

A existência de EvidenceReference em evento não autoriza visualização da prova. Visualização, exportação, compartilhamento, reprocessamento, liberação de quarentena ou acesso ao bruto exigem autorização própria, finalidade, política, audit_reference e escopo.
```

## 70. Checklist final de consistência

| Item | Status técnico |
| --- | --- |
| Não sugere MVP, fases ou implementação | OK |
| Não cria banco, migration, endpoint, storage definitivo, fila, broker, linguagem ou tela | OK |
| Preserva a regra: Política influencia, Core decide, Módulo dono executa, Auditoria registra | OK |
| Preserva owner_module e não transfere domínio | OK |
| Define custody_owner_module sem criar módulo novo | OK |
| Integra EvidenceReference com EventEnvelope v1 | OK |
| Integra EvidenceReference com ResourceReference | OK |
| Integra EvidenceReference com SecretReference | OK |
| Integra EvidenceReference com FileAttachmentReference | OK |
| Integra EvidenceReference com AuditTrailReference | OK |
| Proíbe bruto indevido, segredo, biometria, storage bruto e URL pública permanente | OK |
| Exige finalidade, retenção, máscara, política, auditoria e fail-closed para sensível/crítico | OK |
| Inclui quarentena, reprocessamento, integridade, hash e imutabilidade | OK |
| Inclui matrizes obrigatórias solicitadas | OK |
| Inclui matriz específica de EvidenceReference em EventEnvelope v1 | OK |
| DEC-193 consolidada como detalhamento técnico complementar, sem duplicar DEC-182 | OK |

## 71. Próxima etapa recomendada

Parecer técnico:

**O detalhamento de EvidenceReference está aprovado e consolidado nos documentos centrais.**

Ações aplicadas na raiz:

1. DEC-193 aprovada e consolidada como decisão oficial.
2. Arquivo técnico raiz `09_DETALHAMENTO_EVIDENCEREFERENCE_V1.md` criado.
3. Arquivos 00 a 08 atualizados com os blocos consolidados.
4. README do pacote raiz ajustado para indicar que a base está atualizada com EvidenceReference v1.
5. DEC-182 preservada como decisão base de EvidenceReference e DEC-193 usada apenas como detalhamento técnico complementar.

Próximo passo recomendado:

- detalhar SecretReference; ou
- detalhar AuthorizationDecision; ou
- detalhar ResourceReference; ou
- avançar para modelagem técnica conceitual por módulo.

Recomendação de sequência:

1. Detalhar SecretReference.
2. Detalhar AuthorizationDecision.
3. Detalhar ResourceReference.
4. Avançar para modelagem técnica conceitual por módulo.
5. Avançar para blueprint técnico da aplicação.


---

# Atualização - Detalhamento de SecretReference v1

Data da atualização: 2026-06-27.

Decisão aplicada: DEC-194.

Arquivo técnico raiz consolidado: `10_DETALHAMENTO_SECRETREFERENCE_V1.md`.

Última DEC consolidada: DEC-198.

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


## Atualização consolidada do EvidenceReference v1 - Relação formal com SecretReference v1

EvidenceReference referencia prova. SecretReference referencia segredo.

Quando uma evidência for criptografada, assinada, lacrada, exportada ou verificada por material criptográfico, a EvidenceReference pode apontar para uma SecretReference, mas nunca deve incorporar segredo, chave, certificado privado, token ou material criptográfico bruto.

A cadeia de custódia da evidência deve registrar que material secreto foi usado por referência, sem expor o segredo.

Exemplos:

- Clip de câmera criptografado: EvidenceReference + SecretReference da chave.
- Exportação probatória assinada: EvidenceReference + SecretReference da assinatura.
- Documento probatório protegido: EvidenceReference + SecretReference de criptografia.
- Incidente de vazamento: EvidenceReference do caso + SecretReference comprometida.

## Relação complementar com AuthorizationDecision v1 e ResourceReference v1

EvidenceReference não autoriza visualização, exportação, cópia, anexação, compartilhamento, BI identificável ou uso probatório por si só.

Toda ação sobre evidência sensível ou crítica exige AuthorizationDecision v1 válida, emitida pelo Core Platform, com tenant, contexto, ator, recurso, finalidade, escopo, política de retenção, política de máscara, política de exportação quando aplicável e audit_reference.

Decisão expirada ou fora do escopo deve falhar fechado.

ResourceReference v1 pode apontar o recurso relacionado à evidência, preservando owner_module e `no_domain_transfer = true`.

EvidenceReference referencia a prova. ResourceReference aponta o recurso relacionado. AuthorizationDecision decide a ação. Auditoria registra a trilha.


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

## Relação complementar com o Blueprint técnico da aplicação

Data: 2026-06-27.
Decisão aplicada: DEC-197.
Arquivo técnico raiz: `13_BLUEPRINT_TECNICO_APLICACAO_NODUOS.md`.

O Blueprint técnico da aplicação define como este padrão transversal deve ser aplicado na programação.

Nenhum código deve implementar este padrão como atalho para domínio alheio, banco compartilhado, autorização paralela, payload bruto, evento-comando, read model como fonte primária ou frontend como decisor de autorização.

A aplicação deve ser contract-first, modular-first e authorization-first, sempre validando tenant/contexto, escopo, política, auditoria, idempotência quando aplicável e fail-closed em ações críticas.


---

# Atualização transversal de raiz - DEC-198

Data: 2026-07-17

Este documento incorpora a decisão oficial DEC-198 como regra de governança Git pré-runtime.

## Branch Git oficial

```text
official/pre-runtime-foundation-v1
```

## Regra operacional

Enquanto `origin/main` permanecer divergente, a branch oficial do NoduOS é `official/pre-runtime-foundation-v1`.

`origin/main` é histórico remoto preservado, não trilho canônico de programação. Nenhum pull, merge, rebase ou force push sobre `origin/main` deve ser feito sem decisão e bloco próprios de reconciliação.

## Estado técnico vinculado

```text
Commit base pré-runtime: 388c96e
Commit completo base: 388c96e41ae2bffc5e9eee2e0a2af162cf5c3025
Commit DEC-198: e87b8c0
Commit completo DEC-198: e87b8c060e455bcaebd337ac6f781cf6af58d8d8
Tag DEC-198: root-git-canonical-branch-dec-198-v1
Tag marco pré-runtime: pre-runtime-foundation-v1
Remote: git@github.com:mmserver2/NoduOS.git
origin/main preservado: 73456a10720852456d074931d964361a3cdcb83a
```

## Estado da raiz

```text
Última DEC consolidada: DEC-198.
Próxima DEC livre: DEC-199.
Próxima etapa recomendada: Runtime-BLOCK técnico mínimo da API, usando official/pre-runtime-foundation-v1 como branch Git oficial.
```
