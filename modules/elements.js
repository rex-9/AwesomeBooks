import Books from './books.js';

const list = document.getElementById('list');
const bookList = document.getElementById('bookList');
const title = document.getElementById('title');
const author = document.getElementById('author');

const checkBooks = () => {
  if (!bookList.hasChildNodes()) {
    const boiler = document.createElement('p');
    boiler.id = 'boiler';
    boiler.style.cssText = 'color: green; text-align: center;';
    boiler.innerHTML = 'The new beginning of AwesomeBooks. <br>Let&apos; add new awesome books.😎';
    list.appendChild(boiler);
  }
};

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

const add = document.getElementById('add');

const validation = (input, action) => {
  input.addEventListener(action, (event) => {
    if (action === 'keypress') {
      if (event.key === 'Enter') {
        if (title.value === '' || author.value === '') {
          const preverror = document.getElementById('error');
          if (!preverror) {
            const error = document.createElement('p');
            error.id = 'error';
            error.innerHTML = 'Form should not be empty';
            error.style.cssText = 'color: red;';
            add.appendChild(error);
          }
        } else {
          event.preventDefault();
          newBook();
        }
      }
    } else if (title.value === '' || author.value === '') {
      const preverror = document.getElementById('error');
      if (!preverror) {
        const error = document.createElement('p');
        error.id = 'error';
        error.innerHTML = 'Form should not be empty';
        error.style.cssText = 'color: red;';
        add.appendChild(error);
      }
    } else {
      event.preventDefault();
      newBook();
    }
  });
};

export {
  checkBooks,
  newBook,
  createElements,
  validation,
};