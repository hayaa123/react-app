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
                
            this.props.submit ?
            this.props.data_filter(this.props.aniamArr,this.props.selected_horn_number).map(item=>{
                return <HornedBeast name={item.title} src={item.image_url} description= {item.description} clickOn={this.props.clickOn}/>
             })
             :
            this.props.aniamArr.map(item=>{
                   return <HornedBeast name={item.title} src={item.image_url} description= {item.description} clickOn={this.props.clickOn}/>
                })    
            }  
                
            </>
        )
    }
}

export default Main
