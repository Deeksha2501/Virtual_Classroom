import React from "react";
import "./navbar.css";
import Axios from "axios";
import { Link, Redirect } from "react-router-dom";

class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {
      submenu: false,
      width: 0,
      auth: {},
    };

    window.addEventListener("resize", this.update);
  }

  componentDidMount() {
    this.update();
    Axios.get("/auth/current_user", { withCredentials: true }).then((res) => {
      console.log(res);
      this.setState({ auth: res.data });
    });
  }
  update = () => {
    this.setState({
      width: window.innerWidth,
    });
  };
  showMenu = () => {
    this.setState({ submenu: !this.state.submenu });
  };

  render() {
    return (
      <div
        id="header"
        className="header_fullwidth"
        style={{ position: "fixed" }}
      >
        <div className="header_mid" data-height="86px">
          <div class="header_mid_background"></div>
          <div className="header_mid_outer">
            <div className="header_mid_inner">
              <div className="logo_wrap">
                <a href="#" className="logo">
                  <img src={require("../annadanlogo.png")} alt="Annadan"></img>
                  <img
                    className="logo_retina"
                    src={require("../annadanlogo.png")}
                    alt="Annadan"
                  ></img>
                </a>
              </div>

              <div className="header_donation_but_wrap">
                <div className="header_donation_but_wrap_inner">
                  <div className="header_donation_but">
                    <Link
                      to="/donate"
                      className="cmsmasters_button"
                      style={{ textDecoration: "none" }}
                    >
                      <span>Donate</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="social_wrap">
                <div className="social_wrap_inner">
                  <ul>
                    {this.state.auth.length !== 0 ? (
                      <li>
                        <span style={{ marginTop: "50px", color: "#c03e3e" }}>
                          Welcome{" "}
                          <strong style={{ color: "#b22222" }}>
                            {this.state.auth.name}
                          </strong>
                        </span>
                      </li>
                    ) : (
                      ""
                    )}
                    <li>
                      <a
                        href="#"
                        className="cmsmasters_social_icon cmsmasters_social_icon_1 cmsmasters-icon-facebook"
                        title="Facebook"
                        target="_blank"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="cmsmasters_social_icon cmsmasters_social_icon_2 cmsmasters-icon-custom-instagram"
                        title="Instagram"
                      >
                        <i class="fab fa-instagram-square"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="cmsmasters_social_icon cmsmasters_social_icon_3 cmsmasters-icon-twitter"
                        title="Twitter"
                        target="_blank"
                      >
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="cmsmasters_social_icon cmsmasters_social_icon_4 cmsmasters-icon-youtube-squared"
                        title="Youtube"
                        target="_blank"
                      >
                        <i class="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {this.state.width > 1200 ? (
                <div className="mid_nav_wrap">
                  <nav>
                    <div className="menu-my-custom-mene-container">
                      <ul id="navigation" className="mid_nav_navigation">
                        <li
                          id="menu-item-24739"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-7366 current_page_item menu-item-24739 menu-item-highlight menu-item-depth-0 menu-item-hide-text menu-item-icon"
                        >
                          <a href="/#home">
                            <span className="nav_item_wrap">
                              <span className="nav_title cmsmasters-icon-home-3">
                                <i className="fas fa-home fa"></i>
                              </span>
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-14350"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-14350 menu-item-depth-0"
                        >
                          <a href="/#aboutus">
                            <span className="nav_item_wrap">
                              <span
                                className="nav_title"
                                style={{ fontWeight: "600", fontSize: "13px" }}
                              >
                                About Us
                              </span>
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-15327"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-14350 menu-item-depth-0"
                        >
                          <a href="#">
                            <span className="nav_item_wrap">
                              <span
                                className="nav_title"
                                style={{ fontWeight: "600", fontSize: "13px" }}
                              >
                                Contact Us
                              </span>
                            </span>
                          </a>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-14614"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14614 menu-item-depth-1"
                            >
                              <a href="/contact/drop-centre">
                                <span class="nav_item_wrap">
                                  <span class="nav_title">
                                    Dropping Centers
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-24738"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24738 menu-item-depth-1"
                            >
                              <a href="/contact/camps">
                                <span class="nav_item_wrap">
                                  <span class="nav_title">
                                    Collection Camps
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-14616"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14616 menu-item-depth-1"
                            >
                              <a href="/contact/write">
                                <span class="nav_item_wrap">
                                  <span class="nav_title">Write to US</span>
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          id="menu-item-14365"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-14350 menu-item-depth-0"
                        >
                          <Link to="/getInvolved">
                            <span className="nav_item_wrap">
                              <span
                                className="nav_title"
                                style={{ fontWeight: "600", fontSize: "13px" }}
                              >
                                Get Involved
                              </span>
                            </span>
                          </Link>
                        </li>
                        <li
                          id="menu-item-24749"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home page_item page-item-7366 current_page_item menu-item-24739 menu-item-highlight menu-item-depth-0 menu-item-hide-text menu-item-icon"
                        >
                          <Link to="/faq">
                            <span className="nav_item_wrap">
                              <span
                                className="nav_title "
                                style={{ fontWeight: "600", fontSize: "13px" }}
                              >
                                FAQ
                              </span>
                            </span>
                          </Link>
                        </li>
                        {this.state.auth ? (
                          <li
                            id="menu-item-24748"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home  page_item page-item-7366 current_page_item menu-item-24739 menu-item-highlight menu-item-depth-0 menu-item-hide-text menu-item-icon"
                          >
                            <a href="/auth/logout">
                              <span className="nav_item_wrap">
                                <span
                                  className="nav_title"
                                  style={{
                                    fontWeight: "600",
                                    fontSize: "13px",
                                  }}
                                >
                                  Logout
                                </span>
                              </span>
                            </a>
                          </li>
                        ) : (
                          <li
                            id="menu-item-24748"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home  page_item page-item-7366 current_page_item menu-item-24739 menu-item-highlight menu-item-depth-0 menu-item-hide-text menu-item-icon"
                          >
                            <a href="/signup">
                              <span className="nav_item_wrap">
                                <span
                                  className="nav_title"
                                  style={{
                                    fontWeight: "600",
                                    fontSize: "13px",
                                  }}
                                >
                                  Signup
                                </span>
                              </span>
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </nav>
                </div>
              ) : (
                <nav className=" hamicon">
                  <button
                    className="navbar-toggler second-button"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent23"
                    aria-controls="navbarSupportedContent23"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i class="fas fa-bars"></i>
                  </button>
                  {this.state.auth ? (
                    <span style={{ color: "#c03e3e" }}>
                      Welcome{" "}
                      <strong style={{ color: "#b22222" }}>
                        {this.state.auth.name}
                      </strong>
                    </span>
                  ) : (
                    ""
                  )}

                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent23"
                  >
                    <ul id="navigation" className="mid_nav_navigation">
                      <li
                        id="menu-item-24739"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-7366 current_page_item menu-item-24739 menu-item-highlight menu-item-depth-0 menu-item-hide-text menu-item-icon"
                      >
                        <a href="/#home">
                          <span className="nav_item_wrap">
                            <span className="nav_title cmsmasters-icon-home-3">
                              <i className="fas fa-home fa"></i>
                            </span>
                          </span>
                        </a>
                      </li>
                      <li
                        id="menu-item-14350"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-14350 menu-item-depth-0"
                      >
                        <a href="/#aboutus">
                          <span className="nav_item_wrap">
                            <span
                              className="nav_title"
                              style={{ fontWeight: "600", fontSize: "15px" }}
                            >
                              About Us
                            </span>
                          </span>
                        </a>
                      </li>
                      <li
                        id="menu-item-15327"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-14350 menu-item-depth-0"
                      >
                        <a href="#">
                          <span className="nav_item_wrap">
                            <span
                              className="nav_title"
                              style={{ fontWeight: "600", fontSize: "15px" }}
                            >
                              Contact Us
                            </span>
                          </span>
                          <span
                            className={`cmsmasters_resp_nav_toggle ${
                              this.state.submenu
                                ? "cmsmasters_theme_icon_resp_nav_slide_up"
                                : "cmsmasters_theme_icon_resp_nav_slide_down"
                            }`}
                            onClick={this.showMenu}
                          ></span>
                        </a>
                        <ul
                          className={`sub-menu ${
                            this.state.submenu ? "" : "hide"
                          }`}
                        >
                          <li
                            id="menu-item-14614"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14614 menu-item-depth-1"
                          >
                            <Link to="/contact/drop-centre">
                              <span class="nav_item_wrap">
                                <span class="nav_title">Dropping Centers</span>
                              </span>
                            </Link>
                          </li>
                          <li
                            id="menu-item-24738"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24738 menu-item-depth-1"
                          >
                            <Link to="/contact/camps">
                              <span class="nav_item_wrap">
                                <span class="nav_title">Collection Camps</span>
                              </span>
                            </Link>
                          </li>
                          <li
                            id="menu-item-14616"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14616 menu-item-depth-1"
                          >
                            <Link to="/contact/write">
                              <span class="nav_item_wrap">
                                <span class="nav_title">Write to US</span>
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu-item-14365"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-14350 menu-item-depth-0"
                      >
                        <Link to="/getInvolved">
                          <span className="nav_item_wrap">
                            <span
                              className="nav_title"
                              style={{ fontWeight: "600", fontSize: "15px" }}
                            >
                              Get Involved
                            </span>
                          </span>
                        </Link>
                      </li>
                      <li
                        id="menu-item-24749"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home page_item page-item-7366 current_page_item menu-item-24739 menu-item-highlight menu-item-depth-0 menu-item-hide-text menu-item-icon"
                      >
                        <Link to="/faq">
                          <span className="nav_item_wrap">
                            <span
                              className="nav_title "
                              style={{ fontWeight: "600", fontSize: "15px" }}
                            >
                              FAQ
                            </span>
                          </span>
                        </Link>
                      </li>
                      {this.state.auth.length !== 0 ? (
                        <li
                          id="menu-item-24748"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home  page_item page-item-7366 current_page_item menu-item-24739 menu-item-highlight menu-item-depth-0 menu-item-hide-text menu-item-icon"
                        >
                          <a href="/auth/logout">
                            <span className="nav_item_wrap">
                              <span
                                className="nav_title"
                                style={{ fontWeight: "600", fontSize: "15px" }}
                              >
                                Logout
                              </span>
                            </span>
                          </a>
                        </li>
                      ) : (
                        <li
                          id="menu-item-24748"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home  page_item page-item-7366 current_page_item menu-item-24739 menu-item-highlight menu-item-depth-0 menu-item-hide-text menu-item-icon"
                        >
                          <a href="/signup">
                            <span className="nav_item_wrap">
                              <span
                                className="nav_title"
                                style={{ fontWeight: "600", fontSize: "15px" }}
                              >
                                Signup
                              </span>
                            </span>
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                </nav>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
