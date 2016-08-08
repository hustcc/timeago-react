# timeago-react

timeago-react is a simple react component used to format date with `*** time ago` statement. eg: '3 hours ago'. 

**The component based on [timeago.js](https://github.com/hustcc/timeago.js).**

[![Build Status](https://travis-ci.org/hustcc/timeago-react.svg?branch=master)](https://travis-ci.org/hustcc/timeago-react) [![npm](https://img.shields.io/npm/v/timeago-react.svg?style=flat-square)](https://www.npmjs.com/package/timeago-react) [![npm](https://img.shields.io/npm/dt/timeago-react.svg?style=flat-square)](https://www.npmjs.com/package/timeago-react) [![npm](https://img.shields.io/npm/l/timeago-react.svg?style=flat-square)](https://www.npmjs.com/package/timeago-react)

# 1. install

```sh
npm install timeago-react
```


# 2. usage

```js
import React from 'react';
import TimeAgo from 'timeago-react'; // var TimeAgo = require('timeago-react');

<TimeAgo
  date={'2016-08-08 08:08:08'} 
  local='zh_CN' />
```


# 3. component props

 - **`date`** (required, string / Date / timestamp)

the date to be formated. can be `date string`, `Date instance`, or `timestamp`.

 - **`live`** (optional, object)

live render, default is `true`.

 - **`className`** (optional, string)

the `class` of span. you can setting the css style of span by class name.

 - **`local`** (optional, string)

the `local` language of statement, default is `en`. `zh_CN` and `en` are supported.


# 4. LICENSE

MIT
