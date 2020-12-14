import styled, { css } from 'styled-components';
import { lighten } from 'polished';

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

  &:hover {
    background: ${({ theme }) => lighten(0.05, theme.color.lightGreen)};
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background: ${({ theme }) => theme.color.aquamarine};

      &:hover {
        background: ${({ theme }) => lighten(0.08, theme.color.aquamarine)};
      }
    `}
`;

export default Button;
