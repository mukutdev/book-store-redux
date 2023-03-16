import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchBooks from '../redux/addBook/thunk/fetchBooks';
import BookAddForm from './BookAddForm';
import BookCard from './BookCard';
// import BookListHeader from './BookListHeader';

const BookContainer = () => {

  const books = useSelector((state) => state.books)
  const [filter , setFilter] = useState(false)
  const dispatch = useDispatch()

  
  useEffect(()=>{

    dispatch(fetchBooks())

  } , [dispatch])


  const featuredBooksHandler = (item)=>{
      if(filter){
        return item.featured
      }else{
        return item
      }

  }



    return (
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
      <div className="order-2 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button onClick={()=> setFilter(false)} className={`${filter ? "filter-btn" : "filter-btn active-filter" } `} id="lws-filterAll">All</button>
          <button  onClick={()=> setFilter(true)} className={`${ filter ? "filter-btn active-filter" : "filter-btn"}`} id="lws-filterFeatured">Featured</button>
        </div>
      </div>

        <div className="lws-bookContainer">
          {/* <!-- Cards --> */}
                
                  {
                    books.filter(featuredBooksHandler).map(book => <BookCard key={book.id} book={book}/>)
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