# Tracker: Markdown local

Una carpeta por funcionalidad: `.scratch/<feature>/`. Spec activa: `spec.md`; plan: `plan.md`; un archivo por ticket en `issues/NN-slug.md`, en orden de dependencias.

“Publicar” significa escribir un archivo local. No crear issues, mensajes ni PRs remotos. “Leer un ticket” significa abrir el archivo referido. Conservá comentarios bajo `## Comentarios` sin borrar el historial.

Cada ticket incluye `Status:` y `Blocked by:`. Estados locales: draft (falta acuerdo), ready-for-agent (acordado y listo cuando sus bloqueos estén resueltos), in-progress, done. No hay skill de triage instalada; no hace falta configurar etiquetas de un servicio. Los tickets del ejemplo son borradores hasta que se acuerde implementarlos.

La versión activa está en `spec.md`; los snapshots `spec-v1.md` y `spec-v2.md` sirven para enseñar el cambio. Solo hay una versión activa. No marcar done sin evidencia de los criterios.
