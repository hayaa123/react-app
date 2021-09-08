import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class Form1 extends Component {
  selectedOption = (e) => {
    // console.log(e.target.value)
    let selected = e.target.value;
    this.props.set_num(Number(selected))
  }


  render() {

    return (
      <>
        
        <Form onSubmit={this.props.submitted}>
        <Row >
          <Col>
          <FloatingLabel controlId="floatingSelect" label="srarch by horn" >
            <Form.Select aria-label="Floating label select example" onChangeCapture={this.selectedOption}>
              <option value="filter">Select</option>
              {this.props.hornes_list.map(item => {
                return <option value={item}>{item}</option>
              })}
            </Form.Select>
            </FloatingLabel>
          </Col>

          <Col><Button type="submit" className="mb-2">
            Submit
          </Button>
          </Col>
          <Col xs lg="6"></Col>
          </Row>
        
        </Form>


      </>
    )
  }
}

export default Form1
