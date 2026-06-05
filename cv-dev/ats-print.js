(function initAtsPrint() {
  if (!new URLSearchParams(location.search).has('ats')) return

  document.documentElement.classList.add('ats-print')

  const css = document.createElement('link')
  css.rel = 'stylesheet'
  css.href = 'ats-print.css'
  document.head.appendChild(css)

  if (window.self === window.top) {
    const hint = document.createElement('p')
    hint.className = 'ats-print-hint'
    hint.textContent = 'Vista ATS (1 columna). Usa «Descargar PDF ATS» en el visor interno.'
    document.body.prepend(hint)
  }

  const sidebarInner = document.querySelector('.sidebar-inner')
  const main = document.querySelector('.main')
  const footer = main?.querySelector('.footer')
  if (!sidebarInner || !main || !footer) return

  const moveBlock = (selector) => {
    const block = [...sidebarInner.querySelectorAll('.side-block')].find((el) =>
      el.querySelector(selector),
    )
    if (block) main.insertBefore(block, footer)
  }

  moveBlock('.skills-wrap')
  moveBlock('.langs')
})()
