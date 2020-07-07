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
    padding: '10px 20px 20px 20px'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

const Register = () => {
  const classes = useStyles()

  const [registerState, setRegisterState] = useState({
    users: [],
    handleRegister: '',
    handleInputChange: ''
  })

  registerState.handleInputChange = event => {
    setRegisterState({ ...registerState, [event.target.name]: event.target.value })
    console.log(registerState);
  }

  registerState.handleRegister = event => {
    event.preventDefault()
    axios.post('/api/users/register', {
      name: `${registerState.firstName} ${registerState.lastName}`,
      email: registerState.email,
      username: registerState.username,
      password: registerState.password
    })
      .then(({ data }) => {
        console.log(data)
        if (data) {
          window.location = '/login'
        } else {
          window.location = '/register'
        }
      })
      .catch(err => console.error(err))
  }

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
            Sign up
        </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='fname'
                  name='firstName'
                  variant='outlined'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                  autoFocus
                  onChange={(event) => registerState.handleInputChange(event)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='lastName'
                  label='Last Name'
                  name='lastName'
                  autoComplete='lname'
                  onChange={(event) => registerState.handleInputChange(event)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='username'
                  label='Username'
                  name='username'
                  autoComplete='username'
                  onChange={(event) => registerState.handleInputChange(event)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  onChange={(event) => registerState.handleInputChange(event)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                  onChange={(event) => registerState.handleInputChange(event)}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={(event) => registerState.handleRegister(event)}
            >
              Sign Up
          </Button>
            <Grid container justify='flex-end'>
              <Grid item>
                <Link href='/Login' variant='body2'>
                  Already have an account? Sign in
              </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5} />
        <Footer />
      </Container>
    </>
  )
}

export default Register
