/**
 * Descarga PDF generado en el servidor (Chrome headless, misma apariencia que en pantalla).
 */
export async function downloadCvPdf({ variant, ats = false, filename }) {
  const params = new URLSearchParams({ variant })
  if (ats) params.set('ats', '1')

  const res = await fetch(`/api/cv/pdf?${params}`, { credentials: 'include' })
  if (!res.ok) {
    let message = `No se pudo generar el PDF (${res.status})`
    try {
      const data = await res.json()
      if (data.error) message = data.error
    } catch {
      if (res.status === 404) {
        message =
          'El servidor no tiene la ruta de PDF. Reinicia la API (npm run dev o start.bat).'
      }
    }
    throw new Error(message)
  }

  const blob = await res.blob()
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  anchor.click()
  URL.revokeObjectURL(url)
}
