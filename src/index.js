import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import rootReducer from "./reducers";
import Home from "./containers/HomePage";
import BooksSearch from "./containers/BooksSearch";
import App from "./components/App";
import "./index.css";

export const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={BooksSearch} store={store}/>
      </App>
    </Router>
  </Provider>,
  document.getElementById("root")
);
