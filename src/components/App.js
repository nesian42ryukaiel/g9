import React from "react";

import HeaderContainer from "../containers/HeaderContainer";
import NavContainer from "../containers/NavContainer";
import Footer from "../components/Footer";
import MainContainer from "../containers/MainContainer";
import UploadContainer from "../containers/UploaderContainer";
import SignupContainer from "../containers/SignupContainer";

function defaultLayout(page) {
  return(
    <div className="App">
      <HeaderContainer />
      {page}
      <NavContainer />
      <Footer />
    </div>
  );
}

function App({page, move}) {
  const pagelist = {
    "index": <MainContainer />,
    "upload": <UploadContainer />,
    "login": <SignupContainer />,
    "signup": <SignupContainer />
  }
  // console.log("pagekey:", pagekey.page);
  return (
    defaultLayout(pagelist[page])
  );
}

export default App;
