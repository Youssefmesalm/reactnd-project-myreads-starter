import React, { Component } from "react";
import PropTypes from "prop-types";
import BookList from "./BookList";

export class Shelf extends Component {
  static propTypes = {
    Title: PropTypes.string,
  };

  render() {
    const { Title, Shelf } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{Title}</h2>
        <div className="bookshelf-books">
          <BookList Shelf={Shelf} />
        </div>
      </div>
    );
  }
}

export default Shelf;
