---
name: to-spec
description: Sintetizar una conversación ya clarificada en una especificación verificable, manteniendo separado el plan técnico y registrando dudas abiertas. Adaptación del curso basada en Matt Pocock.
---

# To spec · adaptación del curso

Leé el contexto, el glosario y las decisiones ya presentes. En este curso se trabaja con archivos Markdown locales, según las convenciones existentes del proyecto. Sintetizá lo acordado: no reinicies una entrevista ni inventes respuestas para completar un documento.

Escribí la spec en `specs/<proyecto>/spec.md` si esa es la convención configurada. Incluí problema, personas, recorrido, reglas con identificadores, criterios observables, estados de error relevantes, exclusiones y dudas. Usá las historias necesarias para el alcance; no alargues la lista para aparentar exhaustividad. Si faltan decisiones bloqueantes, marcá la spec como borrador y describí qué necesita resolverse.

Separá las propuestas de implementación en `plan.md` junto a la spec: arquitectura, datos, interfaces, riesgos y cómo se comprobarán los criterios. Vinculá desde la spec. Una restricción tecnológica genuina sí pertenece al acuerdo; distinguí esa restricción de una preferencia del agente.

Proponé dónde observar cada conducta (pantalla, solicitud, integración) y explicá qué demuestra. Reutilizá comprobaciones ya acordadas; si hace falta decidir una nueva frontera importante, presentala en lenguaje de uso. Si está activa no-tecnico, aplicá su adaptación sin pedir al alumno elegir jerga.

Conservá decisiones previas y archivos existentes; actualizá el documento correspondiente sin duplicarlo. Al cerrar, resumí el resultado, los criterios y las dudas que impiden implementarlo. Publicar en un servicio externo requiere que sea parte del alcance autorizado; guardar el archivo local basta en este curso.
