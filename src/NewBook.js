import { useState } from "react";
const NewBook = (props) => {
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Title: ", bookTitle);
    console.log("Author: ", bookAuthor);
    props.x({
      title: bookTitle,
      author: bookAuthor,
    });
  };
  return (
    <div className = "book-form">
      <h1 className = "book-form-h1">New Book Form</h1>
      <form onSubmit = {handleSubmit}>
        <p>Title</p>
        <input value = {bookTitle} onChange = {(e) => setBookTitle(e.target.value)}/>
        <p>Author</p>
        <input value = {bookAuthor} onChange = {(e) => setBookAuthor(e.target.value)}/>
        <br/>
        <br/>
        <br/>
        <button>Submit</button>
        <br/>
      </form>
    </div>
  );
};
export default NewBook;