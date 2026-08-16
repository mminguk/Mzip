import '../../styles/Header.css';

import { Link, useNavigate } from 'react-router-dom';

export default function Header({ openModal }) {
  const navigate = useNavigate();
  return (
    <header className="header">
      <h1 onClick={()=>navigate("/")}>Mzip</h1>

      <div className="menu">
        <button onClick={openModal}>로그인</button>
        {/* <button>가입</button> */}
        <Link to="/new-restaurant">제보하기</Link>
      </div>
    </header>
  );
}
