import React from "react";

function Beta(brighten, darken) {
  const onClickBrighten = () => {
    console.log("LIGHT");
    brighten(1);
  };
  const onClickDarken = () => {
    console.log("SHADOW");
    darken(1);
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
