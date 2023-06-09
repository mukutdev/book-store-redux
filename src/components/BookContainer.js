import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../redux/addBook/thunk/fetchBooks";
import BookAddForm from "./BookAddForm";
import BookCard from "./BookCard";
import BookListHeader from "./BookListHeader";
import Header from "./Header";

const BookContainer = () => {
  const books = useSelector(state => state.books);
  const [filter, setFilter] = useState(false);
  const [searchText, setSearch] = useState("");
  const [editBookForm , setEditBookForm] = useState(null)
  const [isUpdate , setIsUpdate] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const featuredBooksHandler = item => {

    if (filter) {
      return item.featured;
    } else {
      return item;
    }
  };

  const searchFilterHandler = item => {
    if (searchText) {
      return item.name.toLowerCase().includes(searchText?.toLowerCase());
    } else {
      return true;
    }
  };

  const handleEditBook = (book)=>{
    setEditBookForm(book)
  }

  return (
    <>
      <Header setSearch={setSearch} />
      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="order-2 xl:-order-1">
          <BookListHeader filter={filter} setFilter={setFilter} />
          <div className="lws-bookContainer">
            {/* <!-- Cards --> */}

            {books
              .filter(searchFilterHandler)
              .filter(featuredBooksHandler)
              .map(book => (
                <BookCard setIsUpdate={setIsUpdate} key={book.id} book={book}  handleEditBook={handleEditBook} />
              ))}
          </div>
        </div>
        <div>
          <BookAddForm isUpdate={isUpdate} setIsUpdate={setIsUpdate} editBookForm={editBookForm} />
        </div>
      </div>
    </>
  );
};

export default BookContainer;
