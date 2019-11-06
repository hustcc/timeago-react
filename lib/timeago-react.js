"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _timeago = require("timeago.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TimeAgo =
/*#__PURE__*/
function (_Component) {
  _inherits(TimeAgo, _Component);

  function TimeAgo(props) {
    var _this;

    _classCallCheck(this, TimeAgo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TimeAgo).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "dom", void 0);

    _this.dom = null;
    return _this;
  } // first add


  _createClass(TimeAgo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // fixed #6 https://github.com/hustcc/timeago-react/issues/6
      // to reduce the file size.
      // const { locale } = this.props;
      // if (locale !== 'en' && locale !== 'zh_CN') {
      //   timeago.register(locale, require('timeago.js/locales/' + locale));
      // }
      // render it.
      this.renderTimeAgo();
    } // update

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.renderTimeAgo();
    }
  }, {
    key: "renderTimeAgo",
    value: function renderTimeAgo() {
      var _this$props = this.props,
          live = _this$props.live,
          datetime = _this$props.datetime,
          locale = _this$props.locale; // cancel all the interval

      (0, _timeago.cancel)(this.dom); // if is live

      if (live !== false) {
        // live render
        var dateString = datetime instanceof Date ? datetime.getTime() : datetime;
        this.dom.setAttribute("datetime", dateString);
        (0, _timeago.render)(this.dom, locale);
      }
    } // remove

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _timeago.cancel)(this.dom);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          datetime = _this$props2.datetime,
          live = _this$props2.live,
          locale = _this$props2.locale,
          className = _this$props2.className,
          style = _this$props2.style,
          others = _objectWithoutProperties(_this$props2, ["datetime", "live", "locale", "className", "style"]);

      return _react["default"].createElement("time", _extends({
        ref: function ref(r) {
          _this2.dom = r;
        },
        className: className || "",
        style: style
      }, others), (0, _timeago.format)(datetime, locale || "en"));
    }
  }]);

  return TimeAgo;
}(_react.Component);

_defineProperty(TimeAgo, "defaultProps", {
  live: true,
  locale: "en"
});

var _default = TimeAgo;
exports["default"] = _default;