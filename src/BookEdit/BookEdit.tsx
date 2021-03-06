import React, {useState, useContext} from 'react';
import {SelectBookContext} from '../App';
import type {Book} from '../BookItem/BookItem';

interface BookEditProps {
  onSubmit?: (book: Book) => void;
}

const validatePresence = (value: string) => {
  if (value.trim() === '') {
    return "Muss angegeben werden";
  }
};

const BookEdit: React.FC<BookEditProps> = ({onSubmit}) => {
  const {selectedBook} = useContext(SelectBookContext);
  // useState hooks
  // set initial values for book form title / isbn
  const [form, setForm] = useState(selectedBook || {
    title: '',
    isbn: ''
  });

  const [errors, setErrors] = useState({
    title: null,
    isbn: null
  });

  const handleFormInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value, name } } = event;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  }

  const handleValidate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value, name } } = event;
    const error = validatePresence(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error
    }));
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedBook) {
      fetch(`http://localhost:4730/books/${selectedBook.isbn}`, {
        method: 'PUT',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => response.json())
      .then((book) => {
        console.log('book', book);
        onSubmit && onSubmit(form);
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title: </label>
      {errors.title && <span style={{border: '2px solid red'}}>{errors.title}</span>}
      <input id="title"
        name="title"
        type="text"
        value={form.title}
        onBlur={handleValidate}
        onChange={handleFormInputChange} />
      <br />
      <label htmlFor="isbn">ISBN: </label>
      {errors.isbn && <span style={{border: '2px solid red'}}>{errors.isbn}</span>}
      <input id="isbn"
        name="isbn"
        type="text"
        value={form.isbn}
        onBlur={handleValidate}
        onChange={handleFormInputChange} />
      <br />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default BookEdit;
