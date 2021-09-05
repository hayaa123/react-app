import React, { Component } from 'react'
import HornedBeast from './HornedBeast'

export class Main extends Component {
    render() {
        let animals = [
            {name:"Jackson’s Chameleon",src:'http://modernfarmer.com/wp-content/uploads/2014/08/chameleon.jpg',description:"The Jackson’s chameleon, though native to the mountains of East Africa, can now be found all over the islands of Hawaii, probably due to the exotic pet trade. The horns on its head are true live bone horns, just like on an addax or markhor or giant eland, and it uses them for the same purpose: thrusting at competing males during breeding season."},
            {name:"Bharal",src:"http://modernfarmer.com/wp-content/uploads/2014/08/bharal.jpg",description:"According to reputable sources, the bharal is also known as the Himalayan blue sheep due to a bluish tint to its fur. In the interest of journalism, we spent quite awhile looking at pictures of bharals online and are sad to say that this sheep is not really colored blue. But! It does have very good horns. Sheep horns tend to be wider and smoother than narrow, knobbly goat horns, and the bharal is in possession of some excellently wide and smooth horns."},
            {name:"Mouflon",src:"http://modernfarmer.com/wp-content/uploads/2014/08/28476658_9c97f35096_o.jpg",description:"The mouflon is thought to be the ancestor of our modern, very familiar domestic sheep. Sometime during the domestication process the mouflon lost its absolutely stupendous horns, great tough curving loops that make you wonder why “sheep” could ever have meek connotations."},
            {name:"Scimitar-Horned Oryx",src:"http://modernfarmer.com/wp-content/uploads/2014/08/scimitaroryx.jpg",description:"The scimitar-horned oryx is the buffalo of north Africa: formerly widespread, roaming the savannah in huge herds, it was hunted (for its horns, rather than its meat, though it was eaten), and it disappeared. More interestingly: the oryx is extinct in the wild, only existing now in zoos. It’s not a huge animal, but the horns can reach four feet long."}
        ]
        let strtch = [{
            "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
            "title": "UniWhal",
            "description": "A unicorn and a narwhal nuzzling their horns",
            "keyword": "narwhal",
            "horns": 1
          },
        
          {
            "image_url": "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
            "title": "Rhino Family",
            "description": "Mother (or father) rhino with two babies",
            "keyword": "rhino",
            "horns": 2
          },
          
          {
            "image_url": "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
            "title": "Unicorn Head",
            "description": "Someone wearing a creepy unicorn head mask",
            "keyword": "unicorn", 
            "horns": 1
        }]
        return (
            <>
            {
               animals.map(item=>{
                   return <HornedBeast name={item.name} src={item.src} description= {item.description}/>
                })    
            }    
            {
               strtch.map(item=>{
                   return <HornedBeast name={item.title} src={item.image_url} description= {item.description}/>
                })    
            }  
            </>
        )
    }
}

export default Main
