import React from 'react';
import LoginButton from './LoginButton';
import SignupButton from './SignupButton';
// import MemberInput from './MemberInput';

function Header() {
  return (
    <>
      <span className="header__left">
        <span>三</span>
        <span>G9</span>
      </span>
      <span className="header__middle">
        <span>Options</span>
        <span>
          <input type="text" placeholder="Search" />
        </span>
      </span>
      <span className="header__right">
        <LoginButton />
        <SignupButton />
      </span>
    </>
  );
}

export default Header;
