# Demo en vivo · Una web de hábitos

Esta es la práctica de la sección 5: **35 minutos incluidos en la clase de 100 minutos**. Partimos del ejemplo de hábitos del video de MoureDev y lo adaptamos de una CLI en Python a una web local para que se pueda proyectar y usar en el navegador. La app de tutorías es otro ejercicio, más amplio, y no se usa en esta demo.

## Antes de la clase

- Usá un proyecto nuevo con las skills instaladas, y un agente capaz de leer archivos, escribir código y ejecutar pruebas. La clase no exige un modelo concreto ni GPT-6 Astra.
- Comprobá que tu agente tenga acceso a las skills; si no tiene selector, pedile que lea su `SKILL.md`.
- Conservá esta carpeta como referencia. **No pegues el código de respaldo en la conversación inicial:** queremos observar cómo se construye a partir del acuerdo.
- Abrí un estado de respaldo en otra pestaña. Cada estado conserva datos propios, para que los ejemplos no se mezclen.
- Acordá una fecha de referencia para los ejemplos: **2026-09-10**. No dependemos de esperar a mañana.

Para ejecutar los respaldos desde la raíz del kit, necesitás Python 3:

```sh
python3 -m http.server 4174 --bind 127.0.0.1 --directory demo-en-vivo
```

Abrí `http://localhost:4174/checkpoints/01-crear/index.html`. Se usa un servidor HTTP local porque los módulos JavaScript del navegador no se cargan de forma portable al abrir un archivo `file://`.

Para ejecutar las pruebas de reglas y persistencia, con Node.js 22 o posterior:

```sh
node --test --test-reporter=spec demo-en-vivo/domain.test.mjs
```

## El guion de 35 minutos

| Minutos | Acción en vivo | Qué debe quedar visible |
| --- | --- | --- |
| 0–2 | Presentar la necesidad y crear una carpeta nueva | Una persona, un navegador, hábitos de estudio |
| 2–5 | `setup-matt-pocock-skills` | Reglas del proyecto y ubicación de documentos y tickets |
| 5–10 | `no-tecnico` + `grill-with-docs` | Acuerdos sobre nombres, marcas, racha y límites |
| 10–14 | `to-spec` y clarificación final | Una spec con criterios A1–A4, sin decisiones técnicas escondidas |
| 14–18 | Plan explicado y `to-tickets` | Plan mínimo y T1/T2 con dependencias |
| 18–26 | `implement`: T1; revisar; luego T2 | Crear y conservar; después marcar hoy y ver la racha |
| 26–30 | Volver a los criterios | Una matriz de evidencia de lo ejecutado y lo pendiente |
| 30–35 | Cambio v2: permitir ayer | Spec cambiada, T3, implementación y criterio A5 |

Los tiempos son una guía docente. Si la herramienta tarda, abrí el checkpoint correspondiente, **indicá que es una solución preparada** y recorré sus decisiones. No lo presentes como algo que acaba de producir el agente. La velocidad del modelo no es el aprendizaje que estamos evaluando.

## 0. Abrir el ejercicio

```text
Vamos a construir una mini web local de hábitos de estudio para una práctica de SDD. Trabajá en una carpeta nueva. Primero definimos el producto; no implementes todavía.
```

**Resultado:** carpeta elegida y propósito claro. No hay cuentas, recordatorios, pagos ni datos compartidos.

## 1. Preparar

```text
Usá setup-matt-pocock-skills para preparar este proyecto educativo. Quiero tickets Markdown locales, mensajes en español y el ciclo spec → plan → tickets → implementación → evidencia. No agregues cuentas, servicios externos ni código de la aplicación todavía.
```

Mostrá `AGENTS.md`: cómo trabaja el agente. Mostrá dónde van `spec.md`, `plan.md` e `issues/*.md`. En el video se usa `tasks.md`; en este kit hay un archivo por ticket. Son dos formas de conservar el mismo desglose.

## 2. Entrevistar sin tecnicismos

```text
Usá no-tecnico junto con grill-with-docs. Quiero crear hábitos de estudio, marcarlos hoy y ver una racha. Es una web para una persona en su navegador. Preguntame por nombres, repetición y qué significa racha; recomendá la solución técnica explicándola. No implementes todavía.
```

Respuestas del docente para mantener la práctica acotada:

- Nombre de 1 a 60 caracteres después de recortar espacios extremos. No se distinguen mayúsculas al detectar duplicados. No se colapsan espacios interiores.
- Una marca por hábito y día. V1 solo permite hoy. La segunda marca informa que ya existe y conserva el registro original.
- Racha: días consecutivos hasta hoy si hoy está marcado; si no, hasta ayer. Con referencia 10 de septiembre, marcas 8–9 dan 2, 8–9–10 dan 3, solo 8 da 0.
- Los datos sobreviven a una recarga, en el mismo navegador. No se comparten entre dispositivos.
- El almacenamiento puede fallar: mostrarlo, conservar el estado previo y no anunciar éxito.

**Explicación de no-tecnico:** “Como la usarás solo vos en este navegador, podemos guardar los hábitos ahí. No hace falta una base de datos externa. Si después querés compartirlos entre dispositivos, revisaremos esa decisión”. El alumno decide el uso; el agente propone las piezas.

## 3. Especificar y aclarar

```text
Usá to-spec para sintetizar nuestros acuerdos sobre hábitos. Incluí nombres únicos ignorando espacios extremos y mayúsculas, una marca por día, racha tolerante hasta ayer y persistencia al recargar. Definí criterios con fecha de referencia 2026-09-10. En v1 solo se marca hoy. Separá el plan técnico y dejá las dudas visibles.
```

Abrí el documento y comprobá que las palabras coincidan con las decisiones. Respaldo: [spec v1](specs/spec-v1.md). Si “racha” sigue ambigua, volvé a clarificar antes de construir.

## 4. Plan y tickets

```text
Usá no-tecnico para explicar el plan mínimo de esta web local. Después usá to-tickets: T1 debe permitir crear, listar y conservar hábitos; T2 marcar hoy y calcular la racha. Cada ticket debe tener sus criterios y dependencias. Proponé primero el desglose; no implementes todavía.
```

El respaldo usa HTML/CSS/JavaScript y `localStorage` por el alcance de esta demo. Es una recomendación justificada, no una arquitectura universal. [Plan](plan.md), [T1](issues/T1-crear.md), [T2](issues/T2-marcar.md).

## 5. Implementar por incrementos

```text
Usá implement para resolver solo T1 con sus criterios. Escribí primero una prueba de comportamiento, implementá lo necesario y ejecutá las comprobaciones. Abrí la app para que revise el resultado. Indicá qué cumple y qué falta; no avances a T2 hasta que revisemos T1.
```

Probá “Leer”, recargá y luego intentá “ leer ”. Mostrá el error esperado. Revisado T1, pedí:

```text
T1 revisado. Usá implement y tdd para resolver T2. Aplicá la definición de racha de la spec. Mostrá primero una prueba que falle, después la implementación y el resultado de la prueba.
```

Respaldos: [T1](checkpoints/01-crear/index.html) y [T2 / v1](checkpoints/02-marcar-v1/index.html). Cada uno usa una clave distinta de almacenamiento; no es una migración de datos entre etapas.

## 6. Volver a la evidencia

```text
Recorré la spec criterio por criterio. Para cada uno, indicá cómo se probó, el resultado real y qué falta verificar. Contrastá la interfaz con las reglas, no solo con los tests. No marques un criterio como cumplido si no lo ejecutaste.
```

| Criterio | Acción que demostramos |
| --- | --- |
| A1 | Crear “Leer”, marcar hoy y recargar. Ambos datos siguen presentes. |
| A2 | Intentar crear “ leer ” y “LEER”: no aparecen duplicados. |
| A3 | Pulsar dos veces marcar hoy. Solo hay una marca y aparece un aviso. |
| A4 | Cargar los 3 ejemplos de racha con fecha 2026-09-10. Deben indicar 2, 3 y 0. |

Para repetir los ejemplos desde cero, usá “Empezar de nuevo en este estado” y aceptá el borrado de sus datos de demostración. Los controles de fecha son didácticos, no protegen contra manipulación del reloj. Revisá además el teclado, el nombre vacío y el error al guardar. No registres un resultado si no lo viste o ejecutaste.

## 7. Cambiar la regla

```text
Cambio acordado: permitir marcar ayer además de hoy. Fechas anteriores o futuras siguen prohibidas. No duplicar marcas y conservar la definición de racha. Actualizá primero la spec y explicá el impacto; proponé T3. Después de revisar ese cambio, implementalo y mostrá evidencia de A5.
```

Mostrá [spec v2](specs/spec-v2.md), [T3](issues/T3-ayer.md) y el [respaldo v2](checkpoints/03-marcar-ayer-v2/index.html). Creá un hábito, marcá hoy y después ayer: la racha pasa de 1 a 2. Las pruebas también verifican que v1 rechaza ayer y v2 sigue rechazando fechas anteriores y futuras.

## Para continuar después

Cambiá una sola regla, por ejemplo permitir archivar un hábito sin borrar su historial. Escribí el criterio antes del código y explicá el impacto. No agregues esa función durante la demo de 35 minutos.
