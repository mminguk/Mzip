import '../../styles/Header.css';

import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 onClick={() => navigate('/')}>Mzip</h1>

      <div className="menu">
        <button onClick={() => navigate('/login')}>로그인</button>
        {/* <button>가입</button> */}
        <button onClick={() => navigate('/new-restaurant')}>제보하기</button>
      </div>
    </header>
  );
}
