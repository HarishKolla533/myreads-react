import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import rootReducer from "./reducers";
import Home from "./components/common/HomePage";
import BooksSearch from "./containers/BooksSearch";
import App from "./components/App";
import "./index.css";

let store = createStore(rootReducer);
console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={BooksSearch} />
      </App>
    </Router>
  </Provider>,
  document.getElementById("root")
);
