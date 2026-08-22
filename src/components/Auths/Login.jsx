import { Link } from 'react-router-dom';

import Header from '../UI/Header';

import '../../styles/Login.css';

function Login() {
  return (
    <>
      <Header />

      <div className="login-page">
        <div className="login-box">
          <h1 className="logo">Mzip</h1>
          <h2 className="title">로그인</h2>
          <form>
            <div className="input-group">
              <label>아이디</label>
              <input type="text" placeholder="아이디를 입력하세요" />
            </div>
            <div className="input-group">
              <label>비밀번호</label>
              <input type="password" placeholder="비밀번호를 입력하세요" />
            </div>
            <div className="signup-link">
              계정이 없으신가요? <Link to="/signup">회원가입</Link>
            </div>
            <button className="login-btn">로그인</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
