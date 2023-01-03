const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", getBoxes);
function getBoxes() {
  const triggerBottom = (window.innerHeight / 10) * 9;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
