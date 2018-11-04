import styled from 'styled-components';
import { styles } from '../util/styles';
const { borders, ...rest } = styles;
const css = props => props.css;
const themed = key => props => props.theme[key];
const Box = styled('div')(...Object.values(rest), themed('Box'), css);

function showProps(obj) {
  let props = {};
  for (var i in obj) {
    props = {
      ...props,
      ...obj[i].propTypes
    };
  }
  return props;
}

export const propTypes = showProps(rest);

Box.propTypes = propTypes;
export default Box;
