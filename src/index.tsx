import React, { RefObject, Component, useRef, LegacyRef } from "react";
import { format, render, cancel } from "timeago.js";

interface Props {
  datetime: string | Date | number;
  live?: boolean;
  locale?: string;
  className?: string;
  style?: object;
}

export default class TimeAgo extends Component<Props> {
  static defaultProps = {
    live: true,
    locale: "en"
  };

  private dom: HTMLElement | null;

  constructor(props: Readonly<Props>) {
    super(props);
    this.dom = null;
  }

  // first add
  componentDidMount() {
    // fixed #6 https://github.com/hustcc/timeago-react/issues/6
    // to reduce the file size.
    // const { locale } = this.props;
    // if (locale !== 'en' && locale !== 'zh_CN') {
    //   timeago.register(locale, require('timeago.js/locales/' + locale));
    // }
    // render it.
    this.renderTimeAgo();
  }

  // update
  componentDidUpdate() {
    this.renderTimeAgo();
  }

  renderTimeAgo() {
    const { live, datetime, locale } = this.props;
    if (this.dom !== null) {
      // cancel all the interval
      cancel(this.dom);
      // if is live
      if (live !== false) {
        // live render
        const dateString =
          datetime instanceof Date ? datetime.getTime() : datetime;
        this.dom.setAttribute("datetime", String(dateString));

        render(this.dom, locale);
      }
    }
  }

  // remove
  componentWillUnmount() {
    if (this.dom !== null) {
      cancel(this.dom);
    }
  }

  render() {
    const { datetime, live, locale, className, style, ...others } = this.props;
    return (
      <time
        ref={r => {
          this.dom = r;
        }}
        className={className || ""}
        style={style}
        {...others}
      >
        {format(datetime, locale || "en")}
      </time>
    );
  }
}
