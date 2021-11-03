import React from 'react';
import SignupButton from './SignupButton';

function Nav() {
  return (
    <nav className='Nav'>
      <div>
        <SignupButton />
      </div>
      <div>
        Others
      </div>
    </nav>
  );
}

export default Nav;
