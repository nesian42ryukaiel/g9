// import axios from "axios";
// import Base64 from "./Base64";
// import { pServerLink } from "../pseudoLinks/links";

import Base64 from "./Base64";

const INPUT_ID = "membership/ID";
const INPUT_PASS = "membership/PASS";
const INPUT_NAME = "membership/NAME";
const LOGIN = "membership/LOGIN";
const SIGNUP = "membership/SIGNUP";

export const inputID = (task) => ({
  type: INPUT_ID,
  payload: {
    task,
  },
});
export const inputPass = (task) => {
  task = Base64.encode(task);
  return {
    type: INPUT_PASS,
    payload: {
      task,
    },
  };
};
export const inputName = (task) => ({
  type: INPUT_NAME,
  payload: {
    task,
  },
});
export const login = () => ({
  type: LOGIN,
});
export const signup = () => ({
  type: SIGNUP,
});

// const memberMap = new Map();

const initialState = {
  mauth: [false, false], // should I actually keep it here...?
  mlogin: false,
  mid: "",
  mpw: "",
  mname: "",
  members: {}, // this should be gone in some way or another
};

// function checkAuth(state, applyAuth) {
//   const auth = [false, false];
//   const mid = state.id;
//   const mpw = state.password;
//   const tok = mid + ":" + mpw;
//   const hash = Base64.encode(tok);
//   const Basic = "Basic " + hash;
//   // console.log(tok + " -> " + hash);
//   return axios
//     .get(pServerLink + "/auth", { headers: { Authorization: Basic } })
//     .then((res) => {
//       // console.log(res);
//       // console.log(res.data);
//       auth[0] = res.data[0];
//       auth[1] = res.data[1];
//       applyAuth(auth);
//     });
// }

export default function membership(state = initialState, action) {
  switch (action.type) {
    case INPUT_ID:
      return {
        ...state,
        mid: action.payload.task,
      };
    case INPUT_PASS:
      return {
        ...state,
        mpw: action.payload.task,
      };
    case INPUT_NAME:
      return {
        ...state,
        mname: action.payload.task,
      };
    case LOGIN:
      if (state.mlogin === true) {
        console.log("You are already logged in!");
        return state;
      } else {
        return {
          ...state,
          mlogin: true,
          mpw: "",
        };
      }
    // break;
    case SIGNUP:
      if (state.mlogin === true) {
        console.log("You cannot sign up while logged in!");
        return state;
      } else {
        console.log(`Welcome to G9, ${state.mid}!`);
        // const newkey = state.mid;
        // const newmem = {
        //   id: state.mid,
        //   pw: state.mpw,
        //   name: "u/" + state.mid,
        // };
        // return {
        //   ...state,
        //   members: {
        //     ...state.members,
        //     [newkey]: newmem, // fixing here
        //   },
        // };
        return state;
      }
    default:
      return state;
  }
}
