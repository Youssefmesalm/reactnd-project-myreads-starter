import React, { Component } from "react";
import PropTypes from "prop-types";
import Books from "../components/Books";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import HandleSearch from "../Actions/SearchActions";

class Search extends Component {
  static propTypes = {
    query: PropTypes.string,
    UpdateQuery: PropTypes.func,
    HandleChange: PropTypes.func,
  };

  HandleChange = (query) => {
    this.props.dispatch(HandleSearch(query));
  };
  render() {
    const { query, data } = this.props;
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
                this.HandleChange(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          {data.length === 0 ? (
            <p>Let's Start Find Some books</p>
          ) : (
            <Books books={data} />
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  query: state.SearchReducer.query,
  data: state.SearchReducer.data,
});
export default connect(mapStateToProps)(Search);
