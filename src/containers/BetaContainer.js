import React from "react";
import { useDispatch } from "react-redux";
import Beta from "../components/Beta";
import { mediaBrighten, mediaDarken, mediaToggle } from "../modules/media";

function BetaContainer() {
  const dispatch = useDispatch();
  const brighten = (lux) => dispatch(mediaBrighten(lux));
  const darken = (lux) => dispatch(mediaDarken(lux));
  const toggle = () => dispatch(mediaToggle());
  return <Beta brighten={brighten} darken={darken} swap={toggle} />;
}

export default BetaContainer;
