# Demo en vivo · Aplicación para gestionar hábitos

Práctica de 35 minutos incluida en la clase. Un hábito es una actividad que queremos repetir; registrar un cumplimiento significa indicar que la realizamos en un día. La aplicación conserva actividades y fechas y calcula la racha de días consecutivos.

## Preparación

Usá una carpeta nueva y el prompt de setup Franco Skills. Las nueve skills base alcanzan para la práctica; TDD es opcional. La preparación no elige arquitectura ni construye la app.

## Ejecutar los estados de respaldo

Desde la raíz del kit, con Python 3:

```sh
python3 -m http.server 4174 --bind 127.0.0.1 --directory demo-en-vivo
```

Abrí http://localhost:4174/checkpoints/01-crear/index.html. Se usa HTTP local para cargar los módulos JavaScript. Cada estado guarda datos independientes en este navegador.

Pruebas de reglas, con Node.js 22 o posterior:

```sh
node --test demo-en-vivo/domain.test.mjs
```

## Acuerdos del ejemplo

- Nombre de 1 a 60 caracteres; se recortan espacios extremos y se ignoran mayúsculas al detectar duplicados.
- En v1 solo se registra el cumplimiento de hoy; no se duplica el mismo hábito y día.
- La racha termina hoy si hoy está registrado; si no, puede terminar ayer.
- Referencia para los ejemplos: 2026-09-10. Días 8–9 dan racha 2; 8–9–10 dan 3; solo 8 da 0.
- Persistencia al recargar, con aviso si no se puede guardar. Una persona, un navegador, sin cuentas ni sincronización.

## Pasos y prompts

### 0. Construimos una app para gestionar hábitos. · 2 min

Vamos a construir una aplicación para gestionar hábitos de estudio. La persona crea una actividad y luego registra en qué días la realizó. La práctica termina cuando podemos crear, registrar un cumplimiento, recargar y comprobar la racha.

```text
Vamos a construir una mini web local de hábitos de estudio para una práctica de SDD. Trabajá en una carpeta nueva. Primero definimos el producto; no implementes todavía.
```

**Resultado esperado:** Carpeta de práctica elegida y alcance local entendido.



### 1. Preparamos el proyecto con nuestro kit. · 3 min

El kit aporta skills y plantillas, pero no las decisiones del producto. La preparación identifica el agente, instala las carpetas correspondientes y conserva las reglas existentes. Los documentos del producto aparecerán a medida que resolvamos las preguntas.

```text
Prepará este proyecto para la clase de SDD de Franco usando https://github.com/FrancoEscob/spec-driven-class-kit.

Descargá o cloná el repo en una carpeta temporal, leé su README y aplicá skills/setup-franco-skills/SKILL.md. Si ya hay una copia local del kit, reutilizala. Instalá en este proyecto las nueve skills base con sus recursos, incluida no-tecnico; detectá si usamos Codex o Claude Code. No instales TDD como dependencia obligatoria.

Conservá archivos y reglas existentes. Dejá preparado AGENTS.md y las plantillas Markdown para decisiones, spec, plan, tickets y evidencia. Usá archivos locales, sin configurar un tracker externo. No construyas ninguna aplicación todavía.

Comprobá la instalación y explicame cómo empezar con no-tecnico y grill-with-docs. Si el repositorio privado no está accesible con la sesión actual, decime que falta acceso y usá el ZIP del curso si ya está disponible; no me pidas tokens.
```

**Resultado esperado:** Reglas del proyecto y ubicación de documentos y tickets definidas.



### 2. La pregunta importante: ¿qué significa “racha”? · 5 min

La entrevista precisa cómo funcionará esta aplicación: qué significa repetir un nombre, cuándo podemos registrar que hicimos una actividad y cómo se calcula la racha. no-tecnico ayuda al agente a recomendar una solución proporcional al uso local.

```text
Usá no-tecnico junto con grill-with-docs. Quiero crear hábitos de estudio, marcarlos hoy y ver una racha. Es una web para una persona en su navegador. Preguntame por nombres, repetición y qué significa racha; recomendá la solución técnica explicándola. No implementes todavía.
```

**Resultado esperado:** Decisiones sobre nombres, marcas, racha, almacenamiento local y exclusiones.



### 3. De las respuestas al contrato. · 4 min

La spec conserva los acuerdos de la entrevista en un archivo Markdown. En v1 solo podemos registrar cumplimientos de hoy. Los criterios usan una fecha de referencia para que el mismo ejemplo produzca siempre el mismo resultado.

```text
Usá to-spec para sintetizar nuestros acuerdos sobre hábitos. Incluí nombres únicos ignorando espacios extremos y mayúsculas, una marca por día, racha tolerante hasta ayer y persistencia al recargar. Definí criterios con fecha de referencia 2026-09-10. En v1 solo se marca hoy. Separá el plan técnico y dejá las dudas visibles.
```

**Resultado esperado:** Spec pequeña con reglas, cuatro criterios concretos y exclusiones claras.



### 4. Elegir piezas pequeñas. Dividir por resultados. · 4 min

Para una persona en un navegador, una pantalla con JavaScript y almacenamiento local puede cubrir el alcance acordado. No necesitamos cuentas ni una base externa. El plan explica este límite y divide el trabajo en T1 y T2.

```text
Usá no-tecnico para explicar el plan mínimo de esta web local. Después usá to-tickets: T1 debe permitir crear, listar y conservar hábitos; T2 marcar hoy y calcular la racha. Cada ticket debe tener sus criterios y dependencias. Proponé primero el desglose; no implementes todavía.
```

**Resultado esperado:** Plan entendible y dos tickets verticales para v1.



### 5. Un ticket. Un resultado comprobable. · 8 min

Construimos primero T1: crear una actividad, listarla y conservarla. Después T2 agrega el registro de cumplimiento y la racha. Las comprobaciones se ejecutan sobre lo realmente construido; TDD solo se agrega si elegimos ese modo de trabajo.

```text
Usá implement para resolver solo T1 de la aplicación de hábitos. Implementá crear, listar y conservar actividades. Ejecutá sus comprobaciones y mostrame qué criterios cumplen y cuáles faltan. No avances a T2 hasta que revisemos T1. TDD es opcional; no lo supongas como requisito.
```

**Resultado esperado:** T1 demostrable. Luego repetir el proceso con T2.

[Abrir respaldo](checkpoints/02-marcar-v1/index.html)

### 6. Volvemos a los criterios. Uno por uno. · 4 min

Con fecha de referencia 10 de septiembre, una actividad realizada el 8 y el 9 tiene una racha de dos días aunque hoy todavía no la hayamos hecho. Si también se realizó el 10, la racha es tres. Si solo se realizó el 8, la continuidad ya se interrumpió.

```text
Recorré la spec criterio por criterio. Para cada uno, indicá cómo se probó, el resultado real y qué falta verificar. Contrastá la interfaz con las reglas, no solo con los tests. No marques un criterio como cumplido si no lo ejecutaste.
```

**Resultado esperado:** Matriz de evidencia con resultados observados; cualquier falta queda pendiente.



### 7. “Ayer lo hice, pero olvidé marcarlo.” · 5 min

La nueva necesidad es registrar ayer cuando olvidamos hacerlo a tiempo. Actualizamos la spec a v2, indicamos qué regla cambió y definimos T3. La definición de racha se mantiene; puede cambiar su valor porque agregamos un día realizado.

```text
Cambio acordado: permitir marcar ayer además de hoy. Fechas anteriores o futuras siguen prohibidas. No duplicar marcas y conservar la definición de racha. Actualizá primero la spec y explicá el impacto; proponé T3. Después de revisar ese cambio, implementalo y mostrá evidencia de A5.
```

**Resultado esperado:** Spec v2, ticket del cambio, botón para ayer y evidencia de racha recalculada.

[Abrir respaldo](checkpoints/03-marcar-ayer-v2/index.html)

## Respaldos y documentos

- [T1 · Crear y conservar actividades](checkpoints/01-crear/index.html).
- [T2 · Registrar hoy y calcular racha](checkpoints/02-marcar-v1/index.html).
- [T3 · Agregar ayer](checkpoints/03-marcar-ayer-v2/index.html).
- [Spec v1](specs/spec-v1.md), [cambio v2](specs/spec-v2.md) y [plan](plan.md).

Los respaldos son soluciones preparadas: al usarlos durante la clase se presentan como tales. No demuestran lo que el agente del alumno ejecutó. La fecha simulada y los datos de ejemplo permiten demostrar la racha sin esperar varios días. Las comprobaciones no ejecutadas siguen pendientes.
