import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export class HornedBeast extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vote: 0,
        }
    }
    addVote = () => {
        this.setState({
            vote: this.state.vote + 1
        })
    }

    render() {
        return (
            <>
                {/* <h2>{this.props.name}</h2>
                <img src={this.props.src} alt={this.name} title={this.name} onClick={() => { this.props.clickOn(this.props.name, this.props.src, this.props.description) }} />
                <p>{this.props.description}</p>
                <button onClick={this.addVote}>like</button>
                <p>`&#10084;&#65039;{this.state.vote}`</p> */}

                <Col><Card style={{ width: '22rem',height:'35rem' }}>
                    <Row>
                    <Card.Img variant="top" src={this.props.src} style={{ width: '100%',height:'20rem'}}/>
                    </Row>
                    <Row>

                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>

                        <Card.Text>
                        {this.props.description}
                        </Card.Text>
                        <p>&#10084;&#65039;{this.state.vote}</p>
                        <Button variant="primary" onClick={this.addVote}>like</Button>
                        
                    </Card.Body>
                    </Row>

                </Card>
                </Col>
            </>
        )
    }
}

export default HornedBeast



