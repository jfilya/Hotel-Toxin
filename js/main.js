const dropFriend = document.querySelector('.search__friend__sum');
const wind = document.querySelector('.dropdown');
const plus1 = document.getElementById('plus-1');
const minus1 = document.getElementById('minus-1');
let num1 =document.getElementById('numb-1');
let num=0;
const activeWindiw = () =>{
dropFriend.addEventListener('click', () => {
    wind.classList.toggle('freand-active');
});
};
activeWindiw();

