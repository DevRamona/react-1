import React from "react";
import ReactDom from "react-dom/client";

import './index.css';
const BookList = () => {
    return (
    <section className = "booklist">
        <Book/>
        <Book/>
        <Book/>
        <Book/>


    </section>
    );
};

const author = "Dav Pilkey";
const Book = () => {
  const title = "Dog Man:The Scarlet Shedder";
    return (
      <article className="book ">
        <img
    src="https://m.media-amazon.com/images/I/51o1ZxqOQUL._SY445_SX342_.jpg"
    alt="Dog Man:The Scarlet Shedder"
  />
  <h2>{title}</h2>
  <h4>{author}</h4>


      </article>
    );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<BookList/>);
