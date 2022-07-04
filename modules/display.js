const displayListPage = () => {
  document.getElementById('list').style.display = 'block';
  document.getElementById('add').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
  document.getElementById('listLink').style.color = 'blue';
  document.getElementById('addLink').style.color = 'black';
  document.getElementById('contactLink').style.color = 'black';
};

const displayAddPage = () => {
  document.getElementById('add').style.display = 'block';
  document.getElementById('list').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
  document.getElementById('addLink').style.color = 'blue';
  document.getElementById('contactLink').style.color = 'black';
  document.getElementById('listLink').style.color = 'black';
};

const displayContactPage = () => {
  document.getElementById('contact').style.display = 'block';
  document.getElementById('list').style.display = 'none';
  document.getElementById('add').style.display = 'none';
  document.getElementById('contactLink').style.color = 'blue';
  document.getElementById('addLink').style.color = 'black';
  document.getElementById('listLink').style.color = 'black';
};

export { displayListPage, displayAddPage, displayContactPage };