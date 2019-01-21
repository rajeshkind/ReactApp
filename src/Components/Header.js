import React  from 'react';
import '../Styles/App.css';
import {SocialIcon} from 'react-social-icons';
import {Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import chennai from '../Static/Images/chennai.jpg';



function Header() {
  return (
          <div className="header">
          <Row>
          <Col md={4} sm={6} xs={12}>
          <span>Weather Application</span>
          </Col>
          
          </Row>
          
          </div>
          )
}

export default Header;