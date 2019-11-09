import React from 'react';
import { format, cancel, render } from 'timeago.js';
import { Opts, TDate } from 'timeago.js/lib/interface';
export { Opts, TDate };

/**
 * Convert input to a valid datetime string of <time> tag
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
 * @param input
 * @returns datetime string
 */
const toDateTime = (input: TDate): string => {
  // let date: Date = new Date();
  // if (input instanceof Date) {
  //   date = input;
  //   //@ts-ignore
  // } else if (!isNaN(input) || /^\d+$/.test(input)) {
  //   //@ts-ignore
  //   date = new Date(parseInt(input));
  // } else {
  //   date = new Date(input);
  // }

  // try {
  //   return date.toISOString();
  // } catch (e) {
  //   console.error('invalid datetime');
  //   return '';
  // }

  return '' + (input instanceof Date ? input.getTime() : input);
};

export interface TimeAgoProps {
  readonly datetime: TDate; // date to be formatted
  readonly live?: boolean; // real time render.
  readonly opts?: Opts;
  readonly locale?: string; // locale lang
  readonly className?: string; // class name
  readonly style?: React.CSSProperties; // style object
}

export default class TimeAgo extends React.Component<TimeAgoProps> {
  static defaultProps = {
    live: true,
    className: '',
  };

  dom: HTMLTimeElement = null;

  componentDidMount(): void {
    // fixed #6 https://github.com/hustcc/timeago-react/issues/6
    // to reduce the file size.
    // const { locale } = this.props;
    // if (locale !== 'en' && locale !== 'zh_CN') {
    //   timeago.register(locale, require('timeago.js/locales/' + locale));
    // }
    // render it.
    this.renderTimeAgo();
  }

  componentDidUpdate(): void {
    this.renderTimeAgo();
  }

  renderTimeAgo(): void {
    const { live, datetime, locale, opts } = this.props;
    // cancel all the interval
    cancel(this.dom);
    // if is live
    if (live !== false) {
      // live render
      this.dom.setAttribute('datetime', toDateTime(datetime));

      render(this.dom, locale, opts);
    }
  }

  // remove
  componentWillUnmount(): void {
    cancel(this.dom);
  }

  // for render
  render(): JSX.Element {
    const { datetime, live, locale, opts, ...others } = this.props;
    return (
      <time
        ref={(c): void => {
          this.dom = c as HTMLTimeElement;
        }}
        {...others}
      >
        {format(datetime, locale, opts)}
      </time>
    );
  }
}
