import * as BooksAPI from "../BooksAPI";

export const RECIVE_BOOKS = "RECIVE_BOOKS";
export const ADD_BOOK = "ADD_BOOK";
export const REMOVE_BOOK = "REMOVE_BOOK";
export function Recive_Books(currentlyReading, wantToRead, read) {
  return {
    type: RECIVE_BOOKS,
    payload: {
      currentlyReading,
      wantToRead,
      read,
    },
  };
}

export function Add_book(book, to) {
  return {
    type: ADD_BOOK,
    payload: {
      book,
      to,
    },
  };
}
export function remove_Book(book, from) {
  return {
    type: REMOVE_BOOK,
    payload: {
      book,
      from,
    },
  };
}

export function HandleBooksRecive() {
  return async (dispatch) => {
    const books = await BooksAPI.getAll();
    const currentlyReading = books.filter(
      (book) => book.shelf === "currentlyReading"
    );
    const wantToRead = books.filter((book_1) => book_1.shelf === "wantToRead");
    const read = books.filter((book_2) => book_2.shelf === "read");
    dispatch(Recive_Books(currentlyReading, wantToRead, read));
  };
}

export function Change_Shelf(book, to) {
  return async (dispatch) => {
    const shelf = book.shelf;

    dispatch(Add_book(book, to));
    dispatch(remove_Book(book, shelf));
    try {
      return BooksAPI.update(book, to);
    } catch (e) {
      dispatch(Add_book(book, book.shelf));
      dispatch(remove_Book(book, to));
      alert("An Error Occured, Please Try Again");
    }
  };
}
