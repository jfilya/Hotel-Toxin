const comfortTitle = document.querySelector('.homedynamic__title')
const dinamic = document.querySelector('.homedynamic__dinam')
const arrow = document.querySelector('.homedynamic__title__arrow')
const activeDinam = () => {
    comfortTitle.addEventListener("click", () => {
        dinamic.classList.toggle("freand-active");
        arrow.classList.toggle("rotate-arrow");
  });
};
activeDinam();