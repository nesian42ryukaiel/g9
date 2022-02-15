import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
import { movePage } from "../modules/pages";
import { mediaToggle } from "../modules/media";

function HeaderContainer() {
  const { loggedin, id, isdarkmode } = useSelector((state) => ({
    loggedin: state.membership.mlogin,
    id: state.membership.mid,
    isdarkmode: state.media.darkmode,
  }));
  const dispatch = useDispatch();
  const onMovePage = (page) => dispatch(movePage(page));
  return <Header loggedin={loggedin} id={id} moveFunc={onMovePage} />;
}

export default HeaderContainer;
