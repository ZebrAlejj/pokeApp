import React from 'react';
import { getPokemonDetails, getPokemons } from "../api";
import {AppBar, Toolbar, Typography, InputBase, Grid, Box} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Styles from "../styles/styles";
import { Link } from 'react-router-dom';
import HeaderMenu from "./HeaderMenu";
import { useHistory } from 'react-router-dom'


export default function Header(props) {

  const classes = Styles();
  const history = useHistory()
  const {pokes, loading, count, page, limit, notFound} = props

  const searchPoke = async (value,key) => {
      try {
        // If seacrh value is empty get all pokemons
        if (value === '') {
          const data = await getPokemons(0,limit)
          const promise = data.results.map(async (poke) => {
            return await getPokemonDetails(poke.name)
          })
          const results = await Promise.all(promise)
          //Set the number of pages
          count(Math.ceil(data.count / limit))
          pokes(results)
          loading(false)
        } else {
          // When press enter key
          if (key === 'Enter') {
            history.push('/pokedex')
            // Get pokemon
            const res = await getPokemonDetails(value)
            if ( res !== undefined) {
              // Pokemon found
              pokes(res.data)
              count(1)
              page(1)
              loading(false)
            } else {
              // Pokemon not found
              loading(true)
              notFound(true)
            }
          }
        }
      } catch (e) {
        loading(true)
      }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBarColor}>
        <Toolbar>
          {/* Button Menu */}
              <HeaderMenu/>
          <Grid container
          direction="row"
          justify="space-between"
          alignItems="center">
            
            {/* Logo & Link */}
            <Grid item xs={6}>
              <Grid container 
              direction="row"
              alignItems="center">
                {/* Logo */}
                <Link className={classes.title} to='/pokedex'>
                  <Typography variant="h5" noWrap>
                    PokeApp 
                  </Typography>
                </Link>
                <small className={classes.small}> by Alejandro Martín</small>
                {/* Link */}
                <Box ml={10}>
                  <Link className={classes.title} to='/about'>
                      About us
                  </Link>
                </Box>
               
              </Grid>
            </Grid>

            {/* Search */}
            <Grid item>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  onKeyUp={event => searchPoke(event.target.value , event.key)}
                  placeholder="Search Pokemon"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}