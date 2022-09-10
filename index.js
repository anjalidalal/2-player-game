//console.log(Math.random());
const main = document.querySelector(".main");
const boxes = document.querySelectorAll(".goal");
const boxContainer = document.querySelector(".box");

const array = [
  [0, 1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
  [31, 32, 33, 35, 36, 37],
];

boxes.forEach((box, i) => {
  box.addEventListener("click", (e) => {
    console.log(e, e.target);

    const ball = document.createElement("div");
    ball.classList.add("ball");
    main.prepend(ball, boxContainer);

    const { x, y } = e;

    // ball.style.top = `${y - e.clientTop}px`;
    // ball.style.left = `${x - e.layerX}px`;
    // ball.style.transform = `translateY(${486}px)`;

    ball.style.top = `${y - e.clientTop}px`;
    ball.style.left = `${x - e.layerX}px`;
    ball.style.transform = `translateY(${
      e.target.offsetTop + e.target.clientHeight
    }px)`;

    for (let i = 0; i < boxes.length; i++) {
      console.log(boxes[i], boxes.length);
    }
  });
});
