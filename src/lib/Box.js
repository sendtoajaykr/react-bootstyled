import styled from 'styled-components';
import { styles } from 'styled-system';
const { color, borders, ...rest } = styles;
const css = props => props.css;
const themed = key => props => props.theme[key];
const Box = styled('div')(...Object.values(rest), themed('Box'), css);
export default Box;