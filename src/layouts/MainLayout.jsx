import { Outlet } from 'react-router-dom';
import Footer from '../components/UI/Footer';

export default function MainLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
