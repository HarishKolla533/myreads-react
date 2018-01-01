import { REQUEST_BOOKS, RECEIVE_BOOKS } from "../actions/bookActions";
export default (state = { isFetching: false, items: [] }, action) => {
  switch (action.type) {
    // Check if action dispatched is
    // CREATE_BOOK and act on that
    case "REQUEST_BOOKS":
      return Object.assign({}, state, { isFetching: true });
    case "RECEIVE_BOOKS":
      return Object.assign({}, state, {
        isFetching: false,
        items: action.books
      });
    default:
      return state;
  }
};
