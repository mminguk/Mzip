import { useNavigate } from 'react-router-dom';

import '../../styles/Header.css';

export default function Header() {
  const navigate = useNavigate();

  const token = sessionStorage.getItem('accessToken');

  async function logoutHandler() {
    const response = await fetch('http://localhost:3000/logout', {
      method: 'POST',
      body: JSON.stringify({
        message: '로그아웃'
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    sessionStorage.removeItem('accessToken');
    await response.json();
  }

  return (
    <header className="header">
      <h1 onClick={() => navigate('/')}>Mzip</h1>
      <div className="menu">
        {!token && <button className="btn-alt" onClick={() => navigate('/login')}>
          로그인
        </button>}
        {token && <>
          <button className="btn-alt" onClick={logoutHandler}>
          로그아웃
        </button>
        <button className="btn" onClick={() => navigate('/new-restaurant')}>
          제보하기
        </button>
        </>}
        
      </div>
    </header>
  );
}
