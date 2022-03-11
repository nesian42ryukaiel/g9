import React from "react";
import Emoji from "./Emoji";

function Header({ loggedin, id, colormode, moveFunc, swapcolor }) {
  const cmdisplay =
    colormode === "light" ? (
      <Emoji symbol="🌙" label="moon" />
    ) : (
      <Emoji symbol="☀️" label="sun" />
    ); // replace result with Emoji?
  const onClickMoveToIndexPage = () => {
    moveFunc("index");
  };
  const onClickMoveToLoginPage = () => {
    moveFunc("login");
  };
  const onClickMoveToSignupPage = () => {
    moveFunc("signup");
  };
  const onClickSwapColor = () => {
    console.log("[DEBUG] Color mode change!");
    localStorage.setItem("colormode", colormode === "light" ? "dark" : "light");
    console.log(
      "[DEBUG] [new] local storage color mode:",
      localStorage.getItem("colormode")
    );
    swapcolor();
  };
  return (
    <>
      <span className="Header Header__left header__left">
        <Emoji symbol="🍔" label="hamburger" />
        <span className="header--logo" onClick={onClickMoveToIndexPage}>
          G9
        </span>
      </span>
      <span className="Header Header__middle header__middle centralize">
        {/* <span>Options</span> */}
        <span>
          <input type="text" placeholder="Search" />{" "}
          <button
            type="button"
            onClick={onClickSwapColor}
            style={colormode === "light" ? {} : { backgroundColor: "#bfa100" }}
          >
            {cmdisplay}
          </button>
        </span>
      </span>
      <span className="Header Header__right header__right centralize">
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
