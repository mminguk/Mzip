import { Outlet } from 'react-router-dom';

import Header from '../components/UI/Header';
import Footer from '../components/UI/Footer';

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
