import React from 'react';
import LoginButton from './LoginButton';
import SignupButton from './SignupButton';
// import MemberInput from './MemberInput';

function Header() {
  return (
    <header>
      <span id="header_left">
        <span>三</span>
        <span>G9</span>
      </span>
      <span id="header_middle">
        <span>Options</span>
        <span>
          <input type="text" placeholder="Search" />
        </span>
      </span>
      <span id="header_right">
        <LoginButton />
        <SignupButton />
      </span>
    </header>
  );
}

export default Header;
