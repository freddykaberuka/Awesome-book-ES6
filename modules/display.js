const addDisplay = document.querySelector('.ADD');
const listDisplay = document.querySelector('.LIST');
const contactDisplay = document.querySelector('.contact');

const listLink = () => {
  addDisplay.style.display = 'none';
  contactDisplay.style.display = 'none';
  listDisplay.style.display = 'flex';
};
const addLink = () => {
  listDisplay.style.display = 'none';
  contactDisplay.style.display = 'none';
  addDisplay.style.display = 'flex';
};
const contactLink = () => {
  listDisplay.style.display = 'none';
  addDisplay.style.display = 'none';
  contactDisplay.style.display = 'flex';
};

export { listLink, addLink, contactLink };
