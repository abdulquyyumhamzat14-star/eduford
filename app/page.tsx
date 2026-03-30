import Image from "next/image";
import Banner from "./Layout/Page/Banner";
import Program from "./Layout/Page/Program";
import About from "./Layout/Page/About";
import Gallery from "./Layout/Page/Gallery";
import Testimonial from "./Layout/Page/Testimonial";
import Contact from "./Layout/Page/Contact";
import Footer from "./Components/Footer";




export default function Home() {
  return (
    <div>
      <Banner />
      <Program/>
      <About/>
      <Gallery/>
      <Testimonial/>
      <Contact/>
     
      <Footer/>
    </div>
  );
}
