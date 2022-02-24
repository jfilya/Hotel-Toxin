const dropFriend = document.querySelector(".search__friend__sum");
const wind = document.querySelector(".dropdown");
let num = 0;
const activeWindow = () => {
  dropFriend.addEventListener("click", () => {
    wind.classList.toggle("freand-active");
  });
};
activeWindow();
