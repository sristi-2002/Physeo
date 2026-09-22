import TopBar from "../components/Topbar/Topbar";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Conditions from "../components/Conditions/Conditions";
import Gallery from "../components/Gallery/Gallery";
import Techniques from "../components/Techniques/Techniques";
import WhyChoose from "../components/WhyChoose/WhyChoose";
// import Promise from "../components/Promise/Promise";
import VisionMission from "../components/VisionMission/VisionMission";
import Appointment from "../components/Appointment/Appointment";
//import Experts from "../components/Experts/Experts";
import Testimonials from "../components/Testimonials/Testimonials";
//import Price from "../components/Price/Price";
// import SeoBand from "../components/SeoBand/SeoBand";
//import LocalSeo from "../components/LocalSeo/LocalSeo";
import Footer from "../components/Footer/Footer";
import FloatingContact from "../components/FloatingContact/FloatingContact";

function Home() {
  return (
    <>
      <TopBar />

      <div style={{ position: "relative" }}>
        <Navbar />

        <section id="hero">
          <Hero />
        </section>
      </div>

      <section id="about">
        <About />
      </section>

      {/* <section id="experts">
        <Experts />
      </section> */}

      <section id="services">
        <Services />
      </section>

      <section id="conditions">
        <Conditions />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="techniques">
        <Techniques />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="why-choose">
        <WhyChoose />
      </section>

      {/* <section id="promise">
        <Promise />
      </section> */}

      <section id="vision-mission">
        <VisionMission />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      {/* <section id="price">
        <Price />
      </section> */}

      <section id="appointment">
        <Appointment />
      </section>

      {/* <section id="local-seo">
        <LocalSeo />
      </section> */}

      {/* <section id="seo">
        <SeoBand />
      </section> */}

      <section id="footer">
        <Footer />
      </section>

      <FloatingContact />
    </>
  );
}

export default Home;
