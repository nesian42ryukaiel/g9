import React from 'react';
import LoginButton from './LoginButton';
import MemberInput from './MemberInput';
import SignupButton from './SignupButton';

export default function SignupScreen() {
  return (
    <main>
      <div>
        <MemberInput />
      </div>
      <div>
        <span>
          <LoginButton />
          <SignupButton />
        </span>
      </div>
    </main>
  );
}