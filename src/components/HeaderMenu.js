import React, {useState} from 'react'
import { Button, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import Styles from "../styles/styles";
import { useHistory } from 'react-router-dom'

export default function HeaderMenu() {

    const classes = Styles();
    const history = useHistory()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const navigate = (event) => {
        history.push(`/${event.currentTarget.dataset.value}`)
        setAnchorEl(null)
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button 
                className={classes.menuButton}
                aria-controls="simple-menu" 
                aria-haspopup="true" 
                onClick={handleClick}>
                <MenuIcon />
            </Button>
            <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                      maxHeight: 500,
                      width: 100,
                    },
                  }}>     
                <MenuItem data-value={'pokedex'} onClick={navigate}> Pokedex </MenuItem>
                <MenuItem data-value={'about'} onClick={navigate}> About us </MenuItem>
            </Menu>
        </div>
    )
}