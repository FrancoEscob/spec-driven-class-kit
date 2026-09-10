# Skills de la clase de Franco · Spec-Driven Development

Repositorio: [FrancoEscob/spec-driven-class-kit](https://github.com/FrancoEscob/spec-driven-class-kit).

Empezá copiando el [prompt de setup Franco Skills](prompts/setup-franco-skills.md) en el agente de tu proyecto. El agente descarga este kit, lee sus instrucciones y prepara las skills y las plantillas Markdown. No construye la aplicación durante la instalación.

## Qué incluye el paquete base

| Skill | Para qué la usamos |
| --- | --- |
| setup-franco-skills | Preparar el kit, las reglas y las plantillas de este proyecto |
| no-tecnico | Explicar decisiones y recomendar tecnología desde las necesidades del usuario |
| grill-with-docs | Entrevistar y conservar decisiones en Markdown |
| grilling | Conducir la entrevista; la usa grill-with-docs |
| grill-me | Acceso breve a grilling; no es otra entrevista obligatoria |
| to-spec | Convertir acuerdos en una spec verificable |
| to-tickets | Dividir el trabajo en resultados pequeños y comprobables |
| implement | Construir un ticket, comprobarlo y registrar evidencia |
| code-review | Revisar contra la spec y las reglas del proyecto |

**TDD es opcional**, está en `optional-skills/tdd/`. SDD define qué debe hacer el producto; TDD es una técnica para implementar con una prueba que falla antes del código. No se instala por defecto. La adaptación de grill-with-docs no requiere domain-modeling.

## El recorrido

Preparar → aclarar con no-tecnico y grill-with-docs → escribir la spec → explicar el plan → crear tickets → implementar → revisar.

Una estructura simple para cada producto: `specs/<nombre>/decisiones.md`, `spec.md`, `plan.md`, `tickets/` y `evidencia.md`. Los documentos aparecen cuando hacen falta; no hay que llenar carpetas vacías.

## Materiales

- [Guía del alumno](docs/guia-alumno.md): instalación e invocación.
- [Apuntes de la presentación](docs/apuntes-clase.md): texto para leer junto con las slides, apto para compartir pantalla.
- [Demo en vivo](demo-en-vivo/README.md): aplicación para gestionar hábitos, prompts y tres estados ejecutables.
- [Plantilla de spec](skills/setup-franco-skills/assets/spec-template.md), [plan](skills/setup-franco-skills/assets/plan-template.md) y [ticket](skills/setup-franco-skills/assets/ticket-template.md).
- [Fuentes y lecturas](docs/fuentes-y-adaptacion.md): documentación para profundizar.
- [Procedencia de las skills](LICENSES.md) y [manifiesto](skills-manifest.json).

El repo permanece privado durante la revisión: los alumnos necesitan acceso o el ZIP de la presentación.
