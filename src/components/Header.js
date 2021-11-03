import React from 'react';
import LoginButton from './LoginButton';
import SignupButton from './SignupButton';
// import MemberInput from './MemberInput';

function Header() {
  return (
    <header className='Header'>
      <span id="header__left">
        <span>三</span>
        <span>G9</span>
      </span>
      <span id="header__middle">
        <span>Options</span>
        <span>
          <input type="text" placeholder="Search" />
        </span>
      </span>
      <span id="header__right">
        <LoginButton />
        <SignupButton />
      </span>
    </header>
  );
}

export default Header;
