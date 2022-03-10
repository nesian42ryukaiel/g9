import React from "react";
import { useDispatch } from "react-redux";
import Beta from "../components/Beta";
import { mediaToggle } from "../modules/media";

function BetaContainer() {
  const dispatch = useDispatch();
  const toggle = () => dispatch(mediaToggle());
  return <Beta swap={toggle} />;
}

export default BetaContainer;
