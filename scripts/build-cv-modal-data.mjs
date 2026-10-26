import { readFileSync, writeFileSync } from 'node:fs'
import { PROJECT_DETAILS } from '../src/data/projectDetails.js'

const titles = {
  'paola-biker': ['Paola Biker — paolabiker.com', 'https://paolabiker.com'],
  'fastco-pathway': ['Fastco — Pathway', ''],
  motai: ['Motai — motai.app', 'https://motai.app'],
  'jeisson-pro': ['jeisson.pro', 'https://jeisson.pro'],
  campus: ['Campus — Administración escolar', 'https://github.com/Devewice/Campus'],
  'santiago-aviador': ['Santiago Aviador — E-commerce', ''],
  'van-leeuwenhoek': ['Colegio Van Leeuwenhoek', 'https://colvanlee.edu.co'],
  'reina-de-gales': ['Colegio Reina de Gales', ''],
  'occidente-xxi': ['Revista Occidente XXI', 'https://www.occidentexxi.com/ediciones'],
  'roger-murillo': ['Roger Murillo SAS', ''],
  eshac: ['Corporación ESHAC', ''],
}

const out = {}
for (const [slug, detail] of Object.entries(PROJECT_DETAILS)) {
  const [title, url] = titles[slug]
  out[slug] = { title, url, ...detail }
}
writeFileSync('public/cv-details.json', JSON.stringify(out))

for (const file of ['cv-dev/index.html', 'cv-creativo/index.html', 'cv-producto/index.html']) {
  let html = readFileSync(file, 'utf8')
  html = html.replace(
    /<a class="cv-more" href="\/proyectos\/([^"]+)" target="_top">Ver más<\/a>/g,
    '<button type="button" class="cv-more" data-slug="$1">Ver más</button>',
  )
  if (!html.includes('cv-modal.js')) {
    html = html.replace('</body>', '  <script src="/cv-modal.js" defer></script>\n</body>')
  }
  writeFileSync(file, html)
  console.log(file, (html.match(/data-slug=/g) || []).length)
}
