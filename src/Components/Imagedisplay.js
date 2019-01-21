import React, {Component}  from 'react';
import '../Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Imagedisplay extends Component {

    constructor(props){
        super(props);
    }
    render() {
    if(this.props.city == "Chennai"){
     var icon = require('../Static/Images/chennai.jpg')
    }
    else if(this.props.city == "Bangalore"){
        var icon = require('../Static/Images/bangalore.jpg')
    }
    else
    {
       var icon =  require('../Static/Images/other.jpg')
    }
  return (
          <div>
             {this.props.city && <img src={icon} alt="HTML5 Icon" style={{width:"62px",height:"42px", float:"right", overflow:"auto"}}/> }
              </div>
          )
}
}
export default Imagedisplay;