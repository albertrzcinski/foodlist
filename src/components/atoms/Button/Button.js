import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';

const Button = styled.button`
  display: block;
  border: none;
  width: auto;
  height: 45px;
  padding: 0 20px;
  border-radius: 10px;
  background: ${({ theme }) => theme.color.lightGreen};
  box-shadow: 0 4px 10px -4px ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.size.m};
  font-family: inherit;
  cursor: pointer;
  /* margin-bottom: 15px; */

  &:hover {
    background: ${({ theme }) => lighten(0.05, theme.color.lightGreen)};
  }

  ${({ secondary, theme }) =>
    secondary &&
    css`
      background: ${theme.color.aquamarine};

      &:hover {
        background: ${lighten(0.08, theme.color.aquamarine)};
      }
    `}

  ${({ tertiary, theme }) =>
    tertiary &&
    css`
      color: ${theme.color.white};
      background: ${theme.color.red};

      &:hover {
        background: ${darken(0.05, theme.color.red)};
      }
    `}
`;

export default Button;
