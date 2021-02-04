import styled, { css } from 'styled-components';
import searchIcon from 'assets/icons/search.svg';

const Input = styled.input`
  padding: 14px 20px;
  font-family: 'Montserrat', sans-serif;
  border: 2px solid ${({ theme }) => theme.color.borderGreen};
  transition: all 0.2s;
  touch-action: manipulation;
  width: 100%;

  ${({ search }) =>
    search &&
    css`
      background: url(${searchIcon}) 10px 45% / 22px no-repeat;
      padding: 14px 10px 14px 45px;
      border-radius: 10px;
    `}

  &:placeholder-shown + label {
    transform: translateY(1.4rem);
    font-size: initial;
  }

  &:not(placeholder-shown) + label, /* filled input not focused */
  &:focus + label {
    transform: translateY(2px);
    font-size: 1rem;
  }

  &::placeholder {
    opacity: 0;
    transition: inherit;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 3px 1px lightblue;

    &::placeholder {
      opacity: 1;
    }
  }
`;

export default Input;
