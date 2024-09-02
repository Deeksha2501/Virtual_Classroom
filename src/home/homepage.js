import React from "react";
import "./homepage.css";
import Navbar from "../navbar/navbar";
import Footer from "../footer/Footer";
import Carousel from "../carousel/carousel";
import AboutUs from "../aboutus";
class Home extends React.Component {
  render() {
    return (
      <div id="page">
        <div id="main">
          <Navbar />
          <Carousel />
          <AboutUs />
          <Footer />
        </div>
      </div>
    );
  }
}
export default Home;
