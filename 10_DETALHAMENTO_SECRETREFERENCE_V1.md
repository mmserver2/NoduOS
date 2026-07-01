# CANVA FINAL - DETALHAMENTO DE SECRETREFERENCE V1 NODUOS

Projeto: NoduOS  
Descrição oficial: SaaS Modular de Gestão de Espaços e Segurança Unificada  
Conceito técnico: Sistema Operacional Modular para Espaços Físicos Conectados  
Conceito de marca: Conexão que impulsiona  
Tipo de documento: Padrão conceitual oficial para referência segura de segredos  
Versão do documento: 1.0.2
Versão base do contrato: v1  
Data desta consolidação: 2026-06-27  
Status: Aprovado e atualizado com Blueprint Técnico da Aplicação e DEC-197
Última DEC consolidada na raiz antes desta etapa: DEC-193  
DEC consolidada nesta etapa: DEC-194  
Próxima DEC livre: DEC-198  
Arquivo técnico raiz oficial: `10_DETALHAMENTO_SECRETREFERENCE_V1.md`

Frase guia:

Segredo não viaja. Referência aponta. Política limita. Core autoriza. Módulo dono usa. Auditoria registra.

Regra central:

Política influencia. Core decide. Módulo dono executa. Auditoria registra.

---

## 0. Ajustes aplicados nesta versão final

Esta versão detalha o `SecretReference v1` como padrão transversal para segredos no NoduOS, alinhado aos documentos centrais, ao Catálogo de Contratos Públicos, à Matriz Técnica de Permissões por Contrato, à Matriz Técnica de Dados Sensíveis por Contrato, ao EventEnvelope v1 e ao contexto informado de consolidação do EvidenceReference v1.

Ajustes consolidados:

- SecretReference v1 fica definido como contrato transversal para referência segura de segredos.
- Segredo bruto fica proibido em payload, evento, comando, webhook, read model, log, URL, exportação, BI, auditoria, relatório, configuração e tela.
- `raw_secret_allowed` deve ser sempre `never`.
- Todo segredo deve ter owner_module, finalidade, escopo, política de acesso, rotação, revogação, expiração quando aplicável, auditoria e comportamento fail-closed.
- SecretReference não é banco compartilhado, não é cofre concreto, não é atalho para recuperar segredo bruto e não transfere domínio entre módulos.
- Módulo dono usa o segredo dentro de seu próprio limite autorizado. Consumidor externo ou módulo consumidor recebe referência, resultado ou status, nunca segredo.
- Eventos sobre criação, rotação, revogação, expiração, falha, suspeita de vazamento ou quarentena de segredo devem usar EventEnvelope v1.
- Evidências criptografadas, assinadas ou exportadas podem referenciar SecretReference, mas EvidenceReference continua sendo a referência da prova.
- Webhooks externos exigem assinatura e rotação de segredo por SecretReference.
- Integrações externas, conectores, gateways, dispositivos, certificados, chaves, client secrets e credenciais de provedor devem usar SecretReference.
- A DEC-194 foi consolidada nesta etapa.

Resultado:

O SecretReference v1 passa a ser a blindagem oficial contra vazamento de tokens, chaves, certificados, credenciais, client secrets, assinaturas e material criptográfico no NoduOS.

---

## 1. Objetivo do SecretReference v1

O `SecretReference v1` define como o NoduOS referencia segredos sem transportar segredo bruto.

Ele existe para impedir que senhas, tokens, chaves privadas, certificados sensíveis, credenciais de gateway, credenciais de dispositivo, credenciais de conector, segredos de webhook, assinaturas, client secrets, material criptográfico e credenciais de provedor atravessem contratos públicos, eventos, comandos, logs, URLs, relatórios, BI, exportações ou read models.

O objetivo não é escolher um cofre, provedor, banco, endpoint, linguagem, framework, fila, tela ou implementação. O objetivo é definir a regra conceitual obrigatória: todo segredo deve ser tratado por referência segura, com dono, escopo, finalidade, política, rotação, revogação, auditoria e fail-closed.

Regra curta:

SecretReference aponta para o segredo autorizado. Ele nunca carrega o segredo.

---

## 2. Escopo desta versão

Esta versão cobre:

- senha técnica;
- token de API;
- token de sessão técnica;
- refresh token técnico;
- access token de provedor;
- client secret;
- segredo de webhook;
- chave privada;
- chave simétrica;
- material criptográfico;
- certificado sensível;
- credencial de gateway;
- credencial de tunnel;
- credencial de dispositivo;
- segredo de pareamento;
- credencial de conector;
- credencial de marketplace connector;
- credencial de provedor externo;
- assinatura de webhook;
- segredo de assinatura de evento externo;
- segredo de canal de notificação;
- segredo de domínio customizado;
- segredo usado para criptografia, assinatura, verificação, autenticação, integração ou transporte seguro.

Fora do escopo:

- banco de dados;
- migration;
- endpoint final;
- tela;
- código;
- linguagem;
- framework;
- SDK;
- vault concreto;
- provedor definitivo;
- algoritmo definitivo;
- escolha de KMS, HSM, cloud, cofre local ou fabricante;
- implementação de rotação;
- implementação de criptografia;
- gestão operacional final de incidentes;
- política jurídica detalhada de LGPD.

---

## 3. Definição oficial de SecretReference v1

`SecretReference v1` é o contrato conceitual transversal que representa um segredo por referência segura, auditável e escopada, sem transportar o valor bruto do segredo.

Ele pode ser usado por contratos, comandos, eventos, webhooks, integrações, read models autorizados, relatórios técnicos, auditoria, suporte, diagnósticos e exportações apenas como referência controlada.

Ele não é:

- segredo bruto;
- cofre concreto;
- banco compartilhado;
- tabela global de credenciais;
- payload de configuração;
- token mascarado para reuso;
- senha parcial;
- URL assinada com segredo exposto;
- hash usável como segredo;
- autorização automática;
- permissão operacional;
- atalho para módulo consumidor ler segredo de outro módulo.

Regra absoluta:

Nenhum contrato do NoduOS deve carregar segredo bruto quando SecretReference bastar. Para segredos, SecretReference sempre basta como contrato público.

---

## 4. Princípios globais

1. Segredo bruto nunca trafega.
2. Segredo bruto nunca é exibido.
3. Segredo bruto nunca é logado.
4. Segredo bruto nunca entra em evento.
5. Segredo bruto nunca entra em comando público.
6. Segredo bruto nunca entra em webhook.
7. Segredo bruto nunca entra em read model.
8. Segredo bruto nunca entra em BI.
9. Segredo bruto nunca entra em exportação.
10. Segredo bruto nunca entra em auditoria.
11. Segredo bruto nunca entra em URL.
12. Segredo bruto nunca entra em mensagem de erro.
13. Segredo bruto nunca entra em relatório.
14. Segredo bruto nunca entra em configuração distribuída.
15. Segredo bruto nunca é recuperado por suporte humano.
16. Todo segredo possui dono claro.
17. Todo segredo possui finalidade clara.
18. Todo segredo possui escopo claro.
19. Todo segredo possui política de acesso.
20. Todo segredo possui política de rotação.
21. Todo segredo possui política de revogação.
22. Todo segredo possui política de expiração quando aplicável.
23. Todo segredo possui auditoria.
24. Toda falha de segredo crítico é fail-closed.
25. SecretReference não transfere domínio.

Frase operacional:

Quem precisa executar pede autorização. Quem é dono resolve internamente. Quem consome recebe resultado, nunca segredo.

---

## 5. Classificação oficial de segredos

| Tipo de segredo | Sensibilidade | Exemplo conceitual | Regra oficial |
|---|---:|---|---|
| Senha técnica | Crítico | senha de API técnica, senha de gateway | SecretReference obrigatório |
| Token de API | Crítico | token de provedor externo | SecretReference obrigatório |
| Refresh token | Crítico | renovação de acesso a provedor | SecretReference obrigatório |
| Client secret | Crítico | segredo de aplicação externa | SecretReference obrigatório |
| Chave privada | Crítico | assinatura, TLS, integração | SecretReference obrigatório |
| Chave simétrica | Crítico | criptografia de payload ou evidência | SecretReference obrigatório |
| Material criptográfico | Crítico | chave, seed, segredo derivado | SecretReference obrigatório |
| Certificado sensível | Crítico | certificado com chave privada ou cadeia sensível | SecretReference obrigatório |
| Certificado público | Restrito ou sensível | certificado público sem chave privada | CertificateReference ou FileReference controlado |
| Segredo de webhook | Crítico | assinatura HMAC ou equivalente | SecretReference obrigatório |
| Assinatura recebida | Sensível | assinatura de evento externo | SignatureReference ou metadado verificado, sem segredo |
| Credencial de gateway | Crítico | tunnel, VPN, agente local | SecretReference obrigatório |
| Credencial de dispositivo | Crítico | usuário técnico, pareamento, token local | SecretReference obrigatório |
| Credencial de conector | Crítico | connector OAuth, API key, secret | SecretReference obrigatório |
| Credencial de notificação | Crítico | token de canal, chave de provedor | SecretReference obrigatório |
| Segredo de domínio customizado | Crítico | chave privada de domínio white-label | SecretReference obrigatório |
| Token de suporte remoto | Crítico | sessão controlada de suporte | SecretReference obrigatório, expiração curta |

---

## 6. Campos obrigatórios do SecretReference v1

Todos os campos abaixo compõem a moldura conceitual oficial. Campos marcados como condicionais são obrigatórios quando a condição ocorrer.

| Campo | Regra oficial |
|---|---|
| `secret_reference_id` | Identificador público da referência. Não pode ser o ID bruto do cofre nem conter segredo. |
| `contract_id` | Contrato público que rege a referência. Padrão transversal: `NODUOS.TRANSVERSAL.SECRET_REFERENCE.v1`. |
| `contract_version` | Versão do contrato. Nesta etapa: `v1`. |
| `reference_version` | Versão da referência, não do segredo bruto. |
| `owner_module` | Módulo dono da finalidade do segredo. Obrigatório. |
| `custody_module` | Módulo ou camada responsável pela custódia conceitual do segredo, sem escolher provedor concreto. Normalmente Segurança e LGPD ou Core Security, conforme política. |
| `requesting_module` | Módulo que solicitou criação, uso, rotação ou revogação, quando aplicável. |
| `allowed_consumer_modules` | Módulos autorizados a usar a referência por contrato, sem acesso ao bruto. |
| `tenant_id` | Obrigatório para segredo de tenant, parceiro, organização, gateway, dispositivo, conector, webhook, white-label ou provedor contextual. |
| `context_id` | Obrigatório quando o segredo pertence a contexto operacional. |
| `resource_reference` | Recurso associado ao segredo, quando aplicável. Exemplo: gateway, dispositivo, conector, webhook endpoint, domínio, provedor. |
| `purpose` | Finalidade específica. Proibido finalidade genérica como “uso interno”. |
| `scope` | Escopo de uso: tenant, contexto, recurso, ação, módulo, provedor, ambiente lógico, janela temporal. |
| `secret_type` | Categoria do segredo: token, chave, certificado, credencial, webhook_secret, client_secret, material criptográfico etc. |
| `sensitivity_level` | Sempre `Crítico`, salvo referência a metadado público de certificado sem chave privada. |
| `raw_secret_allowed` | Sempre `never`. |
| `storage_reference` | Referência abstrata ao local seguro de custódia. Não deve conter URI com segredo, caminho interno sensível ou provedor obrigatório. |
| `vault_provider_reference` | Referência abstrata ao provedor/camada de custódia. Não define tecnologia final. |
| `access_policy_reference` | Política de quem pode solicitar uso da referência. Obrigatória. |
| `resolution_policy_reference` | Política de resolução interna do segredo pelo módulo dono ou serviço autorizado. Obrigatória. |
| `rotation_policy_reference` | Política de rotação. Obrigatória. |
| `revocation_policy_reference` | Política de revogação. Obrigatória. |
| `expiration_policy_reference` | Política de expiração quando aplicável. Obrigatória para token, webhook, suporte remoto, conector e credencial temporária. |
| `audit_policy_reference` | Política de auditoria. Obrigatória. |
| `security_policy_reference` | Política de segurança aplicável. Obrigatória. |
| `lgpd_policy_reference` | Obrigatória quando o segredo permite acesso a dados pessoais, imagem, evidência, visitante, financeiro, suporte, logs ou exportação. |
| `created_at` | Quando a referência foi criada. |
| `created_by_actor_reference` | Ator, serviço ou fluxo autorizado que criou a referência. |
| `last_rotated_at` | Obrigatório quando já houve rotação. |
| `next_rotation_due_at` | Obrigatório quando a política determinar rotação periódica. |
| `expires_at` | Obrigatório para segredo temporário ou com validade. |
| `revoked_at` | Obrigatório quando revogado. |
| `revocation_reason_code` | Motivo minimizado quando revogado. Não pode conter segredo. |
| `lifecycle_state` | Estado atual da referência. |
| `authorization_decision_reference` | Obrigatória para criação, rotação, revogação, resolução, exportação de metadado sensível ou alteração crítica. |
| `correlation_id` | Obrigatório para rastrear o fluxo. |
| `audit_reference` | Obrigatório para trilha auditável. |
| `integrity_reference` | Obrigatório quando a referência exigir verificação de integridade sem expor material bruto. |
| `failure_policy` | Comportamento em falha. Para segredo crítico, sempre fail-closed. |
| `no_domain_transfer` | Sempre `true`. |
| `no_shared_database` | Sempre `true`. |

---

## 7. Campos opcionais controlados

Campos opcionais podem existir apenas para governança, diagnóstico seguro e compatibilidade. Eles nunca podem revelar material secreto, facilitar ataque, reduzir escopo ou substituir política.

| Campo opcional | Quando usar | Limite obrigatório |
|---|---|---|
| `provider_reference` | Integração externa | Referência pública/minimizada, sem segredo. |
| `external_account_reference` | Conta externa vinculada | Sem e-mail/token bruto quando máscara bastar. |
| `credential_family` | Agrupar tipo de credencial | Não indicar valor, prefixo, algoritmo explorável ou segredo parcial. |
| `key_usage` | Indicar uso permitido | Exemplo: assinar, verificar, criptografar, autenticar. Não concede autorização sozinho. |
| `rotation_window_reference` | Janela de coexistência entre versão antiga e nova | Sem expor versões internas sensíveis. |
| `previous_secret_reference_id` | Rotação controlada | Permitido apenas como referência, não encadeamento infinito público. |
| `replacement_secret_reference_id` | Substituição controlada | Permitido quando política exigir rastreabilidade. |
| `compromise_case_reference` | Incidente de segurança | Apenas referência ao caso, sem conteúdo do vazamento. |
| `support_case_reference` | Suporte autorizado | Escopo temporário e auditável. |
| `webhook_endpoint_reference` | Webhook assinado | Sem segredo de assinatura. |
| `gateway_reference` | Credencial de gateway | ResourceReference obrigatória. |
| `device_reference` | Credencial de dispositivo | ResourceReference obrigatória. |
| `connector_reference` | Credencial de conector | ResourceReference obrigatória. |
| `certificate_public_metadata` | Certificado público | Apenas metadado público seguro. Chave privada nunca. |
| `fingerprint_reference` | Integridade ou inventário | Deve ser referência não reversível e aprovada por política. |

---

## 8. Campos e conteúdos proibidos

| Proibido | Motivo | Correção oficial |
|---|---|---|
| senha bruta | Segredo crítico | SecretReference |
| token bruto | Segredo reutilizável | SecretReference |
| refresh token bruto | Segredo crítico | SecretReference |
| client secret bruto | Segredo crítico | SecretReference |
| chave privada | Material criptográfico crítico | SecretReference |
| chave simétrica | Material criptográfico crítico | SecretReference |
| seed, salt sensível ou material derivador | Pode permitir derivação de segredo | SecretReference ou política criptográfica interna |
| certificado com chave privada | Segredo crítico | SecretReference ou CertificateReference com chave separada |
| segredo de webhook | Permite falsificação | SecretReference |
| assinatura interna com segredo | Pode permitir replay/fraude | SignatureReference ou verification_result |
| credencial de gateway bruta | Acesso à rede física | SecretReference |
| credencial de dispositivo bruta | Controle de equipamento físico | SecretReference |
| credencial de conector bruta | Acesso a provedor externo | SecretReference |
| segredo em URL | Vaza em logs, histórico e proxy | SecretReference e payload mínimo |
| segredo em query string | Vaza em logs | SecretReference |
| segredo em header logado | Vaza em observabilidade | Redação/mascaramento e SecretReference |
| segredo em stack trace | Exposição técnica | ErrorReference mascarado |
| segredo em read model | Banco compartilhado perigoso | SecretReference apenas |
| segredo em BI | Exposição analítica | Referência, agregação ou bloqueio |
| segredo em exportação | Exfiltração | Bloquear ou exportar apenas metadado autorizado |
| segredo em auditoria | Auditoria vira vazamento | AuditReference sem valor bruto |
| segredo em relatório | Exposição operacional | Metadado minimizado |
| segredo parcial reutilizável | Facilita ataque | Não exibir prefixo/sufixo útil |
| hash que funcione como segredo | Pode virar token substituto | IntegrityReference seguro |
| payload original de provedor com segredo | Vazamento de integração | Normalizar e minimizar |
| configuração completa contendo segredo | Exposição operacional | ConfigReference + SecretReference |
| arquivo `.env` ou equivalente | Configuração sensível bruta | SecretReference e política de implantação futura |

Regra de proteção:

Máscara visual não transforma segredo em dado seguro. Se o valor mascarado puder ser copiado, reaproveitado, inferido ou usado em ataque, ele continua proibido.

---

## 9. Relação com EventEnvelope v1

Eventos que mencionam segredo devem usar EventEnvelope v1 e transportar apenas metadados mínimos e referências.

Eventos permitidos:

- `SecretReferenceCreated`
- `SecretReferenceRotationRequested`
- `SecretReferenceRotated`
- `SecretReferenceRotationFailed`
- `SecretReferenceRevocationRequested`
- `SecretReferenceRevoked`
- `SecretReferenceExpired`
- `SecretReferenceAccessDenied`
- `SecretReferenceAccessUsed`
- `SecretReferenceQuarantined`
- `SecretLeakSuspected`
- `SecretReferenceReprocessRequested`
- `SecretReferenceReprocessCompleted`
- `SecretReferencePolicyChanged`

Campos obrigatórios no evento:

- `event_id`
- `event_name`
- `event_type`
- `contract_id`
- `contract_version`
- `source_module`
- `owner_module`
- `producer_module`
- `tenant_id`
- `context_id`
- `actor_reference`
- `resource_reference`
- `secret_reference`
- `sensitivity_level`
- `purpose`
- `policy_references`
- `authorization_decision_reference`, quando derivado de ação sensível
- `correlation_id`
- `causation_id`, quando derivado
- `audit_reference`
- `payload_minimized = true`

Proibido no evento:

- segredo bruto;
- token bruto;
- chave;
- certificado privado;
- header bruto;
- URL assinada com segredo;
- configuração completa;
- payload original de provedor com segredo;
- erro técnico contendo segredo.

Regra curta:

Evento comunica o ciclo de vida da referência. O segredo permanece imóvel, protegido e fora do barramento.

---

## 10. Relação com EvidenceReference v1

EvidenceReference referencia prova. SecretReference referencia segredo.

Quando uma evidência for criptografada, assinada, exportada, lacrada ou verificada por material criptográfico, a EvidenceReference pode apontar para uma SecretReference, mas nunca incorpora o segredo.

Exemplos:

| Cenário | Referência correta | Regra |
|---|---|---|
| Clip de câmera criptografado | EvidenceReference + SecretReference da chave | Vídeo não carrega chave |
| Exportação probatória assinada | EvidenceReference + SecretReference de assinatura | Exportação não carrega chave privada |
| Hash de integridade | EvidenceReference + IntegrityReference | Hash não vira segredo nem substitui cadeia de custódia |
| Documento probatório protegido | EvidenceReference + SecretReference de criptografia | Documento não contém material criptográfico |
| Incidente de vazamento | EvidenceReference do caso + SecretReference comprometida | Auditoria referencia, não expõe segredo |

Regra de cadeia:

EvidenceReference preserva prova. SecretReference protege o material secreto usado para proteger, assinar, acessar ou verificar a prova.

---

## 11. Relação com ResourceReference

ResourceReference identifica o recurso. SecretReference identifica o segredo associado ao recurso.

Exemplos:

- Gateway é ResourceReference. Credencial do tunnel é SecretReference.
- Dispositivo é ResourceReference. Token de pareamento é SecretReference.
- WebhookEndpoint é ResourceReference. Segredo de assinatura é SecretReference.
- MarketplaceConnector é ResourceReference. Client secret do conector é SecretReference.
- WhiteLabelDomain é ResourceReference. Chave privada do certificado é SecretReference.
- NotificationChannel é ResourceReference. Token de provedor é SecretReference.

Regra:

A existência de ResourceReference não autoriza leitura de SecretReference. A existência de SecretReference não autoriza ação no ResourceReference. A ação sensível exige AuthorizationDecision.

---

## 12. Relação com AuthorizationDecision

AuthorizationDecision é emitida pelo Core Platform. SecretReference não autoriza nada sozinho.

AuthorizationDecision é obrigatória para:

- criar SecretReference;
- alterar escopo;
- alterar finalidade;
- alterar política de acesso;
- resolver uso interno de segredo;
- rotacionar segredo;
- revogar segredo;
- restaurar referência;
- reprocessar operação sensível dependente de segredo;
- vincular segredo a gateway, dispositivo, conector, webhook, domínio ou provedor;
- exportar metadado sensível de segredo;
- consultar histórico sensível de ciclo de vida;
- abrir caso de suspeita de vazamento;
- executar suporte remoto que dependa de segredo temporário.

Regras:

- AuthorizationDecision deve ter escopo específico.
- AuthorizationDecision expirada não pode ser reaproveitada.
- AuthorizationDecision para visualizar metadado não autoriza rotação.
- AuthorizationDecision para rotação não autoriza leitura bruta.
- AuthorizationDecision para suporte não autoriza exibição do segredo.
- Módulo comercial não emite decisão final.
- Consumidor de evento não ganha permissão por ter recebido evento.

---

## 13. Ciclo de vida oficial

| Estado | Definição | Pode ser usado? | Regra |
|---|---|---:|---|
| `draft` | Referência iniciada, ainda não ativa | Não | Não pode ser consumida |
| `active` | Referência válida conforme política | Sim | Uso apenas por escopo autorizado |
| `pending_rotation` | Rotação solicitada | Condicional | Janela controlada |
| `rotated` | Substituída por nova referência | Não para usos novos | Pode existir para auditoria |
| `pending_revocation` | Revogação solicitada | Condicional | Operações críticas pausam ou falham fechado |
| `revoked` | Revogada | Não | Uso bloqueado |
| `expired` | Vencida | Não | Uso bloqueado |
| `quarantined` | Isolada por risco | Não | Requer análise e decisão |
| `compromised` | Comprometida ou suspeita forte | Não | Revogação e incidente |
| `archived` | Mantida só por auditoria | Não | Sem resolução operacional |
| `deleted_by_policy` | Eliminada conforme política | Não | Apenas trilha permitida permanece |

---

## 14. Rotação

Rotação é o processo de substituir um segredo por outro sem expor o valor bruto.

Regras obrigatórias:

- Toda SecretReference crítica deve possuir `rotation_policy_reference`.
- Rotação deve ser idempotente quando solicitada por comando crítico.
- Rotação deve gerar evento envelopado e auditoria.
- Rotação não pode publicar segredo novo.
- Rotação pode criar uma nova `secret_reference_id` ou nova `reference_version`, conforme política futura.
- Janela de coexistência deve ser curta, auditada e escopada.
- Consumidores devem ser atualizados por referência ou resultado, nunca por segredo.
- Falha de rotação em segredo crítico deve falhar fechado ou degradar com segurança conforme política.
- Rotação de segredo comprometido deve revogar a referência anterior e abrir caso de segurança.

Tipos de rotação:

| Tipo | Uso | Regra |
|---|---|---|
| Programada | Rotação periódica por política | Exige `next_rotation_due_at` |
| Manual autorizada | Solicitação de administrador autorizado | Exige AuthorizationDecision |
| Por expiração | Token ou certificado próximo do vencimento | Deve ocorrer antes do vencimento quando possível |
| Por incidente | Suspeita ou confirmação de vazamento | Revogação imediata da referência antiga |
| Por troca de provedor | Mudança de integração | Não expõe segredo antigo nem novo |
| Por troca de dispositivo/gateway | Substituição física | Vincular nova ResourceReference conforme contrato |

---

## 15. Revogação

Revogação torna a SecretReference inutilizável para novos usos.

Regras:

- Revogação de segredo crítico deve ser imediata quando houver comprometimento.
- Revogação deve gerar audit_reference.
- Revogação deve gerar evento EventEnvelope v1 com payload mínimo.
- Revogação não apaga automaticamente auditoria.
- Revogação não deve quebrar retenção legal ou cadeia de custódia.
- Revogação pode gerar reprocessamento, reconexão, reautorização ou alerta operacional conforme módulo dono.
- Referência revogada não pode ser resolvida por consumidor.
- Tentativa de uso de referência revogada deve gerar acesso negado e, se sensível, evento de segurança.

Motivos minimizados permitidos:

- `policy_revocation`
- `manual_revocation`
- `rotation_completed`
- `compromise_suspected`
- `compromise_confirmed`
- `provider_disconnected`
- `tenant_scope_removed`
- `context_scope_removed`
- `resource_decommissioned`
- `license_or_entitlement_removed`
- `contract_deprecated`

---

## 16. Expiração

Expiração limita a validade temporal de um segredo.

Regras:

- Tokens temporários devem ter `expires_at`.
- Segredos de suporte remoto devem ter expiração curta.
- Segredos de webhook devem ter política de rotação e podem ter expiração conforme contrato.
- Certificados devem ter expiração compatível com a cadeia de confiança.
- Expiração não substitui revogação em caso de vazamento.
- Segredo expirado falha fechado.
- Eventos de expiração devem carregar apenas referência e metadados mínimos.

---

## 17. Auditoria

Auditoria de SecretReference registra o ciclo de vida da referência e do uso autorizado sem registrar o segredo.

Eventos auditáveis obrigatórios:

- criação da referência;
- alteração de política;
- alteração de escopo;
- resolução operacional interna;
- tentativa de uso negada;
- rotação solicitada;
- rotação concluída;
- rotação falhada;
- revogação solicitada;
- revogação concluída;
- expiração;
- quarentena;
- suspeita de vazamento;
- reprocessamento;
- vinculação a ResourceReference;
- remoção de vínculo;
- exportação de metadados autorizados;
- leitura de metadados sensíveis.

Campos mínimos da auditoria:

- `audit_reference`
- `tenant_id`
- `context_id`
- `actor_reference`
- `service_actor`, quando aplicável
- `owner_module`
- `requesting_module`
- `resource_reference`
- `secret_reference_id`
- `action`
- `decision_reference`
- `purpose`
- `policy_references`
- `result`
- `reason_code` minimizado
- `occurred_at`
- `correlation_id`

Proibido na auditoria:

- segredo bruto;
- token mascarado reutilizável;
- header completo;
- URL com assinatura;
- stack trace com segredo;
- payload de provedor contendo segredo;
- arquivo de configuração sensível.

---

## 18. Acesso e resolução interna

SecretReference pode ser usada por serviços autorizados, mas não deve ser aberta para leitura humana ou transporte público.

Regras:

- Usuário humano não visualiza segredo bruto.
- Suporte não visualiza segredo bruto.
- Master não visualiza segredo bruto.
- Parceiro não visualiza segredo bruto.
- Organização não visualiza segredo bruto.
- BI não visualiza segredo bruto.
- Auditoria não visualiza segredo bruto.
- Serviço autorizado pode resolver o segredo somente dentro do limite do módulo dono e da política aplicável.
- Resolução interna deve ser escopada, temporária, auditada e vinculada à finalidade.
- Resultado da operação pode ser publicado, mas segredo não.

Exemplo correto:

1. Marketplace solicita instalação de conector.
2. Core emite AuthorizationDecision.
3. Marketplace registra SecretReference do client secret.
4. Conector usa a referência internamente para autenticar com provedor.
5. Evento `ConnectorInstallationCompleted` informa status e secret_reference_id, nunca client secret.

Exemplo incorreto:

1. Marketplace publica evento com `client_secret` no payload.
2. BI consome e armazena em read model.
3. Suporte exporta log.

Correção: rejeição, quarentena, revogação da referência, abertura de incidente e rotação.

---

## 19. Segredo de webhook

Webhooks externos exigem assinatura, rotação e revogação por SecretReference.

Regras:

- Cada webhook externo deve possuir SecretReference própria ou escopo compartilhado autorizado por política.
- Segredo de assinatura não entra no payload entregue.
- Evento entregue a webhook pode carregar `signature_reference`, `webhook_delivery_reference` e `secret_reference_id`, mas nunca o segredo.
- Rotação de segredo de webhook deve prever janela controlada entre segredo anterior e novo, quando necessário.
- A janela de rotação deve ser auditável e expirar.
- Falha de validação de assinatura em webhook recebido deve gerar evento externo recebido como não confiável ou quarentena.
- Webhook externo sem SecretReference válida deve falhar fechado.
- Webhook externo revogado não deve receber evento sensível.

Campos mínimos de webhook seguro:

- `webhook_endpoint_reference`
- `secret_reference_id`
- `signature_policy_reference`
- `rotation_policy_reference`
- `revocation_policy_reference`
- `retry_policy_reference`
- `dead_letter_policy_reference`
- `third_party_policy_reference`
- `audit_reference`

---

## 20. Credenciais de Gateway Local / Mikrotik / Tunnel

Credenciais de gateway são críticas porque podem abrir caminho para rede local, tunnel, rotas, dispositivos e mundo físico.

Regras:

- Gateway Local / Mikrotik / Tunnel é owner_module das credenciais técnicas de conectividade.
- Parceiro pode solicitar cadastro, configuração ou troca por fluxo autorizado, mas não se torna dono do segredo.
- Organização pode visualizar status autorizado, nunca credencial.
- Dispositivos e módulos operacionais podem consumir status ou capacidade, não credencial bruta.
- Credencial de tunnel, chave de agente, token de pareamento, senha técnica, certificado ou chave privada de gateway devem usar SecretReference.
- Diagnóstico técnico não pode expor segredo.
- Logs do gateway devem mascarar qualquer material sensível.
- Gateway offline por segredo inválido deve falhar fechado para ações sensíveis.

Eventos possíveis:

- `GatewaySecretReferenceCreated`
- `GatewayCredentialRotationRequested`
- `GatewayCredentialRotated`
- `GatewayCredentialRevoked`
- `GatewayCredentialUseDenied`
- `GatewayCredentialQuarantined`

---

## 21. Credenciais de Dispositivos

Credenciais de dispositivo controlam pareamento, comunicação, comando, diagnóstico e integração física.

Regras:

- Dispositivos é owner_module das credenciais técnicas do equipamento físico quando a credencial pertence ao cadastro técnico do dispositivo.
- Controle de Acesso, Câmeras / VMS ou Alarmes podem ter segredo operacional próprio quando o segredo pertence à execução específica do módulo.
- DeviceCredentialReference não é DeviceRecord.
- DeviceRecord pode apontar para SecretReference, mas não contém segredo.
- Segredo de pareamento deve expirar.
- Segredo de dispositivo substituído deve ser revogado.
- Dispositivo comprometido deve acionar quarentena, revogação e rotação.
- Diagnóstico não pode retornar credencial.

Exemplos:

| Recurso | Owner provável | Referência |
|---|---|---|
| token de pareamento de equipamento | Dispositivos | SecretReference |
| senha técnica de câmera | Dispositivos ou Câmeras / VMS conforme domínio | SecretReference |
| credencial de leitor facial | Dispositivos ou Controle de Acesso conforme uso | SecretReference |
| chave de central de alarme | Dispositivos ou Alarmes conforme domínio | SecretReference |
| credencial de relé/porta | Dispositivos ou Controle de Acesso conforme domínio | SecretReference |

---

## 22. Credenciais de conector e Marketplace

Credenciais de conector permitem comunicação com provedores externos.

Regras:

- Marketplace de Integrações governa instalação, publicação, suspensão e saúde do conector.
- O módulo dono da finalidade governa o uso do recurso do provedor.
- Client secret, API key, refresh token, private key, webhook secret e provider token do conector devem usar SecretReference.
- Conector instalado não dá acesso a todos os módulos.
- Cada uso deve respeitar tenant, contexto, escopo, licença, feature flag, política e AuthorizationDecision.
- Falha de segredo do conector deve bloquear integração sensível e publicar falha minimizada.
- Payload original de provedor não confiável deve ser normalizado antes de virar evento interno.

Estados de conector relacionados a segredo:

- `credential_pending`
- `credential_active`
- `credential_rotation_required`
- `credential_expired`
- `credential_revoked`
- `credential_quarantined`
- `credential_compromised`

---

## 23. Integrações externas e provedores

Integrações externas são não confiáveis até validação, escopo e normalização.

Regras:

- Credencial de provedor externo sempre usa SecretReference.
- Evento externo recebido não deve transportar segredo para dentro do NoduOS.
- Payload externo com segredo deve ser rejeitado, minimizado ou quarentenado conforme política.
- Assinatura externa deve ser verificada sem expor segredo.
- Falha de verificação gera status mínimo, não stack trace.
- Integração externa não pode acessar segredo de outro tenant ou contexto.
- Revogação de provedor deve revogar ou invalidar as SecretReferences associadas.

---

## 24. Certificados, domínios e White-label

White-label pode envolver domínio, certificado, identidade visual, templates e publicação de marca.

Regras:

- White-label não guarda chave privada bruta em tema, template, domínio ou asset.
- Certificado público pode ser referenciado por CertificateReference quando não contiver chave privada.
- Chave privada de domínio customizado exige SecretReference.
- Publicação de domínio, renovação, rollback e revogação de certificado devem ser auditáveis.
- BrandPublishingResultRecorded não transporta certificado privado nem segredo.
- Parceiro e Organização podem ver status e metadados permitidos, não segredo.

---

## 25. Notificações e canais externos

Canais de e-mail, SMS, WhatsApp, push ou provedor externo podem exigir tokens e chaves.

Regras:

- Notificações é owner_module do canal e da entrega, quando o segredo pertence ao provedor de notificação.
- Marketplace pode ser owner do conector quando a entrega ocorre por conector instalado.
- Token de canal, credencial SMTP, segredo de provedor, API key e webhook de retorno usam SecretReference.
- Evento de notificação não carrega credencial.
- Relatório de entrega não carrega credencial.
- Falha de notificação não exibe segredo em erro.

---

## 26. Suporte remoto

Suporte remoto pode exigir token temporário, sessão controlada ou credencial efêmera.

Regras:

- Suporte e Operação não visualiza segredo bruto.
- Token de sessão remota deve ser SecretReference temporária.
- `expires_at` é obrigatório.
- Escopo deve ser mínimo.
- Auditoria deve registrar ator, motivo, tenant, contexto, recurso, duração e resultado.
- Sessão encerrada deve revogar ou expirar a referência.
- Segredo de suporte não pode ser reutilizado.

---

## 27. BI, relatórios e exportações

BI e relatórios não podem armazenar nem exportar segredos.

Regras:

- BI pode exibir contagem, status, idade, vencimento, risco e conformidade de SecretReferences, conforme permissão.
- BI não pode exportar `storage_reference` sensível, token, segredo, chave, payload original, URL assinada ou configuração.
- Exportação sensível de metadados de segredo exige finalidade, AuthorizationDecision, auditoria, retenção e máscara.
- Relatórios de segurança devem usar agregação e referência.
- Auditoria avançada pode investigar ciclo de vida por referência, nunca valor bruto.

---

## 28. Quarentena

Quarentena é obrigatória quando houver risco de segredo exposto, inválido, fora de escopo, sem política, sem tenant/contexto ou vindo de origem não confiável.

Causas de quarentena:

- payload contém segredo bruto;
- evento contém token, chave ou certificado privado;
- webhook enviado ou recebido contém segredo indevido;
- log contém segredo;
- URL contém segredo;
- provider payload contém credencial;
- SecretReference sem owner_module;
- SecretReference sem purpose;
- SecretReference sem scope;
- SecretReference sem access_policy;
- SecretReference sem rotation_policy;
- SecretReference sem revocation_policy;
- SecretReference sem audit_policy;
- uso fora do tenant/contexto;
- uso por módulo não autorizado;
- falha de assinatura;
- suspeita de vazamento;
- referência expirada, revogada ou comprometida.

Regras de quarentena:

- O evento de quarentena não transporta o segredo vazado.
- A evidência do incidente deve usar EvidenceReference, com cadeia de custódia e acesso restrito.
- A SecretReference afetada deve ser bloqueada, revogada ou colocada em `quarantined` conforme política.
- Reprocessamento só ocorre após correção, nova AuthorizationDecision e auditoria.
- Incidente crítico deve acionar Segurança e LGPD e Auditoria e Compliance conforme contrato.

---

## 29. Reprocessamento seguro

Reprocessamento de fluxo com segredo só pode ocorrer por referência.

Regras:

- Não reprocessar payload bruto que continha segredo.
- Não reenviar evento com segredo removido sem registrar correção.
- Reprocessamento exige `correlation_id` original ou novo fluxo administrativo explicitamente auditado.
- Reprocessamento crítico exige AuthorizationDecision.
- SecretReference expirada ou revogada não pode ser usada no reprocessamento.
- Se o problema foi vazamento, reprocessar apenas após rotação ou revogação.
- Consumidor deve usar inbox/deduplicação quando o reprocessamento gerar novo evento.
- Resultado deve ser auditado.

---

## 30. Falhas e comportamento fail-closed

Falhas envolvendo segredos críticos devem bloquear a operação sensível, não liberar por conveniência.

| Falha | Comportamento oficial |
|---|---|
| SecretReference ausente | Negar ou pausar operação sensível |
| owner_module ausente | Rejeitar ou quarentenar |
| purpose ausente | Rejeitar |
| scope ausente | Rejeitar |
| access_policy ausente | Rejeitar |
| rotation_policy ausente | Bloquear aprovação da referência |
| revocation_policy ausente | Bloquear aprovação da referência |
| audit_policy ausente | Rejeitar |
| tenant/context inválido | Rejeitar ou quarentenar |
| AuthorizationDecision ausente em ação crítica | Negar |
| SecretReference expirada | Negar |
| SecretReference revogada | Negar e auditar tentativa |
| SecretReference comprometida | Negar, revogar, abrir incidente |
| falha de vault/custódia abstrata | Falhar fechado em ação sensível |
| falha de assinatura externa | Tratar como externo não confiável |
| segredo bruto detectado | Quarentena, revogação/rotação, incidente |

---

## 31. Matriz transversal por módulo

| Módulo | Segredos possíveis | Owner_module da SecretReference | Regra principal |
|---|---|---|---|
| Core Platform | API client secret, sessão técnica, credencial de autenticação técnica, chaves internas estruturais | Core Platform | Core autoriza, não expõe segredo e não transfere domínio operacional |
| Segurança e LGPD | políticas criptográficas, referências de proteção, incidentes de segredo | Segurança e LGPD | Define política, não vira cofre bruto exposto |
| Auditoria e Compliance | referências de cadeia, investigação de vazamento, exportação controlada | Auditoria e Compliance quando o segredo for do processo de auditoria | Investiga por referência, nunca visualiza segredo bruto |
| Master | credenciais de integrações globais autorizadas, quando governança superior exigir | Master ou módulo dono da integração | Master governa limite, não acessa bruto |
| Parceiros | credenciais operacionais solicitadas para implantação | Módulo dono técnico, não Parceiros por padrão | Parceiro solicita ou conduz, módulo dono guarda e usa |
| Organizações | segredos de configuração local autorizada | Módulo dono do recurso | Organização visualiza status, não segredo |
| Pessoas e Clientes | credenciais pessoais operacionais quando permitidas, tokens consentidos externos | Pessoas e Clientes ou Core conforme natureza | Não confundir senha de login com perfil pessoal |
| Unidades, Blocos, Áreas e Ambientes | normalmente não deve possuir segredos | Módulo dono relacionado | Estrutura física não vira cofre |
| Herança e Permissões | políticas que influenciam uso de segredo | Herança e Permissões apenas para política, não valor | Política influencia, Core decide |
| Gateway Local / Mikrotik / Tunnel | tunnel secret, chave de agente, credencial VPN, certificado, senha técnica | Gateway Local / Mikrotik / Tunnel | Mundo físico protegido por referência crítica |
| Dispositivos | token de pareamento, credencial técnica, senha de equipamento, certificado | Dispositivos | DeviceRecord não contém segredo |
| Controle de Acesso | segredo de controladora, credencial física operacional, integração de leitor | Controle de Acesso quando ligado à execução de acesso | Acesso físico exige fail-closed |
| Câmeras / VMS | credencial de stream, RTSP, ONVIF, VMS, assinatura de clip | Câmeras / VMS | Vídeo e segredo não trafegam brutos |
| Alarmes | chave de central, token de painel, credencial de provedor | Alarmes | Evento de alarme não carrega segredo |
| Financeiro | credencial de PSP, token de pagamento, segredo de webhook financeiro | Financeiro | PCI e financeiro exigem referência e auditoria |
| Convites e Visitantes | segredo de QR, assinatura de convite, token temporário | Convites e Visitantes | QR/token temporário expira e não vira login |
| Tickets | tokens de anexos, integrações de helpdesk, suporte operacional | Tickets ou Suporte conforme domínio | Chamado não carrega segredo em comentário/log |
| Mural Informativo | geralmente não possui segredo, exceto integração de publicação | Módulo dono da integração | Conteúdo não mistura credencial |
| Reservas | assinatura de reserva, token temporário, integração externa | Reservas | Reserva não expõe segredo de confirmação |
| Relatórios / BI | credenciais analíticas autorizadas, quando existirem | BI para segredos do próprio BI | BI não consome nem exporta segredo de módulos |
| White-label | chave privada de domínio, certificado, credencial de DNS/provedor | White-label | Tema não carrega segredo |
| Notificações | API key de provedor, token de canal, SMTP, webhook callback | Notificações | Entrega não expõe credencial |
| Automações | segredo de conector usado em ação automatizada | Módulo dono do conector/recurso | Automação não resolve segredo fora de escopo |
| Marketplace de Integrações | client secret, API key, OAuth, token de conector | Marketplace de Integrações | Conector instalado não vira cofre compartilhado |
| Suporte e Operação | token temporário de suporte remoto, sessão controlada | Suporte e Operação | Sem visualização humana de segredo bruto |

---

## 32. Matriz de contratos e referências sugeridas

| Contract ID conceitual | Tipo | Owner | Sensibilidade | Referência obrigatória | Observação |
|---|---|---|---|---|---|
| `NODUOS.TRANSVERSAL.SECRET_REFERENCE.v1` | Contrato transversal | Transversal | Crítico | SecretReference | Referência oficial de segredo |
| `NODUOS.CORE.API_CLIENT_SECRET_REFERENCE.v1` | Contrato de segurança | Core Platform | Crítico | SecretReference | API clients sem segredo bruto |
| `NODUOS.GATEWAY.GATEWAY_CREDENTIAL_REFERENCE.v1` | Contrato de integração | Gateway | Crítico | SecretReference + ResourceReference | Gateway/tunnel |
| `NODUOS.DEVICE.DEVICE_CREDENTIAL_REFERENCE.v1` | Contrato de integração | Dispositivos | Crítico | SecretReference + ResourceReference | Equipamento físico |
| `NODUOS.ACCESS.ACCESS_CREDENTIAL_SECRET_REFERENCE.v1` | Contrato de segurança | Controle de Acesso | Crítico | SecretReference + ResourceReference | Acesso físico |
| `NODUOS.CAMERA.STREAM_CREDENTIAL_REFERENCE.v1` | Contrato de segurança | Câmeras / VMS | Crítico | SecretReference + ResourceReference | Stream/VMS |
| `NODUOS.ALARM.ALARM_PANEL_CREDENTIAL_REFERENCE.v1` | Contrato de segurança | Alarmes | Crítico | SecretReference + ResourceReference | Central/painel |
| `NODUOS.FINANCE.PROVIDER_SECRET_REFERENCE.v1` | Contrato de segurança | Financeiro | Crítico | SecretReference | PSP, webhook financeiro |
| `NODUOS.VISITOR.QR_SECRET_REFERENCE.v1` | Contrato de segurança | Convites e Visitantes | Crítico | SecretReference | QR/assinatura temporária |
| `NODUOS.WL.CERTIFICATE_SECRET_REFERENCE.v1` | Contrato de segurança | White-label | Crítico | SecretReference | Chave privada/certificado |
| `NODUOS.NOTIFICATION.CHANNEL_SECRET_REFERENCE.v1` | Contrato de segurança | Notificações | Crítico | SecretReference | Provedor de entrega |
| `NODUOS.MARKETPLACE.CONNECTOR_SECRET_REFERENCE.v1` | Contrato de integração | Marketplace | Crítico | SecretReference | Conector externo |
| `NODUOS.SUPPORT.REMOTE_SESSION_SECRET_REFERENCE.v1` | Contrato de suporte | Suporte e Operação | Crítico | SecretReference | Sessão remota temporária |
| `NODUOS.AUDIT.SECRET_INCIDENT_REFERENCE.v1` | Contrato de auditoria | Auditoria e Compliance | Crítico | SecretReference + EvidenceReference | Incidente de segredo |

Observação:

Os IDs acima são conceituais para orientar a matriz. A criação de contratos públicos independentes para cada caso pode ser detalhada futuramente sem alterar a regra transversal do SecretReference v1.

---

## 33. Anti-padrões proibidos

| Anti-padrão | Por que é proibido | Correção |
|---|---|---|
| `webhook_secret` no payload do webhook | Permite falsificação | SecretReference e assinatura |
| `device_password` no DeviceRecord | DeviceRecord vira cofre | SecretReference no módulo dono |
| token em URL de callback | Vaza em logs e histórico | SecretReference e assinatura controlada |
| credencial em read model operacional | Read model vira banco compartilhado | Status + referência |
| segredo em BI | Exposição analítica | Agregação e metadado autorizado |
| segredo em log de erro | Vazamento técnico | ErrorReference mascarado |
| rotação por evento com segredo novo | Evento vira transporte de segredo | Evento só informa referência nova |
| suporte copiando senha | Quebra de custódia | Sessão temporária escopada por referência |
| segredo compartilhado entre tenants | Vazamento multi-tenant | Escopo por tenant/contexto |
| conector acessando segredo de outro módulo | Acoplamento e bypass | Ação via contrato autorizado |
| certificado privado dentro do tema white-label | Tema vira cofre | SecretReference do certificado |
| QR temporário como segredo permanente | Reuso indevido | Expiração e revogação |
| hash público usado como token | Hash vira segredo | IntegrityReference controlado |
| AuthorizationDecision reaproveitada para ler segredo | Bypass de autorização | Nova decisão escopada |

---

## 34. Riscos tratados

| Risco | Tratamento oficial |
|---|---|
| Vazamento de segredo por evento | EventEnvelope v1 proíbe segredo bruto e exige quarentena |
| Log contendo token | ErrorReference mascarado e política de redação |
| BI virando cofre acidental | BI só recebe metadado agregado/autorizado |
| Parceiro vendo credencial de gateway | Parceiro solicita, Gateway guarda e usa |
| Organização vendo segredo de dispositivo | Organização vê status, não segredo |
| Suporte humano copiando senha | Sessão temporária por SecretReference, sem valor bruto |
| Webhook fraudável | Assinatura e SecretReference com rotação |
| Conector externo com excesso de escopo | Escopo mínimo, tenant/contexto e autorização |
| Rotação quebrando consumidor | Janela controlada, idempotência e eventos mínimos |
| Revogação sem trilha | AuditReference obrigatório |
| Segredo sem dono | Bloqueio de aprovação |
| Segredo sem finalidade | Bloqueio de aprovação |
| Segredo sem política | Fail-closed |
| Segredo comprometido | Quarentena, revogação, rotação, incidente |
| Payload original de provedor com segredo | Normalização, minimização ou quarentena |

---

## 35. Decisão consolidada para 03_DECISOES_OFICIAIS.md

### DEC-194: Detalhamento oficial do SecretReference v1

## Tema

Governança técnica de segredos, tokens, chaves, certificados, credenciais, assinaturas e material criptográfico por referência segura.

## Decisão

O NoduOS passa a adotar o `SecretReference v1` como padrão conceitual oficial para referenciar segredos sem transportar segredo bruto.

Todo segredo, token, chave, certificado sensível, credencial de gateway, credencial de dispositivo, credencial de conector, segredo de webhook, assinatura, client secret, material criptográfico e credencial de provedor deve ser tratado por referência segura, com owner_module, finalidade, escopo, política de acesso, rotação, revogação, expiração quando aplicável, auditoria, tenant/contexto quando aplicável e comportamento fail-closed.

`raw_secret_allowed` deve ser sempre `never` em contratos públicos, eventos, comandos, webhooks, read models, logs, URLs, exportações, BI, auditoria, relatórios e configurações.

SecretReference não é banco compartilhado, não é cofre concreto, não é endpoint de leitura de segredo, não transfere domínio e não autoriza ação operacional por si só.

## Motivo

Impedir vazamento de segredos, credenciais, tokens, chaves, certificados privados, material criptográfico e credenciais de integrações em contratos públicos, eventos, logs, webhooks, BI, relatórios, URLs, auditoria, suporte e exportações.

Também impedir que módulos consumidores usem SecretReference como atalho para acessar segredo bruto, invadir domínio alheio, burlar autorização do Core Platform ou criar dependência invisível entre módulos.

## Impacto

Todos os módulos que criarem, usarem, rotacionarem, revogarem, expirarem, auditarem, entregarem, validarem ou referenciarem segredos devem obedecer o SecretReference v1.

O Catálogo de Contratos Públicos, a Matriz Técnica de Permissões por Contrato, a Matriz Técnica de Dados Sensíveis por Contrato, o EventEnvelope v1 e o EvidenceReference v1 passam a ser aplicados em conjunto com o `10_DETALHAMENTO_SECRETREFERENCE_V1.md`.

Eventos relacionados a segredos devem usar EventEnvelope v1. Evidências protegidas por criptografia ou assinatura devem manter EvidenceReference separada de SecretReference. Ações críticas sobre segredo exigem AuthorizationDecision do Core Platform e auditoria.

## Status

Aprovada

## Data

2026-06-27

---

## 36. Atualização recomendada para 00_BIBLIA_DO_PROJETO.md

Adicionar na seção de Segurança, LGPD, comunicação entre módulos e contratos públicos:

```text
# Atualização consolidada: SecretReference v1

O NoduOS adota SecretReference v1 como padrão transversal para referência segura de segredos.

Segredos, tokens, chaves, certificados privados, credenciais de gateway, credenciais de dispositivo, credenciais de conector, segredos de webhook, client secrets, assinaturas e material criptográfico não podem trafegar brutos em payload, evento, comando, webhook, read model, log, URL, exportação, BI, auditoria, relatório ou configuração.

Todo segredo deve possuir owner_module, finalidade, escopo, política de acesso, política de rotação, política de revogação, expiração quando aplicável, auditoria, tenant/contexto quando aplicável e comportamento fail-closed.

SecretReference aponta para o segredo. O segredo não viaja.
```

---

## 37. Atualização recomendada para 01_MAPA_DE_MODULOS.md

Adicionar observação transversal aos módulos:

```text
# Observação transversal: SecretReference v1

Todo módulo que possuir ou utilizar segredos deve referenciá-los por SecretReference v1.

O módulo dono preserva a finalidade e o uso do segredo. Core Platform autoriza ações sensíveis por AuthorizationDecision. Segurança e LGPD define políticas de proteção. Auditoria registra o ciclo de vida e o uso autorizado. Módulos consumidores recebem resultado, status ou referência, nunca segredo bruto.

Nenhum módulo pode transformar SecretReference em banco compartilhado, payload de configuração, read model de credenciais ou atalho para acessar domínio alheio.
```

Adicionar ao Core Platform, em responsabilidades:

```text
- Emitir AuthorizationDecision para criação, uso, rotação, revogação, expiração, reprocessamento e consulta sensível de SecretReference quando aplicável.
```

Adicionar a Segurança e LGPD, em responsabilidades:

```text
- Definir políticas de proteção, acesso, retenção, rotação, revogação, expiração, incidente e fail-closed para segredos referenciados por SecretReference.
```

Adicionar a Auditoria e Compliance, em responsabilidades:

```text
- Investigar e auditar ciclo de vida, uso, rotação, revogação, quarentena e incidentes relacionados a SecretReference, sem visualizar segredo bruto.
```

---

## 38. Atualização recomendada para 02_REGRAS_DE_ARQUITETURA.md

Adicionar seção específica:

```text
# SecretReference v1

SecretReference v1 é obrigatório para qualquer segredo, token, chave, certificado privado, credencial de gateway, credencial de dispositivo, credencial de conector, segredo de webhook, client secret, assinatura ou material criptográfico.

Segredo bruto nunca pode trafegar em payload, evento, comando, webhook, read model, log, URL, exportação, BI, auditoria, relatório ou configuração.

Todo SecretReference deve declarar owner_module, tenant_id, context_id quando aplicável, resource_reference quando aplicável, purpose, scope, secret_type, sensitivity_level crítico, access_policy_reference, rotation_policy_reference, revocation_policy_reference, audit_policy_reference, expiration_policy_reference quando aplicável, AuthorizationDecision quando aplicável e fail-closed.

SecretReference não é banco compartilhado, não é autorização nova, não transfere domínio e não permite acesso bruto por módulo consumidor.
```

---

## 39. Atualização recomendada para 03_DECISOES_OFICIAIS.md

Inserir a DEC-194 descrita na seção 35.

Atualizar controle decisório:

```text
A última decisão oficial registrada é DEC-194.
As próximas decisões novas devem começar em DEC-195, salvo alteração formal posterior neste documento.

Decisões aprovadas no Detalhamento de SecretReference v1:
  • DEC-194
```

---

## 40. Atualização recomendada para 04_PROMPTS_DE_TRABALHO.md

Adicionar prompt oficial:

```text
# Prompt oficial - Detalhamento de SecretReference v1

Use o documento `10_DETALHAMENTO_SECRETREFERENCE_V1.md` como fonte oficial sempre que um contrato, evento, comando, webhook, read model, integração, gateway, dispositivo, conector, certificado, client secret, token, assinatura ou material criptográfico envolver segredo.

Regras obrigatórias:

- Não transportar segredo bruto.
- Usar SecretReference v1 para tokens, chaves, certificados privados, credenciais, segredos de webhook, client secrets e material criptográfico.
- Exigir owner_module, finalidade, escopo, política de acesso, rotação, revogação, expiração quando aplicável, auditoria e fail-closed.
- Não permitir SecretReference como banco compartilhado ou atalho para acessar segredo bruto.
- Eventos relacionados a segredos devem usar EventEnvelope v1.
- Evidências protegidas por criptografia ou assinatura devem usar EvidenceReference + SecretReference sem misturar prova e segredo.
- Ações críticas devem exigir AuthorizationDecision do Core Platform.
```

---

## 41. Atualização recomendada para 05_CATALOGO_DE_CONTRATOS_PUBLICOS.md

Atualizar a seção de SecretReference:

```text
### SecretReference v1

Representa segredo por referência segura.

Campos mínimos: secret_reference_id, contract_id, contract_version, owner_module, custody_module, tenant_id, context_id quando aplicável, resource_reference quando aplicável, purpose, scope, secret_type, sensitivity_level crítico, raw_secret_allowed igual a never, storage_reference segura, vault_provider_reference abstrata, access_policy_reference, resolution_policy_reference, rotation_policy_reference, revocation_policy_reference, expiration_policy_reference quando aplicável, audit_policy_reference, security_policy_reference, created_at, last_rotated_at quando aplicável, expires_at quando aplicável, lifecycle_state, AuthorizationDecision quando aplicável, correlation_id, audit_reference, no_domain_transfer e no_shared_database.

Segredo bruto é proibido em todo contrato público.
```

---

## 42. Atualização recomendada para 06_MATRIZ_TECNICA_PERMISSOES_POR_CONTRATO.md

Adicionar regra transversal:

```text
Contratos que envolvam segredo, token, chave, certificado privado, credencial, segredo de webhook, client secret, assinatura ou material criptográfico exigem SecretReference v1, AuthorizationDecision para ações críticas, auditoria, política de Segurança/LGPD, rotação, revogação e fail-closed.

Permissão para consumir referência não autoriza leitura de segredo bruto.
```

Campo recomendado:

```text
secret_reference_required: yes/no/conditional
secret_operation_type: create/use/rotate/revoke/expire/audit/quarantine/reprocess
```

---

## 43. Atualização recomendada para 07_MATRIZ_TECNICA_DADOS_SENSIVEIS_POR_CONTRATO.md

Adicionar regra transversal:

```text
Segredo é sempre dado crítico. Contratos com segredo devem usar SecretReference v1.

Dados proibidos: senha bruta, token bruto, refresh token bruto, client secret bruto, chave privada, chave simétrica, certificado com chave privada, segredo de webhook, credencial de gateway, credencial de dispositivo, credencial de conector, credencial de provedor, material criptográfico e URL assinada com segredo.

Dados permitidos: secret_reference_id, owner_module, finalidade, escopo, estado, política, datas de ciclo de vida, status de rotação, status de revogação, audit_reference e metadados mínimos autorizados.

Contrato sensível ou crítico com segredo bruto deve ser rejeitado ou quarentenado.
```

---

## 44. Atualização recomendada para 08_DETALHAMENTO_EVENTENVELOPE_V1.md

Adicionar seção complementar:

```text
# Uso de SecretReference v1 em eventos

Evento relacionado a segredo deve transportar apenas SecretReference, status, reason_code minimizado, políticas aplicáveis, correlation_id, causation_id, AuthorizationDecision quando aplicável e audit_reference.

Eventos não podem transportar segredo bruto, token, chave, certificado privado, client secret, segredo de webhook, credencial de gateway, credencial de dispositivo, credencial de conector, URL assinada ou payload de provedor com segredo.

Evento que contiver segredo bruto deve ser rejeitado ou quarentenado, com abertura de incidente quando aplicável.
```

---

## 45. Atualização recomendada para 09_DETALHAMENTO_EVIDENCEREFERENCE_V1.md

Adicionar relação formal:

```text
# Relação entre EvidenceReference v1 e SecretReference v1

EvidenceReference referencia prova. SecretReference referencia segredo.

Quando uma evidência for criptografada, assinada, lacrada, exportada ou verificada por material criptográfico, a EvidenceReference pode apontar para uma SecretReference, mas nunca deve incorporar segredo, chave, certificado privado, token ou material criptográfico bruto.

A cadeia de custódia da evidência deve registrar que material secreto foi usado por referência, sem expor o segredo.
```

---

## 46. Novo arquivo técnico raiz oficial

Criar arquivo:

```text
10_DETALHAMENTO_SECRETREFERENCE_V1.md
```

Conteúdo base:

- todo este canva final;
- DEC-194 consolidada;
- matrizes por módulo;
- regras de campos obrigatórios e proibidos;
- relação com EventEnvelope v1;
- relação com EvidenceReference v1;
- relação com ResourceReference;
- relação com AuthorizationDecision;
- regras de rotação, revogação, expiração, auditoria, acesso, quarentena, reprocessamento e falhas;
- atualizações recomendadas para raiz.

---

## 47. README recomendado para o pacote final desta etapa

```text
# PACOTE FINAL - RAIZ NODUOS ATUALIZADA COM DETALHAMENTO DE SECRETREFERENCE V1

Status: Base pronta para atualização com SecretReference v1, DEC-194 e documento técnico raiz 10_DETALHAMENTO_SECRETREFERENCE_V1.md.
Data: 2026-06-27

Inclui:

- CANVA_FINAL_DETALHAMENTO_SECRETREFERENCE_V1_NODUOS.txt
- 10_DETALHAMENTO_SECRETREFERENCE_V1.md, quando aplicado à raiz
- DEC-194 para 03_DECISOES_OFICIAIS.md
- Atualizações cruzadas para 00, 01, 02, 04, 05, 06, 07, 08 e 09

Última DEC consolidada após aplicação: DEC-194.
Próxima DEC livre após aplicação: DEC-195.

Atualizações principais:

- SecretReference v1 consolidado como padrão transversal de referência segura de segredos.
- Segredo bruto proibido em payload, evento, comando, webhook, read model, log, URL, exportação, BI, auditoria, relatório e configuração.
- Obrigatoriedade de owner_module, finalidade, escopo, política de acesso, rotação, revogação, expiração quando aplicável, auditoria e fail-closed.
- Integração com EventEnvelope v1 para eventos de ciclo de vida de segredo.
- Integração com EvidenceReference v1 para provas criptografadas, assinadas ou exportadas.
- Integração com ResourceReference para gateway, dispositivo, conector, webhook, domínio, provedor e recurso físico/lógico.
- Integração com AuthorizationDecision para ações críticas.

Frase guia:
Segredo não viaja. Referência aponta. Política limita. Core autoriza. Módulo dono usa. Auditoria registra.
```

---

## 48. Checklist final de consistência

| Verificação | Resultado |
|---|---|
| Não criou módulo novo | OK |
| Não criou banco | OK |
| Não criou migration | OK |
| Não criou endpoint final | OK |
| Não escolheu linguagem/framework | OK |
| Não escolheu vault concreto | OK |
| Não criou tela | OK |
| Preservou Core como autoridade estrutural | OK |
| Preservou módulo dono como executor | OK |
| Preservou Segurança e LGPD como política | OK |
| Preservou Auditoria e Compliance como investigação/trilha | OK |
| Impediu segredo bruto | OK |
| Impediu segredo em evento | OK |
| Impediu segredo em log | OK |
| Impediu segredo em URL | OK |
| Impediu segredo em BI/exportação | OK |
| Impediu SecretReference como banco compartilhado | OK |
| Exigiu owner_module | OK |
| Exigiu finalidade | OK |
| Exigiu escopo | OK |
| Exigiu política de acesso | OK |
| Exigiu rotação | OK |
| Exigiu revogação | OK |
| Exigiu auditoria | OK |
| Exigiu fail-closed | OK |
| Sugeriu DEC-194 | OK |

---

## 49. Próxima etapa recomendada

Após aprovar e aplicar o SecretReference v1, a próxima etapa técnica recomendada é:

```text
Detalhamento de AuthorizationDecision v1
```

Motivo:

EventEnvelope v1 protege eventos. EvidenceReference v1 protege provas. SecretReference v1 protege segredos. AuthorizationDecision v1 deve fechar o sabre de autorização estrutural, definindo como decisões do Core são emitidas, escopadas, expiradas, auditadas, referenciadas e impedidas de virar permissão eterna.

---

## 50. Parecer final

O SecretReference v1 está adequado para consolidação como padrão transversal oficial do NoduOS.

Ele preserva modularidade, segurança, LGPD, auditoria, baixa exposição, fail-closed, rotação, revogação, expiração e fronteiras entre módulos.

Resumo final:

SecretReference v1 é o cofre sem porta pública do NoduOS. O módulo dono sabe como usar. O Core decide se pode. A política limita o alcance. A auditoria registra a trilha. O resto da galáxia recebe apenas referência, status e resultado. 🔐✨

---

## Consolidação final para a raiz

Arquivo raiz oficial: `10_DETALHAMENTO_SECRETREFERENCE_V1.md`.

DEC consolidada: `DEC-194`.

Última DEC consolidada após aplicação: `DEC-194`.

Próxima DEC livre: `DEC-195`.

Próxima etapa recomendada: `Detalhamento de AuthorizationDecision v1`.

Status final: aprovado e consolidado nos documentos centrais.


---

## 51. Correção de fluxo para próximas etapas técnicas

A partir da próxima etapa técnica, o prompt oficial deve exigir primeiro um Relatório de Conformidade e Parecer Preliminar, sem gerar CANVA FINAL na primeira resposta.

Fluxo obrigatório:

1. Gerar relatório preliminar de conformidade, riscos, divergências, lacunas, ajustes obrigatórios e decisões sugeridas.
2. Aguardar aprovação do usuário.
3. Somente após aprovação, gerar o CANVA FINAL consolidado.

Regra curta:

Relatório primeiro. Parecer depois. Canva final só com aprovação.

## Relação complementar com AuthorizationDecision v1 e ResourceReference v1

SecretReference não autoriza leitura, uso, rotação, revogação, assinatura, vinculação, teste, exportação ou repasse de segredo por si só.

Toda ação envolvendo segredo, credencial, certificado, token, webhook secret, credencial de conector, credencial de gateway ou material criptográfico exige AuthorizationDecision v1 válida, emitida pelo Core Platform, com escopo, finalidade, política de rotação, política de revogação, expiração, auditoria e fail-closed.

Segredo bruto nunca deve trafegar em evento, log, URL, payload, read model ou exportação.

ResourceReference v1 pode apontar o recurso que depende do segredo, como gateway, dispositivo, conector, webhook, domínio customizado ou provedor externo, mas o material secreto permanece em SecretReference.


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
Última DEC consolidada: DEC-197.
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
