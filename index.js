const main = document.querySelector(".main");
const boxContainer = document.createElement("div");
boxContainer.classList.add("box");

const balls = [0, 0, 0, 0, 0, 0, 0];
let counter = 0;
let i = 0,
  j = 0;
let array = [
  [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
  [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
  [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
  [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
  [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
  [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
];

for (; i < array.length; i++) {
  for (; j < array.length; j++) {
    console.log(array[i][j]);
  }
}
console.log(array[i][j]);

const onClickingElement = (column) => () => {
  const ball = document.createElement("div");

  if (counter % 2 === 0) {
    ball.classList.add("red-ball");
    console.log(array[i][j]);
    array[i][j] = false;
  } else {
    ball.classList.add("blue-ball");
    array[i][j] = true;
  }
  main.prepend(ball, boxContainer);

  const boxColumns = document.querySelectorAll(".col-styles");

  const X = 35 + column - 7 * balls[column];
  const elementBoundry = boxColumns[X].getBoundingClientRect();
  console.log(main.contains(ball));

  ball.style.top = `${elementBoundry.top}px`;
  ball.style.left = `${elementBoundry.left}px`;

  balls[column] += 1;
  counter++;
};

console.log(array);

for (let row = 0; row < 6; row++) {
  const rowEl = document.createElement("div");
  rowEl.classList.add("row-styles");

  for (let col = 0; col < 7; col++) {
    const colEl = document.createElement("div");
    colEl.classList.add("col-styles");

    colEl.addEventListener("click", onClickingElement(col));

    rowEl.appendChild(colEl);
  }
  boxContainer.appendChild(rowEl);
}

main.appendChild(boxContainer);

// if (boxColumns[X].contains(ball)) {
//   array[i] = true;
// }
// if (i > array.length) {
//   if (
//     array[i] === array[i + 1] &&
//     array[i + 1] === array[i + 2] &&
//     array[i + 2] === array[i + 3]
//   ) {
//     console.log("hello", true, i);
//   }
// }
