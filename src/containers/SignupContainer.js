import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SignupScreen from "../components/SignupScreen";
import { inputID, inputPass, login, signup } from "../modules/membership";
import { movePage } from "../modules/pages";

function SignupContainer() {
  const { authentication, loggedin, reqid, reqpw } = useSelector((state) => ({
    authentication: state.membership.mauth,
    loggedin: state.membership.mlogin,
    reqid: state.membership.mid,
    reqpw: state.membership.mpw,
  }));
  const dispatch = useDispatch();
  const onInputID = (input) => dispatch(inputID(input));
  const onInputPass = (input) => dispatch(inputPass(input));
  const onSignup = () => dispatch(signup());
  const move = (page) => dispatch(movePage(page));
  return (
    <SignupScreen
      authentication={authentication}
      loggedin={loggedin}
      reqid={reqid}
      reqpw={reqpw}
      onInputID={onInputID}
      onInputPass={onInputPass}
      onSignup={onSignup}
      move={move}
    />
  );
}

export default SignupContainer;
