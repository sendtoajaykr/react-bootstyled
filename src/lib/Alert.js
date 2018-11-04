import styled from 'styled-components';
import Box, { propTypes } from './Box';
const Alert = styled(Box)``;

Alert.defaultProps = {
  position: 'relative',
  p: '.75rem 1.25rem',
  mb: '1rem',
  border: '1px solid rgba(0,0,0,0.1)',
  borderRadius: '.25rem'
};

Alert.propTypes = propTypes;

export default Alert;
