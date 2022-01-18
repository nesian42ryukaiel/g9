import React from "react";
import checkAuth from "../modules/checkAuth";
import registerMember from "../modules/registerMember";
// import MemberInput from "./MemberInput";
// import LoginButton from "./LoginButton";
// import SignupButton from "./SignupButton";

export default function SignupScreen({
  loggedin,
  reqid,
  reqpw,
  reqnm,
  onInputID,
  onInputPass,
  onInputName,
  onSignup,
  move,
}) {
  const onChangeUserID = (e) => {
    onInputID(e.target.value);
  };
  const onChangeUserPW = (e) => {
    onInputPass(e.target.value);
  };
  const onChangeUserName = (e) => {
    onInputName(e.target.value);
  };
  const onClickSignup = () => {
    const signupAuth = [false, false, false];
    const doSignup = [false];
    checkAuth(reqid, reqpw, reqnm, signupAuth).then((res) => {
      if (!signupAuth[0]) {
        registerMember(reqid, reqpw, reqnm, doSignup).then((res) => {
          if (doSignup[0]) {
            console.log("Signup complete!");
            onSignup();
          } else {
            alert("Error during registration!");
          }
        });
      } else {
        alert("Signup failed! (extant ID)");
      }
    });
  };
  const ifLoggedIn = () => {
    if (loggedin) {
      console.log("passed!");
      move("index");
    }
  };
  const cancelAndGoBack = () => {
    move("index");
  };
  return (
    <main className="SignupScreen centralize corefunc">
      {loggedin ? (
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
            <div>
              <input
                type="text"
                className="user_name--input"
                placeholder="Name"
                onChange={onChangeUserName}
              />
            </div>
          </div>
          <div className="memberInput">
            <span>
              <button className="cancel--button" onClick={cancelAndGoBack}>
                Cancel
              </button>
              <button
                className="signup--button focus--button"
                onClick={onClickSignup}
              >
                Sign-up
              </button>
            </span>
          </div>
        </>
      )}
    </main>
  );
}
