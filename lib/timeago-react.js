'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _timeago = require('timeago.js');

var _timeago2 = _interopRequireDefault(_timeago);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TimeAgo = _react2['default'].createClass({
  displayName: 'TimeAgo',

  timeagoInstance: null,
  propTypes: {
    date: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.instanceOf(Date), _react2['default'].PropTypes.number]).isRequired, // date to be formated
    live: _react2['default'].PropTypes.bool, // real time render.
    local: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.object]), // local lang
    className: _react2['default'].PropTypes.string //  class name
  },
  // first add
  componentDidMount: function componentDidMount() {
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
      if (this.props.date instanceof Date) this.refs.timeagoDom.setAttribute('data-timeago', this.props.date.getTime());else this.refs.timeagoDom.setAttribute('data-timeago', this.props.date);
      this.timeagoInstance.render(this.refs.timeagoDom, this.props.local);
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
      'span',
      {
        ref: 'timeagoDom',
        className: this.props.className || '' },
      this.timeagoInstance.format(this.props.date, this.props.local)
    );
  }
});
exports['default'] = TimeAgo;