import React from 'react';
import './Home.css'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1>Reactfolio</h1>
        <h3> Ready to create a sleek, professional portfolio? </h3>
        <h3> You've come to the right place.</h3>
      </div>
      <Footer />
    </>
  )
}

export default Home
