
// Essa aplicação define um módulo chamado AlertError em JavaScript, responsável por controlar a visibilidade de um elemento HTML com a classe .alert-error. O módulo usa o objeto AlertError para oferecer uma interface simples com dois métodos, open e close, que permitem mostrar ou esconder o elemento no DOM.

// Essa estrutura é útil para exibir mensagens de erro de forma controlada e pode ser aplicada em formulários ou outras interfaces que precisem notificar o usuário de uma forma visual, especialmente para alertas que não devem estar sempre visíveis.

export const AlertError = {
  element: document.querySelector(".alert-error"),
  open() {
    AlertError.element.classList.add("open");
  },

  close() {
    AlertError.element.classList.remove("open");
  },
};
