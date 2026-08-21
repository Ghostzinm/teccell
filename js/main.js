/* ==========================================================================
   DUARTE TECCELL — INTERAÇÕES
   ========================================================================== */

(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---------------------------------------------------------------------
     WhatsApp helpers — todo link usa o número/mensagem de data.js
     --------------------------------------------------------------------- */
  function buildWhatsAppUrl(customMessage) {
    const { number, defaultMessage } = DUARTE_CONFIG.whatsapp;
    const text = encodeURIComponent(customMessage || defaultMessage);
    return `https://wa.me/${number}?text=${text}`;
  }

  document.querySelectorAll("[data-whatsapp]").forEach((el) => {
    const customMsg = el.getAttribute("data-whatsapp-message");
    el.setAttribute("href", buildWhatsAppUrl(customMsg));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  /* ---------------------------------------------------------------------
     Header: estado ao rolar + navegação mobile
     --------------------------------------------------------------------- */
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navDrawer = document.querySelector(".nav-drawer");

  window.addEventListener(
    "scroll",
    () => {
      if (!header) return;
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    },
    { passive: true }
  );

  if (navToggle && navDrawer) {
    navToggle.addEventListener("click", () => {
      const isOpen = navDrawer.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    navDrawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navDrawer.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------------------------------------------------------------------
     Scroll reveal — IntersectionObserver, sem dependências externas
     --------------------------------------------------------------------- */
  const revealTargets = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealTargets.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );
    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------------------------------------------------------------------
     Contadores — números da seção "Confiança"
     --------------------------------------------------------------------- */
  function animateCount(el) {
    const target = Number(el.getAttribute("data-count-to"));
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased).toString();
      if (progress < 1) requestAnimationFrame(tick);
    }

    if (prefersReducedMotion) {
      el.textContent = String(target);
    } else {
      requestAnimationFrame(tick);
    }
  }

  const counters = document.querySelectorAll("[data-count-to]");
  if ("IntersectionObserver" in window && counters.length) {
    const countIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            countIo.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((el) => countIo.observe(el));
  }

  /* ---------------------------------------------------------------------
     Painel de serviços (readout) — troca de estado ao passar/selecionar
     --------------------------------------------------------------------- */
  const serviceRows = document.querySelectorAll("[data-service-row]");
  const readoutTitle = document.querySelector("[data-readout-title]");
  const readoutDesc = document.querySelector("[data-readout-desc]");
  const readoutWave = document.querySelector("[data-readout-wave]");

  // Traçados fixos por serviço — sugerem um "sinal" técnico distinto,
  // sem gerar dados aleatórios a cada carregamento.
  const wavePaths = {
    display: "M0,23 C 40,6 60,40 100,20 C 140,4 180,36 220,18 C 260,6 300,30 340,23",
    energia: "M0,23 C 30,34 60,10 90,23 C 120,36 150,10 180,23 C 220,36 260,10 340,23",
    conectividade: "M0,23 L40,23 L50,6 L60,40 L70,10 L80,34 L90,23 L340,23",
    "imagem-audio": "M0,23 C 20,18 40,28 60,23 C 100,10 120,36 160,23 C 200,10 220,36 260,23 C 290,16 310,30 340,23",
    software: "M0,23 L60,23 L70,8 L80,23 L140,23 L150,38 L160,23 L340,23",
    placa: "M0,23 C 50,23 55,4 60,23 C 65,42 70,4 75,23 C 120,23 260,23 300,10 L340,23",
    recuperacao: "M0,32 C 60,32 80,32 100,14 C 130,-4 160,40 200,20 C 240,4 280,32 340,16",
  };

  function setActiveService(row) {
    serviceRows.forEach((r) => r.classList.remove("is-active"));
    row.classList.add("is-active");

    const key = row.getAttribute("data-service-key");
    const svc = DUARTE_CONFIG.services.find((s) => s.key === key);
    if (!svc) return;

    if (readoutTitle) readoutTitle.textContent = svc.title;
    if (readoutDesc) readoutDesc.textContent = svc.description;
    if (readoutWave) {
      const path = readoutWave.querySelector("path");
      if (path) path.setAttribute("d", wavePaths[key] || wavePaths.display);
    }
  }

  serviceRows.forEach((row) => {
    row.addEventListener("mouseenter", () => setActiveService(row));
    row.addEventListener("focus", () => setActiveService(row));
    row.addEventListener("click", () => setActiveService(row));
  });

  /* ---------------------------------------------------------------------
     Antes / Depois — slider de comparação por arraste
     --------------------------------------------------------------------- */
  const compareEl = document.querySelector("[data-compare]");
  if (compareEl) {
    const before = compareEl.querySelector(".compare__before");
    const handle = compareEl.querySelector(".compare__handle");

    function setCompare(ratio) {
      const clamped = Math.min(Math.max(ratio, 0.06), 0.94);
      const pct = `${clamped * 100}%`;
      const fullWidth = compareEl.getBoundingClientRect().width;
      compareEl.style.setProperty("--compare-w", pct);
      compareEl.style.setProperty("--compare-full-w", `${fullWidth}px`);
      if (before) before.style.width = pct;
      if (handle) handle.style.left = pct;
    }

    function ratioFromEvent(clientX) {
      const rect = compareEl.getBoundingClientRect();
      return (clientX - rect.left) / rect.width;
    }

    let dragging = false;

    compareEl.addEventListener("pointerdown", (e) => {
      dragging = true;
      compareEl.setPointerCapture(e.pointerId);
      setCompare(ratioFromEvent(e.clientX));
    });
    compareEl.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      setCompare(ratioFromEvent(e.clientX));
    });
    ["pointerup", "pointerleave", "pointercancel"].forEach((evt) =>
      compareEl.addEventListener(evt, () => (dragging = false))
    );

    setCompare(0.5);
    window.addEventListener("resize", () => {
      const currentPct = parseFloat(compareEl.style.getPropertyValue("--compare-w")) / 100 || 0.5;
      setCompare(currentPct);
    });
  }

  /* ---------------------------------------------------------------------
     Hero — parallax extremamente sutil no visual técnico
     --------------------------------------------------------------------- */
  const heroVisual = document.querySelector("[data-hero-parallax]");
  if (heroVisual && !prefersReducedMotion && window.matchMedia("(min-width: 960px)").matches) {
    let raf = null;
    document.querySelector(".hero").addEventListener("mousemove", (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const rect = heroVisual.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / rect.width;
        const dy = (e.clientY - cy) / rect.height;
        heroVisual.style.transform = `translate(${dx * 8}px, ${dy * 8}px)`;
        raf = null;
      });
    });
  }

  /* ---------------------------------------------------------------------
     Rodapé — ano atual
     --------------------------------------------------------------------- */
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
