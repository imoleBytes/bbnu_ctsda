
const hbar = document.getElementById("hbar")
const xbar = document.getElementById("xbar")
const mMenu = document.getElementById("m-menu")

// handles click event on hambuger menu icon and close icon
function handleMenu(){
    hbar.classList.toggle("hidden")
    xbar.classList.toggle("hidden")
    mMenu.classList.toggle("hidden")
}
