export const showNextLetter = (
  prediction,
  containerSelector = ".prediction",
  buttonSelector = ".prediction-button"
) => {
  return new Promise((resolve) => {
    const colors = [
      "#57045dff",
      "#2a0574ff",
      "#030372ff",
      "#43016dff",
      "#FF55FF",
    ];
    const predictionContainer = document.querySelector(containerSelector);
    predictionContainer.innerHTML = "";

    let index = 0;
    const predictionButton = document.querySelector(buttonSelector);
    predictionButton.disabled = true;

    const addLetter = () => {
      if (index < prediction.length) {
        const span = document.createElement("span");
        span.classList.add("letter");
        span.textContent = prediction[index];
        span.style.color = colors[Math.floor(Math.random() * colors.length)];
        span.style.opacity = 0;
        predictionContainer.appendChild(span);

        setTimeout(() => {
          span.style.opacity = 1;
          span.classList.add("magic");
        }, 40);

        setTimeout(() => {
          span.style.color = "#5ccbcbff";
        }, 120);

        index++;
        setTimeout(addLetter, 70);
      } else {
        predictionButton.disabled = false;
        resolve();
      }
    };

    addLetter();
  });
};
