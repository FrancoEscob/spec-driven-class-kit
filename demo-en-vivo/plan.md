# Plan explicado · Demo de hábitos

Propuesta para el alcance local de esta clase. Si el agente construye una variante, debe justificar cómo cumple los mismos criterios.

| Necesidad | Pieza recomendada | Por qué y límite |
| --- | --- | --- |
| Una pantalla pequeña | HTML y CSS, sin framework | El alcance no justifica herramientas adicionales. Si crecen pantallas y estados, revisar. |
| Reglas verificables | JavaScript separado en funciones de dominio | Podemos comprobar nombres, marcas y rachas sin depender de la apariencia. |
| Recordar al recargar | `localStorage` del navegador | Adecuado para pocos registros personales. No comparte dispositivos, no es un backup y el usuario puede borrarlo. |
| Abrir la práctica | Servidor HTTP local de Python | Sirve archivos y módulos; no procesa datos ni actúa como backend de la app. |
| Comprobar el dominio | Pruebas con `node:test` | No necesitan paquetes. No reemplazan observar el navegador ni probar accesibilidad. |

## El viaje de una acción

Campo “Nombre” → validar regla R1 → construir el nuevo estado → intentar guardarlo → actualizar la lista y anunciar éxito. Si guardar falla, conservar el estado previo y anunciar el error. En una recarga, leer y validar el formato; si no se puede leer, no sobrescribirlo automáticamente.

Para marcar: botón hoy/ayer → validar fecha permitida y duplicación → conservar la marca → calcular racha → mostrar resultado. Comparar días de calendario, no intervalos de 24 horas; usar fecha explícita para pruebas reproducibles.

## Entregas

T1 crear, listar y conservar. T2 marcar hoy y ver racha. T3 cambia R2 para permitir ayer. Cada una deja un resultado observable.

## Limitaciones conocidas

No hay servidor, identidad, control de permisos, sincronización entre pestañas o dispositivos ni copia de seguridad. Son exclusiones conscientes para esta práctica. Si el producto necesita compartir datos o proteger información, hay que volver a la especificación y recomendar otra arquitectura. La fecha simulada no es una protección de integridad.
