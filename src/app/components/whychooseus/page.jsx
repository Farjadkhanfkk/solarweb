import React from 'react';
import Image from 'next/image'; // Using Next.js Image component for optimized images
import featureImage from './assets/feature.jpg'; // Ensure you have the image in the specified path

const WhyChooseUs = () => {
  return (
    <div className="container-fluid overflow-hidden my-5 px-lg-0" style={{
      backgroundColor: 'rgba(255, 255, 255, 1)', // Set background color to white
    }}>
      <div
        className="container feature px-lg-0"
        style={{
          minWidth: '1580px',
          marginTop: '60px',
          backgroundColor: 'rgba(255, 255, 255, 1)',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 -2px 4px rgba(0, 0, 0, 0.0)', // Set background color to white
        }}
      >
        <div className="row g-0 mx-lg-0">
          <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="p-lg-5 ps-lg-0">
              <h1 style={{ color: '#6cbf45', fontSize: '43px' }}>Why Choose Us!</h1>
              <h6 className="mb-4">Complete Commercial & Residential Solar Systems</h6>
              <p className="mb-4 pb-2">
                Choose us for your solar energy needs, and join us in creating a sustainable future while enjoying the benefits of clean, renewable energy.
              </p>
              <div className="row g-4">
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div className="btn-lg-square bg-success rounded-circle">
                      <i className="fa fa-check text-white"></i>
                    </div>
                    <div className="ms-4">
                      <p className="mb-0">Quality</p>
                      <h5 className="mb-0">Services</h5>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div className="btn-lg-square bg-success rounded-circle">
                      <i className="fa fa-user-check text-white"></i>
                    </div>
                    <div className="ms-4">
                      <p className="mb-0">Expert</p>
                      <h5 className="mb-0">Workers</h5>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div className="btn-lg-square bg-success rounded-circle">
                      <i className="fa fa-drafting-compass text-white"></i>
                    </div>
                    <div className="ms-4">
                      <p className="mb-0">Free</p>
                      <h5 className="mb-0">Consultation</h5>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div className="btn-lg-square bg-success rounded-circle">
                      <i className="fa fa-headphones text-white"></i>
                    </div>
                    <div className="ms-4">
                      <p className="mb-0">Customer</p>
                      <h5 className="mb-0">Support</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pe-lg-0 wow fadeIn" data-wow-delay="0.5s" style={{ position: 'relative', height: '400px' }}>
            {/* Parent container is set to relative and full height */}
            <div className="position-relative w-100 h-100">
              {/* Image set to fill the parent container */}
              <Image
                src={featureImage}
                alt=""
                layout="fill" // Fill the container
                objectFit="cover" // Make sure the image covers the whole area without distortion
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
