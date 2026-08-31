import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/Login.css';

function Login() {
  const [loginCheck, setLoginCheck] = useState(false);
  const userId = useRef();
  const password = useRef();

  const loginHandler = async (event) => {
    event.preventDefault();

    const enteredUserId = userId.current.value;
    const enteredPassword = password.current.value;
    let response;
    try {
      response = await fetch('http://localhost:3000', {
        method: 'POST',
        body: JSON.stringify({
          userid: enteredUserId,
          password: enteredPassword
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      throw new Error({ message: error });
    }

    if(response.status === 200) {

    }
  }

  return (
    <>
      <div className="login-page">
        <div className="login-box">
          <h1 className="logo">Mzip</h1>
          <h2 className="title">로그인</h2>
          <form>
            <div className="input-group">
              <label htmlFor="userid">아이디</label>
              <input
                type="text"
                id="userid"
                name="userid"
                placeholder="아이디를 입력하세요"
                ref={userId}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호를 입력하세요"
                ref={password}
              />
            </div>
            <div className="signup-link">
              계정이 없으신가요? <Link to="/signup">회원가입</Link>
            </div>
            <button type="submit" className="login-btn">
              로그인
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
