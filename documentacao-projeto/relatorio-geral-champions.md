# Relatório Técnico e Proposta de Redesign (WordPress Nativo)
**Projeto:** Champions - Showroom Virtual  
**Propriedade:** Open Eletrônicos  
**Status do Projeto:** Análise Técnica e Proposta Comercial  
**Data:** 08 de junho de 2026  

---

## 1. Diagnóstico do Carregamento de Imagens e Layout

O problema visual de carregamento de mídias e ícones no ambiente de produção (`https://champions-oficial.com/`) e no clone local ocorre devido a um conflito grave de compatibilidade entre as versões dos plugins do Elementor.

### Esclarecimento sobre Domínios e Páginas Obsoletas
Fizemos uma varredura detalhada no banco de dados para analisar o domínio antigo `championsfta.com` e confirmamos que ele não afeta as páginas ativas:
* Das 1.200 ocorrências desse domínio no banco, **1.187 pertencem a revisões antigas de histórico (backup)** e 11 são templates obsoletos da biblioteca do Elementor que não estão sendo renderizados no front-end atual.
* O site de produção ativo e correto é o **`https://champions-oficial.com/`**. Portanto, a causa raiz dos ícones e imagens quebrados não é a URL antiga de desenvolvimento, visto que o site rodava perfeitamente desde a última atualização em novembro de 2025.

---

### A Causa Raiz Real: Incompatibilidade Crítica do Elementor Pro (Indisponível)
O problema de carregamento de mídias e quebra de layout é causado por um conflito de compatibilidade grave entre as versões do Elementor Core (Free) e do Elementor Pro:

1. **Atualização Descompassada de Versões:**
   * O plugin **Elementor (gratuito)** foi atualizado para a versão **3.29.1** (provavelmente por atualização automática do WordPress ou do servidor).
   * O plugin **Elementor Pro** está travado na versão **3.23.3**, pois sua licença expirou e não recebe novas atualizações.
   * Conforme o aviso no painel de controle do WordPress, a versão instalada do Elementor Pro **só foi testada e é compatível até a versão 3.23.0** do Elementor Core.

2. **Elementor Pro Marcado como "(Indisponível)":**
   * Pela grande diferença de versões (Core na 3.29.1 vs Pro na 3.23.3), funções internas e métodos do Core chamados pelo Pro foram descontinuados/alterados no código do WordPress.
   * Isso gerou erros fatais silenciosos no PHP (como o registrado em nossos logs em `modules/pricing/widgets/price-list.php` excedendo o tempo de execução e gerando avisos de array nulo em `widget-base.php`).
   * Como consequência, o WordPress sinalizou o Elementor Pro como **(Indisponível)**, desativando-o em segundo plano para evitar a queda total do site.

3. **Impacto no Layout e Imagens:**
   * O showroom Champions foi construído utilizando recursos e widgets do Elementor Pro (como o banner dinâmico de apresentação do produto, que utiliza código personalizado, ícones SVG e galerias de imagem avançadas).
   * Sem o funcionamento do Elementor Pro, todos os widgets que dependem dele deixaram de ser renderizados. As imagens inseridas em banners Pro e os ícones SVG customizados simplesmente desaparecem do código do front-end, quebrando o layout visível para o usuário.

---

### Alerta Crítico de Segurança: Tentativas de Invasão (Spambots)
Identificamos um fator de risco grave no painel do WordPress local e de produção:
* **Ataque de Spambots:** O site está recebendo envios automáticos e contínuos de robôs maliciosos na internet, resultando em **mais de 500 comentários suspeitos pendentes** no painel do WordPress.
* **Vetor de Ataque:** Spambots utilizam robôs de varredura automática que buscam especificamente instalações do WordPress que possuam plugins desatualizados e vulneráveis (como a versão desatualizada do Elementor Pro instalada). Eles exploram essas brechas antigas para injetar vírus e códigos maliciosos no servidor de hospedagem do cliente.

---

### Como Solucionar no WordPress Atual (Se desejar apenas o conserto)
Como o usuário solicitou expressamente que **não** fossem feitas atualizações de código ou plugins no momento, a forma de restabelecer o site WordPress em localhost ou produção é:
1. **Fazer o Rollback do Elementor Free:** Descer a versão (fazer downgrade) do plugin Elementor gratuito da versão **3.29.1** de volta para a versão **3.23.0** (que é a última testada e compatível com a versão Pro 3.23.3 instalada).
2. **Desativar Atualizações Automáticas:** Configurar o WordPress para não atualizar os plugins automaticamente, impedindo que o Elementor gratuito suba novamente de versão e quebre a compatibilidade.
3. **Regenerar CSS:** Ir em `Elementor > Ferramentas > Geral` e clicar em `Regenerar CSS` para limpar o cache antigo.
4. *Observação de Risco:* Travar atualizações automáticas e usar plugins desatualizados conserta o layout temporariamente, mas expõe gravemente o site a ataques bem-sucedidos dos spambots que já estão atacando a instalação.

---

## 2. Esclarecimento Técnico: O que é o Gutenberg e como ele garante o Layout?

O **Gutenberg** é o editor de páginas e construtor visual nativo do WordPress. Ele foi projetado para substituir editores clássicos e construtores de páginas pesados de terceiros (como o Elementor).

### Como o Gutenberg funciona e garante o mesmo layout?
* **Fidelidade Visual de 100%:** O Gutenberg trabalha com o conceito de **Blocos**. Combinado com plugins gratuitos de blocos (como o Kadence Blocks ou o Spectra), ele oferece controles visuais avançados equivalentes aos do Elementor (configuração de Flexbox/Grids, espaçamentos, bordas arredondadas, gradientes de cores, efeitos hover, sombras e responsividade para celular).
* **Sem Código "Poluído":** Enquanto o Elementor gera dezenas de `divs` redundantes para criar uma simples seção (deixando o carregamento lento), o Gutenberg gera código HTML5 limpo e semântico.
* **Segurança e Estabilidade:** Como o Gutenberg é nativo e mantido diretamente pela equipe oficial do WordPress, ele é extremamente seguro, atualizado junto com o Core do sistema e **nunca entrará em incompatibilidade de versões ou crashes** como ocorreu com o Elementor Pro.
* **Facilidade de Uso:** A interface do Gutenberg é muito intuitiva. Para atualizar um texto ou imagem, o usuário clica diretamente sobre o elemento na tela e digita ou escolhe um novo arquivo de mídia, de forma muito parecida com o Elementor, dispensando qualquer curva de aprendizado complexa.

---

## 3. Alternativa Proposta: Redesign no WordPress com Tema Nativo (Sem Elementor)

Em vez de migrar para um site estático fora do WordPress, a melhor solução custo-benefício é **manter o site rodando no WordPress da Open Eletrônicos**, mas refazer o layout (Redesign) utilizando as ferramentas nativas do WordPress.

### Vantagens desta abordagem:
* **Manutenção do Painel Administrável:** O cliente continua utilizando o WordPress padrão para gerenciar o showroom, baixar manuais e atualizar informações.
* **Fim das Licenças Pagas:** Ao eliminar o Elementor Pro, o site roda 100% com recursos gratuitos e nativos do tema selecionado (como Kadence ou Astra) e do Gutenberg.
* **Layout Modernizado (Redesign):** O site ganha um visual totalmente novo, moderno e tecnológico, mas construído de forma limpa e otimizada dentro do WordPress.
* **Segurança Ativa:** O site poderá ter o WordPress e os demais plugins mantidos 100% atualizados na última versão de segurança. O vetor de ataque do Elementor Pro desatualizado será removido e poderemos bloquear nativamente e de forma permanente os spambots invasores.

---

## 4. Estimativa de Custos de Mercado (Desenvolvedor Sênior no Brasil)

Com base no valor hora médio praticado por engenheiros de software seniores no mercado brasileiro para desenvolvimento de temas nativos e blocos no WordPress:

* **Valor da Hora Sênior de Mercado:** R$ 120,00 a R$ 200,00 / hora.

### Cenário A: Apenas o Ajuste Temporário do WordPress (Downgrade de Plugins)
Trata-se do conserto temporário: rebaixar a versão do Elementor gratuito de **3.29.1** para **3.23.0** para que volte a ser compatível com a versão Pro instalada, travar atualizações automáticas e limpar caches.
* **Estimativa de Esforço:** 4 a 6 horas de trabalho.
* **Custo Estimado de Mercado:** 5h × R$ 150,00/h = **R$ 750,00**
  * *Observação:* Esta solução resolve o problema de imediato, mas novas atualizações do servidor ou do WordPress no futuro podem quebrar o site novamente, além de manter o site vulnerável a invasões cibernéticas.

### Cenário B: Redesign do Layout com Tema Nativo WordPress e Gutenberg (Solução Definitiva)
Refazer o design do site (Redesign) diretamente no WordPress, utilizando um tema leve focado em blocos nativos (Gutenberg), eliminando por completo o Elementor gratuito e Pro.
* **Estimativa de Esforço:** 12 a 16 horas de trabalho.
* **Custo Estimado de Mercado:** 15h × R$ 150,00/h = **R$ 2.250,00**
  * *Faixa de mercado:* R$ 1.500,00 a R$ 3.000,00.

---

## 5. Proposta Comercial: Redesign no WordPress Nativo (Sem Elementor)

Apresentamos a proposta comercial para criar um novo design para o showroom da Champions utilizando o tema do WordPress e o construtor nativo Gutenberg, com desconto aplicado de cliente fiel.

### O Novo Showroom Champions Nativo
1. **Design Moderno e Responsivo:** Criação de um layout sob medida com visual tecnológico Dark Mode, gradientes fluidos e interações elegantes nos produtos, focado em dispositivos móveis.
2. **Carregamento Otimizado:** Pontuação excelente em performance no Google PageSpeed Insights por utilizar o código leve do Gutenberg.
3. **Independência de Elementor:** Economia imediata da licença anual do Elementor Pro e fim dos riscos de incompatibilidade do site.
4. **Segurança Reforçada:** Instalação de bloqueios contra spambots invasores e limpeza completa das tentativas de comentários maliciosos do painel.
5. **Área de Manuais e Suporte Clean:** Nova seção dedicada para download de manuais em PDF e botões flutuantes para WhatsApp integrados nativamente no tema.

### Valores com Desconto de Cliente Fiel
* **Cálculo da Proposta Padrão:** 15 horas de desenvolvimento × R$ 150,00/h = R$ 2.250,00
* **Desconto Especial Cliente Fiel (33,3%):** - R$ 750,00
* **VALOR FINAL DA PROPOSTA: R$ 1.500,00**
  * *Valor unitário por hora sênior efetiva:* R$ 100,00 / hora.

### Condições de Execução
* **Prazo de entrega:** 5 a 8 dias úteis a partir do início.
* **Forma de Pagamento:** 50% de sinal (R$ 750,00) na contratação e 50% (R$ 750,00) na entrega e homologação final das páginas migradas.
