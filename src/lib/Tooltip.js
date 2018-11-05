import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Box, { propTypes } from './Box';

const TooltipText = styled(Box)`
  transition: opacity 0.6s;
  visibility: hidden;
  &:after {
    content: '';
    position: absolute;
    border-width: 5px;
    border-style: solid;
    border-color: ${props => props.bg}
  }
`;

const Tooltip = styled(Box)`
  ${({ placement }) => {
    if (placement === 'top') {
      return css`
        ${TooltipText} {
          bottom: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          &:after {
            top: 100%;
            left: 50%;
            margin-left: -5px;
            border-left-color: transparent;
            border-right-color: transparent;
            border-bottom-color: transparent;
          }
        }
      `;
    } else if (placement === 'right') {
      return css`
        ${TooltipText} {
          top: 50%;
          transform: translateY(-50%);
          left: calc(100% + 10px);
          &:after {
            top: 50%;
            right: 100%;
            margin-top: -5px;
            border-top-color: transparent;
            border-left-color: transparent;
            border-bottom-color: transparent;
          }
        }
      `;
    } else if (placement === 'left') {
      return css`
        ${TooltipText} {
          top: 50%;
          transform: translateY(-50%);
          bottom: auto;
          right: calc(100% + 10px);

          &:after {
            top: 50%;
            left: 100%;
            margin-top: -5px;
            border-top-color: transparent;
            border-right-color: transparent;
            border-bottom-color: transparent;
          }
        }
      `;
    } else if (placement === 'bottom') {
      return css`
        ${TooltipText} {
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          &:after {
            bottom: 100%;
            left: 50%;
            margin-left: -5px;
            border-top-color: transparent;
            border-right-color: transparent;
            border-left-color: transparent;
          }
        }
      `;
    }
  }} &:hover {
    ${TooltipText} {
      visibility: visible;
      opacity: 1;
    }
  }
`;

TooltipText.defaultProps = {
  position: 'absolute',
  maxWidth: '120px',
  bg: '#555',
  color: '#fff',
  textAlign: 'center',
  p: '5px 10px',
  borderRadius: '6px',
  zIndex: 1,
  opacity: 0
};

Tooltip.defaultProps = {
  position: 'relative',
  display: 'inline-block',
  maxWidth: '120px',
  placement: 'top'
};

Tooltip.propTypes = {
  ...propTypes,
  placement: PropTypes.oneOf(['top', 'left', 'right', 'bottom']).isRequired,
  children: PropTypes.node.isRequired
};

Tooltip.Text = TooltipText;

export default Tooltip;
