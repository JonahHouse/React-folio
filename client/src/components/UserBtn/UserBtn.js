import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const UserBtn = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        value={props.btnText}
        variant="contained"
        name="btnText"
        color="primary"
        href={props.btnLink}>
        {props.btnText}
      </Button>

    </div>
  );
}

export default UserBtn
