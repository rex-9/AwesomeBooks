let bookObj = {
  title: '',
  author: '',
};

const books = JSON.parse(localStorage.getItem('books'));
const list = document.getElementById('list');
const title = document.getElementById('title');
const author = document.getElementById('author');
const submit = document.getElementById('btn');

function addItem() {
  const books = JSON.parse(localStorage.getItem('books'));
  bookObj = {
    title: title.value,
    author: author.value,
  };
  books.push(bookObj);
  localStorage.setItem('books', JSON.stringify(books));
  window.setTimeout(() => {
    window.location.reload();
  }, 500);
}

if (!localStorage.getItem('books')) {
  const books = [];
  localStorage.setItem('books', JSON.stringify(books));
}

function removeItem(e) {
  const elElement = e.currentTarget;
  const book = elElement.parentElement;
  while (book.firstChild) {
    book.removeChild(book.firstChild);
  }
  const index = books.indexOf();
  books.splice(index, 1);
  localStorage.setItem('books', JSON.stringify(books));
}

submit.addEventListener('click', addItem, false);

for (let i = 0; i < books.length; i += 1) {
  const book = document.createElement('li');

  const titleElement = document.createElement('p');
  titleElement.innerHTML = books[i].title;

  const authorElement = document.createElement('p');
  authorElement.innerHTML = books[i].author;

  const remove = document.createElement('button');
  remove.innerHTML = 'Remove';
  remove.addEventListener('click', removeItem.bind(i), false);

  const divider = document.createElement('div');
  divider.classList.add('divider');

  book.appendChild(titleElement);
  book.appendChild(authorElement);
  book.appendChild(remove);
  book.appendChild(divider);
  list.appendChild(book);
}