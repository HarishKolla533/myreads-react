import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


/**
 * Basic searchbar stateless component
 * @constructor
 * @param {object} props 
 */

const SearchBar = props => (
    <div className="search-books-bar">
    <Link
      className="close-search"
      to="/"
      >
      Close
    </Link>
    <div className="search-books-input-wrapper">
      <input
        type="text"
        placeholder="Search by title or author"
        onChange={event => props.onType(event.target.value)}
        defaultValue={props.query}
      />
    </div>
  </div>
);

SearchBar.propTypes = {
  //** A function to call when the user type on the input */
  onType: PropTypes.func.isRequired,
  //** A query term that can come from the route */
  query: PropTypes.string
};
export default SearchBar;
