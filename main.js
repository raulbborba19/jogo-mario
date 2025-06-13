const mario = document.quesySelector(".mario")
const pipe = document.quesySelector(".pipe")

const jump = () => {
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump");
    }
    ,500);
}

const loop = setInterval(() => {
const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition <80) {
        pipe.style.animation = "none";
        pipe.stylle.left = `$(pipePosition)px`;

        mario.style.animation = "none";
        mario.stylle.left = `$(marioPosition)px`;

        mario.src = "./img/game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";

        clearInterval(loop)
    }
},10);
document.addEventListener("keydown", jump);