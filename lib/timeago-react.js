"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _timeago = require("timeago.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TimeAgo = function TimeAgo(props) {
  var datetime = props.datetime,
      live = props.live,
      locale = props.locale,
      className = props.className,
      style = props.style,
      others = _objectWithoutProperties(props, ["datetime", "live", "locale", "className", "style"]);

  var dom = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    renderTimeAgo();
    return function () {
      return (0, _timeago.cancel)(dom.current);
    };
  }, []);
  (0, _react.useEffect)(function () {
    renderTimeAgo();
  }, [props]);

  var renderTimeAgo = function renderTimeAgo() {
    // cancel all the interval
    (0, _timeago.cancel)(dom.current); // if is live

    if (live !== false) {
      // live render
      var dateString = datetime instanceof Date ? datetime.getTime() : datetime;
      dom.current.setAttribute("datetime", String(dateString));
      (0, _timeago.render)(dom.current, locale || 'en');
    }
  };

  return _react["default"].createElement("time", _extends({
    ref: dom,
    className: className || "",
    style: style
  }, others), (0, _timeago.format)(datetime, locale || 'en'));
};

var _default = TimeAgo;
exports["default"] = _default;