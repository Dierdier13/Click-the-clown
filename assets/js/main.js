let score = 0

const clown = document.getElementById("clown")
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const levelContainer = document.getElementById("level");
const levelOne = document.getElementById("levelOne")
const levelTwo = document.getElementById("levelTwo")
const levelThree = document.getElementById("levelThree")
const scoreContainer = document.getElementById("score");
const buttonStart = document.getElementById("start");
const buttonReset = document.getElementById("reset");
let level = 1

const volumeControl = document.getElementById('volumeControl');
const volumeFill = document.getElementById('volumeFill');
let audio = new Audio("assets/son/hammer.mp3");
audio.volume = 0.5;

let animationInterval;
let animationStarted = false;

let buttonS = document.createElement('div');
buttonS.textContent = "START";
buttonStart.appendChild(buttonS);
buttonS.addEventListener("click", function () {
    startGame()
})

let buttonR = document.createElement('div');
buttonR.textContent = "Play Again";
buttonReset.appendChild(buttonR);
reset.classList.add("hidden")
buttonR.addEventListener("click", function () {
    stopGame()
    startGame()
    reset.classList.add("hidden")
})

startButton.addEventListener("click", function () {
    startGame()
});

stopButton.addEventListener("click", function () {
    stopGame()
    start.classList.remove("hidden")
})

levelOne.addEventListener("click", function () {
    level = 1;
    stopGame();
    start.classList.remove("hidden")
    reset.classList.add("hidden");
    levelContainer.textContent = "level : " + level;

})
levelTwo.addEventListener("click", function () {
    level = 2;
    stopGame();
    start.classList.remove("hidden")
    reset.classList.add("hidden");
    levelContainer.textContent = "level : " + level;
})
levelThree.addEventListener("click", function () {
    level = 3;
    stopGame();
    start.classList.remove("hidden")
    reset.classList.add("hidden");
    levelContainer.textContent = "level : " + level;
})

clown.addEventListener("click", function () {

    if (animationStarted) {
        scoreContainer.textContent = score + "/20"
        audio.currentTime = 0
        audio.play();
        score++
        deplacerImage()
        if (score > 20) {
            stop()
            clown.classList.add("hidden");
            reset.classList.remove("hidden")
        }
    }
})


scoreContainer.textContent = score + "/20"
levelContainer.textContent = "level : " + level


function deplacerImage() {
    const maxX = window.innerWidth;
    const maxY = window.innerHeight;

    const randomX = Math.random() * (maxX - 150);// largeur image
    const randomY = Math.random() * (maxY - 150);// hauteur image

    clown.style.left = randomX + "px";
    clown.style.top = randomY + "px";
}


function startGame() {

    if (!animationStarted) {
        clown.classList.remove("hidden");
        animationStarted = true;
        score = 0
        scoreContainer.textContent = score + "/20"
        start.classList.add("hidden")
        if (level == 1) {
            animationInterval = setInterval(deplacerImage, 2000)
        } else if (level == 2) {
            animationInterval = setInterval(deplacerImage, 1000)
        } else if (level == 3) {
            animationInterval = setInterval(deplacerImage, 500)
        }

    }
}

function stopGame() {

    if (animationStarted) {
        clearInterval(animationInterval);
        animationStarted = false;
        clown.style.left = "";
        clown.style.top = "";
        score = 0
        scoreContainer.textContent = score + "/20"
        clown.classList.add("hidden");
    }
}

volumeControl.addEventListener('input', function () {

    audio.volume = volumeControl.value;
    volumeFill.style.width = volumeControl.value * 100 + '%';
});