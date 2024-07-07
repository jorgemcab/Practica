const listaDeNombres = document.querySelector(".names-list");
const heroForm = document.querySelector(".hero-form");
const btnAcept = document.querySelector(".btn-acept");
///////////////////inputs constantes///////////////
const inputNombre = document.querySelector("#nombre");
const inputApellido = document.querySelector("#apellido");
const inputEdad = document.querySelector("#edad");


let listaDeItems = JSON.parse(localStorage.getItem('items')) || [];

const saveLocalStronati = ()=>{
    localStorage.setItem("items", JSON.stringify(listaDeItems))
};

const render = () => {
    listaDeNombres.innerHTML = listaDeItems.map((indice) => {
        return `<div class="contenedor-nombres">
                    <li>Hola ${indice.Nombre} que cara de ${indice.Apellido}</li>
                    <li> Edad: ${indice.Edad}
                    <li class= "container-icon">
                        <i class="fa-solid fa-user-xmark botonDeBorrar" data-id="${indice.id}" ></i>
                    </li>
                </div>`
    }).join("")
};

const agregarItem = (e) => {
    e.preventDefault();
    if( inputNombre.value.length == 0 ){
        return alert('ingresar nombre')
    }
    if( inputApellido.value.length == 0){
        return alert("ingresar apellido")
    }
    if( inputEdad.value.length == 0){
        return alert('ingresar edad')
    }   else{
        listaDeItems = [
            ...listaDeItems,
            {
                Nombre: inputNombre.value,
                Apellido: inputApellido.value,
                Edad: inputEdad.value,
                id: Date.now()
            }]
    };
    render();
    saveLocalStronati();
    heroForm.reset()
}

const borrarItem = (e) => {
    if(!e.target.classList.contains('botonDeBorrar')){
        return
    } else {
        const filterId = Number( e.target.dataset.id);
        listaDeItems = listaDeItems.filter((elem) => {
            return elem.id != filterId
        })};
    render();
    saveLocalStronati();
};

const init = () => {
    document.addEventListener("DOMContentLoaded", render);
    heroForm.addEventListener("submit", agregarItem);
    listaDeNombres.addEventListener("click", borrarItem);
};

init();