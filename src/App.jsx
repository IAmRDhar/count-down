import React, {Component} from 'react';
import './css/App.css';
import Clock from './Clock';
import {Form, FormControl, Button} from 'react-bootstrap';
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      deadline: 'December 25, 2017',
      newDeadLine:''
    }
    this.changeDeadline = this.changeDeadline.bind(this);

  }

  changeDeadline(){
    console.log('state',this.state);
    this.setState({deadline:this.state.newDeadLine})
  }

  render(){
    return (
      <div className='App'>
        <div className='App-title'>Countdown to {this.state.deadline}</div>
          <Clock
            deadline={this.state.deadline}
          />
        <Form inline={true}>
          <FormControl className='Deadline-input' onChange={event => this.setState({newDeadLine:event.target.value})} placeholder='Enter Date Here eg. December 25, 2017'/>
          <Button onClick={() => this.changeDeadline()}>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default App;
