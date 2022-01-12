import React from "react";
import checkAuth from "../modules/checkAuth";
// import MemberInput from "./MemberInput";
// import LoginButton from "./LoginButton";
// import SignupButton from "./SignupButton";

export default function SignupScreen({
  authentication,
  isloggedin,
  reqid,
  reqpw,
  onInputID,
  onInputPass,
  onLogin,
  onSignup,
  afterSuccess,
}) {
  const onChangeUserID = (e) => {
    console.log("changing user id to: " + e.target.value);
    onInputID(e.target.value);
    console.log("-> " + reqid);
  };
  const onChangeUserPW = (e) => {
    console.log("changing user pw to: " + e.target.value);
    onInputPass(e.target.value);
    console.log("-> " + reqpw);
  };
  const onClickLogin = () => {
    const loginAuth = [false, false];
    checkAuth(reqid, reqpw, loginAuth).then((res) => {
      if (loginAuth[0] && loginAuth[1]) {
        onLogin();
      } else {
        alert("Login failed!");
      }
    });
  };
  const onClickSignup = () => {
    const signupAuth = [false, false];
    checkAuth(reqid, reqpw, signupAuth).then((res) => {
      if (signupAuth[0] && signupAuth[1]) {
        onSignup();
      } else {
        alert("Signup failed!");
      }
    });
  };
  const ifLoggedIn = () => {
    if (isloggedin) {
      console.log("passed!");
      afterSuccess("index");
    }
  };
  return (
    <main className="SignupScreen centralize corefunc">
      {isloggedin ? (
        <>
          <div>
            <p>Success!</p>
            <p>
              <strong onClick={ifLoggedIn} style={{ color: "#aaaaff" }}>
                Click
              </strong>{" "}
              to return to the main page.
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="signup__memberInput">
            <div>
              <input
                type="text"
                className="user_id--input"
                placeholder="ID"
                onChange={onChangeUserID}
              />
            </div>
            <div>
              <input
                type="password"
                className="password--input"
                placeholder="Password"
                onChange={onChangeUserPW}
              />
            </div>
          </div>
          <div className="memberInput">
            <span>
              <button className="login--button" onClick={onClickLogin}>
                Login
              </button>
              <button className="signup--button" onClick={onClickSignup}>
                Sign-up
              </button>
            </span>
          </div>
        </>
      )}
    </main>
  );
}
