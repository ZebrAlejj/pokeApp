import { makeStyles, fade } from "@material-ui/core";

const red = '#EF5350'
const dark = '#212121'

export default makeStyles((theme) => ({
  primaryColor: {
    color: `${red} !important`
  },  
  // Deatils
  containerDetails: {
    backgroundColor: dark,
    color: 'white',
    padding: 10,
    borderRadius: '5px'
  },
  list: {
    listStyleType: 'none'
  },
  // Body
  container: {
    margin: 18,
    textAlign: 'center',
    paddingBottom: 50
  },
  // Card
  card: {
      color:'white',
      backgroundColor: dark
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
  root: {
    flexGrow: 1,
  },
  // Header
  appBarColor: {
    backgroundColor: red
  },
  menuButton: {
    display: 'none',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  title: {
    marginRight: 10,
    display: 'block',
    color: 'white',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  small:{
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
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
  // footer
  footer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: `${dark} !important`
  }
  }));