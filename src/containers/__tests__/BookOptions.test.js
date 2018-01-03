import React from 'react'
import { BookOptions } from '../BookOptions'
import { shallow } from "enzyme";
import  testMocks from "../../utils/testMocks";

describe('Book Options', () => {

    it('Check if renders', () => {
        const bookOptionsElement = shallow(<BookOptions book={testMocks.book} />);
        expect(bookOptionsElement
            .find(".book-shelf-changer")
            .exists()).toBe(true);
    }) 
})


