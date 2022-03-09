const comfortTitle = document.querySelector('.homedynamic__title')
const dinamic = document.querySelector('.homedynamic__dinam')
const activeDinam = () => {
    comfortTitle.addEventListener("click", () => {
        dinamic.classList.toggle("freand-active");
  });
};
activeDinam();