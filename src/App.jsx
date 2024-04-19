import { useState } from 'react';
import BookCreate from './components/BookCreate';

const App = () => {
  const [bookTitle, setBookTitle] = useState([]);
  const createBook = (title) => {
    const updateBook = [
      ...bookTitle,
      { id: Math.round(Math.random() * 9999), title: title },
    ];

    setBookTitle(updateBook);
  };
  console.log(bookTitle);

  return (
    <>
      <BookCreate onCreate={createBook} />
    </>
  );
};

export default App;
