import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, Fade, Typography} from '@material-ui/core';
import { Link } from "react-router-dom";

import '../styles/types.css'
import Styles from "../styles/styles";
import noImg from "../assets/missingno.png";

export default function PokeCard(props) {

    const classes = Styles();
    const {pokemon} = props

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <Fade in={true}
                timeout={5000}>
                    <Link to={`/details/${pokemon.name}`}>
                        <div className={classes.image}>
                            <img className={classes.img} 
                            alt={pokemon.name}
                            src={pokemon.sprites.front_default !== null ? 
                                (pokemon.sprites.front_default) 
                                : (noImg)} />
                        </div>
                    </Link>
                </Fade>
               
                
            </CardActionArea>

            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {pokemon.name.toUpperCase()}
            </Typography>
            <hr></hr>
            <Typography variant="body2" component="p">
                {/* TODO: Types */}
                {pokemon.types.map((t,key)=> 
                            <span className={`type ${t.type.name}`} key={key}>{t.type.name.toUpperCase()}</span>)}
            </Typography>
            </CardContent>
            
            <CardActions>
                <Link
                    to={`/details/${pokemon.name}`}
                    className={classes.deatilsLink}>
                    DETAILS
                </Link>
            </CardActions>
        </Card>
    )
}
