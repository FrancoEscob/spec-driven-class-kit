# ADR 0001: kit local y ejemplo documental

Estado: aceptado para el material de clase. Fecha: 2026-09-10.

Necesidad: los alumnos deben poder estudiar y practicar el flujo sin depender de un repositorio remoto ni de una tecnología de aplicación ya impuesta.

Decisión: distribuir diez skills y documentos de tutorías en un repositorio local, con tickets Markdown. Mantener spec v1 activa y v2 como cambio propuesto. La elección ilustrativa Next.js + PostgreSQL sigue siendo una propuesta de plan, no una restricción del curso.

Alternativa: repositorio con una aplicación y stack cerrados. Facilita ejecutar una demo, pero oculta la decisión que esta clase quiere enseñar.

Consecuencia: los escenarios de aceptación no son pruebas ejecutadas. Para completar el ejercicio se elige la solución, se construye y se registra evidencia. La web de la presentación tiene su propio proyecto y no es la app de reservas.


## Ampliación del 10 de septiembre de 2026

La sección 5 usa una web local de hábitos basada en la secuencia del video. `demo-en-vivo/` contiene código preparado y pruebas propias. Tutorías conserva su alcance documental como ejercicio extendido. El dominio de hábitos no hereda las reglas de reservas.
