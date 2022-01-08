import React from "react";
// import MemberInput from "./MemberInput";
// import LoginButton from "./LoginButton";
// import SignupButton from "./SignupButton";

export default function SignupScreen({
  authentication,
  isloggedin,
  onInputID,
  onInputPass,
  onLogin,
  onSignup,
  afterSuccess,
}) {
  const onChangeUserID = (e) => {
    onInputID(e.target.value);
  };
  const onChangeUserPW = (e) => {
    onInputPass(e.target.value);
  };
  const onClickLogin = () => {
    // do async checkAuth here, then...
    onLogin();
  };
  const onClickSignup = () => {
    // async
    onSignup();
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
