import React from "react";
import ReactPlayer from "react-player";
import Carousel from "react-elastic-carousel";
import ProductCardMinimal from "../ProductCardMinimal/ProductCardMinimal";
import Thumbnail1 from "../../Resources/headphone.jpg";
export default function SellerHomepage() {
  return (
    <div>
      <div className="container bg-white p-5">
        <ReactPlayer
          controls={true}
          pip={true}
          className="w-100"
          url="https://youtu.be/6tyCQ2Tp2SQ"
        />
      </div>
      <div className="container bg-white mt-4 p-5">
        <Carousel className="">
          <div>
            <img
              className="w-100"
              style={{ height: "60vh" }}
              src="https://cdn.vox-cdn.com/thumbor/pjcUw1kyqVQA8sbGFd1mz2g9pog=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22406771/Exbfpl2WgAAQkl8_resized.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-100"
              style={{ height: "60vh" }}
              src="https://c.files.bbci.co.uk/44CF/production/_117751671_satan-shoes1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-100"
              style={{ height: "60vh" }}
              src="https://c.files.bbci.co.uk/44CF/production/_117751671_satan-shoes1.jpg"
              alt=""
            />
          </div>
        </Carousel>
      </div>
      <div className="mt-4 container">
        <p className="m-0 pb-3" style={{fontWeight: '580', fontSize: '24px', color: 'grey'}}>Top Rated Product</p>
        <div className="container">
          <div className="row">
              <div className="col-md-3"><ProductCardMinimal Thumbnail1={Thumbnail1}/></div>
              <div className="col-md-3"><ProductCardMinimal Thumbnail1={Thumbnail1}/></div>
              <div className="col-md-3"><ProductCardMinimal Thumbnail1={Thumbnail1}/></div>
          </div>
        </div>
      </div>
      <div className="mt-4 container">
        <p className="m-0 pb-3" style={{fontWeight: '580', fontSize: '24px', color: 'grey'}}>Just For You</p>
        <div className="container">
          <div className="row">
              <div className="col-md-3"><ProductCardMinimal Thumbnail1={Thumbnail1}/></div>
              <div className="col-md-3"><ProductCardMinimal Thumbnail1={Thumbnail1}/></div>
              <div className="col-md-3"><ProductCardMinimal Thumbnail1={Thumbnail1}/></div>
          </div>
        </div>
      </div>
    </div>
  );
}
