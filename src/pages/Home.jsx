import TopBar from "../components/TopBar/TopBar";
import Navbar from "../components/Navbar/Navbar";
 import Hero from "../components/Hero/Hero";
 import Features from "../components/Features/Features";
 import About from "../components/About/About";
import Services from "../components/Services/Services";
// import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
// import Statistics from "../components/Statistics/Statistics";
 import Appointment from "../components/Appointment/Appointment";
import Experts from "../components/Experts/Experts";
 import Testimonials from "../components/Testimonials/Testimonials";
import Price from "../components/Price/Price";
// import Blog from "../components/Blog/Blog";
// import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
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

      <section id="experts">
        <Experts />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="price">
        <Price />
      </section>

      <section id="appointment">
        <Appointment />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default Home;