import React, { Component } from "react";
import BookChanger from "./BookChanger";

export class Books extends Component {
  render() {
    const { books } = this.props;

    return (
      <ol className="books-grid">
        {books.length > 0
          ? books.map((book) => {
              return (
                <li key={book.id}>
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
                    <div className="book-title">
                      {book.title}
                      {book.authors!==undefined&&book.authors.map((author, id) => {
                        
                        return(<div key={id} className="book-authors">
                          {author}
                        </div>
                      )})}
                    </div>
                  </div>
                </li>
              );
            })
          : null}
      </ol>
    );
  }
}

export default Books;
