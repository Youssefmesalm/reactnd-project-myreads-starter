import { Change_Shelf } from "../Actions/BooksActions";
//import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";

export class BookChanger extends Component {
  state = {
    value: "",
  };
  HandleChange = (event) => {
    const { book } = this.props;
    this.setState({ value: event.target.value });
    this.props.dispatch(Change_Shelf(book, event.target.value));
  };

  render() {
    const { book, current, wanttored, read } = this.props;
    let c = current.find((obj) => obj.id === book.id);
    let w = wanttored.find((obj) => obj.id === book.id);
    let r = read.find((obj) => obj.id === book.id);

    let shelf = book.shelf
      ? book.shelf
      : c
      ? c.shelf
      : r
      ? r.shelf
      : w
      ? w.shelf
      : "none";
    console.log(shelf);
    return (
      <div>
        <div className="book-shelf-changer">
          <select value={shelf} onChange={(e) => this.HandleChange(e)}>
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  current: state.BooksReducer.currentbooks,
  wanttored: state.BooksReducer.wanttoreadbooks,
  read: state.BooksReducer.readbooks,
});
export default connect(mapStateToProps)(BookChanger);
