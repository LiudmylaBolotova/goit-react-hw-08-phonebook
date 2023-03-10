import { useAuth } from '../../hooks/useAuth';

const User = () => {
  const { user } = useAuth();

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default User;
