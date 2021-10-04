import React, {Component} from 'react';

function Article() {
  return(
    <article>
      <div className="article__title">Title</div>
      <div className="article__image">Image</div>
      <div className="article__text">Text</div>
    </article>
  );
}

// class Article extends Component {
//   render() {
//     return (
//       <article>
//         <div className="article__title">Title</div>
//         <div className="article__image">Image</div>
//         <div className="article__text">Text</div>
//       </article>
//     );
//   }
// }

export default Article;
