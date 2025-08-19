import About from "./About";
import Banner from "./Banner";
import Buy from "./Buy";
import FaqGrid from "./FaqGrid";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import TimelineWithCards from "./TimelineWithCards";
import Tokenomics from "./Tokenomics";
import UseCase from "./UseCase";
import Why from "./Why";

const Home = () => {
  return (
    <div className="font-montserrat">
      <Navbar />
      <Hero />
      <About />
      <Why />
      <UseCase />
      <Tokenomics />
      <TimelineWithCards />
      <Buy/>
      <FaqGrid/>
      <Banner/>
      <Footer/>
    </div>
  );
};

export default Home;
