import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import addBook from '../redux/addBook/thunk/addBookThunk';

const BookAddForm = () => {

  const [formData , setFormData] = useState({
    name : '',
    author : '',
    thumbnail : '',
    price : 0,
    rating : 0,
    featured : false,
  });

  const dispatch = useDispatch();

  const [isChecked, setIsChecked] = useState(false); // add new state variable

  const handleInputChange = (event)=>{
    const {name , value, type, checked} = event.target;
    // console.log(name , value , type , checked)
    const newValue = type === 'checkbox' ? checked : value; // handle checkbox input

    setFormData({...formData , [name] : newValue});
    if (type === 'checkbox') setIsChecked(checked); // update checkbox state
  };

  const handleAddNewBook = (e)=>{
     e.preventDefault();
     dispatch(addBook(formData))
    //  console.log(formData);
    // console.log(isChecked ? 'checked' : 'not checked'); // log checkbox state
  };

  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
      <form className="book-form" onSubmit={handleAddNewBook}>
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input onChange={handleInputChange} required className="text-input" type="text" id="input-Bookname" name="name" />
        </div>

        <div className="space-y-2">
          <label htmlFor="category">Author</label>
          <input onChange={handleInputChange} required className="text-input" type="text" id="input-Bookauthor" name="author" />
        </div>

        <div className="space-y-2">
          <label htmlFor="image">Image Url</label>
          <input onChange={handleInputChange} required className="text-input" type="text" id="input-Bookthumbnail" name="thumbnail" />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input onChange={handleInputChange} required className="text-input" type="number" id="input-Bookprice" name="price" />
          </div>

          <div className="space-y-2">
            <label htmlFor="quantity">Rating</label>
            <input onChange={handleInputChange} required className="text-input" type="number" id="input-Bookrating" name="rating" min="1" max="5" />
          </div>
        </div>

        <div className="flex items-center">
          <input onChange={handleInputChange} id="input-Bookfeatured" type="checkbox" name="featured" className="w-4 h-4" />
          <label htmlFor="featured" className="ml-2 text-sm"> This is a featured book </label>
        </div>

        <button type="submit" className="submit" id="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookAddForm;
