import React from 'react';
import LoginButton from './LoginButton';
import SignupButton from './SignupButton';
// import MemberInput from './MemberInput';

function Header({moveFunc}) {
  const onClickMoveToLoginPage = () => {
    moveFunc('signup');
  }
  const onClickMoveToSignupPage = () => {
    console.log('Did you move to signup?');
    moveFunc('signup');
    console.log('You didn\'t move to signup');
  }
  return (
    <>
      <span className="header__left">
        <span className='hamburger'>🍔</span>
        <span className='header--logo'>G9</span>
      </span>
      <span className="header__middle">
        {/* <span>Options</span> */}
        <span>
          <input type="text" placeholder="Search" />
        </span>
      </span>
      <span className="header__right">
        <button className='login--button'
        onClick={onClickMoveToLoginPage}>Login</button>
        <button className='signup--button'
        onClick={onClickMoveToSignupPage}>Sign-up</button>
      </span>
    </>
  );
}

export default Header;
