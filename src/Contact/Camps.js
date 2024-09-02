import React from "react";
import PropTypes from "prop-types";
import campimg from "./camps.png";
import "./contact.css";
import Footer from "../footer/Footer";
import Header from "./campsHeader";
function Camps(props) {
  return (
    <>
      <Header />
      <div className="top-img">
        <img src={campimg} alg="Image of students oragninsing camp" />
      </div>
      <div className="camp-detail">
        <p className="ques">
          The support we'll provide to initiate the collection
        </p>
        <p className="detail">
          First please talk to us about what exactly do you want to do including
          the basic information, what, where, how, when, why. Once we have the
          basic information we can guide you on what steps need to be taken
          before initiating a collection drive. If need be we will also provide
          you leaflets for local publicity and manpower. Organizing a collection
          drive may sound like a simple enough thing, but having done it
          consistently for the last many years, trust us that we know where the
          usual bottlenecks come up. We want your collection drive to be a big
          success, it not only helps us, it encourages more people to take up
          this kind of initiative.
        </p>
        <p className="ques">List of material that you'll accept </p>

        <p className="detail">
          Clothing is one of the three basic needs (out of food, shelter and
          clothing). It not only symbolizes a person’s dignity but also offers a
          protection against the elements. While there are more than 100 issues
          being talked about in the development sector, right from domestic
          violence to global warming, this basic need doesn’t find a mention
          anywhere. GOONJ wants to make clothing a matter of concern as an
          important issue. In addition, we also encourage people to contribute
          other household items like stationery, toys, utensils
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Camps;
