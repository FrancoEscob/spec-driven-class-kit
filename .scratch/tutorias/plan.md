# Plan explicado · propuesta para la demo

Estado: propuesta de arquitectura, pendiente de contrastar con el proyecto que elija el alumno. Las reglas de comportamiento están en `spec.md`.

## La acción completa

Pantalla → solicitud autenticada → servidor comprueba reglas → almacenamiento confirma una operación válida → pantalla muestra el resultado. El navegador no decide por sí solo si queda un cupo.

Para una aplicación propia, una opción es Next.js para pantallas y lógica de servidor y PostgreSQL para datos relacionados. Reutilizar el stack existente tiene prioridad si cumple las necesidades. Una herramienta de reservas existente es una alternativa si admite las reglas; la demo de programación puede usar una app pequeña para practicar el ciclo.

## Decisiones técnicas por comprobar

- Identidad: reutilizar un proveedor compatible; verificar identidad y propiedad en el servidor, no confiar en un identificador enviado por la pantalla.
- Datos: alumnos, turnos y reservas con estado. Restricción para una sola reserva activa por turno, dentro de una transacción. Esto protege R1.
- Superposición: la unicidad por turno no evita que el mismo alumno reserve dos turnos diferentes superpuestos. Serializar las operaciones por alumno (por ejemplo, bloqueo transaccional de su fila y comprobación dentro de la transacción) o diseñar una restricción de intervalos adecuada. Probar explícitamente esa carrera. Esto protege R3.
- Fechas: conservar instantes con referencia temporal y mostrar la zona del curso. Comparar cancelaciones con la hora del servidor; usar reloj controlado en pruebas.
- Reintentos: identificar una operación repetida y devolver su resultado sin duplicar cambios. Si se pierde la respuesta, consultar el estado real.
- Cancelación: cambiar estado, conservar historial y liberar cupo en una operación coherente. V2 agrega una marca; no implica borrar registros ni añadir sanciones.
- Operación: verificar alojamiento compatible, límites, costos, copia y restauración, y una persona responsable de mantenimiento. No contratar ni desplegar como parte de la conversación de especificación.

## Cómo comprobarlo

Observar desde la interfaz o una solicitud pública autenticada: reservar y recargar (A1); solicitudes simultáneas al mismo cupo (A2); usuario ajeno (A3); simultaneidad del mismo alumno en intervalos superpuestos (A4); reloj controlado y límites (A5); cancelación repetida y nuevo ocupante del cupo (A6); pérdida de respuesta y reintento (A7). Las comprobaciones de almacenamiento complementan la evidencia observable, no la reemplazan.

## Documentación a consultar al implementar

- https://nextjs.org/docs
- https://www.postgresql.org/docs/current/tutorial-transactions.html
- https://www.postgresql.org/docs/current/ddl-constraints.html

La elección y los precios deben verificarse para el entorno real. No son una garantía universal de escalabilidad ni un compromiso de costo.
