import { dailyPredictions } from "../predictions/predictions.js";
import { showNextLetter } from "../shownextletter.js";
const predictionButton = document.querySelector(".prediction-button");
const backButton = document.querySelector(".back-button");
let count = 0;
const randomNum = Math.floor(Math.random() * 5) + 3;
const handleClick = async () => {
  const randomPredict =
    dailyPredictions[Math.floor(Math.random() * dailyPredictions.length)];
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
