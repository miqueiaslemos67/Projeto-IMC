import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { notANumber, calculateIMC } from "./utilis.js";

// variáveis
const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

// Fechar a mensagem de error quando começar a digitar
inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()

// Arrow Function para pegar as constantes do formulário
form.onsubmit = (event) => {
  event.preventDefault(); // evite o padrão

  const weigth = inputWeight.value;
  const height = inputHeight.value;
  const weightOrHeightIsNotAnumber = notANumber(weigth) || notANumber(height);

  // Condicional para o alerta de erro.
  if (weightOrHeightIsNotAnumber) {
    AlertError.open();
    return;
  }

  AlertError.close();

  const result = calculateIMC(weigth, height);
  displayResultMessage(result)
};

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message; // Aqui estamos pegando o resultado do cálculo.
  Modal.open();
}
