import React, { useEffect, useState} from 'react'
import { Link, useParams } from "react-router-dom";
import { Grid, Slide } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { getPokemonDetails } from "../api";
import Styles from "../styles/styles";
import '../styles/types.css'
import noImg from "../assets/missingno.png";
import Pokeball from "../assets/pokeball.gif";

export default function PokeDeatils() {

    const { id } = useParams()
    const [poke, setPoke] = useState({});
    const [loading, setLoading] = useState(true)
    const classes = Styles();


    const fetchPoke = async () => {
        try {
            const res = await getPokemonDetails(id)
            setPoke(res.data)
            setLoading(false)
        } catch (error) {}
    }

    useEffect(() => {
        setLoading(true)
        fetchPoke()
    },[fetchPoke])

    return (
        <div>
            {loading ? 
                <img alt='loading' src={Pokeball} width="200" />
            :
            <Slide in={true} 
                direction="up"
                timeout={1000}>
                <div className={classes.containerDetails}> 
                    {/* row */}
                    <Grid container
                        direction="row"
                        alignItems="center">
                        <Grid item xs={1}>
                            <Link style={{color: 'white'}}
                                to='/pokedex'>
                                <ArrowBackIcon/>
                            </Link>
                        </Grid>
                        <Grid className={classes.name} item xs={10}>
                            <h2 >{ poke.name.toUpperCase() }</h2> 
                        </Grid>
                    </Grid>
                    
                    <hr></hr>
                    
                    <Grid container
                    direction="row"
                    justify="space-around"
                    alignItems="center">
                        <Grid item xs={12}>
                            <img className={classes.img} 
                                alt={poke.name}
                                src={poke.sprites.front_default != null ? 
                                    (poke.sprites.front_default) 
                                    : (noImg)} />
                        </Grid>
                        <Grid item>
                            <ul className={classes.list}>
                                <li>📏 Weight: {poke.weight/10} kg</li>
                                <li>⚖️ Height: {poke.height/10} m</li>
                            </ul>
                        </Grid>
                        <Grid item>
                            <p>
                                Types: {poke.types.map((t,key)=> 
                                <span className={`type ${t.type.name}`} key={key}>{t.type.name.toUpperCase()}</span>)}
                            </p>
                        </Grid>
                        
                    </Grid>
                </div>
            </Slide>
            }
           
        </div>
    )
}
