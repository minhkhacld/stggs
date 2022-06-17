/* This example requires Tailwind CSS v2.0+ */
import { Contact, Footer } from '../pages';
import Feature from './feature/feature';
import Heroic from './heroic/heroic';
import Pricing from './pricing/pricing';

const Home = () => {

    return (
        <div className="bg-white w-full h-full">
            <Heroic />
            <Feature />
            <Pricing />
            <Contact />
            <Footer />
        </div>
    );

}

export default Home;