import React, { Component } from 'react';
import './Auction.css';
import Auctionlist from './Auctionlist.js';
import 'tachyons';



class Auction extends Component{
        
    constructor() {
        super();
        this.state = {
            name : "Welcome to auction world"
        }
    }

    namechange() {
        this.setState({
            name: "Thankyou for purchasing welcome again"
        })
    }
        render() {
            const auctionlistarray = [
                {
                    id: 0,
                    name:'vijay' ,
                    work:'web developer'
                },
                {
                    id: 1,
                    name:'ashok' ,
                    work:'web developer'
                },
                {
                    id: 2,
                    name:'raju' ,
                    work:'web developer'
                },
                {
                    id: 3,
                    name:'ravi' ,
                    work:'web developer'
                },
                {
                    id: 4,
                    name:'vinay' ,
                    work:'web developer'
                },
                {
                    id: 5,
                    name:'ambika' ,
                    work:'web developer'
                }
        
            ]
            const auctionlisto = auctionlistarray.map((auctioncard, i) => {
                return <Auctionlist key={i} id={auctionlistarray[i].name} name={auctionlistarray[i].name} work={auctionlistarray[i].work} />
            })
            return (
                  
                <div className="mainpage">
                <h1>{this.state.name}</h1>
                    {auctionlisto}
                    
                <button onClick={() => {this.namechange() }}>Buy</button>
                
                </div> 
            )
    }
}
   
   




export default Auction;