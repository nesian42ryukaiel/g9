import React, { useState } from "react";

function PasswordUpdate() {
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleChange = ({ target: { value } }) => setPassword(value);

  const handleSubmit = async (event) => {
    setDisabled(true);
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    alert(`변경된 패스워드: ${password}`);
    setDisabled(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <button type="submit" disabled={disabled}>
        비밀번호 변경
      </button>
    </form>
  );
}

export default PasswordUpdate;

// hint from: https://www.daleseo.com/react-forms/
