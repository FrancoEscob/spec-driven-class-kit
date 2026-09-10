# Guía del alumno

## 1. Instalar las skills

Necesitás un agente que pueda leer archivos de tu proyecto. Para usar el instalador, Python 3. Abrí una terminal dentro de este kit y reemplazá `/ruta/a/tu-proyecto` por la carpeta real del proyecto.

Primero mirá qué se copiaría:

```sh
python3 scripts/install_skills.py --target /ruta/a/tu-proyecto --agent codex
```

Para copiar esas diez carpetas:

```sh
python3 scripts/install_skills.py --target /ruta/a/tu-proyecto --agent codex --apply
```

Codex: `.agents/skills/`. Claude Code: usá `--agent claude`, que copia en `.claude/skills/`. El instalador solo instala las skills; no modifica reglas existentes del proyecto. No instala en carpetas globales. Si hay una skill del mismo nombre, se detiene antes de copiar: revisá la versión que tenés y elegí cuál conservar. Podés practicar en una carpeta nueva para evitar duplicados.

Sin Python, copiá las diez carpetas de `skills/` a la ubicación de tu agente, conservando cada `SKILL.md` y sus referencias. No combines a ciegas versiones distintas. Si no aparecen, reiniciá o abrí una sesión nueva. Verificá pidiéndole al agente que encuentre y lea `no-tecnico/SKILL.md`.

En Codex CLI/IDE se puede usar `$no-tecnico` o seleccionar con `/skills`; según la aplicación puede haber un selector de skills. En Claude Code, una skill local puede invocarse con `/no-tecnico`. Si tu agente no reconoce la sintaxis, pedile leer el archivo por su ruta. La barra es la forma de invocación; el nombre de la skill es `no-tecnico`.

Referencias: [skills en Codex](https://learn.chatgpt.com/docs/build-skills), [skills en Claude Code](https://code.claude.com/docs/en/skills).

## 2. Preparar el proyecto

En este kit ya existen `AGENTS.md`, `docs/agents/issue-tracker.md` y `docs/agents/domain.md`. Leelos con el agente. Si trabajás en otro proyecto, pedile usar `setup-matt-pocock-skills`: propone la configuración antes de escribir. Para el curso elegí tickets Markdown locales salvo que ya trabajes con otro sistema. No necesitás publicar issues para practicar.

Las skills heredadas mencionan a veces herramientas específicas de un agente. El kit adapta la carga de skills y permite revisión secuencial cuando no hay subagentes. No todas las aplicaciones ofrecen las mismas funciones. `implement` incluye un commit local: pedí primero inicializar Git en una carpeta nueva, o indicá que todavía no querés commits. Ninguna skill habilita por sí misma subir archivos a servicios externos.

## 3. Tu primera entrevista

> Usá no-tecnico junto con grill-with-docs. Quiero que mis alumnos reserven tutorías sin mandarme mensajes. No sé programación ni arquitectura. Preguntame por el uso y los límites; proponé la solución técnica y explicá qué hace cada pieza. Por ahora quiero definir la especificación, sin implementar.

Si no sabés una respuesta, decilo. El agente debería recomendar y explicar, marcando sus supuestos. Revisá especialmente quién puede acceder, qué se guarda, qué pasa con errores y qué queda fuera.

## 4. De la idea al primer ticket

> Usá to-spec para resumir nuestras decisiones. Separá la conducta que espero del plan técnico y dejá visibles las dudas pendientes.

> Usá to-tickets para proponer incrementos de punta a punta. El primero debe demostrar un comportamiento pequeño y tener criterios comprobables.

> Usá implement con el primer ticket acordado. Explicame lo que construís y mostrame evidencia contra sus criterios.

En el ejemplo del kit, `spec.md` es v1. `spec-v2.md` representa un cambio todavía por aplicar. No leas las dos como reglas simultáneas. El ticket 04 requiere adoptar primero la v2, actualizar `spec.md` y registrar la decisión. Los criterios de evidencia empiezan pendientes porque la aplicación no está implementada.

## 5. Qué revisar

- ¿La spec conserva lo que pediste y distingue supuestos de acuerdos?
- ¿La propuesta técnica tiene una razón comprensible y respeta lo que ya existe?
- ¿Podés mostrar un criterio satisfecho, incluido al menos un error relevante?
- ¿Las pruebas representan la versión vigente de las reglas?
- ¿Quedaron claros los costos por verificar y lo que no se probó?

Entrega de la práctica: un usuario y problema, tres criterios, una exclusión, una propuesta técnica explicada y un ticket vertical. Para ampliar, construí ese ticket y registrá su evidencia.
