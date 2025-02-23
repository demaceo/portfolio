import principlesData from '../../utilities/principlesData'
import { nanoid } from 'nanoid'
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from 'react-bootstrap/CarouselItem'
import CarouselCaption from 'react-bootstrap/CarouselCaption'
import './Carousel.css'

export default function CarouselComponent () {
  const principles = principlesData.map(principle => {
    const { id, title, description } = principle
    return (
      <CarouselItem
        style={{}}
        className='principle-item'
        key={nanoid()}
        id={id}
      >
        <CarouselCaption className='principle-text-box' key={id}>
          <h3 className='principle-header'>{title}</h3>
          <p className='principle-desc'>{description}</p>
        </CarouselCaption>
      </CarouselItem>
    )
  })

  return (
    <Carousel
      className="carousel-container"
      interval={7000}
      keyboard
      touch
      pause="hover"
    >
      {principles}
    </Carousel>
  );
}
