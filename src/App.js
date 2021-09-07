import React, { Component } from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Main from './Components/Main'
import SelectedBeast from './Components/SelectedBeast'
import data from './data.json'
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false,
      data : data,
      name : "",
      src :"",
      discription : "",
    }
  }

   clickOn = (name,src,discription) => {
  this.setState({
    isClicked: true,
    name:name,
    src:src,
    discription: discription 
  })
}

  clickOff = () => {
  this.setState({
    isClicked: false
  })
}


render() {
  return (
    <>
      <Header />
      <Main aniamArr={this.state.data}
            clickOn= {this.clickOn} 
            isClicked={this.state.isClicked}
            />
      <Footer />
      <SelectedBeast clickOff={this.clickOff}
                     isClicked={this.state.isClicked}
                     name={this.state.name}
                     description = {this.state.discription}
                     src= {this.state.src}
                      />
    </>
  )
}
}

export default App
