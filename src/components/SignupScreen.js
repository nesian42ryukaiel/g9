import React from "react";
import checkAuth from "../modules/checkAuth";
// import MemberInput from "./MemberInput";
// import LoginButton from "./LoginButton";
// import SignupButton from "./SignupButton";

export default function SignupScreen({
  authentication,
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
    checkAuth(reqid, reqpw, reqnm, signupAuth).then((res) => {
      if (!signupAuth[0]) {
        // create new member object here
        const newkey = reqid;
        const newmem = {
          [newkey]: {
            id: reqid,
            pw: reqpw,
            name: reqnm,
          },
        };
        // then send it to be written in the server (Object.assign()?)
        // if successful run onSignup then
        onSignup();
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
