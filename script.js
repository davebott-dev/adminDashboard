//This allows the heart to be clicked and made red

const heart = document.querySelectorAll(".heart-fill");

heart.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("redHeart");
  })
})