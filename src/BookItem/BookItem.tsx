import React from 'react';

export interface Book {
  title: string,
  isbn: string
};

const BookItem = ({book}: {book: Book}) => <li>{book.title}</li>;

export default BookItem;
