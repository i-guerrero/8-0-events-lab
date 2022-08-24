// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

// Update height and width of each cell according to i

// Add event listener for when palette is clicked
const black = document.querySelector;

// loop through class color and add Event listener
// make current color match style

const colorPalette = document.querySelectorAll(".color");

const currentColor = document.querySelector("#current-color");

for (let color of colorPalette) {
  color.addEventListener("click", (event) => {
    const backgroundColorDeclarationStr =
      "background: " + event.target.style.backgroundColor;
    currentColor.setAttribute("style", backgroundColorDeclarationStr);
  });
}

// loop over grid

const cells = document.querySelectorAll(".cell");
// change background color of cell to be color of current color
for (let cell of cells) {
  cell.addEventListener("click", (event) => {
    cell.setAttribute(
      "style",
      "background: " + currentColor.style.backgroundColor
    );
  });
}
