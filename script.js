/**
 * Duarte_TecCell: site interactions and service estimate flow.
 * Edit catalog.js to maintain supported models and service price ranges.
 */
const WHATSAPP_NUMBER = "5519983640257";
const INSTAGRAM_URL = "";
const WHATSAPP_MESSAGE = "Olá! Gostaria de solicitar uma avaliação para o meu aparelho.";
const CATALOG = window.DUARTE_CATALOG;

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

function makeWhatsAppUrl(message) {
  const phone = WHATSAPP_NUMBER.replace(/\D/g, "");
  const query = encodeURIComponent(message);
  return phone
    ? "https://wa.me/" + phone + "?text=" + query
    : "https://wa.me/?text=" + query;
}

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.href = makeWhatsAppUrl(WHATSAPP_MESSAGE);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

const instagramLink = document.querySelector("[data-instagram]");
if (instagramLink && INSTAGRAM_URL) {
  instagramLink.href = INSTAGRAM_URL;
  instagramLink.target = "_blank";
  instagramLink.rel = "noopener noreferrer";
} else if (instagramLink) {
  instagramLink.addEventListener("click", (event) => event.preventDefault());
  instagramLink.title = "Configure o perfil do Instagram em script.js";
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu");
const navigation = document.querySelector(".top nav");
if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menu");
    });
  });
}

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if ("IntersectionObserver" in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
}

const quoteForm = document.querySelector("#quote-form");
const quoteService = document.querySelector("#quote-service");
const quoteBrand = document.querySelector("#quote-brand");
const quoteModel = document.querySelector("#quote-model");
const modelHelp = document.querySelector("#model-help");
const estimateValue = document.querySelector("#quote-value");
const estimateTitle = document.querySelector("#quote-title");
const estimateStatus = document.querySelector("#quote-status");
const estimatePrompt = document.querySelector("#quote-prompt");
const quoteWhatsApp = document.querySelector("#quote-whatsapp");
const catalogNotice = document.querySelector("#catalog-notice");

function resetEstimate() {
  if (estimateValue) estimateValue.hidden = true;
  if (estimateTitle) estimateTitle.hidden = true;
  if (estimatePrompt) estimatePrompt.hidden = false;
  if (estimateStatus) {
    estimateStatus.textContent = "Escolha o serviço, a marca e o modelo para consultar a faixa.";
  }
  if (quoteWhatsApp) quoteWhatsApp.hidden = true;
}

function modelsFor(serviceId, brandId) {
  if (!CATALOG) return [];
  return CATALOG.models.filter((model) => {
    const range = model.prices?.[serviceId];
    return model.brand === brandId && range && Number.isFinite(range.min) && Number.isFinite(range.max);
  });
}

function priceGroup(range) {
  const midpoint = (range.min + range.max) / 2;
  if (midpoint <= 500) return "Até " + currency.format(500);
  if (midpoint <= 1000) return currency.format(501) + " a " + currency.format(1000);
  return "Acima de " + currency.format(1000);
}

function setWhatsApp(message) {
  if (!quoteWhatsApp) return;
  quoteWhatsApp.href = makeWhatsAppUrl(message);
  quoteWhatsApp.target = "_blank";
  quoteWhatsApp.rel = "noopener noreferrer";
}

function updateBrandOptions() {
  const serviceId = quoteService.value;
  quoteBrand.replaceChildren(new Option("Selecione a marca", ""));
  quoteModel.replaceChildren(new Option("Selecione primeiro o serviço e a marca", ""));
  quoteBrand.disabled = !serviceId;
  quoteModel.disabled = true;
  resetEstimate();

  if (!serviceId) {
    modelHelp.textContent = "Selecione um serviço para ver as marcas e modelos disponíveis.";
    return;
  }

  const availableBrands = Object.keys(CATALOG.brands).filter((brandId) =>
    modelsFor(serviceId, brandId).length > 0
  );

  if (availableBrands.length === 0) {
    quoteBrand.disabled = true;
    quoteModel.replaceChildren(new Option("Sem modelos cadastrados para este serviço", ""));
    modelHelp.textContent = "Este serviço ainda não tem modelos e faixas cadastrados. Peça a cotação pelo WhatsApp.";
    setWhatsApp("Olá! Gostaria de consultar " + quoteService.selectedOptions[0].text + ".");
    quoteWhatsApp.hidden = false;
    return;
  }

  availableBrands.forEach((brandId) => {
    quoteBrand.add(new Option(CATALOG.brands[brandId], brandId));
  });
  modelHelp.textContent = "Escolha a marca para carregar os modelos com faixa estimada.";
}

function updateModelOptions() {
  const serviceId = quoteService.value;
  const brandId = quoteBrand.value;
  quoteModel.replaceChildren(new Option("Selecione um modelo", ""));
  quoteModel.disabled = !brandId;
  resetEstimate();

  if (!serviceId || !brandId) {
    modelHelp.textContent = "Selecione uma marca para carregar os modelos disponíveis.";
    return;
  }

  const models = modelsFor(serviceId, brandId)
    .sort((a, b) => ((a.prices[serviceId].min + a.prices[serviceId].max) / 2) -
                    ((b.prices[serviceId].min + b.prices[serviceId].max) / 2));
  const groups = new Map();

  models.forEach((model) => {
    const range = model.prices[serviceId];
    const groupLabel = priceGroup(range);
    if (!groups.has(groupLabel)) {
      const group = document.createElement("optgroup");
      group.label = groupLabel;
      groups.set(groupLabel, group);
      quoteModel.add(group);
    }

    const option = new Option(
      model.name + " · " + currency.format(range.min) + " – " + currency.format(range.max),
      model.id,
    );
    groups.get(groupLabel).append(option);
  });

  quoteModel.disabled = models.length === 0;
  modelHelp.textContent = models.length
    ? "Os modelos estão agrupados por faixas de preço semelhantes."
    : "Não há modelos cadastrados para essa combinação. Fale com a equipe para uma cotação.";
}

function showEstimate() {
  const model = CATALOG.models.find((item) => item.id === quoteModel.value);
  if (!model) {
    resetEstimate();
    return;
  }

  const service = CATALOG.services.find((item) => item.id === quoteService.value);
  const range = model.prices[quoteService.value];
  const priceText = currency.format(range.min) + " – " + currency.format(range.max);
  estimatePrompt.hidden = true;
  estimateTitle.hidden = false;
  estimateValue.hidden = false;
  estimateTitle.textContent = model.name + " · " + service.label;
  estimateValue.textContent = priceText;
  estimateStatus.textContent = CATALOG.demoMode
    ? "Valor demonstrativo para testar a consulta. Confirme e atualize a tabela antes de publicar."
    : "Faixa estimada. O valor final depende da avaliação técnica do aparelho.";

  const message = "Olá! Quero consultar " + service.label.toLowerCase() +
    " para " + model.name + ". Faixa exibida: " + priceText + ".";
  setWhatsApp(message);
  quoteWhatsApp.hidden = false;
}

if (quoteForm && CATALOG) {
  CATALOG.services.forEach((service) => {
    quoteService.add(new Option(service.label, service.id));
  });

  if (catalogNotice) {
    catalogNotice.hidden = !CATALOG.demoMode;
  }

  quoteService.addEventListener("change", updateBrandOptions);
  quoteBrand.addEventListener("change", updateModelOptions);
  quoteModel.addEventListener("change", showEstimate);
}
