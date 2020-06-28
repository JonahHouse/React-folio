import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from '@material-ui/core/Button'
import ModalCustomize from '../Navbar/ModalCustomize'
import ComponentContext from '../../utils/ComponentContext'


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
  const {
    components,
    handleListItemClick,
    handleUpdateComponent,
    handleDeleteComponent
  } = useContext(ComponentContext)

  return (
    <div className={classes.root}>
      <List>
      {components.map(component => (
          <ListItem 
          button 
          selected={component.id}
          onClick={handleListItemClick}
          key={component._id}
          item={component}
           >
            <ListItemText primary={component.title} />
          </ListItem>
      ))}
      </List>
    </div>
  );
}


export default ListItems