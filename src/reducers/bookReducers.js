import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  FAILED_BOOKS,
  SET_BOOK_QUERY
} from "../constants/ActionTypes";

export default (state = { isFetching: false, query:'', items: [] }, action) => {
  switch (action.type) {
    /**
     * Set the fetching to true
     */
    case REQUEST_BOOKS:
      return Object.assign({}, state, { isFetching: true });
    /**
     * Add received books to the state
     */
    case RECEIVE_BOOKS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.books
      });
    /**
     * Set fetchinf to false e clean books results
     */
    case FAILED_BOOKS:
      return Object.assign({}, state, { isFetching: false, items: [] });
    /**
     * Set fetchinf to false e clean books results
     */
    case SET_BOOK_QUERY:
      return Object.assign({}, state, { query: action.query });
    default:
      return state;
  }
};
