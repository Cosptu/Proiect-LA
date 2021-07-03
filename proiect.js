
 /* var  likeButton = document.querySelector('.like-button')
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('liked')
})
*/
//select classes and id's
const likeButton = document.querySelector(".likeBtn");
let likeIcon = document.querySelector("#icon");
let count = document.querySelector("#count");

//button clicked
let clicked = false

likeButton.addEventListener("click", () => {
  if (!clicked) {
      clicked = true
      likeIcon.innerHTML= `<i class="far fa-thumbs-up"></i> `
      count.textContent++
    }
    else {
      clicked = false
      likeIcon.innerHTML= `<i class="far fa-thumbs-up"></i> `
      count.textContent--

    }
});