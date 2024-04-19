import { useState } from 'react';

const BookCreate = ({ onCreate }) => {
  const [bookTitle, setBookTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(bookTitle);
    setBookTitle(' ');
  };

  const handleChange = (e) => {
    setBookTitle(e.target.value);
  };

  return (
    <div className="book-create">
      <h3>Add a book</h3>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className="input"
          type="text"
          placeholder="Book name"
          value={bookTitle}
          onChange={handleChange}
        />
        <button className="button">Create!</button>
      </form>
    </div>
  );
};

export default BookCreate;
