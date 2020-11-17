import React from 'react';

export interface Book {
  title: string,
  isbn: string
};

const BookItem: React.FC<{book: Book}> = ({book: {title}}) => {
  return <li>{title}</li>;
};

export default BookItem;
