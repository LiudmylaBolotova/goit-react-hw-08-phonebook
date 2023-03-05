import {ItemsLink} from './AuthNav.styled'


export const AuthNav = () => {
  return (
    <div>
      <ItemsLink to="/register">
        Register
      </ItemsLink>
      <ItemsLink to="/login">
        Log In
      </ItemsLink>
    </div>
  );
};
