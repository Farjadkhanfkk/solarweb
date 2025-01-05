'use client'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'; // You can choose different icons

const testimonialsData = [
  {
    name: "Ahmad",
    review: "SPower provided an exceptional service that exceeded our expectations. Highly recommend!",
  },
  {
    name: "Ibrahim",
    review: "Their commitment to quality and sustainability is unmatched. We are thrilled with the results!",
  },
  {
    name: "Saad",
    review: "Fantastic experience from start to finish. The team was professional and attentive!",
  },
];

const Testimonials = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{ overflow: 'hidden', marginTop: '60px', backgroundColor: 'rgba(255, 255, 255, 1)' }} // 60px margin top
    >
      <div className="container text-center">
        <h1 style={{ color: '#6cbf45', fontSize: '53px' }}>What Our Clients Say About Us</h1> {/* Green color */}
        <h6 style={{ marginBottom: '40px', marginTop: '40px', fontSize: '18px' }}>Our Testimonials</h6>
        <div className="row g-4">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
              style={{
                opacity: 0,
                transform: index % 2 === 0 ? 'translateX(-20px)' : 'translateX(20px)',
                animation: `fadeIn 0.5s forwards ${0.3 + index * 0.1}s`,
              }}
            >
              <div
                className="card shadow-sm border-0 rounded overflow-hidden"
                style={{
                  transition: 'transform 0.3s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <div
                  className=" justify-content-center "
                  style={{ height: '300px', fontSize:'10rem' }} // Set a fixed height for the card
                >
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    size="15x" // Use "15x" for size 15rem (1x = 1rem)
                    className="text-muted"
                    style={{
                      borderRadius: '50%',
                      background: '#f0f0f0',
                      padding: '20px',
                    }}
                  />
                  {/* Avatar Icon */}
                </div>
                <div className="card-body">
                  <h5 className="text-center">{testimonial.name}</h5>
                  <h6 className="text-muted text-center">{testimonial.title}</h6>
                  <p className="card-text" style={{ lineHeight: '1.6' }}>
                    {testimonial.review}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
