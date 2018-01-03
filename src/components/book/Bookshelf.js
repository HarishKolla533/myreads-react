import React from "react";
import Book from "./Book"
import PropTypes from "prop-types";

/**
 * Basic bookshelf stateless component
 * @constructor
 * @param {object} props 
 */
const BookShelf = props => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.shelfTitle}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
          {props.books.map((book,i)=> <Book key={i} book={book}></Book>)}
      </ol>
    </div>
  </div>
);


BookShelf.propTypes = {
  //** A array of books to add to the shelf */
  books: PropTypes.array.isRequired
};
export default BookShelf;
