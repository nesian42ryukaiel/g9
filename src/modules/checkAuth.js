export default function checkAuth(state, applyAuth) {
  const auth = [false, false];
  const mid = state.id;
  const mpw = state.password;
  const tok = mid + ":" + mpw;
  const hash = Base64.encode(tok);
  const Basic = "Basic " + hash;
  // console.log(tok + " -> " + hash);
  return axios
    .get(pServerLink + "/auth", { headers: { Authorization: Basic } })
    .then((res) => {
      // console.log(res);
      // console.log(res.data);
      auth[0] = res.data[0];
      auth[1] = res.data[1];
      applyAuth(auth);
    });
}
