'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var color = _styledSystem.styles.color,
    borders = _styledSystem.styles.borders,
    rest = (0, _objectWithoutProperties3.default)(_styledSystem.styles, ['color', 'borders']);

var css = function css(props) {
  return props.css;
};
var themed = function themed(key) {
  return function (props) {
    return props.theme[key];
  };
};
var Box = (0, _styledComponents2.default)('div').apply(undefined, (0, _toConsumableArray3.default)(Object.values(rest)).concat([themed('Box'), css]));
exports.default = Box;