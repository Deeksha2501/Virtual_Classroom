import React from "react";
import "./Faq.css";
import Header from "./FaqHeader";
import Footer from "../footer/Footer";
const Faq = () => {
  return (
    <>
      <Header />
      <div className="top-img">
        <img
          src={require("./search-1756278_640.jpg")}
          alt="Frequently asked questions"
          style={{ width: "100%", height: "400px" }}
        />
      </div>
      <div className="camp-detail">
        <h2 style={{ fontSize: "30px" }}>
          <b>General Disclaimer</b>
          <b>;</b>
        </h2>
        <p>
          <b>
            No third party agency is working on behalf of our organization for
            any recruitment, training, camps or other activities related to our
            organization. Please check/consult with our organization directly to
            get correct information or assistance. Please beware of any
            unwarranted claims made by anyone on our behalf. Kindly bring any
            such claims to our notice for immediate attention and action. Our
            orgaization doesn’t charge any money from anyone for these
            activities. So if you come across any individual/organization making
            a monetary demand in our name please bring it to our notice
            immediately on{" "}
          </b>
          <a href="#">
            <b>mail@annadan.org</b>
          </a>
          <b> or call us on 000-0000000</b>
        </p>
        <p>
          <span style={{ fontWeight: "400" }}>&nbsp;</span>
        </p>
        <h2 style={{ fontSize: "30px" }}>
          <b>Index&nbsp;</b>
        </h2>
        <ol>
          <li style={{ fontWeight: "400" }}>
            <span style={{ fontWeight: "400" }}>About Organization&nbsp;</span>
          </li>
          <li style={{ fontWeight: "400" }}>
            <span style={{ fontWeight: "400" }}>
              &nbsp;Scheduling a visit to Organization&nbsp;
            </span>
          </li>

          <li style={{ fontWeight: "400" }}>
            <span style={{ fontWeight: "400" }}>
              Volunteering and Internship&nbsp;
            </span>
          </li>
        </ol>
        <h3>
          <b>Q: What does our organization do?</b>
        </h3>
        <p>
          <b>Ans: </b>
          <span style={{ fontWeight: "400" }}>
            Our organization is channelising unused material lying idle in urban
            homes, to far-flung villages of India, as an important development
            resource. Although we deal mainly with dry and cooked food material.
          </span>
        </p>
        <h3>
          <b>Q: Where all do you have your formal offices?</b>
        </h3>
        <p>
          <b>Ans: </b>
          <span style={{ fontWeight: "400" }}>
            Our organization has its offices in Delhi, Mumbai &amp; Patna and
            many more places .And we are on our way to spread all over India
          </span>
        </p>
        <p>
          <span style={{ fontWeight: "400" }}>&nbsp;</span>
        </p>
        <h2 style={{ fontSize: "30px" }}>
          <b>Scheduling a visit to our organization&nbsp;</b>
        </h2>
        <h3>
          <b>
            Q; I want to see your processing center . Who should I coordinate
            with, for this?
          </b>
        </h3>
        <p>
          <span style={{ fontWeight: "400" }}>
            <b>Ans; </b>Please write to{" "}
          </span>
          <span style={{ fontWeight: "400" }}>ngo@annadan.org</span>
          <span style={{ fontWeight: "400" }}>
            {" "}
            to schedule your visit during our working hours i.e Monday –
            Saturday (10 am – 5 pm, lunch hours 1.30 pm – 2.30 pm).
          </span>
        </p>
        <p>
          <span style={{ fontWeight: "400" }}>&nbsp;</span>
        </p>
        <h2 style={{ fontSize: "30px" }}>
          <b>Volunteering and Internship</b>
        </h2>
        <h3>
          <b>Q: How can I volunteer with your organization?</b>
        </h3>
        <p>
          <b>Ans: </b>
          <span style={{ fontWeight: "400" }}>
            Anyone irrespective of age, gender, education, nationality can
            volunteer with our organization in many different ways, even sitting
            at home. Visit our website for a list of volunteering opportunities,
            write to us at{" "}
          </span>
          <span style={{ fontWeight: "400" }}>mail@annadan.org</span>
          <span style={{ fontWeight: "400" }}>
            &nbsp; or call up our office (000- 00000000) to find out what suits
            your circumstances.
          </span>
        </p>
        <h3>
          <b>
            Q: Do I have to pay any membership fee to become your member/
            volunteer?
          </b>
        </h3>
        <p>
          <b>Ans: </b>
          <span style={{ fontWeight: "400" }}>
            No, there is no membership fee for joining our organization. Anyone
            anywhere can become a member by joining our work in different
            capacities.
          </span>
        </p>
        <h3>
          <span style={{ fontWeight: "400" }}>&nbsp;</span>
          <b>
            Q; I want to do an internship with . Who should I contact for this?
          </b>
        </h3>
        <p>
          <span style={{ fontWeight: "400" }}>
            &nbsp;<b>Ans;</b> For interning with our organization please go
            through this link&nbsp;{" "}
          </span>
          <a href="http://localhost:3000/getInvolved">
            <span style={{ fontWeight: "400" }}>
              https://annadan.org/volunteer-intern/
            </span>
          </a>{" "}
          <span style={{ fontWeight: "400" }}>
            Kindly note that the minimum duration of internship is of 1 month
            and interns have to work closely with team from Monday to Saturday
            (10 am – 5 pm).
          </span>
          <span style={{ fontWeight: "400" }}>
            You can send us your application on:{" "}
          </span>
          <a href="#">
            <span style={{ fontWeight: "400" }}>
              Internship Application Form
            </span>
          </a>
        </p>
        <h3>
          <b>
            Q: Will I get a certificate, if I volunteer with your organization?
          </b>
        </h3>
        <p>
          <b>Ans: </b>
          <span style={{ fontWeight: "400" }}>
            On request we will surely issue a certificate for the work and
            duration of time that a person volunteer with our organization on
            the tasks assigned by us. On the other hand we strongly discourage
            people from approaching us with requests from their friends,
            relatives, children, college kids wanting a certificate when they
            are not actually interested in working with us as a volunteer.
          </span>
        </p>
        <h3>
          <b>Q: I want to join you formally, how do I do that?</b>
        </h3>
        <p>
          <b>Ans:</b>
          <span style={{ fontWeight: "400" }}>
            {" "}
            Send us your details and whenever there is an opening we will get in
            touch with you but if you are keen on working with us then the best
            way is to start with doing voluntary work with us. That will give
            you a first hand idea about our work, our work culture etc. Send us
            your detailed resume on&nbsp;{" "}
          </span>
          <span style={{ fontWeight: "400" }}>mail@annadan.org</span>
          <span style={{ fontWeight: "400" }}> for future reference.</span>
        </p>
        <h3>
          <b>Q: I want to do my internship, how do I proceed?</b>
        </h3>
        <p>
          <b>Ans: </b>
          <span style={{ fontWeight: "400" }}>
            Please ask your institute to send us a formal letter, mentioning
            about your interest in doing an internship with our organization.
            Also, please mention the duration, specific interest area,
            geographical preference. Clear and detailed information from your
            side will help us revert back at the earliest.
          </span>
        </p>
        <h3>
          <b>
            Q; What logistics expenses and stipend does your organization
            provide to interns?
          </b>
        </h3>
        <p>
          <span style={{ fontWeight: "400" }}>
            Ans; We would be happy to help with arranging accommodation and
            other aspects but given our limited resources we are unable to offer
            accommodation and other stay related arrangements to interns. Also
            we do not give stipend for internship.
          </span>
        </p>
        <h3>
          <b>
            Q; I really like your work and would like to volunteer with your
            organization? What opportunities are there for volunteers?
          </b>
        </h3>
        <p>
          <span style={{ fontWeight: "400" }}>
            <b>Ans;</b> G
          </span>
          <span style={{ fontWeight: "400" }}>
            ood to know that you wish to connect with our work. There are many
            ways in which you can volunteer with your time, skills and even
            networking. For us to better understand you are requested to fill up{" "}
            <a href="#">
              <strong>this volunteering form</strong>
            </a>
          </span>
          <span style={{ fontWeight: "400" }}>
            . Also please get in touch with the nearest office for some local
            opportunities and to connect with the local network of volunteer in
            your state.. Interactions with others who have been volunteering
            with us for many years will also give you some great ideas.{" "}
          </span>
        </p>
        <h3>
          <b>
            Q; I live abroad but I want to volunteer/intern at your
            organization. What do I need to do?
          </b>
        </h3>
        <p>
          <span style={{ fontWeight: "400" }}>
            <b>Ans;</b> First off if you can fill the
            <strong>
              {" "}
              <a href="#">volunteering form</a>
            </strong>
          </span>
          <span style={{ fontWeight: "400" }}>
            &nbsp;to share more information about you.&nbsp; Also please make
            sure your{" "}
          </span>
          <span style={{ fontWeight: "400" }}>
            that you have all the requisite visa requirements and permissions
            from the Indian Government&nbsp; in place. For internships we would
            also need a letter from your academic institution backing your
            application.
          </span>
        </p>
      </div>
      <Footer />
    </>
  );
};
export default Faq;
