import { useState, useEffect } from 'react';
import axios from "axios";
import NewBook from "./NewBook"

const Books = (props) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    console.log("mounted");
    getBooks();
  }, []);

  const addBook = (book) => {
    let newBookArray = [book, ...books];
    setBooks(newBookArray);
  };

  // const deleteBook = (isbn) => {
  //   console.log("delete here");
  //   console.log(isbn);

  //   let filterBooks = books.filter((b) => b.isbn !== isbn);
  //   setBooks(filterBooks);
  // };

  const getBooks = async () => {
    let response = await axios.get("https://fakerapi.it/api/v1/books?_quantity=5");
    console.log(response.data.date);
    setBooks(response.data.data);
  };

  const renderBooks = () => {
    if (books.length === 0) {
      return <p>No Books</p>;
    }
    return books.map((book) => {
      return (
        <div key = {book.isbn} className = "book-container">
          <h1>{book.title}</h1>
          <p><b>Author: </b>{book.author}</p>

          {/* <button onClick = {() => deleteBook()}>Delete</button> */}
        </div>
      );
    });
  };
  return (
    <div>
      <NewBook x={addBook} />
      <p className = "book-list">Book List: </p>
      <div>{renderBooks()}</div>
    </div>
  );
};


export default Books;