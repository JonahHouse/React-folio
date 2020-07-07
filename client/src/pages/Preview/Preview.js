import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ElementAPI from '../../utils/ElementAPI';
import UserTextBox from '../../components/UserTextBox';
import ElementContext from '../../utils/ElementContext';
import Button from '@material-ui/core/Button';
import UserNav from '../../components/UserNav'
import UserBtn from '../../components/UserBtn'
import UserHero from '../../components/UserHero'
import UserFooter from '../../components/UserFooter'
import UserCard from '../../components/UserCard'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: 'none'
  },
  title: {
    flexGrow: 1
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  fixedHeight: {
    height: 240
  },
  bodyEditSection: {
    display: 'flex',
    padding: '16px'
  }
}))

const { getElements, createElement, updateElement, deleteElement } = ElementAPI

const Preview = () => {
  const classes = useStyles()

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  const [elementState, setElementState] = useState({
    elements: [],
    type: '',
    attributes: {}
  })

  useEffect(() => {
    getElements()
      .then(({ data }) => {
        setElementState({ ...elementState, elements: data })
      })
      .catch((err) => console.error(err))
  }, [])

  const home = () => {
    window.location = '/'
  }

  const dashboard = () => {
    window.location = '/dashboard'
  }

  const signOut = () => {
    localStorage.removeItem('user')
    window.location = '/'
  }

  const elementArray = (elementState.elements) ? elementState.elements : []
  let navbars = elementArray.filter(element => element.type === 'navbar')
  let footers = elementArray.filter(element => element.type === 'footer')
  let footer = footers[footers.length - 1]
  let heros = elementArray.filter(element => element.type === 'hero')
  let hero = heros[heros.length - 1]
  const navbar = navbars[navbars.length - 1]
  let buttons = elementArray.filter(element => element.type === 'button')
  const cards = elementArray.filter(element => element.type === 'card')

  return (
    <ElementContext.Provider value={elementState}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position='absolute'
          className={clsx(classes.appBar, classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <Typography
              component='h1'
              variant='h6'
              color='inherit'
              noWrap
              className={classes.title}
            >
              Preview
            </Typography>
            <Button color='inherit' onClick={() => home()}>
              Home
            </Button>
            <Button color='inherit' onClick={() => dashboard()}>
              Dashboard
            </Button>
            <Button color='inherit' onClick={() => signOut()}>
              Sign Out
            </Button>
          </Toolbar>
        </AppBar>

        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth='lg' className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Typography
                    component='h1'
                    variant='h6'
                    color='inherit'
                    noWrap
                    className={classes.title}
                  >
                    {
                      (navbar)
                        ? <>
                          <UserNav
                            siteTitle={navbar.attributes.siteTitle}
                            siteLink1={navbar.attributes.siteLink1}
                            siteLink2={navbar.attributes.siteLink2}
                          />
                        </>
                        : null
                    }
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.bodyEditSection}>
                  <Typography
                    component='h1'
                    variant='h6'
                    color='inherit'
                    noWrap
                    className={classes.title}
                  >
                    {
                      (hero) ? <UserHero
                        heroTitle={hero.attributes.heroTitle} heroParagraph={hero.attributes.heroParagraph}
                        heroBtn1={hero.attributes.heroBtn1}
                        heroBtn2={hero.attributes.heroBtn2}
                      >
                      </UserHero> : null
                    }
                  </Typography>
                </Paper>
              </Grid>

              {/* Body Edit Section */}
              <Grid item xs={12}>
                <Paper className={classes.bodyEditSection}>
                  <Typography
                    component='h1'
                    variant='h6'
                    color='inherit'
                    noWrap
                    className={classes.title}
                  >
                    {
                      buttons.map((button, index) => {
                        return
                        // <UserBtn
                        //   key={index}
                        //   btnText={button.attributes.btnText}
                        //   btnLink={button.attributes.btnLink}
                        // >
                        // </UserBtn>
                      })
                    }
                    {
                      cards.map((card, index) => {
                        return <UserCard
                          cardTitle={card.attributes.cardTitle}
                          cardBody={card.attributes.cardBody}
                          cardImage={card.attributes.cardImage}
                          cardButtonLink={card.attributes.cardButtonLink}
                          cardButtonText={card.attributes.cardButtonText}
                          key={index}
                        >
                        </UserCard>
                      })
                    }
                  </Typography>
                </Paper>
              </Grid>

              {/* Footer Edit Section */}
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Typography
                    component='h1'
                    variant='h6'
                    color='inherit'
                    noWrap
                    className={classes.title}
                  >
                    {
                      (footer)
                        ? <UserFooter
                          siteTitle={footer.attributes.siteTitle}
                        />
                        : null
                    }

                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Box pt={4} />
          </Container>
        </main>
      </div>
    </ElementContext.Provider>
  )
}

export default Preview
