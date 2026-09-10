import { test } from "node:test";
import assert from "node:assert/strict";
import {
  createHabit,
  markHabit,
  streak,
  previousDay,
  validDate,
  saveHabits,
  readHabits,
} from "./checkpoints/shared/domain.mjs";
const today = "2026-09-10";
test("A1: crear, marcar y recargar conserva nombre y fecha", () => {
  const data = new Map();
  const storage = { getItem: (k) => data.get(k) ?? null, setItem: (k, v) => data.set(k, v) };
  const created = createHabit([], " Leer ", "a");
  saveHabits(storage, "demo", markHabit(created, "a", today, today));
  const loaded = readHabits(storage, "demo");
  assert.equal(loaded[0].name, "Leer");
  assert.deepEqual(loaded[0].dates, [today]);
});
test("A2: los espacios externos y las mayúsculas no crean otro hábito", () => {
  const habits = createHabit([], "Leer", "a");
  for (const name of [" leer ", "LEER", "Leer"])
    assert.throws(() => createHabit(habits, name, "b"), /Ya existe/);
  assert.equal(habits.length, 1);
  assert.throws(() => createHabit(habits, "   ", "c"), /nombre/);
  assert.throws(() => createHabit(habits, "x".repeat(61), "c"), /60/);
});
test("A3: una segunda marca se rechaza sin duplicar ni mutar el estado anterior", () => {
  const before = createHabit([], "Leer", "a"),
    after = markHabit(before, "a", today, today);
  assert.throws(() => markHabit(after, "a", today, today), /ya está marcado/);
  assert.deepEqual(before[0].dates, []);
  assert.deepEqual(after[0].dates, [today]);
});
test("A4: racha tolerante a que todavía no se haya completado hoy", () => {
  for (const [dates, expected] of [
    [[], 0],
    [["2026-09-08", "2026-09-09"], 2],
    [["2026-09-08", "2026-09-09", today], 3],
    [["2026-09-08"], 0],
    [[today], 1],
    [["2026-09-08", today], 1],
  ])
    assert.equal(streak(dates, today), expected);
});
test("A5: v2 permite ayer y recalcula la racha, v1 lo rechaza", () => {
  const habits = markHabit(createHabit([], "Leer", "a"), "a", today, today);
  assert.throws(() => markHabit(habits, "a", "2026-09-09", today, 1), /solo podés marcar hoy/);
  const changed = markHabit(habits, "a", "2026-09-09", today, 2);
  assert.equal(streak(changed[0].dates, today), 2);
  for (const date of ["2026-09-08", "2026-09-11"])
    assert.throws(() => markHabit(habits, "a", date, today, 2), /hoy o ayer/);
  assert.throws(() => markHabit(changed, "a", "2026-09-09", today, 2), /ya está marcado/);
});
test("Los días de calendario cruzan mes, año y febrero bisiesto", () => {
  assert.equal(previousDay("2026-01-01"), "2025-12-31");
  assert.equal(previousDay("2024-03-01"), "2024-02-29");
  assert.equal(validDate("2026-02-30"), false);
  assert.equal(validDate("2024-02-29"), true);
  assert.equal(streak(["2025-12-30", "2025-12-31", "2026-01-01"], "2026-01-01"), 3);
});
test("Un fallo de almacenamiento no devuelve éxito ni modifica los hábitos previos", () => {
  const before = createHabit([], "Leer", "a");
  const next = markHabit(before, "a", today, today);
  assert.throws(
    () =>
      saveHabits(
        {
          setItem() {
            throw new Error("QuotaExceeded");
          },
        },
        "demo",
        next,
      ),
    /QuotaExceeded/,
  );
  assert.deepEqual(before[0].dates, []);
});
test("No sobrescribe ni acepta datos corruptos al leer", () => {
  for (const raw of [
    "{",
    "{}",
    JSON.stringify({ version: 1, habits: [{ id: "a", name: "Leer", dates: ["2026-02-30"] }] }),
  ]) {
    let wrote = false;
    assert.throws(() =>
      readHabits(
        {
          getItem: () => raw,
          setItem: () => {
            wrote = true;
          },
        },
        "demo",
      ),
    );
    assert.equal(wrote, false);
  }
});
