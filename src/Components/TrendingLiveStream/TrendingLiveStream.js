import React from "react";
import ReactPlayer from "react-player";

export default function TrendingLiveStream() {
  return (
    <div className='bg-light'>
      <div className="trending_header">
        <p>trending on imponexpo Livestream</p>
      </div>
      <div className="trending_products container">
        <div className="row">
          <div
            className="col-md-6 col-12 col-lg-3 mb-4"
          >
            <ReactPlayer
              controls={true}
              pip={true}
              className="w-100"
              url="https://youtu.be/6tyCQ2Tp2SQ"
            />
            <p
              style={{
                position: "absolute",
                top: "5px",
                right: "30px",
                zIndex: "1",
                color: "white",
                backgroundColor: 'red',
                padding: '0px 5px',
                borderRadius: '5px'
              }}
            >
              Live
            </p>
          </div>
          <div
            className="col-md-6 col-12 col-lg-3 mb-4"
          >
            <ReactPlayer
              controls={true}
              pip={true}
              className="w-100"
              url="https://www.rmp-streaming.com/media/big-buck-bunny-360p.mp4
              "
            />
            <p
              style={{
                position: "absolute",
                top: "5px",
                right: "30px",
                zIndex: "1",
                color: "white",
                backgroundColor: 'red',
                padding: '0px 5px',
                borderRadius: '5px'
              }}
            >
              Live
            </p>
          </div>
          <div
            className="col-md-6 col-12 col-lg-3 mb-4"
          >
            <ReactPlayer
              controls={true}
              pip={true}
              className="w-100"
              url="https://doc-10-7g-docs.googleusercontent.com/docs/securesc/j7s9bibbsgs3eql81gc65pngpb7seo6l/tgvpvmj1qh1it15ddsu21ce8j2sglibd/1634154825000/14302341046989572955/14302341046989572955/1BDwB6GrBHb1CXihG3qEzMpUIzLJ0Ooi6?e=download&authuser=0&nonce=meguodk04g744&user=14302341046989572955&hash=nun5vgctaulubikbav5jg9aemejbe8eq"
            />
            <p
              style={{
                position: "absolute",
                top: "5px",
                right: "30px",
                zIndex: "1",
                color: "white",
                backgroundColor: 'red',
                padding: '0px 5px',
                borderRadius: '5px'
              }}
            >
              Live
            </p>
          </div>
          <div
            className="col-md-6 col-12 col-lg-3 mb-4"
          >
            <ReactPlayer
              controls={true}
              pip={true}
              className="w-100"
              url="https://doc-10-7g-docs.googleusercontent.com/docs/securesc/j7s9bibbsgs3eql81gc65pngpb7seo6l/tgvpvmj1qh1it15ddsu21ce8j2sglibd/1634154825000/14302341046989572955/14302341046989572955/1BDwB6GrBHb1CXihG3qEzMpUIzLJ0Ooi6?e=download&authuser=0&nonce=meguodk04g744&user=14302341046989572955&hash=nun5vgctaulubikbav5jg9aemejbe8eq"
            />
            <p
              style={{
                position: "absolute",
                top: "5px",
                right: "30px",
                zIndex: "1",
                color: "white",
                backgroundColor: 'red',
                padding: '0px 5px',
                borderRadius: '5px'
              }}
            >
              Live
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
