import React, { Component } from "react";
import PropTypes from "prop-types";
import * as BooksAPI from "../BooksAPI";
import Books from "./Books";
import { Link } from "react-router-dom";

export default class Search extends Component {
  static propTypes = {
    query: PropTypes.string,
    data: PropTypes.array,
    UpdateQuery: PropTypes.func,
    HandleChange: PropTypes.func,
  };
  state = {
    query: "",
    data: [],
  };
  HandleChange = (query) => {
    BooksAPI.search(query)
      .then((data) => {
        this.setState({ data });
      })
      .catch((err) => console.error(err.error));
  };

  UpdateQuery = (value) => {
    this.setState({ query: value });
  };

  render() {
    const { query, data } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(e) => {
                e.preventDefault();
                this.UpdateQuery(e.target.value);
                query !== "" && this.HandleChange(query);
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          {query === "" ? (
            <p>Let's Start Find Some books</p>
          ) : (
            <Books books={data} />
          )}
        </div>
      </div>
    );
  }
}
