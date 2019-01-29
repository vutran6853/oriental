import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl,
        Container,  CarouselIndicators, CarouselCaption } from 'reactstrap';
import css from './about.scss';
import  Pedicure1  from '../../image/pedicure1.jpg';
import Elmanicure from '../../image/gelmanicure.jpg';
import Manicure1 from '../../image/manicure1.jpg';


class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0, 
      items: [
        {
          src:  Pedicure1 ,
          altText: 'Pedicure1',
          caption: 'Your One-Stop Beauty Shop We provide nail, spa pedicure, facial and facial massage, waxing, and more...'
        },
        {
          src: Elmanicure,
          altText: 'Elmanicure',
          caption: 'Welcome to Oriental Nails & Spa The best Nails Spa in Danville VA...'
        },
        {
          src: Manicure1,
          altText: 'Manicure1',
          caption: 'Visit Us for all your beauty needs Best Manicure and Pedicure in the Danville area Oriental Nails, your nail salon secret'
        }
      ]
     }
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    let { activeIndex, items } = this.state;

    let slides = items.map((item) => {
      return (
        <CarouselItem onExiting={ this.onExiting }
                      onExited={ this.onExited }
                      key={ item.src }
        >
          <img src={ item.src } alt={ item.altText }  id='carouseItemImage'/>
          <CarouselCaption  captionText={ item.caption } captionHeader={ item.caption } id='carouseItemCaption' />
        </CarouselItem>
      )
    });
    
    return (
      <section className='aboutUsSection'>
        <Carousel activeIndex={ activeIndex }
                  next={ this.next }
                  previous={ this.previous }
        >
          <CarouselIndicators  items={ items } activeIndex={ activeIndex } onClickHandler={ this.goToIndex } />
            { slides }
          <CarouselControl direction='prev'  directionText='Previous' onClickHandler={ this.previous } />
          <CarouselControl direction='next' directionText='Next' onClickHandler={ this.next } />
        </Carousel>

        <Container fluid className='aboutUsBox'>
          <h3>About us</h3>
          <p>
              Oriental Nails & Spa offers a wide variety of nail and spa services to meet your needs.
              <br/>We offer the following client services: Eyebrows Arching and Tinting | Eyelash Extensions | Gel Manicure/Shellac 
              Acrylic/Solar Nails Enhancement | Dip powder
          </p>
        </Container>
      </section>
    )
  }
}

export default About;