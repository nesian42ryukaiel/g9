import React, {Component} from 'react';
import Article from './Article';

function Main() {
  return (
    <main>
      <Article></Article>
      <Article></Article>
      <Article></Article>
      <Article></Article>
    </main>
  );
}

// class Main extends Component {
//   render() {
//     return (
//       <main>
//         <Article></Article>
//         <Article></Article>
//         <Article></Article>
//         <Article></Article>
//       </main>
//     );
//   }
// }

export default Main;
