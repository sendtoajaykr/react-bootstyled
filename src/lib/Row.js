import styled from 'styled-components';
import Box from "./Box";
const Row = styled(Box)``;

Row.defaultProps = {
  display: 'flex',
  flexWrap: 'wrap'
}

export default Row