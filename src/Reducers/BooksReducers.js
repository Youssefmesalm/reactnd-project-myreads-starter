import {
  RECIVE_BOOKS,
  ADD_BOOK,
  REMOVE_BOOK,

} from "../Actions/BooksActions";

const initialstate = {
  currentbooks: [],
  readbooks: [],
  wanttoreadbooks: [],
}

export default function BooksReducer(state = initialstate, { type, payload }) {
  switch (type) {
    case RECIVE_BOOKS:
      return {
        ...state,
        currentbooks: payload.currentlyReading,
        wanttoreadbooks: payload.wantToRead,
        readbooks: payload.read,
      };
    case ADD_BOOK:
      switch (payload.to) {
        case "currentlyReading":
          let book = state.currentbooks.find(
            (obj) => obj.id === payload.book.id
          );

          if (book !== undefined) {
            return { ...state };
          } else {
            payload.book.shelf = "currentlyReading";
            return {
              ...state,
              
              currentbooks: [...state.currentbooks, payload.book],
            };
          }

        case "wantToRead":
          book = state.wanttoreadbooks.find(
            (obj) => obj.id === payload.book.id
          );

          if (book !== undefined) {
            return { ...state };
          } else {
            payload.book.shelf = "wantToRead";
            return {
              ...state,
              
              wanttoreadbooks: [...state.wanttoreadbooks, payload.book],
            };
          }
        case "read":
          book = state.readbooks.find((obj) => obj.id === payload.book.id);
          if (book !== undefined) {
            return { ...state };
          } else {
            payload.book.shelf = "read";
            return {
              ...state,
           
              readbooks: [...state.readbooks, payload.book],
            };
          }
        default:
          return state;
      }
    case REMOVE_BOOK:
      switch (payload.from) {
        case "currentlyReading":
          return {
            ...state,

            currentbooks: state.currentbooks.filter(
              (book) => book.id !== payload.book.id
            ),
          };
        case "wantToRead":
          return {
            ...state,

            wanttoreadbooks: state.wanttoreadbooks.filter(
              (book) => book.id !== payload.book.id
            ),
          };
        case "read":
          return {
            ...state,

            readbooks: state.readbooks.filter(
              (book) => book.id !== payload.book.id
            ),
          };
        default:
          return state;
      }

    default:
      return state;
  }
}
