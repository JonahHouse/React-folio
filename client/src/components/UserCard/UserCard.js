import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  cardBody: {
    maxWidth: "313px !important",
    overflowWrap: "normal !important",
    wordWrap: "break-word",
    whiteSpace: "normal"
  }
});

const UserCard = (props) => {

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.cardImage}
          title={props.cardTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" value={props.CardTitle} name="cardTitle">
            {props.cardTitle}
          </Typography>
          <Typography className={classes.cardBody} variant="body2" color="textSecondary" component="p" name="cardBody" value={props.cardBody}>
            {props.cardBody}
          </Typography>
        </CardContent>
      </CardActionArea >
      <CardActions>
        <Button
          size="small"
          color="primary"
          name="buttonText"
          value={props.cardButtonText}
          href={props.cardButtonLink}
        >
          {props.cardButtonText}
        </Button>
      </CardActions>
    </Card >
  );
}

export default UserCard
