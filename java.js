const botonComo = document.querySelector("#como button");
const buttons = document.querySelector(".buttons");
const content = document.querySelector("#content");
const anterior = document.querySelector("#anterior");
const siguiente = document.querySelector("#siguiente");
const explicacion = document.querySelector("#explicacion");
const purpose = document.querySelector("#purpose");
const how = document.querySelector("#how");
const who = document.querySelector("#who");



/*Java-index*/

function comojugar(){
    // Mostrar botones
    buttons.classList.remove("hidden");
    content.classList.add("hidden");
    explicacion.classList.remove("hidden");
    purpose.classList.remove("hidden");
    how.classList.remove("hidden");
    who.classList.remove("hidden");
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
    explicacion.classList.add("hidden");
    purpose.classList.add("hidden");
    how.classList.add("hidden");
    who.classList.add("hidden");
}


anterior.addEventListener("click", anteriores);
