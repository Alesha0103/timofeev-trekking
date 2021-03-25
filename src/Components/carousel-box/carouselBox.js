import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Picture1 from '../../assets/home/1.jpg';
import Picture2 from '../../assets/home/2.jpg';
import Picture3 from '../../assets/home/3.jpg';
import Picture4 from '../../assets/home/4.JPG';
import Picture5 from '../../assets/home/5.JPG';
import Picture6 from '../../assets/home/6.JPG';


export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel style={{ maxWidth: '2960px', margin: 'auto' }}>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={Picture1}
                        alt='carousel'
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={Picture2}
                        alt='carousel'
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={Picture4}
                        alt='carousel'
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={Picture3}
                        alt='carousel'
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={Picture5}
                        alt='carousel'
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={Picture6}
                        alt='carousel'
                    />
                </Carousel.Item>
            </Carousel>
        );
    };
};