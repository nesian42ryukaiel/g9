import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SignupScreen from '../components/SignupScreen';
import { inputID, inputPass, login, signup } from '../modules/membership';
import { movePage } from '../modules/pages';

function SignupContainer() {
  const { loggedin, id, password, members } = useSelector(state => ({
    loggedin: state.membership.loggedin,
    id: state.membership.id,
    password: state.membership.password,
    members: state.membership.members
  }));
  const dispatch = useDispatch();
  const onInputID = (input) => dispatch(inputID(input));
  const onInputPass = (input) => dispatch(inputPass(input));
  const onLogin = () => dispatch(login());
  const onSignup = () => dispatch(signup());
  const afterSuccess = (page) => dispatch(movePage(page));
  return (
    <SignupScreen
    // loggedin={loggedin}
    // id={id}
    // password={password}
    // members={members}
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
