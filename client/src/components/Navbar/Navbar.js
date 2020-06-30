import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  }
}))

const Navbar = () => {
  const classes = useStyles()
  let links;

  function signOut() {
    localStorage.removeItem('user');
    window.location = "/"
  };

  if (localStorage.getItem('user')) {
    links =
      <div>
        <Button color="inherit" onClick={() => signOut()}>Sign Out</Button>
        <Link to="/dashboard" className={classes.link}>
          <Button color="inherit">Dashboard</Button>
        </Link>
      </div >
  } else {
    links =
      <div>
        <Link to="/login" className={classes.link}>
          <Button color="inherit">Login</Button>
        </Link>
        <Link to="/register" className={classes.link}>
          <Button color="inherit">Sign Up</Button>
        </Link>
        <Link to="/dashboard" className={classes.link}>
          <Button color="inherit">Dashboard</Button>
        </Link>
      </div>
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.link}>
              ReactFolio
            </Link>
          </Typography>
          {links}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;