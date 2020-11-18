import React, { Fragment } from 'react';
import BookItem from '../BookItem/BookItem';
import type {Book} from '../BookItem/BookItem';

interface BookListProps {
  books: Array<Book>;
  onBookSelect: (id: string) => void;
}

const BookList: React.FC<BookListProps> = ({books, onBookSelect}) => {

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
