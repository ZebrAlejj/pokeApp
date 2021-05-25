import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Pagination } from '@material-ui/lab';
import { getPokemonDetails, getPokemons } from "../api";

import Header from './Header';
import PokeList from "./PokeList";
import PokeDeatils from "./PokeDeatils";
import Styles from "../styles";

export default function Body() {

    const classes = Styles();

    const [pokes, setPokes] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);
    //Number of pokemons per page, aswell the offset
    const limit = 15;

    const fetchPokes = async (offset,limit) => {
        try {
            const data = await getPokemons(offset,limit)
            const promise = data.results.map(async (poke) => {
                return await getPokemonDetails(poke.url)
            })
            const results = await Promise.all(promise)
            //Set the number of pages
            setCount(Math.ceil(data.count / limit)) 
            console.log(data.count / limit);
            setPokes(results)
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = async (event, value) => {
        try {
            setPage(value)
            fetchPokes(limit*(value-1),limit)
        } catch (error) {
            console.log(error);
        }
      };

    useEffect(() => {
        fetchPokes(0,limit)
    }, [])

   
    return (
       <div>
        <Header></Header>
        <div className={classes.container}>
            <Router>
                <Route path='/pokedex' >
                    <h2>Pokedex</h2>
                    <Pagination 
                    page={page}
                    count={count} 
                    onChange={handleChange}/>
                    <PokeList pokes={pokes}/>
                </Route>
                <Route path='/details/:id' >
                    <PokeDeatils/>
                </Route>
                <Redirect to='/pokedex' />
            </Router>
            {/* TODO: FOOTER */}
        </div>
       </div>
        
    )
}
