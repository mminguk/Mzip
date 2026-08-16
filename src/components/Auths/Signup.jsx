import '../../styles/Signup.css';

function Signup() {
  return (
    <div className="signup-page">
      <div className="signup-box">
        <h1 className="logo">Mzip</h1>

        <h2 className="title">회원가입</h2>

        <form>
          <div className="input-group">
            <label>ID</label>
            <input type="text" placeholder="아이디를 입력하세요" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="비밀번호를 입력하세요" />
          </div>

          <div className="input-group">
            <label>Password 확인</label>
            <input type="password" placeholder="비밀번호를 다시 입력하세요" />
          </div>

          <div className="agree">
            <input type="checkbox" id="agree" />

            <label htmlFor="agree">약관에 동의합니다.</label>
          </div>

          <button className="signup-btn">가입하기</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
