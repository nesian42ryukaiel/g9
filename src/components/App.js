import React from "react";
import MediaQuery from "react-responsive";

import HeaderContainer from "../containers/HeaderContainer";
import NavContainer from "../containers/NavContainer";
import FooterContainer from "../containers/FooterContainer";
import MainContainer from "../containers/MainContainer";
import UploadContainer from "../containers/UploaderContainer";
import LoginContainer from "../containers/LoginContainer";
import SignupContainer from "../containers/SignupContainer";
import BetaContainer from "../containers/BetaContainer";

function defaultLayout(page, move, brighten, darken) {
  return (
    <>
      <div className="App">
        <HeaderContainer />
        {page}
        <NavContainer />
        <FooterContainer />
      </div>
      <div>
        <button type="button" onClick={() => brighten(1)}>
          Brighten
        </button>
        <button type="button" onClick={() => darken(1)}>
          Darken
        </button>
      </div>
    </>
  );
}

function App({ page, move }) {
  const pagelist = {
    index: <MainContainer />,
    upload: <UploadContainer />,
    login: <LoginContainer />,
    signup: <SignupContainer />,
  };
  // return defaultLayout(pagelist[page], move, brighten, darken);
  return (
    <>
      <div className="App">
        <HeaderContainer />
        {pagelist[page]}
        <NavContainer />
        <FooterContainer />
        <MediaQuery minWidth={640}>
          <BetaContainer />
        </MediaQuery>
        {/* <div className="Beta__veil centralize">VEIL</div> */}
      </div>
    </>
  );
}

export default App;
