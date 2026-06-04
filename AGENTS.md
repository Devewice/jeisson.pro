# Guía para agentes (Cursor / IA)

1. Leer **`README.md`** antes de editar.
2. **Fuentes canónicas:** `jeisson-riveros-reactive-resume.json` (DEV) y `jeisson-riveros-creativo-reactive-resume.json` (CREATIVO). Los `ReactiveResume_Jeisson_*` son histórico; no editarlos salvo comparación.
3. Respetar la tabla DEV vs CREATIVA, Motai en pasado, y campos `hidden` según el README.
4. Tras cambios en JSON, validar importación en [Reactive Resume](https://rxresu.me) (campos obligatorios por ítem).
5. Los HTML en `cv-dev/` y `cv-creativo/` no se sincronizan solos con los JSON; **no modificar esas carpetas** salvo petición explícita (se usan embebidas en la app React).
6. Frontend: React en `src/` (Vite). Portafolio público en rutas `/`, `/sobre-mi`, etc. CV solo tras login (`/login`, `/interno`). Contenido público en `src/data/site.js`.
7. Lanzar con `start.bat` o `npm run dev` (API + web). Credenciales en `.env`.
8. Responder en **español**. Commits y push solo si el usuario lo pide explícitamente.
