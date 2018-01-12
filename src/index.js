import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import rootReducer from "./reducers";
import Home from "./containers/HomePage";
import BooksSearch from "./containers/BooksSearch";
import persistState from "redux-localstorage";
import createSagaMiddleware from "redux-saga";
import App from "./components/App";
import rootSaga from "./sagas";
import "./index.css";

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(persistState(), applyMiddleware(sagaMiddleware));
/** Creating store */
export const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

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
