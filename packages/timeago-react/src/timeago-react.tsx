import * as React from 'react';
import timeAgo from 'native-time-ago';

const toDateTime = (input: any): string => {
  return '' + (input instanceof Date ? input.getTime() : input);
};

export interface TimeAgoProps extends React.HTMLAttributes<HTMLTimeElement> {
  readonly datetime: any;
  readonly live?: boolean;
  readonly opts?: any; // Not supported in native-time-ago
  readonly locale?: string;
}

export default class TimeAgo extends React.PureComponent<TimeAgoProps, unknown> {
  static defaultProps = {
    live: false,
    className: '',
  };

  dom: HTMLTimeElement = null;
  intervalId: ReturnType<typeof setInterval> = null;

  componentDidMount(): void {
    this.renderTimeAgo();
  }

  componentDidUpdate(): void {
    this.renderTimeAgo();
  }

  renderTimeAgo(): void {
    const { live, datetime, locale } = this.props;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (live !== false) {
      this.dom.setAttribute('datetime', toDateTime(datetime));
      const update = () => {
        if (this.dom) {
          this.dom.textContent = timeAgo(datetime, locale || 'en');
        }
      };
      update();
      this.intervalId = setInterval(update, 60000);
    }
  }

  componentWillUnmount(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  render(): React.JSX.Element {
    const { datetime, live, locale, opts, ...others } = this.props;
    return (
      <time
        ref={(c): void => {
          this.dom = c as HTMLTimeElement;
        }}
        {...others}
      >
        {timeAgo(datetime, locale || 'en')}
      </time>
    );
  }
}
