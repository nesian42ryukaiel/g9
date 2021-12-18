import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import App from "../components/App";

function AppContainer() {
  const { currentPage } = useSelector(state => ({
    currentPage: state.pages.currentPage,
  }));
  return (
    <App
    page={currentPage}
    />
  );
}

// 대충 원하는 component 수 만큼 각각 connect로 연결하기
export default AppContainer;
