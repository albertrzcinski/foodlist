import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';

const ButtonIcon = styled.button`
  display: block;
  border: none;
  width: 46px;
  height: 46px;
  border-radius: 50px;
  background: url(${({ icon }) => icon}) 50% 50% / 60% no-repeat,
    linear-gradient(180deg, #697e09 0%, #a4c608 100%);
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    background: url(${({ icon }) => icon}) 50% 50% / 60% no-repeat,
      ${({ theme }) => lighten(0.2, theme.color.lightGreen)};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 4px 3px lightblue;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      width: 70px;
      height: 70px;
      border-radius: 10px;
      background: url(${({ icon }) => icon}) 50% 50% / 70% no-repeat,
        ${({ theme }) => theme.color.orange};

      &:hover {
        background: url(${({ icon }) => icon}) 50% 50% / 80% no-repeat,
          ${({ theme }) => darken(0.1, theme.color.orange)};
      }
    `}

  ${({ small }) =>
    small &&
    css`
      width: 30px;
      height: 30px;
    `}
`;

export default ButtonIcon;
