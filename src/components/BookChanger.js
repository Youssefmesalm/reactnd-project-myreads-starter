import { Change_Shelf } from "../Actions/BooksActions";
//import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";

export class BookChanger extends Component {
 state={
   value:this.props.book.shelf===undefined?"none":this.props.book.shelf
 }
  HandleChange = (event) => {
    const { book } = this.props;
    this.setState({value:event.target.value})
    this.props.dispatch(Change_Shelf(book, event.target.value));
  
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <div className="book-shelf-changer">
          <select
            value={value}
            onChange={(e) => this.HandleChange(e)}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option  value="currentlyReading">
              Currently Reading
            </option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
          
        </div>
      </div>
    );
  }
}


export default connect()(BookChanger);
