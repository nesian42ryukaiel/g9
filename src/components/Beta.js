import React from "react";

function Beta(brighten, darken) {
  const onClickBrighten = () => {
    console.log("LIGHT");
    document.documentElement.setAttribute("colorTheme", "light");
  };
  const onClickDarken = () => {
    console.log("SHADOW");
    document.documentElement.setAttribute("colorTheme", "dark");
  };
  return (
    <div className="Beta">
      <div
        className="lighting_testbed"
        style={{ textAlign: "center", width: "auto" }}
      >
        <button type="button" onClick={onClickBrighten}>
          Brighten
        </button>
        <button type="button" onClick={onClickDarken}>
          Darken
        </button>
      </div>
    </div>
  );
}

export default Beta;
