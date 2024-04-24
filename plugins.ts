import fs from 'fs';
import path from 'path';

const directoryPath = '../plugins';

const scanDirectory = (dir: string): void => {
  let fileCount = 0;
  const files: string[] = [];

  fs.readdir(dir, (err, entries) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    entries.forEach((entry) => {
      const entryPath = path.join(dir, entry);

      fs.stat(entryPath, (err, stats) => {
        if (err) {
          console.error('Error getting file stats:', err);
          return;
        }

        if (stats.isDirectory()) {
          // Recursively scan subdirectories
          scanDirectory(entryPath);
        } else if (stats.isFile() && path.extname(entryPath).toLowerCase() === '.js') {
          fileCount++;
          files.push(entryPath);
        }
      });
    });
  });
  setTimeout(() => {
    console.log(`Found ${fileCount} Plugins`);
    files.forEach((file) => {
      console.log(file);
    });
  }, 1000);
};

scanDirectory(directoryPath);