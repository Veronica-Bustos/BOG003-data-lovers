import { filtrar, ordenar, contarStatus } from "../src/data.js";

describe("test filtrar", () => {
    it("es una funcion", () => {
        expect(typeof filtrar).toBe("function");
    });

    const personajesSinFiltrar = [
        { name: "Rick Sanchez", gender: "Male" },
        { name: "Abadango Cluster Princess", gender: "Female" },
        { name: "Abradolf Lincler", gender: "Male" },
        { name: "Alexander", gender: "Male" },
        { name: "Calypso", gender: "Female" },
    ];

    const personajesFiltradosMales = [
        { name: "Rick Sanchez", gender: "Male" },
        { name: "Abradolf Lincler", gender: "Male" },
        { name: "Alexander", gender: "Male" },
    ];

    const personajesFiltradosFemales = [
        { name: "Abadango Cluster Princess", gender: "Female" },
        { name: "Calypso", gender: "Female" },
    ];

    it("devuelve los personajes filtrados (Male)", () => {
        expect(filtrar(personajesSinFiltrar, "Male")).toEqual(
            personajesFiltradosMales
        );
    });

    it("devuelve los personajes filtrados (Female)", () => {
        expect(filtrar(personajesSinFiltrar, "Female")).toEqual(
            personajesFiltradosFemales
        );
    });
});

describe("ordenar", () => {
    it("es una funcion", () => {
        expect(typeof ordenar).toBe("function");
    });

    const personajesprueba = [
        { name: "Rick Sanchez", gender: "Male" },
        { name: "Abadango Cluster Princess", gender: "Female" },
        { name: "Abradolf Lincler", gender: "Male" },
    ];

    const personajesordenados = [
        { name: "Abadango Cluster Princess", gender: "Female" },
        { name: "Abradolf Lincler", gender: "Male" },
        { name: "Rick Sanchez", gender: "Male" },
    ];

    it("devuelve los personjes ordenados", () => {
        expect(ordenar(personajesprueba, "a-z")).toEqual(personajesordenados);
    });
});

describe("contar status (reduce)", () => {
    it("es una funcion", () => {
        expect(typeof contarStatus).toBe("function");
    });

    const personajes = [
        {
            name: "Rick Sanchez",
            status: "Alive",
        },
        {
            name: "Morty Smith",
            status: "Alive",
        },
        {
            name: "Summer Smith",
            status: "Alive",
        },
        {
            name: "Beth Smith",
            status: "Alive",
        },
        {
            name: "Jerry Smith",
            status: "Alive",
        },
        {
            name: "Adjudicator Rick",
            status: "Dead",
        },
        {
            name: "Agency Director",
            status: "Dead",
        },
        {
            name: "Alan Rails",
            status: "Dead",
        },
    ];

    it("cuenta los personajes de un status", () => {
        expect(contarStatus(personajes, "Dead")).toEqual(3);
    });
});
