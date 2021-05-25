import axios from "axios";

export const getPokemons = async (offset,limit) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
        const res = await axios.get(url);
        return res.data;
    } catch (error) {}
}

export const getPokemonDetails = async ( urlDetail ) => {
    try {
        const res = await axios.get(urlDetail);
        return res;
    } catch (error) {}
}