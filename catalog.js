/**
 * Catálogo comercial Duarte_TecCell.
 *
 * Os valores atuais são demonstrativos, para validar o fluxo da consulta.
 * Atualize todos os preços e defina demoMode como false antes de publicar.
 *
 * Cada modelo tem faixas por serviço (em BRL). O site agrupa os modelos por
 * faixa aproximada e mostra o intervalo quando o cliente seleciona um deles.
 */
window.DUARTE_CATALOG = {
  demoMode: true,

  brands: {
    iphone: "Apple / iPhone",
    samsung: "Samsung Galaxy",
    motorola: "Motorola",
    xiaomi: "Xiaomi / Redmi",
  },

  services: [
    { id: "screen", label: "Troca de tela" },
    { id: "battery", label: "Troca de bateria" },
    { id: "back-cover", label: "Troca de tampa traseira" },
    { id: "charging-port", label: "Conector de carga" },
    { id: "camera", label: "Troca de câmera" },
    { id: "cleaning", label: "Limpeza interna" },
    { id: "oxidation", label: "Recuperação de oxidação" },
    { id: "microsoldering", label: "Micro solda / reparo em placa" },
    { id: "diagnostics", label: "Diagnóstico e reparos gerais" },
  ],

  // Valores ilustrativos. Troque-os pelos preços aprovados pela assistência.
  models: [
    {
      id: "iphone-11",
      brand: "iphone",
      name: "iPhone 11",
      prices: {
        screen: { min: 390, max: 550 },
        battery: { min: 220, max: 320 },
      },
    },
    {
      id: "iphone-12",
      brand: "iphone",
      name: "iPhone 12",
      prices: {
        screen: { min: 520, max: 780 },
        battery: { min: 250, max: 380 },
      },
    },
    {
      id: "iphone-13",
      brand: "iphone",
      name: "iPhone 13",
      prices: {
        screen: { min: 700, max: 950 },
        battery: { min: 300, max: 430 },
      },
    },
    {
      id: "iphone-14",
      brand: "iphone",
      name: "iPhone 14",
      prices: {
        screen: { min: 850, max: 1200 },
        battery: { min: 350, max: 490 },
      },
    },
    {
      id: "iphone-15",
      brand: "iphone",
      name: "iPhone 15",
      prices: {
        screen: { min: 1100, max: 1500 },
        battery: { min: 450, max: 650 },
      },
    },
    {
      id: "galaxy-a14",
      brand: "samsung",
      name: "Galaxy A14",
      prices: {
        screen: { min: 280, max: 420 },
        battery: { min: 180, max: 300 },
      },
    },
    {
      id: "galaxy-a34",
      brand: "samsung",
      name: "Galaxy A34",
      prices: {
        screen: { min: 450, max: 680 },
        battery: { min: 250, max: 400 },
      },
    },
    {
      id: "galaxy-a54",
      brand: "samsung",
      name: "Galaxy A54",
      prices: {
        screen: { min: 550, max: 820 },
        battery: { min: 300, max: 450 },
      },
    },
    {
      id: "galaxy-s21-fe",
      brand: "samsung",
      name: "Galaxy S21 FE",
      prices: {
        screen: { min: 750, max: 1150 },
        battery: { min: 350, max: 550 },
      },
    },
    {
      id: "galaxy-s22",
      brand: "samsung",
      name: "Galaxy S22",
      prices: {
        screen: { min: 900, max: 1350 },
        battery: { min: 400, max: 650 },
      },
    },
    {
      id: "galaxy-s23",
      brand: "samsung",
      name: "Galaxy S23",
      prices: {
        screen: { min: 1050, max: 1500 },
        battery: { min: 450, max: 700 },
      },
    },
    {
      id: "moto-g54",
      brand: "motorola",
      name: "Moto G54",
      prices: {
        screen: { min: 300, max: 480 },
        battery: { min: 200, max: 330 },
      },
    },
    {
      id: "moto-g84",
      brand: "motorola",
      name: "Moto G84",
      prices: {
        screen: { min: 430, max: 650 },
        battery: { min: 250, max: 400 },
      },
    },
    {
      id: "motorola-edge-40",
      brand: "motorola",
      name: "Motorola Edge 40",
      prices: {
        screen: { min: 650, max: 950 },
        battery: { min: 350, max: 500 },
      },
    },
    {
      id: "redmi-note-12",
      brand: "xiaomi",
      name: "Redmi Note 12",
      prices: {
        screen: { min: 420, max: 650 },
        battery: { min: 220, max: 350 },
      },
    },
    {
      id: "redmi-note-13",
      brand: "xiaomi",
      name: "Redmi Note 13",
      prices: {
        screen: { min: 500, max: 750 },
        battery: { min: 280, max: 420 },
      },
    },
    {
      id: "poco-x5",
      brand: "xiaomi",
      name: "POCO X5",
      prices: {
        screen: { min: 550, max: 850 },
        battery: { min: 300, max: 480 },
      },
    },
  ],
};
