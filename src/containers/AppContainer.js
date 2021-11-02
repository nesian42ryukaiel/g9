import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import App from '../components/App';

/**
 * move page state to here, and leave only articles in main?
 */

function AppContainer() {
  const { currentPage } = useSelector(state => ({
    currentPage: state.pages.currentPage,
    // articles: state.pages.articles
  }));
  /**
   * functions go here
   */
  return (
    <App
    page={currentPage}
    />
  );
}

// 대충 원하는 component 수 만큼 각각 connect로 연결하기
export default AppContainer;
