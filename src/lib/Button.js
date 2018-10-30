import styled from 'styled-components';
import Box from './Box';

const Button = styled(Box)`
  user-select: none;
  appearance: button;
  cursor: ${props => props.cursor};
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
  border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover, :focus {
    outline: none;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      pointer-event: none;
      background-color: rgba(0, 0, 0, 0.05);
      border-radius: ${props => props.borderRadius};
    }
  }
`;

Button.defaultProps = {
  as: 'button',
  display: 'inline-block',
  p: '0.375rem 0.75rem',
  position: 'relative',
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: 1.5,
  textAlign: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  border: '1px solid rgba(0,0,0,0.1)',
  borderRadius: '0.25rem',
  cursor: 'pointer',
  bg: 'transparent'
};

export default Button;
