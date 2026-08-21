/* ==========================================================================
   DUARTE TECCELL — RENDERIZAÇÃO A PARTIR DOS DADOS
   Monta as listas repetidas (serviços, marcas, depoimentos, estatísticas)
   a partir de js/data.js. Para atualizar o conteúdo do site, edite apenas
   o arquivo data.js — este arquivo não precisa ser alterado.
   ========================================================================== */

(function () {
  "use strict";

  const cfg = window.DUARTE_CONFIG;
  if (!cfg) return;

  /* ---- Serviços ---- */
  const serviceIndex = document.querySelector("[data-service-index]");
  if (serviceIndex) {
    cfg.services.forEach((svc, i) => {
      const row = document.createElement("button");
      row.type = "button";
      row.className = "service-row" + (i === 0 ? " is-active" : "");
      row.setAttribute("data-service-row", "");
      row.setAttribute("data-service-key", svc.key);
      row.innerHTML = `
        <span class="service-row__num">${svc.code}</span>
        <span class="service-row__name">${svc.name}</span>
      `;
      serviceIndex.appendChild(row);
    });

    const first = cfg.services[0];
    const title = document.querySelector("[data-readout-title]");
    const desc = document.querySelector("[data-readout-desc]");
    if (title) title.textContent = first.title;
    if (desc) desc.textContent = first.description;
  }

  /* ---- Marcas ---- */
  const brandStrip = document.querySelector("[data-brand-strip]");
  if (brandStrip) {
    cfg.brands.forEach((brand) => {
      const span = document.createElement("span");
      span.className = "brand-strip__item";
      span.textContent = brand;
      brandStrip.appendChild(span);
    });
  }

  /* ---- Estatísticas ---- */
  const statsRow = document.querySelector("[data-stats-row]");
  if (statsRow) {
    cfg.stats.forEach((stat) => {
      const el = document.createElement("div");
      el.className = "stat";
      el.setAttribute("data-reveal", "");
      el.innerHTML = `
        <div class="stat__num">${stat.prefix}<span data-count-to="${stat.value}">0</span><span class="unit">${stat.suffix}</span></div>
        <div class="stat__label">${stat.label}</div>
      `;
      statsRow.appendChild(el);
    });
  }

  /* ---- Depoimentos ---- */
  const testimonialsGrid = document.querySelector("[data-testimonials]");
  if (testimonialsGrid) {
    cfg.testimonials.forEach((t) => {
      const el = document.createElement("article");
      el.className = "testimonial";
      el.setAttribute("data-reveal", "");
      el.innerHTML = `
        <div class="testimonial__stars" aria-label="5 de 5 estrelas">★★★★★</div>
        <p class="testimonial__quote">“${t.quote}”</p>
        <div class="testimonial__name">${t.name}</div>
      `;
      testimonialsGrid.appendChild(el);
    });
  }

  /* ---- Endereço / horário no rodapé ---- */
  const addressEl = document.querySelector("[data-contact-address]");
  const hoursEl = document.querySelector("[data-contact-hours]");
  const instaEl = document.querySelector("[data-contact-instagram]");
  if (addressEl) addressEl.textContent = cfg.contact.address;
  if (hoursEl) hoursEl.textContent = cfg.contact.hours;
  if (instaEl) instaEl.setAttribute("href", cfg.contact.instagram);
})();
