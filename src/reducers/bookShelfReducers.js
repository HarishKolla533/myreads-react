export default (state = { isFetching: false, shelfs: [] }, action) => {
  switch (action.type) {
    // Check if action dispatched is
    // CREATE_BOOK and act on that
    case "REQUEST_BOOKSHELF":
      return Object.assign({}, state, { isFetching: true });
    case "RECEIVE_BOOKSHELF":
      let bookShelfs = [];
      action.bookShelf.map(book => {
        addBookToShelf(book.shelf, book, bookShelfs);
      });
      return Object.assign({}, state, {
        isFetching: false,
        shelfs: bookShelfs
      });
    case "FAILED_BOOKSHELF":
      return Object.assign({}, state, { isFetching: false, items: [] });
    case "CHANGE_BOOKSHELF":
      let newShelfs = state.shelfs.map(shelf => {
        shelf.books = shelf.books.filter(book => book.id !== action.book.id);
        return shelf;
      });
      addBookToShelf(action.shelf, action.book, newShelfs);
      return Object.assign({}, state, {
        isFetching: false,
        shelfs: newShelfs
      });
    default:
      return state;
  }

};
    const getShelfTitle = name => {
      switch (name) {
        case "currentlyReading":
          return "Currently Reading";
        case "wantToRead":
          return "Want to Read";
        case "read":
          return "Read";
        default:
          return "";
      }
    };
    const addBookToShelf = (shelfName, book ,shelfs) => {
        book.shelf = shelfName;
        let shelfObj = shelfs.find(shelf => shelf.name === shelfName);
        if (!shelfObj) {
          var title = getShelfTitle(shelfName);
          shelfs.push({
            name: shelfName,
            title: title,
            books: [book]
          });
        }
        if (shelfObj) {
          shelfObj.books.push(book);
        }
    };
