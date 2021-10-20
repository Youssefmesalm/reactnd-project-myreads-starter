import React, { Component } from "react";
import PropTypes from "prop-types";

import * as BooksAPI from "../BooksAPI";
import Books from "./Books";

export class BookList extends Component {
  state = {
    books: [],
  };
  static propTypes = {
    books: PropTypes.array,
    shelf: PropTypes.string,
  };
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({ books }));
    });
  }
  componentDidUpdate() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({ books }));
    });
  }

  render() {
    const { books } = this.state;
    const { Shelf } = this.props;

    return <Books books={books.filter((book) => book.shelf === Shelf)} />;
  }
}

export default BookList;
