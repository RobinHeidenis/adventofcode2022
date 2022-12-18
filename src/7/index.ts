import { readFileSync } from 'fs';
import path from 'path';

interface BaseCommand {
  command: string;
}

interface CDCommand extends BaseCommand {
  command: 'cd';
  parameter: string;
}

interface LSCommand extends BaseCommand {
  command: 'ls';
  output: {
    file: string;
    size: number;
  }[];
}

type Command = LSCommand | CDCommand;

const getTotalSizeOfDirectoriesUnder100000 = () => {
  const lines = readFileSync(path.join(__dirname, 'input.txt'), 'utf8').split(
    '$ '
  );
  const commands: Command[] = [];
  lines.forEach((line) => {
    const commandParts = line.split(' ');
    const command = commandParts[1];
    if (command === 'cd') {
      const parameter = commandParts[2];
      commands.push({ command, parameter });
    }
    if (command === 'ls') {
    }
  });
  console.log(lines);
};

getTotalSizeOfDirectoriesUnder100000();
