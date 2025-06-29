export function getDuration(startDate: Date, endDate: Date): string {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const yearDiff = end.getFullYear() - start.getFullYear();
  const monthDiff = end.getMonth() - start.getMonth();

  let years = yearDiff;
  let months = monthDiff;

  // Adjust for negative months
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  // Adjust for day of month
  if (end.getDate() < start.getDate()) {
    months -= 1;
    if (months < 0) {
      years -= 1;
      months += 12;
    }
  }

  const parts: string[] = [];

  if (years > 0) {
    parts.push(`${years} ${years === 1 ? 'Year' : 'Years'}`);
  }

  if (months > 0) {
    parts.push(`${months} ${months === 1 ? 'Month' : 'Months'}`);
  }

  // If no difference, return "0 Months"
  if (parts.length === 0) {
    return '0 Months';
  }

  // Filter out parts with 0 values and format accordingly
  const filteredParts = parts.filter(part => {
    const number = parseInt(part.split(' ')[0]);
    return number > 0;
  });

  return filteredParts.join(' ');
}
