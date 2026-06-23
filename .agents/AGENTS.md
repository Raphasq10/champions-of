# Regras de Comportamento do Antigravity

- **Identificação Proativa de Recursos (.agents):** Para qualquer solicitação do usuário, o assistente deve analisar proativamente o prompt e identificar quais arquivos de configuração, agentes, regras (`.agents/rules/`), workflows (`.agents/workflows/`) ou habilidades (`.agents/skills/`) na pasta `.agents` podem ser utilizados para planejar, validar ou executar a tarefa da melhor forma possível. O assistente deve ler e aplicar esses recursos de forma transparente, sem exigir que o usuário peça explicitamente para carregar ou ler cada arquivo.
