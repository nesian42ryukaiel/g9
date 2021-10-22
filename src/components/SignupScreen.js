import React from 'react';
import LoginButton from './LoginButton';
// import MemberInput from './MemberInput';
import SignupButton from './SignupButton';

export default function SignupScreen() {
  return (
    <main>
      <div className='signup__memberInput'>
        <div>
          <input
          type='text' className='user_id--input'
          placeholder='ID' // onChange={(e) => store.dispatch(inputID(e.target.value))}
          />
        </div>
        <div>
          <input
          type='text' className='password--input'
          placeholder='Password' // onChange={(e) => store.dispatch(inputPass(e.target.value))}
          />
        </div>
      </div>
      <div className='memberInput'>
        <span>
          <LoginButton />
          <SignupButton />
        </span>
      </div>
    </main>
  );
}