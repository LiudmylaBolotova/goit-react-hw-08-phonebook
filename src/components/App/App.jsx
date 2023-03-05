// import { lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'pages/SharedLayout/SharedLayout';
import Contacts from 'pages/Contacts/Contacts';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import NotFound from 'pages/NotFound/NotFound';
// import { PrivateRoute } from '../PrivateRoute';
// import { RestrictedRoute } from '../RestrictedRoute';

// import { useAuth } from '../../hooks/useAuth';

// const SharedLayout = lazy(() => import('pages/SharedLayout/SharedLayout'));
// const Register = lazy(() => import('pages/Register/Register'));
// const Login = lazy(() => import('pages/Login/Login'));
// const Contacts = lazy(() => import('pages/Contacts/Contacts'));
// const NotFound = lazy(() => import('pages/NotFound/NotFound'));

const App = () => {
  // const dispatch = useDispatch();
  // const { currentUser } = useAuth();

  // useEffect(() => {
  //   dispatch(currentUser());
  // }, [currentUser, dispatch]);

  return (
   
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="contacts" element={<Contacts />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    
  );
};

export default App;
