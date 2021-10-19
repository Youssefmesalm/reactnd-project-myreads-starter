import React from "react";
import Search from "./components/Search";
import "./App.css";
import Home from "./pages/home";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
 
  render() {
    return (
      <div className="app">
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search}/>
      </div>
    );
  }
}

export default BooksApp;
