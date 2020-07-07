import React from 'react';
import './Home.css'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

const styles = {
  background: {
    backgroundImage: "url(https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
    height: "100vh"
  }
};

const Home = () => {
  return (
    <div className="background">
      <Navbar />
      <div>
        <h1>Reactfolio</h1>
        <h3> Ready to create a sleek, professional portfolio? </h3>
        <h3> You've come to the right place.</h3>
      </div>
      <Footer />
    </div>
  )
}

export default Home
