import React from "react";
// import * as BooksAPI from './BooksAPI'
import "../App.css";

/**
 * Main view where we will load the containers
 * @constructor
 * @param {*} props 
 */
const App = props => (
  <div className="app">{props.children}</div>
);

export default App;
