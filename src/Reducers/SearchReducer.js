import {
  UPDATE_QUERY,
  SEARCH_BOOK,
  FREE_RESULT,
} from "../Actions/SearchActions";
const initialstate = {
  query: "",
  data: [],
};

export default function SearchReducer(state = initialstate, { type, payload }) {
  switch (type) {
    case UPDATE_QUERY:
      return {
        ...state,
        query: payload,
      };
    case SEARCH_BOOK:
      return {
        ...state,
        data: payload,
      };
    case FREE_RESULT:
      return {
        ...state,
        data: [],
      };
    default:
      return state;
  }
}
