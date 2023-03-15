import React from 'react';

const BookListHeader = () => {
    return (
        <div class="flex items-center justify-between mb-12">
        <h4 class="mt-2 text-xl font-bold">Book List</h4>

        <div class="flex items-center space-x-4">
          <button class="filter-btn active-filter" id="lws-filterAll">All</button>
          <button class="filter-btn" id="lws-filterFeatured">Featured</button>
        </div>
      </div>
    );
};

export default BookListHeader;