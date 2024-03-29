import { useAuth } from '../../hooks/useAuth';
import backGroundUser from '../../components/Images/backGroundUser.jpg';
import { StyledSection, StyledUser, ItemUser } from './User.styled';
import Avatar from 'react-avatar';

const User = () => {
  const { user } = useAuth();

  return (
    <StyledSection
      style={{
        width: '850px',
        height: '668px',
        backgroundImage: `url(${backGroundUser})`,
      }}
    >
      <StyledUser>
        <Avatar name={user.name} round={true} />
        <ItemUser>Name: {user.name}</ItemUser>
        <ItemUser>Email: {user.email}</ItemUser>
      </StyledUser>
    </StyledSection>
  );
};

export default User;
