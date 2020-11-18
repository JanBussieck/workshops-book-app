import React, {useContext} from 'react';
import {BookContext} from '../App';

export interface Book {
  title: string,
  isbn: string
};

interface BookProps {
  book: Book;
  onClick: () => void;
}

const BookItem: React.FC<BookProps> = ({book: {title, isbn}, onClick}) => {
  const {selectedBookId} = useContext(BookContext);
  return <li onClick={onClick} style={{cursor: 'pointer', backgroundColor: selectedBookId === isbn ? 'green' : 'white'}}>
    {title}
  </li>;
};

export default BookItem;
