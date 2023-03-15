import React from 'react';
import BookAddForm from './BookAddForm';
import BookCard from './BookCard';
import BookListHeader from './BookListHeader';

const BookContainer = () => {
    return (
        <div class="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
      <div class="order-2 xl:-order-1">
        <BookListHeader/>

        <div class="lws-bookContainer">
          {/* <!-- Card 1 --> */}
                 <BookCard/>
        </div>
      </div>
      <div>
            <BookAddForm/>
      </div>
    </div>
    );
};

export default BookContainer;