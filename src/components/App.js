import React from 'react';

import Header from '../components/Header';
import MainContainer from '../containers/MainContainer';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import SignupContainer from '../containers/SignupContainer';

// 잘 생각해보자, 앱의 기본 레이아웃을 어찌 해야할 지...

function App() {
  const indexPage = (
    <div className="App">
      <Header></Header>
      <MainContainer />
      <Nav></Nav>
      <Footer></Footer>
    </div>
  );
  const registerPage = (
    <div className="App">
      <Header />
      <SignupContainer />
      <Nav />
      <Footer />
    </div>
  );
  return (
    registerPage
  );
}

export default App;
