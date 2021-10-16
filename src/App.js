import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Dispatcher from './Dispatcher/Dispatcher';
import './App.css';

// 잘 생각해보자, 앱의 기본 레이아웃을 어찌 해야할 지...

function App() {
  const myDesign = (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Nav></Nav>
      <Footer></Footer>
      <Dispatcher />
    </div>
  );
  return (
    myDesign
  );
}

export default App;
