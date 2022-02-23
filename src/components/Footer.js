import React from "react";
const wm = "Lucas Yew";

function Footer(red, green, blue, brighten, darken) {
  const onClickBrighten = () => {
    console.log("LIGHT");
    brighten(1);
  };
  const onClickDarken = () => {
    console.log("SHADOW");
    // darken(1);
  };
  return (
    <footer className="Footer">
      <div className="Footer__signature">
        <em>Webmaster: {wm}</em>
      </div>
      <div
        className="Footer__beta lighting_testbed"
        style={{ textAlign: "center", width: "auto" }}
      >
        <button type="button" onClick={onClickBrighten}>
          Brighten
        </button>
        <button type="button" onClick={onClickDarken}>
          Darken
        </button>
      </div>
    </footer>
  );
}

export default Footer;
