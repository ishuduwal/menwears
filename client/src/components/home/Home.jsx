import React, { useState, useEffect } from 'react';
import './Home.scss';
import img1 from '../../assets/watch/img1.png';
import img2 from '../../assets/watch/img2.png';
import img3 from '../../assets/watch/img3.png';
import img4 from '../../assets/watch/img4.png';
import img5 from '../../assets/watch/img5.png';

export const Home = () => {
  const images = [img1, img2, img3, img4, img5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <>
    <div className='home'>
      <div className='watch-container'>
        <p>Style , elegance, and<br/> time—all yours.</p>
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      </div>
    </div>
    </>
  );
};
