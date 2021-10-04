import React, {Component} from 'react';

function Nav() {
  return (
    <nav>
      <div>
        <button className="signup--button">Sign-up</button>
      </div>
      <div>
        Others
      </div>
    </nav>
  );
}

// class Nav extends Component {
//   render() {
//     return (
//       <nav>
//         <div>
//           <button>Sign-up</button>
//         </div>
//         <div>Others</div>
//       </nav>
//     );
//   }
// }

export default Nav;
