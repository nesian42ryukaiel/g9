const initialState = {};

export default function inputReducer(state = initialState, action) {
  switch (action.type) {
    case 'INPUT_TASK':
      return {
        ...state,
        task:action.payload.task
      };
    default:
      return state;
  }
}