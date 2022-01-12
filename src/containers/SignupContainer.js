import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SignupScreen from "../components/SignupScreen";
import { inputID, inputPass, login, signup } from "../modules/membership";
import { movePage } from "../modules/pages";

function SignupContainer() {
  const { authentication, isloggedin, reqid, reqpw } = useSelector((state) => ({
    authentication: state.membership.mauth,
    isloggedin: state.membership.mlogin,
    reqid: state.membership.mid,
    reqpw: state.membership.mpw,
  }));
  const dispatch = useDispatch();
  const onInputID = (input) => dispatch(inputID(input));
  const onInputPass = (input) => dispatch(inputPass(input));
  const onLogin = () => dispatch(login());
  const onSignup = () => dispatch(signup());
  const afterSuccess = (page) => dispatch(movePage(page));
  return (
    <SignupScreen
      authentication={authentication}
      loggedin={isloggedin}
      reqid={reqid}
      reqpw={reqpw}
      onInputID={onInputID}
      onInputPass={onInputPass}
      onLogin={onLogin}
      onSignup={onSignup}
      afterSuccess={afterSuccess}
    />
  );
}

export default SignupContainer;
