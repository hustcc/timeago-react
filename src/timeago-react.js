import React from 'react';
import timeago from 'timeago.js';

const TimeAgo = React.createClass({
  timeagoInstance: null,
  propTypes: {
    datetime: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.instanceOf(Date), React.PropTypes.number]).isRequired,  // date to be formated
    live: React.PropTypes.bool,               // real time render.
    locale: React.PropTypes.string,            // locale lang
    localeFunc: React.PropTypes.func,          // custome locale function
    className: React.PropTypes.string         //  class name
  },
  getDefaultProps() {
    return {live: true, locale: 'en'};
  },
  // first add
  componentDidMount() {
    if (this.props.locale !== 'en' && this.props.locale !== 'zh_CN') {
      if (localeFunc) {
        timeago.register(this.props.locale, localeFunc);
      } else {
        timeago.register(this.props.locale, require('timeago.js/locales/' + this.props.locale));
      }
    }

    this.renderTimeAgo();
  },
  // init instance
  componentWillMount() {
    if (this.timeagoInstance === null)
      this.timeagoInstance = timeago();
  },
  // update
  componentDidUpdate() {
    this.renderTimeAgo();
  },
  renderTimeAgo() {
    // cancel all the interval
    this.timeagoInstance.cancel();
    // if is live
    if (this.props.live !== false) {
      // live render
      if (this.props.datetime instanceof Date)
        this.refs.timeagoDom.setAttribute('datetime', this.props.datetime.getTime());
      else 
        this.refs.timeagoDom.setAttribute('datetime', this.props.datetime);
      this.timeagoInstance.render(this.refs.timeagoDom, this.props.locale);
    }
  },
  // remove
  componentWillUnmount() {
    this.timeagoInstance.cancel();
    this.timeagoInstance = null;
  },
  render() {
    // for render
    return (
      <time 
        ref='timeagoDom'
        className={this.props.className || ''}>
          {this.timeagoInstance.format(this.props.datetime, this.props.locale)}
      </time>
    );
  }
});
module.exports = TimeAgo;
