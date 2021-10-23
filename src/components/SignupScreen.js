import React from 'react';
// import MemberInput from './MemberInput';
// import LoginButton from './LoginButton';
// import SignupButton from './SignupButton';

export default function SignupScreen({
  loggedin, id, password, members,
  onInputID, onInputPass, onLogin, onSignup}) {
  const onChangeUserID = e => {
    // console.log(e.target.value);
    onInputID(e.target.value);
  }
  const onChangeUserPW = e => {
    onInputPass(e.target.value);
  }
  const onClickLogin = e => {
    onLogin();
  }
  const onClickSignup = e => {
    onSignup();
  }
  return (
    <main>
      <div className='signup__memberInput'>
        <div>
          <input
          type='text' className='user_id--input'
          placeholder='ID' onChange={onChangeUserID}
          />
        </div>
        <div>
          <input
          type='text' className='password--input'
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