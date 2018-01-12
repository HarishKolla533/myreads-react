import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as bookShelfActions from "../actions/bookShelfActions";

/**
 * Component with the possible actions options for a book
 * @class
 */
export class BookOptions extends Component {
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
    dispatch(bookShelfActions.changeBookShelf(this.props.book, shelf));
  }
  render() {
    return (
      <div className="book-shelf-changer">
        <select
          value={this.props.book.shelf ? this.props.book.shelf : "none"}
          onChange={event => {
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

export default connect()(BookOptions);
