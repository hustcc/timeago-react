import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import TimeAgo from '../src/timeago-react';

const formatDate = (date: Date, fmt: string): string => {
  const o = {
    'M+': date.getMonth() + 1, //month
    'd+': date.getDate(), //day
    'h+': date.getHours(), //hour
    'm+': date.getMinutes(), //minute
    's+': date.getSeconds(), //second
    'q+': Math.floor((date.getMonth() + 3) / 3), //quarter
    S: date.getMilliseconds(), //millisecond
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  for (const k in o)
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
  return fmt;
};

test('tests will throw if checking for invalid text', () => {
  const d = +new Date() - 3601 * 1000; // 1 hour ago
  render(<TimeAgo datetime={d} />);
  expect(() => screen.getByText('not in document')).toThrow();
});

test('renders timeago with timestamp', () => {
  const d = +new Date() - 3601 * 1000; // 1 hour ago
  render(<TimeAgo datetime={d} />);
  screen.getByText('1 hour ago');
});

test('renders timeago with Date instance', () => {
  const d = +new Date() - 24 * 3601 * 1000; // 1 day ago
  render(<TimeAgo datetime={new Date(d)} />);
  screen.getByText('1 day ago');
});

test('renders timeago with Date string', () => {
  const d = +new Date() - 24 * 3601 * 1000; // 1 day ago
  render(<TimeAgo datetime={formatDate(new Date(d), 'yyyy-MM-dd hh:mm:ss')} />);
  screen.getByText('1 day ago');
});

test('renders timeago with locale', () => {
  const d = +new Date() - 3601 * 1000; // an hour ago
  render(<TimeAgo datetime={d} locale="zh_CN" />);
  screen.getByText('1 小时前');
});

test('renders timeago with className', () => {
  const d = new Date();
  const { container } = render(<TimeAgo datetime={d} className="my_classname" />);
  const timeElement = container.querySelector('time');
  expect(timeElement).not.toBeNull();
  expect(timeElement?.classList.contains('my_classname')).toBe(true);
});

test('renders timeago with relative date option', () => {
  render(<TimeAgo datetime={'2019-11-10'} opts={{ relativeDate: '2019-11-11' }} locale="zh_CN" />);
  screen.getByText('1 天前');
});
