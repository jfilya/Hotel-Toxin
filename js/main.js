const dropFriend = document.querySelector(".search__friend__sum");
const wind = document.querySelector(".dropdown");
const overlay = document.querySelector('.overlay')
const close = document.getElementById('apply')
const activeWindow = () => {
  dropFriend.addEventListener("click", () => {
    wind.classList.toggle("freand-active");
    overlay.classList.toggle("freand-active");
  });
};
const closeModel = () => {
  wind.classList.remove('freand-active');
  overlay.classList.remove('freand-active');
};

overlay.addEventListener('click', closeModel);
close.addEventListener('click', closeModel);
activeWindow();