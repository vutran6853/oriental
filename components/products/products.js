import React, { Component } from 'react';
import css from './products.scss';
import colorclub from '../../image/colorclub.png';
import gelish from '../../image/gelish.jpg';
import opi from '../../image/opi.png';
import sns from '../../image/sns.png';

let products = (props) => {
  return(
    <div className='productsBox'>
      <p>Products we use </p>
      <p>What make for better manicures and pedicures are our variety line of products. Give your look a little polish!</p>
      <img src={ colorclub } alt='colorclub' ></img>
      <a href='https://amzn.to/2LE2Wjh'>
        <img src={ gelish } alt='gelish' ></img>
      </a>
      <a href='https://amzn.to/2VgKZeS'>
        <img src={ opi } alt='opi' ></img>
      </a> 
      <img src={ sns } alt='sns' ></img>
    </div>
  )
}

export default products;