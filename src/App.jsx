import React from 'react'
import './App.scss'
import Container from './layout/Container'
import Navbar from './components/Navbar/Navbar'
import {Outlet} from 'react-router-dom'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Container>
          <Navbar/>
          <Outlet/>
          <Footer/>
      </Container>
    </div>
  )
}

export default App