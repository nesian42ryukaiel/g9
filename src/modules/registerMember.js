import axios from "axios";
// import Base64 from "./Base64";
import { pServerLink } from "../pseudoLinks/links";

export default function registerMember(id, pw, name, doSignup) {
  const newmem = {
    [id]: {
      id: id,
      pw: pw,
      name: name,
    },
  };
  console.log(newmem);
  console.log(typeof newmem);
  return axios
    .post(pServerLink + "/auth", newmem)
    .then((res) => {
      doSignup[0] = true;
      console.log(res.data);
      console.log("New member!");
    })
    .catch((error) => {
      console.log(error);
      doSignup[0] = false;
    });
}
