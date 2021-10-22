
import { Link } from "react-router-dom";
import Shelf from "../components/Shelf";
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { HandleBooksRecive } from "../Actions/BooksActions";

class Home extends Component {
  static propTypes = {
    dispatch:PropTypes.func,
    current:PropTypes.array,
    read:PropTypes.array,
    wanttored:PropTypes.array,
  }
  componentDidMount() {
    this.props.dispatch(HandleBooksRecive());
  }

  render() {
    const {current,wanttored,read}=this.props;
    return (
      <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf Title="Currently Reading" books={current} />
          <Shelf Title="Want To Read" books={wanttored} />
          <Shelf Title="Read" books={read} />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">
          <button>Add a book</button>
        </Link>
      </div>
    </div>
    )
  }
}
const mapStateToProps = (state) => ({
  current: state.BooksReducer.currentbooks,
  wanttored:state.BooksReducer.wanttoreadbooks,
  read:state.BooksReducer.readbooks,
});
export default connect(mapStateToProps)(Home)