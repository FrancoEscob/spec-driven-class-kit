# Procedencia y reutilización

Siete skills del paquete base derivan de [mattpocock/skills](https://github.com/mattpocock/skills), commit `3cca18b368ae95cdbdebbff572ccafa662551015`: grill-with-docs, grilling, grill-me, to-spec, to-tickets, implement y code-review. TDD, también de ese origen, se conserva como complemento opcional. Su licencia MIT íntegra está en `LICENSE-MATT-POCOCK`.

La adaptación de la clase simplifica las dependencias y las convenciones:

- Entrevista en rondas breves, compatible con no-tecnico; acuerdos y vocabulario en un Markdown, sin requerir domain-modeling.
- Spec y plan separados; tickets locales bajo `specs/<proyecto>/tickets/`.
- Implementación ligada a criterios y evidencia, sin imponer TDD, commits ni publicaciones.
- Revisión de comportamiento y reglas, sin dependencia de setup upstream, tracker remoto o subagentes.
- grill-me funciona como entrada por archivo a grilling.

El manifiesto conserva hashes de origen y de los archivos distribuidos. Esta adaptación no se presenta como paquete oficial ni respaldado por Matt Pocock.

setup-franco-skills, no-tecnico, las plantillas, las guías y los ejemplos de la clase son material original. La distribución a alumnos forma parte del curso; el autor puede definir una licencia pública para ese material antes de abrir el repositorio.
