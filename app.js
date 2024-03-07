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

// arrays for dropdowns and list of books
let bookList = [];
let knownAuthors = [];
let knownPublishers = [];


app.get('/add', (req, res) => {
  const title = req.query.title;
  const author = req.query.author;
  const genre = req.query.genre;
  const publisher = req.query.publisher;
  const publishYear = req.query.publishYear;
  const bookType = req.query.bookType; //the client is sending a json string using stringify, parse below

  // using JSON.parse in combination with JSON.stringify on the client side to ensure receiving and sending array correctly
  //learned about it in this reference https://www.digitalocean.com/community/tutorials/js-json-parse-stringify 
  const bookTypesArray = JSON.parse(bookType);

  const book = new Book(title, author, genre, publisher, publishYear, bookTypesArray);
  bookList.push(book);

  // checking if authors and publishers are already in the dropdown to avoid duplication
  if (author && !knownAuthors.includes(author)) {
    knownAuthors.push(author);
  }
  if (publisher && !knownPublishers.includes(publisher)) {
    knownPublishers.push(publisher);
  }

 // resonding with the list of knownAuthors, knownPublishers, and list of books
  res.end(JSON.stringify({knownAuthors, knownPublishers, books: bookList }));
});

app.get('/list', (req, res) => {
  // resonding with the list of books
  res.end(JSON.stringify({ books: bookList }));
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