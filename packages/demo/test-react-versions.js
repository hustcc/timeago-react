#!/usr/bin/env node

import { execSync } from 'child_process';

const REACT_VERSIONS_TO_TEST = [
  '0.14',
  '15',
  '16',
  '17',
  '18',
  '19',
];

REACT_VERSIONS_TO_TEST.forEach((version) => {
    console.log(`==== Starting test for React version ${version} ====`);
    execSync(`node set-react-version.js ${version}`, { stdio: 'inherit' });
    execSync(`npm run test:unit`, { stdio: 'inherit' });
    execSync(`npm run build`, { stdio: 'inherit' });
})

// Set things back to default React version
execSync(`node set-react-version.js 16`, { stdio: 'inherit' });

console.log('==== All tests passed! ====');
