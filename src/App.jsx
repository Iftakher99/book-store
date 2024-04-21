import { useEffect } from 'react';

import BookCreate from './components/BookCreate';
import useBookContext from './hooks/use-book-context';
import BookList from './components/BookList';

function App() {
  const { fetchBooks } = useBookContext();

  useEffect(() => {
    fetchBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
