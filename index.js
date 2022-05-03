import { listLink, contactLink, addLink } from './modules/display.js';
import Book from './modules/book.js';
import currentDate from './modules/calendar.js';

const booksLibrary = new Book();
booksLibrary.getBookList();
const formData = document.getElementById('new-book');
formData.addEventListener('submit', (e) => {
  e.preventDefault();
  const getTitle = document.getElementById('title').value;
  const getAuthor = document.getElementById('author').value;
  booksLibrary.addNewBook(getTitle, getAuthor);
});

const navLink = document.getElementById('list-link');
const addNew = document.getElementById('add-link');
const navContact = document.getElementById('contact-link');

navLink.addEventListener('click', listLink);

addNew.addEventListener('click', addLink);

navContact.addEventListener('click', contactLink);

const calendar = document.getElementById('calendar');
calendar.innerHTML = currentDate;

window.onload = () => {
  document.querySelector('.ADD').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';
};