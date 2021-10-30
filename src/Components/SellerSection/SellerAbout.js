import React from "react";
import { Rating } from "@mui/material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ContentSwiper from "../ContentSwiper/ContentSwiper";
import { Table } from "react-bootstrap";

export default function SellerAbout(props) {
  const percentage = 66;
  const slideData = [
    {
      item:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlrZSUyMHNob2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
      item:
        "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-73ec2548-82c2-45f6-a395-15acdfa502d0/superrep-go-mens-training-shoes-19sK4X.png",
    },
    {
      item:
        "https://static.nike.com/a/images/f_auto/dpr_3.0/h_500,c_limit/g1ljiszo4qhthfpluzbt/nike-joyride.jpg",
    },
    {
      item:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlrZSUyMHNob2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
      item:
        "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-73ec2548-82c2-45f6-a395-15acdfa502d0/superrep-go-mens-training-shoes-19sK4X.png",
    },
    {
      item:
        "https://static.nike.com/a/images/f_auto/dpr_3.0/h_500,c_limit/g1ljiszo4qhthfpluzbt/nike-joyride.jpg",
    },
    {
      item:
        "https://static.nike.com/a/images/f_auto/dpr_3.0/h_500,c_limit/g1ljiszo4qhthfpluzbt/nike-joyride.jpg",
    },
    {
      item:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlrZSUyMHNob2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
      item:
        "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-73ec2548-82c2-45f6-a395-15acdfa502d0/superrep-go-mens-training-shoes-19sK4X.png",
    },
    {
      item:
        "https://static.nike.com/a/images/f_auto/dpr_3.0/h_500,c_limit/g1ljiszo4qhthfpluzbt/nike-joyride.jpg",
    },
  ];
  const {
    aboutSeller,
    timestamp,
    location,
    country,
    website,
    sellerName,
  } = props.data;
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4 box_shadow bg-white round">
            {/* from product details component */}
            <div className="buyer_review_section mt-3 round">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 g-0">
                    <h1>4.5/5</h1>
                    <p>
                      <Rating value={4} />
                    </p>
                    <p>90 Ratings</p>
                  </div>
                  <div className="col-md-6 g-0">
                    <div className="rating_rate_progress">
                      <Rating value={5} readOnly />
                      <div className="progress w-100">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{
                            width: "93%",
                            backgroundColor: "#ffd101",
                          }}
                        >
                          93%
                        </div>
                      </div>
                    </div>
                    <div className="rating_rate_progress">
                      <Rating value={5} readOnly />
                      <div className="progress w-100">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{
                            width: "13%",
                            backgroundColor: "#ffd101",
                          }}
                        >
                          13%
                        </div>
                      </div>
                    </div>
                    <div className="rating_rate_progress">
                      <Rating value={5} readOnly />
                      <div className="progress w-100">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{
                            width: "25%",
                            backgroundColor: "#ffd101",
                          }}
                        >
                          4%
                        </div>
                      </div>
                    </div>
                    <div className="rating_rate_progress">
                      <Rating value={5} readOnly />
                      <div className="progress w-100">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{
                            width: "1%",
                            backgroundColor: "#ffd101",
                          }}
                        >
                          1%
                        </div>
                      </div>
                    </div>
                    <div className="rating_rate_progress">
                      <Rating value={5} readOnly />
                      <div className="progress w-100">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{
                            width: "5%",
                            backgroundColor: "#ffd101",
                          }}
                        >
                          0%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-7 ml-md-5 box_shadow p-2 bg-white round"
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: 80, height: 80 }}>
                  <CircularProgressbar value={87} text={`${87}%`} />
                </div>
              </div>
              <p
                className="m-0"
                style={{ fontSize: "14px", textAlign: "center" }}
              >
                Inbox Response Rate
              </p>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: 80, height: 80 }}>
                  <CircularProgressbar value={74} text={`${74}%`} />
                </div>
              </div>
              <p
                className="m-0"
                style={{ fontSize: "14px", textAlign: "center" }}
              >
                Order Response Rate
              </p>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: 80, height: 80 }}>
                  <CircularProgressbar value={87} text={`${87}%`} />
                </div>
              </div>
              <p
                className="m-0"
                style={{ fontSize: "14px", textAlign: "center" }}
              >
                Deliverd on time
              </p>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: 80, height: 80 }}>
                  <CircularProgressbar value={91} text={`${91}%`} />
                </div>
              </div>
              <p
                className="m-0"
                style={{ fontSize: "14px", textAlign: "center" }}
              >
                Order Completation
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3 ">
        <div className="row">
          <div className="col-md-4 bg-white round box_shadow p-4">
            <p className="m-0">About</p>
            <small>{aboutSeller}</small>
            <div
              className="bg-light p-2 round mt-1"
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "grey",
              }}
            >
              <small>Joined</small>
              <small>{new Date(timestamp).toUTCString()}</small>
            </div>
            <div
              className="bg-light p-2 round mt-1"
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "grey",
              }}
            >
              <small>City</small>
              <small>{location}</small>
            </div>
            <div
              className="bg-light p-2 round mt-1"
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "grey",
              }}
            >
              <small>Country</small>
              <small>{country}</small>
            </div>
            <div
              className="bg-light p-2 round mt-1"
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "grey",
              }}
            >
              <small>Web</small>
              <small>{website}</small>
            </div>
            <p className="m-0 mt-2">Personal Info</p>
            <div
              className="bg-light p-2 round mt-1"
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "grey",
              }}
            >
              <small>Joined</small>
              <small>March 26th, 2017</small>
            </div>
            <div
              className="bg-light p-2 round mt-1"
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "grey",
              }}
            >
              <small>City</small>
              <small>Los Angeles, California</small>
            </div>
            <div
              className="bg-light p-2 round mt-1"
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "grey",
              }}
            >
              <small>Country</small>
              <small>United States</small>
            </div>
            <div
              className="bg-light p-2 round mt-1"
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "grey",
              }}
            >
              <small>Age</small>
              <small>32 Years</small>
            </div>
            <div
              className="bg-light p-2 round mt-1"
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "grey",
              }}
            >
              <small>Web</small>
              <small>www.xyz.com</small>
            </div>
          </div>
          <div className="col-md-7 ml-md-5 p-4 bg-white round box_shadow">
            <p className="m-0">Jobs and Education</p>
            <small>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut rem
              porro molestiae sapiente laudantium perspiciatis? Harum neque
              commodi iste placeat. Lorem adipisicing elit. Laborum, ipsum?
            </small>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <p className="m-0 mt-2">Job History</p>
                  <div
                    className="bg-light p-2 round mt-1"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "grey",
                    }}
                  >
                    <small>Joined</small>
                    <small>March 26th, 2017</small>
                  </div>
                  <div
                    className="bg-light p-2 round mt-1"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "grey",
                    }}
                  >
                    <small>City</small>
                    <small>Los Angeles, California</small>
                  </div>
                  <div
                    className="bg-light p-2 round mt-1"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "grey",
                    }}
                  >
                    <small>Country</small>
                    <small>United States</small>
                  </div>
                  <div
                    className="bg-light p-2 round mt-1"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "grey",
                    }}
                  >
                    <small>Age</small>
                    <small>32 Years</small>
                  </div>
                  <div
                    className="bg-light p-2 round mt-1"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "grey",
                    }}
                  >
                    <small>Web</small>
                    <small>www.xyz.com</small>
                  </div>
                  <div
                    className="bg-light p-2 round mt-1"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "grey",
                    }}
                  >
                    <small>Joined</small>
                    <small>March 26th, 2017</small>
                  </div>
                  <div
                    className="bg-light p-2 round mt-1"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "grey",
                    }}
                  >
                    <small>City</small>
                    <small>Los Angeles, California</small>
                  </div>
                  <div
                    className="bg-light p-2 round mt-1"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "grey",
                    }}
                  >
                    <small>Country</small>
                    <small>United States</small>
                  </div>
                  <div
                    className="bg-light p-2 round mt-1"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "grey",
                    }}
                  >
                    <small>Age</small>
                    <small>32 Years</small>
                  </div>
                  <div
                    className="bg-light p-2 round mt-1"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "grey",
                    }}
                  >
                    <small>Web</small>
                    <small>www.xyz.com</small>
                  </div>
                </div>
                <div className="col-md-6">
                  <p className="m-0 mt-2">Education History</p>
                  <div
                    className="bg-light p-2 round mt-1"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "grey",
                    }}
                  >
                    <small>Joined</small>
                    <small>March 26th, 2017</small>
                  </div>
                  <div
                    className="bg-light p-2 round mt-1"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "grey",
                    }}
                  >
                    <small>City</small>
                    <small>Los Angeles, California</small>
                  </div>
                  <div
                    className="bg-light p-2 round mt-1"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "grey",
                    }}
                  >
                    <small>Country</small>
                    <small>United States</small>
                  </div>
                  <div
                    className="bg-light p-2 round mt-1"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "grey",
                    }}
                  >
                    <small>Age</small>
                    <small>32 Years</small>
                  </div>
                  <div
                    className="bg-light p-2 round mt-1"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "grey",
                    }}
                  >
                    <small>Web</small>
                    <small>www.xyz.com</small>
                  </div>
                  <div
                    className="bg-light p-2 round mt-1"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "grey",
                    }}
                  >
                    <small>Joined</small>
                    <small>March 26th, 2017</small>
                  </div>
                  <div
                    className="bg-light p-2 round mt-1"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "grey",
                    }}
                  >
                    <small>City</small>
                    <small>Los Angeles, California</small>
                  </div>
                  <div
                    className="bg-light p-2 round mt-1"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "grey",
                    }}
                  >
                    <small>Country</small>
                    <small>United States</small>
                  </div>
                  <div
                    className="bg-light p-2 round mt-1"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "grey",
                    }}
                  >
                    <small>Age</small>
                    <small>32 Years</small>
                  </div>
                  <div
                    className="bg-light p-2 round mt-1"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "grey",
                    }}
                  >
                    <small>Web</small>
                    <small>www.xyz.com</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-4">
            {/* <h5>About Company</h5> */}
            <div className="row">
              <div className="col-md-7 mr-5 bg-white round">
                <div className="company_details g-light round">
                  <h6
                    className="mt-3 text-dark"
                    style={{ textAlign: "center" }}
                  >
                    Company Album
                  </h6>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="w-100">
                        <ContentSwiper data={{ slideData }} />
                      </div>
                      <div className="company_overview w-100">
                        <p className="m-0">Company Overview</p>
                        <Table striped bordered hover>
                          <tbody>
                            <tr>
                              <td>Business Type</td>
                              <td>Manufacturer, Trading Company</td>
                            </tr>
                            <tr>
                              <td>Main Product</td>
                              <td>Hair bands, Sports Cap, Handbag</td>
                            </tr>
                            <tr>
                              <td>Total Anual Revenue</td>
                              <td>2 Million USD</td>
                            </tr>
                            <tr>
                              <td>Certifications</td>
                              <td>N/A</td>
                            </tr>
                            <tr>
                              <td>Main Market</td>
                              <td>North America 50.01%</td>
                            </tr>
                            <tr>
                              <td>Total Employees</td>
                              <td>1250</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 round bg-white">
                <p className="m-0 mt-2">About Company</p>
                <div
                  className="bg-light p-2 round mt-1"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "grey",
                  }}
                >
                  <small>Joined</small>
                  <small>March 26th, 2017</small>
                </div>
                <div
                  className="bg-light p-2 round mt-1"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "grey",
                  }}
                >
                  <small>City</small>
                  <small>Los Angeles, California</small>
                </div>
                <div
                  className="bg-light p-2 round mt-1"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "grey",
                  }}
                >
                  <small>Country</small>
                  <small>United States</small>
                </div>
                <div
                  className="bg-light p-2 round mt-1"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "grey",
                  }}
                >
                  <small>Age</small>
                  <small>32 Years</small>
                </div>
                <div
                  className="bg-light p-2 round mt-1"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "grey",
                  }}
                >
                  <small>Web</small>
                  <small>www.xyz.com</small>
                </div>
                <p className="m-0 mt-1">Personal Info</p>
                <div
                  className="bg-light p-2 round mt-1"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "grey",
                  }}
                >
                  <small>Joined</small>
                  <small>March 26th, 2017</small>
                </div>
                <div
                  className="bg-light p-2 round mt-1"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "grey",
                  }}
                >
                  <small>City</small>
                  <small>Los Angeles, California</small>
                </div>
                <div
                  className="bg-light p-2 round mt-1"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "grey",
                  }}
                >
                  <small>Country</small>
                  <small>United States</small>
                </div>
                <div
                  className="bg-light p-2 round mt-1"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "grey",
                  }}
                >
                  <small>Age</small>
                  <small>32 Years</small>
                </div>
                <div
                  className="bg-light p-2 round mt-1"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "grey",
                  }}
                >
                  <small>Web</small>
                  <small>www.xyz.com</small>
                </div>
                <div
                  className="bg-light p-2 round mt-1"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "grey",
                  }}
                >
                  <small>Age</small>
                  <small>32 Years</small>
                </div>
                <div
                  className="bg-light p-2 round mt-1"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "grey",
                  }}
                >
                  <small>Web</small>
                  <small>www.xyz.com</small>
                </div>
                <div
                  className="bg-light p-2 round mt-1"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "grey",
                  }}
                >
                  <small>Age</small>
                  <small>32 Years</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
