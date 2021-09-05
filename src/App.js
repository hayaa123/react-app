import React, { Component } from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Main from './Components/Main'

export class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <Main/>
        <Footer/>
      </>
    )
  }
}

export default App
