#!/usr/bin/env node

import { execSync } from 'child_process';
import { readFileSync, writeFileSync, rmSync } from 'fs';
import { resolve } from 'path';

// Map of React versions to compatible @testing-library/react versions
const TESTING_LIBRARY_VERSIONS = {
  '0.14': '^12.1.5',
  '15': '^12.1.5',
  '16': '^12.1.5',
  '17': '^12.1.5',
  '18': '^16.2.0',
  '19': '^16.2.0',
};

// Get version from command line argument
const version = process.argv[2];

if (!version || !Object.keys(TESTING_LIBRARY_VERSIONS).includes(version)) {
  console.error('Error: Invalid or missing React version number');
  console.error('Usage: node set-react-version.js <version>');
  console.error('Example: node set-react-version.js 18');
  console.error(`Valid options: [${Object.keys(TESTING_LIBRARY_VERSIONS).sort().join(', ')}]`);
  process.exit(1);
}

try {
  const testingLibraryVersion = TESTING_LIBRARY_VERSIONS[version];
  console.log(`Installing React version ${version}, corresponding types and compatible testing library version...`);
  execSync(`npm install react@${version} react-dom@${version} @types/react@${version} @types/react-dom@${version} @testing-library/react@${testingLibraryVersion} --force`, { stdio: 'inherit' });

  // In an ideal world we wouldn't need these two extra steps
  // Unfortunately NPM is often buggy and doens't actually install what we want
  console.log('Deleting node_modules and lock file to force install...');
  rmSync('./node_modules', { recursive: true, force: true });
  rmSync('../../node_modules', { recursive: true, force: true });
  rmSync('../../package-lock.json', { recursive: true, force: true });
  rmSync('../timeago-react/node_modules', { recursive: true, force: true });
  console.log(`Running npm install...`);
  execSync(`npm install`, { stdio: 'inherit' });

  // This is because when importing from this adjacent package, if it has a different react version in node_modules it will clash
  // But we'll default back to ours if it's gone
  // (note that npm install will restore this clashing file)
  console.log('Deleting clashing version from timeago-react/node_modules/...');
  rmSync('../timeago-react/node_modules', { recursive: true, force: true });

  // Special edits for 0.14
  // See https://github.com/testing-library/react-testing-library/issues/315
  if (version === '0.14') {
    console.log('Patching @testing-library/react for 0.14...');
    const filePath = resolve(new URL(import.meta.resolve('@testing-library/react')).pathname, '..', 'act-compat.js');
    const currentContent = readFileSync(filePath, 'utf8');
    writeFileSync(filePath, currentContent.replace(
      '_interopRequireWildcard(require("react-dom/test-utils"));',
      '{};',
    ));
  }

  console.log('Updating index.html to point at correct entrypoint...');
    const filePath = resolve('index.html');
    const currentContent = readFileSync(filePath, 'utf8');
    writeFileSync(filePath, currentContent.replace(
      /src\/main-(legacy|new)\.tsx/,
      version >= '18' ? 'src/main-new.tsx' : 'src/main-legacy.tsx',
  ));

  console.log(`\nSuccessfully installed React v${version} and compatible dependencies`);
} catch (error) {
  console.error('\nError installing dependencies:', error.message);
  process.exit(1);
}
