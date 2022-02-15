const MEDIA_BRIGHTEN = "media/brighten";
const MEDIA_DARKEN = "media/darken";
const MEDIA_TOGGLE = "media/toggle";

export const mediaBrighten = (task) => ({
  type: MEDIA_TOGGLE,
  payload: { task },
});
export const mediaDarken = (task) => ({
  type: MEDIA_TOGGLE,
  payload: { task },
});
export const mediaToggle = (task) => ({
  type: MEDIA_TOGGLE,
  payload: { task },
});

const initialState = {
  darkmode: false,
  mediaColorR: 0,
  mediaColorG: 0,
  mediaColorB: 0,
};

export default function media(state = initialState, action) {
  switch (action.type) {
    case MEDIA_BRIGHTEN:
      if (
        state.mediaColorR + action.payload.task <= 255 &&
        state.mediaColorG + action.payload.task <= 255 &&
        state.mediaColorB + action.payload.task <= 255
      ) {
        console.log(
          `DEBUG: light value = ${state.mediaColorR + action.payload.task}`
        );
        return {
          ...state,
          mediaColorR: state.mediaColorR + action.payload.task,
          mediaColorG: state.mediaColorG + action.payload.task,
          mediaColorB: state.mediaColorB + action.payload.task,
        };
      } else {
        console.log("DEBUG: media module cannot brighten further");
        return state;
      }
    case MEDIA_DARKEN:
      if (
        state.mediaColorR - action.payload.task >= 0 &&
        state.mediaColorG - action.payload.task >= 0 &&
        state.mediaColorB - action.payload.task >= 0
      ) {
        console.log(
          `DEBUG: light value = ${state.mediaColorR - action.payload.task}`
        );
        return {
          ...state,
          mediaColorR: state.mediaColorR - action.payload.task,
          mediaColorG: state.mediaColorG - action.payload.task,
          mediaColorB: state.mediaColorB - action.payload.task,
        };
      } else {
        console.log("DEBUG: media module cannot darken further");
        return state;
      }
    case MEDIA_TOGGLE:
      return {
        ...state,
        darkmode: !state.darkmode,
      };
    default:
      return state;
  }
}
