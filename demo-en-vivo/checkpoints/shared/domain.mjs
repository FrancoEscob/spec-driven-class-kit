export function validDate(value) {
  return (
    typeof value === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(value) &&
    !Number.isNaN(Date.parse(value)) &&
    new Date(value).toISOString().slice(0, 10) === value
  );
}
export function previousDay(value) {
  if (!validDate(value)) throw new Error("La fecha no es válida.");
  const date = new Date(`${value}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() - 1);
  return date.toISOString().slice(0, 10);
}
export function createHabit(habits, input, id) {
  const name = input.trim();
  if (!name) throw new Error("Escribí un nombre para el hábito.");
  if (name.length > 60) throw new Error("El nombre admite hasta 60 caracteres.");
  if (habits.some((h) => h.name.toLocaleLowerCase("es") === name.toLocaleLowerCase("es")))
    throw new Error("Ya existe un hábito con ese nombre.");
  return [...habits, { id, name, dates: [] }];
}
export function markHabit(habits, id, date, today, version = 1) {
  if (!validDate(today) || !validDate(date)) throw new Error("La fecha no es válida.");
  if (date !== today && !(version === 2 && date === previousDay(today)))
    throw new Error(
      version === 2 ? "Solo podés marcar hoy o ayer." : "En v1 solo podés marcar hoy.",
    );
  const habit = habits.find((h) => h.id === id);
  if (!habit) throw new Error("No se encontró el hábito.");
  if (habit.dates.includes(date)) throw new Error("Este hábito ya está marcado en esa fecha.");
  return habits.map((h) => (h.id === id ? { ...h, dates: [...h.dates, date].sort() } : h));
}
export function streak(dates, today) {
  if (!validDate(today)) throw new Error("La fecha no es válida.");
  const done = new Set(dates);
  let day = done.has(today) ? today : previousDay(today),
    count = 0;
  while (done.has(day)) {
    count++;
    day = previousDay(day);
  }
  return count;
}
export function readHabits(storage, key) {
  const raw = storage.getItem(key);
  if (raw === null) return [];
  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    throw new Error("Los datos guardados no se pueden leer. No se sobrescribieron.");
  }
  if (!data || data.version !== 1 || !Array.isArray(data.habits))
    throw new Error("El formato guardado no es válido. No se sobrescribió.");
  const ids = new Set(),
    names = new Set();
  for (const h of data.habits) {
    if (
      !h ||
      typeof h.id !== "string" ||
      typeof h.name !== "string" ||
      !h.name.trim() ||
      h.name !== h.name.trim() ||
      h.name.length > 60 ||
      !Array.isArray(h.dates) ||
      !h.dates.every(validDate) ||
      new Set(h.dates).size !== h.dates.length ||
      ids.has(h.id) ||
      names.has(h.name.toLocaleLowerCase("es"))
    )
      throw new Error("Hay registros inválidos. No se sobrescribieron los datos.");
    ids.add(h.id);
    names.add(h.name.toLocaleLowerCase("es"));
  }
  return data.habits;
}
export function saveHabits(storage, key, habits) {
  storage.setItem(key, JSON.stringify({ version: 1, habits }));
  return habits;
}
