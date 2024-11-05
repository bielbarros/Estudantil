// Função para mostrar uma seção específica, escondendo as outras
function showSection(sectionId) {
  // Esconde todas as seções de conteúdo
  document.querySelectorAll('.content-section').forEach(section => {
    section.style.display = 'none';
  });

  // Exibe a seção especificada pelo ID
  document.getElementById(sectionId).style.display = 'block';

  // Esconde os menus de seleção (tema1 e tema)
  document.querySelectorAll('.tema, .tema1').forEach(menu => {
    menu.style.display = 'none';
  });
}

// Função para mostrar a seção principal (menu) novamente
function showMain() {
  // Esconde todas as seções de conteúdo
  document.querySelectorAll('.content-section').forEach(section => {
    section.style.display = 'none';
  });

  // Exibe os menus de seleção (tema1 e tema)
  document.querySelectorAll('.tema, .tema1').forEach(menu => {
    menu.style.display = 'block';
  });
}
