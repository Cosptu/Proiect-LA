
const likeBtn = document.querySelectorAll(".like__btn");
likeBtn.forEach(function (item) {
    item.addEventListener("click", (event) => {
        let likeIcon = item.querySelector(".icon");
        let count = item.querySelector(".count");
        if (count.textContent == 0) {
            clicked = true;
            likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
            count.textContent++;
        } else {
            clicked = false;
            likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
            count.textContent--;
        }
    });
});


/* function validation form adopt */

function validation(){
    /* Getting value from the inputs */
    var inputName = document.getElementById("inputName").value;
    var inputPhone = document.getElementById("inputPhone").value;
    var inputAddress = document.getElementById("inputAddress").value;
    var inputCity = document.getElementById("inputCity").value;
    var inputState = document.getElementById("inputState").value;
    var inputZip = document.getElementById("inputZip").value;


    /* checking if all inputs are filled */
    var allTrue = true;
    if (inputName.length > 1 && inputPhone.length > 1 && inputAddress.length > 1 && inputCity.length > 1 && inputState.length > 1 && inputZip.length > 1){
        allTrue = false;
    }
    if (allTrue === false){
        document.getElementById("submit").removeAttribute("disabled");
    } else{
        document.getElementById("submit").setAttribute("disabled","true");
    }

}



