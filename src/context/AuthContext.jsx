import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  function setLogIn() {
    setIsAuth(true);
  }

  function setLogOut() {
    setIsAuth(false);
  }

  return (
    <AuthContext.Provider value={{ isAuth, setLogIn, setLogOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};

export default AuthContext;
