import { initialState } from "../state/state";

export default function membershipReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_TASK':
      if (
        state.id === state.members[0].mid &&
        state.password === state.members[0].mpw
      ) {
        return {
          ...state,
          login: true,
          page: 'indexPage'
        }
      } else {
        console.log('Login Failed!');
        return state;
      }
    case 'SIGNUP_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task])
      };
    default:
      return state;
  }
}