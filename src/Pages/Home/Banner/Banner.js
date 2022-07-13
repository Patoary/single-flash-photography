import React from 'react';
import ele from '../../../images/banner/ele.jpg';
import './Banner.css';

const Banner = () => {
  return (
    <div className='banner container-fluid'>
      <img className='h-100 w-100' src={ele} alt="" />
      <div className='centered'>Single Flash Photography</div>
    </div>
  );
};

export default Banner;