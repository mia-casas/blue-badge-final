import React from 'react';
import { UncontrolledCarousel, Container, Row } from 'reactstrap';

const items = [
    {
        src: 'https://picsum.photos/200',
        key: '1'
  
      },
      {
        src: 'https://picsum.photos/200',
        key: '2'
      },
      {
        src: 'https://picsum.photos/200',
        key: '3'
      }
];

const Carousel = () => {
    return (
   <Container>
  
        <UncontrolledCarousel items={items} />
    
  </Container>
    );
};

export default Carousel;

