import React, { useState } from "react";
import * as auth from "../modules/auth";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  function submit() {
    auth.login(userId, password).then((res) => {
      console.log(res);
      if (res.resultcode === 1) {
        history.push("/");
      }
    });
  }

  return (
    <div>
      <input value={userId} onChange={(e) => setUserId(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={submit}>로그인</button>
    </div>
  );
}
