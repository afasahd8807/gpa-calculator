import { GRADE_POINTS } from "./gradePoints";

export const round2 = (n) => Math.round(n * 100) / 100;

export function calculateGPA(courses, { keepHighest = true, exclude = ["X"] } = {}) {

  const normalized = courses
    .map((c) => ({
      ...c,
      code: c.code.toUpperCase(),
      credits: Number(c.credits),
      gradePoint: GRADE_POINTS[c.grade],
    }))
    .filter((c) => {
      if (!c.code) return false;
      if (exclude.includes(c.grade)) return false;
      return c.gradePoint !== null;
    });

  const finalList = keepHighest
    ? Object.values(
        normalized.reduce((acc, cur) => {
          if (!acc[cur.code] || cur.gradePoint > acc[cur.code].gradePoint) {
            acc[cur.code] = cur;
          }
          return acc;
        }, {})
      )
    : normalized;

  let totalCredits = 0;
  let total = 0;

  finalList.forEach((c) => {
    totalCredits += c.credits;
    total += c.credits * c.gradePoint;
  });

  return totalCredits === 0
    ? { gpa: 0, totalCredits }
    : { gpa: round2(total / totalCredits), totalCredits };
}
