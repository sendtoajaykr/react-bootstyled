import styled from 'styled-components';
import Box from "./Box";
const Alert = styled(Box)``;

Alert.defaultProps = {
  position: 'relative',
  p: '.75rem 1.25rem',
  mb: '1rem',
  border: '1px solid rgba(0,0,0,0.1)',
  borderRadius: '.25rem'
}

export default Alert