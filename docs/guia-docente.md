# Guía del docente · Spec-Driven Development

Edición 2026-09-10. Clase: 100 minutos, con demo en vivo de 35 minutos incluida. Noticias: sesión independiente de 8–10 minutos.

- El punto de partida: 10 minutos.
- Entender SDD: 12 minutos.
- Preparar el proyecto: 15 minutos.
- Usar las skills: 18 minutos.
- Demo en vivo: 35 minutos.
- Cerrar y continuar: 10 minutos.

## 01 · De vibe coding a software con intención.

Aprendé a transformar una idea en una especificación, guiar al agente y comprobar lo que construyó. Un método que podés repetir en tu próximo proyecto.

**Explicación:** Abrí la clase con una promesa concreta: completar un ciclo de SDD sobre una aplicación pequeña. El contenido se basa en la transcripción de MoureDev; adaptamos su CLI de hábitos a una web local y sus prompts a nuestro paquete de skills. El bloque de noticias de Astra es independiente y opcional. No se requiere ese modelo para seguir la clase.

**Ejemplo:** El resultado de la práctica será crear “Leer 20 minutos”, marcarlo por hoy, recargar y verificar que conserva el registro.

**Pregunta al grupo:** ¿Qué proyecto te gustaría poder retomar dentro de un mes sin depender del historial de un chat?

**Transición:** Primero vamos a ubicar qué hace el alumno y qué le podemos pedir a la IA.

**Idea clave:** El objetivo de hoy: que puedas explicar qué pediste, qué decidió el agente y cómo lo verificaste.

- [Video de referencia · Introducción](https://www.youtube.com/watch?v=5HaOxAAA5qI&t=0s)

## 02 · La IA escribe. Vos dirigís el trabajo.

Tu aporte es explicar el problema, revisar las decisiones y comprobar resultados. No necesitás elegir una base de datos antes de saber qué querés guardar.

**Explicación:** El video insiste en la participación humana a lo largo del proceso. Para esta audiencia, esa participación empieza por el uso y las consecuencias. No se enseña a aprobar pantallas sin entender, ni se exige que los alumnos sean arquitectos.

**Ejemplo:** No necesitás programar el almacenamiento para pedir: “Al cerrar y abrir la página, quiero seguir viendo mis hábitos”.

**Pregunta al grupo:** ¿Qué resultado podrías revisar vos sin leer código?

**Transición:** Veamos cuándo alcanza con explorar y cuándo hace falta conservar un acuerdo.

**Idea clave:** Comprender una decisión no es lo mismo que saber programarla.



## 03 · Explorar está bien. Perder el acuerdo, no.

Vibe coding describe aquí una forma de avanzar por conversación, prueba y corrección, sin conservar necesariamente una definición verificable de lo que se quería construir.

**Explicación:** Tomá del video la distinción entre prototipos y software mantenido, sin repetir afirmaciones absolutas sobre empleo o sobre que todo prototipo está mal. Una exploración puede convertirse en producto: ahí cambia la inversión necesaria en reglas y verificación.

**Ejemplo:** Para probar el diseño de una lista de hábitos alcanza una maqueta. Para conservar el progreso de alguien durante meses necesitamos definir qué significa marcar, repetir y cambiar de día.

**Pregunta al grupo:** ¿Cómo te darías cuenta de que tu prototipo ya necesita otra forma de trabajo?

**Transición:** El nivel de rigor depende del costo de equivocarnos.

**Idea clave:** Usar IA para programar no significa necesariamente hacer vibe coding.

- [Video de referencia · Vibe coding](https://www.youtube.com/watch?v=5HaOxAAA5qI&t=1316s)

## 04 · El rigor se elige. No se acumula.

El costo del error crece hacia arriba. La vida útil crece hacia la derecha. Un proyecto breve también puede requerir controles fuertes.

**Explicación:** Leé los ejes antes de los cuadrantes. Es una guía de discusión, no una taxonomía rígida. Vibe coding aquí nombra una práctica exploratoria sin conservar necesariamente una definición verificable; usar IA para programar no implica trabajar así.

**Ejemplo:** Un mockup descartable y un script que borra datos pueden llevar una hora cada uno. Su necesidad de rigor es muy distinta.

**Pregunta al grupo:** ¿Dónde pondrían una página personal? ¿Y una importación única de las notas de alumnos?

**Transición:** Cuando la intención debe durar, una especificación nos da una referencia común.

**Idea clave:** La duración no decide sola: mirá consecuencias, colaboración y reversibilidad.



## 05 · El ciclo de siempre. Con un agente al lado.

SDD conserva las preguntas del desarrollo de software. Los documentos hacen que humanos y agentes puedan trabajar con el mismo acuerdo.

**Explicación:** El video establece esta equivalencia antes de entrar en la práctica. Leé el esquema de arriba hacia abajo y después señalá el retorno. No presentes planificación y constitución como sinónimos exactos: una define propósito y otra conserva reglas estables.

**Ejemplo:** “Registrar hábitos” es una necesidad. “No duplicar la marca de hoy” es un requisito. “Guardarlo localmente” es una decisión del plan para esta demo.

**Pregunta al grupo:** ¿En qué paso decidirías qué debe pasar si se marca dos veces?

**Transición:** Ahora ubiquemos el acuerdo que conecta esos pasos.

**Idea clave:** El agente acelera la ejecución. Las preguntas siguen siendo necesarias.

- [Video de referencia · Ciclo clásico](https://www.youtube.com/watch?v=5HaOxAAA5qI&t=949s)

## 06 · Una referencia para todo el ciclo.

La especificación expresa qué queremos construir y por qué. Sirve para discutir, planear y verificar, incluso cuando la conversación ya terminó.

**Explicación:** Seguí el orden del video: una primera spec puede llevar a una nueva clarificación. En nuestro flujo, grill-with-docs también aclara antes de sintetizar. No son pasos incompatibles: la conversación y el documento se refinan hasta tener suficiente claridad.

**Ejemplo:** Si “racha” significa algo distinto para dos personas, lo aclaramos antes de implementar su cálculo. Si lo descubrimos después, revisamos la regla y su impacto.

**Pregunta al grupo:** ¿Por qué una spec es más útil que un prompt largo perdido en una conversación?

**Transición:** Hay distintas formas de conservar esa relación después de escribir código.

**Idea clave:** La spec no garantiza acierto: permite detectar y discutir diferencias.

- [Video de referencia · Flujo práctico](https://www.youtube.com/watch?v=5HaOxAAA5qI&t=2799s)

## 07 · Tres destinos para una especificación.

Usamos esta distinción como vocabulario del curso. No son certificaciones ni un estándar universal de madurez.

**Explicación:** Estos términos describen relaciones posibles con la especificación. No presentes spec-as-source como una garantía de regenerar cualquier aplicación sin intervención. En anchored sigue haciendo falta criterio humano para detectar contradicciones.

**Ejemplo:** En una app de hábitos, spec-first sirve de inicio; anchored conserva la regla de rachas mientras la app evoluciona; as-source pretende generar desde una especificación con un proceso que lo sostenga.

**Pregunta al grupo:** ¿Qué documento o evidencia consultarían si el código y la spec dicen cosas distintas?

**Transición:** Para practicar anchored, empecemos por preparar las reglas del proyecto.

**Idea clave:** En esta clase practicamos spec-anchored: mantener intención y comportamiento alineados.

- [Video de referencia · Tres tipos de SDD](https://www.youtube.com/watch?v=5HaOxAAA5qI&t=1572s)

## 08 · Reglas estables. Un punto de partida claro.

AGENTS.md indica cómo trabajar en este proyecto. La constitución reúne principios que deberían respetar todas sus funcionalidades. Pueden ser secciones de un documento pequeño.

**Explicación:** En el video aparecen AGENTS.md y constitution.md. Evitá convertir sus nombres en una obligación universal: importa el propósito. Si el agente usa CLAUDE.md u otro punto de entrada, hacé referencia a una sola fuente de reglas para evitar copias divergentes.

**Ejemplo:** “Mensajes en español” afecta toda la app. “No duplicar un hábito de igual nombre” pertenece a la funcionalidad de crear hábitos.

**Pregunta al grupo:** ¿Dónde guardarías “no agregar dependencias sin una razón concreta”?

**Transición:** Cada documento debería contestar una pregunta reconocible.

**Idea clave:** Las reglas estables viven aparte de los detalles de una funcionalidad.

- [Video de referencia · Setup y constitución](https://www.youtube.com/watch?v=5HaOxAAA5qI&t=3358s)

## 09 · Un archivo. Una pregunta.

Los nombres ayudan a orientarse; el valor está en la decisión que conserva cada archivo. No hace falta crear documentos vacíos para seguir un ritual.

**Explicación:** Mostrá un árbol real del kit. En el video se usa tasks.md; nuestras skills usan un archivo por ticket en issues. Explicá esta diferencia explícitamente para que el alumno no espere encontrar ambos sistemas.

**Ejemplo:** Un ticket para marcar un hábito refiere a la regla de “una marca por día” de la spec. No tiene que reescribir toda la especificación.

**Pregunta al grupo:** ¿Qué archivo abrirías para entender por qué elegimos guardar solo en este navegador?

**Transición:** Vamos a escribir una regla que otra persona pueda verificar.

**Idea clave:** Los archivos se relacionan; no repiten la misma información.



## 10 · De “una app útil” a una conducta observable.

Una buena especificación cuenta quién necesita algo, qué debería pasar y qué resultados permiten comprobarlo.

**Explicación:** Usá historias breves, reglas numeradas y ejemplos. Los requisitos no funcionales relevantes, como usar teclado o no perder datos ante un error, también deben poder revisarse. Las dudas abiertas se escriben como dudas, no como hechos.

**Ejemplo:** “Leer”, “ leer ” y “LEER” no deben crear tres hábitos si acordamos que el nombre es único sin distinguir mayúsculas.

**Pregunta al grupo:** ¿Qué debería pasar con un nombre compuesto solo por espacios?

**Transición:** Podemos escribir estas reglas con patrones simples que reducen ambigüedad.

**Idea clave:** “Se guarda” es una intención. “Sigue visible al recargar” es una comprobación.

- [Video de referencia · Especificación](https://www.youtube.com/watch?v=5HaOxAAA5qI&t=4203s)

## 11 · Escribir claro es describir qué pasa.

El video introduce EARS para estructurar requisitos. Para empezar, usá condiciones y respuestas concretas; no necesitás memorizar una plantilla compleja.

**Explicación:** Esta es una simplificación pedagógica de los patrones del video. No la presentes como todo el estándar EARS. El ejercicio consiste en transformar frases vagas en eventos, condiciones y respuestas que el docente pueda leer en voz alta.

**Ejemplo:** “El sistema será intuitivo” no alcanza. “Si el nombre está vacío, mostrará el motivo y no creará un hábito” permite una prueba.

**Pregunta al grupo:** ¿Cómo reescribirías “manejar bien los errores” para el caso de un nombre duplicado?

**Transición:** Ahora que entendemos el proceso, veamos qué aporta cada skill.

**Idea clave:** Después de cada regla, preguntá: ¿con qué ejemplo comprobaríamos esto?

- [Video de referencia · Patrones de requisitos](https://www.youtube.com/watch?v=5HaOxAAA5qI&t=2672s)

## 12 · Cinco pasos. Sin prompts interminables.

Una skill guarda instrucciones reutilizables. No reemplaza el método: nos ayuda a repetirlo sin escribir el procedimiento entero cada vez.

**Explicación:** El video presenta skills después de demostrar el flujo. Aquí ya vimos los conceptos y ahora las abrimos antes de la demo para saber qué vamos a invocar. Remarcá que nuestros nombres provienen del paquete de Matt Pocock; no son los comandos del video.

**Ejemplo:** En lugar de volver a pegar todo el prompt de clarificación, invocamos grill-with-docs con la idea y el contexto del proyecto.

**Pregunta al grupo:** ¿Qué parte del trabajo seguiría siendo necesaria aunque no existiera ninguna skill?

**Transición:** Abramos las cinco principales: qué reciben, qué producen y cómo se usan.

**Idea clave:** No-tecnico acompaña el recorrido para traducir y explicar las decisiones.

- [Video de referencia · Skills reutilizables](https://www.youtube.com/watch?v=5HaOxAAA5qI&t=6440s)
- [Skills originales · Matt Pocock](https://github.com/mattpocock/skills)

## 13 · Las skills que vas a usar.

Cada desplegable explica cuándo invocarla, qué contexto necesita y qué debería entregar. También podés abrir su SKILL.md completo y descargarlo.

**Explicación:** Abrí grill-with-docs, leé su ejemplo de uso y mostrale al grupo que carga grilling y domain-modeling. Después abrí to-spec para mostrar que sintetiza decisiones previas. Los textos completos se generan desde las mismas carpetas que descarga el alumno.

**Ejemplo:** “Usá to-spec con nuestras decisiones sobre nombres y marcas. Conservá las dudas pendientes y no implementes todavía”.

**Pregunta al grupo:** ¿Qué información le faltaría a to-spec si nunca discutimos qué cuenta como una racha?

**Transición:** Hay cuatro skills de soporte y una adaptación que ayuda a quienes no son técnicos.

**Idea clave:** Una skill es legible: podés revisar las instrucciones antes de ejecutarlas.



## 14 · Lo que sostiene el recorrido.

Estas skills aportan preguntas, lenguaje compartido, pruebas y revisión. No-tecnico adapta la conversación para que puedas decidir sin saber arquitectura.

**Explicación:** Abrí no-tecnico y leé el criterio “necesidad → recomendación → motivo → compromiso”. Después mostrale al grupo dónde TDD describe una prueba de comportamiento y dónde code-review contrasta intención y estándares. Si no hay subagentes, la adaptación permite revisar secuencialmente y decirlo.

**Ejemplo:** El alumno dice “quiero guardar mi progreso”. El agente pregunta si se usa en un solo dispositivo o se comparte, y explica por qué eso cambia la solución.

**Pregunta al grupo:** ¿Qué necesidad justificaría pasar de almacenamiento local a una base compartida?

**Transición:** Veamos cómo pedir una recomendación sin convertirla en un examen técnico.

**Idea clave:** No hace falta recordar todos los comandos. Sí entender el papel de cada uno.



## 15 · No elijas tecnologías que todavía no entendés.

Contá cómo querés que se use el producto. El agente investiga y recomienda las piezas necesarias, conectando cada elección con una necesidad.

**Explicación:** La demo no necesita un framework ni una base remota para enseñar el ciclo. Una web compartida real sería otra necesidad y podría requerir servidor, autenticación y base de datos. No confundir la simplificación educativa con arquitectura de producción.

**Ejemplo:** Prompt: “Usá no-tecnico. Proponé la solución más sencilla para una práctica local y explicame cómo viaja la acción de marcar un hábito”.

**Pregunta al grupo:** ¿Qué perderíamos al cambiar de computadora?

**Transición:** La recomendación va al plan; la conducta esperada, a la spec.

**Idea clave:** Una recomendación técnica siempre debe explicar también su límite.



## 16 · Dos documentos. Dos decisiones distintas.

Primero acordamos el comportamiento. Después elegimos una solución técnica que lo cumpla y podamos entender.

**Explicación:** Explicá la diferencia con el mismo requisito. La spec no debería elegir un archivo por costumbre. El plan propone una estructura y justifica una solución; una restricción tecnológica explícita del proyecto sí se conserva como tal.

**Ejemplo:** “Persiste al recargar” es un criterio de producto. “Usar localStorage” es una solución para este alcance local, con límites conocidos.

**Pregunta al grupo:** ¿Dónde registraríamos que no se permite sincronizar información con un servicio externo?

**Transición:** El último puente antes de implementar es dividir el trabajo.

**Idea clave:** Cambiar la forma de guardar no debería cambiar por accidente las reglas del hábito.



## 17 · Un recorrido completo. Después, el siguiente.

Cada ticket debería terminar en una conducta observable. Así descubrimos antes si entendimos bien el problema.

**Explicación:** El video usa un tasks.md con tareas y requisitos referidos. Nuestro paquete usa un archivo por ticket y prefiere cortes verticales. El cambio sorpresa T3 se acuerda después de tener v1. No autoriza implementarlo antes de tiempo.

**Ejemplo:** Al cerrar T1 podemos mostrar una lista que persiste. Al cerrar T2 podemos demostrar qué hace una marca repetida.

**Pregunta al grupo:** ¿Qué podrías enseñar al grupo al terminar un ticket llamado “preparar todos los estilos”?

**Transición:** Es momento de abrir una carpeta nueva y construir el ejemplo en vivo.

**Idea clave:** Cada ticket une pantalla, lógica, datos y comprobación; no es “todo el frontend”.



## 18 · Vamos a construir un hábito de principio a fin.

Una mini web para crear hábitos de estudio, marcarlos y ver su racha. Partimos de una carpeta nueva y usamos las skills durante la clase.

**Explicación:** Prepará antes el agente autenticado, una carpeta de práctica y las skills. La demo adapta la CLI de hábitos del video a una web más visible para el grupo. No conectes bases remotas ni uses datos reales. Los estados de respaldo están en demo-en-vivo/checkpoints y se pueden ejecutar con un servidor local.

**Ejemplo:** Proyectá el objetivo de la app y anunciá el criterio que vamos a comprobar: al recargar, el hábito y su marca siguen ahí.

**Pregunta al grupo:** ¿Qué palabra de este pedido necesita una definición antes de programar?

**Transición:** Primero preparamos el lugar de trabajo.

**Idea clave:** Es una construcción en vivo. Los checkpoints son material de respaldo, no resultados generados durante la sesión.

**En vivo · 2 min:**

```text
Vamos a construir una mini web local de hábitos de estudio para una práctica de SDD. Trabajá en una carpeta nueva. Primero definimos el producto; no implementes todavía.
```

**Resultado esperado:** Carpeta de práctica elegida y alcance local entendido.

- [Video de referencia · Práctica del video](https://www.youtube.com/watch?v=5HaOxAAA5qI&t=2905s)

## 19 · Preparar las reglas y las herramientas.

El setup ocurre una vez por proyecto. En esta práctica, los tickets serán archivos locales y las decisiones deberán poder explicarse en español.

**Explicación:** Prepará el acceso al agente antes de la clase. Dentro de estos tres minutos, proyectá lo que el setup encontró y la convención elegida. No copies las reglas de tutorías del ejemplo extendido: este proyecto trata de hábitos. Si usás Claude Code, asegurá que su archivo de entrada refiera a las reglas correctas.

**Ejemplo:** El instalador corre primero en simulación. Para la práctica conviene una carpeta vacía y un repositorio local inicializado.

**Pregunta al grupo:** ¿Dónde va a guardar el agente el primer ticket?

**Transición:** Ahora sí hacemos la entrevista de producto.

**Idea clave:** Antes de seguir, el agente debe poder encontrar no-tecnico y grill-with-docs.

**En vivo · 3 min:**

```text
Usá setup-matt-pocock-skills para preparar este proyecto educativo. Quiero tickets Markdown locales, mensajes en español y el ciclo spec → plan → tickets → implementación → evidencia. No agregues cuentas, servicios externos ni código de la aplicación todavía.
```

**Resultado esperado:** Reglas del proyecto y ubicación de documentos y tickets definidas.



## 20 · La pregunta importante: ¿qué significa “racha”?

El agente debe hacer visibles las decisiones. No vamos a responderle con tecnologías: vamos a responderle con ejemplos del uso.

**Explicación:** Dejá que el agente pregunte primero. Usá estas decisiones como respuesta guía si el grupo se bloquea. La racha cuenta días consecutivos hacia atrás desde hoy si está marcado o desde ayer si hoy está pendiente. Un hueco corta la racha; marcar ayer será el cambio de v2.

**Ejemplo:** Fecha de demostración: 10/09/2026. Marcas del 8 y 9 → racha 2; agregar el 10 → racha 3. Solo el 8 → racha 0.

**Pregunta al grupo:** ¿Queremos que la racha se pierda a primera hora del día antes de poder completar el hábito?

**Transición:** Guardemos las decisiones para que no dependan de recordar esta conversación.

**Idea clave:** Estas respuestas son decisiones de producto, no detalles de implementación.

**En vivo · 5 min:**

```text
Usá no-tecnico junto con grill-with-docs. Quiero crear hábitos de estudio, marcarlos hoy y ver una racha. Es una web para una persona en su navegador. Preguntame por nombres, repetición y qué significa racha; recomendá la solución técnica explicándola. No implementes todavía.
```

**Resultado esperado:** Decisiones sobre nombres, marcas, racha, almacenamiento local y exclusiones.



## 21 · De las respuestas al contrato.

La spec conserva lo acordado y define cómo lo comprobamos. Antes de continuar, leemos los criterios en voz alta.

**Explicación:** Abrí el archivo que produjo to-spec y contrastalo con las respuestas. Si inventó sincronización, recordatorios o usuarios múltiples, sacalos. La fecha controlada permite enseñar el límite sin esperar al día siguiente. Pedí estados vacíos y errores de almacenamiento comprensibles.

**Ejemplo:** Agregá un nombre vacío al listado de casos y comprobá que la spec lo rechaza con un motivo.

**Pregunta al grupo:** ¿Qué criterio nos permitiría detectar que el agente duplica marcas?

**Transición:** Con el contrato claro, podemos revisar cómo propone construirlo.

**Idea clave:** Un documento bonito no basta: sus ejemplos tienen que representar nuestra intención.

**En vivo · 4 min:**

```text
Usá to-spec para sintetizar nuestros acuerdos sobre hábitos. Incluí nombres únicos ignorando espacios extremos y mayúsculas, una marca por día, racha tolerante hasta ayer y persistencia al recargar. Definí criterios con fecha de referencia 2026-09-10. En v1 solo se marca hoy. Separá el plan técnico y dejá las dudas visibles.
```

**Resultado esperado:** Spec pequeña con reglas, cuatro criterios concretos y exclusiones claras.



## 22 · Elegir piezas pequeñas. Dividir por resultados.

Para esta práctica local alcanza con una web pequeña, lógica separada y almacenamiento en el navegador. El agente debe explicar por qué no hace falta una infraestructura mayor.

**Explicación:** La elección sin framework es una propuesta para una demo pequeña, no una enseñanza contra frameworks. Si el alumno ya tiene un proyecto, se reutiliza su stack. Revisá que cada ticket termine en algo demostrable y que no se instale una base remota por hábito.

**Ejemplo:** La lógica recibe una fecha explícita, así puede probarse el 10 de septiembre sin depender del reloj de quien enseña.

**Pregunta al grupo:** ¿Qué requisito nuevo obligaría a revisar el almacenamiento local?

**Transición:** Pasamos a implementar solo lo que quedó acordado.

**Idea clave:** T1: crear y persistir. T2: marcar y calcular. El cambio T3 se acuerda después.

**En vivo · 4 min:**

```text
Usá no-tecnico para explicar el plan mínimo de esta web local. Después usá to-tickets: T1 debe permitir crear, listar y conservar hábitos; T2 marcar hoy y calcular la racha. Cada ticket debe tener sus criterios y dependencias. Proponé primero el desglose; no implementes todavía.
```

**Resultado esperado:** Plan entendible y dos tickets verticales para v1.



## 23 · Un ticket. Una prueba. Un resultado.

El agente implementa de forma acotada. Al terminar, mostramos la aplicación y revisamos el criterio antes de pasar al siguiente ticket.

**Explicación:** Reservá ocho minutos para T1 y T2. No prometas un tiempo exacto del modelo. Si demora, abrí el checkpoint 01-crear o 02-marcar-v1 y declaralo como respaldo preparado. El guion explica cómo ejecutarlos. No presentes un archivo prehecho como generación en vivo.

**Ejemplo:** En T1 creá Leer y recargá. En T2 marcá hoy y repetí la acción: debe informar que ya está hecho.

**Pregunta al grupo:** ¿La segunda marca cambió el resultado? ¿Eso coincide con A3?

**Transición:** Ahora recorremos los criterios juntos, no solo el camino feliz.

**Idea clave:** Una prueba que pasa sin representar nuestra regla no demuestra que terminamos.

**En vivo · 8 min:**

```text
Usá implement para resolver solo T1 con sus criterios. Escribí primero una prueba de comportamiento, implementá lo necesario y ejecutá las comprobaciones. Abrí la app para que revise el resultado. Indicá qué cumple y qué falta; no avances a T2 hasta que revisemos T1.
```

**Resultado esperado:** T1 demostrable. Luego repetir el proceso con T2.



## 24 · Volvemos a los criterios. Uno por uno.

La validación conecta el acuerdo con lo que realmente observamos. Usá los ejemplos de fechas para contrastar la racha y registrá los resultados observados.

**Explicación:** Pedí una matriz con criterio, prueba, resultado y limitaciones. Probá también entrada vacía y un error al guardar. En la demo, el selector de fecha sirve para enseñanza: no representa una protección contra cambiar el reloj de una app real.

**Ejemplo:** Usá los botones de fecha del respaldo o sus datos de ejemplo para demostrar ayer y hoy. No esperes a que pase un día.

**Pregunta al grupo:** ¿Hay algún criterio en la spec que todavía no vimos funcionar?

**Transición:** Ahora cambiemos una regla y mostremos por qué conservamos los documentos.

**Idea clave:** Lo que no se comprobó queda pendiente, aunque el agente diga “listo”.

**En vivo · 4 min:**

```text
Recorré la spec criterio por criterio. Para cada uno, indicá cómo se probó, el resultado real y qué falta verificar. Contrastá la interfaz con las reglas, no solo con los tests. No marques un criterio como cumplido si no lo ejecutaste.
```

**Resultado esperado:** Matriz de evidencia con resultados observados; cualquier falta queda pendiente.



## 25 · “Ayer lo hice, pero olvidé marcarlo.”

Aparece una necesidad nueva: permitir marcar ayer. La v1 solo permitía hoy. Actualizamos el acuerdo, revisamos el impacto y construimos ese cambio.

**Explicación:** Este es el mismo tipo de cambio que propone el video en su cierre práctico. Usá la fecha de referencia 10/09. Marcá el 8 mediante la preparación del escenario, luego permití el 9 como ayer y observá cómo recupera una racha válida. No agregues edición libre de cualquier fecha.

**Ejemplo:** Con marca del 8 y hoy 10, la racha es 0. Al registrar ayer 9, pasa a 2. Si marcamos también hoy 10, pasa a 3.

**Pregunta al grupo:** ¿Qué regla de la v1 hay que actualizar antes de aceptar el botón “Marcar ayer”?

**Transición:** Ahora sabemos cómo continuar el proyecto sin empezar de cero.

**Idea clave:** Spec → impacto → ticket → pruebas → código → evidencia. El ciclo se repite.

**En vivo · 5 min:**

```text
Cambio acordado: permitir marcar ayer además de hoy. Fechas anteriores o futuras siguen prohibidas. No duplicar marcas y conservar la definición de racha. Actualizá primero la spec y explicá el impacto; proponé T3. Después de revisar ese cambio, implementalo y mostrá evidencia de A5.
```

**Resultado esperado:** Spec v2, ticket del cambio, botón para ayer y evidencia de racha recalculada.

- [Video de referencia · Cambio e iteración](https://www.youtube.com/watch?v=5HaOxAAA5qI&t=6297s)

## 26 · Que compile. Que cumpla. Que se entienda.

La construcción técnica, el comportamiento y la explicación tienen que coincidir. Una especificación también puede necesitar correcciones.

**Explicación:** Cerrá volviendo a los objetivos de apertura. No prometas que SDD hace determinista al modelo o elimina los bugs. Nos da control sobre el acuerdo, las decisiones y las comprobaciones. El costo del proceso debe ser proporcional al proyecto.

**Ejemplo:** Los tests podrían calcular bien la racha, pero la interfaz decir “0 días” por usar otro valor. La validación conecta las dos cosas.

**Pregunta al grupo:** ¿Qué revisarías mañana si una mejora cambia por accidente las rachas?

**Transición:** Los materiales permiten repetir el recorrido desde una carpeta nueva.

**Idea clave:** No te lleves solo una aplicación: llevate una forma de continuarla.

- [Video de referencia · Validación](https://www.youtube.com/watch?v=5HaOxAAA5qI&t=6140s)

## 27 · El método se aprende volviendo a usarlo.

Repetí la demo sin copiar la solución: definí, clarificá, planeá, dividí, implementá y comprobá. El repositorio reúne las skills y los estados de respaldo.

**Explicación:** Mostrá el enlace del repositorio del curso si ya está publicado. Si GitHub todavía no está configurado, la descarga contiene el mismo kit: no presentes el repositorio de Matt como si fuera el del curso. Los enlaces de referencia están separados. El apartado Noticias tiene su propia navegación y no es parte del temario.

**Ejemplo:** La tarea para el alumno: cambiar una sola regla de hábitos, explicar su impacto y mostrar un criterio antes y después.

**Pregunta al grupo:** ¿Qué regla vas a cambiar en tu práctica y cómo sabrás que funciona?

**Transición:** Abrí preguntas. Las noticias de Astra se pueden presentar como una sesión separada, en otro momento.

**Idea clave:** Una idea, tres criterios y un primer ticket: suficiente para empezar a practicar.



# Sesión extra · Noticias de GPT-6 Astra

Este bloque no forma parte del método SDD ni es requisito para hacer la práctica.

## 01 · GPT-6 Astra. Una nueva escala de posibilidades.

Un bloque independiente para conocer capacidades, casos documentados y condiciones de evaluación. No necesitás Astra para seguir la clase de SDD.

**Explicación:** Presentá este bloque como noticias y fijá una duración opcional de 8 a 10 minutos. No lo intercales entre los conceptos del curso. Todas las cifras se revisaron el 10 de septiembre de 2026.

**Ejemplo:** Una demo de construcción de un juego permite mostrar tanto el resultado como el proceso que lo hizo posible.

**Pregunta al grupo:** ¿Qué tipo de tarea les gustaría probar con estas capacidades?

**Transición:** Primero, tres datos concretos de la ficha oficial.

**Idea clave:** Las capacidades dependen del modelo, las herramientas disponibles y el entorno.



## 02 · Más espacio para trabajar.

El contexto es la información disponible para una respuesta. No equivale a memoria permanente ni garantiza que el agente use bien cada detalle.

**Explicación:** Un token es una unidad de texto que procesa el modelo; no lo conviertas en un número fijo de páginas. Los límites citados corresponden a la ficha API de Astra: la experiencia concreta también depende del producto y la cuenta. Evitá convertir la apertura en una comparación comercial.

**Ejemplo:** Un agente puede trabajar con un manual, un informe y un conjunto de archivos. Si esos documentos se contradicen, un contexto más grande no resuelve por sí mismo qué fuente debe prevalecer.

**Pregunta al grupo:** Si pudiera leer todos los archivos, ¿sabría automáticamente qué queremos cambiar?

**Transición:** El entorno también cambia cómo se coordina el trabajo.

**Idea clave:** Un modelo capaz necesita un objetivo claro y una forma de verificarlo.

- [OpenAI · ficha de Astra](https://developers.openai.com/api/docs/models/gpt-6-astra)

## 03 · Trabajar, recibir contexto y continuar.

La guía de Astra describe nuevas formas de coordinar tareas largas. Su disponibilidad concreta depende de la aplicación y de la integración que se esté usando.

**Explicación:** Explicá estas funciones con una situación concreta y evitá atribuir ejecución de herramientas al modelo solo. La aplicación implementa y gestiona permisos, herramientas y continuidad. No hagas promesas de disponibilidad para cuentas que no verificaste.

**Ejemplo:** Mientras una herramienta investiga un archivo, el agente puede resolver otra parte independiente; si el usuario corrige el objetivo, incorpora la indicación.

**Pregunta al grupo:** ¿Qué corrección les gustaría poder dar mientras el agente está trabajando?

**Transición:** Veamos una evaluación que distingue modelo y entorno.

**Idea clave:** Una función documentada en la API no implica que todas las apps la expongan igual.

- [OpenAI · guía de Astra](https://developers.openai.com/api/docs/guides/latest-model)

## 04 · El entorno también cuenta.

Comparación del mismo modelo y nivel de razonamiento. El Provider Adapter conserva estado de razonamiento y usa compaction para conversaciones largas.

**Explicación:** Las barras representan el score publicado por ARC Prize, con escala de 0 a 100. Comparamos max con max. El 99,9% del artículo corresponde a high: mezclarlo con Standard max confundiría el nivel de razonamiento con el efecto del entorno. Es evidencia sobre estas condiciones de evaluación, no una promesa de calidad universal.

**Ejemplo:** Dos alumnos pueden usar el mismo modelo y obtener resultados diferentes si uno tiene pruebas, contexto y un ciclo de corrección, y el otro solo una petición aislada. Es una analogía didáctica, no un resultado medido por este benchmark.

**Pregunta al grupo:** ¿Qué tendríamos que registrar para poder reproducir una demo?

**Transición:** Un caso concreto ayuda a entender cómo se trabaja con esas herramientas.

**Idea clave:** +35,9 puntos porcentuales en esta evaluación. No es una garantía sobre tu aplicación.

- [ARC Prize · resultados y condiciones, 03 sep 2026](https://arcprize.org/blog/astra)

## 05 · Una experiencia se vuelve un ciclo.

El caso de exploración espacial muestra que construir también implica observar lo que falla, medirlo y volver a probar.

**Explicación:** Resumí el caso sin prometer que cualquiera puede repetir su resultado en el mismo tiempo. Separá lo que quiso experimentar la persona de lo que aportaron las herramientas. Las pruebas y la observación humana se complementan.

**Ejemplo:** Un planeta visible que desaparece al acercarse obliga a observar, instrumentar y volver a probar la experiencia.

**Pregunta al grupo:** ¿Una captura bonita demostraría que el planeta es alcanzable?

**Transición:** Cerrá las noticias. El botón Clase SDD vuelve al curso sin mezclar ambos recorridos.

**Idea clave:** Una demo útil explica cómo se detectó y corrigió el problema.

- [OpenAI · Building games with Astra](https://developers.openai.com/blog/how-to-build-games-with-astra)
