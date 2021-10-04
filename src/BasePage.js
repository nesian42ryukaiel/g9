import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

export default function BasePage() {
  return (
    <Switch>
      {<Redirect exact from="/" to="/dashboard" />}
      <Route path="mypage">mypage</Route>
      <Route path="board">board</Route>
      <Route path="search">search</Route>
    </Switch>
  );
}
