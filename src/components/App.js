import React from 'react';

import Header from '../components/Header';
import Nav from '../components/Nav';
import NavContainer from '../containers/NavContainer';
import Footer from '../components/Footer';
import MainContainer from '../containers/MainContainer';
import Uploader from './Uploader';
import SignupContainer from '../containers/SignupContainer';

// 잘 생각해보자, 앱의 기본 레이아웃을 어찌 해야할 지...

function defaultLayout(page) {
  return(
    <div className="App">
      <Header />
      {page}
      <NavContainer />
      <Footer />
    </div>
  );
}

function App(currentPage) {
  const pagelist = {
    'index': <MainContainer />,
    'upload': <Uploader />,
    "signup": <SignupContainer />
  }
  // console.log('pagekey:', pagekey.page);
  return (
    defaultLayout(pagelist[currentPage.page])
  );
}

export default App;
