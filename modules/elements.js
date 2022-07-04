import Books from './books.js';

const bookList = document.getElementById('bookList');
const title = document.getElementById('title');
const author = document.getElementById('author');

const newBook = () => {
  const league = new Books();
  league.addBook(title.value, author.value);
  window.location.reload();
};

const removeBook = (e) => {
  const league = new Books();
  league.removeBook(e.currentTarget.index);
  window.location.reload();
};

const createElements = () => {
  const collection = new Books();

  const books = JSON.parse(localStorage.getItem('books'));
  if (books == null) {
    collection.books = [];
  } else {
    collection.books = books;
  }

  for (let i = 0; i < collection.books.length; i += 1) {
    const book = document.createElement('tr');
    book.classList.add('book');
    const labelElement = document.createElement('p');
    labelElement.innerHTML = `"${collection.books[i].title}" by ${collection.books[i].author}`;

    const remove = document.createElement('button');
    remove.innerHTML = 'Remove';
    remove.addEventListener('click', removeBook, false);
    remove.index = i;

    book.appendChild(labelElement);
    book.appendChild(remove);
    bookList.appendChild(book);
  }
};

export {
  newBook,
  createElements,
};