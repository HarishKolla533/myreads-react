import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  FAILED_BOOKS
} from "../../constants/ActionTypes";
import reducer from "../bookReducers";
import testMocks from "../../utils/testMocks";

describe("Book Reducer", () => {
  it("Check if add books", () => {
    const reducerResult = reducer({}, { type: RECEIVE_BOOKS, books: testMocks.books });
    expect(reducerResult.items).toEqual(testMocks.books);
  });
});
