import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  FAILED_BOOKS,
  REQUEST_BOOKSHELF,
  RECEIVE_BOOKSHELF,
  FAILED_BOOKSHELF,
  CHANGE_BOOKSHELF
} from "../../constants/ActionTypes";

import * as bookActions from "../bookActions"
import * as bookShelfActions from "../bookShelfActions"
import testMocks from "../../utils/testMocks";


describe("Book actions", () => {
  it("should create an action to receive books", () => {
    const expectedAction = { type: RECEIVE_BOOKS, books: testMocks.books };
    expect(bookActions.receiveBooks(testMocks.books)).toEqual(expectedAction);
  });
});
describe("BookShelf actions", () => {
  it("should create an action to receive bookshelfs", () => {
    const expectedAction = { type: RECEIVE_BOOKSHELF, bookShelf: testMocks.books };
    expect(bookShelfActions.receiveBookshelf(testMocks.books)).toEqual(expectedAction);
  });
  it("should create an action to change bookshelf", () => {
    const shelf = 'newShelf';
    const expectedAction = { type: CHANGE_BOOKSHELF, book: testMocks.book, shelf };
    expect(bookShelfActions.changeBookShelf(testMocks.book, shelf)).toEqual(expectedAction);
  });
});