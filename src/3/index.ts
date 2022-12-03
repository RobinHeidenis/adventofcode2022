import path from 'path';
import { readFileSync } from 'fs';

const getSum = () => {
  const lines = readFileSync(path.join(__dirname, 'input.txt'), 'utf8').split(
    '\n'
  );

  let sum = 0;

  lines.forEach((line) => {
    const a = line.substring(0, line.length / 2);
    const b = line.substring((line.length - 1) / 2 + 1);
    let matchingChar = '';
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
          matchingChar = a[i];
          break;
        }
      }
    }
    if (matchingChar.charCodeAt(0) >= 97 && matchingChar.charCodeAt(0) <= 122) {
      sum += matchingChar.charCodeAt(0) - 96;
    } else {
      sum += matchingChar.charCodeAt(0) - 38;
    }
  });
  console.log('Total sum:', sum);
};

const getSumOfBadges = () => {
  const lines = readFileSync(path.join(__dirname, 'input.txt'), 'utf8').split(
    '\n'
  );

  let sum = 0;

  const start = Date.now();
  for (let i = 0; i < lines.length; i += 3) {
    sum += doCalculation(lines, i);
  }
  console.log('total badges sum:', sum);
  const end = Date.now();
  console.log('Time taken:', end - start);
};

const doCalculation = (lines: string[], i: number): number => {
  const a = lines[i];
  const b = lines[i + 1];
  const c = lines[i + 2];
  for (let j = 0; j < a.length; j++) {
    for (let k = 0; k < b.length; k++) {
      for (let l = 0; l < c.length; l++) {
        if (a[j] === b[k] && b[k] === c[l]) {
          if (a[j].charCodeAt(0) >= 97 && a[j].charCodeAt(0) <= 122) {
            return a[j].charCodeAt(0) - 96;
          } else {
            return a[j].charCodeAt(0) - 38;
          }
        }
      }
    }
  }
  return 0;
};

getSum();
getSumOfBadges();
