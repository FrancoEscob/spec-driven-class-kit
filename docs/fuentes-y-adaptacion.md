# Fuente y decisiones didácticas

Fuente principal: [curso de Spec-Driven Development de MoureDev](https://www.youtube.com/watch?v=5HaOxAAA5qI), cuya transcripción completa se conserva en la carpeta de investigación del proyecto docente. El kit enlaza la fuente; no redistribuye la transcripción completa.

## Correspondencia del recorrido

| Video | Tema de la fuente | Dónde aparece en esta clase |
| --- | --- | --- |
| 00:00–15:49 | Introducción y definición de SDD | Inicio, responsabilidad y ciclo de SDD |
| 15:49–21:56 | Desarrollo clásico | “El ciclo de siempre. Con un agente al lado” |
| 21:56–26:12 | Vibe coding | Exploración, rigor según riesgo y vida útil |
| 26:12–40:50 | Spec-first, spec-anchored, spec-as-source | Tres relaciones entre especificación y código |
| 40:50–48:25 | Markdown, AGENTS, spec y modo plan | Reglas del proyecto, documentos y requisitos observables |
| 48:25–55:58 | Presentación del proyecto de hábitos | Contexto de la demo en vivo |
| 55:58–1:10:23 | Constitución y AGENTS | Preparación con setup y reglas estables |
| 1:10:23–1:26:06 | Especificar y clarificar | Entrevista, spec y ejemplos con fechas |
| 1:26:06–1:37:06 | Plan técnico y tareas | Plan explicado y tickets verticales |
| 1:37:06–1:44:57 | Implementar y validar | T1/T2 y matriz de evidencia |
| 1:44:57–1:47:31 | Cambios e iteración | Spec v2: permitir marcar ayer |
| 1:47:31–2:03:16 | Skills, subagentes, MCP y cierre | Paquete de skills y práctica posterior |

## Adaptaciones explícitas

1. El video construye una CLI de hábitos en Python. Esta clase conserva el dominio y el ciclo, y propone una web local para facilitar la demostración en navegador.
2. El video usa `tasks.md`. Las skills de este kit organizan un archivo por ticket en `issues/`; no hace falta mantener ambos.
3. Aclaramos antes de sintetizar con `grill-with-docs` y volvemos a clarificar la spec si aparecen contradicciones. La aclaración puede repetirse.
4. Las skills se explican antes de la práctica para que el alumno reconozca las herramientas que verá usar. No se presentan como requisito universal de SDD.
5. `no-tecnico` es una skill creada para esta clase, no una atribución al video ni a Matt Pocock.
6. La matriz de rigor, los criterios A1–A5, los tres checkpoints y los controles de fecha son aportes didácticos del material. Los ejemplos ejecutables no se atribuyen al autor del video.
7. Tutorías es un ejercicio extendido para explorar datos compartidos y reglas de reservas. No forma parte de la demo de hábitos.
8. GPT-6 Astra tiene su sesión independiente de noticias, con fuentes oficiales y condiciones de los benchmarks. No proviene de la transcripción ni es requisito para completar la clase.

## Procedencia de las skills

Ver [LICENSES.md](../LICENSES.md) y [skills-manifest.json](../skills-manifest.json): origen, revisión de upstream, archivos completos y adaptaciones. El instalador copia las carpetas completas, incluidos los recursos que cada SKILL.md referencia.
