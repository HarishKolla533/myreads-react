import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  FAILED_BOOKS,
  SET_BOOK_QUERY
} from "../constants/ActionTypes";
import * as BooksAPI from "../api/BooksAPI";

/** Called before a request for books is done */
export const requestBooks = () => {
  // Return action
  return {
    type: REQUEST_BOOKS
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

/**
 * Find books in the api
 * @param {string} query
 */
export const searchBooks = query => (dispatch, getState) =>{
  dispatch(setBookQuery(query));
  // Dispatch action before request
  dispatch(requestBooks());
  // Api call for the books
 return BooksAPI.search(query)
    .then(books => {
      // check if the api returned a error property. It will happen when no book is found
      if (books.error) {
        // error action
         dispatch(failedBooks());
      }
      // books received action
       dispatch(receiveBooks(books));
    })
    .catch(e => {
       dispatch(failedBooks());
    });
};
