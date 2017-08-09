# timeago-react


> timeago-react is a simple react component used to format date with `*** time ago` statement. eg: '3 hours ago'. 

**The component based on [timeago.js](https://github.com/hustcc/timeago.js)** which is a simple javascript module.

 - Realtime render. Automatic release the resources.
 - Simple. Only 2kb.
 - Efficient. When the time is `3 hour ago`, the interval will an hour (3600 * 1000 ms).
 - Locales supported.

[![Build Status](https://travis-ci.org/hustcc/timeago-react.svg?branch=master)](https://travis-ci.org/hustcc/timeago-react) [![npm](https://img.shields.io/npm/v/timeago-react.svg?style=flat-square)](https://www.npmjs.com/package/timeago-react) [![npm](https://img.shields.io/npm/dt/timeago-react.svg?style=flat-square)](https://www.npmjs.com/package/timeago-react) [![npm](https://img.shields.io/npm/l/timeago-react.svg?style=flat-square)](https://www.npmjs.com/package/timeago-react) [![react supported](https://img.shields.io/badge/React-%3E%3D0.13.2%20%7C%7C%20%5E0.14.0%20%7C%7C%20%5E15.0.0-blue.svg?style=flat-square)](https://github.com/hustcc/timeago-react)


# 1. install

> **npm install timeago-react**


# 2. usage

```js
import React from 'react';
import TimeAgo from 'timeago-react'; // var TimeAgo = require('timeago-react');

<TimeAgo
  datetime={'2016-08-08 08:08:08'} 
  locale='zh_CN' />
```


# 3. component props

 - **`datetime`** (required, string / Date / timestamp)

The datetime to be formated. can be `datetime string`, `Date instance`, or `timestamp`.

 - **`live`** (optional, boolean)

Live render, default is `true`.

 - **`className`** (optional, string)

The `class` of span. you can setting the css style of span by class name.

 - **`locale`** (optional, string)

The `locale` language of statement, default is `en`. All supported locales [here](https://github.com/hustcc/timeago.js/tree/master/locales). If you want to use locale which is not `zh_CN` / `en`, you should import the locale before use it. As below:

```js
import React from 'react';
import TimeAgo from 'timeago-react';
import timeago from 'timeago.js';

// import it first.
timeago.register('vi', require('timeago.js/locales/vi'));

// then use it.
<TimeAgo
  datetime={'2016-08-08 08:08:08'} 
  locale='vi' />
```

 - **`style`** (optional, object)

The `style` object to applied to the root element.

Props not documented above are applied to the root element.

# 4. LICENSE

MIT


