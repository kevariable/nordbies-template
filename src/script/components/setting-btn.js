document.addEventListener('click', (e) => {
  if (e.target.classList.contains('settings-btn')) {
    e.target.lastElementChild.classList.toggle('fa-caret-right');
    e.target.lastElementChild.classList.toggle('fa-caret-down');
  }

  if (e.target.classList.contains('settings-span')) {
    e.target.nextElementSibling.classList.toggle('fa-caret-right');
    e.target.nextElementSibling.classList.toggle('fa-caret-down');
  }

  if (e.target.classList.contains('settings-i')) {
    e.target.classList.toggle('fa-caret-right');
    e.target.classList.toggle('fa-caret-down');
  }
});