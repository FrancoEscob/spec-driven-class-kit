---
name: implement
description: Implementar el ticket o incremento elegido contra su spec, ejecutar comprobaciones y registrar evidencia. Adaptación del flujo de la clase de Franco.
---

# Implementar un incremento

Leé las reglas del proyecto, la spec vigente, el plan y el ticket elegido. Comprobá sus dependencias y trabajá solo en el alcance solicitado. Si una contradicción afecta al comportamiento, explicala antes de asumir una regla nueva.

Construí un recorrido pequeño que se pueda usar o comprobar completo. Conservá los criterios de aceptación como referencia de resultados. Ejecutá las comprobaciones apropiadas al cambio: pruebas de reglas e integración cuando aporten evidencia, chequeo de tipos si existe, y observación del recorrido cuando sea posible.

SDD no exige TDD. Si el usuario pidió TDD, o el plan ya lo acordó para una regla, aplicá la skill opcional `tdd` si está instalada: prueba que falla → implementación mínima → mejora. Si no se eligió TDD, igualmente comprobá los criterios; no afirmes que una prueba se escribió primero cuando no fue así.

Revisá el cambio con `code-review` cuando esté disponible. Registrá criterio, comprobación, resultado real y limitación en `evidencia.md`, junto a la spec. No marques como aprobado lo que no se ejecutó. Una prueba de lógica no verifica por sí sola la interfaz.

No amplíes el ticket ni avances al siguiente si la solicitud establece una revisión entre incrementos. Respetá la política Git del proyecto; esta skill no autoriza publicar, desplegar, enviar mensajes ni crear commits fuera del alcance acordado.
