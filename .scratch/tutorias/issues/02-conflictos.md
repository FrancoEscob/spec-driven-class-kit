# 02 · Reservar sin duplicar cupos ni superponer horarios

Status: draft
Blocked by: 01
Spec: ../spec.md (v1)

Recorrido: dos personas intentan reservar el último cupo; una recibe confirmación y la otra un aviso comprensible. El mismo alumno tampoco puede confirmar dos horarios distintos que se superponen.

- [ ] A2: una única reserva activa bajo simultaneidad.
- [ ] A4: aceptar horarios consecutivos y rechazar superpuestos.
- [ ] A4: solicitudes simultáneas del mismo alumno no evaden la regla.
- [ ] Registrar resultados observables y persistencia.
