const botonComo = document.querySelector("#como button");
const buttons = document.querySelector(".buttons");
const content = document.querySelector("#content");
function comojugar(){
    console.log("jugar");

    // Mostrar botones
    buttons.classList.remove("hidden");
    content.classList.add("hidden");
}

botonComo.addEventListener("click", comojugar);


const botonJugar = document.querySelector("#jugar button");

function jugar(){
    console.log("jugarrrrr");
}

botonJugar.addEventListener("click", jugar);