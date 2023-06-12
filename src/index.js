import React from "react";
import ReactDOM from "react-dom/client";

import "./banana.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://wpapi.sellingpower.com/wp-content/uploads/2021/10/2021_Recommended-Book_FrankCespedes-199x300.jpg"
      alt="some book"
    />
  );
};
const Title = () => {
  return <h2>Book title</h2>;
};
const Author = () => {
  return <h2>Author</h2>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
