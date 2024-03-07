 /*
Abdelrahman Qamhia - aaq225
CSE264 - Programming Assignment 4
Library App Server Side Script
*/
const express = require("express");
const path = require("path");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));
app.use(express.static(path.resolve(__dirname, "public")));

let bookList = [];


app.get('/add', (req,res) => {
  const title = req.query.title;
  const author = req.query.author;
  const genre = req.query.genre;
  const publisher = req.query.publisher;
  const publishYear = req.query.publishYear;
  const bookType = req.query.bookType;

  const book = new Book(title,author,genre,publisher,publishYear, bookType);
  bookList.push(book);

});

app.get('/list', (req,res) => {
  res.json(books);
});










































app.listen(3000);

class Book {
  constructor(title, author, genre, publisher, publishYear, bookType) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.publisher = publisher;
    this.publishYear = publishYear;
    this.bookType = bookType;
  }
}
