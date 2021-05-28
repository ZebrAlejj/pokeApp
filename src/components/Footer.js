import React from 'react'
import { BottomNavigation, BottomNavigationAction  } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Styles from "../styles/styles";


export default function Footer() {

    const classes = Styles();

    return (
        <BottomNavigation className={classes.footer}>
            <a href={'https://www.linkedin.com/in/alejandro-jesus-martin-peña/'}>
                <BottomNavigationAction className={classes.primaryColor} icon={<LinkedInIcon />} />
            </a>
        </BottomNavigation >

    )
}
