const listaDeNombres = document.querySelector(".names-list");
const formHero = document.querySelector(".hero-form")


const listaDeItems = [
    {
        Nombre : 'juan',
        Apellido : 'perez',
        Edad : 25
    }
]


const render = () => {
    listaDeNombres.innerHTML = listaDeItems.map((indice) => {
        return ` hola ${indice.Nombre}`
    })
    
}

const agregarItem = (e) => {
    e.preventDefault();

}


const init = () => {
    document.addEventListener("DOMContentLoaded", render);
    formHero.addEventListener("submit", agregarItem)

};

init()