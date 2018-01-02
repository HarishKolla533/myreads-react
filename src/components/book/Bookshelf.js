import React, { Component } from "react";
import Book from "./Book"

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

export default BookShelf;
