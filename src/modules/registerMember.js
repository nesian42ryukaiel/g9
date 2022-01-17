import axios from "axios";
import Base64 from "./Base64";
import { pServerLink } from "../pseudoLinks/links";

export default function registerMember(id, pw, name) {
  const newmem = {
    [id]: {
      id: id,
      pw: pw,
      name: name,
    },
  };
  return axios
    .post(pServerLink + "/auth", newmem)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
}
