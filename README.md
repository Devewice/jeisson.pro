# jeisson.pro — CV y portafolio profesional

Documentación del trabajo realizado sobre la hoja de vida de **Jeisson David Riveros García** (Bogotá). Sirve para retomar el proyecto en otra máquina, otra sesión de Cursor o con otro colaborador sin perder contexto.

**Repositorio:** [github.com/Devewice/jeisson.pro](https://github.com/Devewice/jeisson.pro)  
**Workspace:** abrir `jeisson.pro.code-workspace` en Cursor o VS Code.  
**Origen:** archivos creados a partir de PDFs en Descargas (`Hoja de vida.pdf`, `Profile.pdf` de LinkedIn), luego organizados en este proyecto.

---

## Resumen del objetivo

1. CV optimizado para **ATS** (palabras clave, bullets con métricas, sin barras de nivel engañosas).
2. Dos perfiles públicos: **desarrollo web full stack** y **diseño multimedial / creativo**.
3. Formatos de salida:
   - **Reactive Resume v5** (JSON nativo, editable en [rxresu.me](https://rxresu.me)).
   - **HTML estático** (vista web + impresión a PDF desde el navegador).

---

## Estructura de archivos

| Archivo / carpeta | Uso principal |
|-------------------|---------------|
| `jeisson-riveros-reactive-resume.json` | **Fuente de verdad — versión DEV.** Importar en Reactive Resume. |
| `jeisson-riveros-creativo-reactive-resume.json` | **Fuente de verdad — versión CREATIVA.** Importar en Reactive Resume. |
| `cv-dev/` | Plantilla HTML + CSS (tech). **No modificar por ahora**; la app React la embebe tal cual. |
| `cv-creativo/` | Plantilla HTML + CSS (editorial). **Idem.** |
| `src/` | Frontend React (Vite): inicio, rutas `/cv/dev` y `/cv/creativo`. |
| `server/` | Express sirve `dist/` y las carpetas CV en producción. |
| `start.bat` | Instala dependencias si hace falta y lanza `npm run dev`. |
| `package.json` | Scripts Node: `dev`, `build`, `preview`, `start`. |
| `ReactiveResume_Jeisson.json` | Borradores intermedios de la sesión inicial. **No usar** salvo comparar historial. |
| `ReactiveResume_Jeisson_Riveros.json` | ↑ |
| `ReactiveResume_Jeisson_Riveros_v2.json` | ↑ |
| `ReactiveResume_Jeisson_clean.json` | ↑ |
| `README.md` | Este documento. |

Los HTML **no se sincronizan automáticamente** con los JSON. Si cambias contenido en Reactive Resume, exporta de nuevo o actualiza a mano los `index.html`.

---

## Versión DEV vs versión CREATIVA

| Aspecto | DEV (`jeisson-riveros-reactive-resume.json`) | CREATIVA (`jeisson-riveros-creativo-reactive-resume.json`) |
|---------|-----------------------------------------------|-------------------------------------------------------------|
| Headline | Desarrollador Web Full Stack · PHP · JS · WordPress | Diseñador Multimedial · Editorial · Branding |
| Plantilla RR | `meowth` | `onyx` |
| Perfiles visibles | LinkedIn, **GitHub**, Portfolio | **Behance**, LinkedIn, Portfolio |
| Motai | **Visible** (Jul 2025 – Jun 2026, pasado, ya no en la empresa) | **Oculto** (`hidden: true`) |
| Experiencia oculta en DEV | Roger Murillo SAS, Occidente XXI, ESHAC (siguen en JSON, no se exportan visibles) | Motai oculto; foco en roles de diseño |
| Platzi | 3 cursos (Git completado; JS y Node en curso) | Sección certificaciones **oculta** |
| Intereses | Sección **oculta** | Sección **visible** |
| Proyectos | Enfocados en dev / web | Enfocados en diseño, editorial, Behance |
| Perfil | “Disponible” para back-end / full stack | Busca diseño gráfico, comunicación visual, multimedia |

### Motai (estado acordado)

- **Ya no trabaja** en Motai; periodo **Jul 2025 – Jun 2026**.
- Bullets en **tiempo pasado**; perfil sin “actualmente en Motai”.
- En DEV el resumen menciona Motai como experiencia reciente en producto web (`motai.app`).

### Motai — Torque y plugin (referencia interna)

Trabajo local en `C:\torque` (backoffice NestJS/Next.js) y en el plugin WordPress de listing **no se listan como proyectos** en el CV: solo la **experiencia Motai** y **skills** con stack real. Ver **`docs/motai-experiencia-referencia.md`** (rutas, qué nombrar y qué omitir por seguridad).

### Convenciones de contenido aplicadas

- Sin barras de nivel en skills (`level: 0`, `type: "hidden"` en diseño).
- Sin etiquetas “básico/básica” en habilidades.
- Educación con **`grade: "Graduado"`** (UCMC, Panamericana, etc.).
- Sin fecha de nacimiento en la versión DEV (recomendación ATS).
- Solapes de fechas (varios contratos en paralelo) **declarados** donde aplica (ej. Colegio Reina de Gales + otros).
- Enlaces reales: `motai.app`, `colvanlee.edu.co`, `occidentexxi.com`, `elcreador.com.co`.

### Datos de contacto (referencia)

- **Nombre:** Jeisson David Riveros García  
- **Email:** contacto@jeisson.pro  
- **Tel:** +57 312 724 0080  
- **Ubicación:** Suba, Bogotá D.C., Colombia  
- **Sitio:** https://jeisson.pro  
- **Portfolio histórico / creativo:** https://www.elcreador.com.co  
- **LinkedIn:** [jeisson-david-riveros-garcia](https://www.linkedin.com/in/jeisson-david-riveros-garcia-6291b9244)  
- **GitHub:** https://github.com/Devewice  
- **Behance:** https://www.behance.net/jeissondav1  
- **Redes:** [Instagram](https://www.instagram.com/jeissondav1) · [TikTok](https://www.tiktok.com/@jeisson.david.riv) (@jeisson.david.riv) · [X](https://x.com/jeissondav1) · [Threads](https://www.threads.net/@jeissondav1)  

---

## Reactive Resume — importar y editar

1. Entrar a [rxresu.me/dashboard/resumes](https://rxresu.me/dashboard/resumes).
2. **Importar** → elegir formato **“Reactive Resume JSON”** (no “JSON Resume” estándar).
3. Subir el archivo `.json` correspondiente (dev o creativo).
4. Tras importar: ajustar foto, exportar PDF desde la app si hace falta.

### Errores que ya se resolvieron (no repetir)

| Error al importar | Causa | Solución |
|-------------------|-------|----------|
| `basics: expected object, received string` | Formato incorrecto o pegado mal | Usar **Reactive Resume JSON** y subir archivo |
| `sections: expected string, received undefined` | Campos obligatorios vacíos en ítems | Cada experiencia necesita `company`, `position`, `location`, `period`; proyectos `name`, `period` |

Esquema: [Reactive Resume v5 — JSON](https://docs.rxresu.me/guides/json-resume-schema).  
Estructura clave: `picture`, `basics`, `summary`, `sections`, `customSections`, `metadata` (incl. `styleRules: []`).

**Flujo recomendado al editar:** cambiar primero el JSON en esta carpeta → reimportar o sincronizar en RR → exportar PDF. Mantener **un solo archivo canónico** por versión (los `ReactiveResume_Jeisson_*` son histórico).

---

## Portal jeisson.pro (Node + React)

Requisito: [Node.js](https://nodejs.org) 20+.

### Público (portafolio)

| Ruta | Contenido |
|------|-----------|
| `/` | Inicio — hero, servicios, CTA |
| `/sobre-mi` | Bio y trayectoria |
| `/servicios` | Qué ofreces (dev, WP, diseño, TIC) |
| `/proyectos` | Proyectos destacados |
| `/contacto` | Email y redes |

Textos editables en `src/data/site.js` (ampliados desde PDFs de referencia y JSON de CV; el CV interno sigue siendo la versión condensada para RR/ATS).

### Interno (requiere login)

| Ruta | Contenido |
|------|-----------|
| `/login` | Acceso con usuario/contraseña (`.env`) |
| `/interno` | Selector de CV dev / creativo |
| `/cv/dev`, `/cv/creativo` | Visor (HTML protegido en servidor) |

Los archivos `cv-dev/` y `cv-creativo/` **no son públicos**: sin sesión, `/cv-dev/*` responde 401.

### Comandos

| Comando | Descripción |
|---------|-------------|
| **`start.bat`** | Crea `.env` si falta, instala deps, `npm run dev` (API :3001 + web :5173) |
| `npm run dev` | Desarrollo (API + Vite con proxy) |
| `npm run build` | Build frontend → `dist/` |
| `npm run start` | Producción en :3000 (tras `build` + `.env`) |

### Variables de entorno

Copia `.env.example` → `.env`:

```env
AUTH_USERNAME=jeisson
AUTH_PASSWORD=tu-contraseña-segura
SESSION_SECRET=secreto-largo-aleatorio
```

En producción define `NODE_ENV=production` para cookies seguras (HTTPS).

---

## HTML estático (plantillas archivadas)

```text
cv-dev/index.html       → también en /cv-dev/index.html vía la app
cv-creativo/index.html  → también en /cv-creativo/index.html vía la app
```

- Estilos en `styles.css` de cada carpeta.
- Fuentes Google Fonts (DM Sans, JetBrains Mono en dev).
- **PDF:** abrir el CV en la app o en pestaña nueva → Ctrl+P → “Guardar como PDF”.

---

## Análisis de reclutador (resumen guardado)

- **Fuerte:** educación, multimedia, pymes, WordPress, proyectos con URL.
- **Ajustar** si postula solo a **senior dev corporativo** sin adaptar headline y experiencia visible.
- Mejoras ya aplicadas: dos versiones, métricas en bullets, Motai concreto, menos ruido en Platzi “en curso”, ocultar roles menos relevantes por versión.

---

## Dominio y marca (solo planificación)

Se valoró **`jeisson.pro`** como dominio profesional (mejor que `.click` o `.store`).  
**`jeisson.pro`** es el sitio y correo principal en el CV DEV. **`elcreador.com.co`** sigue en proyectos y perfil creativo.

---

## Pendientes sugeridos (para la próxima sesión)

- [ ] Subir **foto profesional** en Reactive Resume (`picture.url` está vacío).
- [ ] Alinear HTML con últimos cambios del JSON si se editó solo en RR.
- [ ] Cuando termine cursos Platzi: cambiar “En curso” → “Completado” solo en versión DEV.
- [ ] PDFs originales en Descargas: copiar aquí a `originales/` si se quieren archivados junto al proyecto.
- [ ] Publicar sitio en `jeisson.pro` o seguir con `elcreador.com.co` (decisión de marca).
- [ ] Generar PDF final desde RR (plantillas `meowth` / `onyx`) y guardar en esta carpeta.

---

## Para agentes de IA (Cursor, etc.)

Al retomar en **otra instancia**, indicar al asistente:

1. Leer **`README.md`** y **`AGENTS.md`** en la raíz del repo.
2. Editar **solo** los JSON canónicos (`jeisson-riveros-*.json`) salvo que pidan actualizar HTML.
3. Respetar la tabla DEV vs CREATIVA y las reglas de Motai / `hidden`.
4. Tras cambios en JSON, recordar validar importación en Reactive Resume (campos obligatorios por ítem).
5. Responder en **español**; no commitear ni hacer push salvo que el usuario lo pida.

Historial detallado de la conversación donde se generó todo: transcripción Cursor `94dac344-4231-4552-9091-db76d8296df9` (sesión CV Jeisson / Reactive Resume).

---

## Changelog breve

| Fecha (aprox.) | Cambio |
|---------------|--------|
| Jun 2026 | Creación CV ATS, versiones dev/creativo, HTML, corrección import RR |
| Jun 2026 | Motai: salida de empresa; periodo y redacción en pasado |
| Jun 2026 | Movimiento desde `Downloads` → proyecto local |
| Jun 2026 | Añadido `README.md` para continuidad entre sesiones |
| Jun 2026 | Repo GitHub, workspace `.code-workspace`, reglas Cursor |
| Jun 2026 | Proyecto Node + React (Vite); `start.bat`; plantillas CV sin tocar |

---

*Última actualización de documentación: junio 2026.*
