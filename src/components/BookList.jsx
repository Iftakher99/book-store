import useBookContext from '../hooks/use-book-context';
import BookShow from './BookShow';

function BookList() {
  const { books, deleteBookById, editBookById } = useBookContext();

  const renderedBooks = books.map((book) => {
    return (
      <BookShow
        onEdit={editBookById}
        onDelete={deleteBookById}
        key={book.id}
        book={book}
      />
    );
  });

  return (
    <>
      <div className="book-list">{renderedBooks}</div>
    </>
  );
}

export default BookList;
