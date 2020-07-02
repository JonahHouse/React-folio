import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
}));

const Footer = () => {
  {
    const classes = useStyles();

    return (
      <React.Fragment>
        <CssBaseline />
        <Typography className={classes.text} variant="h5" gutterBottom>
          &copy; 2020 Reactfolio
        </Typography>
      </React.Fragment>
    )
  }
}

export default Footer
