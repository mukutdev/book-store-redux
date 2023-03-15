import { loadedBook } from "../action";

const fetchBooks = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:9000/books");
      const books = await response.json();
      console.log(books);
      dispatch(loadedBook(books));
    } catch (error) {
      console.error(error);
    }
  };
};

export default fetchBooks;
