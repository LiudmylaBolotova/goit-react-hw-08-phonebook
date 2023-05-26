import styled from 'styled-components';

export const StyledNotFound = styled.div`
  background-color: ${p => p.theme.colors.twoBackgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 700px;
`;

export const StyledNotification = styled.h1`
  color: ${p => p.theme.colors.notificationColor};
`;
