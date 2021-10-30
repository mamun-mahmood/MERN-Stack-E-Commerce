import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { Rating } from "@mui/material";
import Button from "@mui/material/Button";
import ShareIcon from "@mui/icons-material/Share";
// import InnerImageZoom from "react-inner-image-zoom";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Remove from "@mui/icons-material/Remove";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import DoNotDisturbAltRoundedIcon from "@mui/icons-material/DoNotDisturbAltRounded";
import ReturnIcon from "../../Resources/return-pngrepo-com.png";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import ProductCar2 from "../ProductCard2/ProductCar2";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ContentSwiper from "../ContentSwiper/ContentSwiper";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetailsPage() {
  const productID = useParams();
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
  const [companyDetails, setCompanyDetails] = useState(true);
  const [GroupBuy, setGroupBuy] = useState(false);
  const [products, setProducts] = useState([{}]);
  useEffect(() => {
    axios
      .get(`http://localhost:5001/products/${productID._id}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const {
    productTitle,
    shopName,
    imgURL,
    description,
    startingPrice,
    shippingCharge,
    discountPercentage,
    sellerEmail,
  } = products[0];
  console.log(products.imgURL);
  return (
    <div className="card">
      <div className="container-fluid p-4">
        <div className=" row bg-white p-2 rounded">
          <div className="col-md-4">
            <Carousel>
              <div>
                <img className="product_img" src={imgURL} />
              </div>
              <div>
                <img className="product_img" src={imgURL} />
              </div>
              <div>
                <img className="product_img" src={imgURL} />
              </div>
            </Carousel>
          </div>
          <div className="product_info_section bg-white col-md-5 g-0">
            <h4 className="product-title">{productTitle}</h4>
            <div
              className="rating"
              style={{ borderBottom: "1px solid rgb(221, 220, 220)" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  <Rating name="read-only" value={4} readOnly />
                  <p className="review-no">
                    {" "}
                    <span className="p_style">90 reviews</span> |{" "}
                    <span className="p_style">110 Answered Questions</span>{" "}
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <p style={{ marginRight: "10px" }}>
                    <ShareIcon className="share_icon" />
                  </p>
                  <p>
                    <FavoriteBorderIcon className="share_icon" />
                  </p>
                </div>
              </div>
              <div className="brand_name_sec">
                <p>
                  <span style={{ fontWeight: "600" }}>Brand: </span>{" "}
                  <span className="p_style">
                    {shopName} | More Product From Nike
                  </span>
                </p>
              </div>
            </div>
            <div className="price_section" style={{ paddingTop: "15px" }}>
              <p>
                Price: <span className="price">${startingPrice}</span>
              </p>
            </div>
            <div className="color_family">
              <p>
                Color Family: <span style={{ marginLeft: "7px" }}>Black</span>
              </p>
              <div className="color_varient">
                <div className="color_varient_item">
                  <img
                    className="color_option"
                    style={{ width: "50px" }}
                    src="https://photos.queens.cz/queens/2021-04/large/nike-air-max-zephyr-111362_1.jpg"
                    alt="color varient"
                  />
                  <p>Black</p>
                </div>
                <div className="color_varient_item">
                  <img
                    className="color_option"
                    style={{ width: "50px" }}
                    src="https://photos.queens.cz/queens/2021-04/large/nike-air-max-zephyr-111362_1.jpg"
                    alt="color varient"
                  />
                  <p>Blue</p>
                </div>
                <div className="color_varient_item">
                  <img
                    className="color_option"
                    style={{ width: "50px" }}
                    src="https://photos.queens.cz/queens/2021-04/large/nike-air-max-zephyr-111362_1.jpg"
                    alt="color varient"
                  />
                  <p>Green</p>
                </div>
              </div>
            </div>
            <div
              className="quantity"
              style={{
                display: "flex",
                borderBottom: "1px solid rgb(221, 220, 220)",
                paddingTop: "20px",
              }}
            >
              <div>
                <p>
                  Quantity <br /> <small>Minimum Order Quantity is 1</small>
                </p>
              </div>
              <form
                action=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "10px",
                }}
              >
                <p className="quantity_control">
                  <Remove />
                </p>
                <p>
                  <input
                    className="form-control"
                    style={{
                      textAlign: "center",
                    }}
                    value={1}
                    type="text"
                  />
                </p>
                <p className="quantity_control">
                  <ControlPointIcon />
                </p>
              </form>
            </div>
            <div
              className="size"
              style={{ display: "flex", paddingTop: "20px" }}
            >
              <p>Size EU</p>
              <p className="size_option">39</p>
              <p className="size_option">40</p>
              <p className="size_option">41</p>
              <p className="size_option">42</p>
            </div>
            <div
              className="btn_group"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <div className="w-100">
                <Link to="/checkout_here">
                  <Button
                    fullWidth
                    style={{ backgroundColor: "#346ccd", marginRight: "10px" }}
                    variant="contained"
                  >
                    Buy Now
                  </Button>
                </Link>
              </div>
              <div className="w-100">
                <Button
                  fullWidth
                  style={{ backgroundColor: "#f57224", marginRight: "10px" }}
                  variant="contained"
                  onClick={() => setGroupBuy(!GroupBuy)}
                >
                  Group Buy
                </Button>
                <div
                  className="bg-light p-1"
                  style={{ display: `${GroupBuy ? "block" : "none"} ` }}
                >
                  <div style={{ width: "100%", display: "flex" }}>
                    <div style={{ display: "flex" }}>
                      <p className="quantity_control">
                        <Remove />
                      </p>
                      <p>
                        <input
                          className="form-control"
                          style={{
                            textAlign: "center",
                          }}
                          value={10}
                          type="text"
                        />
                      </p>
                      <p className="quantity_control">
                        <ControlPointIcon />
                      </p>
                    </div>
                    <div>
                      <p>
                        <input
                          className="form-control"
                          style={{
                            textAlign: "center",
                          }}
                          value={"$100"}
                          type="text"
                        />
                      </p>
                    </div>
                  </div>
                  <small className="m-0 p-0">
                    For group buy, minimum order quantity is 10.
                  </small>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button
                      fullWidth
                      style={{
                        textTransform: "capitalize",
                        color: "white",
                        background: "grey",
                        margin: "1px",
                        height: "40px",
                        fontSize: "10px",
                      }}
                    >
                      Initial Group Order
                    </Button>
                    <Button
                      fullWidth
                      style={{
                        textTransform: "capitalize",
                        color: "white",
                        background: "grey",
                        margin: "1px",
                        height: "40px",
                        fontSize: "10px",
                      }}
                    >
                      Join Existing
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rigt_side_section col-md-3 bg-light h-100">
            <p>Delivery Options</p>
            <div className="delivery_address ">
              <p>
                <LocationOnIcon />
              </p>
              <p>America, San Fransisco - Soomona Anpa, Block 15</p>
            </div>
            <div className="delivery_address">
              <p>
                <HomeIcon />
              </p>
              <p>Home Delivery - 7-12 Days</p>
            </div>
            <div className="delivery_address">
              <p>
                <MonetizationOnRoundedIcon />
              </p>
              <p>Cash on Delivery Available</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p>Return & warranty</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  paddingLeft: "10px",
                  color: "rgb(122, 122, 122)",
                }}
              >
                <p style={{ width: "30px", opacity: "60%" }}>
                  <img src={ReturnIcon} alt="image" />
                </p>
                <p className="mt-1">7 Days Easy Returns</p>
              </div>
              <div className="delivery_address" style={{ paddingTop: "0px" }}>
                <p>
                  <DoNotDisturbAltRoundedIcon />
                </p>
                <p>Warranty not Available</p>
              </div>
            </div>
            <Button
              fullWidth
              style={{ backgroundColor: "grey", color: "white" }}
            >
              <ForumRoundedIcon /> Chat Now
            </Button>
            <div className="seller_info w-100">
              <p>Sold By</p>
              <Link to={`/seller_store/${sellerEmail}`}>
                <p className="p_style">{shopName}</p>
              </Link>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  textAlign: "center",
                }}
              >
                <div
                  className="seller_positive_rating "
                  style={{
                    padding: "5px",
                    borderRight: "2px solid rgb(221, 220, 220)",
                    borderBottom: "1px solid grey",
                  }}
                >
                  <p>Positive Seller Ratings</p>
                  <p>
                    <span>98</span>%
                  </p>
                </div>
                <div
                  className="ship_on_time_rating "
                  style={{
                    padding: "5px",
                    borderRight: "2px solid rgb(221, 220, 220)",
                    borderBottom: "1px solid grey",
                  }}
                >
                  <p>Ship on time</p>
                  <p>
                    <span>96</span>%
                  </p>
                </div>
                <div
                  className="chat_response_rating "
                  style={{
                    padding: "5px",
                    borderRight: "2px solid rgb(221, 220, 220)",
                    borderBottom: "1px solid grey",
                  }}
                >
                  <p>Chat Response</p>
                  <p>
                    <span>91</span>%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-5">
        <Button
          onClick={() => setCompanyDetails(true)}
          style={{
            marginRight: "5px",
            backgroundColor: "#346ccd",
            color: "white",
            textTransform: "capitalize",
          }}
        >
          Product Details
        </Button>
        <Button
          onClick={() => setCompanyDetails(false)}
          style={{
            backgroundColor: "#d0d0d0",
            color: "grey",
            textTransform: "capitalize",
          }}
        >
          Company Details
        </Button>
      </div>
      <div className="container-fluid">
        <div
          className="row pt-1"
          style={{ borderRadius: "15px", color: "grey" }}
        >
          <div className="col-md-8">
            <div className="container">
              <div className="row">
                {companyDetails ? (
                  <div className="product_details_section col-md-12 bg-light round">
                    <h6 className="mt-3" style={{ textAlign: "center" }}>
                      Product details of <span>{productTitle}</span>{" "}
                    </h6>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6">
                          <ul>
                            <li>Applicable Age: Youth</li>
                            <li>Condition: New</li>
                            <li>Source: Sports</li>
                            <li>Heel: 1.96 Inch</li>
                            <li>Initial Increase</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <h6>Description:</h6>
                          <p>
                            {" "}
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Veniam, neque delectus vero incidunt nisi
                            omnis maxime ab sed! Obcaecati, doloribus.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquam quaerat soluta a temporibus nihil,
                            accusamus magnam. Impedit autem assumenda, nisi nam
                            deserunt repellat doloribus, officiis dicta nemo cum
                            facere blanditiis quibusdam optio consequatur
                            nesciunt tempore?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="company_details col-md-12 bg-light round">
                    <h6
                      className="mt-3 text-dark"
                      style={{ textAlign: "center" }}
                    >
                      Company Album
                    </h6>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-12">
                          <ContentSwiper data={{ slideData }} />
                        </div>
                        <div className="col-md-12 mt-2">
                          <h6>Description:</h6>
                          <p>
                            {" "}
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Veniam, neque delectus vero incidunt nisi
                            omnis maxime ab sed! Obcaecati, doloribus.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquam quaerat soluta a temporibus nihil,
                            accusamus magnam. Impedit autem assumenda, nisi nam
                            deserunt repellat doloribus, officiis dicta nemo cum
                            facere blanditiis quibusdam optio consequatur
                            nesciunt tempore?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="buyer_review_section col-md-12 mt-3 bg-light round">
                  <h6
                    className="w-100 bg-white p-1"
                    style={{ color: "black", fontWeight: "600" }}
                  >
                    Buyer Review
                  </h6>
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
                                textAlign: "center",
                                width: "13%",
                                backgroundColor: "#ffd101",
                              }}
                            ></div>
                            1%
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
                <div className="product_review_section mb-2 col-md-12 bg-light mt-3 pb-3 round">
                  <h6 className="bg-white p-1 text-dark">Product Reviews</h6>
                  <div
                    className="p-2 mt-1"
                    style={{ border: "1px solid rgb(221, 220, 220)" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="d-flex">
                        <h6>Wiliam Sccot</h6>
                        <img
                          className="ml-2"
                          style={{ width: "30px", height: "22px" }}
                          src="data:image/png;base64,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"
                          alt="image"
                        />
                        <small className="ml-2">America</small>
                      </div>
                      <p>20/7/2021</p>
                    </div>
                    <p>
                      <Rating value={5} />
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi dolorum eum alias ipsa minus ea dolor culpa sequi
                      dicta id non delectus incidunt, fugiat deleniti?
                    </p>
                  </div>
                  <div
                    className="p-2 mt-1"
                    style={{ border: "1px solid rgb(221, 220, 220)" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="d-flex">
                        <h6>Wiliam Sccot</h6>
                        <img
                          className="ml-2"
                          style={{ width: "30px", height: "22px" }}
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAA1VBMVEX///+/CzAAJ2i+ACrKUWG9ACPZjZa+ACzGLUndjpr77vG7ABW8AB7DHj7jo63/+/y6AAzNUmby0NaZEj3o6OgACl4AIGUAAFu7w9KLFUQAGWIAI2YAHGMAIWUAEWAAFmFHVoKBiaXh4ugAAFXq8PAACF7PgYoAAFRjc5cAKmrK0NwAEl8tQ3eFkaxKXYioscSKAD2fb4YSM2/S1uCwt8hldJg3S32cpbtvfZ6BiaTM0d3l2NtTZY4fOnKeqL0RMG2TQ2KxoLTfvMKnf5fWlJ6PIU29QFqJ7gt6AAAJOklEQVR4nO2ca5faOBKGtZ5kZi+zy85s+xJLtsHYaW6GLKaBMEDPXmb+/0/aErbBRhKVczZ9Oqjr/dKORX3wE6mkKpXEnJfUhx/+cP9ihAgTIULVQeSZP5Zzc5vZzDpE4sn4sXw2N7bdMLMOUZwZ+0pYrGITBz+bmcxsQ+Tt2VaYMJSZb2jy+qwI3wgid8UmBg78wJhppMVHVprwWYRIxK6b5xlj3Hddt9uVpvDGHzC2GMJD3BlSHpi5j2C2VM0sQ+Q9BUGwChhjkxU8dYfbQraljGWyKTi0GHl7+Uaa7WTbQGVkDyJHFOyiY2dERbP00pT1O21i0DJbaAbipx/f379qX+T2s/pLe/u8+5ncPTYUgvCqo8Trxow9afyR98/v718fG3ctkvL0pamjzk7+vqJQ+Mrk7k0np6aHZaISctyA3b+y84zmV9+qm5yiQ/XjkcYh+6tTU6qd06xA9HBGFNdvntVlYFJ7qpWrUkjqkXbQrR7tQuSNwNV4C8YG6kDLS9YbgdfJVETeHMzGGxiE1g60M6J4xbY+B68zUTjwZzZxQgErS3X1OD2ygR/585529WgXojA4OdyQB5HSU0Yb6ae5vy0UZzRdzabwR4Qr3UizC5HjVZ/INS55XA8iXQAXNWZj63vRi8h6RDeSaDea2m22I4q083hFYaY4rItZK3lkOSK+DDTLoErTRd/EiD+3zKxAlBkRhQNmHE9xejTlIMWIjc9m0a/vLJAREQQkT4YcZDRjqQlRHrQXnx/ef3f/0iGKPM8TEJAEPjx4na7E5ZscVtPrEB4i1Szpsd3FzKJ8UUd8Pu/3+xCX9dbwd97O3fPDHl6tU4jXZNu+Y9aXZjKD1Jdma24xIm/b9lZpe2IDZ9xuK9oBiYzyWmZWI3LC50uicXOVI/Iv/LJ11yEJZ3duW/hWDzQZjtWJxmyuRKdxk6gFT6WYbaqm3qg2sxeR4wwrDoUmfk/qAaWmIMGsrLueYz0imNZP2uVqW1zlGXU5SM5rR/QGEMG6kaUy16hZPfoZY0foLQt1aSSeYGxKs8bFW4wI1o0rPwevo3YV6GDZ3vcLptnBhoBjFbvLlG3r1eOnv1ggvbvmmXS4Ub4KlK6SbCYyp+T2MzXM5en2ZHacVGbJv36+f/1bj2h2qLqBO1faonm1aS3GawXRYV0l3+I5b3rV/csQ6Z+LaDQBfXT9m7Zd96/NiL6SLER0q5DvRpuxyT5EobrDcSa0HhlBhIWpyT5EU91WbKVkY85B+mxtyEFahwgWfto91ROGlJkq0cSebQxm1iHKA1ZqAg4pvtYXPUhBQKIverALkfBBSY+xZ/nQZRHDm0eIKlaP8OB2C/nkrx/BbCYf1GIAixCJbSoF/5Z/HjpemwfyXa9qeyg7hXyjxuxBMbMNkRPvW++2HcfMp63vLLthbTLvXdoG2pjt/tVsEoVOWb9JD1e+l18SjdcpSEd4k8ZsptkTsauQj/vV/3jpqxP4tM4ejVRnzpsqtVi7NrKpHFTW51ffqqvq7FeItpoi/ZqspjpLyq58kUwYSs+rOc8xlSlp8DqBphdFPTlaGVPDfusQCXA4xeNAW5HnpuBqxIT1QoUDrBvZZgi2m6n1iNwg67vgddJSLeQ7sGPscb9ge8XhxKtsnjvJsky1I80qRN5GyGWNF2+U74xGVdm5O1ePMISbsXwX5YW21MYqRE4ziDThlie6f9tKeNfcZkQvItsR/f+FfLYj8vpGEJG5qWv26cf713sjIj4zHXGU85g6tzVmy1aRuvjP3+5f/zUiSgq2NPWVaaY7DlJR2bLDOYSxKoxVBQGJ5jjISRCQZKYDw/6ktfi0ApF2k0iEYZhAQLIbwkPYCWu5fOMvGJu78CC0ZuXZzFpEfFAMBgMZwQ8+DwbFvsWIr4vP8BKCsgn85HPRPtXgbaXZom1mLaLocpoTtOqsJcNN27rjtHn7EC0LuM29SJY7nH9wfeQ1Ph+iZZOrIzU8X5zNtlXIYi2iS6IxnSnxiIjqRKOSggRf/VSbrau432JEp30zqUIzt4d1IV+sWRLUeblj3fVsRhStq2Y1M3L5bk1tP3+umtLcfkTywHAwyrSHif0euJqF9jCxrP+b7MGs3sG2GREMmMJPxoHmKhpYN5azqT/q9dT4JId1I6yXguYqmjhgvbuXwV0vU1l2zv1CU8h3PObQR5LnVCl24OOy756cfV3Ix3/7qwXS96KDqFY8yUHFd6hmK56rGwHL+vhs2Jh9+O6H+xeSUrtRrPcl+STL80VfQ/Yh+tJk4nWTsc06RMnRlOJwornxmjVnunkziLinvxzlhGFhzkFOjdesWYcIFn76PVXntCGbGPCJJ91xEDsR+Tum31OtCh9MIw2W0MYLDS1CJCvyhgJW24ehvpBvAwGJLOTLNYV8YNYfagv5LEIkOqdhWWdfmk/aTVeFfB0zTdX2p7/fv+qTREkrY/iw7jgknrdu61t0MyBiWZ6bsrnqkOLVawdYX0FNjOY1ZxVZIK47gztvEo3KrXuR2yQaJ2ONq7Is0h9WjCaP6peKsPpxXzNxDauDxuXQ/rvUmjyjbnISzaWFukK+eqhp6/ftQiQv2mXyizTnOWIYTSmg2Kn4+LIHPY8ZLum1CxGsG7PRELyOppBvmrKAS6+jBmrywPDTsJ8y7VU0diFyd7tx6AgRqKvHaC0v65N3hKrp6jgol4l09pn9iPj2tOfD/a1yb1y0P92654TjrTKaRGM2egM38jUdRONT6lv3tCcbGzPxBma0lxAhIkSE6KSM/eMl9ftPFoi96P7Ka98U91XEXjsb8+2LEKEiRKgIESpChIoQoSJEqAgRqpddOloh9kcSIpbhgdzbVgaxPummHggRJkKEihChIkSoCBEqQoSKEKEiRKgeaHWNKWMf/0S6qY/stS9z+/ZF+SJUhAgVIUJFiFARIlSECBUhQkWIUBEiVLSPhor98mfSTf1CyRBMlC9CRYhQESJUhAgVIUJFiFARIlSECBUhQkX7aKgy9o6EiL32UaZvX5QvQkWIUBEiVIQIFSFCRYhQESJUhAgVLR1RUQCCisJYTHTYChXli1ARIlSECBUhQkWIUBEiVIQIFSFCRZtEqDL28XvSTdFhK1yUL0JFiFARIlSECBUhQkWIUBEiVIQIFSFCRYhQ/Q+DLCwfczJEyAAAAABJRU5ErkJggg=="
                          alt="image"
                        />
                        <small className="ml-2">America</small>
                      </div>
                      <p>20/7/2021</p>
                    </div>
                    <p>
                      <Rating value={5} />
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi dolorum eum alias ipsa minus ea dolor culpa sequi
                      dicta id non delectus incidunt, fugiat deleniti?
                    </p>
                  </div>
                </div>
                <div className="question_section mb-2 col-md-12 bg-light mt-3 pb-3 round">
                  <h6
                    className="bg-white text-dark p-2"
                    style={{ fontWeight: "600", textAlign: "center" }}
                  >
                    Questions about this product
                  </h6>
                  <div className="d-flex" style={{ justifyContent: "center" }}>
                    <form action="">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Ask your Question"
                      />
                    </form>
                    <Button
                      style={{
                        backgroundColor: "#1d5dc7",
                        color: "white",
                        textTransform: "capitalize",
                      }}
                    >
                      Ask Question
                    </Button>
                  </div>
                  <div
                    className="pt-2 pl-2 mt-2"
                    style={{ border: "1px solid rgb(221, 220, 220)" }}
                  >
                    <div className="question d-flex">
                      {/* <p className='w-100' style={{backgroundImage: `url(${ChatIcon})`,backgroundSize: '100%',color: 'black', backgroundRepeat: 'no-repeat', textAlign: 'center'}}>Q</p> */}
                      <p className="mr-2" style={{ color: "#326dcb" }}>
                        <ChatBubbleIcon />
                      </p>
                      <p style={{ color: "black" }}>
                        How many color?
                        <br />
                        <small style={{ color: "grey" }}>
                          William - 4 days ago
                        </small>
                      </p>
                    </div>
                    <div className="answer d-flex">
                      <p className="mr-2">
                        <ChatBubbleIcon />
                      </p>
                      {/* <p className='w-100' style={{backgroundImage: `url(${ChatIcon})`,backgroundSize: '100%',color: 'black', backgroundRepeat: 'no-repeat', textAlign: 'center'}}>Q</p> */}
                      <p style={{ color: "black" }}>
                        We have only four color.
                        <br />
                        <small style={{ color: "grey" }}>Nike -</small>
                      </p>
                    </div>
                  </div>
                  <div
                    className="pt-2 pl-2 mt-2"
                    style={{ border: "1px solid rgb(221, 220, 220)" }}
                  >
                    <div className="question d-flex">
                      {/* <p className='w-100' style={{backgroundImage: `url(${ChatIcon})`,backgroundSize: '100%',color: 'black', backgroundRepeat: 'no-repeat', textAlign: 'center'}}>Q</p> */}
                      <p className="mr-2" style={{ color: "#326dcb" }}>
                        <ChatBubbleIcon />
                      </p>
                      <p style={{ color: "black" }}>
                        How many color?
                        <br />
                        <small style={{ color: "grey" }}>
                          William - 4 days ago
                        </small>
                      </p>
                    </div>
                    <div className="answer d-flex">
                      <p className="mr-2">
                        <ChatBubbleIcon />
                      </p>
                      {/* <p className='w-100' style={{backgroundImage: `url(${ChatIcon})`,backgroundSize: '100%',color: 'black', backgroundRepeat: 'no-repeat', textAlign: 'center'}}>Q</p> */}
                      <p style={{ color: "black" }}>
                        We have only four color.
                        <br />
                        <small style={{ color: "grey" }}>Nike -</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 " style={{ textAlign: "center" }}>
            <h6>From The Same Store</h6>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12  col-6">
                  <ProductCar2 />
                </div>
                <div className="col-lg-6 col-md-12  col-6">
                  <ProductCar2 />
                </div>
                <div className="col-lg-6 col-md-12  col-6">
                  <ProductCar2 />
                </div>
                <div className="col-lg-6 col-md-12  col-6">
                  <ProductCar2 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
