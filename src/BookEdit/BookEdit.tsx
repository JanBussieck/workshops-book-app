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
  const [title, setTitle] = useState<string>(book.title);
  const [isbn, setIsbn] = useState<string>(book.isbn);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    setTitle(value);
  }

  const handleIsbnChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setIsbn(value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      title,
      isbn
    });
    onSubmit && onSubmit({
      title,
      isbn
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title: </label>
      <input id="title"
        name="title"
        type="text"
        required
        value={title}
        onChange={handleTitleChange} />
      <br />
      <label htmlFor="isbn">ISBN: </label>
      <input id="isbn"
        name="isbn"
        type="text"
        required
        value={isbn}
        onChange={handleIsbnChange} />
      <br />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default BookEdit;
