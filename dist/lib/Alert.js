'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)([''], ['']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Alert = (0, _styledComponents2.default)(_Box2.default)(_templateObject);

Alert.defaultProps = {
  position: 'relative',
  p: '.75rem 1.25rem',
  mb: '1rem',
  border: '1px solid rgba(0,0,0,0.1)',
  borderRadius: '.25rem'
};

exports.default = Alert;