import { Link,useNavigate } from 'react-router-dom';

import '../../styles/Login.css';

function Login() {
  const navigate = useNavigate();
  async function loginHandler(event) {
    event.preventDefault();

    const response = await fetch('http://localhost:3000/login', {
      method:'POST',
      body: JSON.stringify({
        userid: event.target.userid.value,
        password: event.target.password.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const resData = await response.json();
    if(resData.accessToken) {
      sessionStorage.setItem('accessToken', resData.accessToken);

      navigate('/');
    }
    
  }
  return (
    <>
      <div className="login-page">
        <div className="login-box">
          <h1 className="logo">Mzip</h1>
          <h2 className="title">로그인</h2>
          <form onSubmit={loginHandler}>
            <div className="input-group">
              <label htmlFor="userid">아이디</label>
              <input
                type="text"
                id="userid"
                name="userid"
                placeholder="아이디를 입력하세요"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호를 입력하세요"
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
