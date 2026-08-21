# Duarte Teccell — Site Institucional

Site estático (HTML/CSS/JS puro, sem build step) na direção "Dark Tech
Laboratório". Basta abrir `index.html` num navegador ou hospedar a pasta
inteira em qualquer servidor estático (Vercel, Netlify, GitHub Pages, cPanel
etc.).

## Estrutura

```
duarte-teccell/
├── index.html            → estrutura de todas as seções
├── css/
│   ├── tokens.css        → cores, tipografia, espaçamento (variáveis CSS)
│   ├── base.css          → reset, tipografia base, botões, utilitários
│   ├── layout.css         → header, hero, footer, grid responsivo
│   └── components.css    → serviços, processo, comparativo, depoimentos etc.
├── js/
│   ├── data.js            → ⚙️ EDITE AQUI: WhatsApp, marcas, serviços,
│   │                          depoimentos, estatísticas, endereço/horário
│   ├── render.js          → monta o HTML a partir de data.js (não precisa mexer)
│   └── main.js             → interações: menu, reveal, contadores, slider
└── assets/                → reservado para fotos reais (bancada, antes/depois, logo)
```

## O que editar antes de publicar

Tudo em **`js/data.js`**:

- `whatsapp.number` — número real em formato internacional (só dígitos).
- `whatsapp.defaultMessage` — mensagem pré-preenchida do botão principal.
- `contact.address` / `contact.hours` / `contact.instagram`.
- `stats` — os três números de destaque (placeholders, troque pelos reais).
- `brands` — marcas atendidas (adicione/remova livremente).
- `services` — os 7 itens do painel técnico interativo.
- `testimonials` — depoimentos reais quando disponíveis.

## Logotipo e fotos reais

- O wordmark atual é texto (`DUARTE TECCELL`) estilizado em CSS. Para usar o
  logotipo oficial, substitua o conteúdo de `.brand-mark` no `index.html`
  (header, drawer mobile e footer) por uma tag `<img>` apontando para
  `assets/logo.svg` (ou .png).
- A seção "Antes/Depois" (`#comparativo`) usa ilustrações técnicas em SVG como
  placeholder. Para usar fotos reais, troque os dois blocos `<svg
  class="compare__illustration">` por `<img>` com as fotos do reparo — o
  slider de arraste (`js/main.js`) já funciona com qualquer conteúdo dentro
  de `.compare__before` / `.compare__after`.
- A seção "Por dentro" (`#laboratorio`) usa uma ilustração de bancada em SVG.
  Pode ser substituída por uma foto real da bancada da loja da mesma forma.

## Personalização visual rápida

Praticamente toda a identidade visual (cores, fontes, espaçamentos) está
centralizada em `css/tokens.css` como variáveis CSS — alterar ali já reflete
em todo o site.

## Compatibilidade

Código semântico, responsivo (desktop → mobile real, não apenas "encolhido"),
sem dependências externas além das fontes do Google Fonts (Unbounded,
Manrope, IBM Plex Mono) carregadas via `<link>` no `<head>`.
