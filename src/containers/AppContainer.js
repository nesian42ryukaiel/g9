import React from "react";
import { useSelector, useDispatch } from "react-redux";
import App from "../components/App";
import { movePage } from "../modules/pages";
import {
  mediaColorR,
  mediaColorG,
  mediaColorB,
  mediaBrighten,
  mediaDarken,
} from "../modules/media";

function AppContainer() {
  const { currentPage, red, green, blue } = useSelector((state) => ({
    currentPage: state.pages.currentPage,
    red: state.media.mediaColorR,
    green: state.media.mediaColorG,
    blue: state.media.mediaColorB,
  }));
  const dispatch = useDispatch();
  const move = (page) => dispatch(movePage(page));
  const brighten = (lux) => dispatch(mediaBrighten(lux));
  const darken = (lux) => dispatch(mediaDarken(lux));
  return (
    <App
      page={currentPage}
      red={red}
      green={green}
      blue={blue}
      move={move}
      brighten={brighten}
      darken={darken}
    />
  );
}

// 대충 원하는 component 수 만큼 각각 connect로 연결하기
export default AppContainer;
