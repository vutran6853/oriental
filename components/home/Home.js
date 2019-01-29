import React, { Component } from 'react';
import NavBar from '../navbar/Navbar';
import AboutUs from '../about/About';
import Service from '../service/Service';
import Contact from '../contact/contact';
import Products from '../products/products';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { 

     }
  }

  render() {
    return (
      <div>
        <NavBar/>
          <div id='aboutUs'>
            <AboutUs/>
          </div>
          <div id='service'>
            <Service/>
          </div>
    
            <Products/>
         
          <div id='contact'>
            <Contact/>
          </div>
          <footer>
            © 2018 Oriental Nail Designed by Vu Tran. All Rights Reserved.
          </footer>
      </div>
    );
  }
}

export default Home