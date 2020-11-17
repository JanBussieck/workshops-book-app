import React, { Fragment, useState, useEffect } from 'react';
import BookItem from '../BookItem/BookItem';
import BookEdit from '../BookEdit/BookEdit';
import type {Book} from '../BookItem/BookItem';

const BookList: React.FC = () => {

  const [books, setBooks] = useState<Array<Book>>([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4730/books').then((response) => {
      return response.json();
    }).then((books) => {
      setBooks(books);
    }).catch((error) => {
      console.warn(error);
    }).finally(() => {
      setIsLoading(false);
    });
  }, [setBooks, setIsLoading])

  const book = books[0];
  return (
    <Fragment>
      <h1>List of Books</h1>
      {isLoading ? (
        <div>... Loading books ...</div>
      ) : (
        <ul>
          {books.map((book) => {
            return <BookItem key={book.isbn} book={book} />
          })}
        </ul>
      )}
      {book && <BookEdit book={book} />}
    </Fragment>
  );
}

export default BookList;
