import React from "react";

function Article({ title, image, text, location }) {
  // const pic = require(image);
  // so far no usage for key
  return (
    <article className="Article">
      {location === "Main__articles" || location === "main__articles" ? (
        <div className="Article__title">{title}</div>
      ) : (
        <></>
      )}
      <div className="Article__imageBox">
        <img
          src={image}
          className={`Article__image ${location}`}
          alt="the main dish"
        />
      </div>
      {location === "Main__articles" || location === "main__articles" ? (
        <div className="article__text">{text}</div>
      ) : (
        <></>
      )}
    </article>
  );
}

export default Article;
