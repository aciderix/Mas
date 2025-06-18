document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const startBtn = document.getElementById('start');
  const menuButtons = document.querySelectorAll('.menu-grid button');
  const backButtons = document.querySelectorAll('.back');

  function showSection(id) {
    sections.forEach(sec => sec.classList.add('hidden'));
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id).classList.add('active');
  }

  startBtn.addEventListener('click', () => showSection('menu'));
  menuButtons.forEach(btn => btn.addEventListener('click', () => showSection(btn.dataset.target)));
  backButtons.forEach(btn => btn.addEventListener('click', () => showSection('menu')));

  fetch('history.txt')
    .then(resp => resp.text())
    .then(text => {
      document.getElementById('historyText').textContent = text;
    })
    .catch(() => {
      document.getElementById('historyText').textContent = 'Historique indisponible.';
    });
});
