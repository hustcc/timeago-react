#!/usr/bin/env node

import { copyFileSync, readFileSync, writeFileSync } from 'fs';

copyFileSync('../../README.md', './README.md');
copyFileSync('../../LICENSE', './LICENSE');

// This enables backwards compatibility with React 0.14, as PureComponent was introduced in React 15
['esm', 'cjs'].forEach((dir) => {
    const filePath = `./${dir}/timeago-react.js`
    const currentContent = readFileSync(filePath, 'utf8');
    writeFileSync(filePath, currentContent.replace(
      'React.PureComponent',
      'React.PureComponent || React.Component',
    ));
})
