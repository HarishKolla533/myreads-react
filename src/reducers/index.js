import { combineReducers } from "redux";
import books from "./bookReducers";
import bookShelf from "./bookShelfReducers";
/**
 * Combiner for all the reducers
 */
export default combineReducers({
  books,
  bookShelf

});
