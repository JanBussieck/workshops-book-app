import React, { Fragment } from 'react';
import BookItem from '../BookItem/BookItem';
import type {Book} from '../BookItem/BookItem';

const BookList: React.FC<{ books: Array<Book> }> = ({books}) => {

  return (
    <Fragment>
      <h1>List of Books</h1>
      <ul>
        {books.map((book) => {
          return <BookItem key={book.isbn} book={book} />
        })}
      </ul>
    </Fragment>
  );
}

export default BookList;
