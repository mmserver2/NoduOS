# CANVA FINAL - DETALHAMENTO DE RESOURCEREFERENCE V1 NODUOS

Projeto: NoduOS
Descrição oficial: SaaS Modular de Gestão de Espaços e Segurança Unificada
Conceito técnico: Sistema Operacional Modular para Espaços Físicos Conectados
Conceito de marca: Conexão que impulsiona
Tipo de documento: Padrão conceitual oficial para referência segura de recursos entre módulos
Versão do documento: 1.0.2
Versão base do contrato: v1
Arquivo técnico raiz oficial: `12_DETALHAMENTO_RESOURCEREFERENCE_V1.md`
Data desta consolidação: 2026-06-27
Status: Aprovado e atualizado com Blueprint Técnico da Aplicação, DEC-198 e referência Git canônica pré-runtime
Última DEC consolidada antes da consolidação conjunta: DEC-194
DEC consolidada anterior na atualização conjunta: DEC-195 - AuthorizationDecision v1
DEC consolidada nesta etapa: DEC-196 - ResourceReference v1
Próxima DEC livre: DEC-199

Frase guia:

Recurso pertence ao dono. Referência aponta sem tomar posse. Escopo limita. Core autoriza. Módulo dono executa. Auditoria registra.

Regra central:

Política influencia. Core decide. Módulo dono executa. Auditoria registra.

---

## 0. Ajustes aplicados nesta versão final

Esta versão consolida o detalhamento de ResourceReference v1 como padrão transversal do NoduOS para referenciar recursos físicos, lógicos, estruturais, pessoais, operacionais, financeiros, técnicos, documentais, de evidência, de segredo, de política, de suporte, de integração e de auditoria sem transferir domínio entre módulos.

Ajustes consolidados:

- ResourceReference v1 foi tratado como contrato transversal de referência, não como módulo comercial.
- Foi preservada a regra de que o Core Platform pode governar o padrão, mas não vira dono universal dos recursos.
- Foi reforçado que o módulo dono mantém domínio, ciclo de vida, validação, execução e fonte primária.
- Foi proibido ResourceReference como banco compartilhado, payload completo, autorização automática, permissão, evidência, segredo, evento, read model ou atalho para banco interno.
- Foi fixada a regra obrigatória `no_domain_transfer = true`.
- Foi reforçada a relação com AuthorizationDecision v1: ResourceReference aponta o recurso; AuthorizationDecision decide se a ação pode ocorrer.
- Foi reforçada a relação com EventEnvelope v1: eventos apontam recursos por referência e não transportam domínio completo.
- Foi reforçada a separação com EvidenceReference v1 e SecretReference v1.
- Foi criada matriz conceitual de uso por tipo de recurso.
- Foi criada regra de lifecycle, availability, revalidação, cache, expiração, quarentena e fail-closed.
- Foi criada atualização recomendada para documentos centrais.
- Foi criada DEC-196 para consolidação conjunta com DEC-195.

Resultado:

O ResourceReference v1 fica tratado como coordenada segura e auditável do hiperespaço modular do NoduOS: ele permite apontar recursos sem invadir o planeta do módulo dono.

---

## 1. Objetivo do ResourceReference v1

O ResourceReference v1 define como o NoduOS referencia recursos de qualquer módulo sem transferir domínio, sem copiar entidade interna, sem carregar payload completo, sem vazar chave primária, sem autorizar ação automaticamente e sem criar dependência invisível entre módulos.

Ele existe para permitir que módulos consumidores:

- identifiquem um recurso por contrato público;
- preservem tenant, contexto, escopo e owner_module;
- solicitem autorização ao Core Platform;
- solicitem leitura autorizada ao módulo dono;
- solicitem ação por API interna do módulo dono;
- componham eventos, comandos, auditorias, evidências, read models e integrações sem invadir domínio alheio.

O objetivo não é criar código, banco, tabela, migration, endpoint final, tela, fila, broker, framework ou tecnologia. O objetivo é estabelecer o pacto conceitual obrigatório para referência segura entre módulos.

---

## 2. Escopo desta versão

Esta versão cobre:

- referência a recursos físicos;
- referência a recursos lógicos;
- referência a recursos estruturais;
- referência a pessoas, clientes, usuários, visitantes e vínculos;
- referência a recursos financeiros;
- referência a dispositivos, gateways, câmeras, acessos e alarmes;
- referência a tickets, reservas, murais, notificações e automações;
- referência a evidências, documentos, anexos e arquivos;
- referência a segredos por SecretReference vinculada;
- referência a políticas, permissões, heranças e decisões de autorização;
- referência a suporte, auditoria, compliance, exportação e integrações;
- revalidação, cache, expiração, lifecycle_state, availability_state e quarentena;
- uso em EventEnvelope v1, AuthorizationDecision v1, contratos públicos, APIs internas, read models autorizados e auditoria.

Fora do escopo:

- criação de banco de dados;
- criação de schema físico;
- criação de migrations;
- criação de endpoints finais;
- escolha de linguagem, framework, fila, broker, banco ou storage;
- criação de tela;
- criação de novo módulo;
- centralização do domínio de todos os recursos no Core;
- substituição dos módulos donos.

---

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
- `09_DETALHAMENTO_EVIDENCEREFERENCE_V1.md`, consolidado na raiz anterior
- `10_DETALHAMENTO_SECRETREFERENCE_V1.md`, consolidado na raiz anterior
- `11_DETALHAMENTO_AUTHORIZATIONDECISION_V1.md`, consolidado nesta atualização conjunta
- `PROMPT_DETALHAMENTO_RESOURCEREFERENCE_V1_NODUOS.txt`

Regra de governança:

O chat conversa. O documento manda.

---

## 4. Estado decisório desta etapa

Conforme o estado operacional informado para esta etapa:

- Última DEC consolidada na raiz antes desta consolidação conjunta: DEC-194.
- Próxima DEC livre antes da consolidação conjunta: DEC-195.
- Foi consolidado em sequência nesta atualização conjunta:
  - DEC-195: AuthorizationDecision v1 como padrão oficial de decisão de autorização do Core Platform.
  - Arquivo técnico aplicado: `11_DETALHAMENTO_AUTHORIZATIONDECISION_V1.md`.
- Esta etapa consolida:
  - DEC-196: ResourceReference v1 como padrão oficial de referência segura de recursos entre módulos.
  - Arquivo técnico oficial: `12_DETALHAMENTO_RESOURCEREFERENCE_V1.md`.
- Próxima DEC livre após consolidação conjunta:
  - DEC-197.

Regra:

DEC-196 foi inserida após DEC-195, preservando a sequência correta.

---

## 5. Definição oficial de ResourceReference v1

ResourceReference v1 é a referência segura, minimizada, versionada, escopada e auditável usada pelo NoduOS para apontar um recurso sem transferir domínio do módulo dono.

Ele permite que outros módulos identifiquem um recurso, solicitem autorização, solicitem leitura autorizada ou solicitem ação por contrato público/API interna do módulo dono, sem acessar banco, classe, regra interna, payload completo, segredo, evidência bruta ou chave primária interna.

ResourceReference v1 não executa, não autoriza, não copia, não governa e não substitui o recurso.

Regra curta:

ResourceReference aponta. AuthorizationDecision decide. Módulo dono executa. Auditoria registra.

---

## 6. Natureza do ResourceReference v1

ResourceReference v1 é:

- contrato transversal;
- referência pública controlada;
- envelope mínimo de identificação de recurso;
- instrumento de escopo;
- base de auditoria e rastreabilidade;
- ponte segura entre contratos;
- elemento de composição em eventos, comandos, APIs, auditorias, evidências e read models autorizados.

ResourceReference v1 não é:

- entidade completa;
- banco compartilhado;
- cache de domínio;
- permissão;
- autorização;
- evento;
- evidência;
- segredo;
- read model;
- comando;
- API;
- payload de execução;
- substituto do módulo dono;
- chave primária interna exposta.

---

## 7. Regra absoluta de não transferência de domínio

Todo ResourceReference v1 deve conter:

```text
no_domain_transfer = true
```

Essa regra significa:

- o recurso continua pertencendo ao owner_module;
- a referência não transfere posse para o Core;
- a referência não transfere posse para o módulo consumidor;
- a referência não autoriza execução;
- a referência não permite consulta direta ao banco do módulo dono;
- a referência não permite reconstruir o estado completo do recurso;
- a referência não substitui contrato público, read model autorizado ou API interna.

ResourceReference sem `no_domain_transfer = true` é inválido e deve falhar fechado.

---

## 8. Quando ResourceReference v1 é obrigatório

ResourceReference v1 é obrigatório quando um contrato, evento, comando, API interna, auditoria, evidência, notificação, suporte, exportação, integração ou read model precisar apontar para recurso que:

- pertence a outro módulo;
- representa recurso físico;
- representa recurso estrutural;
- representa pessoa, cliente, usuário, visitante ou vínculo;
- envolve dispositivo, gateway, câmera, acesso, alarme ou automação;
- envolve cobrança, pagamento, fatura, reserva, ticket, mural ou notificação;
- envolve evidência, documento, anexo, arquivo, snapshot, clip, vídeo ou imagem;
- envolve segredo, credencial, token, certificado ou conector, sempre combinado com SecretReference;
- envolve política, permissão, herança, decisão de autorização ou licença;
- envolve auditoria, compliance, suporte remoto, exportação, BI identificável ou incidente;
- exige tenant, contexto, escopo, sensibilidade, política, auditoria ou fail-closed.

Regra prática:

Sempre que a alternativa for copiar dado de outro módulo, usar ResourceReference.

---

## 9. Quando ResourceReference v1 é opcional

ResourceReference v1 pode ser opcional quando:

- o recurso pertence ao mesmo módulo e o contrato não cruza fronteira;
- o evento é puramente interno, efêmero e sem consumo externo;
- a ação não envolve recurso específico;
- a consulta é agregada e não aponta recurso individual;
- o contrato já usa referência especializada mais adequada, como EvidenceReference ou SecretReference, e não há recurso de domínio adicional a apontar;
- a referência é desnecessária porque o contrato usa apenas tenant/contexto e ator.

Mesmo quando opcional, ResourceReference pode ser exigido por política de auditoria, LGPD, suporte, compliance ou rastreabilidade.

---

## 10. Quando ResourceReference v1 é proibido

ResourceReference v1 é proibido quando seu uso tentar:

- carregar entidade interna completa;
- serializar objeto interno do módulo dono;
- expor chave primária interna;
- expor segredo bruto;
- expor biometria bruta;
- expor vídeo bruto;
- expor evidência bruta;
- expor documento completo sem política;
- expor payload financeiro completo;
- substituir AuthorizationDecision;
- substituir PermissionGrant;
- substituir InheritanceGrant;
- substituir EvidenceReference;
- substituir SecretReference;
- substituir read model autorizado;
- virar banco compartilhado;
- virar cache permanente de domínio;
- permitir consulta direta a banco interno;
- executar ação sensível sem autorização do Core;
- carregar dado fora do tenant/contexto autorizado;
- mascarar domínio real do owner_module.

---

## 11. Campos obrigatórios do ResourceReference v1

Todos os campos abaixo são conceituais e devem ser detalhados nos contratos técnicos futuros conforme o tipo de recurso.

| Campo | Regra oficial |
|---|---|
| `resource_reference_id` | Identificador público único da referência. Não é chave primária interna do recurso. |
| `contract_id` | Contrato público que rege o uso da referência. |
| `contract_version` | Versão do contrato associado. |
| `reference_version` | Versão do próprio padrão ResourceReference. Nesta etapa: v1. |
| `owner_module` | Módulo dono do recurso. Obrigatório e imutável. |
| `resource_type` | Tipo público do recurso referenciado. |
| `resource_public_id` | Identificador público, opaco e seguro do recurso. Nunca deve ser ID interno vazado. |
| `tenant_id` | Obrigatório quando o recurso estiver em contexto multi-tenant. |
| `context_id` | Obrigatório quando o recurso estiver vinculado a organização, espaço, unidade, área, cliente, operação ou fluxo contextual. |
| `structure_reference` | Obrigatório quando o recurso tiver localização física ou escopo estrutural. |
| `parent_resource_reference` | Obrigatório quando o recurso depender de recurso pai para interpretação. |
| `related_resource_references` | Lista controlada de referências relacionadas, sem transferência de domínio. |
| `actor_scope_reference` | Referência ao escopo do ator quando aplicável. |
| `subject_reference` | Referência ao sujeito afetado quando diferente do ator ou do recurso principal. |
| `relationship_reference` | Obrigatório quando o uso do recurso depender de vínculo, associação, herança ou relação contextual. |
| `module_scope` | Escopo do módulo consumidor ou produtor em relação ao recurso. |
| `authorization_scope` | Escopo conceitual a ser usado pelo Core na avaliação de autorização. Não é autorização. |
| `allowed_actions_conceptual` | Ações conceituais possíveis, apenas informativas. Não concedem permissão. |
| `sensitivity_level` | Classificação de sensibilidade: Público, Interno, Restrito, Sensível ou Crítico. |
| `data_categories` | Categorias de dados representadas ou afetadas pela referência. |
| `lifecycle_state` | Estado de ciclo de vida do recurso. |
| `availability_state` | Estado de disponibilidade quando aplicável. |
| `policy_references` | Políticas aplicáveis ao uso da referência. |
| `security_policy_reference` | Obrigatório quando houver risco, ação protegida ou recurso sensível/crítico. |
| `lgpd_policy_reference` | Obrigatório quando envolver dados pessoais, imagem, vídeo, biometria, documento, visitante, financeiro, suporte ou auditoria sensível. |
| `masking_policy_reference` | Obrigatório quando houver exibição minimizada ou dado sensível mascarável. |
| `retention_policy_reference` | Obrigatório quando a referência tiver retenção, expiração, evidência, auditoria ou exportação. |
| `evidence_reference` | Usar quando o recurso estiver ligado a prova, evidência, imagem, vídeo, documento probatório ou cadeia de custódia. |
| `secret_reference` | Usar quando o recurso depender de segredo, credencial, token, certificado, assinatura ou material criptográfico. |
| `display_label_minimized` | Nome exibível mínimo, mascarado quando necessário. |
| `purpose` | Finalidade declarada quando houver uso sensível, crítico, auditoria, exportação, suporte, evidência ou LGPD. |
| `created_at` ou `referenced_at` | Data/hora em que a referência foi criada ou usada no fluxo. |
| `updated_at` ou `last_validated_at` | Obrigatório quando houver revalidação, cache ou ciclo de vida relevante. |
| `expires_at` | Obrigatório quando a referência for temporária, sensível, crítica, offline, de suporte, convite, reserva, evidência temporária ou integração. |
| `correlation_id` | Obrigatório quando derivado de fluxo distribuído. |
| `causation_id` | Obrigatório quando derivado de evento, comando ou decisão anterior. |
| `audit_reference` | Obrigatório em uso sensível, crítico, operacional relevante ou intermodular auditável. |
| `no_domain_transfer` | Sempre obrigatório e sempre `true`. |

---

## 12. Campos opcionais controlados

Campos opcionais só podem ampliar rastreabilidade, segurança, exibição mínima, compatibilidade ou diagnóstico. Eles nunca podem reduzir autorização, omitir tenant/contexto, expor dado bruto ou permitir execução.

| Campo opcional | Quando usar | Limite obrigatório |
|---|---|---|
| `external_resource_reference` | Recurso vindo de provedor externo normalizado | Não torna provedor externo confiável sem validação |
| `provider_reference` | Integrações externas ou marketplace | Sem segredo bruto |
| `integration_mapping_reference` | Mapeamento entre recurso externo e recurso NoduOS | Não expõe payload bruto do provedor |
| `gateway_context_reference` | Recurso localizado atrás de gateway local | Sem IP, rota ou credencial bruta quando referência bastar |
| `offline_policy_reference` | Recurso usado em modo offline ou contingência | Não pode permitir fail-open indevido |
| `degraded_mode_policy_reference` | Operação com indisponibilidade parcial | Deve limitar uso e exigir auditoria |
| `support_case_reference` | Acesso por suporte autorizado | Escopo temporário, auditável e revogável |
| `compliance_case_reference` | Auditoria, investigação ou compliance | Acesso restrito, finalidade e retenção |
| `export_control_policy_reference` | Exportação de dado, prova ou relatório | Auditoria e finalidade obrigatórias |
| `view_policy_reference` | Visualização controlada por perfil | Máscara e escopo obrigatórios |
| `cache_policy_reference` | Uso temporário em cache autorizado | Revalidação e expiração obrigatórias |
| `integrity_reference` | Verificação de integridade da referência | Não substitui EvidenceReference quando houver prova |
| `signature_reference` | Assinatura ou integridade externa | Segredo via SecretReference |
| `locale` | Exibição localizada | Não altera semântica do recurso |
| `timezone` | Interpretação local de horário | Não substitui timestamp canônico |

---

## 13. Campos e dados proibidos

| Proibido em ResourceReference | Motivo | Correção oficial |
|---|---|---|
| ID primário interno do banco | Vaza estrutura interna | Usar `resource_public_id` opaco |
| Objeto ORM serializado | Acoplamento a implementação | Usar contrato público |
| Classe interna serializada | Acoplamento a código | Usar contrato público |
| Payload completo do recurso | Banco compartilhado disfarçado | Usar read model autorizado ou API interna |
| Estado completo do módulo dono | Transferência de domínio | Usar resumo mínimo autorizado |
| Senha | Segredo bruto | SecretReference |
| Token bruto | Segredo reutilizável | SecretReference |
| Chave privada | Segredo crítico | SecretReference |
| Certificado bruto | Segredo crítico | SecretReference ou CertificateReference |
| Credencial de gateway | Risco operacional crítico | SecretReference |
| Credencial de dispositivo | Risco físico crítico | SecretReference |
| Segredo de webhook | Risco de fraude | SecretReference |
| Biometria bruta | Dado pessoal sensível crítico | Referência biométrica controlada e política LGPD |
| Template facial bruto | Biometria crítica | Referência segura, consentimento e política |
| Vídeo bruto | Exposição sensível | EvidenceReference ou StreamReference autorizado |
| Imagem bruta identificável | Dado pessoal sensível | EvidenceReference ou máscara |
| Snapshot bruto | Prova sensível | EvidenceReference |
| Documento completo | Exposição indevida | DocumentReference ou FileAttachmentReference |
| Evidência bruta | Quebra de cadeia de custódia | EvidenceReference |
| Log bruto com segredo | Vazamento operacional | ErrorReference e máscara |
| IP interno bruto | Exposição de rede | NetworkReference ou máscara |
| Rota local sensível | Exposição técnica | GatewayRouteReference |
| Dado de outro tenant | Violação multi-tenant | Rejeição ou quarentena |
| Dado fora do contexto | Violação de escopo | Rejeição ou quarentena |
| AuthorizationDecision completa indevida | Exposição de política | AuthorizationDecisionReference minimizada |
| PermissionGrant completo indevido | Exposição de regra interna | PermissionGrantReference |
| InheritanceGrant completo indevido | Exposição de herança interna | InheritanceGrantReference |

---

## 14. Semântica dos identificadores

### 14.1 `resource_reference_id`

É o identificador público da referência.

Regras:

- identifica a referência, não necessariamente o recurso original;
- pode mudar se a referência for reemitida, expirada, substituída ou revalidada;
- deve ser seguro para trafegar em contratos internos autorizados;
- não deve revelar banco, tabela, shard, schema, tecnologia ou sequência interna.

### 14.2 `resource_public_id`

É o identificador público opaco do recurso no módulo dono.

Regras:

- deve ser controlado pelo owner_module;
- não pode ser chave primária interna vazada;
- não pode conter dado sensível;
- não pode conter significado operacional secreto;
- deve ser estável conforme política do módulo dono;
- deve ser revogável ou substituível conforme lifecycle.

### 14.3 `owner_module`

É o módulo dono do recurso.

Regras:

- obrigatório;
- imutável durante a vida da referência;
- define quem valida o recurso;
- define quem executa ações;
- define quem mantém ciclo de vida;
- define quem responde por compatibilidade;
- define quem publica eventos primários do recurso.

---

## 15. Regras de tenant e contexto

ResourceReference v1 deve respeitar a hierarquia oficial:

```text
MASTER
  PARCEIRO
    ORGANIZAÇÃO / ESPAÇO
      OPERADOR / GESTOR
      UNIDADE / BLOCO / ÁREA / AMBIENTE
        CLIENTE / USUÁRIO FINAL
```

Regras:

- `tenant_id` é obrigatório para recurso operacional, sensível, crítico ou multi-tenant.
- `context_id` é obrigatório quando o recurso estiver vinculado a organização, unidade, área, ambiente, cliente, operação, dispositivo, gateway, acesso, câmera, financeiro, ticket, reserva, visitante, suporte, auditoria ou integração.
- ResourceReference sem tenant/contexto quando eles forem aplicáveis é inválido.
- Escopo Master não significa ausência de tenant quando houver dado de tenant.
- Escopo Parceiro só pode alcançar organizações abaixo do parceiro.
- Escopo Organização só pode alcançar o espaço conectado.
- Escopo Operador/Gestor só pode alcançar recursos dentro da organização permitida.
- Escopo Unidade/Bloco/Área/Ambiente só pode alcançar recursos herdados.
- Escopo Cliente só pode alcançar recursos do próprio contexto herdado.
- Qualquer cruzamento de tenant/contexto deve ser rejeitado ou quarentenado.

---

## 16. Regras de hierarquia e herança

ResourceReference pode apontar recurso herdável, mas não cria herança.

A herança continua sendo governada por PermissionGrant, InheritanceGrant, políticas e AuthorizationDecision do Core.

Regras:

- ResourceReference pode indicar que um recurso pertence a uma unidade, bloco, área ou ambiente.
- ResourceReference pode indicar relação com recurso pai.
- ResourceReference pode indicar `authorization_scope`.
- ResourceReference não concede acesso ao cliente.
- ResourceReference não prova que o recurso foi herdado.
- ResourceReference não substitui InheritanceGrant.
- ResourceReference não substitui PermissionGrant.
- Cliente só usa recurso se houver herança, permissão, política e decisão válida.

---

## 17. Tipos oficiais de recursos referenciáveis

### 17.1 Recursos físicos

Exemplos:

- câmera;
- leitor facial;
- controladora;
- relé;
- portão;
- porta;
- sensor;
- alarme;
- gateway;
- nobreak;
- roteador;
- dispositivo técnico.

Regras:

- usar `owner_module`;
- usar `structure_reference` quando houver localização física;
- usar `availability_state`;
- usar `sensitivity_level` compatível;
- ações sensíveis exigem AuthorizationDecision;
- execução pertence ao módulo dono.

### 17.2 Recursos estruturais

Exemplos:

- organização;
- bloco;
- torre;
- unidade;
- área;
- ambiente;
- sala;
- garagem;
- recepção;
- laboratório;
- espaço comum.

Regras:

- estrutura física completa pertence ao módulo Unidades, Blocos, Áreas e Ambientes, quando aplicável;
- Organização não vira dona de estrutura interna completa;
- ResourceReference pode apontar estrutura sem transferir domínio;
- herança usa estrutura como alvo, não como motor de permissão.

### 17.3 Recursos pessoais

Exemplos:

- pessoa;
- cliente;
- usuário final;
- visitante;
- dependente;
- prestador;
- operador;
- vínculo pessoal.

Regras:

- UserAccount pertence ao Core;
- PersonProfile e ClientProfile pertencem a Pessoas e Clientes;
- vínculos devem usar relationship_reference quando relevantes;
- dados pessoais devem ser minimizados e mascarados;
- biometria nunca entra bruta.

### 17.4 Recursos operacionais

Exemplos:

- acesso;
- credencial;
- convite;
- reserva;
- ticket;
- ocorrência;
- mural;
- notificação;
- automação;
- comando operacional.

Regras:

- ResourceReference não executa operação;
- comandos críticos exigem AuthorizationDecision e idempotência;
- eventos derivados usam EventEnvelope v1;
- módulo dono executa e publica resultado.

### 17.5 Recursos financeiros

Exemplos:

- fatura;
- cobrança;
- pagamento;
- boleto;
- Pix;
- recibo;
- inadimplência;
- repasse;
- comissão;
- contrato financeiro.

Regras:

- Financeiro não executa bloqueio direto;
- ResourceReference aponta o recurso financeiro;
- bloqueio operacional depende de política, Core e módulo dono do recurso afetado;
- dados financeiros exigem finalidade, máscara, retenção e auditoria.

### 17.6 Recursos técnicos

Exemplos:

- gateway;
- tunnel;
- rota;
- diagnóstico;
- device health;
- log técnico;
- status de conectividade;
- adapter;
- conector.

Regras:

- IP, rota, credencial e segredo bruto não entram na referência;
- gateway/tunnel pertencem ao módulo técnico dono;
- diagnóstico detalhado deve ser acessado por API interna autorizada ou read model autorizado;
- suporte remoto exige política, escopo, expiração e auditoria.

### 17.7 Recursos documentais

Exemplos:

- documento;
- anexo;
- arquivo;
- termo;
- contrato;
- comprovante;
- pacote exportado.

Regras:

- documento completo não entra no ResourceReference;
- usar FileAttachmentReference, DocumentReference ou EvidenceReference conforme caso;
- exportação exige finalidade, política, auditoria e retenção;
- documentos pessoais exigem LGPD.

### 17.8 Recursos de evidência

Exemplos:

- snapshot;
- clip;
- vídeo;
- imagem;
- prova de acesso;
- prova de alarme;
- anexo probatório;
- cadeia de custódia.

Regras:

- usar EvidenceReference;
- ResourceReference pode apontar o recurso relacionado;
- evidência bruta não entra;
- cadeia de custódia deve ser preservada.

### 17.9 Recursos de segredo

Exemplos:

- token;
- chave;
- certificado;
- segredo de webhook;
- credencial de dispositivo;
- credencial de gateway;
- client secret;
- assinatura.

Regras:

- usar SecretReference;
- ResourceReference pode apontar o recurso que depende do segredo;
- segredo bruto nunca trafega;
- rotação, revogação e auditoria são obrigatórias.

### 17.10 Recursos de política, autorização e auditoria

Exemplos:

- política de segurança;
- política LGPD;
- política de retenção;
- política de máscara;
- PermissionGrant;
- InheritanceGrant;
- AuthorizationDecision;
- AuditTrail;
- ComplianceCase.

Regras:

- políticas influenciam;
- Core decide;
- Auditoria registra;
- PermissionGrant e InheritanceGrant não são substituídos por ResourceReference;
- AuthorizationDecision não é recriada por ResourceReference.

---

## 18. Lifecycle state

Todo ResourceReference deve declarar `lifecycle_state`.

Estados oficiais sugeridos:

| Estado | Significado | Regra |
|---|---|---|
| `active` | Recurso ativo | Pode ser usado conforme autorização |
| `pending` | Recurso pendente | Não executar ação crítica sem validação |
| `provisioning` | Recurso em criação ou ativação | Uso limitado e auditável |
| `suspended` | Recurso suspenso | Ação sensível bloqueada |
| `blocked` | Recurso bloqueado | Fail-closed para execução |
| `revoked` | Recurso revogado | Não reutilizar |
| `expired` | Referência ou recurso expirado | Revalidar ou negar |
| `archived` | Recurso arquivado | Apenas leitura autorizada quando permitido |
| `deleted_logical` | Recurso removido logicamente | Não executar ação |
| `quarantined` | Recurso isolado por risco | Acesso bloqueado ou controlado |
| `superseded` | Substituído por outro recurso | Usar nova referência indicada |
| `unknown` | Estado não confirmado | Fail-closed em uso sensível/crítico |

Regra:

Ação crítica sobre referência com estado diferente de `active` só pode ocorrer com política explícita, AuthorizationDecision válida, auditoria e justificativa.

---

## 19. Availability state

Quando o recurso tiver disponibilidade operacional, declarar `availability_state`.

Estados oficiais sugeridos:

| Estado | Significado | Regra |
|---|---|---|
| `available` | Disponível | Uso permitido conforme autorização |
| `unavailable` | Indisponível | Degradação segura ou bloqueio |
| `offline` | Sem comunicação | Aplicar política offline |
| `degraded` | Operação parcial | Limitar ação |
| `maintenance` | Em manutenção | Bloquear ação crítica salvo exceção autorizada |
| `rate_limited` | Uso limitado | Respeitar política de proteção |
| `locked` | Bloqueado operacionalmente | Negar execução sensível |
| `quarantined` | Isolado por risco | Bloquear até análise |
| `unknown` | Estado desconhecido | Fail-closed em recurso sensível/crítico |

---

## 20. Sensibilidade e categorias de dados

ResourceReference deve declarar `sensitivity_level`.

Níveis oficiais:

| Nível | Critério |
|---|---|
| `Público` | Não expõe pessoa, segurança, operação, contexto privado ou recurso sensível |
| `Interno` | Uso técnico entre módulos, sem dado sensível relevante |
| `Restrito` | Exige tenant, contexto, perfil, escopo ou recurso autorizado |
| `Sensível` | Envolve pessoa, financeiro, imagem, visitante, ticket, reserva, suporte, logs, documento ou política |
| `Crítico` | Envolve segredo, credencial, biometria, evidência, vídeo sensível, ação física, suporte remoto, conector externo ou política crítica |

Categorias de dados possíveis:

- Identidade técnica;
- Identidade pessoal;
- Conta de usuário;
- Contato;
- Documento pessoal;
- Perfil pessoal;
- Perfil de cliente;
- Vínculo com organização;
- Vínculo com unidade, bloco, área ou ambiente;
- Credencial física;
- Biometria;
- Consentimento;
- Visitante;
- Convite;
- QR temporário;
- Acesso físico;
- Evento de acesso;
- Câmera;
- Stream;
- Snapshot;
- Clip;
- Evidência de vídeo;
- Alarme;
- Evento crítico;
- Financeiro;
- Pagamento;
- Cobrança;
- Recibo;
- Reserva;
- Ticket;
- Anexo;
- Mural;
- Notificação;
- Automação;
- Gateway;
- Dispositivo;
- Diagnóstico técnico;
- IP interno;
- Rota local;
- Túnel;
- Integração externa;
- Webhook externo;
- Segredo;
- Certificado;
- Domínio customizado;
- White-label asset;
- BI e analytics;
- Exportação;
- Auditoria;
- Compliance;
- Cadeia de custódia;
- Política de segurança;
- Política de privacidade;
- Retenção;
- Mascaramento;
- Solicitação do titular;
- Suporte remoto;
- Incidente de serviço;
- Logs técnicos.

---

## 21. Políticas obrigatórias

ResourceReference deve carregar ou apontar políticas conforme o risco.

| Política | Quando obrigatória |
|---|---|
| `policy_references` | Sempre que houver regra aplicável |
| `security_policy_reference` | Recursos restritos, sensíveis, críticos ou operacionais |
| `lgpd_policy_reference` | Dados pessoais, imagem, biometria, documento, visitante, financeiro, suporte, vídeo, auditoria ou exportação |
| `masking_policy_reference` | Quando houver exibição ou payload minimizado sensível |
| `retention_policy_reference` | Quando houver retenção, expiração, auditoria, evidência ou exportação |
| `access_policy_reference` | Quando recurso exigir leitura/visualização controlada |
| `export_control_policy_reference` | Quando houver exportação, compartilhamento ou terceiro |
| `offline_policy_reference` | Quando recurso puder operar em modo offline |
| `quarantine_policy_reference` | Quando houver risco de integridade, escopo, payload proibido ou origem externa |
| `deprecation_policy_reference` | Quando recurso/contrato estiver em retirada |
| `compatibility_policy_reference` | Quando houver versionamento ou consumidores antigos |

---

## 22. Allowed actions conceptual

`allowed_actions_conceptual` informa quais ações o recurso pode suportar conceitualmente.

Exemplos:

- `read`;
- `view`;
- `list`;
- `request`;
- `execute`;
- `open`;
- `lock`;
- `unlock`;
- `grant`;
- `revoke`;
- `export`;
- `share`;
- `attach`;
- `validate`;
- `diagnose`;
- `rotate`;
- `archive`;
- `restore`.

Regras:

- não concede permissão;
- não substitui PermissionGrant;
- não substitui InheritanceGrant;
- não substitui AuthorizationDecision;
- não permite execução sensível;
- deve ser interpretado apenas como capacidade conceitual do recurso;
- ação real exige permissão, política, Core AuthorizationDecision e execução pelo módulo dono.

Regra curta:

Allowed actions dizem “o recurso sabe fazer”. AuthorizationDecision diz “este ator pode pedir agora”.

---

## 23. Display label minimizado

`display_label_minimized` permite exibição humana controlada.

Regras:

- deve ser mínimo;
- deve ser mascarado quando sensível;
- não pode carregar dado pessoal completo;
- não pode revelar segredo;
- não pode revelar IP/rota interna sensível;
- não pode revelar documento completo;
- não pode revelar unidade ou pessoa além do permitido;
- deve variar por perfil quando necessário;
- não substitui read model.

Exemplos seguros:

- `Câmera Garagem B1`;
- `Portão Principal`;
- `Unidade 302`;
- `Fatura 2026-06`;
- `Ticket #A7K9`;
- `Visitante J*** S***`;
- `Gateway Organização Alpha`.

Exemplos proibidos:

- CPF completo;
- telefone completo sem política;
- token;
- chave;
- URL assinada;
- IP interno sensível;
- nome completo de visitante sem finalidade;
- payload bruto de documento;
- path interno de storage.

---

## 24. StructureReference

`structure_reference` deve ser usado quando o recurso tiver localização física ou escopo estrutural.

Exemplos:

- câmera instalada em garagem;
- leitor facial em portaria;
- relé vinculado a portão;
- reserva vinculada a salão;
- ticket vinculado a bloco;
- acesso vinculado a porta;
- alarme vinculado a área;
- notificação vinculada a unidade.

Regras:

- StructureReference não transfere domínio estrutural;
- estrutura física não vira motor de permissão;
- herança deve continuar governada por PermissionGrant, InheritanceGrant e Core;
- recurso localizado fisicamente exige tenant/contexto;
- recurso crítico localizado deve exigir auditoria.

---

## 25. RelationshipReference

`relationship_reference` deve ser usado quando a validade do recurso depender de vínculo.

Exemplos:

- pessoa vinculada a unidade;
- visitante vinculado a convite;
- prestador vinculado a autorização temporária;
- operador vinculado à organização;
- parceiro vinculado à organização;
- câmera herdada por área;
- cobrança vinculada a cliente;
- reserva vinculada a unidade;
- ticket vinculado a solicitante;
- acesso vinculado a credencial.

Regras:

- RelationshipReference não substitui o domínio de vínculos;
- vínculo pessoal pertence ao módulo dono;
- vínculo estrutural pertence ao módulo dono;
- vínculo de permissão pertence ao Core/Herança e Permissões conforme caso;
- relação expirada, revogada ou bloqueada invalida uso sensível.

---

## 26. Referências relacionadas

`related_resource_references` permite apontar recursos associados.

Regras:

- deve ser lista minimizada;
- cada item deve preservar owner_module próprio;
- não pode criar grafo ilimitado;
- não pode carregar payload completo de recursos relacionados;
- não deve ser usado como consulta composta;
- deve ter limite conceitual por contrato;
- se a relação exigir leitura ampla, usar read model autorizado.

Exemplo:

Um evento de acesso pode referenciar:

- pessoa;
- credencial;
- ponto de acesso;
- dispositivo;
- câmera relacionada;
- evidência relacionada;
- organização;
- área.

Mas cada item continua pertencendo ao módulo dono.

---

## 27. ResourceReference em contexto offline ou gateway

Recursos em contexto offline ou por gateway devem preservar segurança.

Regras:

- declarar `gateway_context_reference` quando aplicável;
- declarar `offline_policy_reference` quando houver operação sem conectividade;
- declarar `last_validated_at`;
- declarar `expires_at` em referência temporária;
- ação crítica offline deve ter escopo limitado;
- recurso offline não pode ampliar permissão;
- retorno online deve revalidar referência e publicar eventos/auditoria;
- divergência entre estado local e estado cloud deve gerar quarentena ou reconciliação auditada;
- segredo local nunca entra na referência.

Regra curta:

Offline não é passe livre. É contingência vigiada.

---

## 28. Revalidação de referência

ResourceReference deve ser revalidado quando:

- o recurso for sensível ou crítico;
- o recurso estiver offline;
- o recurso estiver em cache;
- o lifecycle_state mudar;
- o availability_state mudar;
- o owner_module publicar evento de alteração;
- houver troca de tenant/contexto;
- houver alteração de vínculo;
- houver alteração de permissão, herança ou política;
- houver tentativa de ação sensível;
- houver exportação, suporte remoto, evidência ou integração externa;
- a referência estiver próxima de expirar;
- o módulo dono estiver indisponível e a política exigir confirmação.

Resultado de revalidação:

| Resultado | Ação |
|---|---|
| válida | Prosseguir conforme autorização |
| expirada | Solicitar nova referência |
| revogada | Negar |
| bloqueada | Negar e auditar |
| indisponível | Degradar ou negar conforme sensibilidade |
| divergente | Quarentenar |
| desconhecida | Fail-closed em uso sensível/crítico |

---

## 29. Cache de ResourceReference

Cache de ResourceReference é permitido apenas como otimização controlada, nunca como fonte de domínio.

Regras:

- cache deve ter política explícita;
- cache deve respeitar tenant/contexto;
- cache deve ter expiração;
- cache deve registrar `last_validated_at`;
- cache não substitui módulo dono;
- cache não pode conter payload completo;
- cache não pode conter segredo;
- cache não pode conter evidência bruta;
- cache de recurso crítico deve ser curto e revalidável;
- cache divergente deve ser descartado ou quarentenado.

Proibições:

- cache permanente de ResourceReference como banco;
- cache usado para executar ação sem AuthorizationDecision;
- cache usado após revogação;
- cache compartilhado entre tenants;
- cache usado para reconstruir domínio do módulo dono.

---

## 30. Versionamento e compatibilidade

ResourceReference v1 deve seguir versionamento controlado.

Campos de versionamento:

- `contract_id`;
- `contract_version`;
- `reference_version`;
- `compatibility_policy`;
- `deprecation_policy`, quando aplicável.

Mudanças compatíveis:

- adicionar campo opcional controlado;
- ampliar enum com valor seguro;
- adicionar política mais restritiva;
- adicionar máscara;
- adicionar referência complementar.

Mudanças incompatíveis:

- remover campo obrigatório;
- alterar significado de `resource_public_id`;
- alterar owner_module;
- reduzir sensibilidade;
- remover tenant/contexto;
- remover `no_domain_transfer`;
- permitir payload antes proibido;
- transformar allowed_actions em permissão;
- alterar regra de autorização;
- alterar comportamento fail-closed para fail-open.

Regra:

Mudança incompatível exige nova versão.

---

## 31. Relação com AuthorizationDecision v1

AuthorizationDecision v1 é a decisão emitida pelo Core Platform sobre uma ação, leitura, exportação, alteração ou execução.

ResourceReference v1 aponta o recurso sobre o qual a decisão poderá incidir.

Regras:

- ResourceReference não emite decisão;
- ResourceReference não prova autorização;
- ResourceReference pode ser campo obrigatório dentro de AuthorizationDecision;
- AuthorizationDecision deve apontar qual ResourceReference foi avaliado;
- ação sensível exige AuthorizationDecision válida;
- autorização expirada não pode ser reaproveitada;
- nova ação sensível exige nova AuthorizationDecision;
- evento que contenha referência à autorização original não cria nova autorização.

Regra curta:

ResourceReference responde “qual recurso?”. AuthorizationDecision responde “pode agir agora?”.

---

## 32. Relação com PermissionGrant

PermissionGrant representa concessão de permissão.

ResourceReference pode ser alvo, escopo ou recurso relacionado à permissão.

Regras:

- ResourceReference não concede permissão;
- PermissionGrant pode referenciar recurso;
- permissão sem recurso pode ser genérica conforme contrato;
- recurso sensível pode exigir permissão específica;
- permissão concedida ainda pode depender de política, herança, licença, feature flag e decisão do Core;
- revogação de PermissionGrant pode invalidar uso futuro de ResourceReference.

---

## 33. Relação com InheritanceGrant

InheritanceGrant representa herança contextual de módulos, permissões ou recursos.

ResourceReference pode apontar o recurso herdável.

Regras:

- ResourceReference não cria herança;
- InheritanceGrant pode apontar ResourceReference;
- recurso herdado continua pertencendo ao módulo dono;
- cliente usa apenas o que herdou;
- alteração na hierarquia pode exigir revalidação da referência;
- herança revogada invalida uso sensível derivado.

---

## 34. Relação com EventEnvelope v1

EventEnvelope v1 deve usar ResourceReference quando o evento apontar recurso.

Regras:

- evento não transporta recurso completo;
- evento usa `resource_reference`;
- evento pode usar `related_resource_references`;
- evento sensível deve declarar políticas, finalidade, sensibilidade e auditoria;
- evento derivado de ação sensível pode referenciar AuthorizationDecision original;
- evento não cria nova autorização;
- consumidor não pode executar ação sensível apenas porque recebeu evento;
- consumidor que precisar agir deve solicitar nova AuthorizationDecision.

Exemplo correto:

```text
AccessGranted
resource_reference: AccessPointReference
related_resource_references:
  - PersonReference
  - CredentialReference
  - DeviceReference
  - CameraReference
authorization_decision_reference: decisão original do Core
payload: resultado mínimo
```

Exemplo proibido:

```text
AccessGranted
payload:
  pessoa completa
  credencial completa
  biometria
  vídeo
  configuração interna da controladora
  token do gateway
```

---

## 35. Relação com EvidenceReference v1

EvidenceReference v1 referencia prova, imagem, vídeo, snapshot, clip, documento probatório, anexo probatório, cadeia de custódia ou exportação de evidência.

ResourceReference v1 pode apontar o recurso relacionado à evidência.

Regras:

- EvidenceReference é usado para a prova;
- ResourceReference é usado para o recurso relacionado;
- ResourceReference não carrega prova bruta;
- EvidenceReference deve preservar cadeia de custódia;
- visualização ou exportação de evidência exige AuthorizationDecision, finalidade, política e auditoria.

Exemplo:

```text
EvidenceReference: clip de câmera
related_resource_reference: CameraReference
related_actor_reference: PersonReference
source_event_reference: AccessEventReference
```

---

## 36. Relação com SecretReference v1

SecretReference v1 referencia segredo de forma segura.

ResourceReference v1 pode apontar o recurso que depende do segredo, mas nunca o segredo em si.

Regras:

- segredo bruto nunca entra em ResourceReference;
- token, chave, certificado, senha e credencial usam SecretReference;
- ResourceReference pode apontar conector, gateway, dispositivo ou webhook;
- SecretReference aponta o segredo associado;
- rotação e revogação de segredo podem alterar availability/lifecycle do recurso;
- acesso a segredo exige política crítica, autorização e auditoria.

---

## 37. Relação com read models autorizados

Read model autorizado permite consulta composta, resumo, listagem ou visão agregada.

ResourceReference apenas aponta recurso.

Regras:

- ResourceReference não é read model;
- read model pode conter ResourceReference;
- read model não transfere domínio;
- read model deve declarar owner_module, fontes, escopo, máscara, retenção e no_domain_transfer;
- consulta composta deve usar read model autorizado, não ResourceReference em cadeia;
- BI não pode transformar ResourceReference em banco analítico identificável sem política.

---

## 38. Relação com APIs internas

APIs internas dos módulos donos podem receber ResourceReference para identificar recurso alvo.

Regras:

- API interna deve validar tenant/contexto;
- API interna deve validar owner_module;
- API interna deve validar escopo;
- API interna deve validar AuthorizationDecision quando sensível;
- API interna não deve confiar cegamente na referência;
- API interna não deve aceitar ResourceReference de outro tenant;
- API interna deve auditar uso sensível;
- API interna deve retornar dados minimizados ou contrato próprio;
- módulo consumidor não acessa banco interno do módulo dono.

---

## 39. Relação com auditoria

ResourceReference deve apoiar auditoria sem virar trilha auditável completa.

Regras:

- auditoria deve registrar actor, recurso, ação, tenant, contexto, finalidade, política, autorização, resultado, timestamp e correlation_id;
- ResourceReference pode ser armazenado na trilha;
- auditoria não executa regra de domínio;
- auditoria não substitui módulo dono;
- trilha sensível exige máscara, retenção e política;
- exportação de trilha exige AuthorizationDecision e finalidade.

---

## 40. Relação com dados sensíveis

ResourceReference deve respeitar privacy by design e security by design.

Regras:

- dado sensível deve ser minimizado;
- dado bruto deve ser evitado;
- quando referência bastar, payload bruto é proibido;
- finalidade é obrigatória em uso sensível/crítico;
- máscara é obrigatória quando houver exibição sensível;
- retenção deve ser mínima;
- visualização sensível deve ser auditada;
- exportação sensível deve ser auditada;
- ausência de política deve gerar fail-closed.

---

## 41. Relação com integrações externas

ResourceReference pode apontar recurso externo normalizado, mas não deve tornar provedor externo automaticamente confiável.

Regras:

- recurso externo recebido deve ser tratado como não confiável até validação;
- integração externa deve usar contrato público;
- conector deve ser autorizado;
- segredo de provedor usa SecretReference;
- payload bruto externo não vira ResourceReference;
- mapeamento externo deve ser minimizado;
- eventos externos devem ser normalizados antes de virarem eventos internos confiáveis;
- divergência de mapeamento deve gerar quarentena.

---

## 42. Fail-closed

ResourceReference deve falhar fechado quando:

- não tiver `owner_module`;
- não tiver `resource_type`;
- não tiver `resource_public_id`;
- não tiver `no_domain_transfer = true`;
- não tiver tenant/contexto quando aplicável;
- tiver tenant/contexto divergente;
- apontar para recurso revogado, expirado, bloqueado ou quarentenado;
- carregar campo proibido;
- tentar transportar payload completo;
- tentar expor segredo, evidência, biometria, vídeo ou documento bruto;
- for usado como autorização;
- for usado para consultar banco interno;
- não tiver política exigida para recurso sensível/crítico;
- não tiver auditoria exigida;
- não tiver AuthorizationDecision exigida para ação sensível.

Comportamentos permitidos:

- negar;
- pausar;
- mascarar;
- degradar com segurança;
- solicitar revalidação;
- enviar para quarentena;
- registrar auditoria.

Comportamento proibido:

- permitir ação crítica em fail-open.

---

## 43. Quarentena

ResourceReference deve ser colocado em quarentena quando houver:

- tenant/contexto divergente;
- owner_module desconhecido;
- resource_public_id inválido;
- contrato incompatível;
- payload proibido;
- campo sensível indevido;
- referência externa não validada;
- lifecycle_state suspeito;
- assinatura ou integridade inválida;
- tentativa de uso como autorização;
- tentativa de acesso a domínio interno;
- conflito entre referência e AuthorizationDecision;
- divergência entre cache e módulo dono;
- recurso offline fora da política;
- dado de outro tenant.

Quarentena deve registrar:

- motivo;
- ator;
- módulo produtor;
- módulo consumidor;
- owner_module declarado;
- contrato;
- tenant;
- contexto;
- correlation_id;
- causation_id, quando houver;
- política aplicada;
- ação tomada;
- audit_reference.

---

## 44. Antipadrões proibidos

| Antipadrão | Por que é proibido | Correção |
|---|---|---|
| ResourceReference como banco compartilhado | Transfere domínio | Usar API interna ou read model autorizado |
| ResourceReference como autorização | Bypass do Core | Usar AuthorizationDecision |
| ResourceReference com payload completo | Acoplamento e vazamento | Usar payload mínimo |
| ResourceReference com segredo bruto | Risco crítico | Usar SecretReference |
| ResourceReference com evidência bruta | Quebra cadeia de custódia | Usar EvidenceReference |
| ResourceReference com biometria bruta | Violação LGPD crítica | Usar referência biométrica controlada |
| ResourceReference com vídeo bruto | Exposição sensível | Usar EvidenceReference ou StreamReference |
| ResourceReference sem owner_module | Domínio ambíguo | Rejeitar |
| ResourceReference sem tenant/contexto aplicável | Vazamento multi-tenant | Rejeitar/quarentenar |
| ResourceReference sem no_domain_transfer | Transferência invisível | Rejeitar |
| ResourceReference como read model | Consulta indevida | Criar read model autorizado |
| ResourceReference como evento | Confusão de contrato | Usar EventEnvelope v1 |
| ResourceReference como permissão | Herança falsa | Usar PermissionGrant/InheritanceGrant |
| ResourceReference como chave interna | Vazamento de implementação | Usar ID público opaco |
| ResourceReference com estado desconhecido em ação crítica | Risco físico/digital | Fail-closed |

---

## 45. Matriz conceitual por tipo de recurso

| Tipo de recurso | Owner provável | Referência obrigatória | Autorização | Observação |
|---|---|---|---|---|
| UserAccount | Core Platform | UserAccountReference/ResourceReference | Sim quando sensível | Não expor credenciais |
| PersonProfile | Pessoas e Clientes | ResourceReference | Sim | Não carregar perfil completo |
| ClientProfile | Pessoas e Clientes | ResourceReference | Sim | Respeitar contexto |
| Organização | Organizações | ResourceReference | Sim quando gestão/sensível | Não substituir Tenant/Context |
| Unidade/Bloco/Área/Ambiente | Estrutura | StructureReference/ResourceReference | Sim | Estrutura não decide permissão |
| Gateway | Gateway Local / Mikrotik / Tunnel | ResourceReference | Sim | Sem credencial/IP bruto |
| Dispositivo | Dispositivos | ResourceReference | Sim | DeviceRecord fica no módulo dono |
| Câmera | Câmeras / VMS ou Dispositivos conforme domínio | ResourceReference | Sim | Vídeo usa Evidence/StreamReference |
| Ponto de acesso | Controle de Acesso | ResourceReference | Sim | Abertura exige AuthorizationDecision |
| Credencial física | Controle de Acesso/Pessoas conforme contrato | ResourceReference | Sim | Sem segredo/biometria bruta |
| Alarme | Alarmes | ResourceReference | Sim | Evento crítico auditável |
| Fatura | Financeiro | ResourceReference | Sim | Não executar bloqueio direto |
| Reserva | Reservas | ResourceReference | Sim | Respeitar herança e disponibilidade |
| Ticket | Tickets | ResourceReference | Sim conforme escopo | Anexos usam referência própria |
| Visitante | Convites e Visitantes | ResourceReference | Sim | Dados pessoais minimizados |
| Mural | Mural Informativo | ResourceReference | Condicional | Conteúdo sensível com política |
| Notificação | Notificações | ResourceReference | Condicional | Conteúdo sensível minimizado |
| Automação | Automações | ResourceReference | Sim quando ação crítica | Automação não executa domínio alheio |
| Conector | Marketplace | ResourceReference | Sim | Segredos via SecretReference |
| Evidência | Auditoria/Câmeras/Compliance conforme custódia | EvidenceReference + ResourceReference | Sim | Cadeia de custódia |
| Segredo | Segurança/LGPD ou cofre autorizado | SecretReference | Sim | Nunca bruto |
| Política | Segurança/LGPD/Herança/Core conforme caso | ResourceReference | Sim | Política influencia |
| Auditoria | Core/Auditoria e Compliance | AuditTrailReference/ResourceReference | Sim | Auditoria registra |

---

## 46. Exemplos conceituais corretos

### 46.1 Referência para câmera

```text
resource_reference_id: rr_cam_01
contract_id: NODUOS.CORE.RESOURCE_REFERENCE.v1
contract_version: v1
reference_version: v1
owner_module: Cameras/VMS
resource_type: CameraResource
resource_public_id: cam_pub_9K2
tenant_id: tenant_alpha
context_id: org_alpha
structure_reference: area_garagem_b1
module_scope: camera.view
authorization_scope: camera.live_view
allowed_actions_conceptual: [view, request_clip, attach_evidence]
sensitivity_level: Sensível
data_categories: [Câmera, Stream, Evidência de vídeo]
lifecycle_state: active
availability_state: available
policy_references: [camera_access_policy_alpha]
security_policy_reference: sec_policy_video
lgpd_policy_reference: lgpd_video_policy
masking_policy_reference: mask_video_policy
retention_policy_reference: retention_video_policy
display_label_minimized: Câmera Garagem B1
no_domain_transfer: true
```

### 46.2 Referência para portão

```text
resource_reference_id: rr_access_gate_01
contract_id: NODUOS.CORE.RESOURCE_REFERENCE.v1
contract_version: v1
reference_version: v1
owner_module: Controle de Acesso
resource_type: AccessPoint
resource_public_id: access_pub_MAIN_GATE
tenant_id: tenant_alpha
context_id: org_alpha
structure_reference: entrada_principal
module_scope: access.operation
authorization_scope: access.open
allowed_actions_conceptual: [open, lock, unlock, revoke_access]
sensitivity_level: Crítico
data_categories: [Acesso físico, Evento crítico]
lifecycle_state: active
availability_state: available
security_policy_reference: sec_policy_access
audit_reference: audit_pending_or_generated
no_domain_transfer: true
```

### 46.3 Referência para fatura

```text
resource_reference_id: rr_invoice_2026_06
contract_id: NODUOS.CORE.RESOURCE_REFERENCE.v1
contract_version: v1
reference_version: v1
owner_module: Financeiro
resource_type: Invoice
resource_public_id: inv_pub_2026_06_A9
tenant_id: tenant_alpha
context_id: org_alpha
subject_reference: client_reference_minimized
module_scope: finance.read
authorization_scope: finance.invoice_view
allowed_actions_conceptual: [read, export, pay]
sensitivity_level: Sensível
data_categories: [Financeiro, Cobrança, Pagamento]
masking_policy_reference: mask_finance_policy
retention_policy_reference: retention_finance_policy
display_label_minimized: Fatura 2026-06
no_domain_transfer: true
```

---

## 47. Exemplos proibidos

### 47.1 Recurso com payload completo

```text
resource_reference_id: rr_bad
owner_module: Cameras/VMS
resource_type: Camera
payload:
  ip: 192.168.1.10
  user: admin
  password: 123456
  rtsp_url: rtsp://admin:123456@192.168.1.10/stream
```

Motivo da rejeição:

- segredo bruto;
- IP interno sensível;
- URL com credencial;
- payload completo;
- ausência de SecretReference;
- violação de segurança.

### 47.2 Referência usada como autorização

```text
resource_reference_id: rr_gate
resource_type: AccessPoint
allowed_actions_conceptual: [open]
execute_now: true
```

Motivo da rejeição:

- ResourceReference não executa;
- allowed_actions_conceptual não concede permissão;
- abertura exige AuthorizationDecision;
- módulo dono executa.

### 47.3 Referência sem owner_module

```text
resource_reference_id: rr_unknown
resource_type: Device
resource_public_id: dev_123
no_domain_transfer: true
```

Motivo da rejeição:

- sem owner_module;
- domínio ambíguo;
- risco de acoplamento;
- fail-closed obrigatório.

---

## 48. Auditoria obrigatória

Uso de ResourceReference deve gerar auditoria quando envolver:

- ação crítica;
- ação física;
- visualização sensível;
- exportação;
- vídeo;
- imagem;
- biometria;
- documento;
- financeiro;
- visitante;
- suporte remoto;
- conector externo;
- segredo;
- evidência;
- política de segurança;
- LGPD;
- alteração de permissão;
- alteração de herança;
- recurso bloqueado, expirado, revogado ou quarentenado;
- tentativa negada;
- revalidação crítica;
- uso offline;
- divergência de tenant/contexto.

Campos mínimos de auditoria:

- `audit_id`;
- `tenant_id`;
- `context_id`;
- `actor_reference`;
- `resource_reference`;
- `action`;
- `authorization_decision_reference`, quando aplicável;
- `policy_references`;
- `purpose`;
- `result`;
- `reason_code`;
- `timestamp`;
- `correlation_id`;
- `causation_id`, quando aplicável;
- `source_module`;
- `owner_module`;
- `consumer_module`;
- `sensitivity_level`;
- `masking_applied`;
- `retention_policy_reference`.

---

## 49. Segurança e LGPD

ResourceReference v1 deve seguir:

- minimização;
- finalidade;
- consentimento ou base legal/política quando aplicável;
- mascaramento;
- retenção;
- descarte, expurgo ou anonimização quando aplicável;
- segregação por tenant;
- controle por contexto;
- auditoria de visualização;
- auditoria de exportação;
- fail-closed para sensível/crítico.

Regras absolutas:

- segredo bruto nunca trafega;
- biometria bruta nunca trafega;
- vídeo bruto nunca trafega quando referência bastar;
- evidência bruta nunca trafega quando EvidenceReference bastar;
- documento completo nunca trafega quando referência bastar;
- dados de outro tenant nunca trafegam;
- ausência de política bloqueia uso sensível/crítico.

---

## 50. Compatibilidade com EventEnvelope v1

Todo evento que referenciar recurso deve usar ResourceReference v1.

Campos do EventEnvelope relacionados:

- `resource_reference`;
- `related_resource_references`;
- `actor_reference`;
- `subject_reference`;
- `authorization_decision_reference`;
- `evidence_reference`;
- `secret_reference`;
- `policy_references`;
- `audit_reference`;
- `correlation_id`;
- `causation_id`;
- `payload_minimized`.

Regra:

Payload de evento deve carregar apenas o mínimo necessário para entendimento do fato, não o recurso completo.

---

## 51. Compatibilidade com contratos públicos

Todo contrato público que utilizar ResourceReference deve declarar:

- se ResourceReference é obrigatório, opcional ou proibido;
- qual tipo de recurso pode ser referenciado;
- owner_module esperado;
- tenant/context obrigatório;
- permissão necessária;
- AuthorizationDecision exigida ou herdada;
- políticas de Segurança/LGPD;
- sensibilidade;
- dados permitidos;
- dados proibidos;
- auditoria;
- retenção;
- máscara;
- fail-closed;
- compatibilidade;
- descontinuação.

Contrato sem regra de ResourceReference para recurso intermodular não deve ser aprovado.

---

## 52. Decisão oficial sugerida para 03_DECISOES_OFICIAIS.md

# DEC-196: ResourceReference v1 como padrão oficial de referência segura de recursos entre módulos

## Tema

Contratos públicos, referências seguras, modularidade, ownership, autorização, auditoria, LGPD e prevenção de acoplamento entre módulos.

## Decisão

O NoduOS passa a adotar o ResourceReference v1 como padrão transversal oficial para referenciar recursos físicos, lógicos, estruturais, pessoais, operacionais, financeiros, técnicos, documentais, de evidência, de segredo, de política, de suporte, de integração e de auditoria entre módulos, sem transferir domínio do módulo dono.

ResourceReference v1 deve ser uma referência segura, minimizada, versionada, escopada e auditável. Ele deve declarar, no mínimo, `resource_reference_id`, `contract_id`, `contract_version`, `reference_version`, `owner_module`, `resource_type`, `resource_public_id`, `tenant_id` quando aplicável, `context_id` quando aplicável, `module_scope`, `authorization_scope`, `allowed_actions_conceptual`, `sensitivity_level`, `data_categories`, `lifecycle_state`, políticas aplicáveis, `display_label_minimized`, auditoria quando aplicável e `no_domain_transfer = true`.

ResourceReference v1 não executa ação, não autoriza, não concede permissão, não cria herança, não substitui AuthorizationDecision, não substitui PermissionGrant, não substitui InheritanceGrant, não substitui EvidenceReference, não substitui SecretReference, não substitui EventEnvelope, não substitui read model autorizado e não transfere domínio do recurso.

A existência de ResourceReference não permite ação sensível. Toda ação sensível ou crítica sobre recurso referenciado deve exigir AuthorizationDecision v1 emitida pelo Core Platform, respeitando tenant, contexto, escopo, política, licença, feature flag, permissão, herança, LGPD, auditoria e fail-closed.

O módulo consumidor não pode usar ResourceReference para consultar banco interno, classe interna, regra interna, payload completo, segredo bruto, evidência bruta, biometria bruta, vídeo bruto, documento completo ou dado de outro tenant.

## Motivo

Evitar que referências entre módulos virem banco compartilhado, payload completo, autorização automática, permissão disfarçada, evidência indevida, segredo exposto, read model clandestino, dependência invisível ou invasão de domínio alheio.

Garantir que o NoduOS mantenha modularidade, baixo acoplamento, multi-tenancy, ownership claro, rastreabilidade, auditoria, LGPD, segurança, compatibilidade e fail-closed em todos os fluxos intermodulares.

## Impacto

Todos os módulos que precisarem apontar recursos de outro módulo devem usar ResourceReference v1 ou referência especializada compatível, preservando owner_module e no_domain_transfer.

O Core Platform governa o padrão transversal e usa ResourceReference em autorização, contexto, auditoria, contratos, eventos e decisões, mas não assume domínio completo dos recursos dos módulos donos.

O Catálogo de Contratos Públicos, a Matriz Técnica de Permissões por Contrato, a Matriz Técnica de Dados Sensíveis por Contrato, o EventEnvelope v1, o AuthorizationDecision v1, o EvidenceReference v1 e o SecretReference v1 devem referenciar ResourceReference v1 quando apontarem recursos.

A próxima modelagem técnica de contratos, APIs internas, eventos, comandos, read models, auditoria, suporte, integração, segurança e LGPD deve obedecer ResourceReference v1.

## Status

Aprovada

## Data

2026-06-27

---

## 53. Atualização recomendada para 00_BIBLIA_DO_PROJETO.md

Adicionar seção ou observação em modularidade e comunicação entre módulos:

```text
ResourceReference v1 passa a ser o padrão transversal oficial para apontar recursos entre módulos sem transferir domínio.

Todo recurso pertence ao módulo dono. Outros módulos podem apontar, solicitar autorização, solicitar leitura autorizada ou solicitar ação por contrato/API interna, mas não podem copiar entidade completa, acessar banco interno, usar payload bruto, vazar chave interna ou executar regra de domínio alheia.

Regra curta:

Recurso pertence ao dono. Referência aponta sem tomar posse. Escopo limita. Core autoriza. Módulo dono executa. Auditoria registra.
```

---

## 54. Atualização recomendada para 01_MAPA_DE_MODULOS.md

Adicionar ao Core Platform, em responsabilidades:

```text
Governar o padrão transversal ResourceReference v1 para referências seguras, minimizadas, versionadas, escopadas e auditáveis de recursos entre módulos, sem assumir domínio operacional dos recursos dos módulos donos.
```

Adicionar ao Core Platform, em entidades principais:

```text
ResourceReference.
ResourceReferencePolicy.
ResourceReferenceValidationRecord, como registro conceitual de validação/auditoria quando aplicável.
```

Adicionar observação transversal aos módulos:

```text
Quando um módulo precisar apontar recurso pertencente a outro módulo, deve usar ResourceReference v1, preservando owner_module, tenant, contexto, resource_type, resource_public_id, sensitivity_level, políticas aplicáveis e no_domain_transfer = true.

ResourceReference não transfere domínio, não concede permissão, não autoriza ação e não substitui API interna, evento, read model autorizado, EvidenceReference, SecretReference ou AuthorizationDecision.
```

---

## 55. Atualização recomendada para 02_REGRAS_DE_ARQUITETURA.md

Adicionar seção específica:

```text
## ResourceReference v1

ResourceReference v1 é o padrão transversal obrigatório para apontar recursos físicos, lógicos, estruturais, pessoais, operacionais, financeiros, técnicos, documentais, de evidência, de segredo, de política, de suporte, de integração e de auditoria entre módulos sem transferir domínio.

Todo ResourceReference deve declarar owner_module, resource_type, resource_public_id, tenant_id/context_id quando aplicável, sensitivity_level, lifecycle_state, políticas aplicáveis, display_label minimizado e no_domain_transfer = true.

ResourceReference não é autorização, permissão, evidência, segredo, evento, read model, banco compartilhado, payload completo ou execução de regra do módulo dono.

Ação sensível sobre recurso referenciado exige AuthorizationDecision do Core Platform. Módulo dono executa. Auditoria registra.

ResourceReference sem owner_module, resource_type, resource_public_id, tenant/contexto aplicável ou no_domain_transfer = true deve falhar fechado.
```

---

## 56. Atualização recomendada para 03_DECISOES_OFICIAIS.md

Inserir DEC-196 após DEC-195, respeitando sequência:

```text
# DEC-196: ResourceReference v1 como padrão oficial de referência segura de recursos entre módulos

[Inserir o texto completo da seção 52 deste documento]
```

Após aplicação conjunta:

```text
Última DEC consolidada: DEC-198.
Próxima DEC livre: DEC-197.
```

---

## 57. Atualização recomendada para 04_PROMPTS_DE_TRABALHO.md

Adicionar prompt de uso futuro:

```text
Ao definir contratos, APIs internas, eventos, comandos, read models, auditorias, integrações, suporte, exportações ou fluxos que apontem recursos entre módulos, usar obrigatoriamente ResourceReference v1.

ResourceReference v1 deve declarar owner_module, resource_type, resource_public_id, tenant_id/context_id quando aplicável, module_scope, authorization_scope, sensitivity_level, lifecycle_state, políticas aplicáveis, display_label minimizado, audit_reference quando aplicável e no_domain_transfer = true.

Não permitir ResourceReference como banco compartilhado, autorização, permissão, evidência, segredo, evento, read model, payload completo, chave interna vazada ou atalho para banco interno.

Ação sensível sobre ResourceReference exige AuthorizationDecision v1 do Core Platform. O módulo dono executa. Auditoria registra.
```

---

## 58. Atualização recomendada para 05_CATALOGO_DE_CONTRATOS_PUBLICOS.md

Atualizar a seção de ResourceReference:

```text
## ResourceReference v1

ResourceReference v1 permite referenciar recursos entre módulos sem transferência de domínio.

Campos mínimos:
resource_reference_id, contract_id, contract_version, reference_version, owner_module, resource_type, resource_public_id, tenant_id quando aplicável, context_id quando aplicável, structure_reference quando localizado fisicamente, module_scope, authorization_scope, allowed_actions_conceptual, sensitivity_level, data_categories, lifecycle_state, availability_state quando aplicável, policy_references, display_label_minimized, audit_reference quando aplicável e no_domain_transfer = true.

Proibições:
ResourceReference não pode carregar payload completo, entidade interna, chave primária interna, segredo bruto, evidência bruta, biometria bruta, vídeo bruto, documento completo, dado de outro tenant ou autorização automática.

Regra:
ResourceReference aponta recurso. AuthorizationDecision decide ação sensível. Módulo dono executa.
```

---

## 59. Atualização recomendada para 06_MATRIZ_TECNICA_PERMISSOES_POR_CONTRATO.md

Adicionar observação transversal:

```text
Contratos que apontem recurso intermodular devem exigir ResourceReference v1.

ResourceReference não concede permissão. A permissão continua sendo definida por PermissionGrant, InheritanceGrant, política, licença, feature flag e AuthorizationDecision do Core Platform quando aplicável.

Contratos sensíveis ou críticos que usem ResourceReference devem falhar fechado sem tenant, contexto, owner_module, resource_type, resource_public_id, política aplicável, autorização exigida ou auditoria.
```

---

## 60. Atualização recomendada para 07_MATRIZ_TECNICA_DADOS_SENSIVEIS_POR_CONTRATO.md

Adicionar seção específica:

```text
## Regras de dados sensíveis em ResourceReference v1

ResourceReference v1 deve carregar apenas referência minimizada e metadados necessários para escopo, autorização, auditoria, política e rastreabilidade.

É proibido transportar segredo bruto, biometria bruta, vídeo bruto, imagem bruta, evidência bruta, documento completo, payload financeiro completo, dado de outro tenant, dado fora do contexto autorizado, chave interna de banco, objeto interno ou payload completo do módulo dono.

Quando houver dado sensível ou crítico, ResourceReference deve declarar sensitivity_level, data_categories, purpose quando aplicável, policy_references, security_policy_reference, lgpd_policy_reference, masking_policy_reference, retention_policy_reference, audit_reference e fail-closed.

Quando referência bastar, dado bruto é proibido.
```

---

## 61. Atualização recomendada para 08_DETALHAMENTO_EVENTENVELOPE_V1.md

Adicionar complemento:

```text
Eventos que apontem recursos devem usar ResourceReference v1 no campo resource_reference ou related_resource_references.

O EventEnvelope v1 não deve transportar recurso completo. ResourceReference deve preservar owner_module, resource_type, resource_public_id, tenant, contexto, sensitivity_level, lifecycle_state, políticas aplicáveis, display_label minimizado e no_domain_transfer = true.

AuthorizationDecision em evento continua sendo referência da decisão original, não autorização nova. Se o consumidor precisar executar nova ação sensível sobre o recurso referenciado, deve solicitar nova AuthorizationDecision ao Core Platform.
```

---

## 62. Novo arquivo técnico sugerido

Criar:

```text
12_DETALHAMENTO_RESOURCEREFERENCE_V1.md
```

Conteúdo:

```text
CANVA FINAL - DETALHAMENTO DE RESOURCEREFERENCE V1 NODUOS
[Inserir integralmente este documento]
```

---

## 63. README sugerido para o pacote final desta etapa

```text
# PACOTE FINAL - RAIZ NODUOS ATUALIZADA COM DETALHAMENTO DE RESOURCEREFERENCE V1

Status: Base oficial atualizada com AuthorizationDecision v1, ResourceReference v1, DEC-195, DEC-196 e documentos técnicos raiz 11 e 12.
Data: 2026-06-27

Inclui:

- CANVA_FINAL_DETALHAMENTO_RESOURCEREFERENCE_V1_NODUOS.txt
- 12_DETALHAMENTO_RESOURCEREFERENCE_V1.md
- DEC-196 aplicada após DEC-195
- Atualizações recomendadas para 00, 01, 02, 03, 04, 05, 06, 07 e 08

Estado decisório:

- Última DEC física informada antes da consolidação conjunta: DEC-194
- DEC-195: AuthorizationDecision v1, aprovada como rascunho pendente de consolidação
- DEC-196: ResourceReference v1, aprovada para consolidação conjunta
- Próxima DEC livre após aplicação: DEC-197

Atualizações principais:

- ResourceReference v1 consolidado como padrão transversal oficial para referência segura de recursos entre módulos.
- Obrigatoriedade de owner_module, resource_type, resource_public_id, tenant/context quando aplicável, sensitivity_level, lifecycle_state, políticas e no_domain_transfer = true.
- Proibição de ResourceReference como banco compartilhado, autorização, permissão, evidência, segredo, evento, read model, payload completo ou acesso a domínio interno.
- Relação formal com AuthorizationDecision v1, PermissionGrant, InheritanceGrant, EventEnvelope v1, EvidenceReference v1, SecretReference v1, APIs internas, read models autorizados, auditoria e LGPD.
- Regras de cache, revalidação, lifecycle, availability, quarentena, fail-closed, versionamento e compatibilidade.

Frase guia:

Recurso pertence ao dono. Referência aponta sem tomar posse. Escopo limita. Core autoriza. Módulo dono executa. Auditoria registra.
```

---

## 64. Resumo aprovado do ResourceReference v1

O ResourceReference v1 é o padrão transversal do NoduOS para apontar recursos entre módulos sem transferir domínio.

Ele resolve uma fronteira crítica da arquitetura: módulos precisam falar sobre recursos uns dos outros sem invadir banco, copiar payload, assumir posse, vazar segredo ou executar domínio alheio.

Regra final:

- ResourceReference aponta.
- PermissionGrant concede permissão.
- InheritanceGrant propaga herança.
- AuthorizationDecision decide.
- EventEnvelope comunica.
- EvidenceReference referencia prova.
- SecretReference referencia segredo.
- Read model consulta visão autorizada.
- API interna solicita leitura ou ação.
- Módulo dono executa.
- Auditoria registra.

Com isso, o NoduOS preserva modularidade, segurança, LGPD, rastreabilidade, baixa dependência e governança de contratos.


---

## 65. Consolidação física na raiz

Este documento foi aplicado como arquivo técnico raiz oficial `12_DETALHAMENTO_RESOURCEREFERENCE_V1.md`.

Estado após aplicação conjunta:

```text
DEC-195 consolidada: AuthorizationDecision v1.
DEC-196 consolidada: ResourceReference v1.
Última DEC consolidada na raiz: DEC-198.
Próxima DEC livre: DEC-197.
Próxima etapa recomendada: Blueprint técnico da aplicação.
```

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
