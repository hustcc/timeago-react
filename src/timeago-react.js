import React from 'react';
import timeago from 'timeago.js';

const TimeAgo = React.createClass({
  timeagoInstance: null,
  propTypes: {
    date: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.instanceOf(Date), React.PropTypes.number]).isRequired,  // date to be formated
    live: React.PropTypes.bool,               // real time render.
    local: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object]),            // local lang
    className: React.PropTypes.string         //  class name
  },
  // first add
  componentDidMount() {
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
      if (this.props.date instanceof Date)
        this.refs.timeagoDom.setAttribute('data-timeago', this.props.date.getTime());
      else 
        this.refs.timeagoDom.setAttribute('data-timeago', this.props.date);
      this.timeagoInstance.render(this.refs.timeagoDom, this.props.local);
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
      <span 
        ref='timeagoDom'
        className={this.props.className || ''}>
          {this.timeagoInstance.format(this.props.date, this.props.local)}
      </span>
    );
  }
});
export default TimeAgo;