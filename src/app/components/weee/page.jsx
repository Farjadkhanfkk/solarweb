import React from 'react';
import { FaCalculator, FaTools, FaShieldAlt, FaBolt, FaSun, FaHeadset } from 'react-icons/fa';

const advantagesData = [
  {
    title: "Calculate your Savings",
    description: "With our savings calculator, you can make a right decision on installation of solar panels manufactured by Eco Tech.",
    icon: <FaCalculator style={{ color: '#6cbf45', fontSize: '2.5rem' }} />,
  },
  {
    title: "Installation: How it Works?",
    description: "Learn more about all aspects of the solar panel installation process from our experts and get answers to questions you have.",
    icon: <FaTools style={{ color: '#6cbf45', fontSize: '2.5rem' }} />,
  },
  {
    title: "Our Warranty Policy",
    description: "Our panels and other renewable energy products come with a warranty that protects you against any possible failures of the product.",
    icon: <FaShieldAlt style={{ color: '#6cbf45', fontSize: '2.5rem' }} />,
  },
  {
    title: "Additional Power for your needs",
    description: "Solar panels are perfect if you are looking for a reliable source of additional power and energy for your home or office.",
    icon: <FaBolt style={{ color: '#6cbf45', fontSize: '2.5rem' }} />,
  },
  {
    title: "Reliable Energy Source",
    description: "Solar energy is one of the most reliable energy sources available today. You can also store extra energy for future consumption.",
    icon: <FaSun style={{ color: '#6cbf45', fontSize: '2.5rem' }} />,
  },
  {
    title: "24/7 Customer Support",
    description: "Our company offers free 24/7 support to all our clients who have any questions or issues with the products and services of Eco Tech.",
    icon: <FaHeadset style={{ color: '#6cbf45', fontSize: '2.5rem' }} />,
  },
];

const Advantages = () => {
  return (
    <div className="container-fluid py-5 bg-light" style={{ marginTop: '60px' }}>
      <div className="container-fluid text-center">
        <h1 style={{ color: '#6cbf45', fontSize:'53px' }}>Almas Solar provides a great advantage</h1>
       
        <div className="row g-4 mt-5">
          {advantagesData.map((advantage, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div className="card shadow-sm border-0 rounded text-center p-4 h-100 d-flex flex-column justify-content-between">
                <div className="mb-3">
                  {advantage.icon}
                </div>
                <h5 className="mb-3">{advantage.title}</h5>
                <p className="text-muted">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
