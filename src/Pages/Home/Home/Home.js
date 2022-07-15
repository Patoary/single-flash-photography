import React from 'react';
import Film from '../../Film/Film';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Film></Film>            
        </div>
    );
};

export default Home;