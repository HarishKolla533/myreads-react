const REQUEST_BOOKS = "REQUEST_BOOKS";
const RECEIVE_BOOKS = "RECEIVE_BOOKS";
const FAILED_BOOKS = "FAILED_BOOKS";

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

