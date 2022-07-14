import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    return (
        <div className='mt-5'>
            <h2>Welcome to detail:{serviceId}</h2>
            <div className='text-center'>
                <Link to='/checkout'>
                <button className='submit-btn p-2 rounded'>Checkout</button>
                </Link>
            </div>
            <div className='fixed-bottom'>
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default ServiceDetail;