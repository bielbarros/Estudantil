# 📁 Projeto: Navegação Dinâmica com JavaScript

## 📌 Descrição

Este projeto implementa uma navegação dinâmica entre seções de conteúdo em uma página HTML utilizando **JavaScript puro (Vanilla JS)**. A interface permite esconder e exibir diferentes áreas do conteúdo com base nas ações do usuário, como seleção de temas ou retorno ao menu principal.

Ideal para aplicações educacionais, quizzes interativos, portais de conteúdo modular, entre outros.

---

## 🚀 Funcionalidades

- ✅ Exibição dinâmica de seções específicas.
- ✅ Ocultação automática de outras seções.
- ✅ Alternância entre menus de seleção e conteúdo.
- ✅ Retorno ao menu principal sem recarregar a página.
- ✅ Fácil integração com qualquer estrutura HTML.

---

## 🧠 Tecnologias Utilizadas

- **HTML5** – Estrutura da página.
- **CSS3** – Estilização visual.
- **JavaScript (Vanilla)** – Manipulação de DOM.

---

## 📜 Código Principal

```javascript
// Função para mostrar uma seção específica, escondendo as outras
function showSection(sectionId) {
  document.querySelectorAll('.content-section').forEach(section => {
    section.style.display = 'none';
  });

  document.getElementById(sectionId).style.display = 'block';

  document.querySelectorAll('.tema, .tema1').forEach(menu => {
    menu.style.display = 'none';
  });
}

// Função para mostrar a seção principal (menu) novamente
function showMain() {
  document.querySelectorAll('.content-section').forEach(section => {
    section.style.display = 'none';
  });

  document.querySelectorAll('.tema, .tema1').forEach(menu => {
    menu.style.display = 'block';
  });
}
```

---

## 🧪 Como Usar

1. Crie seções HTML com a classe `content-section` e um `id` exclusivo:

```html
<div id="secao1" class="content-section">Conteúdo 1</div>
<div id="secao2" class="content-section">Conteúdo 2</div>
```

2. Crie menus com as classes `tema` ou `tema1`:

```html
<div class="tema">Menu A</div>
<div class="tema1">Menu B</div>
```

3. Use botões ou links com `onclick="showSection('secao1')"` para navegar:

```html
<button onclick="showSection('secao1')">Abrir Seção 1</button>
```

4. Para voltar ao menu principal, use:

```html
<button onclick="showMain()">Voltar</button>
```

---

## 📂 Estrutura Recomendável

```html
<body>
  <div class="tema"> ... </div>
  <div class="tema1"> ... </div>

  <div id="secao1" class="content-section"> ... </div>
  <div id="secao2" class="content-section"> ... </div>
  <!-- Outras seções -->
</body>
```

---

## 🤝 Contribuições

Pull requests são bem-vindos! Para grandes mudanças, abra uma issue primeiro para discutir o que você gostaria de modificar.

---

## 👨‍💻 Autor

**Gabriel Barros**  
Desenvolvedor e Educador de Tecnologia  
[LinkedIn](https://www.linkedin.com/in/gabriel-sbarros) • [GitHub](https://github.com/bielbarros)
