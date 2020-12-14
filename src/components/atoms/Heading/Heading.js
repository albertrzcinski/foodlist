import styled from 'styled-components';

const Heading = styled.h1`
  font-weight: ${({ medium, theme }) =>
    medium ? theme.fontWeight.medium : theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.size.m};
`;

export default Heading;
