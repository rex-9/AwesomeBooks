/* eslint-disable max-classes-per-file */

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
class Books {
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

let books = JSON.parse(localStorage.getItem('books'));
if (books == null) {
  books = [];
}

const bookList = document.getElementById('bookList');
const title = document.getElementById('title');
const author = document.getElementById('author');
const submit = document.getElementById('btn');

function newBook() {
  const league = new Books();
  league.addBook(title.value, author.value);
  window.location.reload();
}

function removeBook(e) {
  const league = new Books();
  league.removeBook(e.currentTarget.index);
  window.location.reload();
}

submit.addEventListener('click', newBook, false);

for (let i = 0; i < books.length; i += 1) {
  const book = document.createElement('tr');
  book.classList.add('book');
  const labelElement = document.createElement('p');
  labelElement.innerHTML = `"${books[i].title}" by ${books[i].author}`;

  const remove = document.createElement('button');
  remove.innerHTML = 'Remove';
  remove.addEventListener('click', removeBook, false);
  remove.index = i;

  book.appendChild(labelElement);
  book.appendChild(remove);
  bookList.appendChild(book);
}

document.getElementById('listLink').style.color = 'blue';

document.getElementById('listNav').onclick = function () {
  document.getElementById('list').style.display = 'block';
  document.getElementById('add').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
  document.getElementById('listLink').style.color = 'blue';
  document.getElementById('addLink').style.color = 'black';
  document.getElementById('contactLink').style.color = 'black';
};

document.getElementById('addNav').onclick = function () {
  document.getElementById('add').style.display = 'block';
  document.getElementById('list').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
  document.getElementById('addLink').style.color = 'blue';
  document.getElementById('contactLink').style.color = 'black';
  document.getElementById('listLink').style.color = 'black';
};

document.getElementById('contactNav').onclick = function () {
  document.getElementById('contact').style.display = 'block';
  document.getElementById('list').style.display = 'none';
  document.getElementById('add').style.display = 'none';
  document.getElementById('contactLink').style.color = 'blue';
  document.getElementById('addLink').style.color = 'black';
  document.getElementById('listLink').style.color = 'black';
};