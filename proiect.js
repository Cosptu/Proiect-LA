
 /*var  likeButton = document.querySelector('likeBtn')
  likeButton.addEventListener('click', () => {
    console.log('test');
    likeButton.classList.toggle('liked')
})*/

//select classes and id's
//comm for modified version
const likeButton = document.getElementsByClassName("likeBtn");
//let likeIcon = likeButton.firstElementChild;
//let likeIcon = document.getElementById("icon");
//let count = document.getElementsByClassName("count");

//button clicked
let clicked = false

//likeButton.addEventListener("click", function(){
  for (var i = 0 ; i < likeButton.length; i++) {
    let likeIcon = likeButton[i].firstElementChild;
   // let count = likeButton[i];
    //count.getElementById('count');
    likeButton[i].addEventListener('click', function(){
    console.log(likeIcon)
    //console.log(count)
    likeIcon.classList.add('buttonclicked');
    //count.innerHTML='test'

    }) ; 
 };
 
 
  
 
 // if (!clicked) {
    //console.log('test');
  //    clicked = true;
  //    likeIcon.innerHTML= `<i class="far fa-thumbs-up"></i> `
   //   count.textContent++
    //}
  //  else {
   //   clicked = false;
   //   likeIcon.innerHTML= `<i class="far fa-thumbs-up"></i> `
   //   count.textContent--

  //  });


//html button
//<button class = likeBtn>
  //<span id="icon"><i class="far fa-thumbs-up"></i></span>
  //<span id="count">0</span> Likes
  //</button>

/*const likeButton =  document.getElementsByClassName(".likeBtn");
let likeIcon = document.getElementById("#icon");
let count = document.getElementById("#count");

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
});*/