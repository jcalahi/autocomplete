import { SEARCH_MAP_ON_PLACE_CHANGED } from "./types";

export const setPlace = (place) => {
  return {
    type: SEARCH_MAP_ON_PLACE_CHANGED,
    payload: place
  };
};