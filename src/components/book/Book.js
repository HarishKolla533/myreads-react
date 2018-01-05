import React from "react";
import BookOptions from "../../containers/BookOptions";
import PropTypes from "prop-types";


/**
 * Basic book stateless component
 * @constructor
 * @param {object} props 
 */
const Book = props => (
  <li>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            backgroundImage: `url("${props.book.imageLinks.thumbnail}")`
          }}
        />
        
        <BookOptions book={props.book} />
      </div>
      <div className="book-title">{props.book.title}</div>
      {props.book.authors &&
        props.book.authors.map((author, i) => (
          <div key={i} className="book-authors">
            {author}
          </div>
        ))}
    </div>
  </li>
);

Book.propTypes = {
  //** The book object */
  book: PropTypes.object.isRequired
}
export default Book;
