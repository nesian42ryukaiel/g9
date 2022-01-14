import React from "react";
import { useSelector, useDispatch } from "react-redux";
import LoginScreen from "../components/LoginScreen";
import { inputID, inputPass, login, signup } from "../modules/membership";
import { movePage } from "../modules/pages";

function LoginContainer() {
  const { authentication, loggedin, reqid, reqpw } = useSelector((state) => ({
    authentication: state.membership.mauth,
    loggedin: state.membership.mlogin,
    reqid: state.membership.mid,
    reqpw: state.membership.mpw,
  }));
  const dispatch = useDispatch();
  const onInputID = (input) => dispatch(inputID(input));
  const onInputPass = (input) => dispatch(inputPass(input));
  const onLogin = () => dispatch(login());
  const move = (page) => dispatch(movePage(page));
  return (
    <LoginScreen
      authentication={authentication}
      loggedin={loggedin}
      reqid={reqid}
      reqpw={reqpw}
      onInputID={onInputID}
      onInputPass={onInputPass}
      onLogin={onLogin}
      move={move}
    />
  );
}

export default LoginContainer;
