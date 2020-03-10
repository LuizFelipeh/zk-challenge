const day = 1000 * 60 * 60 * 24;

export function addDaysToDate(date: Date, days: number): Date {
  return new Date(date.getTime() + days * day);
}
