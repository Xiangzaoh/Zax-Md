const fs = require('fs');
const path = require('path');

const repoPath = process.cwd(); // Get the current working directory (repository path)
const gitFilePath = path.join(repoPath, '.git');

// Check if the .git file exists
fs.access(gitFilePath, fs.constants.F_OK, (err) => {
  if (err) {
    // .git file not found
    console.log('.git not found, attempting to create a new .git file...');
    createGitFile();
  } else {
    // .git file found
    console.log('.git found!');
  }
});

// Function to create the .git file
const createGitFile = () => {
  const gitFileContent = 'This is the .git file for the repository.';

  fs.writeFile(gitFilePath, gitFileContent, (err) => {
    if (err) {
      console.error('Error creating .git file:', err);
      console.error('Unable to fix this problem automatically. Sorry.');
      process.exit(1); // Exit the process with a non-zero code (indicating an error)
    } else {
      console.log('.git file created successfully!');
    }
  });
};