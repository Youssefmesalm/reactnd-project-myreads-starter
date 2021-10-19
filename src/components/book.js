import React, { Component } from "react";
import { BookChanger } from "./BookChanger";

export class Book extends Component {
  state = {
    Authors: [],
  };
  GetAuthor = (book) => {
    this.setState(() => ({ Authors: book.authors }));
  };

  render() {
    const { book } = this.props;
    return (
      <div key={book.id}>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${
                  book.imageLinks === undefined
                    ? "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg"
                    : book.imageLinks.thumbnail
                }")`,
              }}
            />
            <BookChanger book={book} />
          </div>
          <div className="book-title">{book.title}</div>
          {this.state.Authors.map((author, id) => (
            <div key={id} className="book-authors">
              {author}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Book;
