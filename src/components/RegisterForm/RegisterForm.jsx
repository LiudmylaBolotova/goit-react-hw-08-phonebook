import { useDispatch } from 'react-redux';
import { signupUser } from 'redux/auth/userOperations';
import toast from 'react-hot-toast';
import { BtnForm, Form, InputForm, TitleForm } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (!name) {
      return toast.error('Enter your name!');
    }
    if (!email) {
      return toast.error('Enter your email!');
    }
    if (!password) {
      return toast.error('Enter your password!');
    }

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
