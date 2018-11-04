import styled from 'styled-components';
import Box, { propTypes } from './Box';
import Row from './Row';
const Container = styled(Box)`
  ${Row} {
    margin-right: -15px;
    margin-left: -15px;
  }
`;

Container.defaultProps = {
  width: '100%',
  pr: '15px',
  pl: '15px',
  mr: 'auto',
  ml: 'auto',
  maxWidth: ['', 540, 720, 960, 1140]
};

Container.propTypes = propTypes;

export default Container;
