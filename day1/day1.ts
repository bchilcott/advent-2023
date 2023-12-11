export function getValueFromLine(line: string): number {
  const numbers = line.match(/[0-9]/g);
  if (!numbers) {
    throw new Error(`No numbers in line '${line}'.`);
  }

  const result = parseInt(numbers[0] + numbers[numbers.length - 1]);
  return result;
}

export function calculateFinalCalibration(document: string): number {
  let sum = 0;
  document.split(/\n/).forEach((line) => {
    sum += getValueFromLine(line);
  });

  return sum;
}
