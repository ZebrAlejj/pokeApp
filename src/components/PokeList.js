import React from 'react'
import PokeCard from "./PokeCard";
import Grid from '@material-ui/core/Grid';


export default function PokeList(props) {

    const {pokes} = props

    return (
        <div>
            <Grid container spacing={5}>
            {pokes.map((poke, i) => 
                <Grid item xs={12} sm={4} key={i}>
                    <PokeCard  pokemon={poke.data}/>
                </Grid>
            )}
            </Grid>
            
        </div>
    )
}
