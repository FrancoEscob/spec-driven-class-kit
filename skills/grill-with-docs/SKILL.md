---
name: grill-with-docs
description: Aclarar una idea mediante una entrevista y conservar decisiones, dudas y vocabulario en Markdown. Usar antes de redactar la spec; adaptación simplificada para la clase de Franco.
---

# Grill with docs

Leé la skill hermana `grilling` y los documentos del proyecto que ya existan. Si se solicita `no-tecnico`, leela y aplicá su forma de preguntar y recomendar. No requiere domain-modeling ni un servicio externo.

Entrevistá sobre personas, recorrido principal, información que se conserva, reglas, errores, límites y qué quedará fuera. Investigá por tu cuenta los hechos que puedas comprobar. Preguntá solo por decisiones humanas o datos que falten; no reinicies lo ya acordado. En cada ronda elegí como máximo tres preguntas que desbloqueen más decisiones.

Conservá en `specs/<proyecto>/decisiones.md` (o la ubicación ya configurada): acuerdos, términos que necesiten definición, supuestos explícitos y dudas pendientes. Actualizá el mismo archivo después de cada ronda significativa. Para un proyecto pequeño alcanza este documento; no crees ADRs ni un glosario separado por rutina.

Cerrá cuando el alcance de la versión elegida sea suficientemente claro para escribir una spec, o cuando quede una pregunta bloqueante que requiera respuesta. No busques resolver todas las versiones futuras. No implementes durante una sesión que solo pide especificar.

`grill-me` es otra entrada a la misma entrevista de `grilling`; no hace falta invocarlas todas en secuencia. `to-spec` es el paso posterior que sintetiza el acuerdo en comportamiento verificable.
