import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from '@material-ui/core/Button'
import ModalCustomize from '../Navbar/ModalCustomize'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}))


function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

// main ListItems smart Components Function
const ListItems = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button>
          <ListItemText primary="NavBar"/>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Footer"/>
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Form" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Button"/>
        </ListItemLink>
      </List>
    </div>
  );
}


export default ListItems