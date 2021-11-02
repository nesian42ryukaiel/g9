import React from 'react';

import Header from '../components/Header';
import Nav from '../components/Nav';
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
      <Nav />
      <Footer />
    </div>
  );
}

function App(page) {
  const pagelist = {
    'index': <MainContainer />,
    'poster': <Uploader />,
    "signup": <SignupContainer />
  }
  // console.log('pagekey:', pagekey.page);
  return (
    defaultLayout(pagelist[page.page])
  );
}

export default App;
