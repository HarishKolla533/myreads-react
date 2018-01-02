export default (state = { isFetching: false, shelfs: {} }, action) => {
  switch (action.type) {
    // Check if action dispatched is
    // CREATE_BOOK and act on that
    case "REQUEST_BOOKSHELF":
      return Object.assign({}, state, { isFetching: true });
    case "RECEIVE_BOOKSHELF":
      let bookShelfs = {};
      action.bookShelf.map(book => {
        if (!bookShelfs[book.shelf]) {
          bookShelfs[book.shelf] = [];
        }
        bookShelfs[book.shelf].push(book);
      });
      return Object.assign({}, state, {
        isFetching: false,
        shelfs: bookShelfs
      });
    case "FAILED_BOOKSHELF":
      return Object.assign({}, state, { isFetching: false, items: [] });
    default:
      return state;
  }
};
