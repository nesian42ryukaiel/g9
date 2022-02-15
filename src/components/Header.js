import React from "react";

function Header({ loggedin, id, moveFunc }) {
  const onClickMoveToIndexPage = () => {
    moveFunc("index");
  };
  const onClickMoveToLoginPage = () => {
    moveFunc("login");
  };
  const onClickMoveToSignupPage = () => {
    moveFunc("signup");
  };
  return (
    <>
      <span className="header__left">
        <span role="img" aria-label="hamburger" className="hamburger">
          🍔
        </span>
        <span className="header--logo" onClick={onClickMoveToIndexPage}>
          G9
        </span>
      </span>
      <span className="header__middle">
        {/* <span>Options</span> */}
        <span>
          <input type="text" placeholder="Search" />{" "}
          {/* new mode toggle goes here */}
        </span>
      </span>
      <span className="header__right">
        {loggedin ? (
          <>Welcome, {id}!</>
        ) : (
          <>
            <button className="login--button" onClick={onClickMoveToLoginPage}>
              Login
            </button>
            <button
              className="signup--button"
              onClick={onClickMoveToSignupPage}
            >
              Sign-up
            </button>
          </>
        )}
      </span>
    </>
  );
}

export default Header;
