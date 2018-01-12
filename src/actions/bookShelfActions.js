import {
  REQUEST_BOOKSHELF,
  RECEIVE_BOOKSHELF,
  FAILED_BOOKSHELF,
  CHANGE_BOOKSHELF
} from "../constants/ActionTypes";


/** Called before a request for booksshlf is done */
export const requestBookshelf = () => {
  // Return action
  return { type: REQUEST_BOOKSHELF };
};
/**
 * Called when a request for the bookshelf is received
 * @param {array} bookShelf - Array of books in the bookshlef
 *  */
export const receiveBookshelf = bookShelf => {
  return { type: RECEIVE_BOOKSHELF, bookShelf: bookShelf };
};
export const failedBookshelf = () => {
  return { type: FAILED_BOOKSHELF };
};
/**
 * Called when a book is add to a bookshelfd
 * @param {object} book -book to be add to shelf
 * @param {string} shelf - shelf where to add book
 *  */
export const changeBookShelf = (book, shelf) => {
  return { type: CHANGE_BOOKSHELF, book: book, shelf: shelf };
};


