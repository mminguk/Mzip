import Header from '../UI/Header';

import '../../styles/Signup.css';

function Signup() {
  async function submitHandler(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: event.target.email.value,
        userid: event.target.userid.value,
        password: event.target.password.value,
        confirmPassword: event.target.confirmPassword.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    await response.json();
  }

  return (
    <>
      <Header />
      <div className="signup-page">
        <div className="signup-box">
          <h1 className="logo">Mzip</h1>

          <h2 className="title">회원가입</h2>

          <form onSubmit={submitHandler}>
            <div className="input-group">
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="이메일을 입력해주세요..."
              />
            </div>

            <div className="input-group">
              <label htmlFor="userid">아이디</label>
              <input
                type="text"
                id="userid"
                name="userid"
                placeholder="아이디를 입력해주세요..."
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호를 입력해주세요..."
              />
            </div>

            <div className="input-group">
              <label htmlFor="confirmPassword">비밀번호 확인</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="비밀번호를 다시 입력해주세요..."
              />
            </div>

            <div className="agree">
              <input type="checkbox" id="agree" />

              <label htmlFor="agree">약관에 동의합니다.</label>
            </div>

            <button type="submit" className="signup-btn">
              가입하기
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
