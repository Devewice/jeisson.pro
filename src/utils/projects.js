const CATEGORY_ORDER = { dev: 0, education: 1, creative: 2 }

export function sortProjects(list) {
  return [...list].sort((a, b) => {
    const ca = CATEGORY_ORDER[a.category] ?? 9
    const cb = CATEGORY_ORDER[b.category] ?? 9
    if (ca !== cb) return ca - cb
    return a.title.localeCompare(b.title, 'es')
  })
}

export function countProjectsByCategory(projects) {
  const counts = { all: projects.length, dev: 0, creative: 0, education: 0 }
  for (const p of projects) {
    if (counts[p.category] !== undefined) counts[p.category]++
  }
  return counts
}

export function projectStatusLabel(status) {
  const map = {
    online: 'En línea',
    private: 'Sin enlace público',
    opensource: 'Open source',
    archive: 'Archivo',
  }
  return map[status] || null
}

export function isComplementService(service) {
  return service.complement === true
}
