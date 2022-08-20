import { checkBooks, validation, createElements } from './modules/elements.js';
import { displayListPage, displayAddPage, displayContactPage } from './modules/display.js';
import * as dateTime from './modules/dateTime.js';

createElements();

const date = document.getElementById('date');
const title = document.getElementById('title');
const author = document.getElementById('author');
const add = document.getElementById('btn');
const listLink = document.getElementById('listLink');
const listNav = document.getElementById('listNav');
const addNav = document.getElementById('addNav');
const contactNav = document.getElementById('contactNav');

checkBooks();

date.innerHTML = `${dateTime.date} ${dateTime.hour}:${dateTime.min}:${dateTime.sec}`;

listLink.style.color = 'blue';

listNav.addEventListener('click', displayListPage, false);

addNav.addEventListener('click', displayAddPage, false);

contactNav.addEventListener('click', displayContactPage, false);

validation(title, 'keypress');
validation(author, 'keypress');
validation(add, 'click');
