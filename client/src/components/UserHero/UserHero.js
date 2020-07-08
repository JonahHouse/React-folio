import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    justifyContent: "center"
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  }
}));

const UserHero = (props) => {
  const classes = useStyles();
  const background = props.backgroundImage

  return (
    <div className={classes.heroContent} style={{
      backgroundImage: `url(${background})`
    }}>
      < Container maxWidth="sm" >
        <Typography
          component="h1" variant="h2" align="center" color="textPrimary" name="heroTitle" value={props.heroTitle} gutterBottom >
          {props.heroTitle}
        </Typography>
        <Typography variant="h5" align="center" name="heroParagraph" value={props.heroParagraph} color="textSecondary" paragraph>
          {props.heroParagraph}
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary" name="heroBtn1" value={props.heroBtn1}>
                {props.heroBtn1}
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary" name="heroBtn2" value={props.heroBtn2}>
                {props.heroBtn2}
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container >
    </div >
  )
}

export default UserHero
