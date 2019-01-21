import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkbox from '../Components/Checkbox.js';
import Liveweather from '../Components/Liveweather.js';

const listofcity = [
    'Bangalore',
    'Chennai',
    'Delhi',
    'London',
    'Hyderabad'
  ];


class Multiplereport extends Component {
  state = {
   
  }

  toggleCheckbox = (label) => {
    
  }

  createcheckbox = (label) => (
    <Checkbox
    label={label}   
    handleChange={this.toggleCheckbox}
    key={label}
/>)



creategroup = () => (
    listofcity.map(this.createcheckbox)
)


  render() {
    return (
        <div  className="maincontent">
        <h4>Multiple Weather </h4>
        {this.creategroup()}

        <Liveweather
              temperature={this.state.temperature}
              city={this.state.city}
              humidity={this.state.humidity}
              country={this.state.country}
              error={this.state.error}
              />
        </div>
    )}
    
}

export default Multiplereport;