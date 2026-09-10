# Apuntes compartidos · SpecDriven

Lectura complementaria de la presentación. Clase: 100 minutos, con 35 de práctica. Noticias: sesión independiente de 10–12 minutos.

- El punto de partida: 10 minutos
- Entender SDD: 12 minutos
- Markdown y spec: 20 minutos
- Skills de la clase: 18 minutos
- Demo en vivo: 35 minutos
- Cerrar y continuar: 5 minutos

## 1 · De vibe coding a software con intención.

Concepto

De una idea a una aplicación que podamos explicar y comprobar. Primero el método y sus documentos; después las skills; finalmente una demo en vivo.

En esta clase vamos a aprender a conservar las decisiones de un proyecto y a usarlas para guiar a un agente. Primero entendemos el método, después escribimos documentos en Markdown y conocemos las skills. Al final construimos una aplicación pequeña para gestionar hábitos.

El resultado esperado es poder explicar qué debe hacer la aplicación, qué construyó el agente y cómo comprobamos que coincide.

**Para recordar:** Podemos construir con IA sin delegar la decisión de qué queremos conseguir.



## 2 · La IA escribe. Vos dirigís el trabajo.

Concepto

Tu aporte es explicar el problema, revisar las decisiones y comprobar resultados. No necesitás elegir una base de datos antes de saber qué querés guardar.

La persona conoce el problema y decide qué resultado necesita. El agente aporta capacidad para investigar, proponer una solución y construirla. La revisión conjunta permite detectar si una propuesta técnicamente correcta resuelve una necesidad diferente de la que teníamos.

Un resultado puede verse bien y aun así faltar una regla importante. Por eso conservamos tanto la intención como una forma de comprobarla.

**Para recordar:** Comprender una decisión no es lo mismo que saber programarla.



## 3 · Explorar está bien. Perder el acuerdo, no.

Concepto

Vibe coding describe aquí una forma de avanzar por conversación, prueba y corrección, sin conservar necesariamente una definición verificable de lo que se quería construir.

Vibe coding suele describir una forma de explorar mediante instrucciones, resultados y ajustes rápidos, sin comprender o mantener necesariamente todos los detalles del código. Es útil para descubrir posibilidades. Cuando el producto debe continuar, necesitamos conservar acuerdos y comprobar el comportamiento.

Explorar una idea visual durante una tarde no exige el mismo nivel de documentación que mantener una herramienta que otras personas usarán cada semana.

**Para recordar:** Usar IA para programar no significa necesariamente hacer vibe coding.



## 4 · El rigor se elige. No se acumula.

Concepto

El costo del error crece hacia arriba. La vida útil crece hacia la derecha. Un proyecto breve también puede requerir controles fuertes.

Esta matriz es orientativa. El eje vertical representa las consecuencias de un error; el horizontal, cuánto tiempo esperamos mantener el proyecto. La necesidad de rigor aumenta por el impacto, no solo por el tamaño de la aplicación.

Un cambio pequeño que modifica datos importantes puede necesitar más comprobaciones que una web visual mucho más grande. El nivel de documentación debe ayudar a decidir y verificar, no convertirse en una carga.

**Para recordar:** La duración no decide sola: mirá consecuencias, colaboración y reversibilidad.



## 5 · El ciclo de siempre. Con un agente al lado.

Concepto

SDD conserva las preguntas del desarrollo de software. Los documentos hacen que humanos y agentes puedan trabajar con el mismo acuerdo.

Las preguntas del desarrollo siguen existiendo cuando trabaja un agente: qué problema resolvemos, qué comportamiento hace falta, cómo lo construiremos, qué entregaremos primero y cómo se comprueba. SDD conecta esas respuestas mediante documentos que pueden consultarse durante el trabajo.

La decisión de producto describe un resultado. La decisión técnica explica cómo lograrlo. Un ticket delimita qué parte se construye ahora.

**Para recordar:** El agente acelera la ejecución. Las preguntas siguen siendo necesarias.

- [GitHub · Spec-Driven Development](https://github.github.com/spec-kit/)

## 6 · Una referencia para todo el ciclo.

Concepto

La especificación expresa qué queremos construir y por qué. Sirve para discutir, planear y verificar, incluso cuando la conversación ya terminó.

Una especificación es el acuerdo de comportamiento de una versión. Permite que la conversación se retome sin reconstruir todo lo decidido y que la implementación se evalúe con una referencia compartida. Se puede aclarar antes y después de escribirla; no es una secuencia rígida.

Si aparece una contradicción, volvemos al acuerdo y resolvemos su impacto. La spec no garantiza que nadie se equivoque: hace visible qué significa cumplir.

**Para recordar:** La spec no garantiza acierto: permite detectar y discutir diferencias.

- [GitHub · Spec-Driven Development](https://github.github.com/spec-kit/)

## 7 · Tres destinos para una especificación.

Concepto

Usamos esta distinción como vocabulario del curso. No son certificaciones ni un estándar universal de madurez.

Spec-first usa una especificación como punto de partida. Spec-anchored la mantiene como referencia durante la evolución. Spec-as-source coloca la especificación en el centro de la generación del sistema. Son formas distintas de relacionar documentos y código; no una obligación de alcanzar siempre el nivel más automatizado.

En esta clase practicamos conservar una spec y actualizarla cuando cambia una regla. Es suficiente para observar por qué el acuerdo sigue siendo útil después de generar código.

**Para recordar:** En esta clase practicamos spec-anchored: mantener intención y comportamiento alineados.



## 8 · Markdown. Texto con estructura.

Concepto

Es un archivo de texto, normalmente .md, que usa símbolos sencillos para organizar títulos, listas, enlaces y fragmentos de código. Podemos leerlo y editarlo sin una herramienta especial.

Markdown aporta estructura, no inteligencia al documento. Los encabezados permiten localizar secciones; las listas separan reglas; los enlaces conectan archivos. El mismo texto puede verse como fuente o como documento formateado. Algunas plataformas agregan extensiones, por ejemplo tablas y listas de tareas.

Un # introduce el título principal; ##, una sección. Los guiones forman listas. Una casilla escrita con [ ] registra una tarea pendiente, pero no demuestra que la tarea se haya probado.

**Para recordar:** Markdown es el formato. La claridad depende de cómo escribimos y organizamos la información.

- [GitHub Docs · Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

## 9 · Dale a cada archivo una responsabilidad.

Concepto

Una estructura pequeña ayuda al agente a encontrar el acuerdo vigente. Los archivos se crean cuando aportan información; no para completar carpetas vacías.

La carpeta specs/<proyecto>/ reúne los documentos de una iniciativa. AGENTS.md permanece en la raíz porque sus reglas afectan al trabajo del agente. Una sola spec se considera vigente; las versiones anteriores se conservan con Git o como snapshots claramente identificados.

Podemos pedir: “Leé AGENTS.md y specs/mi-app/spec.md. Para la decisión técnica, consultá plan.md”. Los enlaces relativos evitan repetir la misma regla en muchos lugares.

**Para recordar:** Una fuente vigente por decisión; enlaces entre documentos en lugar de copias contradictorias.

- [GitHub Docs · Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

## 10 · Reglas estables. Un punto de partida claro.

Concepto

AGENTS.md indica cómo trabajar en este proyecto. La constitución reúne principios que deberían respetar todas sus funcionalidades. Pueden ser secciones de un documento pequeño.

AGENTS.md conserva reglas de trabajo: lenguaje de comunicación, estructura del proyecto, comandos de verificación y límites acordados. La spec conserva reglas del producto. Separarlos evita que una decisión de una funcionalidad se convierta por accidente en una regla global del agente.

“Explicar las decisiones en español” pertenece a AGENTS.md. “Qué debe ocurrir cuando el usuario completa una acción” pertenece a la spec de ese producto.

**Para recordar:** Las reglas estables viven aparte de los detalles de una funcionalidad.

- [OpenAI · Agent skills](https://developers.openai.com/codex/skills/)

## 11 · Una spec real cabe en un acuerdo claro.

Concepto

No hay una única plantilla universal. En esta clase usamos una estructura Markdown que separa propósito, comportamiento, criterios y dudas. El plan técnico vive aparte.

La plantilla ordena preguntas que debemos resolver. El propósito identifica a la persona y su necesidad; el alcance limita la versión; las reglas explican cómo se comporta; los criterios permiten observar el cumplimiento. Un requisito tecnológico solo va en la spec si es una restricción real del proyecto.

Una spec útil puede ser corta. Se amplía cuando existen decisiones que necesitan contexto, ejemplos o límites. La cantidad de páginas no demuestra su calidad.

**Para recordar:** Escribimos lo suficiente para que otra persona pueda construir y comprobar el mismo resultado.

- [GitHub · Spec-Driven Development](https://github.github.com/spec-kit/)

## 12 · Escribir una regla que se pueda comprobar.

Concepto

Estos pares son ejemplos de redacción de requisitos. Nos muestran cómo quitar ambigüedad; todavía no son requisitos de la aplicación de la demo.

Una regla describe una conducta por vez. Conviene distinguir el recorrido normal, las entradas inválidas y los límites. Un criterio de aceptación aplica la regla a un caso concreto: estado inicial, acción y resultado observable. Los identificadores R1 y A1 permiten relacionar reglas y criterios con los tickets.

“Aparece un caso no deseado” es demasiado abstracto. Podemos nombrar exactamente la situación: un campo está vacío, un nombre se repite o no se puede guardar. Después escribimos qué ve la persona y qué datos deben conservarse.

**Para recordar:** Nombrá el caso concreto, la respuesta esperada y cómo se conserva la información.



## 13 · Ejemplo de la clase: una aplicación de hábitos.

Ejemplo: aplicación de hábitos

A partir de acá usaremos un mismo producto para ilustrar los documentos: una web donde una persona registra actividades de estudio y cuándo las realizó.

Estamos diseñando una aplicación, no construyendo un hábito personal. El hábito es un dato que creamos dentro de ella. Un registro de cumplimiento une ese hábito con un día: por ejemplo, “Leer 20 minutos se realizó el 10 de septiembre”. En el código de respaldo ese registro también se llama marca.

Crear “Leer 20 minutos” no significa que ya lo leímos hoy. Primero existe la actividad; después registramos su cumplimiento. Por eso son dos acciones distintas de la aplicación.

**Para recordar:** Producto: aplicación de hábitos. Dato: actividad. Cumplimiento: actividad realizada en un día concreto.



## 14 · Del producto a su primera spec.

Ejemplo: aplicación de hábitos

Este fragmento aplica la plantilla al ejemplo de hábitos. Las reglas explican el comportamiento; los criterios muestran cómo comprobarlo.

La especificación del ejemplo establece una primera versión pequeña: una persona, un navegador, creación de actividades y registro de su cumplimiento. El nombre debe distinguir una actividad de otra. Registrar dos veces el mismo día no significa realizar dos hábitos distintos: es un intento repetido sobre el mismo registro.

Si ya existe “Leer”, escribir “ leer ” o “LEER” no debe crear actividades nuevas. Si “Leer” ya figura como realizado el 10 de septiembre, volver a pulsar “Marcar hoy” muestra un aviso y conserva un solo cumplimiento.

**Para recordar:** El ejemplo muestra qué significa la plantilla cuando describe un producto concreto.



## 15 · Una skill es una instrucción reutilizable.

Concepto

Es una carpeta con un SKILL.md que explica al agente cómo realizar una tarea. Puede incluir recursos de apoyo. No es un modelo diferente ni una aplicación que se ejecuta sola.

Una skill evita repetir una forma de trabajar en cada conversación. Su descripción ayuda a decidir cuándo usarla y su contenido guía el trabajo. Sigue siendo necesario darle un objetivo y revisar el resultado. Instalar una skill solo la hace disponible; no significa que ya ejecutamos su tarea.

“Usá to-spec con nuestras decisiones” combina tres piezas: la skill elegida, el contexto y el resultado esperado. Pedir solo “usá todas las skills” no define un trabajo claro.

**Para recordar:** Skill + contexto + objetivo concreto = una instrucción que el agente puede aplicar.

- [OpenAI · Agent skills](https://developers.openai.com/codex/skills/)

## 16 · Un prompt. Nuestro kit preparado.

Concepto

Copiamos el prompt del repositorio. El agente descarga el kit, instala las skills en el proyecto y deja reglas y plantillas listas. No necesitamos configurar el paquete original de Matt Pocock.

El prompt de preparación puede usarse antes de que exista una skill instalada: le pide al agente leer las instrucciones desde el repositorio descargado. En Codex las skills se copian a .agents/skills; en Claude Code, a .claude/skills. La instalación conserva archivos existentes y no construye la app.

Después de preparar el proyecto, la primera petición de producto puede ser: “Usá no-tecnico y grill-with-docs para ayudarme a definir mi idea”. La arquitectura se recomienda a partir de esa necesidad, no durante la descarga del kit.

**Para recordar:** Instalación primero; decisiones del producto después.



## 17 · Las skills del recorrido.

Concepto

Cada skill tiene un trabajo definido. Abrí una para leer qué recibe, qué produce y sus instrucciones completas.

El recorrido principal empieza con una entrevista que conserva decisiones, continúa con una spec, un plan y tickets, y termina en implementación y revisión. No hace falta invocar todas las skills a la vez: usamos la que corresponde al resultado que necesitamos ahora.

Si todavía hay dudas sobre cómo funciona el producto, seguimos con grill-with-docs. Si los acuerdos ya están claros, to-spec los transforma en un documento verificable.

**Para recordar:** Elegimos la skill por el resultado que necesitamos producir.



## 18 · Preparación y acompañamiento.

Concepto

setup-franco-skills prepara el kit. no-tecnico adapta la conversación. grilling conduce la entrevista y grill-me es una entrada breve a esa misma tarea.

grill-with-docs usa grilling para preguntar y agrega la conservación de decisiones. grill-me permite iniciar esa entrevista directamente. No son tres entrevistas para repetir una detrás de otra. Nuestra adaptación registra vocabulario y acuerdos en un archivo simple, sin requerir domain-modeling.

Para la clase, “Usá no-tecnico junto con grill-with-docs” suele alcanzar. setup-franco-skills ya habrá preparado las carpetas y las instrucciones.

**Para recordar:** La dependencia de una skill no es otro paso que debamos repetir manualmente.



## 19 · /no-tecnico: un compañero técnico.

Concepto

Esta skill le dice al agente que la persona no conoce arquitectura, frameworks o bases de datos. La persona explica su necesidad; el agente recomienda las piezas y enseña qué función cumplen.

no-tecnico no reemplaza la entrevista ni obliga a usar una tecnología concreta. Cambia cómo se conversa: en lugar de preguntarnos “¿qué base de datos querés?”, pregunta si varias personas necesitan compartir información. A partir de la respuesta recomienda una solución y explica qué nos permite y qué no.

En la aplicación de hábitos: “Si la usás solo vos en este navegador, podemos guardar ahí. Si querés acceder desde el celular y la computadora con los mismos datos, necesitamos una solución compartida”. La necesidad guía la decisión.

**Para recordar:** No necesitamos elegir tecnologías a ciegas: necesitamos explicar cómo queremos usar el producto.



## 20 · SDD y TDD resuelven preguntas distintas.

Concepto

SDD organiza el acuerdo de producto. TDD es una forma opcional de implementar usando pruebas antes del código. Podemos combinarlos sin confundir sus funciones.

Una especificación puede conducir a pruebas, pero eso no implica haber usado TDD. Para hablar de TDD, la prueba de comportamiento se escribe y observa fallar antes de implementar la solución. La comprobación de criterios sí forma parte de esta clase; el orden test-first es una decisión adicional.

Una regla de nombres únicos puede comprobarse con una prueba automatizada. Si primero implementamos y luego escribimos esa prueba, verificamos la regla, pero no hicimos TDD. La skill opcional tdd se instala solo cuando decidimos practicar ese ciclo.

**Para recordar:** Verificar es parte del trabajo. Hacerlo con TDD es una opción de implementación.



## 21 · Ejemplo: dividir la aplicación de hábitos.

Ejemplo: aplicación de hábitos

Volvemos a nuestro producto de ejemplo. Cada ticket entrega una acción completa que podemos mostrar antes de seguir con la siguiente.

Este esquema corresponde a la aplicación de hábitos. Cada ticket debe dejar un recorrido observable, no solamente una capa técnica aislada. T1 permite crear y volver a encontrar actividades; T2 registra su cumplimiento y calcula la racha; T3 cambia la regla para aceptar ayer.

El alumno puede demostrar T1 recargando la página y encontrando “Leer”. Todavía no hace falta que funcione “Marcar hoy”, porque esa acción pertenece a T2.

**Para recordar:** Cada ticket entrega una parte de la aplicación que alguien puede usar o comprobar.



## 22 · Construimos una app para gestionar hábitos.

Práctica en vivo: aplicación de hábitos

La demo transforma una idea en una aplicación local. Usaremos las skills del kit para definirla, construirla y comprobarla en vivo.

Vamos a construir una aplicación para gestionar hábitos de estudio. La persona crea una actividad y luego registra en qué días la realizó. La práctica termina cuando podemos crear, registrar un cumplimiento, recargar y comprobar la racha.

“Leer 20 minutos” es la actividad. “Realizado el 10 de septiembre” es un cumplimiento de esa actividad. La app conserva ambos datos.

**Para recordar:** Es una construcción en vivo. Los checkpoints son material de respaldo, no resultados generados durante la sesión.



## 23 · Preparamos el proyecto con nuestro kit.

Práctica en vivo: aplicación de hábitos

Usamos el prompt de setup Franco Skills del repositorio. Si el kit ya está instalado, comprobamos que las skills estén disponibles y seguimos.

El kit aporta skills y plantillas, pero no las decisiones del producto. La preparación identifica el agente, instala las carpetas correspondientes y conserva las reglas existentes. Los documentos del producto aparecerán a medida que resolvamos las preguntas.

El resultado de este paso es un proyecto listo para conversar y escribir Markdown; todavía no una aplicación de hábitos.

**Para recordar:** Antes de seguir, el agente debe poder encontrar no-tecnico y grill-with-docs.



## 24 · La pregunta importante: ¿qué significa “racha”?

Práctica en vivo: aplicación de hábitos

Aclaramos el comportamiento de la aplicación de hábitos antes de escribir su spec. “Registrar un cumplimiento” significa indicar en qué día realizamos una actividad.

La entrevista precisa cómo funcionará esta aplicación: qué significa repetir un nombre, cuándo podemos registrar que hicimos una actividad y cómo se calcula la racha. no-tecnico ayuda al agente a recomendar una solución proporcional al uso local.

Acordamos que “Leer” y “ leer ” son la misma actividad. Si registramos que la hicimos hoy dos veces, debe quedar un único cumplimiento.

**Para recordar:** Estas respuestas son decisiones de producto, no detalles de implementación.



## 25 · De las respuestas al contrato.

Práctica en vivo: aplicación de hábitos

La spec conserva lo acordado y define cómo lo comprobamos. Antes de continuar, leemos los criterios en voz alta.

La spec conserva los acuerdos de la entrevista en un archivo Markdown. En v1 solo podemos registrar cumplimientos de hoy. Los criterios usan una fecha de referencia para que el mismo ejemplo produzca siempre el mismo resultado.

El criterio de persistencia parte de una actividad creada y completada hoy. Tras recargar, comprobamos que siguen presentes su nombre y el día de cumplimiento.

**Para recordar:** Un documento bonito no basta: sus ejemplos tienen que representar nuestra intención.



## 26 · Elegir piezas pequeñas. Dividir por resultados.

Práctica en vivo: aplicación de hábitos

Para esta práctica local alcanza con una web pequeña, lógica separada y almacenamiento en el navegador. El agente debe explicar por qué no hace falta una infraestructura mayor.

Para una persona en un navegador, una pantalla con JavaScript y almacenamiento local puede cubrir el alcance acordado. No necesitamos cuentas ni una base externa. El plan explica este límite y divide el trabajo en T1 y T2.

Si después queremos compartir información entre dispositivos, debemos revisar el alcance y la solución. No es una limitación que un prompt más largo elimine.

**Para recordar:** T1: crear y persistir. T2: marcar y calcular. El cambio T3 se acuerda después.



## 27 · Un ticket. Un resultado comprobable.

Práctica en vivo: aplicación de hábitos

Primero creamos y conservamos actividades. Luego agregamos el registro de cumplimiento de hoy. Podemos demostrar cada parte antes de avanzar.

Construimos primero T1: crear una actividad, listarla y conservarla. Después T2 agrega el registro de cumplimiento y la racha. Las comprobaciones se ejecutan sobre lo realmente construido; TDD solo se agrega si elegimos ese modo de trabajo.

Tras T1 podemos recargar y seguir viendo “Leer”. Tras T2, “Marcar hoy” guarda la fecha y la actividad muestra un día de racha.

**Para recordar:** Un incremento se termina con comportamiento comprobado y pendientes visibles.



## 28 · Volvemos a los criterios. Uno por uno.

Práctica en vivo: aplicación de hábitos

Comprobamos la aplicación de hábitos contra sus criterios. El gráfico representa días en los que una actividad fue realizada; cada círculo lleno es un cumplimiento.

Con fecha de referencia 10 de septiembre, una actividad realizada el 8 y el 9 tiene una racha de dos días aunque hoy todavía no la hayamos hecho. Si también se realizó el 10, la racha es tres. Si solo se realizó el 8, la continuidad ya se interrumpió.

Comparamos el resultado visible con A1–A4. Un test de cálculo aporta evidencia de la regla; recargar y usar la pantalla aporta evidencia del recorrido. Lo que no comprobamos sigue pendiente.

**Para recordar:** Lo que no se comprobó queda pendiente, aunque el agente diga “listo”.



## 29 · “Ayer lo hice, pero olvidé marcarlo.”

Práctica en vivo: aplicación de hábitos

Aparece una necesidad nueva: permitir marcar ayer. La v1 solo permitía hoy. Actualizamos el acuerdo, revisamos el impacto y construimos ese cambio.

La nueva necesidad es registrar ayer cuando olvidamos hacerlo a tiempo. Actualizamos la spec a v2, indicamos qué regla cambió y definimos T3. La definición de racha se mantiene; puede cambiar su valor porque agregamos un día realizado.

Con una actividad realizada hoy, la racha es 1. Al registrar también ayer, pasa a 2. Repetir ayer no debe crear un duplicado; anteayer y mañana siguen fuera de alcance.

**Para recordar:** Spec → impacto → ticket → implementación → comprobación → evidencia.



## 30 · Que compile. Que cumpla. Que se entienda.

Concepto

La construcción técnica, el comportamiento y la explicación tienen que coincidir. Una especificación también puede necesitar correcciones.

Terminar un ticket significa poder mostrar qué criterio cumple y con qué evidencia. La revisión compara el comportamiento con la spec y también observa errores o riesgos en el cambio. Ambas miradas se complementan.

Un mensaje “listo” es una afirmación. Una regla vinculada a una prueba ejecutada y a un recorrido observado aporta evidencia que podemos discutir.

**Para recordar:** El resultado se evalúa contra el acuerdo, con comprobaciones y límites visibles.



## 31 · El método se aprende volviendo a usarlo.

Concepto

Todo lo necesario para repetir el recorrido: instalación, skills, documentos de ejemplo y aplicación de hábitos ejecutable.

El repositorio reúne las skills de esta clase, el prompt de preparación, las plantillas Markdown y la aplicación de hábitos en tres estados de respaldo. El material permite repetir el recorrido o empezar otro producto manteniendo la misma estructura de decisiones.

Para practicar, podemos cambiar una sola regla de la aplicación de hábitos: escribir el comportamiento nuevo, explicar su impacto y comprobarlo después de implementarlo.

**Para recordar:** Una idea, un acuerdo claro y una primera entrega comprobable.



# Noticias · GPT-6 Astra

## 1 · GPT-6 Astra. Qué trae de nuevo.

Noticias

Novedades del modelo, salto en computer use, benchmarks frente a GPT-5.6 Sol y casos de uso documentados.

Astra amplía lo que podemos delegar a un agente con herramientas. En esta sesión miramos capacidades anunciadas, resultados de evaluación y ejemplos publicados. Cada benchmark conserva su nombre y condición de medición.

El caso de uso ya no tiene por qué terminar en una respuesta de texto: puede producir un archivo, completar una tarea en una aplicación o construir un prototipo.

**Para recordar:** Una sesión de actualidad: capacidades, resultados y ejemplos de Astra.

- [OpenAI · novedades de Astra](https://developers.openai.com/api/docs/guides/latest-model)

## 2 · Computer use: trabajar sobre la pantalla.

Noticias

El agente puede interpretar una interfaz y operar sus controles. Esto permite actuar en aplicaciones y sitios donde no hay una integración específica.

Computer use combina la interpretación visual con acciones sobre una interfaz. La disponibilidad depende de que la aplicación que aloja al modelo le ofrezca esas herramientas y los permisos correspondientes.

OpenAI muestra tareas en Excel, Power BI y programas de diseño. Son ejemplos de trabajo dentro de software existente, además de generación de texto o código.

**Para recordar:** La mejora relevante es poder completar tareas en las herramientas que ya usamos.

- [OpenAI · trabajo entre aplicaciones](https://openai.com/business/model/)
- [OpenAI · lanzamiento y resultados completos](https://openai.com/index/gpt-6-astra/)

## 3 · El salto en computer use, en cifras.

Noticias

Comparación publicada por OpenAI frente a GPT-5.6 Sol. Cada par corresponde a la misma evaluación; los tres miden capacidades distintas.

ScreenSpot-Pro mide localización de elementos visuales. OSWorld evalúa tareas de escritorio. Agents’ Last Exam evalúa trabajo con interfaces. Por eso sus porcentajes se comparan dentro de cada par, no se suman.

En OSWorld se muestra la versión 2.0, conjunto offline y puntuación parcial. ScreenSpot-Pro está medido sin herramientas. Son resultados de evaluación, no porcentajes garantizados para cualquier tarea. Los valores son los máximos publicados entre niveles de esfuerzo, en entornos de investigación o API.

**Para recordar:** Astra mejora frente a Sol en las tres evaluaciones de computer use mostradas.

- [OpenAI · lanzamiento y resultados completos](https://openai.com/index/gpt-6-astra/)

## 4 · Más resultado. Menos tiempo por tarea.

Noticias

La evaluación también compara eficiencia. En la simulación de latencia de OSWorld, Astra obtiene una puntuación mayor en menos tiempo.

Los tiempos son promedios de una simulación de latencia de OSWorld. No son una promesa de duración para cada petición ni significan que todas las tareas se resuelvan más rápido en la misma proporción.

OpenAI también comunica una mejora de 1,9× en Mind2Web para la experiencia actualizada de Codex con Astra. Ese dato combina el modelo y las mejoras de computer use del producto.

**Para recordar:** La comparación de tiempo conserva el entorno y la medida que se usaron.

- [OpenAI · lanzamiento y resultados completos](https://openai.com/index/gpt-6-astra/)

## 5 · El avance llega al trabajo especializado.

Noticias

Tres ejemplos del cuadro de resultados del lanzamiento: terminal, automatización y diseño asistido por computadora.

Estos resultados amplían la comparación a tareas con herramientas y trabajo técnico. Un benchmark representa una colección de tareas definida; su nombre y su alcance importan tanto como la puntuación.

Terminal-Bench 4.0 muestra 57,9% frente a 37,3%. El salto observado es distinto del de BenchCAD o AutomationBench; no hay un único porcentaje que resuma toda la mejora. Los valores son los máximos publicados entre niveles de esfuerzo, en entornos de investigación o API.

**Para recordar:** Mejoras publicadas frente a Sol en tareas de código, automatización y CAD.

- [OpenAI · lanzamiento y resultados completos](https://openai.com/index/gpt-6-astra/)

## 6 · Nuevas formas de colaborar con el modelo.

Noticias

Además de la mejora de resultados, Astra incorpora funciones para coordinar trabajo prolongado y recibir nuevas instrucciones.

Las funciones nuevas de la API ofrecen más control sobre tareas largas. Su disponibilidad visible depende del producto que las integre. “Asíncrono” significa que una operación pendiente no tiene por qué detener todo el trabajo independiente.

Podemos corregir el destino de un informe mientras el agente está preparando otras partes. La aplicación gestiona las herramientas en curso y transmite la nueva instrucción sin descartar el trabajo ya completado.

**Para recordar:** Las novedades afectan tanto a lo que consigue como a cómo podemos trabajar con él.

- [OpenAI · novedades de Astra](https://developers.openai.com/api/docs/guides/latest-model)

## 7 · Casos para ver qué permite hacer.

Noticias

Ejemplos publicados de uso en herramientas, archivos y entornos creativos. Los enlaces permiten ver el material original de cada caso.

Playco utilizó Astra dentro de Playbot para producir tres variantes temáticas a partir de una base de juego. La empresa reporta menos intervenciones manuales que con su modelo anterior; es un resultado de ese caso, no una garantía para cualquier proyecto.

Los casos cubren resultados distintos: trabajar en una aplicación existente, modificar un proyecto dentro de un motor y publicar una experiencia jugable. Permiten elegir qué capacidad nos interesa probar.

**Para recordar:** Los ejemplos ayudan a pasar de “el modelo mejoró” a una capacidad que podemos explorar.

- [OpenAI · caso Playco](https://openai.com/index/playco-game-prototyping-with-astra/)
- [OpenAI · lanzamiento y resultados completos](https://openai.com/index/gpt-6-astra/)
