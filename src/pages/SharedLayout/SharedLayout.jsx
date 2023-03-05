import { Outlet } from 'react-router-dom';

import { AppBar } from '../../components/AppBar/AppBar';
import { Suspense } from 'react';
import { Container } from 'components/App/App.styled';

const SharedLayout = () => {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
