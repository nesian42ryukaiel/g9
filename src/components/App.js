import React from "react";
// import MediaQuery from "react-responsive";

import HeaderContainer from "../containers/HeaderContainer";
import NavContainer from "../containers/NavContainer";
import FooterContainer from "../containers/FooterContainer";
import MainContainer from "../containers/MainContainer";
import UploadContainer from "../containers/UploaderContainer";
import LoginContainer from "../containers/LoginContainer";
import SignupContainer from "../containers/SignupContainer";
import BetaContainer from "../containers/BetaContainer";

function App({ page, move }) {
  const pagelist = {
    index: <MainContainer />,
    upload: <UploadContainer />,
    login: <LoginContainer />,
    signup: <SignupContainer />,
  };
  return (
    <>
      <div className="App">
        <HeaderContainer />
        {pagelist[page]}
        <NavContainer />
        <FooterContainer />

        <BetaContainer />

        {/* <div className="Beta__veil centralize">VEIL</div> */}
      </div>
    </>
  );
}

export default App;
