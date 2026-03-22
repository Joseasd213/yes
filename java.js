const botonComo = document.querySelector("#como button");
const buttons = document.querySelector(".buttons");
const content = document.querySelector("#content");
const anterior = document.querySelector("#anterior");
const siguiente = document.querySelector("#siguiente");

/*Java-index*/

function comojugar(){
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

/*Java-Como jugar*/

function anteriores(){
    content.classList.remove("hidden");
    buttons.classList.add("hidden");
}


anterior.addEventListener("click", anteriores);
