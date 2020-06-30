import React, { useContext } from "react";
import { Store } from "../../store";
import actions from "../../store/action-types";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button'
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const SelectedElementsList = () => {
  const classes = useStyles()
  const { state, dispatch } = useContext(Store);
  const removeElement = id => {
    return dispatch({
      type: actions.REMOVE_SELECTED_ELEMENT,
      id
    });
  };
  return (
    <div className="selected-elements-list-container">
      <Typography variant="h5">
        Elements Added
      </Typography>

      <ul className="selected-elements-list">
        {state.selectedElements.map((tool) => (
          <li className="element-added" key={tool.id}>
            <Button
              size="medium"
              variant="outlined"
              className={classes.margin}
              onClick={() => removeElement(tool.id)}>
              {tool.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SelectedElementsList