import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Footer from '../../components/Footer'
import axios from 'axios'
import Navbar from '../../components/Navbar'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '50px'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

const Login = () => {
  const classes = useStyles()

  const [loginState, setLoginState] = useState({
    users: []
  })

  loginState.handleInputChange = event => {
    setLoginState({ ...loginState, [event.target.name]: event.target.value })
  }

  loginState.handleLogin = event => {
    event.preventDefault()
    axios.post('/api/users/login', {
      username: loginState.username,
      password: loginState.password
    })
      .then(({ data }) => {
        console.log(data)
        if (data) {
          localStorage.setItem('user', data)
          window.location = '/dashboard'
        } else {
          window.location = '/login'
        }
      })
      .catch(err => console.error(err))
  }

  if (localStorage.getItem('user')) {
    axios.get('/api/users/authorize', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user')}`
      }
    })
      .then(() => {
        window.location = '/dashboard'
      })
      .catch(err => console.error(err))
  }

  // componentDidMount() {
  //   fetchPosts().then(response => {
  //     this.setState({
  //       localStorage.setItem('user', data)
  //     })
  //   })

  return (
    <>
      <Navbar></Navbar>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
        </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='username'
              label='Username'
              name='username'
              autoComplete='username'
              autoFocus
              onChange={(event) => loginState.handleInputChange(event)}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              onChange={(event) => loginState.handleInputChange(event)}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={(event) => loginState.handleLogin(event)}
            >
              Sign In
          </Button>
            <Grid container>
              <Grid item>
                <Link href='/register' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Footer />
        <Box mt={8} />
      </Container>
    </>
  )
}

export default Login
