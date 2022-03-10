import React from "react";

function Beta({ swap }) {
  const onClickSwap = () => {
    console.log("SWAP");
    swap();
  };
  return (
    <div className="Beta">
      <div
        className="lighting_testbed"
        style={{ textAlign: "center", width: "auto" }}
      >
        <button type="button" onClick={onClickSwap}>
          SWAP
        </button>
      </div>
    </div>
  );
}

export default Beta;
