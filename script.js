// const heroImg = document.getElementById("heroImg");
// const heroSmileImg = document.getElementById("heroSmileImg");
// const btnHire = document.querySelector(".btn__hire");

// btnHire.addEventListener("mouseover", () => {
//   heroImg.classList.add("hidden"); // Hide the original image
//   heroSmileImg.classList.remove("hidden"); // Show the hover image
// });

// btnHire.addEventListener("mouseout", () => {
//   heroImg.classList.remove("hidden"); // Show the original image
//   heroSmileImg.classList.add("hidden"); // Hide the hover image
// });

let items = document.querySelectorAll(".skill");

items.forEach((item) => {
  item.addEventListener("mousemove", (e) => {
    let positionPx = e.x - item.getBoundingClientRect().left;
    let positionX = (positionPx / item.offsetWidth) * 100;

    let positionPy = e.y - item.getBoundingClientRect().top;
    let positionY = (positionPy / item.offsetHeight) * 100;

    item.style.setProperty("--rX", 0.5 * (50 - positionY) + "deg");
    item.style.setProperty("--rY", -0.5 * (50 - positionX) + "deg");
  });

  item.addEventListener("mouseout", () => {
    item.style.setProperty("--rX", "0deg");
    item.style.setProperty("--rY", "0deg");
  });
});
