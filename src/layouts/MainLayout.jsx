import { Outlet } from 'react-router-dom';

import Header from '../components/UI/Header';
import Footer from '../components/UI/Footer';
import { useEffect, useState } from 'react';

export default function MainLayout() {
  const [isLogin, setIsLogin] = useState(false);

  function loginHandler() {
    setIsLogin(true);
  }

  async function logoutHandler() {
    setIsLogin(false);
    const response = await fetch('http://localhost:3000', {
      method: 'POST',
      body: JSON.stringify({
        isAuth: isLogin,
      }),
    });
    await response.json();
  }

  useEffect(() => {
    fetch('http://localhost:3000/login')
      .then((response) => response.json())
      .then((data) => setIsLogin(data));
  }, []);
  return (
    <>
      <Header
        isLogin={isLogin}
        onLogin={loginHandler}
        onLogout={logoutHandler}
      />
      <Outlet />
      <Footer />
    </>
  );
}
