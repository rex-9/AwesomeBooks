class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    displayInfo() {
        console.log(this.title + " is written by" + this.author + ".");
    }
}
class Books {
    constructor() {
        this.books = []
    }

    addBook(title, author) {
        let book = new Book(title, author)
        let storedBooks = JSON.parse(localStorage.getItem('books'))
        if (storedBooks == null) {
            this.books = []
        } else {
            this.books = JSON.parse(localStorage.getItem('books'))
        }
        this.books.push(book)
        localStorage.setItem('books', JSON.stringify(this.books))
    }

    removeBook() {
        const index = books.indexOf();
        books.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(books));
    }

    get allBooks() {
        return this.books
    }
}

function newBook() {
    let league = new Books()
    league.addBook(title.value, author.value)
    window.location.reload();
}

let books = JSON.parse(localStorage.getItem('books'));
if (books == null) {
    books = []
}

const list = document.getElementById('list');
const title = document.getElementById('title');
const author = document.getElementById('author');
const submit = document.getElementById('btn');

submit.addEventListener('click', newBook, false);

for (let i = 0; i < books.length; i += 1) {
    const book = document.createElement('li');

    const titleElement = document.createElement('p');
    titleElement.innerHTML = books[i].title;

    const authorElement = document.createElement('p');
    authorElement.innerHTML = books[i].author;

    const remove = document.createElement('button');
    remove.innerHTML = 'Remove';
    // remove.addEventListener('click', removeBook, false);

    const divider = document.createElement('div');
    divider.classList.add('divider');

    book.appendChild(titleElement);
    book.appendChild(authorElement);
    book.appendChild(remove);
    book.appendChild(divider);
    list.appendChild(book);
}

// window.localStorage.clear()