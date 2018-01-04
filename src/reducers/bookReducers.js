import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  FAILED_BOOKS
} from "../constants/ActionTypes";

export default (state = { isFetching: false, items: [] }, action) => {
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
    default:
      return state;
  }
};
