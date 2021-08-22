
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

