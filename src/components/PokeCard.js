import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, Typography} from '@material-ui/core';
import { Link } from "react-router-dom";
import Styles from "../styles";
import noImg from "../assets/missingno.png";

export default function PokeCard(props) {

    const classes = Styles();
    const {pokemon} = props
    console.log(pokemon.sprites.front_default);

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <div className={classes.image}>
                     <img className={classes.img} 
                     alt={pokemon.name}
                     src={pokemon.sprites.front_default != null ? 
                        (pokemon.sprites.front_default) 
                        : (noImg)} />
                </div>
                
            </CardActionArea>

            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {pokemon.name.toUpperCase()}
            </Typography>
            <hr></hr>
            <Typography variant="body2" component="p">
                {/* TODO: Types */}
                
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
