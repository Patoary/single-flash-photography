import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Testimonial.css';

const Testimonials = () => {
    return (
        <div className='p-5'>
            <Carousel className='caro'>
                <Carousel.Item>
                    <h3>Tanake</h3>
                    <p>Morbi eu neque nisl. Suspendisse dui risus, pretium eget enim nec, accumsan congue ligula. Ut fermentum neque ut mattis fringilla. Nam molestie tincidunt mi nec vulputate. Sed id faucibus massa. Maecenas ac lorem sem. Cras id elementum quam.</p>
                    <button></button>
                </Carousel.Item>
                <Carousel.Item>
                    <h3>Tamaki</h3>
                    <p>Aenean scelerisque tristique ligula, ac tristique lectus vulputate nec. Ut eu dignissim elit. Donec a mauris sem. Nam nisi eros, fermentum quis dui eget, aliquet sodales velit. Sed porta sit amet sem eu malesuada.</p>
                    </Carousel.Item>
                <Carousel.Item>
                    <h3>Takahashi</h3>
                    <p>Cras a leo erat. Donec laoreet euismod magna sed egestas. Phasellus commodo bibendum ipsum, vitae viverra dui varius in. Vivamus pulvinar sit amet neque eget porta. Aliquam erat volutpat. Quisque leo magna, sodales id efficitur id, tincidunt eu sapien.</p>
                </Carousel.Item>
            </Carousel>


        </div>
    );
};

export default Testimonials;