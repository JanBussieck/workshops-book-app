import React from 'react';

export interface Book {
  title: string,
  isbn: string
};

interface BookProps {
  book: Book;
  onClick: () => void;
}

const BookItem: React.FC<BookProps> = ({book: {title}, onClick}) => {
  return <li onClick={onClick} style={{cursor: 'pointer'}}>
    {title}
  </li>;
};

export default BookItem;
