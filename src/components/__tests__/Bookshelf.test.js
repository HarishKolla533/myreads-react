import React from 'react'
import BookShelf from "../book/BookShelf";
import { shallow } from "enzyme";
import testMocks from "../../utils/testMocks";


const props = {
  books: testMocks.books,
  shelfTitle:"Test shelf"
};
describe('Book Element', () => {
    let bookShelfElement;
    beforeAll(()=>{
        bookShelfElement = shallow(<BookShelf {...props} />);
    })
    it('Has the right number of books', () => {
        expect(bookShelfElement
            .find(".books-grid")
            .children().length).toBe(props.books.length);
    })
    it('Has the right title', () => {
        expect(bookShelfElement
            .find(".bookshelf-title").text()).toBe(props.shelfTitle);
    })

 
})


