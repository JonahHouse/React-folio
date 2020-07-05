import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ElementContext from "../../utils/ElementContext";
import ElementAPI from "../../utils/ElementAPI";
import UserNav from '../../components/UserNav'
import UserBtn from '../../components/UserBtn'
import UserHero from '../../components/UserHero'
import UserFooter from '../../components/UserFooter'
import UserCard from '../../components/UserCard'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Preview = () => {
  const classes = useStyles();
  const [elementState, setElementState] = useState({
    elements: [],
    type: '',
    attributes: {}
  });

  useEffect(() => {
    getElements()
      .then(({ data }) => {
        setElementState({ ...elementState, elements: data });
      })
      .catch((err) => console.error(err));
  }, []);




  return (
    <div className="user-navbar-section">
      <UserNav></UserNav>
    </div>

    <div className="user-hero-section">
      <UserHero></UserHero>
    </div>

    <div className="user-body-section">
    </div>

    <div className="user-footer-section">
      <UserFooter></UserFooter>
    </div>

  );
}
export default Preview
