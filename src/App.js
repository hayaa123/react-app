import React, { Component } from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Main from './Components/Main'
import SelectedBeast from './Components/SelectedBeast'
import data from './data.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Components/Form1'
import Row from 'react-bootstrap/Row';

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isClicked: false,
      hornes_list :this.hornesReturn(data),
      data: data,
      name: "",
      src: "",
      discription: "",
      selected_horn_number : 0, 
      submit: false
    }
  }

  data_filter = (data,selected_horn_number)=>{
    let filtered_data = data.filter((item)=>{
        return item.horns === selected_horn_number
    })
     return  filtered_data
  }

  set_num = (selected_horn_number)=>{
    this.setState({
      selected_horn_number:selected_horn_number
    })
  }

  submitted =(e)=>{
    e.preventDefault();
    this.setState({
      submit:true
    })
    return this.props.selected_horn_number
}

  hornesReturn = (data) => {
    let hornes_list = [];
    hornes_list = data.map((item) => {
      return item.horns
    })
    hornes_list = new Set(hornes_list)
    hornes_list = Array.from(hornes_list)
    return hornes_list
  }
  

  clickOn = (name, src, discription) => {
    this.setState({
      isClicked: true,
      name: name,
      src: src,
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
        <Form hornes_list = {this.state.hornes_list}
         set_num={this.set_num} 
         selected_horn_number={this.state.selected_horn_number}
         submitted ={this.submitted}/>

        <Header />
        <Row>
        <Main aniamArr={this.state.data}
          clickOn={this.clickOn}
          hornesReturn={this.hornesReturn}
          isClicked={this.state.isClicked}
          data_filter = {this.data_filter}
          submit = {this.state.submit}
          selected_horn_number ={this.state.selected_horn_number}
        />
        </Row>
        {
          console.log(this.state.selected_horn_number)
        }
        <Footer />
        <SelectedBeast clickOff={this.clickOff}
          isClicked={this.state.isClicked}
          name={this.state.name}
          description={this.state.discription}
          src={this.state.src}
        />

      </>
    )
  }
}

export default App
