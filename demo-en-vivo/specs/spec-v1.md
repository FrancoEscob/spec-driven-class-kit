# Spec v1 · Hábitos de estudio

Estado: referencia pedagógica para la demo. Revisar con el grupo antes de adoptarla como acuerdo del proyecto del alumno.

## Propósito y alcance

Una persona quiere registrar hábitos de estudio en su navegador y comprobar su constancia. Puede crear y listar hábitos, marcar hoy y ver su racha. Los datos persisten al recargar el mismo navegador. No hay cuentas, sincronización, recordatorios, edición, eliminación individual ni uso simultáneo en varias pestañas.

## Reglas

- R1. El nombre se recorta en sus extremos, admite de 1 a 60 caracteres y es único sin distinguir mayúsculas. Los espacios interiores se conservan. Un nombre vacío o duplicado se rechaza con una explicación.
- R2. Cada hábito admite una sola marca por día. En v1 solo se permite la fecha de referencia actual. Repetir una marca informa que ya existe y no duplica registros.
- R3. La racha cuenta días consecutivos hasta hoy si hoy está marcado; en caso contrario, hasta ayer. Si faltan ambas fechas, es cero. No cuentan fechas posteriores a hoy.
- R4. Crear y marcar conservan los datos al recargar. Un fallo al guardar informa el error y no confirma el cambio ni reemplaza el estado anterior. Los datos ilegibles no se sobrescriben automáticamente.
- R5. El recorrido de crear y marcar debe ser operable por teclado, con etiquetas de campos, foco visible y avisos de resultado.

## Criterios de aceptación

Fecha de referencia para los ejemplos: 2026-09-10.

- **A1 · Persistencia:** crear “Leer”, marcar hoy y recargar conserva nombre y marca. T1 verifica la parte de creación; T2 completa el criterio con la marca.
- **A2 · Nombres:** después de “Leer”, intentar “ leer ” o “LEER” muestra error y deja un solo hábito. Vacío, espacios solamente y más de 60 caracteres también se rechazan.
- **A3 · Marcas:** marcar hoy dos veces muestra aviso en el segundo intento; existe un solo registro para 2026-09-10. Ayer y mañana se rechazan en v1.
- **A4 · Racha:** con marcas 8–9, la racha es 2; con 8–9–10, es 3; solo 8 da 0; solo 10 da 1. Cruzar un mes o un año no corta una secuencia de días consecutivos.

## Controles de la demostración

La fecha simulada, los tres ejemplos precargables y el reinicio de datos son ayudas del docente. No son requisitos de una futura aplicación de hábitos. El reinicio pide confirmación y afecta solo el estado de respaldo abierto.

## Lo que debe verificarse

Reglas y persistencia mediante pruebas; recorrido completo mediante observación de la interfaz. La evidencia distingue ambas comprobaciones. Los archivos de ejemplo no prueban que el alumno haya ejecutado algo.
