import { useDispatch } from 'react-redux';
import { signupUser } from '../../redux/auth/userOperations';
import { BtnForm, Form, InputForm, TitleForm } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      signupUser({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <TitleForm>
        Username
        <InputForm type="text" name="name" />
      </TitleForm>
      <TitleForm>
        Email
        <InputForm type="email" name="email" />
      </TitleForm>
      <TitleForm>
        Password
        <InputForm type="password" name="password" />
      </TitleForm>
      <BtnForm type="submit">Register</BtnForm>
    </Form>
  );
};
