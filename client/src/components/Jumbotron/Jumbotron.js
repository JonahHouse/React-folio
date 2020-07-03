import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 500,
    height: 300
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  }
}));

const Jumbotron = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Reactfolio
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              The Reactfolio allows users to create their own portfolio by choosing elements created with React.
            </Typography>
          </CardContent>
          <CardMedia
            className={classes.cover}
            image src="https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg"
            title="Reactfolio Image" />
        </div>
      </Card>
    </>
  )
}

export default Jumbotron
