import path from 'path';
import { readFileSync } from 'fs';

const getAmountOfFullyOverlappingPairs = () => {
  const lines = readFileSync(path.join(__dirname, 'input.txt'), 'utf8').split(
    '\n'
  );

  let sum = 0;
  lines.forEach((pair) => {
    const [a, b] = pair.split(',');
    const [aStart, aEnd] = a.split('-').map((n) => parseInt(n, 10));
    const [bStart, bEnd] = b.split('-').map((n) => parseInt(n, 10));

    if (
      (aStart <= bStart && aEnd >= bEnd) ||
      (bStart <= aStart && bEnd >= aEnd)
    )
      sum++;
  });

  console.log('Total sum of fully overlapping pairs:', sum);
};

const getAmountOfPartiallyOverlappingPairs = () => {
  const lines = readFileSync(path.join(__dirname, 'input.txt'), 'utf8').split(
    '\n'
  );

  let sum = 0;
  lines.forEach((pair) => {
    const [a, b] = pair.split(',');
    const [aStart, aEnd] = a.split('-').map((n) => parseInt(n, 10));
    const [bStart, bEnd] = b.split('-').map((n) => parseInt(n, 10));

    if (
      (aStart >= bStart && aStart <= bEnd) ||
      (bStart >= aStart && bStart <= aEnd)
    )
      sum++;
  });

  console.log('Total sum of partially overlapping pairs:', sum);
};

getAmountOfFullyOverlappingPairs();
getAmountOfPartiallyOverlappingPairs();
