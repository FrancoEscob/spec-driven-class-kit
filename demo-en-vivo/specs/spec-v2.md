# Spec v2 · Cambio: poder marcar ayer

Estado: referencia pedagógica del cambio. v1 sigue siendo la base salvo el reemplazo de R2 que se describe acá. Una implementación del alumno adopta v2 después de revisar el cambio con el grupo.

## Motivo

La persona puede olvidar registrar al final del día y quiere completar ayer sin permitir modificaciones ilimitadas al historial.

## Regla R2 actualizada

Cada hábito admite una sola marca por día. Se permite hoy o ayer, según la fecha de referencia. Una fecha anterior a ayer o posterior a hoy se rechaza. Repetir una marca informa que ya existe y conserva el registro original.

R1, R3, R4 y R5 y los criterios A1–A4 de [v1](spec-v1.md) continúan vigentes, salvo que la restricción temporal de A3 ahora permite ayer. El cálculo de racha no cambia; se recalcula porque cambia su entrada.

## A5 · Nuevo criterio

Con referencia 2026-09-10 y un hábito marcado el 10:

1. Su racha inicial es 1.
2. Marcar el 9 se acepta y la racha pasa a 2.
3. Repetir el 9 se rechaza sin duplicar ni alterar la racha.
4. Marcar el 8 o el 11 se rechaza.
5. Recargar conserva las dos marcas.

## Impacto

Cambiar validación de fecha y acción disponible en pantalla. Actualizar pruebas de R2 y agregar A5. No cambia el formato de datos ni requiere una base externa. Cada checkpoint didáctico tiene almacenamiento independiente; no representa una migración de datos reales entre versiones.
