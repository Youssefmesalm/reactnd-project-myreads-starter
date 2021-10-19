import React, { Component } from "react";
import Book from "./book";
export class Books extends Component {
  render() {
    const { books } = this.props;
    return (
      <ol className="books-grid">
        {books.length > 0
          ? books.map((book) => {
              return (
                <li key={book.id}>
                  <Book book={book} />
                </li>
              );
            })
          : null}
      </ol>
    );
  }
}

export default Books;
