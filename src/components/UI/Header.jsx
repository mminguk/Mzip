import '../../styles/Header.css';

import { useNavigate } from 'react-router-dom';

export default function Header({ isLogin, onLogout }) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 onClick={() => navigate('/')}>Mzip</h1>
      <div className="menu">
        {!isLogin && (
          <button className="btn-alt" onClick={() => navigate('/login')}>
            로그인
          </button>
        )}
        {isLogin && (
          <>
            <button className="btn-alt" onClick={onLogout}>
              로그아웃
            </button>
            <button className="btn" onClick={() => navigate('/new-restaurant')}>
              제보하기
            </button>
          </>
        )}
      </div>
    </header>
  );
}
