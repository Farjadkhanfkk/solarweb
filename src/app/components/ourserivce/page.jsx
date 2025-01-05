import Image from 'next/image';
import { FaHome, FaBuilding, FaSeedling } from 'react-icons/fa'; // Importing new icons
import gallery1 from './assets/img-600x400-5.jpg'; // Update the path as needed
import gallery5 from './assets/img-600x400-3.jpg';
import gallery6 from './assets/farmer.jpg';

const OurServices = () => {
  const services = [
    {
      title: 'Residential',
      description: 'Our residential solutions provide sustainable energy options for homeowners, helping them reduce energy costs and promote environmental responsibility. We install tailored systems that fit the specific needs of each household, ensuring optimal performance and efficiency.',
      icon: <FaHome />, // Updated icon
      imgSrc: gallery1,
      delay: '0.1s',
    },
    {
      title: 'Commercial',
      description: 'We offer innovative energy solutions for businesses, empowering them to harness renewable resources and lower operational costs. Our team collaborates with you to design and implement systems that align with your business goals and sustainability initiatives.',
      icon: <FaBuilding />, // Updated icon
      imgSrc: gallery5,
      delay: '0.3s',
    },
    {
      title: 'Agricultural',
      description: 'Our agricultural services enable farms to integrate renewable energy solutions, increasing productivity and reducing reliance on conventional energy sources. We provide systems tailored for the unique challenges of the agricultural sector, promoting sustainability and efficiency.',
      icon: <FaSeedling />, // Updated icon
      imgSrc: gallery6,
      delay: '0.5s',
    },
  ];

  return (
    <div className="container-fluid py-5" style={{ marginTop: '60px' }}>
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
        <h1 style={{ color: '#6cbf45', fontSize: '53px' }}>Our Services</h1>
        <h6 className="mb-4" style={{ fontSize: '18px' }}>Providing Comprehensive Renewable Energy Solutions for a Sustainable Future</h6>
      </div>
      <div className="row g-4 justify-content-center"> {/* Use g-4 for responsive gutter spacing */}
        {services.map((service, index) => (
          <div className="col-12 col-sm-12 col-md-4 wow fadeInUp" data-wow-delay={service.delay} key={index}>
            <div className="service-item rounded overflow-hidden shadow-lg" style={{ width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
              {/* Card head with image */}
              <div style={{ position: 'relative', height: '300px' }}> {/* Set height to 300px */}
                <Image
                  className="img-fluid"
                  src={service.imgSrc}
                  alt={service.title}
                  layout="fill" // Fill the parent container
                  objectFit="cover" // Maintain aspect ratio and cover the area
                  priority // Optional: Use priority for important images
                />
              </div>
              {/* Card body with icon, heading, and description */}
              <div className="p-4" style={{ flex: '1 0 auto' }}>
                <div className="service-icon mb-3" style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', color: '#6cbf45', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {service.icon}
                  </div>
                </div>
                <h4 className="mb-3 text-center" style={{ fontSize: '30px' }}>{service.title}</h4>
                <p className="text-center">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
