import React, { Component } from 'react'

export class HornedBeast extends Component {
    render() {
        return (
            <>
              <h2>{this.props.name}</h2>
              <img  src={this.props.src} alt={this.name} title={this.name}/>
              <p>{this.props.description}</p>
            </>
        )
    }
}

export default HornedBeast



