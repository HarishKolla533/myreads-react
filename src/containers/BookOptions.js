import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as bookShelfActions from "../actions/bookShelfActions";
import * as BooksAPI from "../api/BooksAPI";

/**
 * Component with the possible actions options for a book
 * @class
 */
class BooksOptions extends Component {

  static propTypes = {
    /** Book object too show the options */
    book: PropTypes.object.isRequired
  };
  /**
   * Funstion to send a book to a shelf
   * @param {string} shelf - The shelf to put the book
   */
  setBookShelf(shelf) {
    const dispatch = this.props.dispatch;
    // Update shelf on the api
    BooksAPI.update(this.props.book, shelf)
      .then(response => {
        //dispatch redux action
        dispatch(bookShelfActions.changeBookShelf(this.props.book, shelf));
      })
      .catch(e => {});
  }
  render() {
    return (
      <div className="book-shelf-changer">
        <select
          value={this.props.book.shelf ? this.props.book.shelf : "none"}
          onChange={event => {
            console.log(event);
            event.target.value && this.setBookShelf(event.target.value);
          }}
        >
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default connect()(BooksOptions);
