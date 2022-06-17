/* This example requires Tailwind CSS v2.0+ */
import { Contact, Footer } from '../pages';
import Feature from './feature/feature';
import Heroic from './heroic/heroic';
import Pricing from './pricing/pricing';
import './home.css';

const Home = () => {

    window.onscroll = () => {
        const feature = document.getElementById('feature');
        const pricing = document.getElementById('pricing');
        const contact = document.getElementById('contact');
        const scrollY = window.scrollY;
        const features = document.getElementsByClassName("custom_feature_class");
        const pricings = document.getElementsByClassName("custom_pricing_class");
        const contacts = document.getElementsByClassName("custom_contact_class");
        // console.log(window.scrollY,heroic.offsetHeight, feature.offsetTop, feature.offsetHeight,);
        if (scrollY < feature.offsetTop) {         
            [...features].forEach(d => {
                d.classList.remove("feature_scroll_animated");
            });
        }
        else if (scrollY >= feature.offsetTop - 500 && scrollY < pricing.offsetTop - 100) {          
            [...features].forEach(d => {
                d.classList.add("feature_scroll_animated");
            });
            [...pricings].forEach(d => {
                d.classList.remove("pricing_scroll_animated");
            });

        } else if (scrollY >= pricing.offsetTop - 300 && scrollY < contact.offsetTop - 100) {
            [...features].forEach(d => {
                d.classList.remove("feature_scroll_animated");
            });
            [...pricings].forEach(d => {
                d.classList.add("pricing_scroll_animated");
            });
            [...contacts].forEach(d => {
                d.classList.remove("contact_scroll_animated");
            });

        } else if (scrollY >= contact.offsetTop - 300) {
            [...pricings].forEach(d => {
                d.classList.remove("pricing_scroll_animated");
            });
            [...contacts].forEach(d => {
                d.classList.add("contact_scroll_animated");
            });
        };

        // if (scrollY >= feature.offsetTop - 100 && scrollY < pricing.offsetTop) {
        //     [...features].forEach(d => {
        //         d.classList.add("feature_scroll_animated");
        //     });
        //     [...pricings].forEach(d => {
        //         d.classList.remove("pricing_scroll_animated");
        //     });

        // } else if (scrollY >= pricing.offsetTop - 100 && scrollY < contact.offsetTop) {
        //     [...features].forEach(d => {
        //         d.classList.remove("feature_scroll_animated");
        //     });
        //     [...pricings].forEach(d => {
        //         d.classList.add("pricing_scroll_animated");
        //     });
        //     [...contacts].forEach(d => {
        //         d.classList.remove("contact_scroll_animated");
        //     });

        // } else if (scrollY >= contact.offsetTop - 100) {
        //     [...pricings].forEach(d => {
        //         d.classList.remove("pricing_scroll_animated");
        //     });
        //     [...contacts].forEach(d => {
        //         d.classList.add("contact_scroll_animated");
        //     });
        // };

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