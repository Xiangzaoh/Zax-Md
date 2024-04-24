import fs from 'fs';
import path from 'path';

const directoryPath = '../'; // Replace with the actual directory path
const fileName = 'plugins.ts';

const scanAndExecute = (dir: string): void => {
  const filePath = path.join(dir, fileName);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // File not found
      console.log(`${fileName} not found! Creating a new file...`);
      createAndExecuteFile(filePath);
    } else {
      // File found
      console.log(`Executing ${fileName}`);
      executeFile(filePath);
    }
  });
};

const createAndExecuteFile = (filePath: string): void => {
  const content = 'console.log("Hello from plugins.ts!");';

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error('Error creating file:', err);
      return;
    }

    console.log(`${fileName} created!`);
    executeFile(filePath);
  });
};

const executeFile = (filePath: string): void => {
  try {
    require(filePath);
  } catch (err) {
    console.error('Error executing file:', err);
  }
};

scanAndExecute(directoryPath);