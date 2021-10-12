import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

import Header from './Components/Header';
import Main from './Components/Main';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
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
  const leedr0730 = (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
  return (
    myDesign
  );
}

export default App;
