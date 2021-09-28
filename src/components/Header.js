import React, {Component} from 'react';

class Header extends Component {
  render(){
    return (
      <header id="header">
        <span>三</span>
        <span>G9</span>
        <span>Search</span>
        <span>Options</span>
        <span>
          <button>Login</button>
        </span>
        <span>
          <button>Sign-up</button>
        </span>
      </header>
    );
  }
}

export default Header;
