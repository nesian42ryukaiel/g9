import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SignupScreen from "../components/SignupScreen";
import { inputID, inputPass, login, signup } from "../modules/membership";
import { movePage } from "../modules/pages";

function SignupContainer() {
  const { loggedin } = useSelector(state => ({
    loggedin: state.membership.loggedin
  }));
  const dispatch = useDispatch();
  const onInputID = (input) => dispatch(inputID(input));
  const onInputPass = (input) => dispatch(inputPass(input));
  const onLogin = () => dispatch(login());
  const onSignup = () => dispatch(signup());
  const afterSuccess = (page) => dispatch(movePage(page));
  return (
    <SignupScreen
    onInputID={onInputID}
    onInputPass={onInputPass}
    onLogin={onLogin}
    onSignup={onSignup}
    loggedin={loggedin}
    afterSuccess={afterSuccess}
    />
  );
}

export default SignupContainer;
