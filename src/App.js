import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

import Header from './Components/Header';
import Main from './Components/Main';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Dispatcher from './Dispatcher/Dispatcher';
import './App.css';

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
