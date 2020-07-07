import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';
import ElementContext from '../../utils/ElementContext'
import ElementAPI from '../../utils/ElementAPI'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const UserNav = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            value={props.siteTitle}
            name="siteTitle">
            {props.siteTitle}
          </Typography>
          {
            (props.linkedin) ? <IconButton
              href={props.linkedin}
              target="_blank"><LinkedInIcon style={{ fill: "white" }}></LinkedInIcon></IconButton> : null
          }
          {
            (props.github) ? <IconButton
              href={props.github}
              target="_blank"><GitHubIcon style={{ fill: "white" }}></GitHubIcon></IconButton> : null
          }
          {
            (props.instagram) ? <IconButton
              href={props.instagram}
              target="_blank"><InstagramIcon style={{ fill: "white" }}></InstagramIcon></IconButton> : null
          }
        </Toolbar>
      </AppBar>
    </div >
  )
}

export default UserNav
