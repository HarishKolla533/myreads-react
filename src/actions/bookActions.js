const REQUEST_BOOKS = "REQUEST_BOOKS";
const RECEIVE_BOOKS = "RECEIVE_BOOKS";
export const requestBooks = () => {
  // Return action
  return {
    type: REQUEST_BOOKS
  }; 
};

export const receiveBooks = books => {
  return {
    type: RECEIVE_BOOKS,
    books: books
  };
};
