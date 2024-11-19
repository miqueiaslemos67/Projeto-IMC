// Estrutura de dados com Object literals com duas funções que será acionada na função do "form.onsubmit"

export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector(".modal  button.close"),

  //função
  open() {
    Modal.wrapper.classList.add("open");
  },

  close() {
    Modal.wrapper.classList.remove("open");
  },
};

// função tipo Arrow Function para fechar no X o "Modal/pop-up após a resposta"
Modal.buttonClose.onclick = () => Modal.close();

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
  if (event.key === 'Escape') {
    Modal.close()
  }
}
