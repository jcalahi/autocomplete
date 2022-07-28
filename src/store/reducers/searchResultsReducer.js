import {
  SEARCH_MAP_ON_PLACE_CHANGED,
  SEARCH_MAP_ON_VIEW,
  SEARCH_MAP_ON_DELETE
} from "../actions/types";

const defaultState = {
  coordinates: {
    lat: 1.2760274,
    lng: 103.7993483
  },
  searchResults: []
};

const searchResultReducer = (state = defaultState, action) => {
  switch(action.type) {
    case SEARCH_MAP_ON_PLACE_CHANGED: {
      return {
        ...state,
        coordinates: {
          lat: action.payload.geometry.location.lat(),
          lng: action.payload.geometry.location.lng(),
        },
        searchResults: [
          ...state.searchResults,
          action.payload
        ]
      };
    }
    case SEARCH_MAP_ON_VIEW: {
      return {
        ...state,
        coordinates: {
          lat: action.payload.geometry.location.lat(),
          lng: action.payload.geometry.location.lng(),
        }
      };
    }
    case SEARCH_MAP_ON_DELETE: {
      return {
        ...state,
        searchResults: state.searchResults.filter((result) => result.place_id !== action.payload)
      };
    }
    default:
      return state;
  }
}

export default searchResultReducer;
