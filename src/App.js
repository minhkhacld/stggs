import { Navigate, Route, Routes } from 'react-router-dom';
import routes from './routes';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import { useLocation } from 'react-router-dom';
import ScrollToTop from './components/scroll_top/scroll_to_top';

const App = () => {

  const location = useLocation().pathname;
  const path = location.split("/");

  window.onscroll = () => {
    const heroic = document.getElementById('heroic');
    const feature = document.getElementById('feature');
    const pricing = document.getElementById('pricing');
    const contact = document.getElementById('contact');
    const scrollY = window.scrollY;
    const features = document.getElementsByClassName("custom_feature_class");
    const pricings = document.getElementsByClassName("custom_pricing_class");
    const contacts = document.getElementsByClassName("custom_contact_class");
    const scrollToTop = document.getElementById("scroll-to-top");
    console.log(window.scrollY, heroic.offsetHeight, feature.offsetTop, feature.offsetHeight, feature.offsetHeight,);
    if (scrollY > 500) {
      scrollToTop.style.display = "flex";
    } else {
      scrollToTop.style.display = "none";
    };

    if (scrollY < heroic.offsetHeight) {
      [...features].forEach(d => {
        d.classList.remove("feature_scroll_animated");
      });

    }
    else if (scrollY + heroic.offsetHeight >= feature.offsetTop - 50 && scrollY < pricing.offsetTop - 100) {
      [...features].forEach(d => {
        d.classList.add("feature_scroll_animated");
      });
      [...pricings].forEach(d => {
        d.classList.remove("pricing_scroll_animated");
      });

    } else if (scrollY + feature.offsetHeight >= pricing.offsetTop - 50 && scrollY < contact.offsetTop - 100) {
      [...features].forEach(d => {
        d.classList.remove("feature_scroll_animated");
      });
      [...pricings].forEach(d => {
        d.classList.add("pricing_scroll_animated");
      });
      [...contacts].forEach(d => {
        d.classList.remove("contact_scroll_animated");
      });

    } else if (scrollY >= pricing.offsetHeight - 200) {
      [...pricings].forEach(d => {
        d.classList.remove("pricing_scroll_animated");
      });
      [...contacts].forEach(d => {
        d.classList.add("contact_scroll_animated");
      });
    };

    // else if (scrollY >= feature.offsetTop - 1000 && scrollY < pricing.offsetTop - 100) {
    //   // alert(true);
    //   [...features].forEach(d => {
    //     d.classList.add("feature_scroll_animated");
    //   });
    //   [...pricings].forEach(d => {
    //     d.classList.remove("pricing_scroll_animated");
    //   });

    // } else if (scrollY >= pricing.offsetTop - 500 && scrollY < contact.offsetTop - 100) {
    //   [...features].forEach(d => {
    //     d.classList.remove("feature_scroll_animated");
    //   });
    //   [...pricings].forEach(d => {
    //     d.classList.add("pricing_scroll_animated");
    //   });
    //   [...contacts].forEach(d => {
    //     d.classList.remove("contact_scroll_animated");
    //   });

    // } else if (scrollY >= contact.offsetTop - 500) {
    //   [...pricings].forEach(d => {
    //     d.classList.remove("pricing_scroll_animated");
    //   });
    //   [...contacts].forEach(d => {
    //     d.classList.add("contact_scroll_animated");
    //   });
    // };

  };

  return (
    <>
      {/* // <div className="h-screen w-full bg-white-100 
    // overflow-y-scroll"> */}
      {
        path[path.length - 1] !== "" && <Navbar />
      }


      <Routes>
        {
          routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))
        }
        <Route path='*' element={<Navigate path='/' replace />} />
      </Routes>

      <Footer />
      <ScrollToTop />
      {/* </div> */}
    </>

  );

};

export default App;