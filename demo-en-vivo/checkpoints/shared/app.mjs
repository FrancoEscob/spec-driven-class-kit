import {
  createHabit,
  markHabit,
  streak,
  previousDay,
  readHabits,
  saveHabits,
  validDate,
} from "./domain.mjs";
const stage = Number(document.body.dataset.stage),
  version = stage === 3 ? 2 : 1;
const key = `sdd-class-habits-stage-${stage}`;
const $ = (id) => document.getElementById(id);
let habits = [],
  today = "2026-09-10",
  blocked = false;
$("today").value = today;
$("class-link").hidden = !location.pathname.startsWith("/demo/");
$("stage-name").textContent = [
  "",
  "T1 · Crear y conservar",
  "T2 · Marcar hoy · v1",
  "T3 · Marcar ayer · v2",
][stage];
$("stage-description").textContent =
  stage === 1
    ? "Creá un hábito y recargá la página: debería seguir acá."
    : "Probá las reglas de la spec y compará el resultado con los criterios.";
$("today-controls").hidden = stage === 1;
$("examples").hidden = stage === 1;
function notify(message, isError = false) {
  $("feedback").textContent = message;
  $("feedback").className = isError ? "feedback error" : "feedback";
}
function read() {
  try {
    habits = readHabits(localStorage, key);
    blocked = false;
  } catch (error) {
    blocked = true;
    notify(error.message, true);
  }
  render();
}
function commit(next, message) {
  try {
    const saved = saveHabits(localStorage, key, next);
    habits = saved;
    render();
    notify(message);
  } catch {
    notify(
      "No se pudo guardar. El cambio no se confirmó. Comprobá que el navegador permita almacenamiento local.",
      true,
    );
  }
}
function element(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}
function render() {
  $("habit-list").replaceChildren();
  $("empty").hidden = habits.length > 0;
  $("create").disabled = blocked;
  $("examples").disabled = blocked;
  $("count").textContent = `${habits.length} ${habits.length === 1 ? "hábito" : "hábitos"}`;
  for (const habit of habits) {
    const row = element("li", "habit");
    const info = element("div", "habit-info");
    info.append(element("h2", "", habit.name));
    if (stage > 1) {
      const count = streak(habit.dates, today);
      info.append(element("p", "streak", `${count} ${count === 1 ? "día" : "días"} de racha`));
      info.append(
        element(
          "p",
          "dates",
          habit.dates.length ? `Marcas: ${habit.dates.join(" · ")}` : "Todavía sin marcas.",
        ),
      );
    } else info.append(element("p", "dates", "Guardado en este navegador."));
    row.append(info);
    if (stage > 1) {
      const actions = element("div", "habit-actions");
      for (const [date, label] of [
        [today, "hoy"],
        ...(version === 2 ? [[previousDay(today), "ayer"]] : []),
      ]) {
        const done = habit.dates.includes(date);
        const button = element(
          "button",
          done ? "done" : "mark",
          done ? `✓ ${label} marcado` : `Marcar ${label}`,
        );
        button.type = "button";
        button.disabled = blocked;
        button.setAttribute(
          "aria-label",
          `${done ? "Volver a marcar" : "Marcar"} ${label}: ${habit.name}`,
        );
        button.addEventListener("click", () => {
          try {
            commit(
              markHabit(habits, habit.id, date, today, version),
              `${habit.name}: marca guardada (${date}).`,
            );
          } catch (error) {
            notify(error.message, true);
          }
        });
        actions.append(button);
      }
      row.append(actions);
    }
    $("habit-list").append(row);
  }
}
$("habit-form").addEventListener("submit", (event) => {
  event.preventDefault();
  try {
    const next = createHabit(habits, $("habit-name").value, crypto.randomUUID());
    const before = habits;
    commit(next, "Hábito creado y guardado.");
    if (before !== habits) $("habit-name").value = "";
    $("habit-name").focus();
  } catch (error) {
    notify(error.message, true);
  }
});
$("today").addEventListener("change", () => {
  if (!validDate($("today").value)) {
    notify("Elegí una fecha válida.", true);
    return;
  }
  today = $("today").value;
  render();
  notify(`Fecha de referencia: ${today}. Las marcas anteriores se conservan.`);
});
$("examples").addEventListener("click", () => {
  const yesterday = previousDay(today),
    before = previousDay(yesterday);
  const samples = [
    ["Ejemplo · hasta ayer", [before, yesterday]],
    ["Ejemplo · también hoy", [before, yesterday, today]],
    ["Ejemplo · interrumpido", [before]],
  ];
  let next = habits;
  for (const [name, dates] of samples) {
    if (next.some((h) => h.name.toLocaleLowerCase("es") === name.toLocaleLowerCase("es"))) continue;
    next = [...next, { id: crypto.randomUUID(), name, dates }];
  }
  commit(
    next,
    "Ejemplos disponibles: rachas 2, 3 y 0 si se cargaron para la fecha seleccionada. Los ejemplos ya existentes se conservaron.",
  );
});
$("restart").addEventListener("click", () => {
  if (
    !window.confirm(
      "¿Borrar todos los hábitos de este estado de la demo? Los otros estados no cambian.",
    )
  )
    return;
  try {
    localStorage.removeItem(key);
    habits = [];
    blocked = false;
    render();
    notify("Este estado de la demo quedó vacío.");
  } catch {
    notify("El navegador no permite modificar el almacenamiento.", true);
  }
});
$("retry").addEventListener("click", () => {
  notify("");
  read();
});
read();
