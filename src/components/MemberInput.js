import React from "react";
// import { inputID, inputPass } from "../actions/inputActions";

export default function MemberInput() {
  return (
    <>
      <div>
        <input
        type="text" className="user_id--input"
        placeholder="ID" // onChange={(e) => store.dispatch(inputID(e.target.value))}
        />
      </div>
      <div>
        <input
        type="text" className="password--input"
        placeholder="Password" // onChange={(e) => store.dispatch(inputPass(e.target.value))}
        />
      </div>
    </>
  );
}