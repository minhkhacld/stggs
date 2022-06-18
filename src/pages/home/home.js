/* This example requires Tailwind CSS v2.0+ */
import { Contact, } from '../pages';
import Feature from './feature/feature';
import Heroic from './heroic/heroic';
import Pricing from './pricing/pricing';
import './home.css';
import React from 'react';

const Home = () => {



    return (
        <div className="bg-white w-full h-full" id="home_container">
            <Heroic />
            <Feature />
            <Pricing />
            <Contact />
        </div>
    );

}

export default Home;