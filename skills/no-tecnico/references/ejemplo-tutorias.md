# Ejemplo: tutorías con cupo limitado

Solicitud: “Quiero una web para que mis alumnos reserven tutorías. No entiendo bases de datos”.

## Una primera ronda útil

“Voy a ayudarte a definir cómo se usa y recomendar la parte técnica. Para empezar:

1. ¿Quiénes pueden reservar? Si son tus alumnos actuales, propongo que se identifiquen y vean solo sus reservas.
2. ¿Cada horario tiene un solo cupo? Si es así, confirmaremos a una sola persona aunque dos lo intenten juntas.
3. ¿Necesitás permitir cancelaciones? Podemos empezar con un plazo simple; decime qué consecuencia tiene que alguien cancele muy cerca de la tutoría.”

No presentes estas propuestas como decisiones ya aprobadas. Si la persona cuenta que tiene un calendario institucional, investigá esa integración antes de proponer una app nueva.

## Después de acordar necesidades

Para una aplicación propia con usuarios y reservas compartidas, una propuesta posible es un proyecto web integrado con Next.js y PostgreSQL. Primero verificá restricciones del proyecto y documentación actual. Una herramienta de reservas existente puede ser suficiente si cumple las reglas.

| Necesidad | Propuesta y motivo | Compromiso |
| --- | --- | --- |
| Abrir desde el teléfono | Web adaptable, sin instalar una aplicación | Sin conexión puede no permitir operar |
| No compartir reservas privadas | Identidad verificada y permisos en servidor | Hay que gestionar accesos |
| No duplicar un cupo | Operación atómica y regla de unicidad de reserva activa | Requiere comprobar simultaneidad, no solo una pantalla |
| Conservar historial | Base compartida con estado de cancelación | Necesita respaldo y reglas de retención |

“Cuando tocás Reservar, la pantalla manda la solicitud. El servidor comprueba tu identidad y si el cupo sigue libre. La base de datos guarda la reserva como una operación completa; si otra persona ganó el cupo, recibís un aviso. La pantalla solo muestra la confirmación cuando esa operación terminó.”

## Acuerdo de ejemplo

- Decisión humana: un cupo, alumnos identificados, sin pagos en v1.
- Regla acordada: cancelar al menos dos horas antes; a dos horas exactas está permitido.
- Propuesta técnica: proyecto integrado y base relacional; falta contrastar con infraestructura existente.
- Criterio: al recargar, la reserva sigue visible para su propietario.
- Criterio: dos solicitudes simultáneas producen una única confirmación.
- Duda: quién administrará los horarios. No implementar esa gestión sin resolverla.

La siguiente acción puede ser sintetizar la spec; no hace falta contratar alojamiento para terminar la conversación.
