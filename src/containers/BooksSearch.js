import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import qs from "query-string";
import createBrowserHistory from "history/createBrowserHistory";
import * as bookActions from "../actions/bookActions";
import * as BooksAPI from "../api/BooksAPI";
import Book from "../components/book/Book";
import SearchBar from "../components/common/SearchBar";
class BooksSearch extends Component {
  constructor(props) {
    super(props);
  }

  searchBooks(query) {
    const history = createBrowserHistory();
    const dispatch = this.props.dispatch;
    history.push(`/search?query=${query}`);
    dispatch(bookActions.requestBooks());
    BooksAPI.search(query)
      .then(books => {
        books.error
          ? dispatch(bookActions.failedBooks())
          : dispatch(bookActions.receiveBooks(books));
      })
      .catch(e => {
        dispatch(bookActions.failedBooks());
      });
  }

  componentWillMount(){
    const params = qs.parse(this.props.location.search);
    this.searchBooks(params.query);

  }
  render() {
    const params = qs.parse(this.props.location.search);

    return (
      <div className="search-books">
        <SearchBar
          query={params.query}
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

BooksSearch.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  books: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(BooksSearch);
