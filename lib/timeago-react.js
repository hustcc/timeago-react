'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _timeago = require('timeago.js');

var _timeago2 = _interopRequireDefault(_timeago);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TimeAgo = _react2['default'].createClass({
  displayName: 'TimeAgo',

  timeagoInstance: null,
  propTypes: {
    datetime: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.instanceOf(Date), _react2['default'].PropTypes.number]).isRequired, // date to be formated
    live: _react2['default'].PropTypes.bool, // real time render.
    locale: _react2['default'].PropTypes.string, // locale lang
    className: _react2['default'].PropTypes.string //  class name
  },
  getDefaultProps: function getDefaultProps() {
    return { live: true, locale: 'en' };
  },

  // first add
  componentDidMount: function componentDidMount() {
    if (this.props.locale !== 'en' && this.props.locale !== 'zh_CN') _timeago2['default'].register(this.props.locale, require('timeago.js/locales/' + this.props.locale));

    this.renderTimeAgo();
  },

  // init instance
  componentWillMount: function componentWillMount() {
    if (this.timeagoInstance === null) this.timeagoInstance = (0, _timeago2['default'])();
  },

  // update
  componentDidUpdate: function componentDidUpdate() {
    this.renderTimeAgo();
  },
  renderTimeAgo: function renderTimeAgo() {
    // cancel all the interval
    this.timeagoInstance.cancel();
    // if is live
    if (this.props.live !== false) {
      // live render
      if (this.props.datetime instanceof Date) this.refs.timeagoDom.setAttribute('datetime', this.props.datetime.getTime());else this.refs.timeagoDom.setAttribute('datetime', this.props.datetime);
      this.timeagoInstance.render(this.refs.timeagoDom, this.props.locale);
    }
  },

  // remove
  componentWillUnmount: function componentWillUnmount() {
    this.timeagoInstance.cancel();
    this.timeagoInstance = null;
  },
  render: function render() {
    // for render
    return _react2['default'].createElement(
      'time',
      {
        ref: 'timeagoDom',
        className: this.props.className || '' },
      this.timeagoInstance.format(this.props.datetime, this.props.locale)
    );
  }
});
module.exports = TimeAgo;