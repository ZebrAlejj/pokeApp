import React from 'react';
import {AppBar, Toolbar, Typography, InputBase} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Styles from "../styles";



export default function Header() {
  const classes = Styles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBarColor}>
        <Toolbar>
          <Typography className={classes.title} variant="h5" noWrap>
            PokeApp 
          </Typography>
          <small> by Alejandro Martín</small>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}