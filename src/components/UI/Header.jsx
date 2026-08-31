import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../styles/Header.css';
import { useAuthContext } from '../../context/AuthContext';

export default function Header() {
  const navigate = useNavigate();
  const authCtx = useAuthContext();

  return (
    <header className="header">
      <h1 onClick={() => navigate('/')}>Mzip</h1>
      <div className="menu">
        {authCtx.isAuth && <><button className="btn-alt" onClick={authCtx.setLogOut}>
          로그아웃
        </button>
        <button className="btn" onClick={() => navigate('/new-restaurant')}>
          제보하기
        </button>
        </>}
        {!authCtx.isAuth && <button className="btn-alt" onClick={() => navigate('/login')}>
          로그인
        </button>}
      </div>
    </header>
  );
}
