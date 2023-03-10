import { useAuth } from 'hooks/useAuth';
import { Nav, ItemsLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <ItemsLink to="/">Home</ItemsLink>

      {isLoggedIn && <ItemsLink to="/contacts">Contacts</ItemsLink>}
    </Nav>
  );
};
