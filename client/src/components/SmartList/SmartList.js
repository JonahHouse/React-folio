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

// main ListItems  Function
const SmartList = () => {
  const classes = useStyles()
  const {
    components,
    handleListItemClick,
    handleUpdateComponent,
    handleDeleteComponent
  } = useContext(ComponentContext)
  const [componentState, setComponentState] = useState({
    components: [
      {
        name: "NavBar",
        input: ''
      },
      {
        name: "Footer"
        input: ''
      },
      {
        name: "Form"
        input: ''
      },
      {
        name: "Button"
        input: ''

      }
    ]
  })


  return (
    <div className={classes.root}>
      <List>
      {components.map(component => (
          <ListItem 
          button 
          selected={component.id}
          onClick={handleComponentSelection}
          key={component._id}
          item={component}
           >
            <ListItemText primary={component.name} />
          </ListItem>
      ))}
      </List>
    </div>
  );
}


export default SmartList 