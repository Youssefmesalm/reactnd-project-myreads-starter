import React from "react";
import Search from "./pages/Search";
import "./App.css";
import Home from "./pages/home";
import { Route } from "react-router-dom";

class App extends React.Component {
 
  render() {
    return (

      <div className="app">
         <Route path="/" exact component={Home}/>
         <Route path="/search" exact component={Search}/>
      </div>     
    );
  }
}

export default App;
