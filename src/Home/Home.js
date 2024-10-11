import React, { useState, useEffect } from 'react';
import './Home.css';
import Navbar from "../Common/Navbar";
import Slider from "./Slider";
import BestSellers from "../Common/BestSellers";
import BSellers from '../JSON/BestSellers.json'; // Example JSON data structure
import NArrivals from '../JSON/NewArrivals.json'; // Example JSON data structure
import Gym from '../JSON/Gym.json'; 
import HomeImage from "./HomeImage";
import Footer from "../Common/Footer";
import HomeVid from './HomeVid';
import g1 from '../Media/g1.jpg';
import g2 from '../Media/g2.jpg';
import g3 from '../Media/g3.jpg';
import ImagesHome from './ImagesHome';

// Import all images from the media folder
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../Media', false, /\.(png|jpe?g|svg)$/));

const Home = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [gyms, setGyms] = useState([]);
  

  useEffect(() => {
    const bestSellersWithImages = BSellers.map(item => ({
      ...item,
      pic: images[item.pic],
    }));

    const newArrivalsWithImages = BSellers.map(item => ({
      ...item,
      pic: images[item.pic],
    }));
    const gymssWithImages = BSellers.map(item => ({
      ...item,
      pic: images[item.pic],
    }));

    setBestSellers(bestSellersWithImages);
    setNewArrivals(newArrivalsWithImages);
    setGyms(gymssWithImages);
  }, []);

  const bestSellerCartStyle = {
    width: '20vw',
    height: '60vh'
  };

  const newArrivalsCartStyle = {
    width: '26vw',
    height: '70vh'
  };

const articleBtnStyle = {
  carouselButton1: {
      position: 'absolute',
      top: '200vh',
      left: '22vw',
      width:'30vw',
      fontSize: '2.75vh'
  },
  carouselButton2: {
      position: 'absolute',
      top: '150vh',
      left: '64vw',
      width: '34vh',
      fontSize: '2.15vh'
  },
  carouselButton3: {
      position: 'absolute',
      top: '205vh',
      left: '64vw',
      width: '34vh',
      fontSize: '2vh'
  }
};

const articles = [
  {
      msg: "CERTIFIED FITNESS TRAINERS",
      img: g1
  },
  {
      msg: "TOP FITNESS BRANDS",
      img: g2
  },
  {
      msg: "300+ WEEKLY CLASSES",
      img: g3
  }
];


  return (
    <div className="Home">
      <Navbar />
      {/* <ImagesHome data={buttonMsg} style={btnStyle} /> */}

      {/* <Slider /> */}
      <HomeVid/>
      <ImagesHome data={articles} style={articleBtnStyle} />
      {/* <BestSellers imgs={gyms} perPage={3} head="OUR LOCATIONS" className="new-arrivals-cart" style={newArrivalsCartStyle} /> */}
      {/* <BestSellers imgs={newArrivals} perPage={3} head="NEW ARRIVALS" className="new-arrivals-cart" style={newArrivalsCartStyle} /> */}
      <BestSellers imgs={bestSellers} perPage={4} head="OUR LOCATIONS" className="best-sellers-cart" style={bestSellerCartStyle} />
      <HomeImage/>
      {/* <BestSellers imgs={bestSellers} perPage={4} head="EXPLORE BEST SELLERS" className="best-sellers-cart" style={bestSellerCartStyle} /> */}
      
      <Footer />
    </div>
  );
};

export default Home;
