import React from 'react';

function Header() {
  return (
    <header>
      <span id="header_left">
        <span>三</span>
        <span>G9</span>
      </span>
      <span id="header_middle">
        <span>Options</span>
        <span>Search</span>
      </span>
      <span id="header_right">
        <button>Login</button>
        <button className="signup--button">Sign-up</button>
      </span>
    </header>
  );
}

export default Header;
