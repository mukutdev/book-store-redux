import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchBooks from '../redux/addBook/thunk/fetchBooks';
import BookAddForm from './BookAddForm';
import BookCard from './BookCard';
import BookListHeader from './BookListHeader';

const BookContainer = () => {

  const books = useSelector((state) => state.books)
  const dispatch = useDispatch()

  
  useEffect(()=>{

    dispatch(fetchBooks())

  } , [dispatch])




    return (
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
      <div className="order-2 xl:-order-1">
        <BookListHeader/>

        <div className="lws-bookContainer">
          {/* <!-- Card 1 --> */}
                 {
                  books.map(book => <BookCard key={book.id} book={book}/>)
                 }
        </div>
      </div>
      <div>
            <BookAddForm/>
      </div>
    </div>
    );
};

export default BookContainer;