---
name: code-review
description: Revisar un cambio concreto contra la especificación y las reglas del proyecto. Usar al cerrar un ticket o pedir revisión; informar problemas accionables y evidencia faltante.
---

# Revisar contra lo acordado

Determiná qué cambio pidió revisar el usuario: archivos sin confirmar, ticket, commit o comparación con una referencia Git. Reutilizá la referencia ya indicada; si el alcance es ambiguo, preguntá solo lo necesario para fijarlo. No inventes un punto de comparación.

Leé la spec vigente, los criterios del ticket y las reglas del proyecto. Revisá dos ejes y mantené los resultados distinguibles:

- **Comportamiento:** qué criterio falta, falla, se implementó parcialmente o se alteró sin acuerdo. Indicá la regla y el caso que demuestra el problema.
- **Calidad del cambio:** errores, riesgos de regresión, manejo de fallos y violaciones concretas de las convenciones del repositorio. No eleves preferencias de estilo a requisitos.

No requiere subagentes ni un tracker remoto. Si se usa ayuda independiente autorizada, explicá qué se revisó; no afirmes que hubo una segunda revisión si la hiciste vos mismo.

Para cada hallazgo: ubicación, problema, consecuencia y corrección sugerida. Priorizá los que afectan el comportamiento o los datos. Separá hallazgos de pruebas no ejecutadas. Si no encontrás problemas, decilo y describí los límites de la revisión. No marques el ticket terminado solo porque el código parece razonable.
