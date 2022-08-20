/* eslint-disable max-classes-per-file */

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

export default class Books {
  constructor() {
    this.books = [];
  }

  addBook(title, author) {
    const book = new Book(title, author);
    const storedBooks = JSON.parse(localStorage.getItem('books'));
    if (storedBooks == null) {
      this.books = [];
    } else {
      this.books = JSON.parse(localStorage.getItem('books'));
    }
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  removeBook(index) {
    this.books = JSON.parse(localStorage.getItem('books'));
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}
