import React from "react";
import Article from "./Article";

function Nav({ articles }) {
  let revart = articles.slice().reverse();
  return (
    <nav className="Nav">
      <div>
        <h4>Advertisement</h4>
      </div>
      <div>
        <h4>Featured Posts</h4>
        <div>
          <Article
            title={revart.length > 0 ? revart[0].title : "PH Title"}
            image={revart.length > 0 ? revart[0].image : "PH image"}
            text={revart.length > 0 ? revart[0].text : "PH text"}
            location="nav__featuredPosts"
          />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
