import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Nav from "../components/Nav";
// import { movePage } from "../modules/pages";

function NavContainer() {
  const { articles } = useSelector(state => ({
    articles: state.pages.articles
  }));
  /**
   * functions go here
   */
  return (
    <Nav
    articles={articles}
    />
  );
}

export default NavContainer;
