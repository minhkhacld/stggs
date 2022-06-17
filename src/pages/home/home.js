/* This example requires Tailwind CSS v2.0+ */
import { Contact, Footer } from '../pages';
import Feature from './feature/feature';
import Heroic from './heroic/heroic';
import Pricing from './pricing/pricing';
import './home.css';

const Home = () => {

    window.onscroll = () => {

        // const container = document.getElementById('home_container');
        // const heroic = document.getElementById('heroic');

        const feature = document.getElementById('feature');
        const pricing = document.getElementById('pricing');
        const contact = document.getElementById('contact');
        const scrollY = window.scrollY;
        const features = document.getElementsByClassName("custom_feature_class");
        const pricings = document.getElementsByClassName("custom_pricing_class");
        const contacts = document.getElementsByClassName("custom_contact_class");
        // console.log('console', document.documentElement.scrollTop || document.body.scrollTop);
        // console.log(window.scrollY, feature.offsetTop, pricing.offsetTop, contact.offsetTop);

        if (scrollY >= feature.offsetTop + 20 && scrollY < pricing.offsetTop) {
            [...features].forEach(d => {
                d.classList.add("feature_scroll_animated");
            });
            [...pricings].forEach(d => {
                d.classList.remove("pricing_scroll_animated");
            });

        } else if (scrollY >= pricing.offsetTop + 20 && scrollY < contact.offsetTop) {
            [...features].forEach(d => {
                d.classList.remove("feature_scroll_animated");
            });
            [...pricings].forEach(d => {
                d.classList.add("pricing_scroll_animated");
            });
            [...contacts].forEach(d => {
                d.classList.remove("contact_scroll_animated");
            });

        } else if (scrollY >= contact.offsetTop + 20) {
            [...pricings].forEach(d => {
                d.classList.remove("pricing_scroll_animated");
            });
            [...contacts].forEach(d => {
                d.classList.add("contact_scroll_animated");
            });
        };
    };

    return (
        <div className="bg-white w-full h-full" id="home_container">
            <Heroic />
            <Feature />
            <Pricing />
            <Contact />
            <Footer />
        </div>
    );

}

export default Home;