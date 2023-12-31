import React from "react";
import ReactDOM from "react-dom/client";

import "./banana.css";
import books from "./books.js";
import Book from "./Book";

const BookList = () => {


  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id}  />;
      })}
    </section>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
