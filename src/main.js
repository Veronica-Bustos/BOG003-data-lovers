import { example } from "./data.js";
// importar la data de rick and morty
import data from "./data/rickandmorty/rickandmorty.js";

// Funcion que limpia el main y despues agrega las tarjetas de los personajes
// Recibe: arreglo de objetos con personajes
// Devuelve: nada
// que hace: inserta en el main las tarjeta s con appendChild
const mostrarPersonajes = (personajes) => {
    // instancia el elemento main
    let main = document.querySelector("main");
    // limpia el contenido del elemento main
    main.innerHTML = "";
    // recorre el arreglo de personajes
    personajes.forEach((personaje) => {
        // crea la tarjeta llamando la funcion
        // crearTarjeta y pasandole un personaje
        let tarjeta = crearTarjeta(personaje);
        // agrega la tarjeta al main
        main.appendChild(tarjeta);
    });
};

// function restar(a, b) {
//     return a - b;
// }

// const restarFlecha = (a, b) => {
//     return a - b;
// };

// let rsultado = restar(1, 2);

// let rsultado = restarFlecha(1, 2);

// Funcion que crea el div tarjeta y sus etiquetas internas
// Recibe: un objeto de tipo personaje
// Devuelve: un elemento HTML (div tarjeta)
// que hace: crea el elemento div tarjeta con sus divs internos
const crearTarjeta = (personaje) => {
    // crea un elemento html (nodo) de tipo div
    let divTarjeta = document.createElement("div");
    // agrega el atributo clase con el valor tarjeta (class="tarjeta")
    divTarjeta.setAttribute("class", "tarjeta");

    // crea un elemento html (nodo) de tipo div
    let divFoto = document.createElement("div");
    // agrega el atributo clase con el valor foto (class="foto")
    divFoto.setAttribute("class", "foto");

    // crea un elemento html (nodo) de tipo img
    let img = document.createElement("img");
    // agrega el atributo src con el valor de la url de la imagen (src="url")
    img.setAttribute("src", personaje.image);

    // crea un elemento html (nodo) de tipo div
    let divBio = document.createElement("div");
    // agrega el atributo clase con el valor bio (class="bio")
    divBio.setAttribute("class", "bio");

    // crea un elemento html (nodo) de tipo p
    let parrafo = document.createElement("p");
    // agrega texto al parrafo, el texto es el nombre del personaje
    parrafo.innerText = personaje.name;

    // inserta la imagen como hija del div foto (dentro de div .foto)
    divFoto.appendChild(img);
    // inserta el parrafo como hijo del div bio (dentro de div .bio)
    divBio.appendChild(parrafo);
    // inserta el divFoto como hijo del divTarjeta (dentro de div .tarjeta)
    divTarjeta.appendChild(divFoto);
    // inserta el divBio como hijo del divTarjeta (dentro de div .tarjeta)
    divTarjeta.appendChild(divBio);

    // devuelve el elemento HTML divTarjeta
    return divTarjeta;
};

// llamar a la funcion mostrarPersonajes y pasarle la data
mostrarPersonajes(data.results);

// filtra en base al genero de la data con sus personajes
const filtrar = (personajes, genero) => {
    let dataFiltrada = personajes.filter((personaje) => {
        return personaje.gender == genero;
    });
    // Me devuelve los datos filtrados
    return dataFiltrada;
};

// Selecciona el selec filtro del html
let select_filtro = document.querySelector("#filtro");
// Se le asigna el evento del cambio de opcion en el selec
select_filtro.addEventListener("change", () => {
    // Se obtiene el valor del elemento option del selec
    let genero = select_filtro.value;
    // Se filtra la data por genero
    let resultado = filtrar(data.results, genero);
    // console.table(resultado);
    // Se muetsra la data filtrada
    mostrarPersonajes(resultado);
});

let ordenar = (personajes, orden) => {
    return personajes.sort(function (personajeA, personajeB) {
        if (orden == "a-z") {
            if (personajeA.name > personajeB.name) {
                return 1;
            }
    
            if (personajeA.name < personajeB.name) {
                return -1;
            }
        }

        if (orden == "z-a") {
            if (personajeA.name > personajeB.name) {
                return -1;
            }
    
            if (personajeA.name < personajeB.name) {
                return 1;
            }
        }
        

        return 0;
    });
};

let select_ordenar = document.querySelector("#ordenar");

select_ordenar.addEventListener("change", function () {
    let ornden = select_ordenar.value;
    let resultado_ordenado = ordenar(data.results, ornden);
    mostrarPersonajes(resultado_ordenado);
});
