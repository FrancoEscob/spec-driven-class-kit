# Tutorías · especificación v2

Status: propuesta de cambio; activar solo al decidir implementar el ticket 04.

## Problema y personas

Los alumnos coordinan horarios por mensajes. El alumno necesita ver disponibilidad y gestionar solo sus reservas. El docente publica horarios. El incremento inicial usa turnos ya preparados; editar horarios con reservas no está incluido.

## Reglas

- R1: cada turno futuro admite una única reserva activa, incluso con solicitudes simultáneas.
- R2: solo alumnos identificados reservan; solo el propietario cancela o consulta su reserva privada. El docente autorizado consulta las reservas de sus tutorías.
- R3: un alumno no puede tener reservas activas superpuestas. Intervalos `[inicio, fin)` permiten horarios consecutivos.
- R4-v2: cancelar al menos dos horas antes es normal. A menos de dos horas y antes del inicio se permite con marca de cancelación tardía, visible para el docente autorizado. Al inicio o después se bloquea. La hora de referencia es la del servidor.
- R5: una cancelación permitida libera el cupo y conserva historial. Repetir la solicitud no produce otro efecto.

## Criterios de aceptación

- A1: dado un alumno y un turno futuro disponible, al confirmar la reserva aparece en Mis turnos y persiste tras recargar.
- A2: dadas dos solicitudes simultáneas para un cupo, solo una confirma; la otra comunica falta de disponibilidad y hay una única reserva activa persistida.
- A3: un alumno no accede a la reserva privada de otro ni la cancela cambiando un identificador en la solicitud.
- A4: un turno 18:30–19:00 es compatible con otro 18:00–18:30; 18:15–18:45 se rechaza si el alumno ya tiene alguno de ellos activo. Esto también se cumple con solicitudes simultáneas para horarios distintos que se superponen.
- A5-v2: para inicio a las 18:00, cancelar a las 15:59 o 16:00 es normal; a las 16:01 o 17:59 es tardía, libera el cupo y conserva la marca tras recargar; a las 18:00 o después se bloquea y la reserva sigue activa.
- A6: tras cancelar, recargar mantiene la cancelación, otro alumno puede reservar el cupo y una segunda solicitud de cancelación no vuelve a modificarlo.
- A7: ante un fallo de conexión no se muestra éxito sin confirmación; al reintentar o recargar se recupera el estado real sin duplicar la reserva.

## Fuera de alcance

Pagos, emails, lista de espera, sanciones por cancelación, app nativa y edición de horarios ya reservados.

## Plan y evidencia

La propuesta de implementación está en [plan.md](plan.md). La [matriz de evidencia](evidencia.md) comienza pendiente. No hay promesa de entrega de una aplicación dentro de este kit documental.
