# Guía para agentes (Cursor / IA)

1. Leer **`README.md`** antes de editar.
2. **Fuentes canónicas:** `jeisson-riveros-reactive-resume.json` (DEV) y `jeisson-riveros-creativo-reactive-resume.json` (CREATIVO). Los `ReactiveResume_Jeisson_*` son histórico; no editarlos salvo comparación.
3. Respetar la tabla DEV vs CREATIVA, Motai en pasado, y campos `hidden` según el README.
4. Tras cambios en JSON, validar importación en [Reactive Resume](https://rxresu.me) (campos obligatorios por ítem).
5. Los HTML en `cv-dev/` y `cv-creativo/` no se sincronizan solos con los JSON; **no modificar esas carpetas** salvo petición explícita (se usan embebidas en la app React).
6. Frontend: React en `src/` (Vite). Lanzar con `start.bat` o `npm run dev`.
7. Responder en **español**. Commits y push solo si el usuario lo pide explícitamente.
