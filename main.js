const listaDeNombres = document.querySelector(".names-list");

let listaDeItems = [
    {
        Nombre: "jorgita",
        Apellido: "boludita",
        Edad: 15,
        id: "aca va aide Date.now()"
    }
];

const render = () => {
    listaDeNombres.innerHTML = listaDeItems.map((indice) => {
        return `Hola ${indice.Nombre} que cara de ${indice.Apellido}`
    })
    // `Hola ${listaDeItems[0].Nombre} que cara de ${listaDeItems[0].Apellido}`
}

const init = () => {
    document.addEventListener("DOMContentLoaded", render);

};

init();