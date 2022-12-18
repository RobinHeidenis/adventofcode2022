import path from 'path';
import { readFileSync } from 'fs';

const line = readFileSync(path.join(__dirname, 'input.txt'), 'utf8');

const getAmountOfDuplicatesInArray = (array: string[]): number => {
  const duplicates = array.reduce((acc, currentValue, index, array) => {
    if (
      array.indexOf(currentValue) !== index &&
      !acc.includes(currentValue as never)
    )
      acc.push(currentValue as never);
    return acc;
  }, []);
  return duplicates.length;
};

const findIndexOfFirstPacketMarker = (): number => {
  for (let i = 0; i < line.length; i++) {
    const charArray = line.slice(i, i + 4).split('');
    if (getAmountOfDuplicatesInArray(charArray) === 0) return i + 4;
  }
  return 0;
};

const findIndexOfFirstMessageMarker = () => {
  for (let i = 0; i < line.length; i++) {
    const charArray = line.slice(i, i + 14).split('');
    if (getAmountOfDuplicatesInArray(charArray) === 0) return i + 14;
  }
  return 0;
};

console.log(findIndexOfFirstPacketMarker());
console.log(findIndexOfFirstMessageMarker());
