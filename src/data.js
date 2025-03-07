export const filtrar = (personajes, genero) => {
    let dataFiltrada = personajes.filter((personaje) => {
        return personaje.gender == genero;
    });
    // Me devuelve los datos filtrados
    return dataFiltrada;
};

export const ordenar = (personajes, orden) => {
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

export const contarStatus = (personajes, status) => {
    let resultado = personajes.reduce((sumatoria, personaje) => {
        if (personaje.status == status) {
            return sumatoria + 1;
        } else {
            return sumatoria;
        }
    }, 0);

    return resultado;
};
