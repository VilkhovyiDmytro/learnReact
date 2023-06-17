const Book = (props) => {
    const {img,title,author}=props;
  
    
    return (
      <article className="book">
        <img src={img} alt={title} />
        <h2>{author}</h2>
        <button onClick={()=> {}}>click me</button>
        <h4>{title}</h4>
      </article>
    );
  };
  export default Book;