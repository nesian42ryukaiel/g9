import React from 'react';

function Dispatcher() {
  const login = () => {
    console.log("Logged in!");
  }
  const signup = () => {
    console.log("Signed up!");
  }
  return (
    <script>
      const su = document.querySelectorAll("signup--button");
      su.addEventListener(click, login);
    </script>
  );
}

export default Dispatcher;
