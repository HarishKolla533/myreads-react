import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BookShelf from "../components/book/BookShelf";
import * as BooksAPI from "../api/BooksAPI";
import * as bookShelfActions from "../actions/bookShelfActions";
import { Link } from "react-router-dom";

/**
 * Container for the homepage where de bookshelf will be showed
 * @class
 */
export class Home extends Component {

  static propTypes = {
    /** True when the api is fetching for shelfs */
    isFetching: PropTypes.bool.isRequired,
    /** Array of shelfs to be showed*/
    shelfs: PropTypes.array.isRequired
  };
  componentDidMount() {
    /** get our bookshelf info */
    this.getBookShelf();
  }

  getBookShelf() {
    const dispatch = this.props.dispatch;
    // Action before request
    dispatch(bookShelfActions.requestBookshelf());
    // API call
    BooksAPI.getAll()
      .then(bookShelf => {
        // Check if a error is return, happens when no book is found
        bookShelf.error
          ? // error action
            dispatch(bookShelfActions.failedBookshelf())
          : //receive action passing result
            dispatch(bookShelfActions.receiveBookshelf(bookShelf));
      })
      .catch(e => {
        dispatch(bookShelfActions.failedBookshelf());
      });
  }
  render() {
    return <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {/** Add a bookshelf component for it shelf */
            this.props.shelfs.map(shelf => (
              <BookShelf
                key={shelf.name}
                shelfTitle={shelf.title}
                books={shelf.books}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>;
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.bookShelf.isFetching,
    shelfs: state.bookShelf.shelfs
  };
};

export default connect(mapStateToProps)(Home);
