import React from "react";
import { Home } from "../HomePage";
import { shallow } from "enzyme";
import testMocks from "../../utils/testMocks";

const props = {
  shelfs: testMocks.shelfs,
  isFetching: false
};
describe("Home Page", () => {
  let homePageElement;

  beforeAll(() => {
    homePageElement = shallow(<Home {...props} />, {
      disableLifecycleMethods: true
    });
  });

  it("Has the right number of shelfs", () => {
    expect(homePageElement
        .find(".list-books-content")
        .children().length).toBe(props.shelfs.length);
  });
});
