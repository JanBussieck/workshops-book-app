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
      <input id="title"
        name="title"
        type="text"
        required
        value={form.title}
        onChange={handleFormInputChange} />
      <br />
      <label htmlFor="isbn">ISBN: </label>
      <input id="isbn"
        name="isbn"
        type="text"
        required
        value={form.isbn}
        onChange={handleFormInputChange} />
      <br />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default BookEdit;
