import * as BooksAPI from "../BooksAPI";
import React, { Component } from "react";

export class BookChanger extends Component {
  state = {
    value: "",
  };
  MoveBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
  };
  HandleClick = (e) => {
    this.setState({ value: e.target.value });
  };
  render() {
    const { book } = this.props;
    const { value } = this.state;
    return (
      <div className="book-shelf-changer">
        <select
          value={value === "" ? book.shelf : value}
          select={value}
          onChange={(e) => this.MoveBook(book, e.target.value)}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option onClick={(e) => this.HandleClick(e)} value="currentlyReading">
            Currently Reading
          </option>
          <option onClick={(e) => this.HandleClick(e)} value="wantToRead">
            Want to Read
          </option>
          <option onClick={(e) => this.HandleClick(e)} value="read">
            Read
          </option>
          <option onClick={(e) => this.HandleClick(e)} value="none">
            None
          </option>
        </select>
      </div>
    );
  }
}

export default BookChanger;
