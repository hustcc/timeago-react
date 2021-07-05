# timeago-react


> timeago-react is a simple react component used to format date with `*** time ago` statement. eg: '3 hours ago'.

**The component based on [timeago.js](https://github.com/hustcc/timeago.js)** which is a simple javascript module.

 - Realtime render. Automatic release the resources.
 - Simple. Only 2kb.
 - Efficient. When the time is `3 hour ago`, the interval will an hour (3600 * 1000 ms).
 - Locales supported.

[![npm](https://img.shields.io/npm/v/timeago-react.svg)](https://www.npmjs.com/package/timeago-react)
[![build](https://github.com/hustcc/timeago-react/workflows/build/badge.svg)](https://github.com/hustcc/timeago-react)
[![demo](https://github.com/hustcc/timeago-react/workflows/demo/badge.svg)](https://github.com/hustcc/timeago-react)
[![npm](https://img.shields.io/npm/dm/timeago-react.svg)](https://www.npmjs.com/package/timeago-react)
[![react supported](https://img.shields.io/badge/React-%5E0.14.0%20%7C%7C%20%5E15.0.0%20%7C%7C%20%5E16.0.0%20%7C%7C%20%5E17.0.0-blue.svg)](https://github.com/hustcc/timeago-react)
[![npm](https://img.shields.io/npm/l/timeago-react.svg)](https://www.npmjs.com/package/timeago-react)


## Install

> **npm install timeago-react**


## Usage

```jsx
import * as React from 'react';
import TimeAgo from 'timeago-react'; // var TimeAgo = require('timeago-react');

<TimeAgo
  datetime={'2016-08-08 08:08:08'}
  locale='zh_CN'
/>
```


## Component props

 - **`datetime`** (required, string / Date / timestamp)

The datetime to be formatted. can be `datetime string`, `Date instance`, or `timestamp`.

 - **`live`** (optional, boolean)

Live render, default is `true`.

 - **`className`** (optional, string)

The `class` of span. you can setting the css style of span by class name.

 - **`opts.relativeDate`** (optional, string / Date / timestamp)

The datetime to be calculated interval relative to.

 - **`opts.minInterval`** (optional, number in seconds)

The min interval in seconds to update the ** time ago string

- **`locale`** (optional, string)

The `locale` language of statement, default is `en`. All supported locales [here](https://github.com/hustcc/timeago.js/tree/master/src/lang). If you want to use locale which is not `zh_CN` / `en`, you should import the locale before use it. As below:

```jsx
import * as React from 'react';
import TimeAgo from 'timeago-react';
import * as timeago from 'timeago.js';

// import it first.
import vi from 'timeago.js/lib/lang/vi';

// register it.
timeago.register('vi', vi);

// then use it.
<TimeAgo
  datetime={'2016-08-08 08:08:08'}
  locale='vi'
/>
```

 - **`style`** (optional, object)

The `style` object to applied to the root element.

Props not documented above are applied to the root element.


## LICENSE

MIT
