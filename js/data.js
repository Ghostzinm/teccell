/* ==========================================================================
   DUARTE TECCELL — DADOS CONFIGURÁVEIS
   Edite os valores abaixo para atualizar o conteúdo do site sem tocar
   no HTML/CSS. Tudo aqui é texto simples ou números.
   ========================================================================== */

window.DUARTE_CONFIG = {
  // Número de WhatsApp em formato internacional, somente dígitos.
  // TROCAR pelo número real da loja antes de publicar.
  whatsapp: {
    number: "5511999999999",
    defaultMessage:
      "Olá, Duarte Teccell! Gostaria de solicitar um diagnóstico para o meu aparelho.",
  },

  // Endereço e horário — TROCAR pelos dados reais.
  contact: {
    address: "Av. Exemplo, 1234 — Centro, São Paulo/SP",
    hours: "Seg a Sáb · 09h às 18h",
    instagram: "https://instagram.com/duarteteccell",
  },

  // Estatísticas em destaque. São placeholders — troque por números reais
  // assim que a Duarte Teccell fornecer os dados.
  stats: [
    { value: 1000, prefix: "+", suffix: "", label: "Aparelhos atendidos" },
    { value: 8, prefix: "+", suffix: " anos", label: "Experiência técnica" },
    { value: 100, prefix: "", suffix: "%", label: "Foco no diagnóstico" },
  ],

  // Marcas atendidas — adicione ou remova livremente.
  brands: ["Apple", "Samsung", "Motorola", "Xiaomi", "Redmi", "Realme"],

  // Serviços — chave usada para o painel de leitura (readout).
  services: [
    {
      code: "01",
      key: "display",
      name: "Display",
      title: "Display",
      description:
        "Recuperação da experiência visual do aparelho, com componentes de qualidade e instalação técnica de precisão.",
    },
    {
      code: "02",
      key: "energia",
      name: "Energia",
      title: "Energia",
      description:
        "Diagnóstico e substituição de bateria para recuperar autonomia real e desempenho do aparelho.",
    },
    {
      code: "03",
      key: "conectividade",
      name: "Conectividade",
      title: "Conectividade",
      description:
        "Correção de falhas relacionadas a carregamento, conector de carga e alimentação de energia.",
    },
    {
      code: "04",
      key: "imagem-audio",
      name: "Câmeras e áudio",
      title: "Imagem & Áudio",
      description:
        "Reparo de câmeras, microfone e alto-falante, com testes de calibração após a intervenção.",
    },
    {
      code: "05",
      key: "software",
      name: "Software",
      title: "Software",
      description:
        "Correção de falhas de sistema, travamentos e configuração para restaurar o funcionamento pleno.",
    },
    {
      code: "06",
      key: "placa",
      name: "Placa lógica",
      title: "Placa Lógica",
      description:
        "Diagnóstico especializado em microeletrônica para falhas elétricas e componentes internos.",
    },
    {
      code: "07",
      key: "recuperacao",
      name: "Recuperação de dados",
      title: "Recuperação",
      description:
        "Recuperação de aparelhos com dano severo, incluindo casos com oxidação e falha total de energia.",
    },
  ],

  // Depoimentos — substitua pelos comentários reais quando disponíveis.
  testimonials: [
    {
      name: "R. Andrade",
      quote:
        "Explicaram o problema da placa antes de qualquer coisa. Recebi o aparelho testado e funcionando de verdade.",
    },
    {
      name: "C. Ferreira",
      quote:
        "Troquei a tela e a bateria no mesmo dia. Processo transparente do orçamento até a entrega.",
    },
    {
      name: "M. Souza",
      quote:
        "Achei que tinha perdido as fotos. O aparelho voltou recuperado e com diagnóstico detalhado.",
    },
  ],
};
