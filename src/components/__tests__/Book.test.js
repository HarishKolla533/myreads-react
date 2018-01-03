import React from 'react'
import Book from '../book/Book'
import { shallow } from "enzyme";
import  testMocks from "../../utils/testMocks";


describe('Book Element', () => {
    let bookElement;
    beforeAll(()=>{
        bookElement = shallow(<Book book={testMocks.book} />);
    })
    it('Has a title', () => {
        expect(bookElement
            .find(".book-title")
            .text()).toBe(testMocks.book.title);
    })
    it('Has a author', () => {
        expect(bookElement
            .find(".book-authors").exists()).toBe(true);
    })

 
})


