import * as BooksAPI from "../BooksAPI";
import React, { Component } from "react";

export class BookChanger extends Component {
  MoveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).catch((error) => {
      console.error(error);
    });
  };
  render() {
    const { book } = this.props;
    return (
      <div className="book-shelf-changer">
        <select value={book.shelf}>
          <option value="move" disabled>
            Move to...
          </option>
          <option
            onClick={(e) => this.MoveBook(book, e.target.value)}
            value="currentlyReading"
          >
            Currently Reading
          </option>
          <option
            onClick={(e) => this.MoveBook(book, e.target.value)}
            value="wantToRead"
          >
            Want to Read
          </option>
          <option
            onClick={(e) => this.MoveBook(book, e.target.value)}
            value="read"
          >
            Read
          </option>
          <option
            onClick={(e) => this.MoveBook(book, e.target.value)}
            value="none"
          >
            None
          </option>
        </select>
      </div>
    );
  }
}

export default BookChanger;
