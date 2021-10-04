import React, { useState } from "react";

function PasswordUpdate() {
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { value } }) => setPassword(value);

  return (
    <form>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <button type="submit">비밀번호 변경</button>
    </form>
  );
}

export default PasswordUpdate;

// hint from: https://www.daleseo.com/react-forms/
