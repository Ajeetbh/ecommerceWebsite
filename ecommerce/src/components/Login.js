import React, { useState } from 'react';
import '../style/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleSubmit = (e) => {
    alert('Login Successful');
    e.preventDefault();
  }
  return (
    <div className="Login">
      <header className="Login-header">
        <form onSubmit={(e) => { handleSubmit(e) }}>
          <h3> Login Form </h3>
          <label>
            Email:
          </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="email" value={email} required onChange={(e) => { handleEmailChange(e) }} /><br />
          <label>
            Password:
          </label>
          <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br />
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}
export default Login;


