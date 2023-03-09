import {lazy, Suspense, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Loader from 'pages/Loader/Loader';
import { refreshUser } from 'redux/auth/userOperations';
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';

const SharedLayout = lazy(() => import('pages/SharedLayout/SharedLayout'));
const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [ dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Login />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toaster />
    </Suspense>
  );
};

export default App;
