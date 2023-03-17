import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import addBook from '../redux/addBook/thunk/addBookThunk';
import updateBook from '../redux/addBook/thunk/updateBook';

const BookAddForm = ({editBookForm , isUpdate , setIsUpdate}) => {


  const [formData , setFormData] = useState({
    name : '',
    author : '',
    thumbnail : '',
    price : 0,
    rating : 0,
    featured : false,
  });

  const dispatch = useDispatch();


  useEffect(() => {
    if (editBookForm !== null) {
      setFormData(prevFormData => ({...prevFormData, ...editBookForm}));
    }
  }, [editBookForm]);


  const handleInputChange = (event)=>{
    const {name , value, type, checked} = event.target;

    const newValue = type === 'checkbox' ? checked : value; 

    setFormData({...formData , [name] : newValue});
  };

  const handleAddNewBook = (e)=>{
     e.preventDefault();
     dispatch(addBook(formData))
     setFormData({
      name : '',
      author : '',
      thumbnail : '',
      price : 0,
      rating : 0,
      featured : false,
    })
    
  };

  const handleUpdateBook = (e)=>{
    e.preventDefault()
    dispatch(updateBook(formData))
    setFormData({
      name : '',
      author : '',
      thumbnail : '',
      price : 0,
      rating : 0,
      featured : false,
    })
    setIsUpdate(false)
  }
  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
      <form className="book-form" onSubmit={isUpdate ? handleUpdateBook : handleAddNewBook}>
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input value={formData?.name} onChange={handleInputChange} required className="text-input" type="text" id="input-Bookname" name="name" />
        </div>

        <div className="space-y-2">
          <label htmlFor="category">Author</label>
          <input value={formData?.author} onChange={handleInputChange} required className="text-input" type="text" id="input-Bookauthor" name="author" />
        </div>

        <div className="space-y-2">
          <label htmlFor="image">Image Url</label>
          <input value={formData?.thumbnail} onChange={handleInputChange} required className="text-input" type="text" id="input-Bookthumbnail" name="thumbnail" />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input  value={formData?.price} onChange={handleInputChange} required className="text-input" type="number" id="input-Bookprice" name="price" />
          </div>

          <div className="space-y-2">
            <label htmlFor="quantity">Rating</label>
            <input value={formData?.rating} onChange={handleInputChange} required className="text-input" type="number" id="input-Bookrating" name="rating" min="1" max="5" />
          </div>
        </div>

        <div className="flex items-center">
          <input checked={formData.featured} onChange={handleInputChange} id="input-Bookfeatured" type="checkbox" name="featured" className="w-4 h-4" />
          <label htmlFor="featured" className="ml-2 text-sm"> This is a featured book </label>
        </div>
        {
           !isUpdate ? <button  type="submit" className="submit" id="submit">Add Book</button> : <button  type="submit" className="submit" id="submit">Update Book</button>
        }
        
      </form>
    </div>
  );
};

export default BookAddForm;
