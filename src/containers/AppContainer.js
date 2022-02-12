import React from "react";
import { useSelector, useDispatch } from "react-redux";
import App from "../components/App";
import { movePage } from "../modules/pages";

function AppContainer() {
  const { currentPage } = useSelector((state) => ({
    currentPage: state.pages.currentPage,
  }));
  const dispatch = useDispatch();
  const move = (page) => dispatch(movePage(page));
  return <App page={currentPage} move={move} />;
}

// 대충 원하는 component 수 만큼 각각 connect로 연결하기
export default AppContainer;
