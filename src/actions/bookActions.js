import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  FAILED_BOOKS,
  SET_BOOK_QUERY
} from "../constants/ActionTypes";

/** Called before a request for books is done */
export const requestBooks = query => {
  // Return action
  return {
    type: REQUEST_BOOKS,
    query: query
  };
};

/**
 * Called before when request for books is received
 * @param {array} books - A rray of available book
 *  */
export const receiveBooks = books => {
  return {
    type: RECEIVE_BOOKS,
    books: books
  };
};
/** Called when a request for books is failed */
export const failedBooks = () => {
  return { type: FAILED_BOOKS };
};
/** Called when a request for books is failed */
export const setBookQuery = query => {
  return { type: SET_BOOK_QUERY, query: query };
};


