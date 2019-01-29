import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, 
        CarouselIndicators,CarouselCaption } from 'reactstrap';
import IMG_0281 from '../../image/testamentaryImage/IMG_0281.jpg';
import IMG_0522 from '../../image/testamentaryImage/IMG_0522.jpg';
import IMG_0697 from '../../image/testamentaryImage/IMG_0697.jpg';
import IMG_0911 from '../../image/testamentaryImage/IMG_0911.jpg';
import IMG_1293 from '../../image/testamentaryImage/IMG_1293.jpg';
import IMG_1296 from '../../image/testamentaryImage/IMG_1296.jpg';
import IMG_1297 from '../../image/testamentaryImage/IMG_1297.jpg';
import IMG_1298 from '../../image/testamentaryImage/IMG_1298.jpg';
import IMG_1308 from '../../image/testamentaryImage/IMG_1308.jpg';
import IMG_1390 from '../../image/testamentaryImage/IMG_1390.jpg';
import IMG_1441 from '../../image/testamentaryImage/IMG_1441.jpg';
import IMG_1463 from '../../image/testamentaryImage/IMG_1463.jpg';
import IMG_1464 from '../../image/testamentaryImage/IMG_1464.jpg';
import IMG_1467 from '../../image/testamentaryImage/IMG_1467.jpg';
import IMG_1468 from '../../image/testamentaryImage/IMG_1468.jpg';

import css from './photoGallery.scss';

class Example extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      activeIndex: 0,
      items: [
        {
          src: IMG_0281,
          altText: 'IMG_0281',
        },
        {
          src: IMG_0522,
          altText: 'IMG_0522',
        },
        {
          src: IMG_0697,
          altText: 'IMG_0697',
        },
        {
          src: IMG_0911,
          altText: 'IMG_0911',
        },
        {
          src: IMG_0697,
          altText: 'IMG_0697',
        },
        {
          src: IMG_1296,
          altText: 'IMG_1296',
        },
        {
          src: IMG_1293,
          altText: 'IMG_1296',
        },
        {
          src: IMG_1297,
          altText: 'IMG_1297',
        },
        {
          src: IMG_1298,
          altText: 'IMG_1298',
        },
        {
          src: IMG_1308,
          altText: 'IMG_1308',
        },
        {
          src: IMG_1390,
          altText: 'IMG_1390',
        },
        {
          src: IMG_1441,
          altText: 'IMG_1441',
        },
        {
          src: IMG_1463,
          altText: 'IMG_1463',
        },
        {
          src: IMG_1464,
          altText: 'IMG_1464',
        },
        {
          src: IMG_1467,
          altText: 'IMG_1467',
        },
        {
          src: IMG_1468,
          altText: 'IMG_1468',
        },
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
    const { activeIndex, items } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={ this.onExiting }
          onExited={ this.onExited }
          key={ item.src }
        >
          <img src={ item.src } alt={ item.altText } id='carouseItemImage' />
        </CarouselItem>
      );
    });

    return (
      <section className='photoGallerySection'>
        <h3>Photo Gallery</h3>
        <Carousel
          activeIndex={ activeIndex }
          next={ this.next }
          previous={ this.previous }
        >
          <CarouselIndicators items={ items } activeIndex={ activeIndex } onClickHandler={ this.goToIndex } />
            { slides }
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={ this.previous } />
          <CarouselControl direction="next" directionText="Next" onClickHandler={ this.next } />
        </Carousel>
      </section>
    );
  }
}


export default Example;