import React from "react";
import ReactDOM from "react-dom/client";

import "./banana.css";

const books = [
  {
    author:"Bandera",
    title:"Nash Batko",
    img:"./img/shopping(0).webp",
    id:1,
  },
  {
    author:"Vunnuchenko",
    title:"beter would wrote",
    id:2,
    img:"./img/shopping(1).webp"
  },
  {
    author:"Chornovil",
    title:"son is dodik",
    img:"./img/shopping(2).webp",
    id:3,
  }
]

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book)=>{
        return <Book {...book} key={book.id}/>
      })}
    </section>
  );
};



const Book = (props) => {
  console.log(props)
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.author}</h2>
      <h2>{props.title}</h2>
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
