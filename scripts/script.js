/*BOTONES*/
const btncard1 = document.getElementById("bienvenida");
const btncard2 = document.getElementById("info");
const btncard3 = document.getElementById("info2");
const btncerrarcard1 = document.getElementById("cerrarcard1");
const btncerrarcard2 = document.getElementById("cerrarcard2");
const btncerrarcard3 = document.getElementById("cerrarcard3");

/* TARJETAS Y FONDO*/
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const fondo = document.getElementById("fondoOpaco");

/* BOTONES PARA MOSTRAR TARJETAS */
btncard1.addEventListener("click", (evt) => {
    if(card1.classList.contains("d-block")){
        card1.classList.remove("d-block");
    }else{
        card1.classList.add("d-block");
        card1.classList.add("efecto");
        fondoOpaco.classList.add("d-block");
    }
})

btncard2.addEventListener("click", (evt) => {
    if(card2.classList.contains("d-block")){
        card2.classList.remove("d-block");
    }else{
        card2.classList.add("d-block");
        card2.classList.add("efecto");
        fondoOpaco.classList.add("d-block");
    }
})

btncard3.addEventListener("click", (evt) => {
    if(card3.classList.contains("d-block")){
        card3.classList.remove("d-block");
    }else{
        card3.classList.add("d-block");
        card3.classList.add("efecto");
        fondoOpaco.classList.add("d-block");
    }
})

/* BOTONES PARA CERRAR TARJETAS */
btncerrarcard1.addEventListener("click", (evt) => {
    if(card1.classList.contains("d-block")){
        card1.classList.remove("d-block");
        fondoOpaco.classList.remove("d-block");
    }else{
        card1.classList.add("d-block");
    }
})

btncerrarcard2.addEventListener("click", (evt) => {
    if(card2.classList.contains("d-block")){
        card2.classList.remove("d-block");
        fondoOpaco.classList.remove("d-block");
    }else{
        card2.classList.add("d-block");
    }
})

btncerrarcard3.addEventListener("click", (evt) => {
    if(card3.classList.contains("d-block")){
        card3.classList.remove("d-block");
        fondoOpaco.classList.remove("d-block");
    }else{
        card3.classList.add("d-block");
    }
})