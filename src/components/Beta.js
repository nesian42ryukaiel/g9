import React from "react";

function Beta(brighten, darken) {
  const onClickBrighten = () => {
    console.log("LIGHT");
    // brighten();
  };
  const onClickDarken = () => {
    console.log("SHADOW");
    // darken();
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
