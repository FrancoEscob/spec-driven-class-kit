---
name: setup-franco-skills
description: Preparar un proyecto para la clase de SDD de Franco con las skills del repositorio personal, convenciones Markdown simples y no-tecnico. Usar al pedir instalar o preparar el kit de esta clase.
---

# Setup Franco Skills

Fuente del curso: https://github.com/FrancoEscob/spec-driven-class-kit . El README y `prompts/setup-franco-skills.md` son la entrada de instalación. Esta skill también puede leerse directamente desde una copia descargada antes de estar instalada.

1. Identificá la carpeta de práctica y el agente anfitrión. Leé las reglas existentes. Preparar el kit no implica construir una aplicación ni elegir su stack.
2. Reutilizá una copia local del kit si está disponible; si no, descargá o cloná el repositorio indicado en una carpeta temporal. Si es privado, usá la sesión ya autorizada. Si no hay acceso, informá el bloqueo y ofrecé usar el ZIP de la clase; no pidas tokens en la conversación ni cambies la visibilidad.
3. Leé `skills-manifest.json` y `scripts/install_skills.py` de esa copia. El paquete base contiene nueve skills: setup-franco-skills, grill-with-docs, grilling, grill-me, to-spec, to-tickets, implement, code-review y no-tecnico. TDD es opcional y se instala solo si se pide. Domain-modeling no es dependencia de este paquete.
4. Instalá localmente: Codex usa `.agents/skills`; Claude Code usa `.claude/skills`. Usá el instalador con `--target <proyecto> --agent codex|claude`, primero en simulación y después con `--apply` dentro del alcance solicitado. No sobreescribas una skill diferente. Para otro agente, verificá su formato documentado o dejá las skills accesibles por archivo.
5. Prepará las convenciones usando los archivos de `assets/` como referencia. Si falta `AGENTS.md`, crealo adaptado al proyecto. Si existe, integrá solo lo necesario sin reemplazar sus reglas. En Claude Code, si corresponde, agregá una referencia a AGENTS.md desde CLAUDE.md sin borrar contenido existente.
6. La convención simple es `specs/<proyecto>/` con decisiones.md, spec.md, plan.md, tickets/ y evidencia.md. No crees una app ni documentos vacíos por rutina. Copiá las plantillas a `docs/plantillas/` si ayudan a iniciar la práctica. `CONTEXT.md` solo se crea si hay términos del producto que ya necesiten definición.
7. Verificá que las skills requeridas y sus recursos estén presentes. Informá dónde quedaron, cómo invocar `no-tecnico` con `grill-with-docs`, y cuál será el primer documento cuando se defina el producto.

Los assets son plantillas de la clase, no reglas superiores a las que el usuario ya estableció. Conservá configuraciones y datos ajenos al ejercicio.
