import React, { Component } from "react";
import Header from "./contactHeder";
import Footer from "../footer/Footer";
import write from "./write.png";
import "./contact.css";

export default class Contact extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="top-img">
          <img src={write} alt="Image of students oragninsing camp" />
        </div>
        <section className="section-book">
          <div className="row">
            <div className="book">
              <div className="book__form">
                <form action="#" className="form" autoComplete="off">
                  <div className="u-margin-bottom-medium">
                    <h2 className="heading-secondary">Contact Us</h2>
                  </div>
                  <div className="form__group">
                    <input
                      type="email"
                      className="form__input"
                      placeholder="Email Address"
                      id="email"
                      required
                    />
                    <label for="email" className="form__label">
                      Email Address
                    </label>
                  </div>

                  <div className="form__group">
                    <textarea
                      type="type"
                      className="form__input"
                      placeholder="Message for us"
                      id="text"
                      required
                    />
                    <label for="text" className="form__label">
                      Message for us
                    </label>
                  </div>

                  <div className="form__group u-margin-top-small u-margin-bottom-big">
                    <button className="btn btn--green btn--animated">
                      Submit &rarr;
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}
