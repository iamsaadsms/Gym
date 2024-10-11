import React from "react";
import './HomeVid.css';
import s2 from '../Media/s2.jpg'
import Button from "../Common/Button";
import mainvid from '../Media/gym.mp4'
const HomeVid = ({media}) => {
    let homeBtn = {
        position: 'absolute',
        top: '75vh',
        right: '40vw',
        width: '18vw',
        height: '7vh'
    }
    return(
        <div className="HomeVid">
            <video autoPlay muted  src={mainvid} className="h-img" alt="HomeVid"  loop/>
            <Button data={'JOIN NOW'} style={homeBtn}/>
        </div>
    )
}

export default HomeVid;