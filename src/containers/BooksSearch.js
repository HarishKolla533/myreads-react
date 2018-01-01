import React, { Component } from "react";
import { connect } from "react-redux";
import * as bookActions from "../actions/bookActions";
import * as BooksAPI from "../api/BooksAPI";

class BooksSearch extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        const dispatch = this.props.dispatch;
        dispatch(bookActions.requestBooks());
        BooksAPI.getAll().then(books => {
            dispatch(bookActions.receiveBooks(books))
            console.log(this.props)
        }
    );
}

render() {
    console.log(this.props)
    return (
      <div>
        <h3>Book</h3>
        <ul>
          {this.props.books.map((b, i) => <li key={i}>{b.title}</li>)}
        </ul>
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {   
    isFetching: state.books.isFetching,
    books: state.books.items
  };
};


export default connect(mapStateToProps)(BooksSearch);
