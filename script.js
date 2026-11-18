const toggle = document.getElementById('toggle');
const links = document.getElementById('links');

toggle.addEventListener('click', () => {
  links.classList.toggle('open');

  toggle.textContent = links.classList.contains('open')
    ? '×'
    : '☰';
});

document.querySelectorAll('#links a').forEach(a => {
  a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.textContent = '☰';
  });
});

document.getElementById('year').textContent =
  new Date().getFullYear();