document.addEventListener('click', (e) => {
  if (e.target.classList.contains('report-btn')) {
    e.target.lastElementChild.classList.toggle('fa-caret-right');
    e.target.lastElementChild.classList.toggle('fa-caret-down');
  }

  if (e.target.classList.contains('report-span')) {
    e.target.nextElementSibling.classList.toggle('fa-caret-right');
    e.target.nextElementSibling.classList.toggle('fa-caret-down');
  }

  if (e.target.classList.contains('report-i')) {
    e.target.classList.toggle('fa-caret-right');
    e.target.classList.toggle('fa-caret-down');
  }
});