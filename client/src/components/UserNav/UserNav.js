import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ElementContext from '../../utils/ElementContext'
import ElementAPI from '../../utils/ElementAPI'

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
}));

const UserNav = (props) => {
  const { element, elements, attributes, handleInputChange, handleAddElement } = useContext(
    ElementContext
  );

  const {
    getElements,
    createElement,
    updateElement,
    deleteElement,
  } = ElementAPI;

  const [elementState, setElementState] = useState({
    type: "",
    attributes: {}
  })

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}
            value={props.siteTitle}
            name="siteTitle">
            {props.siteTitle}
          </Typography>
          <Button
            color="inherit"
            value={props.siteLink1}
            name="siteLink1">
            {props.siteLink1}</Button>
          <Button
            color="inherit"
            value={props.siteLink2}
            name="siteLink2">
            {props.siteLink2}</Button>

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default UserNav
