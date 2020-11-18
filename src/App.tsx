import React, {useState, useEffect} from 'react';
import BookList from './BookList/BookList';
import type {Book} from './BookItem/BookItem';
import BookEdit from './BookEdit/BookEdit';

const initialContext: {books: Array<Book>} = {
  books: []
}
const initialSelectedBookContext: {selectedBookId?: string, selectedBook?: Book} = {};

export const BookContext = React.createContext(initialContext);
export const SelectBookContext = React.createContext(initialSelectedBookContext);

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

  // book: '' | undefined | Book
  const book = selectedBookId && books.find(({isbn}) => {
    return isbn === selectedBookId;
  });

  const selectedBook = !(book === '' || book === undefined) ? book : undefined;

  return (
    <BookContext.Provider value={{books}}>
      <SelectBookContext.Provider value={{selectedBookId, selectedBook}}>
      {isLoading ? (
        <div>... Loading books ...</div>
      ) : (
        <div>
          <BookList onBookSelect={setSelectedBookId} />
          {selectedBook && <BookEdit key={selectedBook.isbn} />}
        </div>
      )}
      </SelectBookContext.Provider>
    </BookContext.Provider>
  )
}

export default App;
