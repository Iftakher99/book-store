import { useContext } from 'react';
import BookShow from './BookShow';
import BookContext from '../context/book';

function BookList({ books, onDelete, onEdit }) {
  const { count, incrementCount } = useContext(BookContext);

  const renderedBooks = books.map((book) => {
    return (
      <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
    );
  });

  return (
    <>
      <div>
        <h3>{count}</h3> <button onClick={incrementCount}>increment</button>
      </div>
      <div className="book-list">{renderedBooks}</div>
    </>
  );
}

export default BookList;
