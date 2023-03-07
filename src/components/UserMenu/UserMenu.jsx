import { LogoutBtn, UserName, StyledElement } from './UserMenu.styled';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/userOperations';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <StyledElement>
      <UserName>{user.name}</UserName>
      <LogoutBtn onClick={() => dispatch(logoutUser())}>Logout</LogoutBtn>
    </StyledElement>
  );
};
