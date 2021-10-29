import React from 'react';
// import MemberInput from './MemberInput';
// import LoginButton from './LoginButton';
// import SignupButton from './SignupButton';

export default function SignupScreen({
  loggedin, id, password, members,
  onInputID, onInputPass, onLogin, onSignup}) {
  const onChangeUserID = e => {
    onInputID(e.target.value);
  }
  const onChangeUserPW = e => {
    onInputPass(e.target.value);
  }
  const onClickLogin = () => {
    onLogin();
  }
  const onClickSignup = () => {
    onSignup();
  }
  return (
    <main className='SignupScreen centralize corefunc'>
      <div className='signup__memberInput'>
        <div>
          <input
          type='text' className='user_id--input'
          placeholder='ID' onChange={onChangeUserID}
          />
        </div>
        <div>
          <input
          type='password' className='password--input'
          placeholder='Password' onChange={onChangeUserPW}
          />
        </div>
      </div>
      <div className='memberInput'>
        <span>
          <button className='login--button'
          onClick={onClickLogin}>Login</button>
          <button className="signup--button"
          onClick={onClickSignup}>Sign-up</button>
        </span>
      </div>
    </main>
  );
}