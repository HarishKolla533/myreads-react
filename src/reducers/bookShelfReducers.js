export default (state = { isFetching: false, shelfs: [] }, action) => {
  switch (action.type) {
    /** Set fetching to true */
    case "REQUEST_BOOKSHELF":
      return Object.assign({}, state, { isFetching: true });
    /**
     * Receive ao the book on shelfs and covert it on a array of
     * shelfs with books in
     * @param {array} action.bookShelf - Array of book in the user bookshelf
     */
    case "RECEIVE_BOOKSHELF":
      let bookShelfs = [];
      action.bookShelf.map(book => {
        addBookToShelf(book.shelf, book, bookShelfs);
      });
      return Object.assign({}, state, {
        isFetching: false,
        shelfs: bookShelfs
      });
    /** Failed request for bookshelf */
    case "FAILED_BOOKSHELF":
      return Object.assign({}, state, { isFetching: false, items: [] });
    /**
     * Put a book on a shelf
     * @param {string} action.shelf - Shelf where to put the book
     * @param {object} action.book - book to update the shelf
     */
    case "CHANGE_BOOKSHELF":
      /**  remove book from the previous shelf if any */
      let newShelfs = state.shelfs.map(shelf => {
        shelf.books = shelf.books.filter(book => book.id !== action.book.id);
        return shelf;
      });
      /** add book to new shelf */
      addBookToShelf(action.shelf, action.book, newShelfs);
      return Object.assign({}, state, {
        isFetching: false,
        shelfs: newShelfs
      });
    default:
      return state;
  }

};
/**
 * Return a title for it shelf option
 * @param {string} name 
 */
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
    /**
     * Add a book to a bookshelf
     * @param {string} shelfName - Shelf to add the book
     * @param {object} book - book to be added
     * @param {array} shelfs - array of existing shelfs
     */
    const addBookToShelf = (shelfName, book ,shelfs) => {
        // alter the sehfl propertie on the book
        book.shelf = shelfName;
        // find the shelf where to put the book
        let shelfObj = shelfs.find(shelf => shelf.name === shelfName);
        // create a shelf if it does not exist
        if (!shelfObj) {
          var title = getShelfTitle(shelfName);
          shelfs.push({
            name: shelfName,
            title: title,
            books: [book]
          });
        }
        // if shelf exist add the book
        if (shelfObj) {
          shelfObj.books.push(book);
        }
    };
