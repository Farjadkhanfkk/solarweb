'use client'
import React, { useEffect, useState } from 'react';
import { FaUser, FaCheckCircle, FaTrophy } from 'react-icons/fa';

const HappyCustomers = () => {
  const stats = [
    { count: 3453, label: 'Happy Customers', icon: <FaUser size={80} color="#6cbf45" /> },
    { count: 4234, label: 'Project Done', icon: <FaCheckCircle size={80} color="#6cbf45" /> },
    { count: 3123, label: 'Awards Win', icon: <FaTrophy size={80} color="#6cbf45" /> },
  ];

  const [counters, setCounters] = useState(stats.map(stat => ({ ...stat, displayCount: 0 })));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prevCounters =>
        prevCounters.map(stat => {
          if (stat.displayCount < stat.count) {
            return { ...stat, displayCount: Math.min(stat.displayCount + Math.floor(stat.count / 100), stat.count) };
          }
          return stat;
        })
      );
    }, 30);

    const timeout = setTimeout(() => clearInterval(interval), 3000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div style={{ marginTop: '60px' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h1 style={{ fontSize: '53px', color: '#6cbf45' }}>Customer Satisfaction</h1>
          <h6 style={{ color: '#6c757d', fontSize:'18px' }}>
            Our success is measured by the satisfaction of our clients, who have experienced firsthand the transformative impact of our services.
          </h6>
        </div>

        <div className="row">
          {counters.map((stat, index) => (
            <div className="col-12 col-md-4 mb-4" key={index}>
              <div
                className="card shadow-sm text-center p-4"
                style={{
                  height: '100%',
                  borderRadius: '8px',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <div className="mb-3">{stat.icon}</div>
                <h1 style={{ margin: '0', fontSize: '2rem' }}>{stat.displayCount}</h1>
                <h5 style={{ margin: '0.5rem 0', fontSize: '1.25rem' }}>{stat.label}</h5>
                <p style={{ color: '#6c757d' }}>
                  {stat.label === 'Happy Customers' && (
                    <>Our commitment to quality and service has led us to create lasting relationships with our clients.</>
                  )}
                  {stat.label === 'Project Done' && (
                    <>With over 4,200 projects successfully completed, we deliver innovative solutions that enhance customer experience.</>
                  )}
                  {stat.label === 'Awards Win' && (
                    <>Our dedication to excellence has garnered numerous awards, reflecting our commitment to sustainability.</>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HappyCustomers;
