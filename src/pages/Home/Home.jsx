import React from 'react'
import Container from '../../layout/Container'
import Navbar from '../../components/Navbar/Navbar'
import {Outlet} from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Ultimate from '../../components/Ultimate/Ultimate'
import NewArr from '../../components/NewArrNav/NewArrNav'

const Home = () => {
  return (
    <div>
      <Container>
          <Navbar/>
          <Ultimate/>
          <NewArr/>
          <Outlet/>
          <Footer/>
      </Container>
    </div>
  )
}

export default Home