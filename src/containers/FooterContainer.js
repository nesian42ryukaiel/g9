import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../components/Footer";
import {
  mediaColorR,
  mediaColorG,
  mediaColorB,
  mediaBrighten,
  mediaDarken,
} from "../modules/media";

function FooterContainer() {
  const { red, green, blue } = useSelector((state) => ({
    red: state.media.mediaColorR,
    green: state.media.mediaColorG,
    blue: state.media.mediaColorB,
  }));
  const dispatch = useDispatch();
  const brighten = (lux) => dispatch(mediaBrighten(lux));
  const darken = (lux) => dispatch(mediaDarken(lux));
  return (
    <Footer
      red={red}
      green={green}
      blue={blue}
      brighten={brighten}
      darken={darken}
    />
  );
}

export default FooterContainer;
