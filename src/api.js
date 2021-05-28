import axios from "axios";

export const getPokemons = async (offset,limit) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
        const res = await axios.get(url);
        return res.data;
    } catch (error) {}
}

export const getPokemonDetails = async ( name ) => {
    try {
        const url = 'https://pokeapi.co/api/v2/pokemon/'
        const res = await axios.get(`${url}${name}`);
        return res;
    } catch (error) {}
}