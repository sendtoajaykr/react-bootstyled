import styled from 'styled-components';
import PropTypes from 'prop-types';
import Box, { propTypes } from './Box';
import media from '../util/media';
function percentage(val) {
  return (100 * val) / 12 + '%';
}

const Col = styled(Box)`
flex: 0 0 100%;
max-width: 100%;
${media.phone`
  ${({ xs }) =>
    xs &&
    `
    flex: 0 0 ${percentage(xs)};
    max-width: ${percentage(xs)};
  `}
`}
${media.tablet`
  ${({ sm }) =>
    sm &&
    `
    flex: 0 0 ${percentage(sm)};
    max-width: ${percentage(sm)};
  `}
  ${({ offsetSm }) =>
    offsetSm &&
    `
    margin-left: ${percentage(offsetSm)};
  `}
`}
${media.desktop`
  ${({ md }) =>
    md &&
    `
    flex: 0 0 ${percentage(md)};
    max-width: ${percentage(md)};
  `}
  ${({ offsetMd }) =>
    offsetMd &&
    `
    margin-left: ${percentage(offsetMd)};
  `}
`}
${media.large`
  ${({ lg }) =>
    lg &&
    `
    flex: 0 0 ${percentage(lg)};
    max-width: ${percentage(lg)};
  `}
  ${({ offsetLg }) =>
    offsetLg &&
    `
    margin-left: ${percentage(offsetLg)};
  `}
`}
`;

Col.defaultProps = {
  position: 'relative',
  width: 1,
  minHeight: '1px',
  pr: '15px',
  pl: '15px'
};

Col.propTypes = {
  ...propTypes,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  offsetSm: PropTypes.number,
  offsetXs: PropTypes.number,
  offsetMd: PropTypes.number,
  offsetLg: PropTypes.number
};

export default Col;
