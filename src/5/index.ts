import { readFileSync } from 'fs';
import path from 'path';

const parseInput = (input: string) => {
  const lines = input.split('\n\n');

  const array: string[][] = [[], [], [], [], [], [], [], [], []];

  const splitLines0 = lines[0].split('\n');

  for (let i = 0; i < splitLines0.length - 1; i++) {
    const line = splitLines0[i];
    for (let j = 0; j < line.length; j += 4) {
      array[j / 4].push(line[j + 1]);
    }
  }

  array.forEach((arr) => arr.reverse());
  return array;
};

const popNextValuableElement = (array: string[]): string => {
  const element = array.pop();
  if (element === ' ') return popNextValuableElement(array);
  return element ?? '';
};

const logResult = (array: string[][]) => {
  let result = '';

  array.forEach((item) => {
    item.reverse();
    for (let i = 0; i < item.length; i++) {
      if (item[i] !== ' ') {
        result += item[i];
        break;
      }
    }
  });

  console.log(result);
};

const getCrateOnTopOfEachStack = () => {
  const input = readFileSync(path.join(__dirname, 'input.txt'), 'utf8');
  console.time('getCrateOnTopOfEachStack');
  const array = parseInput(input);

  const lines = input.split('\n\n')[1].split('\n');

  const regex = /(\d+)/g;
  lines.forEach((line) => {
    const matches = Array.from(line.matchAll(regex));

    for (let i = 0; i < parseInt(matches[0][0]); i++) {
      const element = popNextValuableElement(
        array[parseInt(matches[1][0]) - 1]
      );

      if (!element) {
        throw new Error('No element found');
      }

      array[parseInt(matches[2][0]) - 1].push(element);
    }
  });

  logResult(array);
};

const getCrateOnTopOfEachStackButThisTimeTheyWereMovedByTheCrateMover9001InsteadOfTheCrateMover9000SoTheResultIsDifferent =
  () => {
    const input = readFileSync(path.join(__dirname, 'input.txt'), 'utf8');
    console.time(
      'getCreateOnTopOfEachStackButThisTimeTheyWereMovedByTheCrateMover9001InsteadOfTheCrateMover9000SoTheResultIsDifferent'
    );
    const array = parseInput(input);

    const lines = input.split('\n\n')[1].split('\n');

    const regex = /(\d+)/g;
    lines.forEach((line) => {
      const matches = Array.from(line.matchAll(regex));

      const stack = [];
      for (let i = 0; i < parseInt(matches[0][0]); i++) {
        const element = popNextValuableElement(
          array[parseInt(matches[1][0]) - 1]
        );

        if (!element) {
          throw new Error('dumbass lmao');
        }

        stack.push(element);
      }
      stack.reverse();
      stack.forEach((item) => {
        array[parseInt(matches[2][0]) - 1].push(item);
      });
    });

    logResult(array);
  };

getCrateOnTopOfEachStack();
console.timeEnd('getCrateOnTopOfEachStack');
getCrateOnTopOfEachStackButThisTimeTheyWereMovedByTheCrateMover9001InsteadOfTheCrateMover9000SoTheResultIsDifferent();
console.timeEnd(
  'getCreateOnTopOfEachStackButThisTimeTheyWereMovedByTheCrateMover9001InsteadOfTheCrateMover9000SoTheResultIsDifferent'
);
