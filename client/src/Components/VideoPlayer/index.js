import React, { Component } from 'react'
import { MDBCol, MDBRow } from "mdbreact";
import "./index.css"



class VideoPlayer extends Component {

  render() {
    return <div className="css_VideoContainer">
      <MDBRow className="css_VideoRow">
        <MDBCol>
            <div className="embed-responsive embed-responsive-16by9 css_VideoBorder">
              <iframe title="MusicVideo" className="embed-responsive-item" src="https://www.youtube.com/embed/O2LkciiENX0?autoplay=0&amp;rel=0&amp;vq=hd1080" allowFullScreen={true}></iframe>
            </div>
           

        </MDBCol>
      </MDBRow>
    </div>
  }
}


export default VideoPlayer;
