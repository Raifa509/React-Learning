import React, { Component } from 'react'

export default class Car extends Component {
    constructor(){
        super()
        this.state={
            myCar:"Polo GT"
        }
    }
    //js code 
    getNames=(event)=>{
      //assign value to state
      this.setState({...this.state,myCar:event.target.value})
    }

  render() {
    return (
      <div>
        <h4>Car Component</h4>
        <div className="rounded m-2 p-2">
          <input onChange={(e)=>this.getNames(e)} type="text" className="form-control" placeholder='Input your car name here!!'/>
        </div>
        <h4>My Car : {this.state.myCar}</h4>
      </div>

    )
  }
}
