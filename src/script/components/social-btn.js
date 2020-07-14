document.addEventListener('click', (e) => {
  if (e.target.classList.contains('social-btn')) {
    e.target.lastElementChild.classList.toggle('fa-caret-right');
    e.target.lastElementChild.classList.toggle('fa-caret-down');
  }

  if (e.target.classList.contains('social-span')) {
    e.target.nextElementSibling.classList.toggle('fa-caret-right');
    e.target.nextElementSibling.classList.toggle('fa-caret-down');
  }

  if (e.target.classList.contains('social-i')) {
    e.target.classList.toggle('fa-caret-right');
    e.target.classList.toggle('fa-caret-down');
  }
});