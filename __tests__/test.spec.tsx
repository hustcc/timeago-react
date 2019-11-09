import React from 'react';
import TimeAgo from '../src/timeago-react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

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

test('test timeago-react with `datetime`.', () => {
  // test timestemp
  let d = +new Date() - 3601 * 1000; // 1 hour ago
  let component = mount(<TimeAgo datetime={d} />);
  expect(component.find('time').length).toBe(1);
  expect(component.find('time').text()).toEqual('1 hour ago');

  // test Date instance
  d = +new Date() - 24 * 3601 * 1000; // 1 day ago
  component = mount(<TimeAgo datetime={new Date(d)} />);
  expect(component.find('time').length).toBe(1);
  expect(component.find('time').text()).toEqual('1 day ago');

  // test Date string
  d = +new Date() - 24 * 3601 * 1000; // 1 day ago
  component = mount(<TimeAgo datetime={formatDate(new Date(d), 'yyyy-MM-dd hh:mm:ss')} />);
  expect(component.find('time').length).toBe(1);
  expect(component.find('time').text()).toEqual('1 day ago');
});

test('test timeago-react with `datetime` and `locale`.', () => {
  // test timestemp
  let d = +new Date() - 3601 * 1000; // an hour ago
  let component = mount(<TimeAgo datetime={d} locale="zh_CN" />);
  expect(component.find('time').length).toBe(1);
  expect(component.find('time').text()).toEqual('1 小时前');

  // test Date instance
  d = +new Date() - 24 * 3601 * 1000; // 1 day ago
  component = mount(<TimeAgo datetime={new Date(d)} locale="zh_CN" />);
  expect(component.find('time').length).toBe(1);
  expect(component.find('time').text()).toEqual('1 天前');

  // test Date string
  d = +new Date() - 24 * 3601 * 1000; // 1 day ago
  component = mount(<TimeAgo datetime={formatDate(new Date(d), 'yyyy-MM-dd hh:mm:ss')} locale="zh_CN" />);
  expect(component.find('time').length).toBe(1);
  expect(component.find('time').text()).toEqual('1 天前');
});

test('test timeago-react with `className`.', () => {
  const component = mount(<TimeAgo datetime={new Date()} className="my_classname" />);
  expect(component.find('time').length).toBe(1);
  expect(component.find('time').prop('className')).toEqual('my_classname');
});

test('test timeago-react with `relativeDate`.', () => {
  const component = mount(<TimeAgo datetime={'2019-11-10'} relativeDate={'2019-11-11'} locale="zh_CN" />);
  expect(component.find('time').length).toBe(1);
  expect(component.find('time').text()).toEqual('1 天前');
});

// TODO: i don't know how to test the timer in React component.
// test('test timeago-react with `live`.', () => {
//   let component = mount(
//     <TimeAgo datetime={+new Date()} live={true} className='my_classname' />
//   );
//   expect(component.find('time').length).toBe(1);
//   let currentText = component.find('time').text();
//   setTimeout((currentText) => {
//     expect(component.find('time').text()).not.toEqual(currentText);
//   }, 11000)
// });
