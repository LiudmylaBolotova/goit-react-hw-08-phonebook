
import { useAuth } from 'hooks/useAuth';
import { ItemsLink } from './Navigation.styled';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <ItemsLink to="/">Home</ItemsLink>
     
      {isLoggedIn && <ItemsLink to="/contacts">Contacts</ItemsLink>}
    </nav>
  );
};



