import { makeStyles, fade } from "@material-ui/core";
import { MicNone } from "@material-ui/icons";

const red = '#EF5350'

export default makeStyles((theme) => ({
    appBarColor: {
        backgroundColor: red
    },
    container: {
      margin: 18,
      textAlign: 'center'
    },
    card: {
        color:'white',
        backgroundColor: '#212121'
    },
    image: {
      marginTop:10,
      width: '100%',
      height: '100%',
      padding: 10
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: 96,
      maxHeight: 96,
    },
    deatilsLink: {
      color: red,
      padding: 10,
      textDecoration: 'none',
      border: `solid 1px ${red}`,
      borderRadius: '5px',
      width:'100%',
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
    },
    primaryColor: {
      color: red
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      marginRight: 10,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));