import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Pagination } from '@material-ui/lab';
import { Box, Grid } from '@material-ui/core';
import { getPokemonDetails, getPokemons } from "../api";

import Header from './Header';
import PokeList from "./PokeList";
import PokeDeatils from "./PokeDeatils";
import Styles from "../styles/styles";
import Pokeball from "../assets/pokeball.gif";
import About from './About';
import Footer from './Footer';


export default function Body() {

    const classes = Styles();

    const [pokes, setPokes] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true)
    const [notFound, setnotFound] = useState(false)
    //Number of pokemons per page, aswell the offset
    const limit = 15;

    const fetchPokes = async (offset,limit) => {
        try {
            const data = await getPokemons(offset,limit)
            const promise = data.results.map(async (poke) => {
                return await getPokemonDetails(poke.name)
            })
            const results = await Promise.all(promise)
            //Set the number of pages
            setCount(Math.ceil(data.count / limit))
            setnotFound(false)
            setLoading(false)
            setPokes(results)
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = async (event, value) => {
        try {
            setLoading(true)
            setnotFound(false)
            setPage(value)
            fetchPokes(limit*(value-1),limit)
        } catch (error) {
            console.log(error);
        }
      };

    useEffect(() => {
        setLoading(true)
        fetchPokes(0,limit)
    }, [])

   
    return (
        <Router>
            {/* Header */}
            <Header pokes={setPokes} 
            loading={setLoading}
            limit={limit}
            page={setPage}
            count={setCount}
            notFound={setnotFound}
            ></Header>
            {/* Body */}
            <div className={classes.container}>
                <Route path='/pokedex' >
                    <Grid container
                        direction="column"
                        justify="center"
                        alignItems="center">
                        <h2>Pokedex</h2>
                        {/* Pagination */}
                        <Pagination 
                        page={page}
                        count={count} 
                        onChange={handleChange}/>
                        {/* Pokemon List */}
                        <Box mt={2}>
                            {loading ? 
                                (notFound ? (<h2>Pokemon not found</h2>)
                                :
                                (<img src={Pokeball} alt='loading' width="200" />)
                                ) 
                                :
                                ( <PokeList pokes={pokes}/> )
                            }
                            
                        </Box>                    
                    </Grid>   
                </Route>
                {/* Pokemon Details */}
                <Route path='/details/:id' >
                    <PokeDeatils/>
                </Route>
                {/* About */}
                <Route path='/about' >
                    <About/>
                </Route>
                {/* TODO: FOOTER */}
                <Footer></Footer>
            </div>

            <Redirect to='/pokedex' />
        </Router> 
    )
}
