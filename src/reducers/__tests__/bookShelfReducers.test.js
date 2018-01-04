import {
  REQUEST_BOOKSHELF,
  RECEIVE_BOOKSHELF,
  FAILED_BOOKSHELF,
  CHANGE_BOOKSHELF
} from "../../constants/ActionTypes";
import reducer from "../bookShelfReducers";
import testMocks from "../../utils/testMocks";

describe("BookShelf Reducer", () => {
  const reducerResult = reducer({}, { type: RECEIVE_BOOKSHELF, bookShelf: testMocks.books });

  it("Check if add right number of shelfs", () => {
    expect(reducerResult.shelfs).toHaveLength(2);
  });
    it("Check shelf change", () => {
      const shelfChangeResult = reducer(reducerResult, {
        type: CHANGE_BOOKSHELF,
        book: testMocks.books[0],
        shelf: "newShelf"
      });
      const newShelf = shelfChangeResult.shelfs.find(shelf => shelf.name === 'newShelf');
      expect(newShelf.name).toBe("newShelf");
      expect(newShelf.books[0].title).toBe("The Linux Command Line");
    });
});
