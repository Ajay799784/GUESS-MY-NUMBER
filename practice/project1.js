// console.log(document.querySelector(".para-1").textContent);
// document.querySelector(".para-1").textContent = "hey man of the masses!";
// console.log(document.querySelector(".para-1").textContent);

// document.querySelector(".questionmark").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 15;
// console.log(document.querySelector(".guess").value);

const scretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".questionmark").textContent = scretNumber;

document.querySelector(".btn-2").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  //noinput given
  if (!guess) {
    document.querySelector(".para-1").textContent = "⛔ No number";
  } // if guess wins
  else if (guess === scretNumber) {
    document.querySelector(".para-1").textContent = "🎉Correct value";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".questionmark").style.width = "30rem";
  } //too high
  else if (guess > scretNumber) {
    if (score > 1) {
      document.querySelector(".para-1").textContent = "📉 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".para-1").textContent = "💥 you loose the game!";
      document.querySelector(".score").textContent = 0;
    }
  } //too low
  else if (guess < scretNumber) {
    if (score > 1) {
      document.querySelector(".para-1").textContent = "📉 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".para-1").textContent = "💥 you loose the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
