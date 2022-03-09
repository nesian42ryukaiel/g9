const MEDIA_BRIGHTEN = "media/brighten";
const MEDIA_DARKEN = "media/darken";
const MEDIA_TOGGLE = "media/toggle";

export const mediaBrighten = () => ({
  type: MEDIA_BRIGHTEN,
});
export const mediaDarken = () => ({
  type: MEDIA_DARKEN,
});
export const mediaToggle = () => ({
  type: MEDIA_TOGGLE,
});

const initialState = {
  mediaColorMode: "dark",
  darkmode: false,
  mediaColorR: 0,
  mediaColorG: 0,
  mediaColorB: 0,
};

export default function media(state = initialState, action) {
  switch (action.type) {
    case MEDIA_BRIGHTEN:
      if (
        state.mediaColorR < 255 ||
        state.mediaColorG < 255 ||
        state.mediaColorB < 255
      ) {
        console.log(`DEBUG: light value = 255`);
        return {
          ...state,
          mediaColorR: 255,
          mediaColorG: 255,
          mediaColorB: 255,
        };
      } else {
        console.log("DEBUG: media module cannot brighten further");
        return state;
      }
    case MEDIA_DARKEN:
      if (
        state.mediaColorR > 0 ||
        state.mediaColorG > 0 ||
        state.mediaColorB > 0
      ) {
        console.log(`DEBUG: light value = 000`);
        return {
          ...state,
          mediaColorR: 0,
          mediaColorG: 0,
          mediaColorB: 0,
        };
      } else {
        console.log("DEBUG: media module cannot darken further");
        return state;
      }
    case MEDIA_TOGGLE:
      if (state.mediaColorMode === "light") {
        return {
          ...state,
          mediaColorMode: "dark",
        };
      } else if (state.mediaColorMode === "dark") {
        return {
          ...state,
          mediaColorMode: "light",
        };
      } else {
        return state;
      }
    default:
      return state;
  }
}
