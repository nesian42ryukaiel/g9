import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
import { movePage } from "../modules/pages";
import { mediaToggle } from "../modules/media";

function HeaderContainer() {
  const { loggedin, id } = useSelector((state) => ({
    loggedin: state.membership.mlogin,
    id: state.membership.mid,
  }));
  const dispatch = useDispatch();
  const onMovePage = (page) => dispatch(movePage(page));
  const toggle = () => dispatch(mediaToggle());
  return (
    <Header
      loggedin={loggedin}
      id={id}
      moveFunc={onMovePage}
      swapcolor={toggle}
    />
  );
}

export default HeaderContainer;
