import React from 'react'
import PokeCard from "./PokeCard";
import { Grid, Slide } from '@material-ui/core';


export default function PokeList(props) {

    const {pokes} = props
    const animate = true

    return (
        <div>
            <Slide in={animate} 
                direction="up"
                timeout={1500}>
                <Grid container spacing={5}>
                {Array.isArray(pokes) ?
                (pokes.map((poke, i) => 
                    <Grid item xs={12} sm={6} md={4} key={i}>
                        <PokeCard  pokemon={poke.data}/>
                    </Grid>
                )):
                (
                    <Grid item xs={12}>
                        <PokeCard  pokemon={pokes}/>
                    </Grid>)
                }
                </Grid>
            </Slide>
        </div>
    )
}
