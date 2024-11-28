export function generateDate() {
  const date = new Date();

  const fullDate = {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    hour: date.getHours() + 1,
    mins: date.getMinutes(),
  };

  return fullDate;
}
