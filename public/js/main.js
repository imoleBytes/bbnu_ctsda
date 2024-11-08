const header = document.getElementById("header")

function updateHeight() {
    header.style.setProperty('--header-height', `${header.offsetHeight}px`); 
}

window.addEventListener("resize", updateHeight);
updateHeight();


const hbar = document.getElementById("hbar")
const xbar = document.getElementById("xbar")
const mMenu = document.getElementById("m-menu")

// handles click event on hambuger menu icon and close icon
function handleMenu(){
    hbar.classList.toggle("hidden")
    xbar.classList.toggle("hidden")
    mMenu.classList.toggle("hidden")
}

const images = [
    "fist_knuckles.jpeg",
    "girl_eng.jpeg",
    "girl_grad_happy.jpeg",
    "girl_grad.jpeg",
    "girls_cap.jpeg",
    "lab.jpeg",
    "presentation.jpeg",
    "students_balloons.jpeg"
]


let index = 0;

function changeBackground() {
    const hero = document.getElementById("hero")
    hero.style.backgroundImage = `url('/public/img/${images[index]}')`
    index = (index+1) % images.length;
}

setInterval(changeBackground, 3000)