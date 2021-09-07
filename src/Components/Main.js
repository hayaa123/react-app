import React, { Component } from 'react'
import HornedBeast from './HornedBeast'

export class Main extends Component {

    // constructor(props){
    //     super(props);
    //     this.state={
    //             vote:0,
    //     }
    // }

    // data = this.props.data ; --> ??? why its tell me unefined ?

    render() {
 
        return (
            <>
            {

            this.props.aniamArr.map(item=>{
                   return <HornedBeast name={item.title} src={item.image_url} description= {item.description} clickOn={this.props.clickOn}/>
                })    
            }  
            {
                console.log(this.props.isClicked)
            }
            </>
        )
    }
}

export default Main
