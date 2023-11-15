import { readFileSync } from 'fs';
import path from 'path';

interface File {
  name: string;
  size: number;
}

interface Directory {
  name: string;
  size: number;
  directories: Directory[];
  files: File[];
  parent?: Directory;
}

const getTotalSizeOfDirectoriesUnder100000 = () => {
  const lines = readFileSync(path.join(__dirname, 'input.txt'), 'utf8').split(
    '\n'
  );

  const root: Directory = {
    name: '/',
    size: 0,
    directories: [],
    files: [],
  };

  const currentDirectory: Directory = root;

  lines.forEach((line) => {
    if (line.startsWith('$ ls') || line.startsWith('dir')) {
      return;
    }

    if (line.startsWith('$ cd')) {
      if (currentDirectory.name === '/') return;

      const newDirectory: Directory = {
        name: line.split(' ')[2],
        size: 0,
        directories: [],
        files: [],
        parent: currentDirectory,
      };
    }
  });
};

getTotalSizeOfDirectoriesUnder100000();
