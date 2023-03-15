import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchBooks from '../redux/addBook/thunk/fetchBooks';
import BookAddForm from './BookAddForm';
import BookCard from './BookCard';
import BookListHeader from './BookListHeader';

const BookContainer = () => {

  const allBooks = useSelector((state) => state.books)
  const dispatch = useDispatch()

  
  useEffect(()=>{

    dispatch(fetchBooks())

  } , [dispatch])


  console.log(allBooks)



    return (
        <div class="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
      <div class="order-2 xl:-order-1">
        <BookListHeader/>

        <div class="lws-bookContainer">
          {/* <!-- Card 1 --> */}
                 {
                  allBooks.map(book => <BookCard book={book}/>)
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