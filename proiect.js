
//access DOM
var likeButton = document.getElementsByClassName("likeBtn");
//button clicked
let clicked = false

//add event on click 
  for (var i = 0 ; i < likeButton.length; i++) {
    let likeIcon = likeButton[i].firstElementChild;
    likeButton[i].addEventListener('click', function(){
    console.log(likeIcon)
    likeIcon.classList.add('buttonclicked');


    }) ; 
 };
 
 // se inroseste dar nu se intampla reversul la click 2
 // <button onclick="myFunction()" class = likeBtn>
 /* var butt = document.getElementById('icon')
        function myFunction(){
    if (butt.style.color == 'red'){
        butt.style.color = 'grey'
    }
    else butt.style.color = 'red'
}
  */

// counting likes - in consola numara in site nu / to fix

  /*  let count = 0;
    function myFunction() {
    count+=1;
    document.getElementById("counts").innerHTML = count;
    console.log(count)
      }
*/
const likeBtn = document.querySelectorAll(".like__btn");
likeBtn.forEach(function (item) {
    item.addEventListener("click", (event) => {
        let likeIcon = item.querySelector(".icon");
        let count = item.querySelector(".count");
        if (+count.textContent == 0) {
            clicked = true;
            likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
            count.textContent++;
        } else {
            clicked = false;
            likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
            count.textContent--;
        }
    });
})

