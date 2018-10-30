'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  user-select: none;\n  appearance: button;\n  cursor: ', ';\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n  border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  &:hover, :focus {\n    outline: none;\n    &:after {\n      content: \'\';\n      position: absolute;\n      left: 0;\n      right: 0;\n      top: 0;\n      bottom: 0;\n      pointer-event: none;\n      background-color: rgba(0, 0, 0, 0.05);\n      border-radius: ', ';\n    }\n  }\n'], ['\n  user-select: none;\n  appearance: button;\n  cursor: ', ';\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n  border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  &:hover, :focus {\n    outline: none;\n    &:after {\n      content: \'\';\n      position: absolute;\n      left: 0;\n      right: 0;\n      top: 0;\n      bottom: 0;\n      pointer-event: none;\n      background-color: rgba(0, 0, 0, 0.05);\n      border-radius: ', ';\n    }\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = (0, _styledComponents2.default)(_Box2.default)(_templateObject, function (props) {
  return props.cursor;
}, function (props) {
  return props.borderRadius;
});

Button.defaultProps = {
  as: 'button',
  display: 'inline-block',
  p: '0.375rem 0.75rem',
  position: 'relative',
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: 1.5,
  textAlign: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  border: '1px solid rgba(0,0,0,0.1)',
  borderRadius: '0.25rem',
  cursor: 'pointer',
  bg: 'transparent'
};

exports.default = Button;