const style = document.createElement('style')
style.textContent = `
.cv-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  border: 1px solid var(--border);
  padding: 0;
  width: min(40rem, calc(100vw - 2.5rem));
  max-height: min(82vh, 52rem);
  overflow: auto;
  background: var(--surface);
  color: var(--text);
  border-radius: 16px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
  font-family: var(--font, var(--font-body), system-ui, sans-serif);
}
.theme-creativo .cv-modal { border-radius: 4px; }
.cv-modal::backdrop { background: rgba(8, 12, 10, 0.62); }
.cv-modal__panel { padding: 1.5rem 1.6rem 1.7rem; }
.cv-modal__head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}
.cv-modal h2 {
  margin: 0;
  font-family: var(--font-display, var(--font), inherit);
  font-size: 1.45rem;
  font-weight: 650;
  line-height: 1.2;
}
.cv-modal__close {
  flex-shrink: 0;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  font: inherit;
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  border-radius: 999px;
  padding: 0.35rem 0.75rem;
}
.cv-modal__close:hover { color: var(--text); border-color: var(--accent); }
.cv-modal__lead {
  margin: 0.85rem 0 0;
  line-height: 1.6;
  color: var(--text);
}
.cv-modal h3 {
  margin: 1.35rem 0 0.7rem;
  font-family: var(--mono, var(--font-display), inherit);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
  border-bottom: 2px solid var(--accent);
  width: fit-content;
  padding-bottom: 0.3rem;
}
.theme-creativo .cv-modal h3 {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0;
  text-transform: none;
  color: var(--text);
  border-bottom: 0;
  padding-bottom: 0;
}
.cv-modal__scope { margin: 0; padding-left: 1.15rem; line-height: 1.6; }
.cv-modal__scope li + li { margin-top: 0.45rem; }
.cv-modal__pieces p { margin: 0.35rem 0 0; line-height: 1.6; color: var(--text-muted); }
.cv-modal__stack {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
}
.cv-modal__card {
  margin: 0;
  padding: 1rem 1.1rem 1.15rem;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: color-mix(in srgb, var(--accent) 7%, var(--surface));
}
.theme-creativo .cv-modal__card { border-radius: 4px; }
.cv-modal__card h4 {
  margin: 0 0 0.8rem;
  font-size: 0.82rem;
  font-weight: 600;
}
.cv-modal__tags { display: flex; flex-wrap: wrap; gap: 0.45rem; }
.cv-modal__tag {
  padding: 0.32rem 0.65rem;
  border-radius: 999px;
  font-size: 0.75rem;
  line-height: 1.2;
  background: var(--accent-soft);
  color: var(--accent-dim, var(--accent-dark, var(--text)));
}
.cv-modal__site {
  display: inline-block;
  margin-top: 1.15rem;
  color: var(--accent-dim, var(--accent-dark, var(--accent)));
  font-weight: 600;
}
`
document.head.appendChild(style)

const dialog = document.createElement('dialog')
dialog.className = 'cv-modal'
dialog.innerHTML = `
  <div class="cv-modal__panel">
    <div class="cv-modal__head">
      <h2></h2>
      <button type="button" class="cv-modal__close">Cerrar</button>
    </div>
    <p class="cv-modal__lead"></p>
    <h3>Alcance</h3>
    <ul class="cv-modal__scope"></ul>
    <div class="cv-modal__pieces"></div>
    <h3>Tecnologías</h3>
    <div class="cv-modal__stack"></div>
    <a class="cv-modal__site" target="_blank" rel="noopener" hidden>Abrir el sitio</a>
  </div>
`
document.body.appendChild(dialog)

const titleEl = dialog.querySelector('h2')
const leadEl = dialog.querySelector('.cv-modal__lead')
const scopeEl = dialog.querySelector('.cv-modal__scope')
const piecesEl = dialog.querySelector('.cv-modal__pieces')
const stackEl = dialog.querySelector('.cv-modal__stack')
const siteEl = dialog.querySelector('.cv-modal__site')

function fillList(list, items) {
  list.replaceChildren()
  for (const item of items || []) {
    const li = document.createElement('li')
    li.textContent = item
    list.appendChild(li)
  }
}

function openDetail(detail) {
  titleEl.textContent = detail.title || 'Detalle'
  leadEl.textContent = detail.lead || ''
  fillList(scopeEl, detail.scope)
  piecesEl.replaceChildren()
  for (const piece of detail.pieces || []) {
    const h = document.createElement('h3')
    h.textContent = piece.title
    const p = document.createElement('p')
    p.textContent = piece.text
    piecesEl.append(h, p)
  }
  stackEl.replaceChildren()
  for (const group of detail.stack || []) {
    const card = document.createElement('article')
    card.className = 'cv-modal__card'
    const h = document.createElement('h4')
    h.textContent = group.title
    const tags = document.createElement('div')
    tags.className = 'cv-modal__tags'
    for (const item of group.items || []) {
      const tag = document.createElement('span')
      tag.className = 'cv-modal__tag'
      tag.textContent = item
      tags.appendChild(tag)
    }
    card.append(h, tags)
    stackEl.appendChild(card)
  }
  if (detail.url) {
    siteEl.hidden = false
    siteEl.href = detail.url
  } else {
    siteEl.hidden = true
  }
  dialog.showModal()
}

dialog.querySelector('.cv-modal__close').addEventListener('click', () => dialog.close())
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close()
})

fetch('/cv-details.json')
  .then((res) => res.json())
  .then((details) => {
    document.querySelectorAll('.cv-more[data-slug]').forEach((button) => {
      button.addEventListener('click', () => {
        const detail = details[button.dataset.slug]
        if (detail) openDetail(detail)
      })
    })
  })
