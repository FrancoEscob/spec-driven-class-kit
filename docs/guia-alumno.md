# Preparar el proyecto y usar las skills

## Opción principal: un prompt para el agente

Creá o abrí una carpeta de práctica. Copiá el [prompt de setup Franco Skills](../prompts/setup-franco-skills.md) en el agente. Le pide descargar el repositorio y leer la skill de preparación. No hace falta instalar primero un comando global.

El agente conserva reglas existentes, instala las nueve skills base con todos sus recursos y prepara las plantillas Markdown. Para una copia privada del repo, hace falta una sesión de GitHub con acceso. Si usás el ZIP, indicá al agente dónde lo descomprimiste.

## Alternativa manual

Desde una copia descargada del kit, con Python 3 y una carpeta de proyecto ya creada:

```sh
python3 scripts/install_skills.py --target /ruta/a/mi-proyecto --agent codex
python3 scripts/install_skills.py --target /ruta/a/mi-proyecto --agent codex --apply
```

El primer comando simula; el segundo copia a `.agents/skills`. Para Claude Code, reemplazá `codex` por `claude`: usa `.claude/skills`. Repetir la instalación conserva las copias idénticas. Si una skill existente es diferente, no se sobreescribe ninguna.

Después pedí al agente que lea `setup-franco-skills/SKILL.md` para preparar las convenciones y plantillas. El instalador solo copia las skills; no modifica AGENTS.md por su cuenta.

## La primera conversación

```text
Usá no-tecnico junto con grill-with-docs. Quiero construir [mi idea]. No conozco arquitectura ni bases de datos. Preguntame cómo quiero que funcione y recomendá las piezas técnicas explicándome por qué hacen falta. Primero definamos el producto; no implementes todavía.
```

La entrevista conserva decisiones. `to-spec` las sintetiza en un acuerdo; el plan propone cómo construirlo. `to-tickets` lo divide y `implement` resuelve el ticket elegido. `code-review` contrasta el cambio con lo acordado.

`grilling` es la entrevista que utiliza `grill-with-docs`. `grill-me` es una entrada breve a esa misma entrevista. No hace falta ejecutar las tres en secuencia. El vocabulario pequeño se guarda junto a las decisiones; domain-modeling no es una dependencia del curso.

## Cómo invocarlas

Podés escribir “Usá no-tecnico”. En Codex también se usa `$no-tecnico` o su selector de skills. La forma `/nombre` en la presentación es una abreviatura; cada agente puede exponer un selector o sintaxis distinta. Si no tiene herramienta de skills, pedile leer el SKILL.md correspondiente.

## SDD y TDD

SDD conecta intención, documentos, implementación y evidencia. Verificar criterios no significa automáticamente usar TDD. TDD exige observar una prueba que falla antes de escribir la solución y luego mejorarla manteniendo la prueba.

Si decidís practicar ese complemento, agregá `--with-tdd` al comando de instalación. De otro modo, el paquete base y las comprobaciones de los criterios son suficientes.

## La práctica de la clase

[Aplicación para gestionar hábitos](../demo-en-vivo/README.md): crear actividades, registrar cuándo se realizaron y calcular días consecutivos. La demo explica el vocabulario antes de usarlo y conserva tres respaldos ejecutables.
