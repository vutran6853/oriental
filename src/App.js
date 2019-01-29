import React, { Component } from 'react';
import NavBar from './components/navbar/Navbar';
import AboutUs from './components/about/About';
import Service from './components/service/Service';
import Contact from './components/contact/contact';
import Products from './components/products/products';
import PhotoGallery from './components/photoGallery/photoGallery';
import css from './app.css';
// import { BrowserRouter } from 'react-router-dom'
// import route from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar/>
          <div id='aboutUs'>
            <AboutUs/>
          </div>
          <div id='service'>
            <Service/>
          </div>
            <Products/>
          <div id='photoGallery'>
            <PhotoGallery/>
          </div>
          <div id='contact'>
            <Contact/>
          </div>
          <footer>
            © 2019 Oriental Nail Designed by <a href='https://vuthecodeguy.com/'>Vu Tran</a>. All Rights Reserved.
          </footer>
        </div>
    );
  }
}

export default App;
