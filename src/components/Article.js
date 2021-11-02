import React from 'react';

function Article({key, title, image, text}) {
  // const pic = require(image);
  // so far no usage for key
  return(
    <article>
      <div className="article__title">{title}</div>
      <div className="article__image">
        <img src={image} />
      </div>
      <div className="article__text">{text}</div>
    </article>
  );
}

export default Article;
