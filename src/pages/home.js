import React from "react";
import { Link } from "react-router-dom";
import Shelf from "../components/Shelf";

export default function Home() {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf Title="Currently Reading" Shelf="currentlyReading" />
          <Shelf Title="Want To Read" Shelf="wantToRead" />
          <Shelf Title="Read" Shelf="read" />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
}
