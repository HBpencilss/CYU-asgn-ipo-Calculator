// [Title] by Hasna

// [Item...]
document.getElementById("btn").addEventListener("click", btnClicked);

// Store order code in a f(x)
function btnClicked() {
  // INPUT
  let sideA = +document.getElementById("A").value;
  let sideB = +document.getElementById("B").value;

  // PROCESS
  let total = Math.sqrt(sideA ** 2 + sideB ** 2);

  // OUTPUT
  document.getElementById("output").innerHTML = total;
}
