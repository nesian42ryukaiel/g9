import React from "react";
import { useSelector, useDispatch } from "react-redux";
import App from "../components/App";
import { movePage } from "../modules/pages";

function AppContainer() {
  const { currentPage, colorMode } = useSelector((state) => ({
    currentPage: state.pages.currentPage,
    colorMode: state.media.mediaColorMode,
  }));
  const dispatch = useDispatch();
  const move = (page) => dispatch(movePage(page));
  return <App page={currentPage} colormode={colorMode} move={move} />;
}

// 대충 원하는 component 수 만큼 각각 connect로 연결하기
export default AppContainer;
