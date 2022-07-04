import { newBook, createElements } from './modules/elements.js';
import { displayListPage, displayAddPage, displayContactPage } from './modules/display.js';

createElements();

document.getElementById('btn').addEventListener('click', newBook, false);

document.getElementById('listLink').style.color = 'blue';

document.getElementById('listNav').addEventListener('click', displayListPage, false);

document.getElementById('addNav').addEventListener('click', displayAddPage, false);

document.getElementById('contactNav').addEventListener('click', displayContactPage, false);