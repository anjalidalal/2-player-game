//console.log(Math.random());

const boxes = document.querySelectorAll(".goal");
const ball = document.querySelector(".ball");
const red = document.getElementById("red");
const blue = document.getElementById("blue");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    console.log(e, "hello", e.target);

    const { x, y } = e;

    ball.classList.add("move-ball");
    ball.style.top = `${y - e.clientTop}px`;
    ball.style.left = `${x - e.layerX}px`;
    ball.style.transform = `translateY(${
      e.target.offsetTop + e.target.clientHeight
    }px)`;
  });
});
