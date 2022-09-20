const number = document.querySelector("#number1");
const btn = document.querySelector("#draw1");
const area = document.querySelector("#result");

btn.addEventListener("click", () => {
  drawDiamond();
});

const drawDiamond = () => {
  let diamond = "";

  for (let i = 1; i <= number.value; i++) {
    // printing spaces
    for (let j = number.value; j > i; j--) {
      diamond += " ";
    }
    // printing star
    for (let k = 0; k < i * 2 - 1; k++) {
      if (k === 0 || k === 2 * i - 2) {
        diamond += "*";
      } else {
        diamond += " ";
      }
    }
  }
  diamond += "\n";

  // downside diamond
  for (let i = 1; i <= number.value - 1; i++) {
    // printing spaces
    for (let j = 0; j < i; j++) {
      diamond += " ";
    }
    // printing star
    for (let k = (number.value - i) * 2 - 1; k >= 1; k--) {
      if (k === 1 || k === (number.value - i) * 2 - 1) {
        diamond += "*";
      } else {
        diamond += " ";
      }
    }
    diamond += "\n";
  }

  area.innerHTML = diamond;

  console.log(diamond);
};

// drawDiamond();
