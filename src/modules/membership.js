const INPUT_ID = 'membership/ID';
const INPUT_PASS = 'membership/PASS';
const LOGIN = 'membership/LOGIN';
const SIGNUP = 'membership/SIGNUP';

export const inputID = (task) => ({
  type: INPUT_ID,
  payload: {
    task
  }
});
export const inputPass = (task) => ({
  type: INPUT_PASS,
  payload: {
    task
  }
});
export const login = () => ({
  type: LOGIN,
});
export const signup = () => ({
  type: SIGNUP,
});

const memberMap = new Map();

const initialState = {
  loggedin: false,
  id: '',
  password: '',
  members: memberMap,
}

function isMember(state) {
  let auth = [false, false];
  for (const [key, value] of state.members) {
    if (state.id === key) {
      auth[0] = true;
      if (state.password === value.mpw) {
        auth[1] = true;
      }
      break;
    }
  }
  // for (let i = 0; i < state.members.length; i++) {
  //   if (state.id === state.members[i].mid) {
  //     auth[0] = true;
  //     if (state.password === state.members[i].mpw) {
  //       auth[1] = true;
  //     }
  //     break;
  //   }
  // }
  return auth;
}

export default function membership(state = initialState, action) {
  switch (action.type) {
    case INPUT_ID:
      return {
        ...state,
        id: action.payload.task
      };
    case INPUT_PASS:
      return {
      ...state,
      password: action.payload.task
      };
    case LOGIN:
      if (state.loggedin === true) {
        console.log('You are already logged in!');
        return state;
      } else {
        let auth = isMember(state);
        if (auth[0] && auth[1]) {
          console.log(`Welcome back, ${state.id}!`);
          return {
            ...state,
            loggedin: true,
            // currentPage: 'index'
          }
        } else {
          let liblurb = '';
          if (!auth[0]) {
            liblurb += ' ID does not exist.';
          } else if (auth[0] && !auth[1]) {
            liblurb += ' Wrong password.';
          }
          console.log(`Login Failed!${liblurb}`);
          return state;
        }
      }
    case SIGNUP:
      if (state.loggedin === true) {
        console.log('You cannot sign up while logged in!');
        return state;
      } else {
        let auth = isMember(state);
        if (auth[0]) {
          console.log('Member exists!');
          return state;
        } else if (state.id === '' || state.password === '') {
          console.log('Please input new member properly!');
          return state;
        } else {
          console.log(`Welcome to G9, ${state.id}!`);
          const newkey = state.id;
          const newmem = {
            mid: "u/" + state.id,
            mpw: state.password
          };
          return {
            ...state,
            members: state.members.set(newkey, newmem)
          };
        }
      }
    default:
      return state;
  }
}