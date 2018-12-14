import React from 'react';
import PropTypes from 'prop-types';
import { format, render, cancel } from 'timeago.js';

export default class TimeAgo extends React.Component {
  constructor(props) {
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
    // cancel all the interval
    cancel(this.dom);
    // if is live
    if (live !== false) {
      // live render
      const dateString = datetime instanceof Date ? datetime.getTime() : datetime;
      this.dom.setAttribute('datetime', dateString);

      render(this.dom, locale);
    }
  }

  // remove
  componentWillUnmount() {
    cancel(this.dom);
  }

  // for render
  render() {
    const { datetime, live, locale, className, style, ...others } = this.props;
    return (
      <time
        ref={(c) => { this.dom = c }}
        className={className || ''}
        style={style}
        {...others}
      >
        {format(datetime, locale)}
      </time>
    );
  }
};

TimeAgo.propTypes = {
  datetime: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
    PropTypes.number
  ]).isRequired,  // date to be formated
  live: PropTypes.bool,        // real time render.
  locale: PropTypes.string,    // locale lang
  className: PropTypes.string, // class name
  style: PropTypes.object      // style object
};

TimeAgo.defaultProps = {
  live: true,
  locale: 'en'
};
