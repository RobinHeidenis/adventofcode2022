import { readFileSync } from 'fs';
import path from 'path';

const actions: Record<string, number> = {
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3,
} as const;

const wins: Record<string, string> = {
  A: 'Y',
  B: 'Z',
  C: 'X',
};

const draws: Record<string, string> = {
  A: 'X',
  B: 'Y',
  C: 'Z',
};

const losses: Record<string, string> = {
  A: 'Z',
  B: 'X',
  C: 'Y',
};
const getTotalScore = () => {
  const lines = readFileSync(path.join(__dirname, 'input.txt'), 'utf8').split(
    '\n'
  );

  let totalScore = 0;
  lines.forEach((line) => {
    const [a, b] = line.split(' ');
    let score = 0;
    score += actions[b];
    if (wins[a] === b) score += 6;
    else if (draws[a] === b) score += 3;
    totalScore += score;
  });

  console.log('Total score:', totalScore);
};

const getTotalScoreWithNewStrategyGuide = () => {
  const lines = readFileSync(path.join(__dirname, 'input.txt'), 'utf8').split(
    '\n'
  );

  let totalScore = 0;
  lines.forEach((line) => {
    const [a, b] = line.split(' ');
    let score = 0;
    let action;
    if (b === 'X') {
      action = losses[a];
    } else if (b === 'Y') {
      action = draws[a];
    } else {
      action = wins[a];
    }
    score += actions[action];
    if (wins[a] === action) score += 6;
    else if (draws[a] === action) score += 3;
    totalScore += score;
  });

  console.log('Total score with adjusted strategy guide:', totalScore);
};

getTotalScore();
getTotalScoreWithNewStrategyGuide();
