import React, { Fragment, useContext } from 'react';
import BookItem from '../BookItem/BookItem';
import {BookContext} from '../App';
import type {Book} from '../BookItem/BookItem';

interface BookListProps {
  onBookSelect: (id: string) => void;
}

const BookList: React.FC<BookListProps> = ({onBookSelect}) => {
  const {books} = useContext(BookContext);
  return (
    <Fragment>
      <h1>List of Books</h1>
      <ul>
        {books.map((book) => {
          return <BookItem key={book.isbn} book={book} onClick={() => {
            onBookSelect(book.isbn)
          }} />
        })}
      </ul>
    </Fragment>
  );
}

export default BookList;
