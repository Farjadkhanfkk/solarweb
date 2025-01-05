'use client'
import React, { useState, useEffect } from 'react';
import ContactForm from '../components/contactform/page';
import Navbar from '../components/mynavbar/page';
import Footer from '../components/Footer/page';

function Page() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Set the state based on screen width
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // You can adjust the width threshold here
    };

    handleResize(); // Check screen size on initial render
    window.addEventListener('resize', handleResize); // Add event listener for screen resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Navbar />

      {/* Main content area, grows to take available space and prevent overlap with footer */}
      <div
        style={{
          flex: 1,
          paddingBottom: '60px',
          marginBottom: isSmallScreen ? '700px' : '0', // Apply marginBottom only on small screens
        }}
      >
        <ContactForm />
      </div>

      {/* Footer, stays at the bottom */}
      <Footer />
    </div>
  );
}

export default Page;
