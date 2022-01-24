const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const box3 = document.getElementById("box-3");

function pause() {
    box3.style.animationPlayState = "paused";
}


function paly() {
    box3.style.animationPlayState = "running";
}

playBtn.addEventListener("click", paly);
pauseBtn.addEventListener("click", pause);