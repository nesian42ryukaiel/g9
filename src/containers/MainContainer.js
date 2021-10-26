import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Main from "../components/Main";
import { movePage } from "../modules/pages";

function MainContainer() {
  const { page, articles } = useSelector(state => ({
    page: state.pages.page,
    articles: state.pages.articles
  }));
  /**
   * functions go here
   */
  return (
    <Main
    page={page}
    articles={articles}
    />
  );
}

export default MainContainer;
