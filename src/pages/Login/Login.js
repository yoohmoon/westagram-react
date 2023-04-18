import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="mainWrapper">
      <main>
        <article className="loginContainer">
          <div>
            <h1 id="logo">Westagram</h1>
          </div>
          <form className="inputWrapper">
            <div>
              <input
                type="text"
                minLength="1"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
            </div>
            <div>
              <input type="password" minlength="1" placeholder="비밀번호" />
            </div>
            <div>
              <button>로그인</button>
            </div>
          </form>
          <a href="#">비밀번호를 잊으셨나요?</a>
        </article>
      </main>
    </div>
  );
}

export default Login;
