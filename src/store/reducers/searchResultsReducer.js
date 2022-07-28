import {
  SEARCH_MAP_ON_PLACE_CHANGED,
  SEARCH_MAP_ON_VIEW_CLICKED,
  SEARCH_MAP_ON_DELETE_CLICKED
} from "../actions/types";

const defaultState = {
  searchResults: []
};

const searchResultReducer = (state = defaultState, action) => {
  switch(action.type) {
    case SEARCH_MAP_ON_PLACE_CHANGED: {
      return {
        ...state,
        searchResults: [
          ...state.searchResults,
          action.payload
        ]
      };
    }
    case SEARCH_MAP_ON_VIEW_CLICKED: {
      return state;
    }
    case SEARCH_MAP_ON_DELETE_CLICKED: {
      return state;
    }
    default:
      return state;
  }
}

export default searchResultReducer;
