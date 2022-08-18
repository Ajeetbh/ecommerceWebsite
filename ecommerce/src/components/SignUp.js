import React, { useState } from 'react';
import '../style/SignUp.css';

function SignUp() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  }
  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  }
  const handleSubmit = (e) => {
    if (password !== confPassword) {
      console.log("password Not Match");
    } else {
      alert('A form was submitted with Name :"' + name +
      '" ,Mobile :"' + mobile + '" and Email :"' + email + '"');
    }
    e.preventDefault();
  }
  
  return (
    <div className="Signup">
      <header className="Signup-header">
        <form onSubmit={(e) => { handleSubmit(e) }}>
          <h3> Sign-up Form </h3>
          <label >
            Name:
          </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="text" value={name} required onChange={(e)=> { handleChange(e) }} /><br /><br />
          <label>
            Email:
          </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="email" value={email} required onChange={(e) => { handleEmailChange(e) }} /><br /><br />
          <label>
            Password:
          </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br /><br />
          <label>
            Confirm Password:
          </label>
          <input type="password" value={confPassword} required onChange={(e) => { handleConfPasswordChange(e) }} /><br /><br />
          <label >
            Mobile:
          </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="text" value={mobile} required onChange={(e) => { handleMobileChange(e) }} /><br /><br />
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}
export default SignUp;

