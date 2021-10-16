const initialState = {};

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case 'SIGNUP_TASK':
      return {
        ...state,
        task:action.payload.task
      };
    case 'LOGIN_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task])
      };
    default:
      return state;
  }
}