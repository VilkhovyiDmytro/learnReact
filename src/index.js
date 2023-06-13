import React from "react";
import ReactDOM from "react-dom/client";

import "./banana.css";

const books = [
  {
    author: "Bandera",
    title: "Nash Batko",
    img: "./img/shopping(0).webp",
    id: 1,
  },
  {
    author: "Vunnuchenko",
    title: "beter would wrote",
    id: 2,
    img: "./img/shopping(1).webp",
  },
  {
    author: "Chornovil",
    title: "son is dodik",
    img: "./img/shopping(2).webp",
    id: 3,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
      <EventExamples />
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(e);
    console.log("handle form imput");
  };
  const handleButtonInput = (e) => {
    console.log("handle button imput");
  };
  const handleFormSubmission = (e) => {
    e.preventDefault()
    console.log("form submitted")
    };

  return (
    <section>
      <form action="" onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input type="text" name="example" id="" onChange={handleFormInput} style={{ margin: "1rem 0" }} />
      </form>
      <button onClick={handleButtonInput} type="submit">click me</button>
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  const {img,title,author}=props
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{author}</h2>
      <h2>{title}</h2>
    </article>
  );
};

// const Image = () => {
//   return <img src={img} alt={title} />;
// };
// const Title = () => {
//   return <h2>{title}</h2>;
// };
// const Author = () => {
//   return <h2>{author}</h2>;
// };
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
