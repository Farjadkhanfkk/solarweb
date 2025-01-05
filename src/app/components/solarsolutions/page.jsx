import React from 'react';
import Pic1 from './asstes/editone3.png';
import Pic2 from './asstes/service-details-1.jpg';
import Pic3 from './asstes/service-details-2.jpg';
import Pic4 from './asstes/icon23.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Logo from '../../../../public/assets/logo.png';

const ServiceSection = () => {
    return (
        <div>
            {/* Top section with background image */}
            <section
                style={{
                    backgroundImage: `url(${Pic1.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    padding: '100px 0',
                    height: '500px',
                    color: 'white',
                    textAlign: 'center',
                }}
            >
                {/* Logo in the top-left corner */}
                <img
                    src={Logo.src}
                    alt="Logo"
                    style={{
                        position: 'absolute',
                        top: '30px', // Adjusted to give some space from the top
                        left: '30px', // Positioned to the left
                        width: '200px',
                    }}
                />
                {/* Title and subtitle */}
                <div style={{ paddingTop: '55px' }}> {/* Added padding to give space from the logo */}
                    <h1 style={{ margin: 0, fontSize: '53px' }}>Almas Solar Solutions</h1>
                    <h3 style={{ margin: 0, fontSize: '18px' }}>Our Services</h3>
                </div>
            </section>

            {/* Main content section */}
            <div className='container-fluid'>
                <div className="row" style={{ marginTop: '115px' }}>
                    {/* Sidebar section */}
                    <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
                        <div style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '10px', borderRadius: '8px' }}>
                            {/* Sidebar content */}
                            <div className='mt-5'>
                                <div className='p-4' style={{ backgroundColor: "rgb(255, 113, 42)" }}>
                                    <h3 className='text-white' style={{ fontSize: '40px', fontWeight:"900px"}}>SOLAR PANEL</h3>
                                </div>
                                <div className='p-4 mt-3' style={{ backgroundColor: "rgb(255, 113, 42)" }}>
                                    <h3 className='text-white' style={{ fontSize: '40px'}}>Renewable Energy</h3>
                                </div>
                                <div className='p-4 mt-3' style={{ backgroundColor: "rgb(255, 113, 42)" }}>
                                    <h3 className='text-white' style={{ fontSize: '40px'}}>Repair & Maintenance</h3>
                                </div>
                                <div className="text-center p-4 rounded mt-4" style={{ backgroundColor: "rgb(89, 183, 63)" }}>
                                    <i className="fa fa-headphones fa-2x mb-3" style={{ color: '#fff' }}></i>
                                    <h1 className="text-white " style={{ fontSize: '30px'}}>Have Any Questions?</h1>
                                    <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px' }}>
                                        <li style={{ color: '#fff' }}>
                                            <i className="fa fa-phone" style={{ marginRight: '8px' }}></i>
                                            <a href="tel:+17162097873" style={{ color: '#fff', textDecoration: 'none' }}>+1 (716) 209-7873</a>
                                        </li>
                                        <li style={{ color: '#fff', marginTop: '8px' }}>
                                            <i className="fa fa-phone" style={{ marginRight: '8px' }}></i>
                                            <a href="tel:+92336100000470" style={{ color: '#fff', textDecoration: 'none' }}>+92 336 100000 470</a>
                                        </li>
                                        <li style={{ color: '#fff', marginTop: '8px' }}>
                                            <i className="fa fa-envelope-open" style={{ marginRight: '8px' }}></i>
                                            <a href="mailto:jjimtiaz75@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>jjimtiaz75@gmail.com</a>
                                        </li>
                                        <li style={{ color: '#fff', marginTop: '8px' }}>
                                            <i className="fa fa-map-marker" style={{ marginRight: '8px' }}></i>
                                            DHA Phase 2, Sector H, Islamabad, Pakistan
                                        </li>
                                    </ul>
                                </div>

                                <div className="text-center p-4 rounded mt-4" style={{ backgroundColor: "rgb(89, 183, 63)" }}>
                                    <h1 className="text-white"style={{ fontSize: '25px'}}>Follow Us</h1>
                                    <div style={{ marginTop: '15px' }}>
                                        <a href="https://www.facebook.com/profile.php?id=61566737597854&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-facebook fa-2x mx-3" style={{ color: '#fff' }}></i>
                                        </a>
                                        <a href="https://www.instagram.com/p/DBl81hGTBqp/?igsh=MXhxZHBsZHYwNHBweA==" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-instagram fa-2x mx-3" style={{ color: '#fff' }}></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right content section */}
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div>
                            <div style={{ marginBottom: '20px' }}>
                                <img src={Pic2.src} className="img-fluid" style={{ width: '100%' }} alt="Service Details" />
                            </div> 
                            <h1 className='mt-4' style={{ marginBottom: '15px', fontSize: '40px' }}>Solar Solutions</h1>
                            <p style={{ marginBottom: '20px', fontSize: '18px' }}>
                                Almas Solar offers comprehensive energy solutions tailored to meet residential, commercial, and agricultural needs. Our services ensure high efficiency, cost savings, and sustainability for various sectors. With advanced solar technology, we empower clients to achieve energy independence and reduce environmental impact.
                            </p>

                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <h2 style={{ marginBottom: '15px' }}>Service Overview</h2>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        <li style={{ marginBottom: '10px', fontSize: '18px' }}>
                                            <i className="fa fa-check" style={{ color: '#888', marginRight: '8px' }}></i>
                                            A roadmap for energy independence
                                        </li>
                                        <li style={{ marginBottom: '10px', fontSize: '18px' }}>
                                            <i className="fa fa-check" style={{ color: '#888', marginRight: '8px' }}></i>
                                            High-efficiency solar panels for all applications
                                        </li>
                                        <li style={{ marginBottom: '10px', fontSize: '18px' }}>
                                            <i className="fa fa-check" style={{ color: '#888', marginRight: '8px' }}></i>
                                            Expert installation and seamless integration
                                        </li>
                                        <li style={{ marginBottom: '10px', fontSize: '18px' }}>
                                            <i className="fa fa-check" style={{ color: '#888', marginRight: '8px' }}></i>
                                            Comprehensive support and maintenance services
                                        </li>
                                        <li style={{ marginBottom: '10px', fontSize: '18px' }}>
                                            <i className="fa fa-check" style={{ color: '#888', marginRight: '8px' }}></i>
                                            Satisfaction and value-driven solutions for every budget
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <img src={Pic3.src} className="img-fluid rounded" alt="Service Overview" />
                                </div>
                            </div>

                            <p className='mt-5' style={{ marginBottom: '20px', fontSize: '18px' }}>
                                Whether you are looking to reduce your energy costs, upgrade your existing solar systems, or explore new renewable energy solutions, Solar Solutions offers the right expertise. Our team is committed to providing quality service and reliable results for all your solar needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
