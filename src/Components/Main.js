import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
import data from '../data.json'

export class Main extends Component {

    // constructor(props){
    //     super(props);
    //     this.state={
    //             vote:0,
    //     }
    // }
    
    
    render() {
 
        return (
            <>
            {

               data.map(item=>{
                   return <HornedBeast name={item.title} src={item.image_url} description= {item.description} />
                })    
            }  
            </>
        )
    }
}

export default Main
