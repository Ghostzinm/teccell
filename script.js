/** Contact settings: fill in confirmed business contact details. */
const WHATSAPP_NUMBER = "5519983640257";
const INSTAGRAM_URL = "";
const WHATSAPP_MESSAGE = "Olá! Gostaria de solicitar uma avaliação para o meu aparelho.";

const whatsappUrl = WHATSAPP_NUMBER
  ? "https://wa.me/" + WHATSAPP_NUMBER.replace(/\D/g, "") + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE)
  : "https://wa.me/?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.href = whatsappUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

const instagramLink = document.querySelector("[data-instagram]");
if (INSTAGRAM_URL) {
  instagramLink.href = INSTAGRAM_URL;
  instagramLink.target = "_blank";
  instagramLink.rel = "noopener noreferrer";
} else {
  instagramLink.addEventListener("click", (event) => event.preventDefault());
  instagramLink.title = "Configure o perfil do Instagram em script.js";
}

document.querySelector("#year").textContent = new Date().getFullYear();
const menuButton = document.querySelector(".menu");
const navigation = document.querySelector(".top nav");

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


// Fill in confirmed price ranges (BRL) before publishing.
// Format: "iphone:screen": { min: VALOR_MINIMO, max: VALOR_MAXIMO }
const PRICE_ESTIMATES = {};

const SERVICE_LABELS = {
  screen: "troca de tela",
  battery: "troca de bateria",
  "back-cover": "troca de tampa traseira",
  "charging-port": "reparo do conector de carga",
  camera: "troca de câmera",
  cleaning: "limpeza interna",
  oxidation: "recuperação de oxidação",
  microsoldering: "micro solda / reparo em placa",
  diagnostics: "diagnóstico e reparos gerais",
};

const BRAND_LABELS = {
  iphone: "Apple / iPhone",
  samsung: "Samsung Galaxy",
  motorola: "Motorola",
  xiaomi: "Xiaomi / Redmi",
  other: "outra marca",
};

const quoteForm = document.querySelector("#quote-form");
if (quoteForm) {
  const result = document.querySelector("#quote-result");
  const prompt = result.querySelector(".quote-prompt");
  const value = result.querySelector(".quote-value");
  const status = result.querySelector(".quote-status");
  const whatsappLink = result.querySelector(".quote-whatsapp");

  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const brand = quoteForm.elements.brand.value;
    const model = quoteForm.elements.model.value.trim();
    const service = quoteForm.elements.service.value;
    if (!brand || !model || !service) return;

    const estimate = PRICE_ESTIMATES[brand + ":" + service];
    prompt.hidden = true;
    value.hidden = false;
    whatsappLink.hidden = false;

    if (
      estimate &&
      Number.isFinite(estimate.min) &&
      Number.isFinite(estimate.max) &&
      estimate.min > 0 &&
      estimate.max >= estimate.min
    ) {
      const formatPrice = (amount) =>
        new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
          maximumFractionDigits: 0,
        }).format(amount);

      value.textContent =
        formatPrice(estimate.min) + " – " + formatPrice(estimate.max);
      status.textContent =
        "Faixa de referência para " +
        BRAND_LABELS[brand] +
        " e " +
        SERVICE_LABELS[service] +
        ". O preço pode variar conforme o modelo; confirmamos o valor após avaliação técnica.";
    } else {
      value.textContent = "Consulte o orçamento";
      status.textContent =
        "A faixa deste serviço ainda não foi cadastrada. Fale com a equipe para consultar o valor para " +
        model +
        ".";
    }

    const message =
      "Olá! Gostaria de consultar " +
      SERVICE_LABELS[service] +
      " para " +
      model +
      " (" +
      BRAND_LABELS[brand] +
      ").";
    const encodedMessage = encodeURIComponent(message);
    whatsappLink.href = WHATSAPP_NUMBER
      ? "https://wa.me/" +
        WHATSAPP_NUMBER.replace(/\D/g, "") +
        "?text=" +
        encodedMessage
      : "https://wa.me/?text=" + encodedMessage;
    whatsappLink.target = "_blank";
    whatsappLink.rel = "noopener noreferrer";
  });
}
