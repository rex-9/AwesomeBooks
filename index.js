import { newBook, createElements } from './modules/elements.js';
import { displayListPage, displayAddPage, displayContactPage } from './modules/display.js';
import * as dateTime from './modules/dateTime.js';

createElements();

document.getElementById('date').innerHTML = `${dateTime.date} ${dateTime.hour}:${dateTime.min}:${dateTime.sec}`;

document.getElementById('btn').addEventListener('click', newBook, false);

document.getElementById('listLink').style.color = 'blue';

document.getElementById('listNav').addEventListener('click', displayListPage, false);

document.getElementById('addNav').addEventListener('click', displayAddPage, false);

document.getElementById('contactNav').addEventListener('click', displayContactPage, false);