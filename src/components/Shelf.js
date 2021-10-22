import React, { Component } from "react";
import PropTypes from "prop-types";
import Books from "./Books";


export class Shelf extends Component {
  static propTypes = {
    Title: PropTypes.string,
  };
 
  render() {
    const { Title, books } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{Title}</h2>
        <div className="bookshelf-books">
          <Books books={books} />
          
        </div>
      </div>
    );
  }
}


export default Shelf;
