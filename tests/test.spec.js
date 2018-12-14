import React from 'react';
import TimeAgo from '../src/timeago-react.js';
import { shallow } from 'enzyme';

// from http://www.cnblogs.com/zhangpengshou/archive/2012/07/19/2599053.html
Date.prototype.Format = function (fmt) { //author: meizz
  let o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (let k in o)
  if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

test('test timeago-react with `datetime`.', () => {
  // test timestemp
  let d = new Date() - 3601 * 1000; // 1 hour ago
  let component = shallow(
    <TimeAgo datetime={d} />
  );
  expect(component.find('time').length).toBe(1);
  expect(component.find('time').text()).toEqual('1 hour ago');

  // test Date instance
  d = new Date() - 24 * 3601 * 1000; // 1 day ago
  component = shallow(
    <TimeAgo datetime={new Date(d)} />
  );
  expect(component.find('time').length).toBe(1);
  expect(component.find('time').text()).toEqual('1 day ago');

  // test Date string
  d = new Date() - 24 * 3601 * 1000; // 1 day ago
  d = new Date(d).Format('yyyy-MM-dd hh:mm:ss');
  console.log(d);
  component = shallow(
    <TimeAgo datetime={d} />
  );
  expect(component.find('time').length).toBe(1);
  expect(component.find('time').text()).toEqual('1 day ago');
});


test('test timeago-react with `datetime` and `locale`.', () => {
  // test timestemp
  let d = new Date() - 3601 * 1000; // an hour ago
  let component = shallow(
    <TimeAgo datetime={d} locale='zh_CN' />
  );
  expect(component.find('time').length).toBe(1);
  expect(component.find('time').text()).toEqual('1 小时前');

  // test Date instance
  d = new Date() - 24 * 3601 * 1000; // 1 day ago
  component = shallow(
    <TimeAgo datetime={new Date(d)} locale='zh_CN'  />
  );
  expect(component.find('time').length).toBe(1);
  expect(component.find('time').text()).toEqual('1 天前');

  // test Date string
  d = new Date() - 24 * 3601 * 1000; // 1 day ago
  d = new Date(d).Format('yyyy-MM-dd hh:mm:ss');
  component = shallow(
    <TimeAgo datetime={d} locale='zh_CN' />
  );
  expect(component.find('time').length).toBe(1);
  expect(component.find('time').text()).toEqual('1 天前');
});


test('test timeago-react with `className`.', () => {
  let component = shallow(
    <TimeAgo datetime={new Date()} className='my_classname' />
  );
  expect(component.find('time').length).toBe(1);
  expect(component.find('time').props().className).toEqual('my_classname');
});

// TODO: i don't know how to test the timer in React component.
// test('test timeago-react with `live`.', () => {
//   let component = shallow(
//     <TimeAgo datetime={+new Date()} live={true} className='my_classname' />
//   );
//   expect(component.find('time').length).toBe(1);
//   let currentText = component.find('time').text();
//   setTimeout((currentText) => {
//     expect(component.find('time').text()).not.toEqual(currentText);
//   }, 11000)
// });
