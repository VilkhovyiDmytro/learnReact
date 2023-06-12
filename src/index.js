import React from "react";
import ReactDOM from "react-dom/client";

import "./banana.css";

const author = "Dmytro Vilkhovyi";
const title = "some book";
const img = "./img/shopping(0).webp";



const BookList = () => {
  return (
    <section className="booklist">
      <Book title={title} img={img} author={author}/>
      <Book title={title} img={img} author={author}/>
      <Book title={title} img={img} author={author}/>
    </section>
  );
};

const Book = (props) => {
  console.log(props)
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h2>{props.author}</h2>
    </article>
  );
};

const Image = () => {
  return <img src={img} alt={title} />;
};
const Title = () => {
  return <h2>{title}</h2>;
};
const Author = () => {
  return <h2>{author}</h2>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
