# Ejemplo: recomendar la arquitectura sin examinar al alumno

## La necesidad

“Quiero una aplicación para registrar actividades de estudio y en qué días las hice”.

## Preguntas de uso

- ¿La vas a usar solo vos o varias personas deben compartir información?
- ¿Necesitás ver los mismos datos desde distintos dispositivos?
- ¿Qué tendría que seguir visible al cerrar y volver a abrir la aplicación?

Supongamos que la persona acuerda una práctica local: un usuario, un navegador, persistencia al recargar y sin sincronización.

## Recomendación explicada

“Podemos empezar con una pantalla sencilla. HTML define los campos y botones; CSS les da su apariencia; JavaScript aplica las reglas. Para este alcance no hace falta agregar un framework.

Guardaremos las actividades y las fechas en el almacenamiento de este navegador, llamado localStorage. Así siguen presentes al recargar. No hace falta contratar una base de datos externa para esta práctica.

Esa decisión tiene un límite: si cambiás de navegador, borrás sus datos o querés compartirlos entre dispositivos, la aplicación no los recupera de otro lugar. Si eso se vuelve un requisito, revisamos el almacenamiento y probablemente agreguemos una parte compartida”.

## Dos documentos diferentes

En la spec: “Al recargar, se conservan la actividad y el registro de que hoy se realizó”.

En el plan: “Usamos localStorage porque el alcance acordado es local; informamos errores al guardar y no confirmamos una operación fallida”.

La tecnología responde al uso acordado; no se presenta como recomendación para cualquier aplicación.
