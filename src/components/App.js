import React from "react";

import HeaderContainer from "../containers/HeaderContainer";
import NavContainer from "../containers/NavContainer";
import Footer from "../components/Footer";
import MainContainer from "../containers/MainContainer";
import UploadContainer from "../containers/UploaderContainer";
import LoginContainer from "../containers/LoginContainer";
import SignupContainer from "../containers/SignupContainer";

function defaultLayout(page, move, brighten, darken) {
  return (
    <>
      <div className="App">
        <HeaderContainer />
        {page}
        <NavContainer />
        <Footer />
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

function App({ page, red, green, blue, move, brighten, darken }) {
  const pagelist = {
    index: <MainContainer />,
    upload: <UploadContainer />,
    login: <LoginContainer />,
    signup: <SignupContainer />,
  };
  // console.log("pagekey:", pagekey.page);
  return defaultLayout(pagelist[page], move, brighten, darken);
}

export default App;
