# Guía del docente · Spec-Driven Development

Edición 2026-09-10. Clase base: 100 minutos; extensión opcional: 20 minutos.

- El nuevo contexto: 12 minutos.
- Del impulso a la intención: 10 minutos.
- El método SDD: 18 minutos.
- Tu caja de herramientas: 18 minutos.
- Una idea, de punta a punta: 27 minutos.
- Practicar y comprobar: 15 minutos.

## 01 · De una idea a software con intención.

Spec-Driven Development: aprendé a pedir, decidir y comprobar lo que construye un agente. Sin necesitar saber arquitectura.

**Explicación:** Presentá el resultado de la clase: cada alumno podrá transformar una idea en una especificación, entender una propuesta técnica y reconocer si la implementación cumple. Usaremos un único caso, la reserva de tutorías. La sesión base dura 100 minutos; puede extenderse a 120 con práctica adicional.

**Ejemplo:** “Quiero una app de turnos” suena claro hasta que dos personas intentan reservar el mismo horario. El trabajo de dirección empieza al hacer visible esa situación.

**Pregunta al grupo:** ¿Alguna vez la IA les entregó algo que funcionaba, pero no era lo que querían?

**Transición:** Antes del método, separemos qué aporta el modelo y qué aporta el entorno en el que trabaja.

**Idea clave:** La IA produce. Vos decidís qué significa que funcione.



## 02 · Más capacidad. Más criterio.

El contexto es la información disponible para una respuesta. No equivale a memoria permanente ni garantiza que el agente use bien cada detalle.

**Explicación:** Un token es una unidad de texto que procesa el modelo; no lo conviertas en un número fijo de páginas. Los límites citados corresponden a la ficha API de Astra: la experiencia concreta también depende del producto y la cuenta. Evitá convertir la apertura en una comparación comercial.

**Ejemplo:** Podemos dar al agente reglas de reservas y documentos del curso. Si esos documentos se contradicen, un contexto más grande no resuelve por sí mismo qué regla debe prevalecer.

**Pregunta al grupo:** Si pudiera leer todos los archivos, ¿sabría automáticamente qué queremos cambiar?

**Transición:** La capacidad del modelo es solo una de las tres capas del resultado.

**Idea clave:** Un modelo capaz necesita un objetivo claro y una forma de verificarlo.

- [OpenAI · ficha de Astra](https://developers.openai.com/api/docs/models/gpt-6-astra)

## 03 · Un resultado. Tres capas.

Un agente combina un modelo con herramientas y un ciclo de trabajo. SDD le da una dirección explícita a ese ciclo.

**Explicación:** Usá modelo para hablar de la capacidad de razonamiento, entorno para las herramientas y método para nuestra forma de dirigir el trabajo. Tener un modelo potente sin acceso a ejecutar pruebas no equivale a tener un agente que pueda verificar cambios.

**Ejemplo:** La persona pide impedir reservas duplicadas; el modelo propone una solución; el entorno ejecuta una prueba; la spec permite decidir si la prueba representa la necesidad.

**Pregunta al grupo:** ¿Cuál de estas capas falta si el agente solo describe el cambio, pero no puede probarlo?

**Transición:** Veamos una comparación donde el mismo modelo obtiene resultados distintos según el entorno.

**Idea clave:** Para repetir un resultado, entendé el sistema completo.



## 04 · El entorno también cuenta.

Comparación del mismo modelo y nivel de razonamiento. El Provider Adapter conserva estado de razonamiento y usa compaction para conversaciones largas.

**Explicación:** Las barras representan el score publicado por ARC Prize, con escala de 0 a 100. Comparamos max con max. El 99,9% del artículo corresponde a high: mezclarlo con Standard max confundiría el nivel de razonamiento con el efecto del entorno. Es evidencia sobre estas condiciones de evaluación, no una promesa de calidad universal.

**Ejemplo:** Dos alumnos pueden usar el mismo modelo y obtener resultados diferentes si uno tiene pruebas, contexto y un ciclo de corrección, y el otro solo una petición aislada. Es una analogía didáctica, no un resultado medido por este benchmark.

**Pregunta al grupo:** ¿Qué tendríamos que registrar para poder reproducir una demo?

**Transición:** La siguiente experiencia muestra cómo traducir una intención en un ciclo de observación y mejora.

**Idea clave:** +35,9 puntos porcentuales en esta evaluación. No es una garantía sobre tu aplicación.

- [ARC Prize · resultados y condiciones, 03 sep 2026](https://arcprize.org/blog/astra)

## 05 · Una experiencia se vuelve un ciclo.

El caso de exploración espacial muestra que construir también implica observar lo que falla, medirlo y volver a probar.

**Explicación:** Resumí el caso sin prometer que cualquiera puede repetir su resultado en el mismo tiempo. Separá lo que quiso experimentar la persona de lo que aportaron las herramientas. Las pruebas y la observación humana se complementan.

**Ejemplo:** En nuestra app, una reserva que aparece y desaparece al recargar sería la misma clase de contradicción entre lo que la interfaz promete y lo que el sistema conserva.

**Pregunta al grupo:** ¿Una captura bonita demostraría que el planeta es alcanzable o que una reserva persiste?

**Transición:** Ahora traslademos esa necesidad de evidencia a proyectos cotidianos.

**Idea clave:** Una demo útil explica cómo se detectó y corrigió el problema.

- [OpenAI · Building games with Astra](https://developers.openai.com/blog/how-to-build-games-with-astra)

## 06 · Rápido hacia qué, exactamente.

La velocidad ayuda cuando la dirección es clara. Si faltan decisiones, el agente las completa con supuestos que pueden parecer requisitos.

**Explicación:** No sostengas que programar dejó de ser difícil. El punto es que producir más rápido aumenta el valor de aclarar las decisiones que afectan al usuario. Algunas incógnitas se resuelven con una conversación; otras necesitan investigar o prototipar.

**Ejemplo:** Si omitimos la simultaneidad, una demo con un solo alumno parece perfecta. El problema recién aparece cuando se usa de verdad.

**Pregunta al grupo:** ¿Qué decisión está tomando el agente por ustedes cuando dicen “que sea fácil de usar”?

**Transición:** Eso no vuelve incorrecta toda exploración informal. Importa el costo del error.

**Idea clave:** El costo aparece cuando descubrimos tarde que construimos sobre supuestos.



## 07 · Elegí el rigor según el riesgo.

El costo del error crece hacia arriba. La vida útil crece hacia la derecha. Un proyecto breve también puede requerir controles fuertes.

**Explicación:** Leé los ejes antes de los cuadrantes. Es una guía de discusión, no una taxonomía rígida. Vibe coding aquí nombra una práctica exploratoria sin conservar necesariamente una definición verificable; usar IA para programar no implica trabajar así.

**Ejemplo:** Un mockup descartable y un script que borra datos pueden llevar una hora cada uno. Su necesidad de rigor es muy distinta.

**Pregunta al grupo:** ¿Dónde pondrían una página personal? ¿Y una importación única de las notas de alumnos?

**Transición:** La inversión en documentación también se puede graduar.

**Idea clave:** La duración no decide sola: mirá consecuencias, colaboración y reversibilidad.



## 08 · La precisión no se mide en páginas.

Empezá por el artefacto más pequeño que permita entender y verificar el trabajo. Ampliá cuando aumenten las decisiones o las consecuencias.

**Explicación:** Evitá asociar un número fijo de días con una metodología. Un brief puede alcanzar para una mejora pequeña de un producto importante si sus reglas existentes están claras. Una spec extensa también puede contener ambigüedad.

**Ejemplo:** “Mejorar reservas” es corto pero inútil. “Impedir una segunda reserva activa del mismo turno y mostrar el motivo” es corto y comprobable.

**Pregunta al grupo:** ¿Qué información necesitaría alguien que retoma su proyecto dentro de un mes?

**Transición:** Ese contexto durable es la base del ciclo de trabajo que vamos a practicar.

**Idea clave:** Escribí lo suficiente para que otra persona no tenga que adivinar.



## 09 · El ciclo sigue. Los actores cambian.

Entender, diseñar, construir y comprobar siguen siendo necesarios. Un agente puede participar en cada paso si cuenta con contexto y criterios.

**Explicación:** SDD no inventa todos estos pasos ni exige resolver todo por adelantado. Su contribución en esta clase es conectar los pasos mediante documentos legibles por humanos y agentes. Volver atrás por aprendizaje es normal.

**Ejemplo:** Una prueba de simultaneidad puede revelar que el plan técnico necesita cambiar. La regla de un cupo sigue siendo la misma.

**Pregunta al grupo:** ¿Qué diferencia hay entre cambiar una necesidad y cambiar la solución que la satisface?

**Transición:** Vamos a colocar la especificación en el centro de ese ciclo.

**Idea clave:** No es una cascada irreversible: la evidencia puede hacernos volver.



## 10 · La intención tiene dónde vivir.

SDD usa una especificación explícita para orientar decisiones, implementación y validación. La spec hace que lo acordado sobreviva a la conversación.

**Explicación:** La spec no se ejecuta necesariamente como un programa. Se vuelve operativa cuando dirige un plan y sus criterios se relacionan con pruebas y observaciones. Evitá prometer que escribir un documento garantiza la calidad.

**Ejemplo:** La regla “cada turno admite una reserva activa” vive en la spec. El plan decide cómo hacerla cumplir. La prueba muestra qué pasa con dos solicitudes juntas.

**Pregunta al grupo:** ¿Cómo sabemos que una spec está siendo utilizada y no solo archivada?

**Transición:** La relación entre spec y código también cambia entre enfoques.

**Idea clave:** Un cambio relevante vuelve al contrato y recorre el ciclo otra vez.



## 11 · ¿Qué pasa después de construir?

Usamos esta distinción como vocabulario del curso. No son certificaciones ni un estándar universal de madurez.

**Explicación:** Estos términos describen relaciones posibles con la especificación. No presentes spec-as-source como una garantía de regenerar cualquier aplicación sin intervención. En anchored sigue haciendo falta criterio humano para detectar contradicciones.

**Ejemplo:** Si cambiamos las cancelaciones en código y dejamos la regla anterior en la spec, ya no tenemos una referencia confiable para el próximo agente.

**Pregunta al grupo:** ¿Qué documento o evidencia consultarían si el código y la spec dicen cosas distintas?

**Transición:** El siguiente esquema muestra cómo volver a alinearlos.

**Idea clave:** En esta clase practicamos spec-anchored: mantener intención y comportamiento alineados.



## 12 · Intención y conducta. Siempre en diálogo.

La spec explica lo que debería ocurrir; el código produce lo que ocurre; las pruebas y la observación comparan ambos.

**Explicación:** Para cambios de producto deliberados, actualizamos primero el acuerdo. Para corregir un bug, la spec puede ya describir lo correcto y no necesita reescribirse. Un incidente urgente puede requerir actuar primero y reconciliar documentos después; no enseñes una secuencia ritual que impida resolver problemas.

**Ejemplo:** Si la spec ya prohíbe duplicados y aparecen dos reservas, corregimos el defecto. Si ahora queremos dos cupos por turno, cambió la necesidad.

**Pregunta al grupo:** ¿Permitir cancelaciones tardías es un bugfix o una decisión de producto?

**Transición:** Veamos qué necesita contener una buena especificación.

**Idea clave:** Ante una diferencia, identificá si cambió la intención o si apareció un defecto.



## 13 · Describí conducta. Hacé visibles los límites.

Una buena spec permite discutir el producto antes de elegir tablas, librerías o archivos.

**Explicación:** Leé cada sección como una respuesta a una pregunta distinta. El criterio A2 agrega una situación que una pantalla estática no puede demostrar. No inventes reglas adicionales como si el usuario ya las hubiera aceptado: en esta demo son decisiones explícitas del ejercicio.

**Ejemplo:** “Que funcione bien” no indica cómo revisar. “La reserva persiste al recargar” permite una demostración concreta.

**Pregunta al grupo:** ¿Qué agregarían para impedir que un alumno cancele la reserva de otra persona?

**Transición:** No todo lo que necesitamos construir pertenece a este documento.

**Idea clave:** Los criterios describen resultados observables, no intenciones vagas.



## 14 · La spec dice qué. El plan propone cómo.

Un requisito técnico real puede ser una restricción de la spec. Las soluciones elegidas por conveniencia deben quedar identificadas como decisiones del plan.

**Explicación:** No pidas al alumno elegir una base de datos como requisito de entrada. Preguntá primero por persistencia, usuarios y simultaneidad. Si ya tiene un sistema o una restricción institucional, sí hay que respetarla y explicitarla.

**Ejemplo:** La regla “no confirmar dos reservas” es de producto. Cumplirla con una transacción y una restricción de unicidad es una decisión técnica que el agente debe explicar.

**Pregunta al grupo:** ¿“Los datos deben permanecer en nuestra infraestructura” sería una preferencia técnica o una restricción real?

**Transición:** Las skills nos ayudan a repetir esta separación sin recordar todo el procedimiento.

**Idea clave:** Podemos cambiar de tecnología sin cambiar el problema que resolvemos.



## 15 · Del diálogo a una entrega.

Una skill es una instrucción reutilizable para el agente. El paquete del curso conserva los nombres originales y agrega no-tecnico para adaptar la conversación.

**Explicación:** Las skills no son software mágico ni conceden herramientas o permisos que no existían. El alumno invoca el objetivo de la fase. to-spec organiza decisiones previas: no sustituye una conversación pendiente. La sintaxis de invocación depende del agente.

**Ejemplo:** “Usá no-tecnico junto con grill-with-docs. Quiero que mis alumnos reserven tutorías. Hablame de uso y recomendá la parte técnica”.

**Pregunta al grupo:** ¿Qué paso se saltea alguien que genera una spec antes de resolver qué significa “cancelar”?

**Transición:** Debajo del camino visible hay prácticas que sostienen la calidad.

**Idea clave:** Usá no-tecnico junto a grill-with-docs si querés que el agente traduzca y recomiende.

- [Matt Pocock · repositorio original](https://github.com/mattpocock/skills)
- [OpenAI · skills](https://learn.chatgpt.com/docs/build-skills)

## 16 · El rigor tiene herramientas concretas.

No hace falta memorizar nueve comandos. Sí conviene entender qué práctica aporta cada skill y cuándo ayuda.

**Explicación:** Explicá TDD como prueba, implementación y mejora, sin exigir al alumno saber cómo configurar un runner. El agente se ocupa de lo técnico. Las skills originales pueden utilizar agentes auxiliares si el entorno lo permite; si no, la revisión puede ser secuencial.

**Ejemplo:** Si en una conversación turno significa horario y en otra significa reserva, el modelo de dominio impide que esa ambigüedad se propague al sistema.

**Pregunta al grupo:** ¿Qué problema resolvería una definición precisa de “disponible”?

**Transición:** Ahora agregamos la adaptación que evita convertir la entrevista en un examen técnico.

**Idea clave:** Las herramientas apoyan el criterio; no reemplazan leer el resultado.



## 17 · Vos conocés la necesidad. El agente propone la técnica.

No necesitás saber arquitectura para especificar un producto. La conversación debe empezar por lo que las personas necesitan hacer.

**Explicación:** No-tecnico es una instrucción transversal, no un framework ni un sustituto de la spec. Si otra skill pide elegir entre SQL y NoSQL, el agente traduce esa decisión a una necesidad de datos y propone la opción mejor justificada. El usuario conserva el control sobre necesidades, costos y compromisos.

**Ejemplo:** En lugar de “¿Postgres o MongoDB?”, preguntar “¿varias personas pueden intentar reservar el mismo cupo y la información debe seguir al cerrar la página?”. Luego explicar la recomendación.

**Pregunta al grupo:** ¿Qué quieren que el sistema haga sin tener que decidir cómo se programa?

**Transición:** Veamos una ronda concreta con la clase de preguntas que sí ayudan.

**Idea clave:** La skill acompaña el grilling: no cambia tu idea ni oculta decisiones detrás de jerga.



## 18 · Preguntar sin examinar al alumno.

El agente agrupa preguntas comprensibles, reutiliza respuestas y ofrece una recomendación cuando todavía no sabés qué conviene.

**Explicación:** Mantené una ronda de hasta tres preguntas sobre las incógnitas que bloquean el siguiente paso. No preguntes todo un cuestionario antes de escuchar. “No sé” habilita una recomendación razonada, no un interrogatorio técnico. Distinguí supuestos provisionales de decisiones acordadas.

**Ejemplo:** Si el alumno no conoce el volumen, proponé diseñar para el grupo inicial e identificar qué habría que revisar al crecer. No inventes diez mil usuarios para justificar complejidad.

**Pregunta al grupo:** ¿Qué pregunta de estas cambiaría más su primera versión?

**Transición:** Con necesidades claras ya podemos explicar una arquitectura concreta.

**Idea clave:** Una recomendación es una propuesta; una respuesta del alumno es una decisión.



## 19 · Tres piezas. Una reserva segura.

Para una web de tutorías compartida, una aplicación con servidor y una base relacional es una opción razonable. Primero se revisa el proyecto existente.

**Explicación:** Arquitectura es cómo se reparten responsabilidades; framework es una base de trabajo para construir; base de datos es almacenamiento consultable. El navegador no puede ser el único guardián de un cupo. Una aplicación integrada evita separar servicios sin necesidad. Verificá compatibilidad y costos actuales antes de implementar o contratar.

**Ejemplo:** Al tocar Reservar, la pantalla pide al servidor una operación; este comprueba quién sos y guarda una reserva válida en una transacción; la pantalla muestra el resultado. El servidor verifica siempre, aunque el botón parezca habilitado.

**Pregunta al grupo:** Si alguien modifica el botón en su navegador, ¿qué pieza sigue protegiendo el último cupo?

**Transición:** Una propuesta entendible también debe mostrar los compromisos de elegirla.

**Idea clave:** Ejemplo: Next.js + PostgreSQL. Es una propuesta para este caso, no una receta universal.

- [Next.js · documentación](https://nextjs.org/docs)
- [PostgreSQL · transacciones](https://www.postgresql.org/docs/current/tutorial-transactions.html)

## 20 · Recomendación, explicación y límite.

El agente recomienda una opción principal, muestra una alternativa relevante y explica qué necesidad haría cambiar de decisión.

**Explicación:** No-tecnico debe explicar también qué no hace falta: microservicios, una app nativa o IA dentro del producto no se justifican solo porque se pueda construirlos. El costo incluye uso, mantenimiento, copias de seguridad y dependencia del proveedor. Los precios se verifican antes de decidir.

**Ejemplo:** Si solo queremos coordinar tutorías estándar, adaptar una herramienta existente puede ser más sencillo. Si necesitamos reglas propias y evidencia para practicar SDD, construir una app pequeña cumple el objetivo educativo.

**Pregunta al grupo:** ¿Qué tendría que cambiar en la necesidad para justificar otra solución?

**Transición:** Pasemos de decisiones a un incremento que se pueda mostrar.

**Idea clave:** Elegí por necesidades, mantenimiento y costo total; no por popularidad.



## 21 · Un comportamiento completo primero.

Un ticket vertical atraviesa las capas necesarias para entregar un resultado. No requiere construir toda una capa antes de ver valor.

**Explicación:** Un ticket puede atravesar muchas capas y seguir siendo pequeño si resuelve una sola conducta. Incluí dependencias y cómo verificarlo. Si infraestructura mínima es necesaria, hacela explícita y conectala con el primer comportamiento.

**Ejemplo:** Primero reservar, después evitar conflictos más complejos y luego cancelar. Cada ticket conserva criterios identificables; no se posponen todos los tests hasta el final.

**Pregunta al grupo:** ¿Qué podría demostrar el alumno al terminar un ticket llamado “crear todas las tablas”?

**Transición:** Empezamos la demo con el pedido que todavía necesita decisiones.

**Idea clave:** “Reservar un turno” muestra valor antes que “hacer todo el frontend”.



## 22 · “Quiero que reserven sin escribirme.”

La petición describe un problema real. La conversación lo convierte en reglas que el docente puede revisar y el agente puede construir.

**Explicación:** Mostrá el prompt inicial y usá no-tecnico con grill-with-docs. Marcá el paso de conversación a decisiones sin fingir que las reglas surgieron automáticamente de la petición. La precisión del límite de dos horas evita una discusión posterior sobre “antes de”.

**Ejemplo:** Fijá la hora del servidor para verificar el límite. Guardar fechas con referencia temporal y presentarlas en la zona correcta es parte del plan, no algo que el alumno necesite programar.

**Pregunta al grupo:** ¿Quién puede cambiar un horario que ya tiene una reserva? Dejalo fuera del incremento inicial si no se resolvió.

**Transición:** Ahora relacionamos cada decisión con su criterio y su evidencia.

**Idea clave:** Estas son decisiones del ejercicio; en un proyecto real se acuerdan con su responsable.



## 23 · Del acuerdo a la evidencia.

Los identificadores conectan la regla, el trabajo y la comprobación. Sirven para encontrar qué revisar cuando el producto cambia.

**Explicación:** No hace falta burocracia: R1, A2 y T2 son enlaces que ahorran búsquedas. Mostrá la diferencia entre escribir “pruebas OK” y adjuntar un resultado con escenario, entorno y fecha. El paquete contiene artefactos de ejemplo; no demuestra una app de reservas ya implementada.

**Ejemplo:** Al aumentar el cupo a dos, buscamos R1 y encontramos A2 y T2 para actualizar su significado y sus pruebas.

**Pregunta al grupo:** ¿Qué evidencia faltaría si solo vemos que el botón cambia a verde?

**Transición:** Los bordes de una regla merecen una comprobación propia.

**Idea clave:** Un test aprobado sirve cuando comprueba el criterio que realmente acordamos.



## 24 · El límite exacto también es producto.

Para una tutoría a las 18:00, la regla v1 permite cancelar si faltan al menos dos horas. La hora válida se evalúa en el servidor.

**Explicación:** Usá una hora controlada para que las pruebas no dependan del reloj real. Definí los intervalos superpuestos como inicio incluido y fin excluido para que dos tutorías consecutivas no choquen. El agente debe explicar esas convenciones mediante ejemplos cotidianos.

**Ejemplo:** Un turno de 18:00 a 18:30 y otro de 18:30 a 19:00 son consecutivos. Un turno de 18:15 a 18:45 se superpone con ambos.

**Pregunta al grupo:** ¿Qué debería pasar si la persona toca Cancelar dos veces o pierde conexión después de confirmar?

**Transición:** Ahora cambiemos deliberadamente una regla y veamos el efecto.

**Idea clave:** También hay que verificar permisos, doble clic, recarga y fallos de conexión.



## 25 · Cambió la regla. Seguimos el impacto.

El docente quiere permitir cancelaciones tardías antes del inicio y marcarlas para seguimiento. Actualizamos el acuerdo y sus criterios antes de construir el cambio.

**Explicación:** Explicá el cambio con tres intervalos: al menos dos horas, normal; entre cero y menos de dos horas, tardía; al inicio o después, bloqueada. El registro no se borra. La regla v2 agrega una marca, pero no inventa sanciones o mensajes automáticos.

**Ejemplo:** A las 16:01 para las 18:00, antes bloqueábamos. Ahora se cancela, el turno se libera y el docente puede distinguir que fue tardía. Una prueba anterior debe cambiar porque cambió la intención.

**Pregunta al grupo:** ¿Qué criterio deja de ser correcto aunque antes su prueba estuviera en verde?

**Transición:** Terminamos comparando el resultado contra la versión correcta del contrato.

**Idea clave:** Spec → impacto en tickets y plan → pruebas → código → evidencia actualizada.



## 26 · Funciona. ¿Cumple lo acordado?

La calidad técnica y la aceptación del producto responden preguntas diferentes. Necesitamos ambas y debemos señalar lo que todavía no se probó.

**Explicación:** No basta con la frase “todos los tests pasan”. Los tests pueden representar una regla vieja. Revisá también lectura, estados vacíos, errores, navegación con teclado y funcionamiento en móvil cuando corresponda al producto.

**Ejemplo:** La prueba técnica podría guardar cancelacion_tardia correctamente mientras la pantalla muestra “reserva activa”. La aceptación detecta esa incoherencia.

**Pregunta al grupo:** ¿Qué necesitarían ver para confiar en que una reserva no se pierde?

**Transición:** Identifiquemos los hábitos que suelen romper este método.

**Idea clave:** La persona valida la experiencia; el agente aporta evidencia, no solo confianza.



## 27 · El método también necesita criterio.

La especificación puede estar equivocada o desactualizada. La disciplina consiste en hacer visibles esas diferencias y resolverlas.

**Explicación:** Invitá a corregir la spec cuando el grupo descubra una mejor regla. No defiendas un documento por haberlo escrito con mucho esfuerzo. Tampoco vuelvas cualquier cambio mínimo un proyecto documental completo.

**Ejemplo:** Si nadie puede explicar por qué hay microservicios en una app de veinte alumnos, falta una razón que los conecte con una necesidad real.

**Pregunta al grupo:** ¿Cuál de estos errores les parece más fácil cometer al trabajar rápido con IA?

**Transición:** La práctica final sirve para comprobar si pueden aplicar el ciclo sin repetir definiciones.

**Idea clave:** Una buena spec hace el desacuerdo discutible; no elimina la necesidad de pensar.



## 28 · Tu turno: especificá antes de pedir.

Elegí un problema pequeño y usá no-tecnico para convertirlo en un comportamiento verificable. No necesitás empezar por una tecnología.

**Explicación:** La clase base reserva diez minutos para esta práctica y cinco para revisión y cierre. Para una sesión de 120 minutos, agregá veinte de implementación. Si el grupo necesita más ayuda, usá el caso común de tutorías y variá una sola regla.

**Ejemplo:** Entrega mínima: usuario y problema, tres criterios observables, una exclusión, una propuesta técnica con motivo y el primer ticket. No se evalúa recordar nombres de frameworks.

**Pregunta al grupo:** ¿Puede otra persona revisar tus tres criterios sin preguntarte qué querías decir?

**Transición:** Dejamos los materiales preparados para continuar después de la clase.

**Idea clave:** Extensión de 20 minutos: construir el ticket y mostrar evidencia contra un criterio.



## 29 · Llevate el método. Y los archivos.

El kit reúne las nueve skills del flujo, no-tecnico, una guía de inicio y un caso completo de especificación y cambio. Las skills originales conservan versión y licencia.

**Explicación:** Descargá el kit desde el botón Materiales. Las skills se incluyen como archivos legibles, no como un instalador opaco. La guía explica cómo copiarlas sin pisar skills existentes. No prometas que una sintaxis con barra es idéntica en todos los agentes.

**Ejemplo:** En Codex se puede invocar $no-tecnico; en un agente con comandos de skills puede aparecer /no-tecnico. Si no hay descubrimiento automático, pedí leer el SKILL.md por su ruta.

**Pregunta al grupo:** ¿Qué archivo revisarías primero al retomar tu idea mañana?

**Transición:** Cerramos con la responsabilidad que permanece aunque el agente construya cada vez más.

**Idea clave:** El ejemplo contiene documentos de trabajo; la aplicación se construye durante la práctica.

- [Skills originales · Matt Pocock](https://github.com/mattpocock/skills)
- [Skills en Codex](https://learn.chatgpt.com/docs/build-skills)
- [Clase de referencia · MoureDev](https://www.youtube.com/live/5HaOxAAA5qI)

## 30 · El modelo es motor. La spec, contrato. El criterio es tuyo.

No necesitás conocer cada detalle técnico. Sí entender el problema, las decisiones que aceptás y la evidencia de que se construyó lo acordado.

**Explicación:** Recuperá la pregunta inicial y pedí que cada alumno nombre una decisión que antes habría delegado sin entender. El objetivo no es volverlos arquitectos en una clase: es que puedan conversar, revisar y aprender mientras construyen.

**Ejemplo:** “No sé programar una transacción, pero entiendo por qué dos alumnos no pueden recibir el mismo cupo y sé qué evidencia pedir”. Ese es un resultado válido de esta clase.

**Pregunta al grupo:** ¿Cuál es la primera regla que vas a aclarar en tu próximo proyecto?

**Transición:** Entregá el kit y dejá una invitación concreta: traer una spec pequeña con tres criterios comprobables.

**Idea clave:** Construir con IA también es aprender a hacer mejores preguntas.


