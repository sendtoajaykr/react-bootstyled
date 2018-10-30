import styled from 'styled-components';
import Box from "./Box";
const Badge = styled(Box)``;

Badge.defaultProps = {
  as: 'span',
  display: 'inline-block',
  p: '.25em .4em',
  fontSize: '75%',
  fontWeight: 700,
  lineHeight: 1,
  textAlign: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 'baseline',
  border: '1px solid rgba(0,0,0,0.05)',
  borderRadius: '.25rem'
}

export default Badge