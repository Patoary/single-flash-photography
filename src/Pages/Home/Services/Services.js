import React from 'react';
import Service from '../Service/Service';
import service1 from '../../../images/wedding/3.jpg';
import service2 from '../../../images/short-film.jpg';
import service3 from '../../../images//travel-guide.jpg';


const services = [
    {
        id: 1,
        name: 'Wedding',
        detail: 'Shooting time 12 hours Professional photo processing',
        price: '$1200',
        img: service1
    },
    {
        id: 2,
        name: 'Short Film',
        detail: 'Shooting time 12 hours Film up to 15 minuites',
        price: '$2000',
        img: service2
    },
    {
        id: 3,
        name: 'As a travel guide',
        detail: 'Up ot One days or more depends on contact',
        price: '$1000-5000',
        img: service3
    },

]
const Services = () => {
    return (
        <div className='container mb-5'>
            <h3 className='text-center p-2 mt-5 text-white fs-1'>My Services</h3>
            <div className="row">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;