import React from "react";
import "./Plans.css";
import planss from "../Icons/planss.png";
import just from "../Icons/just.png";
import ready from "../Icons/ready.png";
const Plans = () => {
  return (
    <div>
      <section className="pricing py-5 mt-5">
        <div className="main">
          <div className="container">
            <div className="row">
              <h1 style={{ fontSize: "3rem", fontWeight: "bolder" }}>
                Plans & pricing
              </h1>
              <div className="col-lg-4">
                <div
                  className="card mb-5 mb-lg-0"
                  style={{ borderTop: "15px solid rgb(134,29,255)" }}
                >
                  <div className="card-body">
                    {/* <h5 className="card-title text-muted text-uppercase ">  </h5> */}
                    <div style={{ display: "flex" }}>
                      <img
                        style={{
                          width: "50px",
                          marginLeft: "20px",
                          marginTop: "10px",
                        }}
                        src="https://www.optimizely.com/globalassets/02.-global-images/product-icons/light-background/opt-product_icon_50px_light_contentmarketingplatform.svg"
                        alt="_"
                      />
                      <h1
                        style={{
                          fontSize: "25px",
                          fontWeight: "700",
                          marginLeft: "20px",
                          marginTop: "20px",
                        }}
                      >
                        Welcome
                      </h1>
                    </div>
                    <h6 className="card-price text-center">
                      <p
                        style={{
                          fontSize: "13px",
                          lineHeight: "15px",
                          textAlign: "left",
                          margin: "20px",
                          marginLeft: "25px",
                        }}
                      >
                        Manage tasks, work, campaigns and content across teams
                        for seamless collaboration.
                      </p>
                    </h6>
                    <hr />
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li">
                          <i
                            style={{
                              backgroundColor: "rgb(224,203,248)",
                              color: "purple",
                              borderRadius: "10px",
                            }}
                            className="fa fa-check"
                          ></i>
                        </span>
                        Digital asset management
                      </li>
                      <li>
                        <span className="fa-li">
                          <i
                            style={{
                              backgroundColor: "rgb(224,203,248)",
                              color: "purple",
                              borderRadius: "10px",
                            }}
                            className="fa fa-check"
                          ></i>
                        </span>
                        Handle tasks and workflows
                      </li>
                      <li>
                        <span className="fa-li">
                          <i
                            style={{
                              backgroundColor: "rgb(224,203,248)",
                              color: "purple",
                              borderRadius: "10px",
                            }}
                            className="fa fa-check"
                          ></i>
                        </span>
                        Streamline work requests
                      </li>
                      <li>
                        <span className="fa-li">
                          <i
                            style={{
                              backgroundColor: "rgb(224,203,248)",
                              color: "purple",
                              borderRadius: "10px",
                            }}
                            className="fa fa-check"
                          ></i>
                        </span>
                        Integrated calendar to track timelines
                      </li>
                      <li>
                        <span className="fa-li">
                          <i
                            style={{
                              backgroundColor: "rgb(224,203,248)",
                              color: "purple",
                              borderRadius: "10px",
                            }}
                            className="fa fa-check"
                          ></i>
                        </span>
                        Easy commenting and collaboration to avoid bottlenecks
                      </li>
                    </ul>
                    <div
                      style={{
                        height: "35px",
                        width: "250px",
                        marginLeft: "15%",
                      }}
                      className="d-grid"
                    >
                      <a
                        href="#"
                        className="btn "
                        style={{
                          marginTop: "70px",
                          backgroundColor: "rgb(0,55,255)",
                          color: "white",
                        }}
                      >
                        Try for free
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div
                  className="card mb-5 mb-lg-0"
                  style={{ borderTop: "15px solid rgb(255,129,16)" }}
                >
                  <div className="card-body">
                    {/* <h5 className="card-title text-muted text-uppercase ">  </h5> */}
                    <div style={{ display: "flex" }}>
                      <img
                        style={{
                          width: "50px",
                          marginLeft: "20px",
                          marginTop: "10px",
                        }}
                        src="https://www.optimizely.com/globalassets/02.-global-images/product-icons/light-background/opt-product_icon_50px_light_contentcloud.svg"
                        alt="_"
                      />
                      <h1
                        style={{
                          fontSize: "25px",
                          fontWeight: "700",
                          marginLeft: "20px",
                          marginTop: "20px",
                        }}
                      >
                        Content management
                      </h1>
                    </div>
                    <h6 className="card-price text-center">
                      <p
                        style={{
                          fontSize: "13px",
                          lineHeight: "15px",
                          textAlign: "left",
                          margin: "20px",
                          marginLeft: "25px",
                        }}
                      >
                        Create compelling content experiences. Empower your
                        editors to compose great experiences by creating and
                        combining content assets.
                      </p>
                    </h6>
                    <hr />
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li">
                          <i
                            style={{
                              backgroundColor: "rgb(248,223,200)",
                              color: "orange",
                              borderRadius: "10px",
                            }}
                            className="fa fa-check"
                          ></i>
                        </span>
                        Content management
                      </li>
                      <li>
                        <span className="fa-li">
                          <i
                            style={{
                              backgroundColor: "rgb(248,223,200)",
                              color: "orange",
                              borderRadius: "10px",
                            }}
                            className="fa fa-check"
                          ></i>
                        </span>
                        Authoring and layout
                      </li>
                      <li>
                        <span className="fa-li">
                          <i
                            style={{
                              backgroundColor: "rgb(248,223,200)",
                              color: "orange",
                              borderRadius: "10px",
                            }}
                            className="fa fa-check"
                          ></i>
                        </span>
                        Unlimited Public Projects
                      </li>
                      <li>
                        <span className="fa-li">
                          <i
                            style={{
                              backgroundColor: "rgb(248,223,200)",
                              color: "orange",
                              borderRadius: "10px",
                            }}
                            className="fa fa-check"
                          ></i>
                        </span>
                        Headless API
                      </li>
                      <li>
                        <span className="fa-li">
                          <i
                            style={{
                              backgroundColor: "rgb(248,223,200)",
                              color: "orange",
                              borderRadius: "10px",
                            }}
                            className="fa fa-check"
                          ></i>
                        </span>
                        Approval workflow
                      </li>
                      <li>
                        <span className="fa-li">
                          <i
                            style={{
                              backgroundColor: "rgb(248,223,200)",
                              color: "orange",
                              borderRadius: "10px",
                            }}
                            className="fa fa-check"
                          ></i>
                        </span>
                        Design compelling experiences
                      </li>
                      <li>
                        <span className="fa-li">
                          <i
                            style={{ color: "blue", borderRadius: "10px" }}
                            className="fa fa-plus"
                          ></i>
                        </span>
                        <a
                          style={{ textDecoration: "none", color: "blue" }}
                          href="/"
                        >
                          more...
                        </a>
                      </li>
                    </ul>
                    <div
                      style={{
                        height: "35px",
                        width: "250px",
                        marginLeft: "15%",
                      }}
                      className="d-grid"
                    >
                      <a
                        href="#"
                        className="btn "
                        style={{
                          marginTop: "1px",
                          backgroundColor: "rgb(0,55,255)",
                          color: "white",
                        }}
                      >
                        Request pricing
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div
                  className="card mb-5 mb-lg-0"
                  style={{ borderTop: "15px solid rgb(255,204,0)" }}
                >
                  <div className="card-body">
                    {/* <h5 className="card-title text-muted text-uppercase ">  </h5> */}
                    <div style={{ display: "flex" }}>
                      <img
                        style={{
                          width: "50px",
                          marginLeft: "20px",
                          marginTop: "10px",
                        }}
                        src="https://www.optimizely.com/globalassets/02.-global-images/product-icons/light-background/opt-product_icon_50px_light_webexperimentation.svg"
                        alt="_"
                      />
                      <h1
                        style={{
                          fontSize: "25px",
                          fontWeight: "700",
                          marginLeft: "20px",
                          marginTop: "20px",
                        }}
                      >
                        Web A/B testing
                      </h1>
                    </div>
                    <h6 className="card-price text-center">
                      <p
                        style={{
                          fontSize: "13px",
                          lineHeight: "15px",
                          textAlign: "left",
                          margin: "20px",
                          marginLeft: "25px",
                        }}
                      >
                        Manage tasks, work, campaigns and content across teams
                        for seamless collaboration.
                      </p>
                    </h6>
                    <hr />
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li">
                          <i
                            style={{
                              backgroundColor: "rgb(248,238,197)",
                              color: "rgb(255,204,0)",
                              borderRadius: "10px",
                            }}
                            className="fa fa-check"
                          ></i>
                        </span>
                        Content management
                      </li>
                      <li>
                        <span className="fa-li">
                          <i
                            style={{
                              backgroundColor: "rgb(248,238,197)",
                              color: "rgb(255,204,0)",
                              borderRadius: "10px",
                            }}
                            className="fa fa-check"
                          ></i>
                        </span>
                        Authoring and layout
                      </li>
                      <li>
                        <span className="fa-li">
                          <i
                            style={{
                              backgroundColor: "rgb(248,238,197)",
                              color: "rgb(255,204,0)",
                              borderRadius: "10px",
                            }}
                            className="fa fa-check"
                          ></i>
                        </span>
                        Unlimited Public Projects
                      </li>
                      <li>
                        <span className="fa-li">
                          <i
                            style={{
                              backgroundColor: "rgb(248,238,197)",
                              color: "rgb(255,204,0)",
                              borderRadius: "10px",
                            }}
                            className="fa fa-check"
                          ></i>
                        </span>
                        Headless API
                      </li>
                      <li>
                        <span className="fa-li">
                          <i
                            style={{ color: "blue", borderRadius: "10px" }}
                            className="fa fa-plus"
                          ></i>
                        </span>
                        <a
                          style={{ textDecoration: "none", color: "blue" }}
                          href="/"
                        >
                          more... ˅ Compare features
                        </a>
                      </li>
                    </ul>
                    <div
                      style={{
                        height: "35px",
                        width: "250px",
                        marginLeft: "15%",
                      }}
                      className="d-grid"
                    >
                      <a
                        href="#"
                        className="btn "
                        style={{
                          marginTop: "90px",
                          backgroundColor: "rgb(0,55,255)",
                          color: "white",
                        }}
                      >
                        Request pricing
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div
                  className="card mb-5 mb-lg-0"
                  style={{
                    borderTop: "15px solid rgb(0,204,255)",
                    height: "30rem",
                  }}
                >
                  <div className="card-body">
                    {/* <h5 className="card-title text-muted text-uppercase ">  </h5> */}
                    <div style={{ display: "flex" }}>
                      <img
                        style={{
                          width: "50px",
                          marginLeft: "20px",
                          marginTop: "10px",
                        }}
                        src="https://www.optimizely.com/globalassets/02.-global-images/product-icons/light-background/opt-product_icon_50px_light_featuremanagement.svg"
                        alt="_"
                      />
                      <h1
                        style={{
                          fontSize: "25px",
                          fontWeight: "700",
                          marginLeft: "20px",
                          marginTop: "20px",
                        }}
                      >
                        Feature management
                      </h1>
                    </div>
                    <h6 className="card-price text-center">
                      <p
                        style={{
                          fontSize: "13px",
                          lineHeight: "15px",
                          textAlign: "left",
                          margin: "20px",
                          marginLeft: "25px",
                        }}
                      >
                        Remotely manage and experiment on features server-side
                        in your apps.
                      </p>
                    </h6>
                    <hr />
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li">
                          <i
                            style={{
                              backgroundColor: "rgb(197,238,245)",
                              color: "rgb(0,204,255)",
                              borderRadius: "10px",
                            }}
                            className="fa fa-check"
                          ></i>
                        </span>
                        SDKs in 10 programming languages
                      </li>
                      <li>
                        <span className="fa-li">
                          <i
                            style={{
                              backgroundColor: "rgb(197,238,245)",
                              color: "rgb(0,204,255)",
                              borderRadius: "10px",
                            }}
                            className="fa fa-check"
                          ></i>
                        </span>
                        Advanced audience targeting
                      </li>
                      <li>
                        <span className="fa-li">
                          <i
                            style={{
                              backgroundColor: "rgb(197,238,245)",
                              color: "rgb(0,204,255)",
                              borderRadius: "10px",
                            }}
                            className="fa fa-check"
                          ></i>
                        </span>
                        Cached data files keep your app fast
                      </li>
                      <li>
                        <span className="fa-li">
                          <i
                            style={{
                              backgroundColor: "rgb(197,238,245)",
                              color: "rgb(0,204,255)",
                              borderRadius: "10px",
                            }}
                            className="fa fa-check"
                          ></i>
                        </span>
                        Robust community and docs
                      </li>
                      <li>
                        <span className="fa-li">
                          <i
                            style={{ color: "blue", borderRadius: "10px" }}
                            className="fa fa-plus"
                          ></i>
                        </span>
                        <a
                          style={{ textDecoration: "none", color: "blue" }}
                          href="/"
                        >
                          more... ˅ Compare features
                        </a>
                      </li>
                    </ul>
                    <div
                      style={{
                        height: "35px",
                        width: "250px",
                        marginLeft: "15%",
                      }}
                      className="d-grid"
                    >
                      <a
                        href="#"
                        className="btn "
                        style={{
                          marginTop: "13px",
                          backgroundColor: "rgb(0,55,255)",
                          color: "white",
                        }}
                      >
                        Request pricing
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div
                  className="card mb-5 mb-lg-0"
                  style={{
                    borderTop: "15px solid rgb(255,204,0)",
                    height: "30rem",
                  }}
                >
                  <div className="card-body">
                    {/* <h5 className="card-title text-muted text-uppercase ">  </h5> */}
                    <div style={{ display: "flex" }}>
                      <img
                        style={{
                          width: "50px",
                          marginLeft: "20px",
                          marginTop: "10px",
                        }}
                        src="https://www.optimizely.com/globalassets/02.-global-images/product-icons/light-background/opt-product_icon_50px_light_commercecloud.svg"
                        alt="_"
                      />
                      <h1
                        style={{
                          fontSize: "25px",
                          fontWeight: "700",
                          marginLeft: "20px",
                          marginTop: "20px",
                        }}
                      >
                        Commerce
                      </h1>
                    </div>
                    <h6 className="card-price text-center">
                      <p
                        style={{
                          fontSize: "13px",
                          lineHeight: "15px",
                          textAlign: "left",
                          margin: "20px",
                          marginLeft: "25px",
                        }}
                      >
                        Run multiple shops, inventory and a catalog online
                        and/or offline.
                      </p>
                    </h6>
                    <hr />
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li">
                          <i
                            style={{
                              backgroundColor: "rgb(209,242,223)",
                              color: "rgb(59,224,129)",
                              borderRadius: "10px",
                            }}
                            className="fa fa-check"
                          ></i>
                        </span>
                        Multi-site & multi-lingual
                      </li>
                      <li>
                        <span className="fa-li">
                          <i
                            style={{
                              backgroundColor: "rgb(209,242,223)",
                              color: "rgb(59,224,129)",
                              borderRadius: "10px",
                            }}
                            className="fa fa-check"
                          ></i>
                        </span>
                        Visitor targeting
                      </li>
                      <li>
                        <span className="fa-li">
                          <i
                            style={{
                              backgroundColor: "rgb(209,242,223)",
                              color: "rgb(59,224,129)",
                              borderRadius: "10px",
                            }}
                            className="fa fa-check"
                          ></i>
                        </span>
                        Project collaboration
                      </li>
                      <li>
                        <span className="fa-li">
                          <i
                            style={{
                              backgroundColor: "rgb(209,242,223)",
                              color: "rgb(59,224,129)",
                              borderRadius: "10px",
                            }}
                            className="fa fa-check"
                          ></i>
                        </span>
                        Inventory and order management
                      </li>
                      <li>
                        <span className="fa-li">
                          <i
                            style={{ color: "blue", borderRadius: "10px" }}
                            className="fa fa-plus"
                          ></i>
                        </span>
                        <a
                          style={{ textDecoration: "none", color: "blue" }}
                          href="/"
                        >
                          more...
                        </a>
                      </li>
                    </ul>
                    <div
                      style={{
                        height: "35px",
                        width: "250px",
                        marginLeft: "15%",
                      }}
                      className="d-grid"
                    >
                      <a
                        href="#"
                        className="btn "
                        style={{
                          marginTop: "13px",
                          backgroundColor: "rgb(0,55,255)",
                          color: "white",
                        }}
                      >
                        Request pricing
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <img
                  style={{ width: "100%", height: "99%", borderRadius: "5px" }}
                  src={planss}
                  alt="/"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="just" style={{ backgroundColor: "rgb(246,246,246)" }}>
        <img style={{ width: "85%", margin: "7%" }} src={just} />
      </div>

      <div>
        <h1
          style={{
            marginLeft: "8rem",
            marginTop: "50px",
            marginBottom: "20px",
            fontSize: "3rem",
          }}
        >
          Additional add-ons and upgrades
        </h1>

        <div
          style={{
            display: "flex",
            width: "90%",
            // margin: "auto",
            marginLeft: "8rem",
            textAlign: "left",
            marginTop: "40px",
          }}
        >
          <div style={{ height: "300px" }}>
            <img
              style={{
                width: "50px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
              src="https://www.optimizely.com/globalassets/02.-global-images/product-icons/light-background/opt-product_icon_50px_light_contentintelligence.svg"
              alt=""
            />
            <p
              style={{
                fontWeight: "500",
                color: "#33333",
                marginleft: "10px",
                fontSize: "17px",
              }}
            >
              Recommendations
            </p>
            <p
              style={{
                fontWeight: "400",
                color: "#33333",
                marginleft: "10px",
                fontSize: "17px",
                paddingRight: "40px",
              }}
            >
              Get prescriptive guidance in real-time so you know what content
              will convert and drive revenue.
            </p>

            <p style={{ color: "blue", marginTop: "30px" }}>Learn More → </p>
          </div>

          <div style={{ height: "300px" }}>
            <img
              style={{
                width: "50px",

                marginTop: "10px",
                marginBottom: "10px",
              }}
              src="https://www.optimizely.com/globalassets/02.-global-images/product-icons/light-background/opt-product_icon_50px_light_optimizelydataplatform.svg"
              alt=""
            />
            <p
              style={{
                fontWeight: "500",
                color: "#33333",
                marginleft: "10px",
                fontSize: "17px",
              }}
            >
              Customer Data
            </p>
            <p
              style={{
                fontWeight: "400",
                color: "#33333",
                marginleft: "10px",
                fontSize: "17px",
                paddingRight: "60px",
              }}
            >
              Align your entire brand around the customer experience and let us
              do the heavy lifting of surfacing opportunities, automating tasks
              and streamlining execution.
            </p>

            <p style={{ color: "blue", marginTop: "30px" }}>Learn More → </p>
          </div>

          <div style={{ height: "300px" }}>
            <img
              style={{
                width: "50px",

                marginTop: "10px",
                marginBottom: "10px",
              }}
              src="https://www.optimizely.com/globalassets/02.-global-images/product-icons/light-background/opt-product_icon_50px_light_digitalassetmanagement.svg"
              alt=""
            />
            <p
              style={{
                fontWeight: "500",
                color: "#33333",
                marginleft: "10px",
                fontSize: "17px",
              }}
            >
              Digital asset management
            </p>
            <p
              style={{
                fontWeight: "400",
                color: "#33333",
                marginleft: "10px",
                fontSize: "17px",
                paddingRight: "60px",
              }}
            >
              Save time, eliminate waste and govern your brand with Library—a
              digital asset management tool built for marketing content..
            </p>

            <p style={{ color: "blue", marginTop: "30px" }}>Learn More → </p>
          </div>

          <div style={{ height: "300px" }}>
            <img
              style={{
                width: "50px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
              src="https://www.optimizely.com/globalassets/02.-global-images/product-icons/light-background/opt-product_icon_50px_light_delivra.svg"
              alt=""
            />
            <p
              style={{
                fontWeight: "500",
                color: "#33333",
                marginleft: "10px",
                fontSize: "17px",
              }}
            >
              Email
            </p>
            <p
              style={{
                fontWeight: "400",
                color: "#33333",
                marginleft: "10px",
                fontSize: "17px",
                paddingRight: "80px",
              }}
            >
              Automate your multi-channel campaigns and start seeing boosts in
              the lifetime value of your prospects. Keep more customers longer.
            </p>

            <p style={{ color: "blue", marginTop: "30px" }}>Learn More → </p>
          </div>
        </div>
      </div>

      <div>
        <img
          style={{
            width: "80%",
            marginLeft: "10rem",
            borderRadius: "10px",
            marginTop: "5rem",
            cursor: "pointer",
          }}
          src={ready}
        />
      </div>
    </div>
  );
};

export default Plans;
