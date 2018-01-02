import { combineReducers } from "redux";
import books from "./bookReducers";
import bookShelf from "./bookShelfReducers";

export default combineReducers({
  books,
  bookShelf
  // More reducers if there are
  // can go here
});
