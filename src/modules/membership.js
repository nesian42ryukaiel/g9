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

const ducky = {
  mid: 'ducky',
  mpw: '1021'
}

const initialState = {
  loggedin: false,
  id: '',
  password: '',
  members: [
    ducky
  ],
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
        if (
          state.id === state.members[0].mid &&
          state.password === state.members[0].mpw
        ) {
          console.log(`Welcome back, ${state.id}!`);
          return {
            ...state,
            loggedin: true,
            page: 'indexPage'
          }
        } else {
          console.log('Login Failed!');
          return state;
        }
      }
    case SIGNUP:
      if (state.loggedin === true) {
        console.log('You cannot sign up while logged in!');
        return state;
      } else {
        if (
          state.id === state.members[0].mid
        ) {
          console.log('Member exists!');
          return state;
        } else if (state.id === '' || state.password === '') {
          console.log('Please input new member properly!');
          return state;
        } else {
          console.log(`Welcome to G9, ${state.id}!`);
          const newmem = {
            mid: state.id,
            mpw: state.password
          };
          return {
            ...state,
            members: state.members.concat([newmem])
          };
        }
      }
    default:
      return state;
  }
}