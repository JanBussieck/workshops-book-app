import React, {useState, useEffect} from 'react';
import BookList from './BookList/BookList';
import type {Book} from './BookItem/BookItem';
import BookEdit from './BookEdit/BookEdit';

function App() {
  const [books, setBooks] = useState<Array<Book>>([])
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBookId, setSelectedBookId] = useState<string>();

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

  const book = selectedBookId && books.find(({isbn}) => {
    return isbn === selectedBookId;
  });

  return isLoading ? (
    <div>... Loading books ...</div>
  ) : (
    <div>
      <BookList books={books} onBookSelect={setSelectedBookId} />
      {book && <BookEdit book={book} key={book.isbn} />}
    </div>
  );
}

export default App;
