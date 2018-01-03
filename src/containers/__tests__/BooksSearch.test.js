import React from "react";
import { BooksSearch } from "../BooksSearch";
import { shallow } from "enzyme";
import testMocks from "../../utils/testMocks";

const props = {
  books: testMocks.books,
  isFetching: false
};
describe("Book Search", () => {
  let bookSearchElement;

  beforeAll(() => {
    bookSearchElement = shallow(<BooksSearch {...props} />, {
      disableLifecycleMethods: true
    });
  });

  it("Has the right number of books", () => {
    expect(bookSearchElement.find(".books-grid").children().length).toBe(
      props.books.length
    );
  });
});
