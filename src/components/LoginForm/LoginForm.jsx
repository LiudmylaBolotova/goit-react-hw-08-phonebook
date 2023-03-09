import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/auth/userOperations';
import { BtnForm, Form, InputForm, TitleForm } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      loginUser({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <TitleForm>
        Email
        <InputForm type="email" name="email" />
      </TitleForm>
      <TitleForm>
        Password
        <InputForm type="password" name="password" />
      </TitleForm>
      <BtnForm type="submit">Log In</BtnForm>
    </Form>
  );
};
