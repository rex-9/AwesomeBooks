/* eslint-disable max-classes-per-file */

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    displayInfo() {
        return `${this.title} is written by${this.author}.`;
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

    get allBooks() {
        return this.books;
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
    const book = document.createElement('li');
    book.classList.add('book', 'flex');

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

function displayListPage() {
    const listPage = document.getElementById('list');
    listPage.classList.remove('none');
    listPage.classList.add('flex');

    const addPage = document.getElementById('add');
    addPage.classList.remove('flex', 'justify-center');
    addPage.classList.add('none');

    const contactPage = document.getElementById('contact');
    contactPage.classList.remove('flex', 'justify-center');
    contactPage.classList.add('none');
}

function displayAddPage() {
    const newPage = document.getElementById('add');
    newPage.classList.remove('none');
    newPage.classList.add('flex', 'justify-center');

    const listPage = document.getElementById('list');
    listPage.classList.remove('flex');
    listPage.classList.add('none');

    const contactPage = document.getElementById('contact');
    contactPage.classList.remove('flex', 'justify-center');
    contactPage.classList.add('none');
}

function displayContactPage() {
    const contactPage = document.getElementById('contact');
    contactPage.classList.remove('none');
    contactPage.classList.add('flex', 'justify-center');

    const listPage = document.getElementById('list');
    listPage.classList.remove('flex');
    listPage.classList.add('none');

    const newPage = document.getElementById('add');
    newPage.classList.remove('flex', 'justify-center');
    newPage.classList.add('none');
}

const listNav = document.getElementById('listNav');
listNav.addEventListener('click', displayListPage, false);

const addNav = document.getElementById('addNav');
addNav.addEventListener('click', displayAddPage, false);

const contactNav = document.getElementById('contactNav');
contactNav.addEventListener('click', displayContactPage, false);