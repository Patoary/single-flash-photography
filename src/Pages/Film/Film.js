import React from 'react';
import film from '../../images/mountain.jpg';

const Film = () => {
    return (
        <div className='container'>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className="clo-lg-6 col-md-6 col-sm-12">
                    <img style={{height:'500px'}} className='w-100 pb-5' src={film} alt="" />
                </div>
                <div className="clo-lg-6 col-md-6 col-sm-12 w-50 text-center">
                    <h3 style={{color:'lightgreen'}}>Wild Films</h3>
                    <p className='text-white'>By creating visually engaging narratives that stay with viewers long after the credits roll, we believe that documentaries are one of the best ways to share stories. Our passion is telling incredible human stories and those of little known animal species, especially those which we feel have yet to be told or have not had the attention they deserve.</p>
                </div>
            </div>
        </div>
    );
};

export default Film;