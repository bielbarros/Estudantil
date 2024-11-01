function showSection(sectionId) {
  document.querySelectorAll('.content-section').forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById(sectionId).style.display = 'block';
  document.querySelectorAll('.tema, .tema1').forEach(menu => {
    menu.style.display = 'none';
  });
}

function showMain() {
  document.querySelectorAll('.content-section').forEach(section => {
    section.style.display = 'none';
  });
  document.querySelectorAll('.tema, .tema1').forEach(menu => {
    menu.style.display = 'block';
  });
}
