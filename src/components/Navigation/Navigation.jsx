
import { useAuth } from 'hooks';
import {ItemsLink} from './Navigation.styled'

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <ItemsLink to="/contacts">My phonebook</ItemsLink>
      {isLoggedIn && <ItemsLink to="/contacts">Contacts</ItemsLink>}
    </nav>
  );
};

