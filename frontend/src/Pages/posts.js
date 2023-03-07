import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from '../Components/Navbar';
   

export default function Posts() {
    
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Shreyas'
    };
   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({name: event.target.value});
  }
  
  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }
  
  render() {
    return (
        
      <div>
        <Navbar/>
        <div align="center">
          
        <h1>React Textbox</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
              type="text"
              value={this.state.name} 
              onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        
        </div>
      </div>
    );
  }
}
render(<App />, document.getElementById('root'));

 }


// export default function Posts() {
//     return (<h1>Posts</h1>
    
//     )
    
// }
