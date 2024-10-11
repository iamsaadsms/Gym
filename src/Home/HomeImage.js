import React from "react";
import './HomeImage.css';
import s2 from '../Media/s2.jpg'
import locgym from '../Media/locgym.jpg'
import Button from "../Common/Button";
const HomeImage = () => {
    let homeBtn = {
        position: 'absolute',
        top: '385vh',
        right: '40vw',
        width: '15vw',
        height: '6vh'
    }
    return(
        <div className="HomeImage">
            <img src={locgym} className="h-img" alt="HomeImage" />
            <Button data={'JOIN NOW'} style={homeBtn}/>
        </div>
    )
}

export default HomeImage;