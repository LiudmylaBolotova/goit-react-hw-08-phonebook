import { LogoutBtn, UserMail, StyledElement } from './UserMenu.styled';

export const UserMenu = () => {
  return (
    <StyledElement>
      <UserMail>mango@mail.com</UserMail>
      <LogoutBtn>Logout</LogoutBtn>
    </StyledElement>
  );
};
