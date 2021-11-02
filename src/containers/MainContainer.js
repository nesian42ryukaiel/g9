import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Main from "../components/Main";
import { movePage } from "../modules/pages";

function MainContainer() {
  const { articles } = useSelector(state => ({
    // page: state.pages.page,
    articles: state.pages.articles
  }));
  /**
   * functions go here
   */
  return (
    <Main
    articles={articles}
    />
  );
}

export default MainContainer;
