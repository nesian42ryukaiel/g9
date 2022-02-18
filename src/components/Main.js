import React from "react";
import Article from "./Article";

function Main({ articles, loggedin, move }) {
  const revart = articles.length > 0 ? articles.slice().reverse() : [];
  const newPost = () => {
    move("upload");
  };
  return (
    <main className="Main corefunc">
      <div className="access_uploader" style={{ outline: "solid 1px white" }}>
        {loggedin ? (
          <button style={{ width: "100%" }} onClick={newPost}>
            POST
          </button>
        ) : (
          <p style={{ textAlign: "center" }}>Welcome to G9!</p>
        )}
      </div>
      {revart.map((object, i) => (
        <Article
          key={i}
          title={object.title}
          image={object.image}
          text={object.text}
          location="Main__articles"
        />
      ))}
    </main>
  );
}

export default Main;
