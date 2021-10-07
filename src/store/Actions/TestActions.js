export const getAllPosts = () => {
  return (dispatch) => {
    // fetch placeholder data from jsonplaceholder
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) =>
        dispatch({ type: "DO_THIS", payload: result })
      );
  }
}