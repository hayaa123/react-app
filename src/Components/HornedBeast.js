import React, { Component } from 'react'

export class HornedBeast extends Component {
    constructor(props){
        super(props)
        this.state={
            vote:0,
        }
    }
    addVote=()=>{
        this.setState({
            vote:this.state.vote+1
        })
    }

    render() {
        return (
            <>
              <h2>{this.props.name}</h2>
              <img  src={this.props.src} alt={this.name} title={this.name} onClick={()=>{this.props.clickOn(this.props.name,this.props.src,this.props.description)}}/>
              <p>{this.props.description}</p>
              <button onClick={this.addVote}>like</button>
              <p>`&#10084;&#65039;{this.state.vote}`</p>
            </>
        )
    }
}

export default HornedBeast



