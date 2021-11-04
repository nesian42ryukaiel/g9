import React from 'react';

function Article({title, image, text, location}) {
  // const pic = require(image);
  // so far no usage for key
  return(
    <article className='Article'>
      {(location === 'main__articles')
      ? <div className="article__title">{title}</div>
      : <></>}
      <div className="article__image">
        <img src={image}
        className={`${location}`}
        alt='the main dish'
        />
      </div>
      {(location === 'main__articles')
      ? <div className="article__text">{text}</div>
      : <></>}
    </article>
  );
}

export default Article;
