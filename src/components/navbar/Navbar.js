import React, { Component } from 'react';
import css from './navbar.scss';
import logo from '../../image/orientalNailLogo2.png';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
let  NavBar = (props) => {

  return (
    <div className='navBarBox'>

      <p><i class="fas fa-phone"><strong>434-421-2378</strong></i>
        <span className='timeBox'>Mon-Thu 9am - 7pm | Fri-Sat 9am - 8pm | Sunday	closed</span>
      </p>
      <div className='navSeaction'>
        <img src={ logo } alt='logo' className='logoImage'></img>
        <a href='#aboutUs'>
          <Button>About Us</Button>
        </a>
        <a href='#service'>
          <Button>Service</Button>
        </a>
        <a href='#photoGallery'>
          <Button>Photo Gallery </Button>
        </a>
        <a href='#contact'>
          <Button>Contact</Button>
        </a>
      </div>
    </div>
  );
}

export default NavBar;