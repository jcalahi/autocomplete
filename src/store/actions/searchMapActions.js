import { SEARCH_MAP_ON_DELETE, SEARCH_MAP_ON_PLACE_CHANGED, SEARCH_MAP_ON_VIEW } from "./types";

export const searchMapOnPlaceChanged = (place) => {
  return {
    type: SEARCH_MAP_ON_PLACE_CHANGED,
    payload: place
  };
};

export const searchMapOnView = (place) => {
  return {
    type: SEARCH_MAP_ON_VIEW,
    payload: place
  };
};

export const searchMapOnDelete = (placeId) => {
  return {
    type: SEARCH_MAP_ON_DELETE,
    payload: placeId
  };
};
