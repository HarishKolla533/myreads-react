import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import rootReducer from "./reducers";
import Home from "./containers/HomePage";
import BooksSearch from "./containers/BooksSearch";
import persistState from 'redux-localstorage'
import thunk from "redux-thunk";
import App from "./components/App";
import "./index.css";


const enhancer = compose(persistState(), applyMiddleware(thunk));
/** Creating store */
export const store = createStore(rootReducer, enhancer);

/** adding rendering using react-router */
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
        <Route
          path={process.env.PUBLIC_URL + "/search"}
          component={BooksSearch}
          store={store}
        />
      </App>
    </Router>
  </Provider>,
  document.getElementById("root")
);
