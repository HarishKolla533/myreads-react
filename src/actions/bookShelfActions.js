const REQUEST_BOOKSHELF = "REQUEST_BOOKSHELF";
const RECEIVE_BOOKSHELF = "RECEIVE_BOOKSHELF";
const FAILED_BOOKSHELF = "FAILED_BOOKSHELF";
export const requestBookshelf = () => {
  // Return action
  return { type: REQUEST_BOOKSHELF };
};

export const receiveBookshelf = bookShelf => {
  return { type: RECEIVE_BOOKSHELF, bookShelf: bookShelf };
};
export const failedBookshelf = () => {
  return { type: FAILED_BOOKSHELF };
};
