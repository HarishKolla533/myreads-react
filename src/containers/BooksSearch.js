import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import qs from "query-string";
import createBrowserHistory from "history/createBrowserHistory";
import * as bookActions from "../actions/bookActions";
import Book from "../components/book/Book";
import SearchBar from "../components/common/SearchBar";
import { debounce } from "lodash";

/**
 * Container for the search books route
 * @class
 */
export class BooksSearch extends Component {
  constructor(props) {
    super(props);
    this.searchBooks = debounce(this.searchBooks, 500);
  }

  static propTypes = {
    /** if the state is fetching */
    isFetching: PropTypes.bool.isRequired,
    /** array of books found on search */
    books: PropTypes.array.isRequired
  };
  searchBooks(query) {
    const dispatch = this.props.dispatch;
    dispatch(bookActions.searchBooks(query)).then(() => {
      // Add query to the route
      const history = createBrowserHistory();
      history.push(`/search?query=${this.props.query}`);
    });
  }

  componentDidMount() {
    /** Check if the route jas a query, and make a search with it */
    const params = qs.parse(this.props.location.search);

    if (params.query !== this.props.query) {
      this.query = params.query;
      this.searchBooks(params.query);
    }
  }
  render() {
    return (
      <div className="search-books">
        <SearchBar
          query={this.props.query}
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
    books: state.books.items,
    query: state.books.query
  };
};

export default connect(mapStateToProps)(BooksSearch);
