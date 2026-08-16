import '../../styles/Login.css';

function Login({ onClose }) {
  return (
    <div className="login-page">
      <button className="close" onClick={() => onClose(false)}>
        <span class="material-symbols-outlined">close</span>
      </button>
      <div className="login-box">
        <h1 className="logo">Mzip</h1>
        <h2 className="title">로그인</h2>
        <form>
          <div className="input-group">
            <label>ID</label>
            <input type="text" placeholder="아이디를 입력하세요" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="비밀번호를 입력하세요" />
          </div>
          <button className="login-btn">로그인</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
