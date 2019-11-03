import React from 'react';
import './App.css';
import Users from"./Users"

class APP extends React.Component {
  constructor(props){
    super(props);
    this.updateinputvalue=this.updateinputvalue.bind(this);
    this.handlesubmit=this.handlesubmit.bind(this);
    this.state = {
      inputvalue:"",
      value:""
    }
  }
  updateinputvalue(event){
this.setState({
  inputvalue:event.target.value
})
  }
  handlesubmit(event){
    event.preventDefault();
    this.setState(()=>{
      return{
        value:parseInt(this.state.inputvalue)
      }
    })

  }
  render(){
    let userArray=[];
    for( let i=0 ;i<this.state.value;i++){
      userArray.push(
        <Users key={i}></Users>
      )
    }
    return(
      <div>
        <div>
          <input value={this.state.inputvalue} onChange={this.updateinputvalue}/>
          <button onClick={this.handlesubmit}>submit</button>
        </div>
        <div>
          <thead>
            <th>Avatour</th>
            <th>Username</th>
            <th>Password</th>


          </thead>
          {userArray}
        </div>
      </div>
    )
  }
}
export default APP