let bookObj = {
    title: '',
    author: ''
};

var list = document.getElementById("list");
var title = document.getElementById("title");
var author = document.getElementById("author");
var submit = document.getElementById("btn");

function addItem(e) {
    const books = JSON.parse(localStorage.getItem('books'));
    bookObj = {
        title: title.value,
        author: author.value
    }
    books.push(bookObj);
    localStorage.setItem('books', JSON.stringify(books));
    console.log(books);
    window.setTimeout(function () {
        window.location.reload();
    }, 500);
}

function removeItem(e) {
    var elElement = e.currentTarget;
    var book = elElement.parentElement;
    while (book.firstChild) {
        book.removeChild(book.firstChild);
    }
    const index = books.indexOf(i);
    console.log(e);
    books.splice(index, 1); // 2nd parameter means remove one item only
    localStorage.setItem('books', JSON.stringify(books));
    console.log(books);
}

submit.addEventListener("click", addItem, false);

if (!localStorage.getItem('books')) {
    let books = [];
    localStorage.setItem('books', JSON.stringify(books));
}

const books = JSON.parse(localStorage.getItem('books'));
for (let i = 0; i < books.length; i++) {
    var book = document.createElement("li");

    var titleElement = document.createElement("p");
    titleElement.innerHTML = books[i].title;

    var authorElement = document.createElement("p");
    authorElement.innerHTML = books[i].author;

    var remove = document.createElement("button");
    remove.innerHTML = "Remove";
    remove.addEventListener("click", removeItem.bind(i), false);

    var divider = document.createElement("div");
    divider.classList.add('divider');

    book.appendChild(titleElement);
    book.appendChild(authorElement);
    book.appendChild(remove);
    book.appendChild(divider);
    list.appendChild(book);
}
console.log(books);