import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import qs from "query-string";
import createBrowserHistory from "history/createBrowserHistory";
import * as bookActions from "../actions/bookActions";
import * as BooksAPI from "../api/BooksAPI";
import Book from "../components/book/Book";
import SearchBar from "../components/common/SearchBar";

/**
 * Container for the search books route
 * @class
 */
export class BooksSearch extends Component {
  constructor(props) {
    super(props);
    this.query;
  }
  static propTypes = {
  /** if the state is fetching */
  isFetching: PropTypes.bool.isRequired,
  /** array of books found on search */
  books: PropTypes.array.isRequired
};
  /**
   * Find books in the api
   * @param {string} query
   */
  searchBooks(query) {
    const history = createBrowserHistory();
    const dispatch = this.props.dispatch;
    // Add query to the route
    history.push(`/search?query=${query}`);
    // Dispatch action before request
    dispatch(bookActions.requestBooks());
    // Api call for the books
    BooksAPI.search(query)
      .then(books => {
        // check if the api returned a error property. It will happen when no book is found
        books.error
          ? // error action
            dispatch(bookActions.failedBooks())
          : // books received action
            dispatch(bookActions.receiveBooks(books));
      })
      .catch(e => {
        dispatch(bookActions.failedBooks());
      });
  }

  componentDidMount() {
    /** Check if the route jas a query, and make a search with it */
    const params = qs.parse(this.props.location.search);
    
    if (params.query) {
      this.query = params.query;
      this.searchBooks(params.query);
    }
  }
  render() {
    return (
      <div className="search-books">
        <SearchBar
          query={this.query}
          onType={query => this.searchBooks(query)}
        />
        <div className="search-books-results">
          <ol className="books-grid">
            {this.props.books.map((b, i) => <Book key={i} book={b} />)}
          </ol>
        </div>
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    isFetching: state.books.isFetching,
    books: state.books.items
  };
};



export default connect(mapStateToProps)(BooksSearch);
