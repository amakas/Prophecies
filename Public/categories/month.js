import { monthlyPredictions } from "../predictions/predictions.js";
import { showNextLetter } from "../shownextletter.js";
const prediction = document.querySelector(".prediction");
const predictionButton = document.querySelector(".prediction-button");
const backButton = document.querySelector(".back-button");
let count = 0;
const randomNum = Math.floor(Math.random() * 5) + 3;
const handleClick = async () => {
  const randomPredict =
    monthlyPredictions[Math.floor(Math.random() * monthlyPredictions.length)];

  await showNextLetter(randomPredict);
  if (count > randomNum) {
    predictionButton.textContent = "Не грайся з долею";
    predictionButton.disabled = true;
  } else {
    predictionButton.textContent = "Змінити майбутнє";
  }
  backButton.textContent = "Прийняти майбутнє";
  count++;
};
predictionButton.addEventListener("click", handleClick);
