import React from 'react';

import Header from '../components/Header';
import MainContainer from '../containers/MainContainer';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
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

function App() {
  const pagelist = {
    'index': <MainContainer />,
    "signup": <SignupContainer />
  }
  return (
    defaultLayout(pagelist['index'])
  );
}

export default App;
