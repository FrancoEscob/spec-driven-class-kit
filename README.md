# Construir con IA, con intención

Kit de la clase de Spec-Driven Development.

Repositorio personal del curso: [FrancoEscob/spec-driven-class-kit](https://github.com/FrancoEscob/spec-driven-class-kit).

 Incluye nueve skills basadas en Matt Pocock y la skill original **no-tecnico**. La práctica principal es una web local de hábitos con tres estados ejecutables y pruebas. El caso de tutorías es un ejercicio extendido de especificación; no incluye una aplicación de reservas construida.

## Empezá acá

1. Leé [la guía del alumno](docs/guia-alumno.md) y el [guion de la demo en vivo](demo-en-vivo/README.md).
2. Instalá el paquete dentro del proyecto en el que vas a practicar. El instalador muestra primero lo que copiaría y nunca pisa una skill existente.
3. Pedile al agente: **“Usá no-tecnico junto con grill-with-docs. Quiero construir… Ayudame a definir cómo se usa y recomendá la parte técnica explicando cada decisión”.**
4. Revisá la spec, el plan y el primer ticket antes de construir. Empezá por un resultado pequeño que puedas comprobar.

## El recorrido

| Momento | Skill | Resultado |
| --- | --- | --- |
| Preparar proyecto | setup-matt-pocock-skills | Reglas, documentación y ubicación de tickets |
| Aclarar la idea | grill-with-docs | Decisiones y lenguaje compartido |
| Conservar intención | to-spec | Spec verificable y plan separado |
| Dividir el trabajo | to-tickets | Un archivo por ticket vertical |
| Construir | implement | Código y evidencia del ticket |
| Adaptar la conversación | no-tecnico | Recomendaciones técnicas explicadas sin examen de jerga |

Soporte: grilling, domain-modeling, tdd y code-review. No-tecnico es transversal: puede acompañar varias fases.

## Organización

- `skills/`: diez skills completas; cada una empieza en `SKILL.md`.
- `scripts/install_skills.py`: copia local para Codex o Claude Code; primero simulá.
- `demo-en-vivo/`: guion de 35 minutos, spec v1/v2, plan, tickets, tres respaldos ejecutables y pruebas.
- `.scratch/tutorias/`: ejercicio extendido separado; spec activa v1, snapshots v1/v2, plan y tickets. La carpeta es oculta en algunos exploradores; activá “mostrar archivos ocultos”.
- `docs/guia-alumno.md`: instalación, invocación y práctica.
- `docs/guia-docente.md`: notas de las 27 slides de clase y las 5 noticias independientes; se genera desde la fuente de la web.
- `docs/agents/`: convenciones para el agente, preconfiguradas para trabajo local.
- `docs/adr/`: decisiones de organización y alcance del ejemplo.
- `skills-manifest.json`: commit de origen, hashes, rol y adaptaciones.
- `LICENSES.md`: procedencia y condiciones de reutilización.

Este kit usa Markdown local; no exige GitHub ni una cuenta de pago para leer o editar documentos. La ejecución de agentes y la eventual aplicación pueden tener costos según las herramientas elegidas.
