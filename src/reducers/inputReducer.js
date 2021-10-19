import { initialState } from "../state/state";
import { INPUT_ID, INPUT_PASS } from "../actions/inputActions";

export default function inputReducer(state = initialState, action) {
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
    default:
      return state;
  }
}