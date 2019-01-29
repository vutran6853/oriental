import React, { Component } from 'react';
import css from './services.scss';
// import {  , Row, Col } from 'reactstrap';
import { Container, Card, CardImg, CardText, CardBody,
         CardTitle, CardSubtitle, Button } from 'reactstrap';

class Service extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      services: [
        {
          name: 'Eyebrows arching and Tinting',
          faIcon: 'fa fa-heart',
          detail: 'A form of temporary tattoos to form arches for your eyebrows. This service last about 2 weeks or more depending on the condition of the skin (less oily skin stays longer).'
        },
        {
          name: 'Eyelash Extensions',
          faIcon: 'fa fa-tags',
          detail: 'Eyelash Extensions enhances the length, thickness, and fullness to natural eyelashes. The extensions may consist of silk, mink, or synthetic hair. Methods of applying the extensions include full strips, clusters, and individual, one-by-one extensions.'
        },
        {
          name: 'Dip Powder',
          faIcon: 'fa fa-heart',
          detail: 'You love it, we are obsessed. Introducing Powder Perfection - acrylic nails reinvented with a faster, easier and odor free formula with gel like shine. Now available in 100 iconic OPI shades.'
        },
        {
          name: 'Gel Manicure/Shellac',
          faIcon: 'fa fa-gem',
          detail: 'A Gel Manicure, a coat of colored "gel" (that looks like nail polish) is applied to the nails. After each coat, you put your hands under a UV light to cure (dry) the gel.Shellac is a technology invented by Creative Nail Design (CND) and is similar to a gel manicure in that it also uses UV light to cure each coat. Shellac is frequently described as a hybrid of the popular gel manicure.'
        },
        {
          name: 'Acrylic/Solar nails enhancement',
          faIcon: 'fa fa-anchor',
          detail: 'Acrylic nails are known to be the most commonly used artificial nails since they are quiet durable and are glued like natural nails. Solar Nails are basically a brand of acrylic manufactured by Creative Nail Design (CND). It is one of the original brands, and true acrylic nothing more. They have the appearance of a French manicure with a pink nail bed and white tips.'
        },
      ]
     }
  }

  render() {
    let { services } = this.state;

    let displayServices = services.map((value, index) => {
      return(
        <div>
        <Card id='servicesCard'>
          <CardBody>
            <span className={ value.faIcon } aria-hidden='true'></span>
            <CardTitle>{ value.name }</CardTitle>
            <CardText>{ value.detail }</CardText>
          </CardBody>
        </Card>
      </div>
      )
    });

    return(
      <div className='servicesBox'>
        <section className='servicesSection'>
        <p><strong>Our Services</strong><br/> Below are the list of services and specials we offer</p>
         { displayServices }
      
        </section>
       
      </div>
      
    )
  }
}

export default Service;