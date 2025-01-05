'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import carousel1 from './assets/carousel-1.png';
import carousel2 from './assets/carousel-2.jpg';
import Image4 from './assets/image-4.jpg';
import Logo from '../../../../public/assets/logo.png';

const images = [
  {
    src: Image4,
    alt: 'Carousel 1',
  },
  {
    src: carousel2,
    alt: 'Carousel 2',
  },
  {
    src: carousel1,
    alt: 'Carousel 3',
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false); // State to control modal visibility

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, []);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="col-12">
      <div style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '800px' }}>
        <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 10 }}>
          <Image 
            src={Logo} 
            alt="Logo" 
            width={200} 
            height={200} 
          />
        </div>
        <div style={{ display: 'flex', transition: 'transform 0.5s ease', width: '100%', height: '100%', transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div 
              key={index} 
              style={{ 
                minWidth: '100%', 
                height: '100%', 
                opacity: index === currentIndex ? 1 : 0, 
                transition: 'opacity 0.5s ease', 
                position: 'relative' 
              }}
            >
              <Image 
                src={image.src} 
                alt={image.alt} 
                layout="fill" 
                objectFit="cover" 
              />
              <div style={{ position: 'absolute', top: '20%', left: '5%', textAlign: 'left', color: 'white', padding: '1rem', borderRadius: '10px' }}>
                <h1 style={{ fontWeight: 'bold', fontSize: "60px", color: 'white' }}>
                  Almas Solar for<br />Commercial, Residential,<br /> and Agricultural Needs
                </h1>
                <button onClick={openModal} style={{ marginTop: '1rem', backgroundColor: 'rgba(13, 3, 3, 0.486)', border: '1px solid white', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '5px', cursor: 'pointer' }}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        <button style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', backgroundColor: 'rgba(0, 0, 0, 0.9)', border: 'none', color: 'white', fontSize: '2rem', padding: '0.5rem', cursor: 'pointer' }} onClick={prevSlide}>
          <span aria-hidden="true">❮</span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', backgroundColor: 'rgba(0, 0, 0, 0.9)', border: 'none', color: 'white', fontSize: '2rem', padding: '0.5rem', cursor: 'pointer' }} onClick={nextSlide}>
          <span aria-hidden="true">❯</span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Modal for Learn More */}
      {isModalOpen && (
          <div style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            zIndex: 1000 
          }}>
            <div style={{ 
              background: 'rgba(0, 0, 0, 0.9)', // Black transparent background for the modal
              padding: '30px', 
              borderRadius: '10px', 
              textAlign: 'center', 
              color: 'white' // White text for visibility
            }}>
              <h2 style={{ fontSize: '40px' }}>Welcome to Almas Solar</h2>
              <p style={{ fontSize: '20px' }}>We provide innovative solar panel solutions for residential, commercial, and agricultural needs.</p>
              <p style={{ fontSize: '20px' }}>Our mission is to harness the power of the sun to offer sustainable energy solutions.</p>
              <button onClick={closeModal} style={{ 
                marginTop: '20px', 
                backgroundColor: 'rgba(255, 255, 255, 0.2)', // Light transparent background for the button
                color: 'white', 
                border: 'none', 
                padding: '10px 20px', 
                cursor: 'pointer' 
              }}>
                Close
              </button>
            </div>
          </div>
      )}
    </div>
  );
};

export default Carousel;
