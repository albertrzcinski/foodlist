import styled from 'styled-components';

const Notification = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  height: auto;
  padding: 0 15px;
  background: ${({ theme }) => theme.color.red};
  color: ${({ theme }) => theme.color.white};
`;

export default Notification;
