import styled from 'styled-components';
import { styles } from '../util/styles';
const { color, borders, ...rest } = styles;
const css = props => props.css;
const themed = key => props => props.theme[key];
const Box = styled('div')(...Object.values(rest), themed('Box'), css);
function showProps(obj) {
  let nea = {};
  for (var i in obj) {
    nea = {
      ...nea,
      ...obj[i].propTypes
    };
  }
  return nea;
}
Box.propTypes = showProps(rest);
export default Box;
