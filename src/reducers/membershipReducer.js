import { initialState } from "../state/state";
import { LOGIN_TASK, SIGNUP_TASK } from "../actions/membershipActions";

export default function membershipReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_TASK:
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
    case SIGNUP_TASK:
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