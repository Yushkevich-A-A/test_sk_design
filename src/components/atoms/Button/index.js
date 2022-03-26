import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  width: 100%;
  text-align: center;
  padding: 18px;
  border-radius: 8px;
  font-weight: 600;
  font-family: 'Open Sans';
  background-color: #0086A8;
  color: white;

  ${(props => {
      switch (props.mode) {
          case 'disable': 
            return css`
                background-color: #E3E3E3;
                color: #828282;
            `;
          case 'loading':
              return css`
              padding: 10px;

                @keyframes loading-animaton {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                } 
                &::after {
                  content: '';
                  display: inline-block;
                  animation: loading-animaton 3.3s linear infinite ;
                  box-sizing: border-box;
                  border-radius: 50%;
                  width: 30px;
                  height: 30px;
                  border: 2px solid white;
                  border-top-color: transparent;
                }
            `;
          default:
              return css`
              &:hover {
                  background-color: #007693;
              }

              &:active {
                background-color: #00657E;
              }
              `;
      }
  })}
`


function Button(props) {
  const { type, message } = props;

  return (
    <StyledButton mode={type}>{ message || type === 'loading' || 'кнопка'}</StyledButton>
  )
}

Button.propTypes = {
    type: PropTypes.string,
    message: PropTypes.string,
}

export default Button;