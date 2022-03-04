import React from "react";
import { useDispatch } from "react-redux";
import Beta from "../components/Beta";
import { mediaBrighten, mediaDarken } from "../modules/media";

function BetaContainer() {
  const dispatch = useDispatch();
  const brighten = (lux) => dispatch(mediaBrighten(lux));
  const darken = (lux) => dispatch(mediaDarken(lux));
  return <Beta brighten={brighten} darken={darken} />;
}

export default BetaContainer;
