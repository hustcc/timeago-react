import React, { RefObject, TimeHTMLAttributes, useEffect, useRef } from "react";
import { format, render, cancel } from "timeago.js";

export interface Props {
  datetime: string | Date | number;
  live?: boolean;
  locale?: string;
  className?: string;
  style?: object;
}

const TimeAgo = (props: Props) => {
  const { datetime, live, locale, className, style, ...others } = props;

  const dom: RefObject<HTMLElement> = useRef();

  useEffect(() => {
    renderTimeAgo();
    return () => cancel(dom.current);
  }, []);

  useEffect(() => {
    renderTimeAgo();
  }, [props]);

  const renderTimeAgo = () => {
    // cancel all the interval
    cancel(dom.current);
    // if is live
    if (live !== false) {
      // live render
      const dateString =
        datetime instanceof Date ? datetime.getTime() : datetime;
      dom.current.setAttribute("datetime", String(dateString));
      render(dom.current, locale || 'en');
    }
  };
  return (
    <time ref={dom} className={className || ""} style={style} {...others}>
      {format(datetime, locale || 'en')}
    </time>
  );
};

export default TimeAgo;
