'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _timeago = require('timeago.js');

var _timeago2 = _interopRequireDefault(_timeago);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimeAgo = function (_React$Component) {
  _inherits(TimeAgo, _React$Component);

  function TimeAgo(props) {
    _classCallCheck(this, TimeAgo);

    var _this = _possibleConstructorReturn(this, (TimeAgo.__proto__ || Object.getPrototypeOf(TimeAgo)).call(this, props));

    _this.timeagoInstance = null;
    return _this;
  }
  // first add


  _createClass(TimeAgo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // fixed #6 https://github.com/hustcc/timeago-react/issues/6
      // to reduce the file size.
      // const { locale } = this.props;
      // if (locale !== 'en' && locale !== 'zh_CN') {
      //   timeago.register(locale, require('timeago.js/locales/' + locale));
      // }
      // render it.
      this.renderTimeAgo();
    }
    // init instance

  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.timeagoInstance === null) this.timeagoInstance = (0, _timeago2['default'])();
    }
    // update

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.renderTimeAgo();
    }
  }, {
    key: 'renderTimeAgo',
    value: function renderTimeAgo() {
      var _props = this.props,
          live = _props.live,
          datetime = _props.datetime,
          locale = _props.locale;
      // cancel all the interval

      _timeago2['default'].cancel(this.timeagoDom);
      // if is live
      if (live !== false) {
        // live render
        if (datetime instanceof Date) {
          this.timeagoDom.setAttribute('datetime', datetime.getTime());
        } else {
          this.timeagoDom.setAttribute('datetime', datetime);
        }
        this.timeagoInstance.render(this.timeagoDom, locale);
      }
    }
    // remove

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _timeago2['default'].cancel(this.timeagoDom);
      this.timeagoInstance = null;
    }
    // for render

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          datetime = _props2.datetime,
          live = _props2.live,
          locale = _props2.locale,
          className = _props2.className,
          style = _props2.style,
          others = _objectWithoutProperties(_props2, ['datetime', 'live', 'locale', 'className', 'style']);

      return _react2['default'].createElement(
        'time',
        _extends({
          ref: function ref(c) {
            _this2.timeagoDom = c;
          },
          className: className || '',
          style: style
        }, others),
        this.timeagoInstance.format(datetime, locale)
      );
    }
  }]);

  return TimeAgo;
}(_react2['default'].Component);

exports['default'] = TimeAgo;
;

TimeAgo.propTypes = {
  datetime: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].instanceOf(Date), _propTypes2['default'].number]).isRequired, // date to be formated
  live: _propTypes2['default'].bool, // real time render.
  locale: _propTypes2['default'].string, // locale lang
  className: _propTypes2['default'].string, // class name
  style: _propTypes2['default'].object // style object
};

TimeAgo.defaultProps = {
  live: true,
  locale: 'en'
};