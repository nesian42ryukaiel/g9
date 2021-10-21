const LOGIN = 'membership/LOGIN';
const SIGNUP = 'membership/SIGNUP';

export const login = () => ({
  type: 'LOGIN_TASK',
});
export const signup = () => ({
  type: 'SIGNUP_TASK',
});

const ducky = {
  mid: 'ducky',
  mpw: '1021'
}

const initialState = {
  login: false,
  id: '',
  password: '',
  members: [
    ducky
  ],
}

export default function membershipReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      if (
        state.id === state.members[0].mid &&
        state.password === state.members[0].mpw
      ) {
        console.log(`Welcome back, ${state.id}!`);
        return {
          ...state,
          login: true,
          page: 'indexPage'
        }
      } else {
        console.log('Login Failed!');
        return state;
      }
    case SIGNUP:
      if (
        state.id === state.members[0].mid
      ) {
        console.log('Member exists!');
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
    default:
      return state;
  }
}