import { ItemsLink, ListAuth } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <ListAuth>
      <ItemsLink to="/register">Register</ItemsLink>
      <ItemsLink to="/login">Log In</ItemsLink>
    </ListAuth>
  );
};
