'use client';

import { useEffect, useState } from 'react';
import { FaBolt, FaCheck, FaExclamationTriangle } from 'react-icons/fa';
import Pic3 from './assets/imp2.png';
import Logo from '../../../../public/assets/logo.png';

const PricingPage = () => {
  const [pricingData, setPricingData] = useState([]); // State to store pricing data

  useEffect(() => {
    // Fetch pricing data from the API (replace with your actual API URL)
    fetch('http://localhost:8000/api/pricing/')  // Ensure this is the correct API URL for Django
      .then((response) => response.json())
      .then((data) => setPricingData(data))
      .catch((error) => console.error('Error fetching pricing data:', error));
  }, []);

  // Static data for titles and images
  const pricingPlans = [
    { title: '5Kw', image: Pic3.src },
    { title: '10Kw', image: Pic3.src },
    { title: '15Kw', image: Pic3.src },
  ];

  return (
    <>
      <section
        style={{
          backgroundImage: `url(${Pic3.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          padding: '100px 0',
          height: '500px',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <img
          src={Logo.src}
          alt="Logo"
          style={{
            position: 'absolute',
            top: '15px',
            left: '15px',
            width: '200px',
          }}
        />
      </section>

      <div className="container-fluid">
        <div className="text-center">
          <h3 className="mt-5 mb-5" style={{ fontSize: '53px' }}>
            Pricing
          </h3>
        </div>

        <div className="row justify-content-center">
          {/* Loop over pricingPlans and pricingData */}
          {pricingPlans.map((plan, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
              <div className="card text-center">
                <div className="card-header bg-success mb-2 p-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <FaBolt className="me-2" size={24} color="yellow" />
                      <span className="fs-4 fw-bold">{plan.title}</span>
                    </div>
                    <p className="mb-0 fs-4" style={{ fontWeight: 'bold' }}>
                      {pricingData[index]?.price} {/* Dynamically render price */}
                    </p>
                  </div>
                </div>
                <img src={plan.image} className="card-img-top" alt="Pricing Plan" />
                <div className="card-body mt-5 p-4" style={{ backgroundColor: 'rgb(219, 255, 230)' }}>
                  <ul className="list-unstyled">
                    {pricingData[index]?.description?.map((point, idx) => (
                      <li key={idx} className="mb-4 d-flex justify-content-center align-items-center">
                        <FaCheck className="text-success me-1" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          <div className="alert alert-warning mt-2" role="alert">
            <FaExclamationTriangle className="me-2" style={{ fontSize: '20px' }} />
            Please note, pricing will vary according to the USD exchange rate
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;
