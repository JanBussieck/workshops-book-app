import React, {useState} from 'react';
import type {Book} from '../BookItem/BookItem';

interface BookEditProps {
  book: Book;
  onSubmit?: (book: Book) => void;
}
// type
const BookEdit: React.FC<BookEditProps> = ({book, onSubmit}) => {
  // useState hooks
  // set initial values for book form title / isbn
  const [form, setForm] = useState(book);
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
    onSubmit && onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title: </label>
      {errors.title && <div style={{border: '2px solid red'}}>errors.title</div>}
      <input id="title"
        name="title"
        type="text"
        value={form.title}
        onBlur={() => console.log("I was blurred")}
        onChange={handleFormInputChange} />
      <br />
      <label htmlFor="isbn">ISBN: </label>
      {errors.isbn && <div style={{border: '2px solid red'}}>errors.isbn</div>}
      <input id="isbn"
        name="isbn"
        type="text"
        value={form.isbn}
        onBlur={() => console.log("I was blurred")}
        onChange={handleFormInputChange} />
      <br />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default BookEdit;
