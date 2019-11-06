"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var timeago_js_1 = require("timeago.js");
var TimeAgo = /** @class */ (function (_super) {
    __extends(TimeAgo, _super);
    function TimeAgo(props) {
        var _this = _super.call(this, props) || this;
        _this.dom = null;
        return _this;
    }
    // first add
    TimeAgo.prototype.componentDidMount = function () {
        // fixed #6 https://github.com/hustcc/timeago-react/issues/6
        // to reduce the file size.
        // const { locale } = this.props;
        // if (locale !== 'en' && locale !== 'zh_CN') {
        //   timeago.register(locale, require('timeago.js/locales/' + locale));
        // }
        // render it.
        this.renderTimeAgo();
    };
    // update
    TimeAgo.prototype.componentDidUpdate = function () {
        this.renderTimeAgo();
    };
    TimeAgo.prototype.renderTimeAgo = function () {
        var _a = this.props, live = _a.live, datetime = _a.datetime, locale = _a.locale;
        if (this.dom !== null) {
            // cancel all the interval
            timeago_js_1.cancel(this.dom);
            // if is live
            if (live !== false) {
                // live render
                var dateString = datetime instanceof Date ? datetime.getTime() : datetime;
                this.dom.setAttribute("datetime", String(dateString));
                timeago_js_1.render(this.dom, locale);
            }
        }
    };
    // remove
    TimeAgo.prototype.componentWillUnmount = function () {
        if (this.dom !== null) {
            timeago_js_1.cancel(this.dom);
        }
    };
    TimeAgo.prototype.render = function () {
        var _this = this;
        var _a = this.props, datetime = _a.datetime, live = _a.live, locale = _a.locale, className = _a.className, style = _a.style, others = __rest(_a, ["datetime", "live", "locale", "className", "style"]);
        return (react_1.default.createElement("time", __assign({ ref: function (r) {
                _this.dom = r;
            }, className: className || "", style: style }, others), timeago_js_1.format(datetime, locale || "en")));
    };
    TimeAgo.defaultProps = {
        live: true,
        locale: "en"
    };
    return TimeAgo;
}(react_1.Component));
exports.default = TimeAgo;
