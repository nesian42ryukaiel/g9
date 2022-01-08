import axios from "axios";
import Base64 from "./Base64";
import { pServerLink } from "../pseudoLinks/links";

const INPUT_ID = "membership/ID";
const INPUT_PASS = "membership/PASS";
const LOGIN = "membership/LOGIN";
const SIGNUP = "membership/SIGNUP";

export const inputID = (task) => ({
  type: INPUT_ID,
  payload: {
    task,
  },
});
export const inputPass = (task) => ({
  // might Base64.encode() here
  type: INPUT_PASS,
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
  loggedin: false,
  id: "",
  password: "",
  members: {},
};

function checkAuth(state, applyAuth) {
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

export default function membership(state = initialState, action) {
  switch (action.type) {
    case INPUT_ID:
      return {
        ...state,
        id: action.payload.task,
      };
    case INPUT_PASS:
      return {
        ...state,
        password: action.payload.task,
      };
    case LOGIN:
      if (state.loggedin === true) {
        console.log("You are already logged in!");
        return state;
      } else {
        let auth = [false, false];
        checkAuth(state, (arg) => {
          auth[0] = arg[0];
          auth[1] = arg[1];
          // console.log("mid-callback: " + auth[0] + " / " + auth[1]);
        }).then((result) => {
          // console.log("post-callback: " + auth[0] + " / " + auth[1]);
          if (auth[0] && auth[1]) {
            console.log(`Welcome back, ${state.id}!`);
            return {
              ...state,
              loggedin: true,
              // currentPage: "index"
            };
          } else {
            let liblurb = "";
            if (!auth[0]) {
              liblurb += " ID does not exist.";
            } else if (auth[0] && !auth[1]) {
              liblurb += " Wrong password.";
            }
            console.log(`Login Failed!${liblurb}`);
            return state;
          }
        });
      }
    // break;
    case SIGNUP:
      if (state.loggedin === true) {
        console.log("You cannot sign up while logged in!");
        return state;
      } else {
        let auth = [false, false];
        checkAuth(state, (arg) => {
          auth[0] = arg[0];
          auth[1] = arg[1];
        }).then((result) => {
          if (auth[0]) {
            console.log("Member exists!");
            return state;
          } else if (state.id === "" || state.password === "") {
            console.log("Please input new member properly!");
            return state;
          } else {
            console.log(`Welcome to G9, ${state.id}!`);
            const newkey = state.id;
            const newmem = {
              id: state.id,
              pw: state.password,
              name: "u/" + state.id,
            };
            return {
              ...state,
              members: {
                ...state.members,
                [newkey]: newmem, // fixing here
              },
            };
          }
        });
      }
    // break;
    default:
      return state;
  }
}
