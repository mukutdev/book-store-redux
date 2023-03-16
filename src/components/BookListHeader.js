import React from 'react';

const BookListHeader = ({filter , setFilter}) => {
    return (
      <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>

      <div className="flex items-center space-x-4">
        <button onClick={()=> setFilter(false)} className={`${filter ? "filter-btn" : "filter-btn active-filter" } `} id="lws-filterAll">All</button>
        <button  onClick={()=> setFilter(true)} className={`${ filter ? "filter-btn active-filter" : "filter-btn"}`} id="lws-filterFeatured">Featured</button>
      </div>
    </div>
    );
};

export default BookListHeader;