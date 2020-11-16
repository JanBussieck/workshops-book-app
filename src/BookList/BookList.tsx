import React, { Fragment } from 'react';
import BookItem from '../BookItem/BookItem';
import type {Book} from '../BookItem/BookItem';

const books: Book[] = [
  {
    title: "Harry Potter",
    isbn: "1232"
  },
  {
    title: "Der Graf von Monte Christo",
    isbn: "1232"
  }
];

export const BookList: React.FC = () => {

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
