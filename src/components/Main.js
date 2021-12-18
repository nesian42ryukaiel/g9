import React from "react";
import Article from "./Article";

function Main({ articles, loggedin, move }) {
  let revart = articles.slice().reverse();
  const newPost = () => {
    move("upload");
  }
  return (
    <main className="corefunc Main">
      <div className="access_uploader">
        {loggedin
        ? <button style={{width: "100%"}} onClick={newPost}>POST</button>
        : <p style={{textAlign: "center"}}>Welcome to G9!</p>}
      </div>
      {revart.map((object, i) => 
      <Article key={i} title={object.title}
      image={object.image} text={object.text}
      location="main__articles"
      />)}
    </main>
  );
}

export default Main;
